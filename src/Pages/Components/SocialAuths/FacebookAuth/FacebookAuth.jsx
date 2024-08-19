import React from 'react';
import { FaFacebook } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const FacebookAuth = () => {
  const handleFacebookLogin = () => {
    toast.error("The Facebook feature is yet to come");
  };

  return (
    <div>
      <FaFacebook onClick={handleFacebookLogin} className='text-3xl cursor-pointer' />
      <Toaster
      position="top-right"
      reverseOrder={false} /> 
    </div>
  );
};

export default FacebookAuth;
