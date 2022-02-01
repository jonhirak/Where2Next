import axios from 'axios';
const _URL = 'https://still-tundra-48887.herokuapp.com';

const helpers = {

  requestValidation: function({ username, password }) {
    return axios.request({
      url: BASE_URL + '/login',
      method: 'get',
      params: {username, password}
    });
  }

};

export default helpers;
