import React from "react";
import { Homepage } from "../Pages/User/Homepage";
import { Route, Routes } from "react-router-dom";
import { Loginpage } from "../Pages/User/Loginpage";
import Servicespage from "../Pages/User/Servicespage";
import Contributepage from "../Pages/User/Contributepage";
import Shimlapage from "../Pages/User/Shimlapage";
import Aboutuspage from "../Pages/User/Aboutuspage";
import Profilepage from "../Pages/User/Profilepage";
import Signuppage from "../Pages/User/Signuppage";

export const UserRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Loginpage />} />
        <Route path="/Services" element={<Servicespage />} />
        <Route path="/Contribute" element={<Contributepage />} />
        <Route path="/Shimla" element={<Shimlapage />} />
        <Route path="/aboutus" element={<Aboutuspage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/signup" element={<Signuppage />} />
      </Routes>
    </div>
  );
};

export default UserRoutes;
