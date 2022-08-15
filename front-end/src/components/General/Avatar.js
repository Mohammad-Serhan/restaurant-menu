import React from 'react'

const Avatar = ({ size = "small", url, alt, classes = " " }) => {
  let typeMapping = {
    full: "w-full h-full",
    large: "w-40 h-36",
    medium: "w-10 h-10",
    small: "w-6 h-6",
  };

  let addClasses = Object.keys(typeMapping).includes(size)
    ? typeMapping[size]
    : "";

  return (
    <img
      className={
        classes + " object-cover object-center flex-shrink-0 rounded-lg " +
        addClasses 
      }
      src={url}
      alt={alt}
    />
  );
};

export default Avatar;