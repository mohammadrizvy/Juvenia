import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Avatar } from "@nextui-org/react";
import { MyButton } from "../Components/MyButton/MyButton";
import Swal from "sweetalert2";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  const handleSaveChange = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
  const handleDeleteAccount = () => {
    Swal.fire({
      title: "Do you want to delete this account?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  return (
    <div className="  min-h-screen flex items-center justify-center">
      <div className="max-w-full py-14 px-32   rounded bg-base-200">
        {/* Avatar Section */}
        <div className="flex items-center justify-center mb-6">
          <Avatar
            src={user?.photoURL || "https://picsum.photos/200/300"}
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

        <div className="grid grid-cols-1 gap-4 mb-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Profile Name
            </label>
            <input
              type="text"
              id="firstName"
              defaultValue={user?.displayName || ""}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
        
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            defaultValue={user?.email || ""}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            readOnly
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            New Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex justify-between">
        
          <MyButton onClick={handleSaveChange} className="px-4 py-2]" variant="secoundary" size="sm" color="primary" >
            Save Change
          </MyButton>
         
          <MyButton onClick={handleDeleteAccount} className="px-4 py-2" size="sm" color="default" variant="bordered" >
            Delete Account
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

