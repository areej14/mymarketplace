import React from 'react'
import star from '../imgs/template/icons/star.svg'
import apple from "../imgs/page/homepage1/imgsp3.png";
import philips from "../imgs/page/homepage1/imgsp4.png";
import appleMac from "../imgs/page/homepage1/imgsp5.png";
import appleWatch from "../imgs/page/homepage1/imgsp6.png";
import camera from "../imgs/page/homepage1/imgsp7.png";
import { Link } from 'react-router-dom';
const BestSeller = () => {
  return (
    <section className="section-box pt-50">
      <div className="container">
        <div className="head-main"> 
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <h3 className="mb-5">Best Sellers</h3>
              <p className="font-base color-gray-500">Special products in this month.</p>
            </div>
            <div className="col-xl-5 col-lg-6">
              <ul className="nav nav-tabs" role="tablist">
                <li><a className="active" href="#tab-all" data-bs-toggle="tab" role="tab" aria-controls="tab-all"
                    aria-selected="true">All</a></li>
                <li><a href="#tab-bestseller" data-bs-toggle="tab" role="tab" aria-controls="tab-bestseller"
                    aria-selected="true">Best seller</a></li>
                <li><a href="#tab-mostviewed" data-bs-toggle="tab" role="tab" aria-controls="tab-mostviewed"
                    aria-selected="true">Most viewed</a></li>
                <li><a href="#tab-topbrands" data-bs-toggle="tab" role="tab" aria-controls="tab-topbrands"
                    aria-selected="true">Top Brands</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="tab-all" role="tabpanel" aria-labelledby="tab-all">
            <div className="list-products-5">
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={apple} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span
                        className="color-gray-500 price-line">$3225.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={philips} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Philips</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Philips H4205 On-Ear Wireless Headphones with 32mm</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$154.0.3</strong><span
                        className="color-gray-500 price-line">$162.5</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleMac} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2325.3</strong><span
                        className="color-gray-500 price-line">$2225.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleWatch} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Apple Watch Series 8 [GPS 45mm] Smart Watch</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$530.3</strong><span
                        className="color-gray-500 price-line">$560.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={camera} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Kami
                      Tech</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product.html">Kami by YI 4pc
                      1080p Home Security Cameras</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$156.3</strong><span
                        className="color-gray-500 price-line">$250.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-bestseller" role="tabpanel" aria-labelledby="tab-bestseller">
            <div className="list-products-5">
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleMac} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2325.3</strong><span
                        className="color-gray-500 price-line">$2225.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleWatch} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Apple Watch Series 8 [GPS 45mm] Smart Watch</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$530.3</strong><span
                        className="color-gray-500 price-line">$560.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={camera} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Kami
                      Tech</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product.html">Kami by YI 4pc
                      1080p Home Security Cameras</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$156.3</strong><span
                        className="color-gray-500 price-line">$250.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={apple} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span
                        className="color-gray-500 price-line">$3225.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={philips} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Philips</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Philips H4205 On-Ear Wireless Headphones with 32mm</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$154.0.3</strong><span
                        className="color-gray-500 price-line">$162.5</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-mostviewed" role="tabpanel" aria-labelledby="tab-mostviewed">
            <div className="list-products-5">
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleMac} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2325.3</strong><span
                        className="color-gray-500 price-line">$2225.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleWatch} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Apple Watch Series 8 [GPS 45mm] Smart Watch</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$530.3</strong><span
                        className="color-gray-500 price-line">$560.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={apple} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span
                        className="color-gray-500 price-line">$3225.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={philips} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Philips</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Philips H4205 On-Ear Wireless Headphones with 32mm</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$154.0.3</strong><span
                        className="color-gray-500 price-line">$162.5</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={camera} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Kami
                      Tech</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product.html">Kami by YI 4pc
                      1080p Home Security Cameras</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$156.3</strong><span
                        className="color-gray-500 price-line">$250.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-topbrands" role="tabpanel" aria-labelledby="tab-topbrands">
            <div className="list-products-5">
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={camera} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Kami
                      Tech</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product.html">Kami by YI 4pc
                      1080p Home Security Cameras</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$156.3</strong><span
                        className="color-gray-500 price-line">$250.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={apple} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span
                        className="color-gray-500 price-line">$3225.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={philips} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Philips</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Philips H4205 On-Ear Wireless Headphones with 32mm</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$154.0.3</strong><span
                        className="color-gray-500 price-line">$162.5</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleMac} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2325.3</strong><span
                        className="color-gray-500 price-line">$2225.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><Link className="btn btn-wishlist btn-tooltip mb-10"
                      to={`/WishList`} aria-label="Add To Wishlist"></Link><a
                      className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleWatch} alt="Ecom"/></a>
                  </div>
                  <div className="info-right"><a className="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Apple Watch Series 8 [GPS 45mm] Smart Watch</a>
                    <div className="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$530.3</strong><span
                        className="color-gray-500 price-line">$560.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSeller
