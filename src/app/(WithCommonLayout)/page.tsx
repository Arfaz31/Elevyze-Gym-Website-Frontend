/* eslint-disable react/no-unescaped-entities */
import React from "react";
import KnowUs from "./_component/KnowUs";
import FeaturedClass from "./_component/FeaturedClass";
import Banner from "./_component/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <KnowUs />
      <FeaturedClass />
    </div>
  );
};

export default Home;
