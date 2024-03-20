import React from "react";

function Catagory() {
  return (
    <div className="flex flex-col h-96 p-10 bg-slate-100">
      <h2 className="capitalize font-bold text-xl text-slate-900">catagory</h2>

      <div className="flex gap-5 m-2">
        <span className="mr-12">All</span>
        <input type="radio" />
      </div>
      <div className="flex gap-5 m-2">
        <span className="mr-1">Sneakers</span>
        <input type="radio" />
      </div>
      <div className="flex gap-5 m-2">
        <span className="mr-9">Flats</span>
        <input type="radio" />
      </div>
      <div className="flex gap-5 m-2">
        <span className="mr-3">Sandels</span>
        <input type="radio" />
      </div>
      <div className="flex gap-5 m-2">
        <span className="mr-7 ">Heels</span>
        <input type="radio" />
      </div>
    </div>
  );
}

export default Catagory;
