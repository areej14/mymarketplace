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
function App() {
  const routes = useRoutes(
    [
      {path:'/',element:<Home/>},
      {path:'/About-us',element:<About/>},
      {path:'/Contact-us',element:<Contact/>},
      {path:'/Register',element:<Register/>},
      {path:'/Login',element:<Login/>},
      {path:'/Order',element:<OrderPage/>},
      {path:'/Account',element:<Account/>},
      {path:'/OrderTracking',element:<OrederTrackingPage/>},
      {path:'/WishList',element:<WishListPage/>},
      {path:'/Settings',element:<SettingPage/>},
    ]
  )
  return routes;
  
}

export default App;
