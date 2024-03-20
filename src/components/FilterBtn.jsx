import React, { useState } from "react";
import { data } from "../constant/data";

function FilterBtn() {
  const [items, setItems] = useState(data);

  return (
    <div className="m-4 p-4">
      <h1 className=" font-bold text-2xl text-slate-800">Recommended</h1>
      <div className="all-btn p-2 ">
        <button className="p-2 bg-slate-500 rounded-md text-white ml-2 border-2">
          All products
        </button>
        <button
          className="p-2 bg-slate-500 rounded-md text-white ml-2"
          onClick={() => {
            const filtersData = items.filter((item) => item.company === "Nike");

             setItems(filtersData);
          }}
        >
          Nike
        </button>
        <button className="p-2 bg-slate-500 rounded-md text-white ml-2">
          Adidas
        </button>
        <button className="p-2 bg-slate-500 rounded-md text-white ml-2">
          Puma
        </button>
        <button className="p-2 bg-slate-500 rounded-md text-white ml-2">
          Vans
        </button>
      </div>
    </div>
  );
}

export default FilterBtn;
