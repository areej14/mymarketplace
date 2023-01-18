import React from 'react'
import banner2 from '../imgs/page/homepage6/banner2.png'

const DealsSection = () => {
  return (
    <section className="section-box mt-35">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="banner-left">
            <div className="box-adsolute-banner">
              <h5 className="color-gray-900">Grocery</h5><a className="btn btn-link-brand-2 text-capitalize">Shop
                Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-30">
          <div className="box-swiper">
            <div className="swiper-container swiper-banner-1">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="banner-middle" style={{backgroundImage: `url(${banner2})`}}>
                    <div className="box-adsolute-banner">
                      <h6 className="color-gray-900 mb-10">Big & Fresh Offers</h6>
                      <h2 className="color-gray-1000 mb-5">Kid's Zone</h2>
                      <h6 className="sale-tag">Sale On This Weekend</h6>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-middle" style={{backgroundImage: `url(${banner2})`}}>
                    <div className="box-adsolute-banner">
                      <h6 className="color-gray-900 mb-10">Big & Fresh Offers</h6>
                      <h2 className="color-gray-1000 mb-5">Games</h2>
                      <h6 className="sale-tag">Sale On This Weekend</h6>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-middle" style={{backgroundImage: `url(${banner2})`}}>
                    <div className="box-adsolute-banner">
                      <h6 className="color-gray-900 mb-10">Big & Fresh Offers</h6>
                      <h2 className="color-gray-1000 mb-5">Electronics</h2>
                      <h6 className="sale-tag">Sale On This Weekend</h6>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-middle" style={{backgroundImage: `url(${banner2})`}}>
                    <div className="box-adsolute-banner">
                      <h6 className="color-gray-900 mb-10">Big & Fresh Offers</h6>
                      <h2 className="color-gray-1000 mb-5">Medicine & Fitness</h2>
                      <h6 className="sale-tag">Sale On This Weekend</h6>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-middle" style={{backgroundImage: `url(${banner2})`}}>
                    <div className="box-adsolute-banner">
                      <h6 className="color-gray-900 mb-10">Big & Fresh Offers</h6>
                      <h2 className="color-gray-1000 mb-5">Fashion</h2>
                      <h6 className="sale-tag">Sale On This Weekend</h6>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-middle" style={{backgroundImage: `url(${banner2})`}}>
                    <div className="box-adsolute-banner">
                      <h6 className="color-gray-900 mb-10">Big & Fresh Offers</h6>
                      <h2 className="color-gray-1000 mb-5">Food Court</h2>
                      <h6 className="sale-tag">Sale On This Weekend</h6>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-middle" style={{backgroundImage: `url(assets/imgs/page/homepage6/banner2-2.png)`}}>
                    <div className="box-adsolute-banner">
                      <h6 className="color-gray-900 mb-10">Big & Fresh Offers</h6>
                      <h2 className="color-gray-1000 mb-5">Automotive & Agriculture</h2>
                      <h6 className="sale-tag">Sale On This Weekend</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next swiper-button-next-style-4"></div>
              <div className="swiper-button-prev swiper-button-prev-style-4"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-3"> 
          <div className="banner-right-home6">
            <div className="box-adsolute-banner">
              <h5 className="color-gray-900">Services</h5><a className="btn btn-link-brand-2 text-capitalize">Shop
                Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DealsSection