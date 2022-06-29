import dayjs from 'dayjs';
import userService from '../services/userService';
import authService from '../services/authService';
import bcryptService from '../services/bcryptService';
import passwordResetService from '../services/passwordResetService';
import emailService from '../services/emailService';
import {
  customErrorsMsg,
  signUpValidation,
  signUpValidationResults,
  loginValidation,
  loginValidationResults,
  currentValidation,
  currentValidationResults,
  forgotPasswordValidation,
  forgotPasswordValidationResults,
  resetPasswordValidation,
  resetPasswordValidationResults,
} from '../constants';
import { Validator } from '../libs/validator';

export default class AuthController {
  async signup(req, res) {
    const { body } = req;
    const validator: Validator = new Validator(
      signUpValidation,
      customErrorsMsg,
    );

    if (validator.validate(body, signUpValidationResults)) {
      try {
        const user = await userService.create({
          username: body.username,
          email: body.email,
          password: body.password,
        });
        const token = authService.issue({ id: user.id });
        return res.status(200).json({ token, user });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
    }

    return res.status(400).json({
      message: 'Validations fail',
      ...signUpValidationResults,
    });
  }

  async login(req, res) {
    const { body } = req;

    const validator: Validator = new Validator(
      loginValidation,
      customErrorsMsg,
    );

    if (validator.validate(body, loginValidationResults)) {
      const { username, password } = req.body;
      try {
        const user = await userService.getByName(username);
        if (!user || bcryptService().comparePassword(password, user.password)) {
          return res.status(401).json({
            errors: true,
            message: 'Incorrect login details',
          });
        }

        const token = authService.issue({ id: user.id });
        return res.status(200).json({ token, user });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
    }

    return res.status(400).json({
      message: 'Validations fail',
      ...loginValidationResults,
    });
  }

  validate(req, res) {
    const { token } = req.body;
    const { body } = req;

    const validator: Validator = new Validator(
      currentValidation,
      customErrorsMsg,
    );

    if (validator.validate(body, currentValidationResults)) {
      authService.verify(token, (err) => {
        if (err) {
          return res
            .status(401)
            .json({ isvalid: false, err: 'Invalid Token!' });
        }

        return res.status(200).json({ isValid: true });
      });
    }

    return res.status(400).json({
      message: 'Validations fail',
      ...currentValidationResults,
    });
  }

  async forgotPassword(req, res) {
    const { body } = req;

    const validator: Validator = new Validator(
      forgotPasswordValidation,
      customErrorsMsg,
    );

    if (validator.validate(body, forgotPasswordValidationResults)) {
      const { email } = body;

      const user = await userService.getByEmail(email);
      if (!user) {
        return res.status(400).json({ message: 'Bad Request: User not found' });
      }

      const reset = await passwordResetService.create(email);
      if (!reset) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Request not found' });
      }

      const { token } = reset;
      emailService.send(
        'info@superblog.com',
        email,
        'Restablecer Contraseña',
        `<div>
          Hola, para finalizar su restablecimiento de contraseña haga click en el siguiente botón
          <form action="http://localhost:3000/reset-password?token=${token}">
            <input type="submit" value="Restablecer contraseña" />
          </form>
        </div>`,
        true,
      );

      return res.status(200).json({ message: 'OK' });
    }

    return res.status(400).json({
      message: 'Validations fail',
      ...forgotPasswordValidationResults,
    });
  }

  async resetPassword(req, res) {
    const { body } = req;

    const validator: Validator = new Validator(
      resetPasswordValidation,
      customErrorsMsg,
    );

    if (validator.validate(body, resetPasswordValidationResults)) {
      const { email, token: sentToken } = req.body;

      const reset = await passwordResetService.get(email);
      if (!reset) {
        return res
          .status(400)
          .json({ message: 'Bad Request: Password change request not found' });
      }

      const { token, created_at } = reset;
      if (token !== sentToken) {
        return res.status(400).json({ message: 'Bad Request: Invalid token' });
      }

      if (dayjs(created_at).diff(Date.now(), 'day') > 2) {
        await passwordResetService.remove(email);
        return res.status(400).json({ message: 'Bad Request: Token expired' });
      }

      const user = await userService.getByEmail(email);
      if (!user) {
        await passwordResetService.remove(email);
        return res.status(400).json({ message: 'Bad Request: User not found' });
      }

      await passwordResetService.remove(email);

      await userService.update(user.id, {
        password: body.password,
      });

      return res.status(200).json({ user });
    }

    return res.status(400).json({
      message: 'Validations fail',
      ...resetPasswordValidationResults,
    });
  }
}
