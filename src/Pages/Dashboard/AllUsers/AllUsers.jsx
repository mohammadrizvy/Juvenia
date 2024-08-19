import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Loader from "../../Components/Loader/Loader";
import { MdFolderDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import BreadcrumbComponent from "../../Shared/BreadcrumbComponent";
import Swal from "sweetalert2";
import CollectionsHeader from '../../Components/CollectionsHeader/CollectionsHeader';
import { MyButton } from "../../Components/MyButton/MyButton";
import { CircleEllipsis, EllipsisVertical } from "lucide-react";
const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: `Do you want to make ${user.name} an admin?`,
      showCancelButton: true,
      confirmButtonText: "Make Admin",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/admin/${user._id}`)
          .then((res) => {
            if (res.data.modifiedCount) {
              toast.success(`${user.name} is now an admin`);
              refetch();
            }
          })
          .catch((error) => {
            console.error("Error making admin:", error);
            toast.error("Failed to make admin");
          });
      }
    });
  };

  const handleRemoveAdmin = (user) => {
    Swal.fire({
      title: `Do you want to remove admin rights from ${user.name}?`,
      showCancelButton: true,
      confirmButtonText: "Remove Admin",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/remove-admin/${user._id}`)
          .then((res) => {
            if (res.data.modifiedCount) {
              toast.success(`${user.name} is no longer an admin`);
              refetch();
            }
          })
          .catch((error) => {
            console.error("Error removing admin:", error);
            toast.error("Failed to remove admin");
          });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              toast.success("User deleted successfully");
              refetch();
            }
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
            toast.error("Failed to delete user");
          });
      }
    });
  };

  return (
    <div>
      <BreadcrumbComponent />
      <div className="mb-10">
        <CollectionsHeader title={"All Members"} button={"Add user"}>
        </CollectionsHeader>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
      <Table  aria-label="All users">
        <TableHeader className="border-b-2 border-r-2 border-black">
          <TableColumn className="text-large text-black">NAME</TableColumn>
          <TableColumn className="text-large text-black">Email</TableColumn>
          <TableColumn className="text-large text-black">Role</TableColumn>
          <TableColumn className="text-large text-black">Status</TableColumn>
          <TableColumn className="text-large text-black">
            Joining Date
          </TableColumn>
          <TableColumn className="text-large text-black">Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="font-semibold text-sm border-b border-black">
                {user.name}
              </TableCell>
              <TableCell className="font-semibold text-sm border-b border-black">
                {user.email}
              </TableCell>
              <TableCell className="font-semibold text-sm border-b border-black">
                <div  className="dropdown dropdown-top" >
                <div
                    tabIndex={0}
                    role="button"
                    className=" m-1 flex items-center gap-2"
                  >
                    {user.role === "admin" ? (
                      <>
                        <MdOutlineAdminPanelSettings size={15} />
                        Admin
                      </>
                    ) : (
                      <>
                        <FaRegUser size={13} />
                        User
                      </>
                    )}
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    {user.role === "admin" ? (
                      <li>
                        <a
                          className="flex items-center gap-2"
                          onClick={() => handleRemoveAdmin(user)}
                        >
                          <MdOutlineAdminPanelSettings size={20} />
                          Remove Admin
                        </a>
                      </li>
                    ) : (
                      <li>
                        <a
                          className="flex items-center gap-2"
                          onClick={() => handleMakeAdmin(user)}
                        >
                          <MdOutlineAdminPanelSettings size={20} />
                          Make Admin
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
               
                
                
              </TableCell>
              <TableCell className="font-semibold text-sm border-b border-black">
                {"Active"}
              </TableCell>
              <TableCell className="font-semibold text-sm border-b border-black">
                {"2 jun 2024"}
              </TableCell>
              <TableCell className="border-b items-center border-black">
                {/* <MdFolderDelete
                  className=" cursor-pointer"
                  onClick={() => handleDeleteUser(user)}
                  size={25}
                  color="maroon"
                  title="Delete User"
                /> */}
                <CircleEllipsis size={20} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllUsers;
