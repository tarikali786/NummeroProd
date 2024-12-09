import React from "react";
import { Footer, Navbar } from "../Common";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
