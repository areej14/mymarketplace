import React, { useState, useEffect } from "react";
import favicon from "../imgs/template/favicon.svg";
const Loader = () => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFlag(false);
    }, 3000);
  }, []);

  return (
    <>
      {flag && (
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
      )}
    </>
  );
};

export default Loader;
