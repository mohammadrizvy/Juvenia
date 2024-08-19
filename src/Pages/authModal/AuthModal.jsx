import React, { useContext, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { MyButton } from "../Components/MyButton/MyButton";
import { FaLock, FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import FacebookAuth from "../Components/SocialAuths/FacebookAuth/FacebookAuth";
import InstagramAuth from "../Components/SocialAuths/InstagramAuth/InstagramAuth";
import GoogleAuth from "../Components/SocialAuths/GoogleAuth/GoogleAuth";
import { AuthContext } from "../../Providers/AuthProviders";
import toast, { Toaster } from "react-hot-toast";
import { MdPhotoCamera } from "react-icons/md";

import { useForm } from "react-hook-form";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const { createUser, logIn, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toggleAuthForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSignup = (data) => {
    const { email, password, name, photoURL } = data;
    console.log("Signup Form Data:", data);
  
    createUser(email, password)
      .then((userCredential) => {
        toast.success("Account created successfully");
        onClose();
  
        // Update user profile after signup
        updateUserProfile(name, photoURL)
          .then(() => {
            const saveUser = { name, email };
            fetch("http://localhost:7000/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  toast.success("Profile updated successfully");
                } else {
                  toast.error("Failed to save user profile");
                }
              })
              .catch((error) => {
                toast.error("Error saving user profile: " + error.message);
              });
          })
          .catch((error) => {
            toast.error("Error updating profile: " + error.message);
          })
          .finally(() => {
            reset();
          });
      })
      .catch((error) => {
        toast.error("Error occurred: " + error.message);
      });
  };

  //! FOR USER LOGIN

  const handleLogin = (data) => {
    const { email, password } = data;
    console.log("Login Form Data:", data);

    logIn(email, password)
      .then((userCredential) => {
        toast.success("Login successful");
        onClose(); // Close the modal after successful login
        reset(); // Reset form fields after submission
      })
      .catch((error) => {
        toast.error("Error occurred: " + error.message);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      backdrop="blur"
      placement="top-center"
    >
      <ModalContent>
        {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
        {isLogin ? (
          <>
            <ModalHeader className="flex flex-col gap-1 mx-auto">
              Log in
            </ModalHeader>
            <form onSubmit={handleSubmit(handleLogin)}>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <IoIosMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <span>{errors.email.message}</span>}
                <Input
                  endContent={
                    <FaLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && <span>{errors.password.message}</span>}
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox classNames={{ label: "text-small" }}>
                    Remember me
                  </Checkbox>
                  <Link color="foreground" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
                <div className="flex gap-16 mx-auto py-5">
                  <FacebookAuth />
                  <GoogleAuth />
                  <InstagramAuth />
                </div>
              </ModalBody>
              <div className="flex justify-center py-2">
                <p className="text-center">
                  Don't have an account?{" "}
                  <Link
                    color="foreground"
                    className="underline cursor-pointer"
                    onClick={toggleAuthForm}
                    size="sm"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
              <ModalFooter>
                <MyButton  color="default" size="md"  onPress={onClose}>
                  Close
                </MyButton>
                <MyButton   size="md" type="submit" color="primary">
                  Log in
                </MyButton>
              </ModalFooter>
            </form>
          </>
        ) : (
          <>
            <ModalHeader className="flex flex-col gap-1 mx-auto">
              Sign Up
            </ModalHeader>
            <form onSubmit={handleSubmit(handleSignup)}>
              <ModalBody>
                <Input
                  endContent={
                    <FaUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  autoFocus
                  label="Username"
                  placeholder="Enter your username"
                  variant="bordered"
                  {...register("name")}
                />
                <Input
                  endContent={
                    <MdPhotoCamera className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  autoFocus
                  label="Profile photo"
                  placeholder="Enter your Photo URL"
                  variant="bordered"
                  {...register("photoURL", {
                    required: "Photo URL is required",
                  })}
                />
                {errors.name && <span>{errors.name.message}</span>}
                <Input
                  endContent={
                    <IoIosMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <span>{errors.email.message}</span>}
                <Input
                  endContent={
                    <FaLock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && <span>{errors.password.message}</span>}
                <div className="flex gap-16 mx-auto py-5">
                  <FacebookAuth />
                  <GoogleAuth />
                  <InstagramAuth />
                </div>
              </ModalBody>
              <div className="flex justify-center py-2">
                <p className="text-center">
                  Already have an account?{" "}
                  <Link
                    color="foreground"
                    className="underline cursor-pointer"
                    onClick={toggleAuthForm}
                    size="sm"
                  >
                    Log in
                  </Link>
                </p>
              </div>
              <ModalFooter>
              <MyButton  color="default" size="md"  onPress={onClose}>
                  Close
                </MyButton>
                <MyButton   size="md" type="submit" color="primary">
                  Sign Up
                </MyButton>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
