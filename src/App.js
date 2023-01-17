import logo from './logo.svg';
//  import './style.css';
//  import './mystyle.css';
import  Loader  from "./components/Loader";
import Topbar from './components/Topbar';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      {/* <Loader/> */}
      <Topbar/>
      <Header/>
    </div>
  );
}

export default App;
