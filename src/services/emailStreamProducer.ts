import { createClient } from 'redis';
import config from '../config';

const { redisServer } = config;

class EmailStreamProvider {
  client: any;
  ready?: Promise<any>;

  constructor() {
    this.client = createClient({
      url: redisServer,
      socket: {
        reconnectStrategy: (retries) => Math.min(retries * 50, 500),
      },
    });
  }

  connect() {
    try {
      if (!this.ready) {
        this.ready = this.client.connect();
      }
      return this.ready;
    } catch (e) {
      console.log('Create sender fail!');
    }
    return null;
  }

  private async logResult() {
    console.log(
      `Number of email in queue: ${await this.client.xLen('mailing-stream')}.`,
    );
  }

  async addEmailQueue(from, to, subject, body, plain) {
    if (!this.ready) {
      return;
    }
    await this.ready;
    await this.client.xAdd('mailing-stream', '*', {
      message: JSON.stringify({
        from,
        to,
        subject,
        body,
        plain,
      }),
    });
    await this.logResult();
  }

  async quit() {
    if (!this.ready) {
      return;
    }
    await this.ready;
    await this.client.quit();
  }
}

export default new EmailStreamProvider();
