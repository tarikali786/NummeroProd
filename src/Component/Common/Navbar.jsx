import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="w-full h-14 bg-blue-600 flex justify-between gap-4">
      <Link to="/">
        <img
          src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/67456d87b115f43b4135f2cf.png"
          className="h-10 ml-20 mx-auto my-2 inline-block align-middle"
          alt="Nummero Logo"
        />
      </Link>
      <div className="text-white-500">
        <Link>
          <p>Home</p>
        </Link>
      </div>
    </div>
  );
};
