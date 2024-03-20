import React from "react";
import Catagory from "./Catagory";
import Price from "./Price";
import Color from "./Color";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-2/12 border-r-2 border-slate-600">
      <div className="flex h-16 items-center justify-center border-b-2">
        <Link to="/"><h1 className="text-black text-2xl font-bold">🛒</h1></Link>
      </div>
      <Catagory />
      <Price />
      <Color />
    </div>
  );
}

export default SideBar;
