import React from "react";
import { Switch } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";

const SwitchDL = () => {
  return (
    <Switch
      defaultSelected
      size="md"
      color="default"
      startContent={<Sun />}
      endContent={<Moon />}
    ></Switch>
  );
};

export default SwitchDL;
