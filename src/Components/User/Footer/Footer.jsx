import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import image from "../../Images/astronaut-footer.jpg";

function Footer() {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col">
            <img src="" className="logo" />
            <h1 id="brand1">HiddenHeaven</h1>
            <div className="social-icons">
              <i className="bi bi-instagram"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter-x"></i>
            </div>
          </div>
          <div className="col1">
            <ul>
              <li>
                <a href="">hlep</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Custommer Service</a>
              </li>
              <li>
                <Link to="">How-to Guide</Link>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>

    // <div>
    //   <footer className="mt-5 footer">
    //     <div class="card text-bg-dark f-align">
    //       <img
    //         src={image}
    //         class="card-img"
    //         alt="not fount"
    //       />
    //       <div class="card-img-overlay">
    //         <div className="row">
    //           <div className="col-md-6">
    //             <h5 class="card-title ">Hidden Heaven</h5>
    //             <div className="social-icons ">
    //               <i className="bi bi-instagram p-3"></i>
    //               <i className="bi bi-facebook"></i>
    //               <i className="bi bi-twitter-x p-3"></i>
    //             </div>
    //           </div>
    //           <div className="col-md-6 footerlink  ">
    //             <ul className="p-4 ">
    //               <li className="p-1 ">
    //                 <Link to="" className="text-white text-decoration-none">hlep</Link>
    //               </li>
    //               <li className="p-1">
    //                 <Link to="" className="text-white text-decoration-none">FAQ</Link>
    //               </li>
    //               <li className="p-1">
    //                 <Link to="" className="text-white text-decoration-none">Custommer Service</Link>
    //               </li>
    //               <li className="p-1">
    //                 <Link to="" className="text-white text-decoration-none">How-to Guide</Link>
    //               </li>
    //               <li className="p-1">
    //                 <Link to="" className="text-white text-decoration-none">Contact Us</Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
}

export default Footer;
