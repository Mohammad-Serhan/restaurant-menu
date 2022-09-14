import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;//"http://localhost:8080/admin/"

export const logInAdmin = async(URL, adminDetails) => {
        try {
          const response = await axios( apiUrl + URL, {
            method: "post",
            data: adminDetails,
            withCredentials: true,
          });

          return response;
        } catch (error) {
          console.log(error);
        }
}


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


export const editItem = async (URL, id, data) => {
  try {
    const response = await axios(apiUrl + URL + id, {
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