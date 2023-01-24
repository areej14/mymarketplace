import React, { useEffect } from "react";
import axios from "axios";
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
  var CompanyToken =
    "Bearer bZtncs_05yfrWsVgLIlmP1QhgMcrWEzbok0yC7Bz2wsnI3C-La07N7ecsQyS0mJjxS81-6nSG-MAD4ceURmMr1TqBKWCG7sko0XSFm3WK7u-s_1O4KUwtx89CuP3XF-UpuqAPqQjtnoscet5jYdH5M9CmjRHJpUTN3UyVp2-PD2z3-6Ffg1GWmNac7qnzUUY4DSdwfQfPXTF6CH6jWB748OoVTJG2okxYy7PhyevS8x8ezkf3JuGIF42XQMrChl4CXtMVakufBVot4bNTmXCD-nWTTlMzqDnNnLi6zWPErUuM850DUTJWPYVyW2cckJHH6zYMeJUlKiC-wqeRkWMfprqQv3wx_EJR1t3eWKRvAKQx62kYy6XtD3Pp-fEKqp4-YJq2r5HJF0oKXcEKWQTV1f6GFVVzAjMZo_GZ3_DBWU";
  var APIURL = "https://countydevapi.genial365.com/";
  useEffect(() => {
    var config = {
      method: "get",
      url: `${APIURL}api/e_web_info/GetWebisteInfoWebConfig`,
      headers: {
        Authorization: CompanyToken,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
        //
        const elements = document.querySelectorAll(
          ".btn-category,.top-brand-2,.number-item,.sale-tag,.bg-brand-2"
        );
        elements.forEach((element) => {
          element.style.backgroundColor = "green";
        });
        //
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
