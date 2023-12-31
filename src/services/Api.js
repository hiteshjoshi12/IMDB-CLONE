import axios from "axios";

export const categorymovies =async (API_URL) => {
  try {
    let response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log('Error while calling the api', error.message);
    return error.response.data;

  }
};
