import React, { useEffect } from "react";
import axios from "axios";
import Banner from "../Components/Banner";
import BestSeller from "../Components/BestSeller";
import BrandList from "../Components/BrandList";
import CategoriesSection from "../Components/CategoriesSection";
import DealsSection from "../Components/DealsSection";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InfoSection from "../Components/InfoSection";
import Loader from "../Components/Loader";
import Topbar from "../Components/Topbar";
import TopBrands from "../Components/TopBrands";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  // var CompanyToken =
  //   "Bearer fjBYav0bCKsg0CbBd26N1kpUwaARujCegY9u5KYdLP0ucY2n5nzndvk-2Z6lb1fGfYAgBVqdmvkjfnCMqCEbWpAatt38Tm_G1sJTo7BuJR1CwVdWFZ3qkZDwarHHRaLemCikTg46U64zYvDetK1QLkl9JBXJYUEonuYGtvCkjonklUHBeLQCBTVa_EgpSwXoed3AMlAOMs7KnBEZd7J6JTBvqmOHFkRvfXn1suRn0XI5-PT2KQOZowO98XOyHDAJh8XIz2SBQ8BNR0wVv78Lch2Wj0FPqIdJXjc4y5VWmNg2SGx-kOJPQlMRdcvtDl6ScViIQq1mp1103GxrHF82LXtJls94MZYFIOOdBznbIb1aQG0y8z-PbrpGRtmA6Qi0w48sYACqJ6vnaDInqLcA_p6gLbBUTGS5oEzFXv0R7gQ";
  // var APIURL = "https://countydevapi.genial365.com/";
  // useEffect(() => {
  //   var config = {
  //     method: "get",
  //     url: `${APIURL}api/e_web_info/GetWebisteInfoWebConfig`,
  //     headers: {
  //       Authorization: CompanyToken,
  //     },
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //       // setting primary and secondary color based on API response
  //       const topBrandBg = document.querySelectorAll(".top-brand-2");
  //       topBrandBg.forEach((topBrandBg) => {
  //       topBrandBg.style.backgroundColor = response.data.secondary_color;
  //       });
  //       const textTopBrand = document.querySelectorAll(".nav-small");
  //       textTopBrand.forEach((textTopBrand) => {
  //         textTopBrand.addEventListener("mouseover", (event) => {
  //           event.target.style.color = response.data.primary_color;
  //         });
  //         textTopBrand.addEventListener("mouseout", (event) => {
  //           event.target.style.color = "#ffffff";
  //         });
  //       });
  //       const elements = document.querySelectorAll(
  //         ".btn-category,.number-item,.sale-tag,.bg-brand-2,.btn-brand-2"
  //       );
  //       elements.forEach((element) => {
  //         element.style.backgroundColor = response.data.primary_color;
  //       });
        
  //       const hoverEle = document.querySelectorAll(".sub-menu,.main-menu ");
  //       hoverEle.forEach((element) => {
  //         element.addEventListener("mouseover", (event) => {
          
  //           event.target.style.color = response.data.primary_color;
  //         });
  //         element.addEventListener("mouseout", (event) => {
  //           // event.target.style.backgroundColor = '';
  //           event.target.style.color = "#425A8B";
  //         });
  //       });

  //       const shopText = document.querySelectorAll(".btn-link-brand-2");
  //       shopText.forEach((element) => {
  //         element.style.color = response.data.primary_color;
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

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
      <main className="main">
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
