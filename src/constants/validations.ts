import type { Rules, TestResults } from '../libs/validator';

export const signUpValidation: Rules = {
  username: {
    name: 'Usuario',
    type: 'username',
    validations: ['required'],
  },
  email: {
    name: 'Email',
    type: 'email',
    validations: ['required'],
  },
  password: {
    name: 'Contraseña',
    type: 'password',
    validations: ['required'],
  },
  password_confirmation: {
    name: 'Confirmar Contraseña',
    type: 'password',
    validations: ['required', 'equal:password'],
  },
};

export const signUpValidationResults: TestResults = {
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
};

export const loginValidation: Rules = {
  username: {
    name: 'Usuario',
    type: 'username',
    validations: ['required'],
  },
  password: {
    name: 'Contraseña',
    type: 'password',
    validations: ['required'],
  },
};

export const loginValidationResults: TestResults = {
  username: '',
  password: '',
};

export const currentValidation: Rules = {
  username: {
    name: 'Usuario',
    type: 'username',
    validations: ['required'],
  },
  password: {
    name: 'Contraseña',
    type: 'password',
    validations: ['required'],
  },
};

export const currentValidationResults: TestResults = {
  username: '',
  password: '',
};

export const forgotPasswordValidation: Rules = {
  email: {
    name: 'Email',
    type: 'email',
    validations: ['required'],
  },
};

export const forgotPasswordValidationResults: TestResults = {
  email: '',
};

export const resetPasswordValidation: Rules = {
  token: {
    name: 'Token',
    type: 'string',
    validations: ['required'],
  },
  email: {
    name: 'Email',
    type: 'email',
    validations: ['required'],
  },
  password: {
    name: 'Contraseña',
    type: 'password',
    validations: ['required'],
  },
  password_confirmation: {
    name: 'Confirmar Contraseña',
    type: 'password',
    validations: ['required', 'equal:password'],
  },
};

export const resetPasswordValidationResults: TestResults = {
  token: '',
  email: '',
  password: '',
  password_confirmation: '',
};
