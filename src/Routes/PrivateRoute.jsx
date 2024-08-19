import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import AuthModal from '../Pages/authModal/AuthModal';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../Pages/Components/Loader/Loader';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  useEffect(() => {
    if (!user) {
      setIsModalOpen(true);
    }
  }, [user]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/', { replace: true });
  };

  if (!user) {
    return <AuthModal isOpen={isModalOpen} onClose={handleCloseModal} />;
  }

  return children;
};

export default PrivateRoute;
