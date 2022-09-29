import React from "react";
import "./Card.css";

const Card = (props) => {
  const { name, description, ageLimit, timeRequired, img } = props.workout;
  const { handleAddToList } = props;
  return (
    <div>
      <div className="card rounded-md w-auto bg-base-100 shadow-xl">
        <figure className="p-2 rounded-md">
          <img className="product-img img" src={img} alt="" />
        </figure>
        <div className="card-body p-6">
          <h2 className="text-2xl font-semibold product-name">{name}</h2>
          <div className="">
            <p className="text-gray-500">{description.slice(0, 55) + "..."}</p>
            <div className="pt-3 font-medium">
              <p>For Age : {ageLimit}</p>
              <p>
                Time required : {timeRequired}
                <small>s</small>
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleAddToList(props.workout)}
          className="btn btn-primary rounded-md rounded-t-none"
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Card;
