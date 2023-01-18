import React from 'react'
import Banner from '../components/Banner'
import BestSeller from '../components/BestSeller'
import BrandList from '../components/BrandList'
import CategoriesSection from '../components/CategoriesSection'
import DealsSection from '../components/DealsSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoSection from '../components/InfoSection'
import Loader from '../components/Loader'
import Topbar from '../components/Topbar'
import TopBrands from '../components/TopBrands'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
const Home = () => {
  return (
    <>
    <PerfectScrollbar>

   <Loader/>
    <Topbar/>
    <Header/>
    <main class="main">
    <DealsSection/>
    <InfoSection/>
    <CategoriesSection/>
    <Banner/>
    <BestSeller/>
    <TopBrands/>
    <BrandList/>
    </main>
    <Footer/>
</PerfectScrollbar>
   </>
  )
}

export default Home