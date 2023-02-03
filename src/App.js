 import './css/style.css';
 import './css/mystyle.css'; 
import Home from './pages/Home';
import { About } from './pages/About';
import { useRoutes } from "react-router-dom";
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Account from './pages/Account';
import OrderPage from './pages/OrderPage';
import OrederTrackingPage from './pages/OrderTrackingPage';
import WishListPage from './pages/WishListPage';
import SettingPage from './pages/SettingPage';
import Cart from './pages/Cart';
import VendorListing from './pages/VendorListing';
import SingleVendor from './pages/SingleVendor';
import ShopGrid from './pages/ShopGrid';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';
import Compare from './pages/Compare';
import Careers from './pages/Careers';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function App() {
  const routes = useRoutes(
    [
      {path:'/',element:<Home/>},
      {path:'/About-us',element:<About/>},
      {path:'/Contact-us',element:<Contact/>},
      {path:'/Register',element:<Register/>},
      {path:'/Login',element:<Login/>},
      {path:'/MyOrders',element:<OrderPage/>},
      {path:'/Account',element:<Account/>},
      {path:'/OrderTracking',element:<OrederTrackingPage/>},
      {path:'/WishList',element:<WishListPage/>},
      {path:'/Settings',element:<SettingPage/>},
      {path:'/Cart',element:<Cart/>},
      {path:'/VendorList',element:<VendorListing/>},
      {path:'/SingleVendor',element:<SingleVendor/>},
      {path:'/ShopGrid',element:<ShopGrid/>},
      {path:'/SingleProduct',element:<SingleProduct/>},
      {path:'/Checkout',element:<Checkout/>},
      {path:'/Compare',element:<Compare/>},
      {path:'/Careers',element:<Careers/>},
      {path:'/terms',element:<Terms/>},
      {path:'*',element:<NotFound/>},





      
     

    ]
  )
  return routes;
  
}

export default App;
