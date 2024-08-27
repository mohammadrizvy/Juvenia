import React, { useContext, useState } from "react";
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthModal from "../authModal/AuthModal";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  cn,
  Badge,
} from "@nextui-org/react";
import { RxDashboard } from "react-icons/rx";

import { IoLogInSharp } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { LiaUserEditSolid } from "react-icons/lia";
import { MyButton } from "../Components/MyButton/MyButton";
import toast, { Toaster } from "react-hot-toast";
import userCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
// import logo1 from "../../assets/Logo/"

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { cart } = userCart();
  // const isAdmin = true ;
  const [isAdmin, isAdminLoading] = useAdmin();

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful");
        navigate("/");
      })
      .catch(() => {
        toast.error("Can't log out");
      });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateToProfile = () => {
    navigate("/profile");
  };

  const navigateToDashbaord = () => {
    navigate("/dashboard");
  };

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <div className= "border-b-2 border-black">
      {/* <Toaster  reverseOrder={false} /> */}
      <div className="navbar  mt-2 flex items-center justify-between px-4">
        <div className="navbar-start flex items-center">
          <Link to="/">
            <img className="w-[200px]" src={"../../../public/logo2.png"} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex space-x-10">
          <p className="font-semibold text-sm">
            <Link to="/">Home</Link>
          </p>

          <p className="font-semibold text-sm">
            <Link to="collection">Collection</Link>
          </p>
          <p className="font-semibold text-sm">Sell</p>
          <Link to="/discount">
            <p className="font-semibold text-sm">Discount</p>
          </Link>

          <p className="font-semibold text-sm">About</p>
          <p className="font-semibold text-sm">Contact</p>
          <Badge content={cart?.length || 0}>
            <Link to="/carts" className="font-semibold text-sm">
              <ShoppingBagIcon className="h-7 w-7 text-black" />
            </Link>
          </Badge>
        </div>
        <div className="navbar-end hidden lg:flex space-x-4">
          <MyButton color="default" size="md" className="">
            Customer Supports
          </MyButton>

          <Dropdown backdrop="blur" className="shadow-2xl">
            <DropdownTrigger>
              <MyButton color="primary" size="md">
                Account
              </MyButton>
            </DropdownTrigger>
            <DropdownMenu
              variant="faded"
              aria-label="Dropdown menu with description"
            >
              <DropdownSection title="Actions" showDivider>
                {user ? null : (
                  <DropdownItem
                    shortcut="⌘N"
                    description="Login to your account"
                    startContent={<IoLogInSharp className={iconClasses} />}
                    onClick={openModal}
                  >
                    Login
                  </DropdownItem>
                )}

                {user ? (
                  <DropdownItem
                    shortcut="⌘⇧E"
                    description="Manage your profie"
                    onClick={navigateToProfile}
                    startContent={<LiaUserEditSolid className={iconClasses} />}
                  >
                    Profile
                  </DropdownItem>
                ) : null}
                {isAdmin ? (
                  <DropdownItem
                    shortcut="⌘⇧D"
                    description="Dashboard"
                    onClick={navigateToDashbaord}
                    startContent={<RxDashboard className={iconClasses} />}
                  >
                    Dashboard
                  </DropdownItem>
                ) : null}
              </DropdownSection>
              {user ? (
                <DropdownSection title="Exit zone">
                  <DropdownItem
                    className="text-danger"
                    color="danger"
                    shortcut="⌘⇧O"
                    description="Log out your account"
                    onClick={handleLogOut}
                    startContent={
                      <TbLogout2 className={cn(iconClasses, "text-danger")} />
                    }
                  >
                    Logout
                  </DropdownItem>
                </DropdownSection>
              ) : null}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="lg:hidden  flex items-center">
          <ShoppingBagIcon className="h-8 w-8 text-black mb-2 mr-5 " />
          <button onClick={toggleMenu} className="text-black">
            {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-5 px-4">
          <div className="flex flex-col space-y-4">
            <p className="font-semibold text-sm">
              <Link to="/">Home</Link>
            </p>
            <p className="font-semibold text-sm">
              <Link to="">Collection</Link>
            </p>
            <p className="font-semibold text-sm">
              <Link to="">Sell</Link>
            </p>
            <p className="font-semibold text-sm">
              <Link to="">Discount</Link>
            </p>
            <p className="font-semibold text-sm">
              <Link to="">About</Link>
            </p>
            <p className="font-semibold text-sm">
              <Link to="">Contact</Link>
            </p>
            <p className="font-semibold text-sm">
              <Link to="">Customer Supports</Link>
            </p>
            {user ? (
              <p className="font-semibold text-sm">
                <p className="" onClick={handleLogOut}>
                  Logout
                </p>
              </p>
            ) : (
              <MyButton
                color="primary"
                size="sm"
                className="font-semibold text-sm w-10"
              >
                <p onClick={openModal}>Login</p>
              </MyButton>
            )}
          </div>
        </div>
      )}
      <AuthModal isOpen={isModalOpen} onClose={closeModal} />
      <hr />
    </div>
  );
};

export default Navbar;
