import React, { useEffect, useRef, useState } from "react";
import favicon from "../imgs/template/logo.svg";
import monitor from "../imgs/template/monitor.svg";
import ecomImg from "../imgs/page/homepage1/imgsp5.png";
import logo from "../imgs/template/logo.svg";
import cart from "../imgs/page/homepage1/imgsp4.png";
import account from "../imgs/template/ava_1.png";
import Select from "react-select";
import { Link } from "react-router-dom";
const Header = () => {
  const [toggleClass, setToggleClass] = useState(false);
  const [expandList, setExpandList] = useState(false);
  const [expandAccount, setExpandAccount] = useState(false);
  // for account logo expand
  const myRef = useRef();
  // for mobile view menu 
  const myRef2 = useRef();
  const customStyles = {
    indicatorSeparator: () => {},
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#425A8B",
      };
    },
    menu: (base) => ({
      ...base,
      width: "max-content",
      minWidth: "85%",
      marginTop: 15,
      zIndex: "2",
    }),

    dropdownIndicator: (base, state) => ({
      ...base,
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
      svgPath:
        "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z",
    }),
    control: (base, state) => ({
      ...base,
      // background: "#023950",
      width: "max-content",
      minWidth: "85%",
      minHeight: 13,
      height: 13,
      outline: "none",
      border: "none",
      fontSize: 13,
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "white" : "white",
      },
      // '& svg': { display: 'none' },
      // '&::before': {
      //   border: '…',
      //   transform: 'rotate(…)'
      // },
      // '&::after': {
      //   border: '…',
      //   transform: 'rotate(…)'
      // }
    }),
  };
  const AccountDropdown=()=>{
    setExpandAccount(!expandAccount)
  }
  const options = [
    { value: " Clothing & Apparel", label: " Clothing & Apparel" },
    { value: "Footwear/Shoes", label: "Footwear/Shoes" },
    { value: "Cosmetics", label: "Cosmetics" },
    { value: " Electronics", label: " Electronics" },
    { value: "Digital Gadgets", label: "Digital Gadgets" },
    { value: "Games & Toys", label: "Games & Toys" },
    { value: "Stationery", label: "Stationery" },
    { value: " Furniture & Equipment", label: " Furniture & Equipment" },
    { value: "Sports Products", label: "Sports Products" },
    { value: "Health & Medical", label: "Health & Medical" },
    { value: "Home Decor", label: "Home Decor" },
    { value: "Bakery", label: "Bakery" },
    { value: "Groceries", label: "Groceries" },
    { value: " Garden & Outdoor", label: " Garden & Outdoor" },
    { value: "Exercise/Fitness supplies", label: "Exercise/Fitness supplies" },
    { value: "Jewellery", label: "Jewellery" },
    { value: "Infant/Baby Products", label: "Infant/Baby Products" },
    { value: "Restaurent", label: "Restaurent" },
  ];
  // Sticky Menu Area and handle click outside event
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", isSticky);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
   const handleClickOutside = (e) => {
   
    if ((!myRef.current.contains(e.target)) ) {    
      setExpandAccount(false)
    }
    if ( (!myRef2.current.contains(e.target))) {
      setToggleClass(false);
    }
  };
  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".sticky-bar");
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add("stick")
      : header.classList.remove("stick");
  };
  const navTrigger = () => {
    setExpandAccount(false)
    setToggleClass(!toggleClass);
  };
  const expand = () => {
    setExpandList(!expandList);
  };
  return (
    <div >
      <header className="header header-container sticky-bar">
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link to={`/`}>
                  <img alt="Ecom" src={favicon} />
                </Link>
              </div>
              <div className="header-search">
                <div className="box-header-search">
                  <form className="form-search" method="post" action="#">
                    <div className="box-category">
                      <Select
                        placeholder="All Categories"
                        styles={customStyles}
                        options={options}
                        className=" select-active "
                        classNamePrefix="select"
                        isSearchable={true}
                      />
                    </div>
                    <div className="box-keysearch">
                      <input
                        className="form-control font-xs"
                        type="text"
                        value=""
                        placeholder="Search for items"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="header-nav text-start">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li>
                      <Link className="active" to={`/`}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to={`/About-us`}>About</Link>
                    </li>
                    <li>
                      <Link to={`/Contact-us`}>Contact</Link>
                    </li>
                    <li className="has-children">
                      <Link to={`/VendorList`}>Vendors</Link>

                      <ul className="sub-menu">
                        <li>
                          <Link to={`/VendorList`}>Vendors Listing</Link>
                        </li>
                        <li>
                          <Link to={`/SingleVendor`}>Vendor Single</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div
                  className={`${
                    toggleClass ? "burger-close" : " "
                  } burger-icon burger-icon-white`}
                  onClick={navTrigger}
                >
                  <span className="burger-icon-top"></span>
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </div>
              <div className="header-shop" >
                <div className="d-inline-block box-dropdown-cart" >
                  <span className="font-lg icon-list icon-account" onClick={AccountDropdown}>
                    <span>Account</span>
                  </span>
                  
                  <div   className={`${expandAccount && "dropdown-account dropdown-open" || "dropdown-account"} `}
                 >
                    <ul ref={myRef}>
                      <li>
                        <Link to={`/Account`}>My Account</Link>
                      </li>
                      <li>
                        <Link to={`/OrderTracking`}>Order Tracking</Link>
                      </li>
                      <li>
                        <Link to={`/MyOrders`}>My Orders</Link>
                      </li>
                      <li>
                        <Link to={`/WishList`}>My Wishlist</Link>
                      </li>
                      <li>
                        <Link to={`/Settings`}>Setting</Link>
                      </li>
                      <li>
                        <Link to={`/Login`}>Sign out</Link>
                      </li>
                    </ul>
                  </div> 
                  
                </div>
                <Link
                  className="font-lg icon-list icon-wishlist"
                  to={`/WishList`}
                >
                  <span>Wishlist</span>
                  <span className="number-item font-xs">5</span>
                </Link>
                <div className="d-inline-block box-dropdown-cart">
                  <Link to={`/Cart`} className="font-lg icon-list icon-cart">
                   <span>Cart</span>
                    <span className="number-item font-xs">2</span>
                  </Link>
                  <div className="dropdown-cart">
                    {/* <div className="item-cart mb-20">
                      <div className="cart-image">
                        <img src={ecomImg} alt="Ecom" />
                      </div>
                      <div className="cart-info">
                        <Link
                          className="font-sm-bold color-brand-3"
                          to="shop-single-product.html"
                        >
                          2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB
                          SSD
                        </Link>
                        <p>
                          <span className="color-brand-2 font-sm-bold">
                            1 x $2856.4
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="item-cart mb-20">
                      <div className="cart-image">
                        <img src={cart} alt="Ecom" />
                      </div>
                      <div className="cart-info">
                        <a
                          className="font-sm-bold color-brand-3"
                          href="shop-single-product-2.html"
                        >
                          2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB
                          SSD
                        </a>
                        <p>
                          <span className="color-brand-2 font-sm-bold">
                            1 x $2856.4
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="border-bottom pt-0 mb-15"></div>
                    <div className="cart-total">
                      <div className="row">
                        <div className="col-6 text-start">
                          <span className="font-md-bold color-brand-3">
                            Total
                          </span>
                        </div>
                        <div className="col-6">
                          <span className="font-md-bold color-brand-1">
                            $2586.3
                          </span>
                        </div>
                      </div>
                      <div className="row mt-15">
                        <div className="col-6 text-start">
                          <a
                            className="btn btn-cart w-auto"
                            href="shop-cart.html"
                          >
                            View cart
                          </a>
                        </div>
                        <div className="col-6">
                          <a
                            className="btn btn-buy w-auto"
                            href="shop-checkout.html"
                          >
                            Checkout
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <Link
                  className="font-lg icon-list icon-compare"
                  to={`/Compare`}
                >
                  <span>Compare</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!--===== Update DIV =====--> */}
        <div id="wdw_NavBar" className="header-bottom">
          <div className="container">
            <div className="dropdown d-inline-block">
              <button
              style={{backgroundColor:'#FD9636'}}
                className="btn dropdown-toggle btn-category"
                id="dropdownCategory"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                data-bs-display="static"
              >
                <span className="dropdown-right font-sm-bold color-white">
                  Shop By Categories
                </span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-light wdw_FixedManu"
                aria-labelledby="dropdownCategory"
                data-bs-popper="static"
              >
                <div className="container">
                  <div className="sidebar-left" >
                    <ul className="menu-texts menu-close" 
                    // style={{minWidth:'250px'}}
                    >
                      <li className="has-children"  >
                        <a href="javascript:;">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">
                            Clothing &amp; Apparel
                          </span>
                        </a>

                        <ul className="sub-menu" style={{paddingRight:'0' }}>
                          <li className="has-children"   >
                            <a href="#" >Men</a>
                            
                        <ul className="has-sub-menu" >
                          <li>
                            <a href="#">Shirts</a>
                          </li>
                          <li>
                            <a href="#">Wallets</a>
                          </li>
                          
                        </ul>
                          </li>
                          <li className="has-children">
                            <a href="#">Women </a>
                            <ul className="has-sub-menu">
                          <li>
                            <a href="#">Makeup</a>
                          </li>
                          <li>
                            <a href="#">Jewellery</a>
                          </li>
                          
                        </ul>
                          </li>
                          <li>
                            <a href="#">Kids</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children">
                        <a href="javascript:;">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">Footwear/Shoes</span>
                        </a>

                        <ul className="sub-menu">
                          <li>
                            <a href="#">Men</a>
                          </li>
                          <li>
                            <a href="#">Women </a>
                          </li>
                          <li>
                            <a href="#">Kids</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children">
                        <a href="javascript:;">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">Cosmetics</span>
                        </a>

                        <ul className="sub-menu">
                          <li>
                            <a href="#">Lipsticks</a>
                          </li>
                          <li>
                            <a href="#">Concealer</a>
                          </li>
                          <li>
                            <a href="#">Foundation</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children">
                        <a href="javascript:;">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">Electronics</span>
                        </a>

                        <ul className="sub-menu">
                          <li>
                            <a href="#">Phone Accessories</a>
                          </li>
                          <li>
                            <a href="#">Phone Cases</a>
                          </li>
                          <li>
                            <a href="#">Postpaid Phones</a>
                          </li>
                          <li>
                            <a href="#">Unlocked Phones</a>
                          </li>
                          <li>
                            <a href="#">Prepaid Phones</a>
                          </li>
                          <li>
                            <a href="#">Prepaid Plans</a>
                          </li>
                          <li>
                            <a href="#">Refurbished Phones</a>
                          </li>
                          <li>
                            <a href="#">Straight Talk</a>
                          </li>
                          <li>
                            <a href="#">iPhone</a>
                          </li>
                          <li>
                            <a href="#">Samsung Galaxy</a>
                          </li>
                          <li>
                            <a href="#">Samsung Galaxy</a>
                          </li>
                          <li>
                            <a href="#">Samsung Galaxy</a>
                          </li>
                          <li>
                            <a href="#">Samsung Galaxy</a>
                          </li>
                          <li>
                            <a href="#">Samsung Galaxy</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">Digital Gadgets</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">Games & Toys</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">Stationery</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">Wired Headphone</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">
                            Furniture & Equipment
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">Sports Products</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">Health & Medical</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">Home Decor</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">Bakery</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">Groceries</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">
                            Exercise/Fitness supplies
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">Jewellery</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">
                            Infant/Baby Products
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img-link">
                            <img src={monitor} alt="Ecom" />
                          </span>
                          <span className="text-link">Restaurent</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="header-nav d-inline-block">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <li>
                    {" "}
                    <Link to={`/ShopGrid`}>Fashion</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={`/ShopGrid`}>Kid's Zone</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={`/ShopGrid`}>Games</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={`/ShopGrid`}>Electronics</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={`/ShopGrid`}>Medicine & Fitness</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={`/ShopGrid`}>Grocery</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={`/ShopGrid`}>Food Court</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={`/ShopGrid`}>Automotive & Agriculture</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={`/ShopGrid`}>Services</Link>
                  </li>
                </ul>

                {/* <!-- <ul className="main-menu" >
                <li className="has-children"> <a href="shop-grid.html">Fashion</a>
                <li className="has-children"> <a href="shop-grid.html">Kid's Zone</a>
                <li className="has-children"> <a href="shop-grid.html">Games</a>
                <li className="has-children"> <a href="shop-grid.html">Electronics</a></li>
                <li className="has-children"> <a href="shop-grid.html">Medicine & Fitness</a></li>
                <li className="has-children"> <a href="shop-grid.html">Grocery</a></li>
                <li className="has-children"> <a href="shop-grid.html">Food Court</a></li>
                <li className="has-children"> <a href="shop-grid.html">Automotive & Agriculture</a></li>
                <li className="has-children"> <a href="shop-grid.html">Services</a></li>
                  </ul> --> */}
              </nav>
            </div>
            {/* <!-- <div className="discount font-16 font-bold">SPECIAL OFFER</div> --> */}
          </div>
        </div>
        {/* <!--===== Update DIV END! =====--> */}
      </header>
      {/*  */}
      <div ref={myRef2}
        className={`${
          toggleClass ? "sidebar-visible" : " "
        } mobile-header-wrapper-style perfect-scrollbar`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo">
              <a className="d-flex" href="index.html">
                <img alt="Ecom" src={logo} />
              </a>
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav className="mt-15">
                  <ul className="mobile-menu font-heading">
                    <li className="has-children">
                    <Link className="active" to={`/`}>
                        Home
                      </Link>
                      {/* <span className="menu-expand"><i className="fi-rr-caret-down"></i></span> */}
                      {/* <ul className="sub-menu"></ul> */}
                    </li>
                    <li className="has-children">
                      <Link to={`/ShopGrid`}>Shop</Link>
                      {/* <span className="menu-expand"><i className="fi-rr-caret-down"></i></span> */}
                      {/* <ul className="sub-menu">
                        <li >
                          <a href="shop-grid.html">Shop Grid</a>
                        </li>
                        <li>
                          <a href="shop-grid-2.html">Shop Grid 2</a>
                        </li>
                        <li>
                          <a href="shop-list.html">Shop List</a>
                        </li>
                        <li>
                          <a href="shop-list-2.html">Shop List 2</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth.html">Shop Fullwidth</a>
                        </li>
                        <li>
                          <a href="shop-single-product.html">Single Product</a>
                        </li>
                        <li>
                          <a href="shop-single-product-2.html">
                            Single Product 2
                          </a>
                        </li>
                        <li>
                          <a href="shop-single-product-3.html">
                            Single Product 3
                          </a>
                        </li>
                        <li>
                          <a href="shop-single-product-4.html">
                            Single Product 4
                          </a>
                        </li>
                        <li>
                          <a href="shop-cart.html">Shop Cart</a>
                        </li>
                        <li>
                          <a href="shop-checkout.html">Shop Checkout</a>
                        </li>
                        <li>
                          <a href="shop-compare.html">Shop Compare</a>
                        </li>
                        <li>
                          <a href="shop-wishlist.html">Shop Wishlist</a>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                    <Link to={`/About-us`}>About</Link>
                    </li>
                    <li>
                      <Link to={`/Contact-us`}>Contact</Link>
                    </li>
                    <li className={`has-children ${expandList ? "active" : ""}`}>
                      <Link to={`/VendorList`}>Vendors</Link>
                      <span className="menu-expand" onClick={expand}>
                        <i className="fi-rr-caret-down"></i>
                      </span>
                      {expandList && (
                        <ul className="sub-menu">
                          <li>
                            <Link to={`/VendorList`}>Vendors Listing</Link>
                          </li>
                          <li>
                            <Link to={`/SingleVendor`}>Vendor Single</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      {" "}
                      <Link to={`/ShopGrid`}>Fashion</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={`/ShopGrid`}>Kid's Zone</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={`/ShopGrid`}>Games</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={`/ShopGrid`}>Electronics</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={`/ShopGrid`}>Medicine & Fitness</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={`/ShopGrid`}>Grocery</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={`/ShopGrid`}>Food Court</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={`/ShopGrid`}>Automotive & Agriculture</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={`/ShopGrid`}>Services</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-account">
                <div className="mobile-header-top">
                  <div className="user-account">
                    <a href="page-account.html">
                      <img src={account} alt="Ecom" />
                    </a>
                    <div className="content">
                      <h6 className="user-name">
                        Hello<span className="text-brand"> Steven !</span>
                      </h6>
                      <p className="font-xs text-muted">
                        You have 3 new messages
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="mobile-menu">
                <li>
                        <Link to={`/Account`}>My Account</Link>
                      </li>
                      <li>
                        <Link to={`/OrderTracking`}>Order Tracking</Link>
                      </li>
                      <li>
                        <Link to={`/MyOrders`}>My Orders</Link>
                      </li>
                      <li>
                        <Link to={`/WishList`}>My Wishlist</Link>
                      </li>
                      <li>
                        <Link to={`/Settings`}>Setting</Link>
                      </li>
                  <li>
                    <Link to={`/Login`}>Sign out</Link>
                  </li>
                </ul>
              </div>
              <div className="mobile-banner">
                <div className="bg-5 block-iphone">
                  <span className="color-brand-3 font-sm-lh32">
                    Starting from $899
                  </span>
                  <h3 className="font-xl mb-10">iPhone 12 Pro 128Gb</h3>
                  <p className="font-base color-brand-3 mb-10">Special Sale</p>
                  <Link className="btn btn-arrow" to={`/ShopGrid`}>
                    learn more
                  </Link>
                </div>
              </div>
              <div className="site-copyright color-gray-400 mt-30">
                Copyright 2022 &copy; Ecom - Marketplace Template.
                <br />
                Designed by
                <a href="http://alithemes.com" target="_blank">
                  &nbsp; AliThemes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
