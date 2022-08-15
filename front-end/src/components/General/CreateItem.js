import React, { useState, useEffect, useRef } from "react";
// import Button from "./Button";

const CreateItem = ({ addItems }) => {
  // const user = {}
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const initialValues = {
    title: "",
    category: "",
    price: 0,
    img: "",
    ingrediants: [""],
  };

  const [itemDetail, setItemDetails] = useState(initialValues);
  const [missingFields, setmissingFields] = useState(null);

  // const checkFormInput = () => {
  //   if (
  //     itemDetail.title === "" ||
  //     itemDetail.category === "" ||
  //     itemDetail.price === "" ||
  //     itemDetail.img === "" ||
  //     itemDetail.ingrediants === ""
  //   ) {
  //     console.log(itemDetail);
  //     setmissingFields({
  //       title: "there is missing fields"
  //     });
  //   } else {
  //     setmissingFields(null);
  //     return true;
  //   }
  // };


  const handle = (e) => {
    const newItem = { ...itemDetail };
    // console.log(e.target.id === "category");
    if (e.target.id === "ingrediants") {
      newItem[e.target.id] = e.target.value.split(/[, ]+/);
    } else if (e.target.id === "price") {
      newItem[e.target.id] = parseInt(e.target.value);
    } else {
      newItem[e.target.id] = e.target.value;
    }
    // console.log(newItem);
    setItemDetails(newItem);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    try {
      // if (checkFormInput()) {
      addItems(itemDetail);
      // }
    } catch (error) {
      setmissingFields({
        price: "Something happened  " + error,
      });
    }
  }

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        // console.log(preview)
        // if (preview) user.profilePictureUrl = preview;
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);




  return (
    <div className="border border-gray-200 p-6 rounded-lg md:w-1/2 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="h-full flex flex-wrap  justify-between"
      >
        <div className="flex-grow grid  content-around mx-auto">
          <div className="mt-2 relative flex justify-between items-center">
            <label htmlFor="image" className="leading-7 text-sm text-gray-600">
              image
            </label>

            {preview ? (
              <img
                className="h-52 object-cover object-center flex-shrink-0 rounded-lg "
                alt="dish"
                src={preview}
                role="presentation"
                onClick={() => {
                  if (fileInputRef.current) {
                    fileInputRef.current.click();
                  }
                }}
              />
            ) : (
              <>
                <button
                  type="button"
                  className="p-1 border hover:curser-pointer m-auto "
                  onClick={(event) => {
                    event.preventDefault();
                    if (fileInputRef.current) {
                      fileInputRef.current.click();
                    }
                  }}
                >
                  upload
                </button>
                <input
                  type="text"
                  id="img"
                  name="img"
                  onChange={(e) => handle(e)}
                  className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </>
            )}
            <input
              type="file"
              placeholder="profile picture"
              id="img"
              className="hidden"
              ref={fileInputRef}
              accept="image/*"
              onChange={(event) => {
                let file;
                if (event.target.files) {
                  [file] = event.target.files;
                  handle(event);
                }
                if (file && file.type.substr(0, 5) === "image") setImage(file);
                else setImage(null);
              }}
            />
          </div>
          <small className=" text-red-500">
            {missingFields && missingFields.img ? `${missingFields.img}` : ""}
          </small>
          <div className="mt-2 relative flex justify-between items-center">
            <label htmlFor="title" className="leading-7 text-sm text-gray-600">
              title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={(e) => handle(e)}
              className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <small className=" text-red-500">
            {missingFields && missingFields.title
              ? `${missingFields.title}`
              : ""}
          </small>
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
              name="ingrediants"
              onChange={(e) => handle(e)}
              className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <small className=" text-red-500">
            {missingFields && missingFields.ingrediants
              ? `${missingFields.ingrediants}`
              : ""}
          </small>
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
              name="category"
              onChange={(e) => handle(e)}
              className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <small className=" text-red-500">
            {missingFields && missingFields.category
              ? `${missingFields.category}`
              : ""}
          </small>
          <div className="mb-2 relative flex justify-between items-center">
            <label htmlFor="price" className="leading-7 text-sm text-gray-600">
              price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={(e) => handle(e)}
              className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <small className=" text-red-500">
            {missingFields && missingFields.price
              ? `${missingFields.price}`
              : ""}
          </small>
          <div className="mx-auto">
            <button
              className="inline-flex items-center bg-indigo-500 text-white rounded m-2 px-4 py-2 hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700"
              onClick={handleSubmit}
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
