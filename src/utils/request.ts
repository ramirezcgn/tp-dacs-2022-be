import axios from 'axios';

class Request {
  async get(url, config?) {
    try {
      const { data } = await axios.get(url, config);
      return data;
    } catch (error) {
      const { response } = error;
      console.log('Request Error: ', response?.data);
    }
    return null;
  }

  async delete(url, config?) {
    try {
      const { data } = await axios.delete(url, config);
      return data;
    } catch (error) {
      const { response } = error;
      console.log('Request Error: ', response?.data);
    }
    return null;
  }

  async post(url, _data?, config?) {
    try {
      const { data } = await axios.post(url, _data, config);
      return data;
    } catch (error) {
      const { response } = error;
      console.log('Request Error: ', response?.data);
    }
    return null;
  }

  async put(url, _data?, config?) {
    try {
      const { data } = await axios.put(url, _data, config);
      return data;
    } catch (error) {
      const { response } = error;
      console.log('Request Error: ', response?.data);
    }
    return null;
  }

  withRetry(callback, numberOfRetry, delay, verify?): any {
    return new Promise((resolve, reject) => {
      let attempts = 1;
      const fetchRetry = (number) =>
        callback()
          .then((res) => {
            const { status, data } = res;
            if (verify ? verify(res) : status === 200 || status === 201) {
              return resolve(data || {});
            }
            if (number === 1) {
              throw reject(Error('Error in getting http data'));
            } else {
              console.log(`Retry again: Got back ${status}`);
              console.log(`With delay ${attempts * delay}`);
              setTimeout(() => {
                attempts++;
                fetchRetry(number - 1);
              }, attempts * delay);
            }
            return null;
          })
          .catch((error) => {
            if (number === 1) {
              reject(error);
            } else {
              setTimeout(() => {
                attempts++;
                fetchRetry(number - 1);
              }, attempts * delay);
            }
          });
      fetchRetry(numberOfRetry);
    });
  }
}

export default new Request();
