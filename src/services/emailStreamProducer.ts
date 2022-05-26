import { createClient } from 'redis';

export default async function emailStreamProducer() {
  const client = createClient({
    socket: {
      reconnectStrategy: (retries) => Math.min(retries * 50, 500),
    },
  });
  await client.connect();

  const logResult = async () => {
    console.log(
      `Number of email in queue: ${await client.xLen('mailing-stream')}.`,
    );
  };

  const addEmailQueue = async (from, to, subject, body, plain) => {
    await client.xAdd('mailing-stream', '*', {
      message: JSON.stringify({
        from,
        to,
        subject,
        body,
        plain,
      }),
    });
    await logResult();
  };

  const quit = async () => {
    await client.quit();
  };

  return {
    addEmailQueue,
    quit,
  };
}
