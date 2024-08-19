import React, { useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { Badge } from "@nextui-org/react";
import Switch from "../../Components/SwitchD&L/Switch";
import SwitchDL from "../../Components/SwitchD&L/Switch";
import SearchInput from "../../Components/SearchInput/SearchInput";
import useAuth from "../../../Hooks/useAuth";
import { AuthContext } from "../../../Providers/AuthProviders";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BellDot } from "lucide-react";
// import { AcmeLogo } from "./AcmeLogo.jsx";
// import icon from "../../../assets/Logo/webicon"

const DashboardNavbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

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

  const handleToast = () => {
    toast.success('Toast checking', {
        style: {
        //   border: '1px solid #000000',
          padding: '16px',
          color: '#000000',
        },
        iconTheme: {
          primary: '#000000',
          secondary: '#ffffff',
        },
      });;
  };

  return (
    <Navbar>
      <Toaster position="top-right" reverseOrder={false} />
      <NavbarBrand>
        <div className="mt-4">
          <SearchInput></SearchInput>
        </div>
      </NavbarBrand>

      <NavbarContent
        placement="bottom-end"
        className="hidden sm:flex gap-4"
        justify="center"
      >
        <NavbarItem>
          <SwitchDL></SwitchDL>
        </NavbarItem>
        <NavbarItem>
          <Link onClick={handleToast} color="foreground" href="#">
            {/* <Badge
            isOneChar
            content="new"
            color="danger"
            placement="top-right"
            size="lg"
          > */}
            Notification
            {/* </Badge> */}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Message
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger as="div">
            <div className="flex items-center gap-4 justify-between">
                <div>
                    <span className="font-semibold">{user?.displayName}</span> <br />
                    <span className="text-sm">{user?.role || "Admin"}</span>
                </div>
               <div>
               <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="default"
              name="Jason Hughes"
              radius="md"
              size="md"
              src={user?.photoURL || "https://picsum.photos/200/300"}
            />
               </div>
            </div>
            
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user?.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Profile</DropdownItem>
            {/*
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem> */}
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem onClick={handleLogOut} key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default DashboardNavbar;
