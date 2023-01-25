 import './css/style.css';
 import './css/mystyle.css'; 
 import ROUTES from "./config/ROUTES.js";
import Home from './pages/Home';
import { About } from './pages/About';
import { useRoutes } from "react-router-dom";
function App() {
  const routes = useRoutes(
    [
      {path:'/',element:<Home/>},
      {path:'/about-us',element:<About/>}
    ]
  )
  return routes;
  
}

export default App;
