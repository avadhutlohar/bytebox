import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
        className="w-10 h-10"
          src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
          alt="menu"
        />
        <img
        className=" h-10 mx-2"
          src="https://fontmeme.com/temporary/e9ea4f76636a25a7c8376c6d01117fa5.png"
          alt="logo"
        />
      </div>
      <div className="col-span-10 text-center">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full " type="text"  />
        <button className="border border-gray-400 px-2 py-2 rounded-r-full bg-gray-100 ">Search</button>
      </div>
      <div className="col-span-1">
        <img
        className="w-10 h-10"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
