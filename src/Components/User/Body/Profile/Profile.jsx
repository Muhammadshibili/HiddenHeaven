import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className="card__text">
        <div className="card__img">
          <i class="bi3 bi-plus-square-fill"></i>
        </div>
        <div className="card__detail">
          <h1 className="card__header">David John</h1>
        </div>
      </div>

      <div className="profile-all-buttons">
        <ul className="btn-ul-list-all">
          <li>
            <button className="profile-btn1">
              <i class="bi2 bi-person-fill"></i> Profile Information
            </button>
          </li>
          <li>
            <button className="profile-btn2">
              <i className="bi2 bi-headset"></i> Help and Support
            </button>
          </li>
          <li>
            <button className="profile-btn3">
              <i className="bi2 bi-lock-fill"></i> Security and Password
            </button>
          </li>
          <li>
            <button className="profile-btn4">
              <i className="bi2 bi-telephone"></i> Contact Information
            </button>
          </li>
          <li>
            <button className="profile-btn4" href="#">
              <i className="bi2 bi-trash3-fill"></i>
              Delete Account Or Deactivation Account
            </button>
          </li>
        </ul>
      </div>
      <div className="frofile-logout-btn">
        <button className="profile-btn6">Log Out</button>
      </div>
    </div>
  );
};

export default Profile;

