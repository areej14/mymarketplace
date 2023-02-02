import React from 'react'
import microsoftP from "../imgs/page/homepage2/img-microsoft.png"
import microsoftS from "../imgs/page/homepage2/microsoft.svg"
import panasonicP from "../imgs/page/homepage2/img-panasonic.png"
import panasonicS from "../imgs/page/homepage2/panasonic.svg"
import nokiaP from "../imgs/page/homepage2/img-nokia.png"
import nokiaS from "../imgs/page/homepage2/nokia.svg"
import sharpP from "../imgs/page/homepage2/img-sharp.png"
import sharpS from "../imgs/page/homepage2/sharp.svg"
import philipP from "../imgs/page/homepage2/img-philip.png"
import philipS from "../imgs/page/homepage2/philip.svg"
import casioP from "../imgs/page/homepage2/img-casio.png"
import casioS from "../imgs/page/homepage2/casio.svg"
import acerP from "../imgs/page/homepage2/img-acer.png"
import acerS from "../imgs/page/homepage2/acer.svg"
import toshibaP from "../imgs/page/homepage2/img-toshiba.png"
import toshibaS from "../imgs/page/homepage2/toshiba.svg"
import '../css/pagination.min.css';
const TopBrands = () => {
  return (
    <section className="section-box  pt-50 pb-50 mt-50">
      <div className="container">
        <div className="head-main bd-gray-200">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <h3 className="mb-5">Top Brands</h3>
              <p className="font-base color-gray-500">Special products in this month.</p>
            </div>
            <div className="col-xl-5 col-lg-6">
              <ul className="nav nav-tabs text-uppercase" role="tablist">
                <li><a className="active" href="#tab-2-all" data-bs-toggle="tab" role="tab" aria-controls="tab-2-all"
                    aria-selected="true">All</a></li>
                <li><a href="#tab-2-digitals" data-bs-toggle="tab" role="tab" aria-controls="tab-2-digitals"
                    aria-selected="true">Digitals</a></li>
                <li><a href="#tab-2-furniture" data-bs-toggle="tab" role="tab" aria-controls="tab-2-furniture"
                    aria-selected="true">Furniture</a></li>
                <li><a href="#tab-2-fashion" data-bs-toggle="tab" role="tab" aria-controls="tab-2-fashion"
                    aria-selected="true">Fashion</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="tab-2-all" role="tabpanel" aria-labelledby="tab-2-all">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={microsoftP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={microsoftS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 25% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={nokiaP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={nokiaS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 30% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={panasonicP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={panasonicS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 55% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={sharpP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={sharpS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 65% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={philipP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={philipS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 19% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={casioP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={casioS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 15% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={acerP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={acerS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 20% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={toshibaP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={toshibaS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 35% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-2-digitals" role="tabpanel" aria-labelledby="tab-2-digitals">
          <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={microsoftP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={microsoftS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 25% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={nokiaP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={nokiaS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 30% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={panasonicP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={panasonicS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 55% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={sharpP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={sharpS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 65% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={philipP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={philipS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 19% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={casioP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={casioS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 15% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={acerP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={acerS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 20% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={toshibaP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={toshibaS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 35% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-2-furniture" role="tabpanel" aria-labelledby="tab-2-furniture">
          <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={microsoftP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={microsoftS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 25% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={nokiaP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={nokiaS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 30% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={panasonicP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={panasonicS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 55% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={sharpP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={sharpS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 65% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={philipP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={philipS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 19% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={casioP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={casioS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 15% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={acerP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={acerS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 20% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={toshibaP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={toshibaS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 35% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-2-fashion" role="tabpanel" aria-labelledby="tab-2-fashion">
          <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={microsoftP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={microsoftS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 25% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={nokiaP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={nokiaS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 30% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={panasonicP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={panasonicS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 55% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={sharpP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={sharpS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 65% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={philipP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={philipS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 19% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={casioP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={casioS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 15% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={acerP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={acerS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 20% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card-grid-style-4">
                  <div className="card-grid-inner">
                    <div className="image-box"><a href="shop-vendor-single.html"><img
                          src={toshibaP} alt="Ecom"/></a></div>
                    <div className="info-right"><a href="shop-vendor-single.html"><img
                          src={toshibaS} alt="Ecom"/></a>
                      <p className="font-xs color-brand-3">PC, Laptop, Smart Watch, Gaming Gear ...</p>
                      <div className="divide mb-5"></div>
                      <div className="font-lg-bold color-brand-3">Up to 35% off</div>
                      <div className="box-link"><a
                          className="btn btn-link-brand-2 btn-arrow-brand-2 btn-arrow-small text-lowercase pt-0 pb-0"
                          href="shop-vendor-single.html">Shop Now</a></div>
                    </div>
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

export default TopBrands
