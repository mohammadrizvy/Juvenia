import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../../Providers/AuthProviders";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);

        // Define saveUser object
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };

        fetch("http://localhost:7000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            toast.success("Login successful");
            navigate("/");
          })
          .catch((error) => {
            toast.error("Error saving user profile: " + error.message);
          });
      })
      .catch((error) => {
        toast.error("Google Sign-In failed: " + error.message);
      });
  };

  return (
    <div>
      <FaGoogle
        onClick={handleGoogleSignIn}
        className="text-3xl cursor-pointer"
      />
    </div>
  );
};

export default GoogleAuth;
