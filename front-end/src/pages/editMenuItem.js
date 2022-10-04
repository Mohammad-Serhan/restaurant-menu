import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
// import fakeItems from '../db';
import Button from "../components/General/Button";
import { editItem, getItem } from "../actions/menuItems.action";

const EditMenuItem = (  ) => {
  let { id } = useParams();
  const navigate = useNavigate();


  const imageInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [itemDetails, setItemDetails] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  

  const onSubmit = async (data) => {

    data.id = parseInt(id);
    data.img = image;
    const formData = new FormData();
    // console.log(data);

    for (let name in data) {
      formData.append(name, data[name]);
    }
    // console.log(data);
     editMenuItem(formData);
    setItemDetails('');
    navigate(-1);
  };


  const editMenuItem = async (item) => {
  try {
      await editItem(`/editItem/${id}`, item);

  } catch (error) {
    console.log(error);
  }
  }


  useEffect(() => {

    const fetchData = async () => {
      let selectedSnackItem = await getItem(`/getMenuItems/${id}`)
      let item = selectedSnackItem.data.item;
    //   console.log(item);
      setItemDetails(item);
    };
    fetchData();
  }, [id]);



  const onImageChange = (event) => {
    let file = event.target.files[0];
    // console.log(file);
    setImage(file); 
  }




  let itemForm = (
    <div className="border border-gray-200 p-2 md:p-6 rounded-lg  mx-auto">
      {itemDetails === undefined ? (
        <div className="h-screen flex flex-col">
          <div className="mt-12 min-h-3/4 flex-grow">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white shadow-xl overflow-hidden rounded-lg ">
                Loading...
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-full flex flex-wrap justify-between"
        >
          <div className="flex-grow grid  content-around mx-auto">
            <div className="mt-2 relative flex justify-between items-center">
              <label
                htmlFor="image"
                className="leading-7 text-sm text-gray-600"
              >
                image
              </label>

              {itemDetails.img ? (
                <img
                  className="h-52 object-cover object-center flex-shrink-0 rounded-lg "
                  alt="snack"
                  src={image ? URL.createObjectURL(image) : itemDetails.img}
                  role="presentation"
                  onClick={() => imageInputRef.current.click()}
                />
              ) : (
                <div className="flex flex-wrap justify-end">
                  <button
                    type="button"
                    className="p-1 border hover:curser-pointer mx-5 mb-2 "
                    onClick={() => imageInputRef.current.click()}
                  >
                    upload
                  </button>
                </div>
              )}
              <input
                type="file"
                placeholder="profile picture"
                id="img"
                name="img"
                className="hidden"
                ref={imageInputRef}
                accept="image/*"
                onChange={onImageChange}
              />
            </div>
            {errors.img?.type === "required" && (
              <small className=" text-red-500"> {errors.img.message}</small>
            )}

            <div className="mt-2 relative flex justify-between items-center">
              <label
                htmlFor="title"
                className="leading-7 text-sm text-gray-600"
              >
                title
              </label>

              <input
                type="text"
                id="title"
                {...register("title", {
                  required: {
                    value: true,
                    message: "title is required",
                  },
                })}
                defaultValue={itemDetails.title ? itemDetails.title : ""}
                className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {errors.title?.type === "required" && (
              <small className=" text-red-500">{errors.title.message}</small>
            )}

            <div className="my-4 relative flex justify-between items-center">
              <label
                htmlFor="ingrediants"
                className="leading-7 text-sm text-gray-600"
              >
                ingrediants
              </label>

              <input
                type="text"
                id="ingrediants"
                {...register("ingrediants", {
                  required: {
                    value: true,
                    message: "ingrediants is required",
                  },
                })}
                defaultValue={
                  itemDetails.ingrediants ? itemDetails.ingrediants : ""
                }
                className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {errors.ingrediants?.type === "required" && (
              <small className=" text-red-500">
                {errors.ingrediants.message}
              </small>
            )}

            <div className="my-2 relative flex justify-between items-center">
              <label
                htmlFor="category"
                className="leading-7 text-sm text-gray-600"
              >
                category
              </label>

              <input
                type="text"
                id="category"
                {...register("category", {
                  required: {
                    value: true,
                    message: "category is required",
                  },
                })}
                defaultValue={itemDetails.category ? itemDetails.category : ""}
                className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {errors.category?.type === "required" && (
              <small className=" text-red-500">
                {" "}
                {errors.category.message}{" "}
              </small>
            )}

            <div className="mb-2 relative flex justify-between items-center">
              <label
                htmlFor="price"
                className="leading-7 text-sm text-gray-600"
              >
                price
              </label>

              <input
                type="number"
                id="price"
                {...register("price", {
                  required: {
                    value: true,
                    message: "price is required",
                  },
                  valueAsNumber: true,
                })}
                defaultValue={itemDetails.price ? itemDetails.price : ""}
                className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {errors.price?.type === "required" && (
              <small className=" text-red-500">{errors.price.message}</small>
            )}

            <div className="mx-auto">
              <button
                className="inline-flex items-center bg-indigo-500 text-white rounded m-2 px-4 py-2 hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700"
                type="submit"
              >
                {" "}
                Edit Item
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );

  return (
    // In most web pages, when a dialog opens, the background becomes inactive. This means that the content behind the modal dialog cannot be accessed until the user interacts with it. This is called an overlay effect.
    // <!--Overlay Effect-->
    <div
      className=" fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full "
      // showHideClassName
    >
      {/* <!--modal content--> */}
      <div className="modal-main relative top-20 mx-auto md:w-3/5 p-1 sm:p-5  border shadow-lg rounded-md bg-white">
        <div className="text-center" onClick={() => navigate(-1)}>
          <Button type="primaryClose" />
        </div>
        {itemForm}
      </div>
    </div>
  );
};

export default EditMenuItem;
