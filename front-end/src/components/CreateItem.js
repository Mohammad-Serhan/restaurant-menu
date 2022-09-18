import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";


const CreateItem = ({ addMenuItem }) => {
  const imageInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (event) => {
    
    event.img = image;
    addMenuItem(event);
  };

  const onImageChange = (e) => {
    const uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
    //  console.log(URL.createObjectURL(uploaded));
  };

  return (
    <div className="border border-gray-200 p-2 md:p-6 rounded-lg  mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full flex flex-wrap  justify-between"
      >
        <div className="flex-grow grid  content-around mx-auto">
          <div className="mt-2 relative flex justify-between items-center">
            <label htmlFor="image" className="leading-7 text-sm text-gray-600">
              image
            </label>

            {image ? (
              <img
                className="h-52 object-cover object-center flex-shrink-0 rounded-lg "
                alt="snack"
                src={image}
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
            <label htmlFor="title" className="leading-7 text-sm text-gray-600">
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
              className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {errors.category?.type === "required" && (
            <small className=" text-red-500"> {errors.category.message} </small>
          )}

          <div className="mb-2 relative flex justify-between items-center">
            <label htmlFor="price" className="leading-7 text-sm text-gray-600">
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
              Add Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateItem;
