import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`px-6 py-3 rounded-full border-2 transition duration-300 ${isSelected ? "bg-purple-500 text-white border-purple-500" : 
        "border-gray-600 text-gray-400 hover:border-white"}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ProjectTag;