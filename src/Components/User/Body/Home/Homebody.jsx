import React from "react";
import "./Homebody.css";
import image from "../../../Images/astronaut-jungle.jpg";
import image1 from "../../../Images/plaine-sky.jpg";
import image2 from "../../../Images/tiger-place-card.jpg";
import image3 from "../../../Images/adiyogi-destination.jpg";
import image4 from "../../../Images/houseboat-destination.jpg";
import image5 from "../../../Images/shimla-destination.jpg";

export const Homebody = () => {
  return (

    <div>
      <div class="carouselAlign ">
        <img className="carousel-image  " src={image} alt="..." />
        <h3 className="image-head">Find the best kept secret</h3>
        <p className="image-paragraph">
          Embark on a journey beyond the ordinary, where every destination is a
          whispered secret waiting to be <br />
          uncovered. At Hidden Heavens,we invite you to explore the world's most
          enchanting <br /> hidden gems, where tranquility meets adventure and
          authenticity intertwines with awe.
        </p>
        <input
          className="image-search"
          placeholder="Enter the location"
          type="text"
        />
        <i className="search-arrow bi bi-arrow-right-square-fill h4 "></i>
      </div>
 {/* place and hotel cards      */}
      <div>
        <div>
          <h5 className="cardheading">
            Popular Destinations
            {/* <span className=""> View all </span> */}
          </h5>
        </div>

        <div class="scroll-container  justify-content-center">
          <div class="cardAligns">
            <img
              src={image3}
              className=" cardImage "
              alt="Card 1"
            />
            <div class="cardcontent">Tiger</div>
            <i class="bi bi-geo-alt-fill"></i>
          </div>
          <div class="cardAligns">
            <img
              src={image4}
              className="cardImage "
              alt="Card 2"
            />
            <div class="cardcontent">Card 2</div>
          </div>
          <div class="cardAligns">
            <img
              src={image5}
              className="cardImage "
              alt="Card 3"
            />
            <div class="cardcontent">Card 3</div>
          </div>
          <div class="cardAligns">
            <img
              src={image2}
              className="cardImage "
              alt="oops"
            />
            {/* <div class="card-content">Shimla</div> */}
            <h3 className="cardcontent">Shimla</h3>
          </div>
        </div>

        <div>
          <h5 className="cardheading">popular Hotels & Home stay</h5>
        </div>

        <div class="scroll-container justify-content-center">
          <div class="cardAligns">
            <img src="room-hotel.jpg" className=" cardImage " alt="Card 1" />
            <div class="cardcontent">Card 1</div>
          </div>
          <div class="cardAligns">
            <img src="bungalow.jpg" className="cardImage " alt="Card 2" />
            <div class="cardcontent">Card 2</div>
          </div>
          <div class="cardAligns">
            <img src="hotel-pool.jpg" className="cardImage " alt="Card 3" />
            <div class="cardcontent">Card 3</div>
          </div>
          <div class="cardAligns">
            <img
              src="palm-trees-water.jpg"
              className="cardImage "
              alt="Card 5"
            />
            <div class="cardcontent">Card 5</div>
          </div>
        </div>
      </div>
     
 {/* black 3 icons */}
 <div className="container">
      <div className="row  IconAlign ">
        <div className="col-lg-4 ">
          <i className="bi bi-patch-check-fill iconsize iconAlignment"></i>
          <h5 className="icon-text-99">Best Price Guarantee</h5>
          <p className="icon-text-99">
            We offer the best deals. If you find a cheaper <br />
            flight elsewhere, contact us!
          </p>
        </div>
        <div className="col-lg-4  ">
          <i className="bi bi-currency-exchange iconsize iconAlignment"></i>
          <h5 className="icon-text-99">Refunds & Cancellations</h5>
          <p className="icon-text-99">Flight Cancellation Coverage</p>
        </div>
        <div className="col-lg-4 ">
          <i className="bi bi-emoji-heart-eyes-fill iconsize iconAlignment"></i>
          <h5 className="icon-text-99">Imperdiet a, vitae b</h5>
          <p className="icon-text-99">Stay Informed: COVID-19 Travel Restrictions</p>
        </div>
      </div>
    </div>


 {/* plane image */}
      <div className="container">
        <div className=" flying-sky1 ">
          <img src={image1} className="img-fluid Flying-sky1  " alt="" />
          <div className="image-AdverHead">
            <h3 id="img-10">Get Our First Users for 10% Off</h3>
            <p id="img-11">
              Book the Hidden Heaven Website and Manage Your Trips Anywhere
            </p>
          </div>
          <button className="Book">Book</button>
        </div>
      </div>
    </div>
  );
};
export default Homebody;
