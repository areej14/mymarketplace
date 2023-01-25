import React from 'react'
import Footer from "../HomeComponents/Footer";
import Header from "../HomeComponents/Header";
import Loader from "../HomeComponents/Loader";
import Topbar from "../HomeComponents/Topbar";
import ScrollToTop from "react-scroll-to-top";
import InfoSection from '../HomeComponents/InfoSection';
import aboutImg from '../imgs/page/about/img.png'
import team from '../imgs/page/about/staft6.png'
import BrandList from '../HomeComponents/BrandList';
import chat from '../imgs/page/contact/chat.svg';
import call from '../imgs/page/contact/call.svg';
import map from '../imgs/page/contact/map.svg';

export const About = () => {
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
      <main classNameName="main">
      <div className="section-box" >
        <div className="breadcrumbs-div">
          <div className="container">
            <ul className="breadcrumb">
              <li><a className="font-xs color-gray-1000" href="index.html">Home</a></li>
              <li><a className="font-xs color-gray-500" href="index.html">Pages</a></li>
              <li><a className="font-xs color-gray-500" href="page-about-us.html">About Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <section class="section-box shop-template mt-30 mb-30">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <h5 class="color-gray-500 mb-10">About us</h5>
              <h2>Global Leading Online Shop</h2>
              <div class="row mt-20">
                <div class="col-lg-6">
                  <p class="font-sm font-medium color-gray-700 mb-15">Ecom expands global footprint, delivering entertaining experiences customised to each user. Branches are expanding both in size and number.</p>
                  <p class="font-sm font-medium color-gray-700 mb-15">Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Lacus vel facilisis volutpat est velit. Urna neque viverra justo nec. Suspendisse faucibus interdum posuere lorem ipsum dolor. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Tortor vitae purus faucibus ornare.</p>
                  <p class="font-sm font-medium color-gray-700 mb-15">Tempus iaculis urna id volutpat lacus laoreet. Id neque aliquam vestibulum morbi blandit. Lacinia quis vel eros donec ac odio tempor orci. Lectus sit amet est placerat in egestas erat imperdiet. Nunc congue nisi vitae suscipit. Sed adipiscing diam donec adipiscing tristique risus.</p>
                  <ul class="list-services mt-20">
                    <li class="hover-up">We provide qualified & expert</li>
                    <li class="hover-up">Modern tools & technology use</li>
                    <li class="hover-up">Neat & cleaning top Services</li>
                    <li class="hover-up">We Develop Digital Future</li>
                  </ul>
                </div>
                <div class="col-lg-6"><img src={aboutImg} alt="Ecom"/></div>
              </div>
              <div class="box-contact-support pt-80 pb-50 pl-50 pr-50 background-gray-50 mt-50 mb-90">
                <div class="row">
                  <div class="col-lg-3 mb-30 text-center text-lg-start">
                    <h4 class="mb-5">12 Years</h4>
                    <p class="font-md color-gray-700">We’ve more than 12 years working experience.</p>
                  </div>
                  <div class="col-lg-3 mb-30 text-center text-lg-start">
                    <h4 class="mb-5">2000+ Employee</h4>
                    <p class="font-md color-gray-700 mb-5">We’ve more than 2000 employees working near you.</p>
                  </div>
                  <div class="col-lg-3 mb-30 text-center text-lg-start">
                    <h4 class="mb-5">68 Branches</h4>
                    <p class="font-md color-gray-700 mb-5">We have 68 branches across the country and are expanding</p>
                  </div>
                  <div class="col-lg-3 mb-30 text-center text-lg-start">
                    <h4 class="mb-5">15 Countries</h4>
                    <p class="font-md color-gray-700 mb-5">We are present in 15 countries around the world</p>
                  </div>
                </div>
              </div>
              <h5 class="color-gray-500 mb-10">Behind The Brands</h5>
              <h2 class="mb-40">The people who work at Ecom share the vision and values of our community.</h2>
              <div class="row mb-50">
                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div class="card-staff hover-up">
                    <div class="image-staff"><img src={team} alt="Ecom"/></div>
                    <div class="info-staff">
                      <h5>Ronald Richards</h5>
                      <p class="font-md color-gray-500">Chief Executive Officer</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div class="card-staff hover-up">
                    <div class="image-staff"><img src={team} alt="Ecom"/></div>
                    <div class="info-staff">
                      <h5>Jenny Wilson</h5>
                      <p class="font-md color-gray-500">Chief Financial Officer</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div class="card-staff hover-up">
                    <div class="image-staff"><img src={team} alt="Ecom"/></div>
                    <div class="info-staff">
                      <h5>Cody Fisher</h5>
                      <p class="font-md color-gray-500">Chief Operating Officer</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div class="card-staff hover-up">
                    <div class="image-staff"><img src={team} alt="Ecom"/></div>
                    <div class="info-staff">
                      <h5>Jacob Jones</h5>
                      <p class="font-md color-gray-500">Chief Technology Officer</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div class="card-staff hover-up">
                    <div class="image-staff"><img src={team} alt="Ecom"/></div>
                    <div class="info-staff">
                      <h5>Leslie Alexander</h5>
                      <p class="font-md color-gray-500">Chief Marketing Officer</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div class="card-staff hover-up">
                    <div class="image-staff"><img src={team} alt="Ecom"/></div>
                    <div class="info-staff">
                      <h5>Ralph Edwards</h5>
                      <p class="font-md color-gray-500">Chief Human Resources Officer</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div class="card-staff hover-up">
                    <div class="image-staff"><img src={team} alt="Ecom"/></div>
                    <div class="info-staff">
                      <h5>Eleanor Pena</h5>
                      <p class="font-md color-gray-500">Chief Legal Officer</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div class="card-staff hover-up">
                    <div class="image-staff"><img src={team} alt="Ecom"/></div>
                    <div class="info-staff">
                      <h5>Theresa Webb</h5>
                      <p class="font-md color-gray-500">Chief Product Officer</p>
                    </div>
                  </div>
                </div>
              </div>
              <h5 class="color-gray-500 mb-10">Our Partners</h5>
              <h2 class="mb-40">Trusted by 18.000+ Vendors</h2>
          <BrandList/>
              <div class="border-1 mb-80 mt-50"></div>
              <h2 class="mb-5">Visit our stores</h2>
              <p class="font-sm color-gray-700">Find us at these locations</p>
              <div class="box-contact-address pt-30 pb-50">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="mb-30">
                      <h4>Melbourne</h4>
                      <p class="font-sm color-gray-700">205 North Michigan Avenue, Suite 810<br/>Chicago, 60601, USA</p>
                    </div>
                    <div class="mb-30">
                      <h4>San Francisco</h4>
                      <p class="font-sm color-gray-700">205 North Michigan Avenue, Suite 810<br/>Chicago, 60601, USA</p>
                    </div>
                    <div class="mb-30">
                      <h4>Byron Bay</h4>
                      <p class="font-sm color-gray-700">205 North Michigan Avenue, Suite 810<br/>Chicago, 60601, USA</p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-30">
                      <h4>Sydney</h4>
                      <p class="font-sm color-gray-700">205 North Michigan Avenue, Suite 810<br/>Chicago, 60601, USA</p>
                    </div>
                    <div class="mb-30">
                      <h4>Sweden</h4>
                      <p class="font-sm color-gray-700">205 North Michigan Avenue, Suite 810<br/>Chicago, 60601, USA</p>
                    </div>
                    <div class="mb-30">
                      <h4>Ha Noi</h4>
                      <p class="font-sm color-gray-700">205 North Michigan Avenue, Suite 810<br/>Chicago, 60601, USA</p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-30">
                      <h4>Bangkok</h4>
                      <p class="font-sm color-gray-700">205 North Michigan Avenue, Suite 810<br/>Chicago, 60601, USA</p>
                    </div>
                    <div class="mb-30">
                      <h4>Seoul</h4>
                      <p class="font-sm color-gray-700">205 North Michigan Avenue, Suite 810<br/>Chicago, 60601, USA</p>
                    </div>
                    <div class="mb-30">
                      <h4>Paris</h4>
                      <p class="font-sm color-gray-700">205 North Michigan Avenue, Suite 810<br/>Chicago, 60601, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-contact-support pt-80 pb-50 background-gray-50">
          <div class="container">
            <div class="row">
              <div class="col-lg-1"></div>
              <div class="col-lg-10">
                <div class="row">
                  <div class="col-lg-3 mb-30 text-center text-lg-start">
                    <h3 class="mb-5">We‘d love to here from you</h3>
                    <p class="font-sm color-gray-700">Chat with our friendly team</p>
                  </div>
                  <div class="col-lg-3 text-center mb-30">
                    <div class="box-image mb-20"><img src={chat} alt="Ecom"/></div>
                    <h4 class="mb-5">Chat to sales</h4>
                    <p class="font-sm color-gray-700 mb-5">Speak to our team.</p><a class="font-sm color-gray-900" href="/cdn-cgi/l/email-protection#4635272a2335062325292b6825292b"><span class="__cf_email__" data-cfemail="a3d0c2cfc6d0e3c6c0ccce8dc0ccce">[email&#160;protected]</span></a>
                  </div>
                  <div class="col-lg-3 text-center mb-30">
                    <div class="box-image mb-20"><img src={call} alt="Ecom"/></div>
                    <h4 class="mb-5">Call us</h4>
                    <p class="font-sm color-gray-700 mb-5">Mon-Fri from 8am to 5pm</p><a class="font-sm color-gray-900" href="tel:+1(555)000-0000">+1(555)000-0000</a>
                  </div>
                  <div class="col-lg-3 text-center mb-30">
                    <div class="box-image mb-20"><img src={map} alt="Ecom"/></div>
                    <h4 class="mb-5">Visit us</h4>
                    <p class="font-sm color-gray-700 mb-5">Visit our office</p><span class="font-sm color-gray-900">205 North Michigan Avenue, Suite 810<br/>Chicago, 60601, USA</span>
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
