import emailStreamProducer from './emailStreamProducer';

let sender;
try {
  sender = await emailStreamProducer();
} catch (e) {
  console.log('Create sender fail!');
}

const emailService = () => {
  const sendEmail = async (from, to, subject, body, plain = true) => {
    if (sender) {
      try {
        await sender.addEmailQueue(from, to, subject, body, plain);
        return true;
      } catch (e) {
        console.log('Add email to queue fail');
      }
    }
    return false;
  };

  return {
    sendEmail,
  };
};

export default emailService;
