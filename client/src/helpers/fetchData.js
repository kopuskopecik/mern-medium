import axios from "axios";

export const fetchData = async (path, token) => {
  const response = await axios.get(`${path}`, {
    headers: {
      token,
    },
  });
  console.log(response);
  return response?.data;
};
