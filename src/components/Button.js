import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-5 py-1 m-3 bg-gray-200 rounded-lg hover:bg-black hover:text-white">
      {name}
    </button>
  );
};

export default Button;
