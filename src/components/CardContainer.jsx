import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../constant/itemSlice";

function CardContainer({ data }) {
  const { img, title, reviews, prevPrice, newPrice } = data;

  const dispatch = useDispatch();

  const handleAdd = (data) => {
    dispatch(addItem(data));
  };

  return (
    <div className="card-container inline-block bg-pink-100">
      <div className="min-h-80 w-52 bg-slate-200 border m-10 rounded hover:-translate-y-2.5 hover:scale-105 transition-all">
        <img className="w-full h-32 p-2" src={img} alt="" />
        <div className="card-details p-2 m-4 ">
          <h2 className="font-bold capitalize p-2">{title}</h2>
          <span className="flex pr-2 text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar /> <span className="text-black">4</span>
          </span>
          <span className="p-2">{reviews}</span>
          <div className="flex justify-between items-center p-2 ">
            <div>
              <del className="p-1">{prevPrice}</del>
              {newPrice}
            </div>
            <FaBagShopping />
          </div>
          <div className="flex justify-center">
            <button
              className="px-2 py-1 bg-slate-600 rounded-lg text-white"
              onClick={() => handleAdd(data)}
            >
              Add+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
