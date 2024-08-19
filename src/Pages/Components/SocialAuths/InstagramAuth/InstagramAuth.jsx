import React from 'react';
import { FaInstagram } from "react-icons/fa";


const InstagramAuth = () => {

    const handleInstagramLogin = () => {
        alert("The isntagram feature is yet to come")
        console.log("Instagram login")
    }

    return (
        <div>
            <FaInstagram onClick={handleInstagramLogin} className='text-3xl cursor-pointer' />
        </div>
    );
};

export default InstagramAuth;