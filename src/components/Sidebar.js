import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;
   
  return (
    <div className="p-2 shadow-lg col-span-1">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Home</li>
        <li>Music</li>
        <li>Sports</li>
        <li>games</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Home</li>
        <li>Music</li>
        <li>Sports</li>
        <li>games</li>
      </ul>
    </div>
  );
};

export default Sidebar;
