import React from "react";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import TrustedBy from "../TrustedBy/TrustedBy";
import Collections from "../Collections/Collections";
import ContactUs from "../ContactUs/ContactUs";
import PopularCollections from "../../PopularCollections/PopularCollections";
import { Helmet } from "react-helmet-async";
import { TestimonialsVariant1 } from "../Testimonial/Testimonial";
import DashboardNavbar from "../../Dashboard/DasboardNavbar/DashboardNavbar";

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
      <Collections></Collections>
      <PopularCollections></PopularCollections>
      <TestimonialsVariant1></TestimonialsVariant1>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
