import React from "react";
import shoe from "../../../assets/Category/10489.jpg";
import woman from "../../../assets/Category/17614.jpg";
import men from "../../../assets/Category/2147635503.jpg";
import watch from "../../../assets/Category/2149241142.jpg";
// import sale from "../../../../../Assets of chic.styling/loginSignup.jpg";
import CollectionsHeader from "../../Components/CollectionsHeader/CollectionsHeader";
import { Element } from "react-scroll";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { MyButton } from "../../Components/MyButton/MyButton";
import toast, { Toaster } from "react-hot-toast";

const Collections = () => {
  const handleNotfyMe = () => {
    toast.success("You will get updates");
  };

  const handleVisit = () => {
    toast.error("Feature is yet to come");
  };

  return (
    <div className="py-10">
      <CollectionsHeader
        title={
          <>
            Unveil <br /> Our Exclusive Collections
          </>
        }
        button={"Login"}
      />
      <div className="max-w-screen-2xl py-14 gap-6 grid grid-cols-12 grid-rows-2 px-8">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <Link to="/mensCollection" className="block h-full">
            <CardHeader className="absolute z-10 bottom-0 flex-col !items-start">
              <p className="text-2xl text-white/60 uppercase font-bold">
                Men's Collection
              </p>
              <h4 className="text-white font-semibold text-large">
                Upgrade your style with <br /> the latest trends
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Men Collection"
              className="z-0 w-full h-full object-cover"
              src={men}
            />
          </Link>
        </Card>

        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <Link to="/womensCollection" className="block h-full">
            <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
              <p className="text-sm text-white/60 uppercase font-bold">
                Women's Collection
              </p>
              <h4 className="text-white font-semibold text-xl">
                Discover the latest <br /> fashion for women
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Woman Collection"
              className="z-0 w-full h-full object-cover"
              src={woman}
            />
          </Link>
        </Card>

        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <Link to="/shoeCollection" className="block h-full">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Shoe Collection
              </p>
              <h4 className="text-white font-medium text-large">
                Step up your shoe game
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Shoe Collection"
              className="z-0 w-full h-full object-cover"
              src={shoe}
            />
          </Link>
        </Card>

        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          {/* <Link className="block h-full"> */}
            <CardHeader className="absolute z-10 bottom-16 right-0 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Watch Collection
              </p>
              <h4 className="text-white font-semibold text-2xl">
                Timeless elegance for every occasion
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Watch Collection"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={watch}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-white text-tiny">Available soon.</p>
                <p className="text-white text-tiny">Get notified.</p>
              </div>
              <MyButton
                onClick={handleNotfyMe}
                color="secondary"
                className="text-tiny"
                radius="full"
                size="sm"
              >
                Notify Me
              </MyButton>
            </CardFooter>
          {/* </Link> */}
        </Card>

        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          {/* <Link to="/saleCollection" className="block h-full"> */}
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Sale Collection
              </p>
              <h4 className="text-white/90 font-semibold text-2xl">
                Don't miss our <br /> special offers
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Sale Collection"
              className="z-0 w-full h-full object-cover"
              src={men}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Sale icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src={men}
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Exclusive Deals</p>
                  <p className="text-tiny text-white/60">
                    Grab them before they're gone.
                  </p>
                </div>
              </div>
              <MyButton
                onClick={handleVisit}
                color="primary"
                radius="full"
                size="md"
              >
                Visit
              </MyButton>
            </CardFooter>
          {/* </Link> */}
        </Card>
      </div>
    </div>
  );
};

export default Collections;
