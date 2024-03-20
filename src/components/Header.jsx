import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoPersonAdd } from "react-icons/go";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header({ data }) {
  const [inputValue, setInputValue] = useState("");
  const [inputData, setInputdata] = useState(data);

  // console.log(inputValue);
  // console.log(inputData[0].title);
  const cartItems = useSelector((store) => {
    return store.shoe.item;
  });
  console.log(cartItems);

  return (
    <div className="flex w-full justify-between border border-b-2 h-16  items-center ">
      <div className="ml-6 flex items-center">
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="search here"
          className="p-1 bg-slate-200 rounded-md"
        />
        <button
          className="bg-slate-600 text-white px-4 py-1 ml-1 rounded-lg"
          onClick={() => {
            console.log("clicked");
            const filterData = inputData.filter((elem) =>
              elem.title.toLowerCase().includes(inputValue.toLowerCase())
            );
            setInputdata(filterData);
            console.log(filterData);
          }}
        >
          search
        </button>
      </div>
      <div className="flex list-none gap-6 text-xl mr-6 cursor-pointer ">
        <li>
          <FaRegHeart />
        </li>
        <Link to="./cardItem">
          <li className="relative">
            <span className="h-4 w-4 rounded-full  bg-red-700 absolute flex items-center justify-center left-[10px] bottom-[12px] text-white text-sm">
              {cartItems.length}
            </span>
            <MdOutlineShoppingCart />
          </li>
        </Link>

        <li>
          <GoPersonAdd />
        </li>
      </div>
    </div>
  );
}

export default Header;
