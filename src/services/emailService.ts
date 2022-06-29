import nodemailer from 'nodemailer';
import emailStreamProducer from './emailStreamProducer';

class EmailService {
  async send(from, to, subject, body, plain = true) {
    try {
      const testAccount = await nodemailer.createTestAccount();

      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      const info = await transporter.sendMail({
        from,
        to,
        subject,
        text: plain ? body : '',
        html: !plain ? body : '',
      });

      console.log('Message sent: %s', info.messageId);

      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      return info;
    } catch (err) {
      console.log('Error: ', err.message);
      return null;
    }
  }

  async batchSend(from, to, subject, body, plain = true) {
    if (await emailStreamProducer.connect()) {
      try {
        await emailStreamProducer.addEmailQueue(from, to, subject, body, plain);
        return true;
      } catch (e) {
        console.log('Add email to queue fail');
      }
    }
    return false;
  }
}

export default new EmailService();
