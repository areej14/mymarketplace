import React from 'react'
import star from '../imgs/template/icons/star.svg'
import apple from "../imgs/page/homepage1/imgsp3.png";
import philips from "../imgs/page/homepage1/imgsp4.png";
import appleMac from "../imgs/page/homepage1/imgsp5.png";
import appleWatch from "../imgs/page/homepage1/imgsp6.png";
import camera from "../imgs/page/homepage1/imgsp7.png";

const BestSeller = () => {
  return (
    <section class="section-box pt-50">
      <div class="container">
        <div class="head-main"> 
          <div class="row">
            <div class="col-xl-7 col-lg-6">
              <h3 class="mb-5">Best Sellers</h3>
              <p class="font-base color-gray-500">Special products in this month.</p>
            </div>
            <div class="col-xl-5 col-lg-6">
              <ul class="nav nav-tabs" role="tablist">
                <li><a class="active" href="#tab-all" data-bs-toggle="tab" role="tab" aria-controls="tab-all"
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
        <div class="tab-content">
          <div class="tab-pane fade active show" id="tab-all" role="tabpanel" aria-labelledby="tab-all">
            <div class="list-products-5">
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={apple} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$2856.3</strong><span
                        class="color-gray-500 price-line">$3225.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={philips} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Philips</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Philips H4205 On-Ear Wireless Headphones with 32mm</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$154.0.3</strong><span
                        class="color-gray-500 price-line">$162.5</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleMac} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$2325.3</strong><span
                        class="color-gray-500 price-line">$2225.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleWatch} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Apple Watch Series 8 [GPS 45mm] Smart Watch</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$530.3</strong><span
                        class="color-gray-500 price-line">$560.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={camera} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500" href="shop-vendor-single.html">Kami
                      Tech</a><br/><a class="color-brand-3 font-sm-bold" href="shop-single-product.html">Kami by YI 4pc
                      1080p Home Security Cameras</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$156.3</strong><span
                        class="color-gray-500 price-line">$250.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="tab-bestseller" role="tabpanel" aria-labelledby="tab-bestseller">
            <div class="list-products-5">
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleMac} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$2325.3</strong><span
                        class="color-gray-500 price-line">$2225.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleWatch} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Apple Watch Series 8 [GPS 45mm] Smart Watch</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$530.3</strong><span
                        class="color-gray-500 price-line">$560.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={camera} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500" href="shop-vendor-single.html">Kami
                      Tech</a><br/><a class="color-brand-3 font-sm-bold" href="shop-single-product.html">Kami by YI 4pc
                      1080p Home Security Cameras</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$156.3</strong><span
                        class="color-gray-500 price-line">$250.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={apple} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$2856.3</strong><span
                        class="color-gray-500 price-line">$3225.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={philips} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Philips</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Philips H4205 On-Ear Wireless Headphones with 32mm</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$154.0.3</strong><span
                        class="color-gray-500 price-line">$162.5</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="tab-mostviewed" role="tabpanel" aria-labelledby="tab-mostviewed">
            <div class="list-products-5">
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleMac} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$2325.3</strong><span
                        class="color-gray-500 price-line">$2225.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleWatch} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Apple Watch Series 8 [GPS 45mm] Smart Watch</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$530.3</strong><span
                        class="color-gray-500 price-line">$560.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={apple} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$2856.3</strong><span
                        class="color-gray-500 price-line">$3225.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={philips} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Philips</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Philips H4205 On-Ear Wireless Headphones with 32mm</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$154.0.3</strong><span
                        class="color-gray-500 price-line">$162.5</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={camera} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500" href="shop-vendor-single.html">Kami
                      Tech</a><br/><a class="color-brand-3 font-sm-bold" href="shop-single-product.html">Kami by YI 4pc
                      1080p Home Security Cameras</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$156.3</strong><span
                        class="color-gray-500 price-line">$250.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="tab-topbrands" role="tabpanel" aria-labelledby="tab-topbrands">
            <div class="list-products-5">
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={camera} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500" href="shop-vendor-single.html">Kami
                      Tech</a><br/><a class="color-brand-3 font-sm-bold" href="shop-single-product.html">Kami by YI 4pc
                      1080p Home Security Cameras</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$156.3</strong><span
                        class="color-gray-500 price-line">$250.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={apple} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$2856.3</strong><span
                        class="color-gray-500 price-line">$3225.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={philips} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Philips</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Philips H4205 On-Ear Wireless Headphones with 32mm</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$154.0.3</strong><span
                        class="color-gray-500 price-line">$162.5</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleMac} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$2325.3</strong><span
                        class="color-gray-500 price-line">$2225.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-grid-style-3">
                <div class="card-grid-inner">
                  <div class="tools"><a class="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend"
                      data-bs-placement="left"></a><a class="btn btn-wishlist btn-tooltip mb-10"
                      href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a
                      class="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a
                      class="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview"
                      data-bs-toggle="modal"></a></div>
                  <div class="image-box"><span class="label bg-brand-2">-17%</span><a
                      href="shop-single-product.html"><img src={appleWatch} alt="Ecom"/></a>
                  </div>
                  <div class="info-right"><a class="font-xs color-gray-500"
                      href="shop-vendor-single.html">Apple</a><br/><a class="color-brand-3 font-sm-bold"
                      href="shop-single-product.html">Apple Watch Series 8 [GPS 45mm] Smart Watch</a>
                    <div class="rating"><img src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><img
                        src={star} alt="Ecom"/><span
                        class="font-xs color-gray-500">(65)</span></div>
                    <div class="price-info"><strong class="font-lg-bold color-brand-3 price-main">$530.3</strong><span
                        class="color-gray-500 price-line">$560.6</span></div>
                    <div class="mt-20 box-btn-cart"><a class="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul class="list-features">
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
