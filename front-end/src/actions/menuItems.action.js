import axios from "axios";

const apiUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_MENU_BASE_URL
    : process.env.REACT_APP_MENU_API_URL;

export const logInAdmin = async(URL, adminDetails) => {
        try {
        // console.log(`${apiUrl}/${URL}`);
          const response = await axios(`${apiUrl}/${URL}`, {
            method: "post",
            data: adminDetails,
            withCredentials: true,
          });

          return response;
        } catch (error) {
            // console.log(error);
            return error
        }
}


export const logOut = async(URL, token) => {
        try {
        // console.log(`${apiUrl}/${URL}`);
          const response = await axios(
            `${apiUrl}/${URL}`,

            {
              method: "get",
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );

          return response;
        } catch (error) {
            // console.log(error);
            return error
        }
}

export const getMenu = async (URL) => {
  try {
      const response = await axios(apiUrl + URL, {
        method: "get",
        withCredentials: true,
      });

      return response;
  } catch (error) {
      console.log(error);
      return error.message;

  }
};


export const getItem = async (URL) => {
  try {
    const response = await axios(apiUrl + URL, {
      method: "get",
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};



export const getAllCategories = async (URL) => {
  try {
    const response = await axios(apiUrl + URL, {
      method: "get",
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};



export const addItem = async (URL, data) => {
  try {
    const response = await axios(apiUrl + URL, {
      method: "post",
      data: data,
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};


export const editItem = async (URL, data) => {
  try {
    const response = await axios(apiUrl + URL, {
      method: "put",
      data: data,
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};



export const deleteItem = async (URL, id) => {
  try {
    const response = await axios(apiUrl + URL + id, {
      method: "delete",
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};