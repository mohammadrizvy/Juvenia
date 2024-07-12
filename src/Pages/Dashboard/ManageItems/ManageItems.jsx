import React from "react";
import BreadcrumbComponent from "../../Shared/BreadcrumbComponent";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  cn,
} from "@nextui-org/react";
import { IoStarSharp } from "react-icons/io5";
import CollectionsHeader from "../../Components/CollectionsHeader/CollectionsHeader";
import Loader from "../../Components/Loader/Loader";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast, { Toaster, ToastIcon } from "react-hot-toast";
import useCollection from "../../../Hooks/useCollection"
const ManageItems = () => {
  const [axiosSecure] = useAxiosSecure();

 const {data : collection =[] , refacth , isLoading} = useCollection() ; 

  if (isLoading) {
    return <Loader />;
  }

  
  

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <div>
      <BreadcrumbComponent />
      <div className="pb-6">
        <CollectionsHeader
          title={"Manage all Products"}
          button={"Manage history"}
        />
        <p className="mt-4">Total Product Available : {collection.length}</p>
      </div>
      <div className="flex justify-center  ">
        <Table aria-label="Shopping Cart ">
          <TableHeader className="bg-gray-200">
            <TableColumn className="text-base">Product</TableColumn>
            <TableColumn className="text-base">Price</TableColumn>
            <TableColumn className="text-base">Rating</TableColumn>
            <TableColumn className="text-base">Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {collection.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <User
                    avatarProps={{
                      radius: "md",
                      src: item.image,
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
                  <Dropdown>
                    <DropdownTrigger>
                      <Button light color="" auto>
                        <CiMenuKebab className="cursor-pointer" size={20} />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      variant="faded"
                      aria-label="Dropdown menu with icons"
                    >
                      <DropdownItem
                        key="view"
                        shortcut="⌘N"
                        startContent={<FaRegEye className={iconClasses} />}
                      >
                        View
                      </DropdownItem>

                      <DropdownItem
                        key="edit"
                        shortcut="⌘⇧E"
                        startContent={<FaRegEdit className={iconClasses} />}
                      >
                        Edit
                      </DropdownItem>

                      <DropdownItem
                        key="delete"
                        className="text-danger"
                        color="danger"
                        shortcut="⌘⇧D"
                        startContent={
                          <MdOutlineDeleteSweep
                            className={cn(iconClasses, "text-danger")}
                          />
                        }
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete product
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageItems;
