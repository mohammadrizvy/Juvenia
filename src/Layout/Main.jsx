import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
import BreadcrumbComponent from "../Pages/Shared/BreadcrumbComponent";

const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <BreadcrumbComponent></BreadcrumbComponent>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

