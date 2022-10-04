import axios from "axios";

const authServices = {
  verifyToken: async (token) => {
    try {
      const response = await axios.get(
        `${
          process.env.NODE_ENV === "development"
            ? process.env.REACT_APP_MENU_BASE_URL
            : process.env.REACT_APP_MENU_API_URL
        }auth/verify`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return response.data;
    } catch (error) {
    //   console.log(error.response.data);
      return error.response;
    }
  },
};

export default authServices;
