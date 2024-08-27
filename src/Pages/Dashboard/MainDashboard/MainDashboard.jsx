import React from "react";
import Navbar from "../../Shared/Navbar";
import BreadcrumbComponent from "../../Shared/BreadcrumbComponent";
import MyBarChart from "../BarChart/MyBarChart";
import {
  HiOutlineCurrencyBangladeshi,
  HiOutlineTrendingUp,
  HiOutlineShoppingBag,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { FaDollarSign } from "react-icons/fa";
import CollectionsHeader from "../../Components/CollectionsHeader/CollectionsHeader";
import PieChart from "../PieChart/PieChart";
import RecentOrderd from "../RecentOrderd/RecentOrderd";

const MainDashboard = () => {
  return (
    <div>
      <BreadcrumbComponent />
      <div className="flex gap-5">
        <div className="w-[70%]">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-10 ">
            {/* Total Sales */}
            <div className="bg-base-300 p-10 flex items-center gap-4 shadow-xl rounded-2xl ">
              <HiOutlineCurrencyBangladeshi size={30} />
              <div>
                <h1 className="text-xl font-semibold">Total Sales</h1>
                <p className="text-lg font-bold">60000 BDT</p>
              </div>
            </div>

            {/* Sales Trend */}
            <div className="bg-base-300 p-10 flex items-center gap-4 shadow-xl rounded-2xl">
              <HiOutlineTrendingUp size={30} />
              <div>
                <h1 className="text-xl font-semibold">Monthly Slaes</h1>
                <p className="text-lg font-bold">30000 BDT</p>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-base-300 p-10 flex items-center gap-4 shadow-xl rounded-2xl">
              <HiOutlineShoppingBag size={30} />
              <div>
                <h1 className="text-xl font-semibold">Top Products</h1>
                <p className="text-lg font-bold">See List</p>
              </div>
            </div>

            {/* Customer Insights */}
            <div className="bg-base-300 p-10 flex items-center gap-4 shadow-xl rounded-2xl">
              <HiOutlineUserGroup size={30} />
              <div>
                <h1 className="text-xl font-semibold">Customer Insights</h1>
                <p className="text-lg font-bold">View Details</p>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-base-300 p-10 rounded-2xl">
            <div style={{ height: "400px", width: "70%" }}>
              <MyBarChart />
            </div>
            <div style={{ height: "400px", width: "50%" }}>
              <PieChart />
            </div>
          </div>
        </div>
        {/* LEFT :  30% of the left side  */}
        <div className="w-[30%] ">
          <div className="mx-auto text-center">
            <CollectionsHeader
              title={"Recent orders"}
              button={"View list"}
              link={"/recent-orders"}
            ></CollectionsHeader>
            <div className="">
              {/* <ActiveUsers></ActiveUsers> */}
              <RecentOrderd></RecentOrderd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
