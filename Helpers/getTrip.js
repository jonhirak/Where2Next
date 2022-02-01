import axios from "axios";

const getTrip = (userId) => {
  return axios.get(`https://still-tundra-48887.herokuapp.com/trips/${userId}`);
};

export default getTrip;
