import React from "react";

function Price() {
  return (
    <div className="flex flex-col ml-10">
      <h2>price</h2>

      <label htmlFor="checkBox">$0-50</label>
      <input type="checkbox" name="checkbox" id="" />
      <label htmlFor="checkBox">$50-100</label>
      <input type="checkbox" name="checkbox" id="" />
      <label htmlFor="checkBox">$100-150</label>
      <input type="checkbox" name="checkbox" id="" />
      <label htmlFor="checkBox">$150-200</label>
      <input type="checkbox" name="checkbox" id="" />
    </div>
  );
}

export default Price;
