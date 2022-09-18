import axios from "axios";

const apiUrl = process.env.API_SERVER;//

export const logInAdmin = async(URL, adminDetails) => {
        try {
        console.log(`${apiUrl}/${URL}`);
          const response = await axios(`${apiUrl}/${URL}`, {
            method: "post",
            data: adminDetails,
            withCredentials: true,
          });

          return response;
        } catch (error) {
            console.log(error);
            return error.message
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