import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import MensCollection from "../Pages/MensCollection/MensCollection";
import WomensCollection from "../Pages/WomensCollection/WomensCollection";
import Login from "../Pages/authModal/AuthModal";
import Discount from "../Pages/Discount/Discount";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";
import BuyPage from "../Pages/BuyPage/BuyPage";
import Carts from "../Pages/Carts/Carts";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Dashboard from "../Layout/Dashboard";
import Orders from "../Pages/Orders/Orders";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import ProfileLayout from "../Layout/ProfileLayout";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import AdminRoute from "./AdminRoute";
import MainDashboard from "../Pages/Dashboard/MainDashboard/MainDashboard";
import AllUsers from "../Pages/Dashboard/Users/AllUsers/AllUsers";
import UserDetails from "../Pages/Dashboard/Users/UserDetails/EditUserInfo";
import AddUsers from "../Pages/Dashboard/Users/AddUsers/AddUsers";
import EditUserInfo from "../Pages/Dashboard/Users/UserDetails/EditUserInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/mensCollection",
        element: <MensCollection></MensCollection>,
      },
      {
        path: "/womensCollection",
        element: <WomensCollection></WomensCollection>,
      },
      {
        path: "/buy/:id",
        element: <BuyPage></BuyPage>,
      },
      {
        path: "/carts",
        element: <Carts></Carts>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:7000/allCollections/${params.id}`),
      },
      {
        path: "/check-out",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
      {
        path: "/discount",
        element: (
          <>
            <Discount></Discount>
          </>
        ),
        PrivateRoute,
      },
      {
        path: "profile",
        element: <ProfileLayout />,
        children: [
          {
            path: "",
            element: <UserProfile></UserProfile>,
          },
          {
            path: "orders",
            element: <Orders></Orders>,
          },
          {
            path: "payment-history",
            element: <PaymentHistory></PaymentHistory>,
          },
        ],
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <AdminRoute>
        <Dashboard></Dashboard>
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <AdminRoute>
            <MainDashboard></MainDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "add-users",
        element: (
          <AdminRoute>
            <AddUsers />
          </AdminRoute>
        ),
      },
      {
        path: "user-edit/:id",
        element: (
          <AdminRoute>
            <EditUserInfo />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:7000/users/${params.id}`),
      },

      {
        path: "manage-items",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "add-items",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
    ],
  },
]);
