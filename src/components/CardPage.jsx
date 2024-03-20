import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CardContainer from "./CardContainer";
import { clearItem } from "../constant/itemSlice";

const CardPage = () => {
  const cardList = useSelector((store) => store.shoe.item);

  const dispatch = useDispatch();

  const handleClear = () => {
    return dispatch(clearItem(cardList));
  };

  if (!cardList) {
    return null;
  }

  return (
    <div>
      <div className="m-16 text-center">
        <h1 className="text-2xl text-center m-7 capitalize font-bold">store</h1>

        <button
          onClick={handleClear}
          className="text-center m-7 capitalize bg-slate-600 text-white p-2 rounded-md"
        >
          clear cart
        </button>
      </div>
      <div className="bg-pink-100">
        {cardList?.map((item, index) => {
          console.log(item);
          return <CardContainer data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CardPage;
