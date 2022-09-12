import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import fakeItems from '../db';
import Button from "../components/General/Button";

  // In most web pages, when a dialog opens, the background becomes inactive. This means that the content behind the modal dialog cannot be accessed until the user interacts with it. This is called an overlay effect.

// stateless functional EditMenuItem component with 4 arguments
const EditMenuItem = (  ) => {
  let { id } = useParams();
  const navigate = useNavigate();


  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [itemDetails, setItemDetails] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  

  const onSubmit = (event) => {

    event.id = parseInt(id);
    event.img = preview;
    let selectedSnack = fakeItems.findIndex((item) => item.id == id);

    fakeItems.splice(selectedSnack, 1, event); 
    
    setItemDetails('');
    navigate(-1);
  };


  useEffect(() => {
    let selectedSnack = fakeItems.find((item) => item.id == id);

    setItemDetails(selectedSnack);
  });


  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        // console.log(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);





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
                  src={preview || itemDetails.img}
                  role="presentation"
                  onClick={() => {
                    if (fileInputRef.current) {
                      fileInputRef.current.click();
                    }
                  }}
                />
              ) : (
                <div className="flex flex-wrap justify-end">
                  <button
                    type="button"
                    className="p-1 border hover:curser-pointer mx-5 mb-2 "
                    onClick={(event) => {
                      event.preventDefault();
                      if (fileInputRef.current) {
                        fileInputRef.current.click();
                      }
                    }}
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
                ref={fileInputRef}
                accept="image/*"
                onChange={(event) => {
                  let file;
                  if (event.target.files) {
                    [file] = event.target.files;
                    // handle(event);
                    // console.log(event.target.files[0].name);
                  }
                  if (file && file.type.substr(0, 5) === "image")
                    setImage(file);
                  else setImage(null);
                }}
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
    // <!--Overlay Effect-->
    <div
      className=" fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full " 
        // showHideClassName
      
    >
      {/* <!--modal content--> */}
      <div className="modal-main relative top-20 mx-auto md:w-3/5 p-1 sm:p-5  border shadow-lg rounded-md bg-white">
        <div onClick={ () => navigate(-1)}>
          <Button type="primaryClose" />
        </div>
        {itemForm}
      </div>
    </div>
  );
};

export default EditMenuItem;
