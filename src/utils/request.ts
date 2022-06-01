import axios from 'axios';

const request = () => {
  const get = async (url, config?) => {
    try {
      const { data } = await axios.get(url, config);
      return data;
    } catch (error) {
      const { response } = error;
      console.log('Request Error: ', response?.data);
    }
    return null;
  };

  const _delete = async (url, config?) => {
    try {
      const { data } = await axios.delete(url, config);
      return data;
    } catch (error) {
      const { response } = error;
      console.log('Request Error: ', response?.data);
    }
    return null;
  };

  const post = async (url, _data?, config?) => {
    try {
      const { data } = await axios.post(url, _data, config);
      return data;
    } catch (error) {
      const { response } = error;
      console.log('Request Error: ', response?.data);
    }
    return null;
  };

  const put = async (url, _data?, config?) => {
    try {
      const { data } = await axios.put(url, _data, config);
      return data;
    } catch (error) {
      const { response } = error;
      console.log('Request Error: ', response?.data);
    }
    return null;
  };

  const withRetry: any = (callback, numberOfRetry, verify?) =>
    new Promise((resolve, reject) => {
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
              console.log(`With delay ${attempts * 3000}`);
              setTimeout(() => {
                attempts++;
                fetchRetry(number - 1);
              }, attempts * 3000);
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
              }, attempts * 3000);
            }
          });
      fetchRetry(numberOfRetry);
    });

  return {
    get,
    delete: _delete,
    post,
    put,
    withRetry,
  };
};

export default request();
