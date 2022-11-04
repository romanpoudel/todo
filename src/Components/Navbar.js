import React from "react";
import "../css/Navbar.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Daily from "./Daily";
import Completed from "./Completed";
import Weekly from "./Weekly";
import All from "./All";
import Monthly from "./Monthly";

function Navbar() {
  return (
    <>
      <div className="bg-gray-700 mb-6 rounded-md p-2 justify-around flex ">
        <NavLink
          className=" w-1/4 text-gray-50 bg-gray-600 hover:bg-gray-700 p-3"
          to="/all"
        >
          All
        </NavLink>
        <NavLink
          className=" w-1/4 text-gray-50 bg-gray-600 hover:bg-gray-700 p-3"
          to="/daily"
        >
          Daily
        </NavLink>

        <NavLink
          className=" w-1/4 text-gray-50 bg-gray-600 hover:bg-gray-700 p-3"
          to="/weekly"
        >
          Weekly
        </NavLink>
        <NavLink
          className=" w-1/4 text-gray-50 bg-gray-600 hover:bg-gray-700 p-3"
          to="/monthly"
        >
          Monthly
        </NavLink>
        <NavLink
          className=" w-1/4 text-gray-50 bg-gray-600 hover:bg-gray-700 p-3"
          to="/completed"
        >
          Completed
        </NavLink>
      </div>
      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/monthly" element={<Monthly />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </>
  );
}

export default Navbar;
