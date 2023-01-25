import React from "react";
import microsoft from "../imgs/slider/logo/microsoft.svg";
import sony from "../imgs/slider/logo/sony.svg";
import acer from "../imgs/slider/logo/acer.svg";
import nokia from "../imgs/slider/logo/nokia.svg";
import assus from "../imgs/slider/logo/assus.svg";
import casio from "../imgs/slider/logo/casio.svg";
import dell from "../imgs/slider/logo/dell.svg";
import panasonic from "../imgs/slider/logo/panasonic.svg";
import vaio from "../imgs/slider/logo/vaio.svg";
import sharp from "../imgs/slider/logo/sharp.svg";
import "../css/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);
const BrandList = () => {
  return (
    <div className="section-box">
      <div className="container">
        <div className="list-brands list-none-border">
          <div className="box-swiper">
            <div className="swiper-container swiper-group-10">
              <div className="swiper-wrapper">
                <Swiper
                  slidesPerView={9}
                  slidesPerColumn={2}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={microsoft} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={sony} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={acer} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={nokia} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={assus} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={casio} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={dell} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={panasonic} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={vaio} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={sharp} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandList;
