import axios from "axios"

const authServices = {
  verifyToken: async (token) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}auth/verify`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data;
  }
}

export default authServices;