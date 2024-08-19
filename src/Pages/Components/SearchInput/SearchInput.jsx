import React from "react";
import {Input} from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
const SearchInput = () => {
    return (
        <div className=" rounded-2xl flex justify-center items-center ">
      <Input
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          
         
          inputWrapper: [
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon />
        }
      />
    </div>
    );
};

export default SearchInput;