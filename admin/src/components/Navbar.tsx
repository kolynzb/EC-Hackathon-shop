import React from "react";

const Navbar = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default Navbar;

const SearchBar = () => {
  return (
    <div className="flex shadow-lg items-center justify-center  rounded-lg w-[150px] h-4">
      <input
        type="text"
        className="border-none  w-full h-full outline-none focus:border-blue-600"
      />
      <button
        className="bg-blue-800 rounded-lg text-white w-5 h-5 flex items-center justify-center  shadow-inner hover:scale-110 transition-all duration-1000 ease-in-out
      "
      >
        search symbol
      </button>
    </div>
  );
};
