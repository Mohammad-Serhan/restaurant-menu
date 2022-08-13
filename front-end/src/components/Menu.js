import React from "react";

function Menu( {items}) {
  return (
    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-wrap -m-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-1 my-2 md:w-1/2 lg:w-2/5 w-full lg:mx-auto"
          >
            <div className="h-full  flex justify-between  border-gray-200 border  rounded-lg">
              <img
                alt="team"
                className="h-36 w-40 object-cover object-center flex-shrink-0 rounded-lg "
                src={item.img}
              />
              <div className="flex-grow grid content-around mx-3">
                <h2 className="text-gray-900 title-font font-medium text-xl ">
                  {item.title}
                </h2>
                <p className="text-gray-600 flex items-center">
                  {item.ingrediants.join(", ")}
                </p>
                <p className="place-self-end border border-indigo-600 p-1 text-gray-500 w-fit  hover:cursor-pointer hover:text-white hover:bg-indigo-600">
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
