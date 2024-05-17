import React from "react";

const Dropdown = ({title,options,func}) => {

  return (
    <div className="relative inline-block text-left w-40 text-white text-lg font-semibold">
      <select
        className="block appearance-none w-full bg-gray-600 border border-gray-300 rounded-md shadow-sm px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-sky-400 hover:bg-slate-500 capitalize"
        defaultValue=""
        onChange={func}
      >
        <option value="" className="" disabled>
          {title}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
