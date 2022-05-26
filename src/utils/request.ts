import axios from 'axios';

const request = () => {
  const get = async (url, config?) => {
    try {
      const { data } = await axios.get(url, config);
      return data;
    } catch (error) {
      const { response } = error;
      console.log('Request Error: ', response.data);
    }
    return null;
  };

  const _delete = async (url, config?) => {
    try {
      const { data } = await axios.delete(url, config);
      return data;
    } catch (error) {
      const { response } = error;
      console.log('Request Error: ', response.data);
    }
    return null;
  };

  const post = async (url, _data?, config?) => {
    try {
      const { data } = await axios.post(url, _data, config);
      return data;
    } catch (error) {
      const { response } = error;
      console.log('Request Error: ', response.data);
    }
    return null;
  };

  const put = async (url, _data?, config?) => {
    try {
      const { data } = await axios.put(url, _data, config);
      return data;
    } catch (error) {
      const { response } = error;
      console.log('Request Error: ', response.data);
    }
    return null;
  };

  return {
    get,
    delete: _delete,
    post,
    put,
  };
};

export default request();
