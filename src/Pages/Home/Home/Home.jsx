import React from "react";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import TrustedBy from "../TrustedBy/TrustedBy";
import Collections from "../Collections/Collections";
import ContactUs from "../ContactUs/ContactUs";
import PopularCollections from "../../PopularCollections/PopularCollections";
import { Helmet } from "react-helmet-async";
import { TestimonialsVariant1 } from "../Testimonial/Testimonial";
import HotDeals from "../HotDeals/HotDeals";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Juvénia | Home </title>
      </Helmet>
      {/* <DashboardNavbar></DashboardNavbar> */}
      <Banner></Banner>
      {/* <Carousel></Carousel> */}
      <TrustedBy></TrustedBy>
      <PopularCollections></PopularCollections>
      <Collections></Collections>
      <HotDeals></HotDeals>
      <TestimonialsVariant1></TestimonialsVariant1>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;

