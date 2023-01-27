import React from 'react'
import Loader from '../Components/Loader'
import Topbar from '../Components/Topbar'
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from '../Components/Footer';
import OrderTracking from '../Components/OrderTracking';
import Settings from '../Components/Settings';
import Orders from '../Components/Orders';
import Whishlist from '../Components/Whishlist';

const Account = () => {
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
      <section class="section-box shop-template mt-30">
      <div class="container box-account-template">
      <h3>Hello Steven</h3>
          <p class="font-md color-gray-500">From your account dashboard. you can easily check & view your recent orders,<br class="d-none d-lg-block"/>manage your shipping and billing addresses and edit your password and account details.</p>
          <div class="box-tabs mb-100">
          <ul class="nav nav-tabs nav-tabs-account" role="tablist">
              <li><a class="active" href="#tab-notification" data-bs-toggle="tab" role="tab" aria-controls="tab-notification" aria-selected="true">Notification</a></li>
              <li><a href="#tab-wishlist" data-bs-toggle="tab" role="tab" aria-controls="tab-wishlist" aria-selected="true">Wishlist</a></li>
              <li><a href="#tab-orders" data-bs-toggle="tab" role="tab" aria-controls="tab-orders" aria-selected="true">Orders</a></li>
              <li><a href="#tab-order-tracking" data-bs-toggle="tab" role="tab" aria-controls="tab-order-tracking" aria-selected="true">Order Tracking</a></li>
              <li><a href="#tab-setting" data-bs-toggle="tab" role="tab" aria-controls="tab-setting" aria-selected="true">Setting</a></li>
            </ul>
            <div class="border-bottom mt-20 mb-40"></div>
            <div class="tab-content mt-30">
            <div class="tab-pane fade active show" id="tab-notification" role="tabpanel" aria-labelledby="tab-notification">
                <div class="list-notifications">
                  <div class="item-notification">
                    <div class="image-notification"><img src="assets/imgs/page/account/img-1.png" alt="Ecom"/></div>
                    <div class="info-notification">
                      <h5 class="mb-5">COD payment confirmed</h5>
                      <p class="font-md color-brand-3">Order<span class="font-md-bold"> 220914QR92BXNH</span> has been confirmed. Please check the estimated delivery time in the order details section!</p>
                    </div>
                    <div class="button-notification"><a class="btn btn-buy w-auto">View Details</a></div>
                  </div>
                  <div class="item-notification">
                    <div class="image-notification"><img src="assets/imgs/page/account/img-2.png" alt="Ecom"/></div>
                    <div class="info-notification">
                      <h5 class="mb-5">COD payment confirmed</h5>
                      <p class="font-md color-brand-3">Order<span class="font-md-bold"> 220914QR92BXNH</span> has been confirmed. Please check the estimated delivery time in the order details section!</p>
                    </div>
                    <div class="button-notification"><a class="btn btn-buy w-auto">View Details</a></div>
                  </div>
                  <div class="item-notification">
                    <div class="image-notification"><img src="assets/imgs/page/account/img-3.png" alt="Ecom"/></div>
                    <div class="info-notification">
                      <h5 class="mb-5">COD payment confirmed</h5>
                      <p class="font-md color-brand-3">Order<span class="font-md-bold"> 220914QR92BXNH</span> has been confirmed. Please check the estimated delivery time in the order details section!</p>
                    </div>
                    <div class="button-notification"><a class="btn btn-buy w-auto">View Details</a></div>
                  </div>
                  <div class="item-notification">
                    <div class="image-notification"><img src="assets/imgs/page/account/img-4.png" alt="Ecom"/></div>
                    <div class="info-notification">
                      <h5>COD payment confirmed</h5>
                      <p class="font-md color-brand-3">Order<span class="font-md-bold"> 220914QR92BXNH</span> has been confirmed. Please check the estimated delivery time in the order details section!</p>
                    </div>
                    <div class="button-notification"><a class="btn btn-buy w-auto">View Details</a></div>
                  </div>
                </div>
                <nav>
                  <ul class="pagination">
                    <li class="page-item"><a class="page-link page-prev" href="#"></a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link active" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                    <li class="page-item"><a class="page-link page-next" href="#"></a></li>
                  </ul>
                </nav>
              </div>
             <Whishlist styleClass={"tab-pane fade"}/>
              <Orders styleClass={"tab-pane fade"}/>
             <OrderTracking styleClass={"tab-pane fade"}/>
             <Settings styleClass={"tab-pane fade"}/>
             
            </div>
          </div>
      </div>
      </section>
      </main>
      <Footer/>
    </>
  )
}

export default Account