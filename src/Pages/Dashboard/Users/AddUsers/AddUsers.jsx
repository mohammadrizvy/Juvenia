import React from "react";
import { FaCalendarAlt, FaUserAlt, FaUserCog } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImageIcon, ShoppingCart, TagIcon } from "lucide-react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { MyButton } from "../../../Components/MyButton/MyButton";
import BreadcrumbComponent from "../../../Shared/BreadcrumbComponent";
import { CgSelectO } from "react-icons/cg";

const AddUsers = () => {
  return (
    <div className="">
      <BreadcrumbComponent />
      <div className="flex items-center justify-center mt-20">
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="w-full bg-base-300 p-20 rounded-2xl shadow-md max-w-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* User's Name */}
            <div className="w-[100%] mx-auto">
              <Input
                type="text"
                label="User's Name"
                placeholder="e.g., Md Ehsanul , Md Rizvy"
                labelPlacement="outside"
                startContent={
                  <TagIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>

            {/* Email */}
            <div className="w-[100%] mx-auto">
              <Input
                type="email"
                label="Email"
                placeholder="e.g., rizvy@gmail.com"
                labelPlacement="outside"
                startContent={
                  <MdOutlineMailOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>

            {/* Role */}

            <Select
              label="Selcect role"
              placeholder="e.g., user,  admin, maneger"
              labelPlacement="outside"
              className="max-w-xs"
              disableSelectorIconRotation
              selectorIcon={<CgSelectO />}
              startContent={
                <FaUserCog className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            >
              <SelectItem>user</SelectItem>
              <SelectItem>admin</SelectItem>
              <SelectItem isDisabled>maneger</SelectItem>
            </Select>

            {/* Created At */}
            <div className="w-[100%] mx-auto">
              <Input
                type="date"
                label="Date Created"
                placeholder="e.g., 4 Sep 2024"
                labelPlacement="outside"
                startContent={
                  <FaCalendarAlt className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>

            {/* <div className="w-[100%] mx-auto">
              <label className="mb-1 text-sm font-medium">Upload Image</label>
              <input
                type="file"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div> */}

            {/* Image URL */}
            <div className="w-[100%] mx-auto">
              <Input
                type="url"
                label="Image URL"
                placeholder="e.g., https://example.com/image.jpg"
                labelPlacement="outside"
                startContent={
                  <ImageIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <MyButton color="primary" size="md" type="submit">
              Submit
            </MyButton>
          </div>
          <p className="mt-4">
            NOTE: Make sure to fill all the required fields accurately.
          </p>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
