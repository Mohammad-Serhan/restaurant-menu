import axios from "axios"

const authServices = {
  verifyToken: async (token) => {
    const response = await axios.get(`${process.env.API_SERVER}auth/verify`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return response.data;
  }
}

export default authServices;