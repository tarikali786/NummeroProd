import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ title, link = "#" }) => {
  return (
    <Link
      to={link}
      className="bg-blue-500 text-white px-6 py-3 font-semibold rounded-lg hover:bg-yellow-500  -tracking-tighter uppercase"
    >
      {title}
    </Link>
  );
};