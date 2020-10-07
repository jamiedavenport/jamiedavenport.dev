import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="text-lg font-bold flex flex-row items-center space-x-2">
      <svg
        className="h-6 w-6 text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 17.42"
        fill="currentColor"
      >
        <path d="M17.76,2.14A9.09,9.09,0,0,0,11.29,0H10V3.8h1.37A3.53,3.53,0,0,1,14.21,5a5.59,5.59,0,0,1,.95,3.56,6.05,6.05,0,0,1-1,3.8A3.81,3.81,0,0,1,11,13.56H9.52a7.08,7.08,0,0,1-1.41,2.76,5.71,5.71,0,0,1-1.25,1.1h4a9.23,9.23,0,0,0,6.75-2.36A9,9,0,0,0,20,8.34,8.11,8.11,0,0,0,17.76,2.14Z" />
        <path d="M8.59,0V10.24a10.62,10.62,0,0,1-.45,3.32,5.86,5.86,0,0,1-1.09,2,5.72,5.72,0,0,1-4.52,1.82H2.4A11.94,11.94,0,0,1,0,17.17V13.51l.81.16a4.45,4.45,0,0,0,.93.09,1.88,1.88,0,0,0,1.66-.7,4.25,4.25,0,0,0,.51-2.41V0Z" />
      </svg>
      <span>Jamie Davenport</span>
    </div>
  );
};

export default Logo;
