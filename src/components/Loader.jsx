import React from "react";
import favicon from "../imgs/template/favicon.svg";
import "../style.css";
import '../mystyle.css'
const Loader = () => {
  return (
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="text-center">
              <img className="mb-10" src={favicon} alt="Ecom" />
              <div className="preloader-dots"></div>
            </div>
          </div>
        </div> 
      </div>
    
  );
};

export default Loader;
