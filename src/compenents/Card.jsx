import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="w-80 h-100 bg-gray-200 rounded-2xl p-2 flex flex-col justify-between items-center">
      <div className="h-1/2">
        <img src={image} alt={title} />
      </div>
      <div className="h-1/3 flex flex-col  items-center text-center overflow-hidden">
        <h3 className="text-2xl">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="">
        <button className="button">Click here</button>
      </div>
    </div>
  );
};

export default Card;
