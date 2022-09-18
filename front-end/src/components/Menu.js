import React  from "react";
import { Link } from "react-router-dom";
import Avatar from "./General/Avatar";

function Menu({ items, deleteMenuItem }) {
  // console.log(items);
  

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center mx-auto py-4">
        <Avatar
          alt="not found"
          size="medium"
          url="https://cdn2.iconfinder.com/data/icons/harmony-ui-part-2-1/63/clipboard-search-256.png"
        />
        <span className="text-gray-600 font-bold mt-3">No items found!</span>
      </div>
    );
  }

  return (
    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-wrap -m-2">
        {items.map((item, index) => (
          <div
            key={item._id}
            className=" my-2 md:w-1/2 lg:w-2/5 w-full lg:mx-auto"
          >
            <div className="h-full  flex justify-between  border-gray-200 border  rounded-lg">
              <Avatar size="large" url={item.img} alt={item.title} />

              <div className="flex-grow grid content-around mx-3">
                <div className=" flex justify-between">
                  <p className="p-0 text-gray-900 title-font font-medium md:text-xl  ">
                    {item.title}
                  </p>

                  <div>
                    <Link to={`/admin/menu/edit/${item._id}`}>
                      <button
                        // onClick={handleShown}
                        className=" block inline mx-2 bg-green-500 text-white rounded  hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700"
                      >
                        <svg
                          className="h-6 w-6 fill-white"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                        >
                          <path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" />
                          <path d="M0 0h48v48h-48z" fill="none" />
                        </svg>
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        if (window.confirm("Are you sure you want to delete")) {
                          deleteMenuItem(item._id);
                        }
                      }}
                      className=" bg-red-500 text-white rounded  hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-700"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className="inline-flex"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 flex items-center ">
                  {item.ingrediants}
                </p>

                <p className=" place-self-end border border-indigo-600 p-1 text-gray-500 w-12 text-center  hover:cursor-pointer hover:text-white hover:bg-indigo-600 ">
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
