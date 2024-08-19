import React from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../MyButton/MyButton";

const CollectionsHeader = ({ title, button, link }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-4xl  font-bold">{title}</h1>
      <Link to={link}>
        <MyButton className=" text-white" color="primary" size="md">
          {button}
        </MyButton>
      </Link>
    </div>
  );
};

export default CollectionsHeader;
