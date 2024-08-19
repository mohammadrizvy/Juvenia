import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LuUserSquare } from "react-icons/lu";
import { LuBaggageClaim } from "react-icons/lu";
import { LuHistory } from "react-icons/lu";
import { LuHome } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";
import { LuContact } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";




const ProfileLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        <div className="w-full max-w-6xl mx-auto p-4">
          <Outlet />
        </div>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content font-semibold min-h-full  w-80 p-4">
          <li className="">
            <Link to="/profile" className=" w-full flex   text-left px-4 py-3">
              <LuUserSquare></LuUserSquare> Users Home 
            </Link>
          </li>
          <li>
            <Link to="/profile/orders" className="flex w-full text-left px-4 py-3">
             <LuBaggageClaim></LuBaggageClaim> My Orders
            </Link>
          </li>
          <li>
            <Link to="/profile/orders" className="flex w-full text-left px-4 py-3">
             <MdOutlineRateReview></MdOutlineRateReview> Add Review
            </Link>
          </li>
          <li className="border-b-3 border-b-black pb-3">
            <Link to="/profile/payment-history" className="flex w-full text-left px-4 py-3">
             <LuHistory></LuHistory> Payment History
            </Link>
          </li>
          <li>
            <Link to="/" className="flex w-full text-left mt-1 px-4 py-3">
             <LuHome></LuHome> Home
            </Link>
            <Link to="/" className="flex w-full text-left px-4 py-3">
             <LuShoppingBag></LuShoppingBag> Shop
            </Link>
            <Link to="/" className="flex w-full text-left px-4 py-3">
             <LuContact></LuContact> Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileLayout;
