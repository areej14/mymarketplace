import React from 'react'
import Loader from '../Components/Loader'
import Topbar from '../Components/Topbar'
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <> <Loader/>
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
    <section className="section-box shop-template mt-60">
        <div className="container">
          <div className="row mb-100">
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <h3>Member Login</h3>
              <p className="font-md color-gray-500">Welcome back!</p>
              <div className="form-register mt-30 mb-30">
                <div className="form-group">
                  <label className="mb-5 font-sm color-gray-700">Email / Phone / Username *</label>
                  <input className="form-control" type="text" placeholder="stevenjob@gmail.com"/>
                </div>
                <div className="form-group">
                  <label className="mb-5 font-sm color-gray-700">Password *</label>
                  <input className="form-control" type="password" placeholder="******************"/>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="color-gray-500 font-xs">
                        <input className="checkagree" type="checkbox"/>Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6 text-end">
                    <div className="form-group"><a className="font-xs color-gray-500" href="#">Forgot your password?</a></div>
                  </div>
                </div>
                <div className="form-group">
                  <input className="font-md-bold btn btn-buy" type="submit" value="Sign Up"/>
                </div>
                <div className="mt-20"><span className="font-xs color-gray-500 font-medium">Have not an account?</span><Link className="font-xs color-brand-3 font-medium" to={`/Register`}>Sign Up</Link></div>
              </div>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </section>
    </main>
    <Footer/></>
  )
}

export default Login