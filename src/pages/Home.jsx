import React, { useEffect } from "react";
import axios from 'axios';
import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import BrandList from "../components/BrandList";
import CategoriesSection from "../components/CategoriesSection";
import DealsSection from "../components/DealsSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection";
import Loader from "../components/Loader";
import Topbar from "../components/Topbar";
import TopBrands from "../components/TopBrands";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  // var axios = require("axios");
  useEffect(() => {
   

    var config = {
      method: "get",
      url: "https://countydevapi.genial365.com/api/e_web_info/GetWebisteInfoWebConfig",
      headers: {
        Authorization:
          "bearer 8O40MPQJdS7U0rr809wvrbCbEB0IlADGBtwhNHEoB_rhgkitVjZv2yKHAjscETg5JyI3zikr1SBnN001D6PIjHbyl9wo6a8Kn_aPfYv9YwMHnO3nfpZtj0MbWN5X-gyX_L9PmZ1t3_BRt7TgW7Dl9_37nJVaXCBwhxsCKkODzzGWqyPBgjhCKCIcMUIH9kSM0Y0swj2g8E_wxh9YSPvErsv7KuOZFfIqITAZ0DiGUuF9G0UCHbhpJj0dNhzRmqlKjCvadeNLtRPLcPBCsqi2-GW7ADnQuW_Lf60gD47ACmWEOo8HtvnRntE3CSo_BFBjVISrKrKFlJBFFEs0M8MS04TzMtMS2xZbN_RgkN_bhmDrG4HL6Y6npgP1c3WcFRTafYh4GJ6SkaqnKaFcQHUeRg",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Loader />
      <ScrollToTop
        smooth={true}
        color="white"
        viewBox="0 0 16 16"
        width="22"
        height="22"
        svgPath="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        style={{ backgroundColor: "#405786", borderRadius: "50%" }}
      />

      <Topbar />
      <Header />
      <main class="main">
        <DealsSection />
        <InfoSection />
        <CategoriesSection />
        <Banner />
        <BestSeller />
        <TopBrands />
        <BrandList />
      </main>
      <Footer />
    </>
  );
};

export default Home;
