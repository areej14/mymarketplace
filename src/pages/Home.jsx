import React from "react";
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
