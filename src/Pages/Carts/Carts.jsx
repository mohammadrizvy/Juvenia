import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";
import Loader from "../Components/Loader/Loader";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
} from "@nextui-org/react";
import { MyButton } from "../Components/MyButton/MyButton";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const Carts = () => {
  const { cart, refetch, isLoading } = useCart();
  const navigate = useNavigate();

  const sortedCart = React.useMemo(() => {
    return [...cart].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [cart]);

  const subtotal = React.useMemo(() => {
    return sortedCart.reduce((acc, item) => acc + item.price, 0);
  }, [sortedCart]);

  const deliveryCharge = 150; // Set your delivery charge here

  const total = subtotal + deliveryCharge; // Calculate the total including the delivery charge

  if (isLoading) {
    return <Loader />;
  }

  const handleGoHome = () => {
    navigate("/");
  };

  const handleDeleteItem = (item) => {
    fetch(`http://localhost:7000/carts/${item._id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Item removed");
          refetch();
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
        toast.error("Failed to remove item");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Juvénia | My Cart</title>
      </Helmet>
      <Toaster position="top-center" />
      <div className="min-h-screen">
        <h1 className="text-center my-8 text-3xl font-bold">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center p-4 bg-white rounded-lg">
              <h1 className="text-red-800 font-semibold text-lg border-b border-t pt-2 border-slate-950 pb-2">
                NO CART ITEMS AVAILABLE!
              </h1>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <Table aria-label="Shopping Cart" className="max-w-[810px] ">
              <TableHeader className="bg-gray-200">
                <TableColumn className="text-base">Product</TableColumn>
                <TableColumn className="text-base">Price</TableColumn>
                <TableColumn className="text-base">Rating</TableColumn>
                <TableColumn className="text-base">Actions</TableColumn>
              </TableHeader>
              <TableBody>
                {sortedCart.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <User
                        avatarProps={{
                          radius: "md",
                          src: item.productImage,
                          size: "lg",
                        }}
                        name={item.productName}
                      />
                    </TableCell>
                    <TableCell>{item.price} TK</TableCell>
                    <TableCell className="flex items-center gap-2 mt-6">
                      {item.rating}
                      <IoStarSharp />
                    </TableCell>
                    <TableCell>
                      <MdDeleteForever
                        onClick={() => handleDeleteItem(item)}
                        className="ml-4 cursor-pointer"
                        size={25}
                        color="red"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        <div className="max-w-[710px] mx-auto my-8 p-6 shadow-xl">
          <div className="mb-5 text-right">
            <p className="text-sm font-semibold">
              Shipping & taxes calculated at checkout
            </p>
            <p className="text-lg font-semibold">
              Subtotal : {subtotal} TK
            </p>
            <p className="text-lg border-b-2 border-black pb-3 font-semibold">
              Delivery Charge : {deliveryCharge} TK
            </p>
            <p className="text-xl mt-3 font-semibold ">
              Total : {total} TK
            </p>
          </div>
          <div className="flex justify-between items-center">
            <MyButton
              size="md"
              color="default"
              onClick={handleGoHome}
              className="text-sm"
            >
              Continue Shopping
            </MyButton>
            <Link to="/check-out">
              <MyButton size="md" color="primary" className="text-sm">
                Check out
              </MyButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
