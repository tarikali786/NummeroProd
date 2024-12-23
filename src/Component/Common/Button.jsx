import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ title, link = "#" }) => {
  return (
    <Link
      to={link}
      className="bg-blue-500 text-white-500 text-sm px-6 py-3 font-semibold rounded-lg hover:bg-yellow-500  -tracking-tighter uppercase"
    >
      {title}
    </Link>
  );
};

export const ContactButton = ({ title, link = "#" }) => {
  return (
    <Link
      to={link}
      className="bg-blue-500 text-white-500 text-sm px-6 py-4 font-semibold rounded-[60px] hover:bg-yellow-500  -tracking-tighter  uppercase"
    >
      {title}
    </Link>
  );
};

export const ContactButton3 = ({ title, link = "#" }) => {
  return (
    <Link
      to={link}
      className="bg-white-500 text-blue-500 text-sm px-6 py-4 hover:text-white-500 font-semibold rounded-[60px] hover:bg-yellow-500  -tracking-tighter  uppercase"
    >
      {title}
    </Link>
  );
};
