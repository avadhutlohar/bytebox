import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [Suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json([1]);
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className=" h-10 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
          alt="menu"
        />
        <a href="/">
          <img
            className=" h-10 mx-2"
            src="https://fontmeme.com/permalink/230401/575c11984cbb2ddcc391d880e8ea9a76.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="col-span-10 ">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-2 py-2 rounded-r-full bg-gray-200 ">
            Search
          </button>
        </div>
     {showSuggestions && ( <div className="fixed bg-white py-2 px-5 w-[43rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
          {Suggestions.map((s) => (
            <li key= {s} className="shadow-sm py-2 px-3 hover:bg-gray-100">{s}</li>))
            }
            </ul>
        </div>)}
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
