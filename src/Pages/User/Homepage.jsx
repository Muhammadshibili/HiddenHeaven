import React from "react";
import { Header } from "../../Components/User/Header/Header";
import Footer from "../../Components/User/Footer/Footer"; 
import Homebody from "../../Components/User/Body/Home/Homebody";

export const Homepage = () => {
  return (
    <div >
      <Header />
      <Homebody />
      <Footer />

    </div>
  );
};
