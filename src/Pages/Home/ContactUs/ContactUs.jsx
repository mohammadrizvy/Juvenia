import React from "react";
import image from "../../../assets/Contact us/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model.png";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { MyButton } from "../../Components/MyButton/MyButton";

const ContactUs = () => {
  return (
    <div className="hero  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="">
          <MyButton className="mb-3" color="primary" size="sm" radius="full">
            join us
          </MyButton>
          <h1 className="text-5xl font-bold">Juvénia For Everyone</h1>
          <p className="py-6">
            We All Want To Live More Sustainably. We're Here To <br />
            Make It Easier
          </p>
          <label className="input w-3/6 input-md bg-black flex items-center border-none rounded-full ">
            <input
              type="email"
              className="grow rounded-2xl placeholder-white text-white"
              placeholder="Enter your email & join us"
            />
            <MyButton
              radius="full"
              size="lg"
              color="secondary"
              className="ml-3"
            >
              Subscribe
            </MyButton>
            <ChatBubbleLeftRightIcon className="size-6 text-black" />
          </label>
        </div>
        <img src={image} className="max-w-lg rounded-lg  " />
      </div>
    </div>
  );
};

export default ContactUs;
