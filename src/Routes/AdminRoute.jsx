import React, { useState, useEffect } from "react";
import AuthModal from "../Pages/authModal/AuthModal";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../Pages/Components/Loader/Loader";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading, logOut } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdmin, isAdminLoading] = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !isAdminLoading) {
      if (!user || !isAdmin) {
        setIsModalOpen(true);
      }
    }
  }, [loading, isAdminLoading, user, isAdmin]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/", { replace: true });
  };

  if (loading || isAdminLoading) {
    return <Loader />;
  }

  if (!user || !isAdmin) {
    logOut();
    return <AuthModal isOpen={isModalOpen} onClose={handleCloseModal} />;
  }

  return children;
};

export default AdminRoute;
