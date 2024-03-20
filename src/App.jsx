import { useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import { data } from "./constant/data";
import FilterBtn from "./components/FilterBtn";
import SideBar from "./components/sidebar/SideBar";
import { Provider } from "react-redux";
import shoeStore from "./constant/itemStore";
import { Outlet } from "react-router-dom";
import MapData from "./components/MapData";

function App() {
  return (
    <>
      <Provider store={shoeStore}>
        <div className="flex">
          <SideBar />
          <div className="h-full w-10/12 ">
            <Header data={data} />
            <Outlet />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
