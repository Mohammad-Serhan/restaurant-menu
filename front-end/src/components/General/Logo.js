import React from 'react'

const Logo = ({ size = "small" }) => {
  let typeMapping = {
    full: "w-full h-full",
    large: "w-40 ",
    medium: "w-20 ",
    small: "w-6 ",
  };

  let addClasses = Object.keys(typeMapping).includes(size)
    ? typeMapping[size]
    : "";

  return (
    <div className="flex items-center gap-x-2">
      <p className="">
        <img
          className={ 
          addClasses + " object-cover object-center flex-shrink-0 rounded-lg "
          }
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIduF6Fy88pnPTtGI2TAMtTNGVn0wTf0R7w&usqp=CAU"
        />
      </p>
    </div>
  );
};

export default Logo