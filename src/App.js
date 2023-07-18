
import './App.css';
import { useEffect } from 'react';
import Card from './components/Card';
import Card_info_box from './components/Card_info_box';
import Aboutus from './components/pages/Aboutus/Aboutus';
import Contact from './components/pages/Contact';
import FaQ from './components/pages/FaQ';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import Product from './components/pages/Product';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Carbonproducts from './components/pages/home page product/Carbonproducts';
import Trading from './components/pages/home page product/Trading';
import Join_team from './components/pages/Join our team/Join_team';

function App() {

  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Aboutus/>  */}
      {/* <FaQ/> */}

       {/* <Contact/> */}

      {/* <Card/> */}
      {/* <Card_info_box/> */}
      {/* <Footer/> */}
      {/* <Product/> */}
      <Router>
      <Navbar/>
        <Routes>
         
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:productName' element={<Product />} />
          <Route path='/products' element={<Product/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/FAQ' element={<FaQ/>}/>
          <Route path='/Join-our-team' element={<Join_team/>}/>
          <Route path='/product/carbonProduct' element={<Carbonproducts/>} />
          <Route path='/product/TradingProduct' element={<Trading/>} />
          
        </Routes>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
