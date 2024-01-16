import React from "react";
import "./Home1body.css";
import image from "./astronaut-jungle.jpg";

export const Home1body = () => {
  return (
    <div>
      <div class="card bg-dark text-white">
        <img src={image} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">Find the Best Kept Secrets</h5>
          <p class="card-text">
            Embark on a journey beyond the ordinary, where every destination is
            a whispered secret waiting to be uncovered. At Hidden Heavens,we
            invite you to explore the world's most enchanting hidden gems, where
            tranquility meets adventure and authenticity intertwines with awe.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home1body;
