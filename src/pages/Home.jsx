import React, { useEffect } from "react";
// import axios from "axios";
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
import star from "../imgs/template/icons/star.svg";
import img1 from "../imgs/page/product/img-gallery-1.jpg";
import ReactImageZoom from "react-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
const Home = () => {
  const props = {
    width: 400,
    height: 420,
    zoomWidth: 500,
    img: img1,
    zoomPosition: "original",
   
  };
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
         {/* quickview modal */}
         <div
          className="modal fade"
          id="ModalQuickview"
          tabindex="-1"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content apply-job-form">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="modal-body p-30">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="gallery-image">
                      <div className="galleries-2">
                        <div className="detail-gallery">
                          <div className="product-image-slider-2">
                          <ReactImageZoom {...props} style={{marginTop:'50px'}}/>
                       
                          </div>
                        </div>
                        <div className="slider-nav-thumbnails-2">
                        <Swiper
                      slidesPerView={4}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      spaceBetween={50}
                      calculateHeight={true}
                      modules={[Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        {" "}
                        <div>
                          {" "}
                          <div className="item-thumb">
                            <img src={img1} alt="product image" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div>
                          {" "}
                          <div className="item-thumb">
                            <img src={img1} alt="product image" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div>
                          {" "}
                          <div className="item-thumb">
                            <img src={img1} alt="product image" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div>
                          {" "}
                          <div className="item-thumb">
                            <img src={img1} alt="product image" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div>
                          {" "}
                          <div className="item-thumb">
                            <img src={img1} alt="product image" />
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                        </div>
                      </div>
                    </div>
                    <div className="box-tags">
                      <div className="d-inline-block mr-25">
                        <span className="font-sm font-medium color-gray-900">
                          Category:
                        </span>
                        <a className="link" href="#">
                          Smartphones
                        </a>
                      </div>
                      <div className="d-inline-block">
                        <span className="font-sm font-medium color-gray-900">
                          Tags:
                        </span>
                        <a className="link" href="#">
                          Blue
                        </a>
                        ,
                        <a className="link" href="#">
                          Smartphone
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="product-info">
                      <h5 className="mb-15">
                        SAMSUNG Galaxy S22 Ultra, 8K Camera & Video, Brightest
                        Display Screen, S Pen Pro
                      </h5>
                      <div className="info-by">
                        <span className="bytext color-gray-500 font-xs font-medium">
                          by
                        </span>
                        <a
                          className="byAUthor color-gray-900 font-xs font-medium"
                          href="shop-vendor-list.html"
                        >
                          {" "}
                          Ecom Tech
                        </a>
                        <div className="rating d-inline-block">
                          <img src={star} alt="Ecom" />
                          <img src={star} alt="Ecom" />
                          <img src={star} alt="Ecom" />
                          <img src={star} alt="Ecom" />
                          <img src={star} alt="Ecom" />
                          <span className="font-xs color-gray-500 font-medium">
                            {" "}
                            (65 reviews)
                          </span>
                        </div>
                      </div>
                      <div className="border-bottom pt-10 mb-20"></div>
                      <div className="box-product-price">
                        <h3 className="color-brand-3 price-main d-inline-block mr-10">
                          $2856.3
                        </h3>
                        <span className="color-gray-500 price-line font-xl line-througt">
                          $3225.6
                        </span>
                      </div>
                      <div className="product-description mt-10 color-gray-900">
                        <ul className="list-dot">
                          <li>8k super steady video</li>
                          <li>Nightography plus portait mode</li>
                          <li>50mp photo resolution plus bright display</li>
                          <li>Adaptive color contrast</li>
                          <li>premium design & craftmanship</li>
                          <li>Long lasting battery plus fast charging</li>
                        </ul>
                      </div>
                      <div className="box-product-color mt-10">
                        <p className="font-sm color-gray-900">
                          Color:
                          <span className="color-brand-2 nameColor">Pink Gold</span>
                        </p>
                        <ul className="list-colors">
                          <li className="disabled">
                            <img
                              src="assets/imgs/page/product/img-gallery-1.jpg"
                              alt="Ecom"
                              title="Pink"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/imgs/page/product/img-gallery-2.jpg"
                              alt="Ecom"
                              title="Gold"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/imgs/page/product/img-gallery-3.jpg"
                              alt="Ecom"
                              title="Pink Gold"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/imgs/page/product/img-gallery-4.jpg"
                              alt="Ecom"
                              title="Silver"
                            />
                          </li>
                          <li className="active">
                            <img
                              src="assets/imgs/page/product/img-gallery-5.jpg"
                              alt="Ecom"
                              title="Pink Gold"
                            />
                          </li>
                          <li className="disabled">
                            <img
                              src="assets/imgs/page/product/img-gallery-6.jpg"
                              alt="Ecom"
                              title="Black"
                            />
                          </li>
                          <li className="disabled">
                            <img
                              src="assets/imgs/page/product/img-gallery-7.jpg"
                              alt="Ecom"
                              title="Red"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="box-product-style-size mt-10">
                        <div className="row">
                          <div className="col-lg-12 mb-10">
                            <p className="font-sm color-gray-900">
                              Style:
                              <span className="color-brand-2 nameStyle">S22</span>
                            </p>
                            <ul className="list-styles">
                              <li className="disabled" title="S22 Ultra">
                                S22 Ultra
                              </li>
                              <li className="active" title="S22">
                                S22
                              </li>
                              <li title="S22 + Standing Cover">
                                S22 + Standing Cover
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-12 mb-10">
                            <p className="font-sm color-gray-900">
                              Size:
                              <span className="color-brand-2 nameSize">512GB</span>
                            </p>
                            <ul className="list-sizes">
                              <li className="disabled" title="1GB">
                                1GB
                              </li>
                              <li className="active" title="512 GB">
                                512 GB
                              </li>
                              <li title="256 GB">256 GB</li>
                              <li title="128 GB">128 GB</li>
                              <li className="disabled" title="64GB">
                                64GB
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="buy-product mt-5">
                        <p className="font-sm mb-10">Quantity</p>
                        <div className="box-quantity">
                          <div className="input-quantity">
                            <input
                              className="font-xl color-brand-3"
                              type="text"
                              value="1"
                            />
                            <span className="minus-cart"></span>
                            <span className="plus-cart"></span>
                          </div>
                          <div className="button-buy">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add to cart
                            </a>
                            <a className="btn btn-buy" href="shop-checkout.html">
                              Buy now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
