import React from 'react'
import Loader from '../Components/Loader'
import Topbar from '../Components/Topbar'
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import star from "../imgs/template/icons/star.svg";
import Footer from '../Components/Footer';
import InfoSection from '../Components/InfoSection';
import gpay from "../imgs/page/checkout/gpay.svg"
import paypal from "../imgs/page/checkout/paypal.svg"
import amazon from "../imgs/page/checkout/amazon.svg"
import { Link } from 'react-router-dom';
const Checkout = () => {
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
      <div class="section-box">
        <div class="breadcrumbs-div">
          <div class="container">
            <ul class="breadcrumb">
              <li><a class="font-xs color-gray-1000" href="index.html">Home</a></li>
              <li><a class="font-xs color-gray-500" href="shop-grid.html">Shop</a></li>
              <li><a class="font-xs color-gray-500" href="shop-cart.html">Checkout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <section class="section-box shop-template">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="box-border">
                <div class="box-payment"><a class="btn btn-gpay"><img src={gpay} alt="Ecom"/></a><a class="btn btn-paypal"><img src={paypal} alt="Ecom"/></a><a class="btn btn-amazon"><img src={amazon} alt="Ecom"/></a></div>
                <div class="border-bottom-4 text-center mb-20">
                  <div class="text-or font-md color-gray-500">Or</div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-sm-6 mb-20">
                    <h5 class="font-md-bold color-brand-3 text-sm-start text-center">Contact information</h5>
                  </div>
                  <div class="col-lg-6 col-sm-6 mb-20 text-sm-end text-center"><span class="font-sm color-brand-3">Already have an account?</span><a class="font-sm color-brand-1" href="page-login.html"> Login</a></div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <input class="form-control font-sm" type="text" placeholder="Email*"/>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label class="font-sm color-brand-3" for="checkboxOffers">
                        <input class="checkboxOffer" id="checkboxOffers" type="checkbox"/>Keep me up to date on news and exclusive offers
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <h5 class="font-md-bold color-brand-3 mt-15 mb-20">Shipping address</h5>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input class="form-control font-sm" type="text" placeholder="First name*"/>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input class="form-control font-sm" type="text" placeholder="Last name*"/>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <input class="form-control font-sm" type="text" placeholder="Address 1*"/>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <input class="form-control font-sm" type="text" placeholder="Address 2*"/>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <select class="form-control font-sm select-style1 color-gray-700">
                        <option value="">Select an option...</option>
                        <option value="1">Option 1</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input class="form-control font-sm" type="text" placeholder="City*"/>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <input class="form-control font-sm" type="text" placeholder="PostCode / ZIP*"/>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input class="form-control font-sm" type="text" placeholder="Company name"/>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input class="form-control font-sm" type="text" placeholder="Phone*"/>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-0">
                      <textarea class="form-control font-sm" placeholder="Additional Information" rows="5"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-20">
                <div class="col-lg-6 col-5 mb-20"><Link class="btn font-sm-bold color-brand-1 arrow-back-1" to={`/Cart`}>Return to Cart</Link></div>
                <div class="col-lg-6 col-7 mb-20 text-end"><Link class="btn btn-buy w-auto arrow-next" to={`/Checkout`}>Place an Order</Link></div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="box-border">
                <h5 class="font-md-bold mb-20">Your Order</h5>
                <div class="listCheckout">
                  <div class="item-wishlist">
                    <div class="wishlist-product">
                      <div class="product-wishlist">
                        <div class="product-image"><Link to={`/SingleProduct`}><img src="assets/imgs/page/product/img-sub.png" alt="Ecom"/></Link></div>
                        <div class="product-info"><Link to={`/SingleProduct`}>
                            <h6 class="color-brand-3">Gateway 23.8&quot; All-in-one Desktop, Fully Adjustable Stand</h6></Link>
                          <div class="rating"><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><span class="font-xs color-gray-500"> (65)</span></div>
                        </div>
                      </div>
                    </div>
                    <div class="wishlist-status">
                      <h5 class="color-gray-500">x1</h5>
                    </div>
                    <div class="wishlist-price">
                      <h4 class="color-brand-3 font-lg-bold">$2.51</h4>
                    </div>
                  </div>
                  <div class="item-wishlist">
                    <div class="wishlist-product">
                      <div class="product-wishlist">
                        <div class="product-image"><Link to={`/SingleProduct`}><img src="assets/imgs/page/product/img-sub2.png" alt="Ecom"/></Link></div>
                        <div class="product-info"><Link to={`/SingleProduct`}>
                            <h6 class="color-brand-3">HP 24 All-in-One PC, Intel Core i3-1115G4, 4GB RAM</h6></Link>
                          <div class="rating"><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><span class="font-xs color-gray-500"> (65)</span></div>
                        </div>
                      </div>
                    </div>
                    <div class="wishlist-status">
                      <h5 class="color-gray-500">x1</h5>
                    </div>
                    <div class="wishlist-price">
                      <h4 class="color-brand-3 font-lg-bold">$1.51</h4>
                    </div>
                  </div>
                  <div class="item-wishlist">
                    <div class="wishlist-product">
                      <div class="product-wishlist">
                        <div class="product-image"><Link to={`/SingleProduct`}><img src="assets/imgs/page/product/img-sub3.png" alt="Ecom"/></Link></div>
                        <div class="product-info"><Link to={`/SingleProduct`}>
                            <h6 class="color-brand-3">Dell Optiplex 9020 Small Form Business Desktop Tower PC</h6></Link>
                          <div class="rating"><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><span class="font-xs color-gray-500"> (65)</span></div>
                        </div>
                      </div>
                    </div>
                    <div class="wishlist-status">
                      <h5 class="color-gray-500">x1</h5>
                    </div>
                    <div class="wishlist-price">
                      <h4 class="color-brand-3 font-lg-bold">$3.51</h4>
                    </div>
                  </div>
                </div>
                <div class="form-group d-flex mt-15">
                  <input class="form-control mr-15" placeholder="Enter Your Coupon"/>
                  <button class="btn btn-buy w-auto">Apply</button>
                </div>
                <div class="form-group mb-0">
                  <div class="row mb-10">
                    <div class="col-lg-6 col-6"><span class="font-md-bold color-brand-3">Subtotal</span></div>
                    <div class="col-lg-6 col-6 text-end"><span class="font-lg-bold color-brand-3">$6.51</span></div>
                  </div>
                  <div class="border-bottom mb-10 pb-5">
                    <div class="row">
                      <div class="col-lg-6 col-6"><span class="font-md-bold color-brand-3">Shipping</span></div>
                      <div class="col-lg-6 col-6 text-end"><span class="font-lg-bold color-brand-3">-</span></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-6"><span class="font-md-bold color-brand-3">Total</span></div>
                    <div class="col-lg-6 col-6 text-end"><span class="font-lg-bold color-brand-3">$6.51</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InfoSection/>
      </main>
      <Footer/>    
    </>
  )
}

export default Checkout