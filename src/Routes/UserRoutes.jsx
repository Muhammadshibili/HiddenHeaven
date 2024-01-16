import React from "react";
import { Home1page } from "../Pages/User/Home1page";
import { Route, Routes } from "react-router-dom";
import { Loginpage } from "../Pages/User/Loginpage";

export const UserRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home1page />} />
        <Route path="/Loginpage" element={<Loginpage/>} />
      </Routes>
    </div>
  );
};

export default UserRoutes;
