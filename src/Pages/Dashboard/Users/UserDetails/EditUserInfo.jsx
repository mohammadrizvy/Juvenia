import React, { useState } from "react";
import { MyButton } from "../../../Components/MyButton/MyButton";
import { useLoaderData } from "react-router-dom";
import { Avatar, Input } from "@nextui-org/react";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { TagIcon } from "lucide-react";

const EditUserInfo = () => {
  const user = useLoaderData();
  const { name, email, createdAt, status, role, userPhoto } = user;

  const handleUpdateUser = () => {
    console.log("Updating user");
  };

  return (
    <div className="mt-24 flex items-center justify-center">
      <div className="py-14 px-32 rounded bg-base-300 shadow-lg">
        {/* Avatar Section */}
        <div className="flex items-center pb-7">
          <Avatar
            src={user?.userPhoto || "https://picsum.photos/200/300"}
            size="lg"
            className="mr-4"
          />
          <div>
            <label
              htmlFor="avatar"
              className="cursor-pointer text-blue-500 hover:underline"
            >
              Change Profile Picture
            </label>
            <input type="file" id="avatar" className="hidden" />
          </div>
        </div>

        <div className="pb-6">
          <Input
            readOnly
            defaultValue={name}
            type="text"
            label="User's Name"
            labelPlacement="outside"
            startContent={
              <FaUserAlt className="text-2xl text-default-400 flex-shrink-0" />
            }
          />
        </div>

        <div className="pb-6">
          <Input
            readOnly
            defaultValue={email}
            type="email"
            label="Email"
            labelPlacement="outside"
            startContent={
              <MdOutlineMailOutline className="text-2xl text-default-400 flex-shrink-0" />
            }
          />
        </div>

        <div className="pb-6">
          <Input
            readOnly
            defaultValue={createdAt}
            type="text"
            label="Date Created"
            labelPlacement="outside"
            startContent={
              <FaCalendarAlt className="text-2xl text-default-400 flex-shrink-0" />
            }
          />
        </div>

        <div className="pb-6">
          <Input
         defaultValue={role}
            type="text"
            label="Role"
            labelPlacement="outside"
            startContent={
              <FaUserAlt className="text-2xl text-default-400 flex-shrink-0" />
            }
            placeholder="e.g., user, admin, manager"
          />
        </div>

        <div className="pb-6">
          <Input
           defaultValue={status}
            type="text"
            label="Status"
            labelPlacement="outside"
            startContent={
              <FaUserAlt className="text-2xl text-default-400 flex-shrink-0" />
            }
            placeholder="e.g., Active, Inactive"
          />
        </div>

        <div className="flex justify-end">
          <MyButton
            onClick={handleUpdateUser}
            className="px-4 py-2"
            variant="secondary"
            size="sm"
            color="primary"
          >
            Update
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default EditUserInfo;
