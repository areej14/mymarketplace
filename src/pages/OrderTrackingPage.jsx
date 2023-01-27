import React from 'react'
import Loader from '../Components/Loader'
import Topbar from '../Components/Topbar'
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from '../Components/Footer';
import OrderTracking from '../Components/OrderTracking';
import { Link } from 'react-router-dom';

const OrederTrackingPage = () => {
  return (
    <>
      <Loader/>
      <ScrollToTop
        smooth={true}
        color="white"
        viewBox="0 0 16 16"
        width="22"
        height="22"
        svgPath="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        style={{ backgroundColor: "#405786", borderRadius: "50%" }}
      />
      <Topbar/>
      <Header />
      <main className="main">
      <div className="section-box">
        <div className="breadcrumbs-div">
          <div className="container">
            <ul className="breadcrumb">
            <li><Link className="font-xs color-gray-1000" to={`/`}>Home</Link></li>
              <li><Link className="font-xs color-gray-500" to={`/Account`}>Account</Link></li>
              <li><Link className="font-xs color-gray-500" to={`/OrderTracking`}>Order Tracking</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container pt-10">
      <div className="col-10"> 
     <OrderTracking styleClass={"tab-pane fade active show"}/>
     </div>
     </div>
      </main>
      <Footer/>
    </>
  )
}

export default OrederTrackingPage