import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import electricals_banner from './Components/Assets/banner_electricals.png'
import furnitures_banner from './Components/Assets/banner_furnitures.png'
import Details from "./Pages/Details"
function App() {
  return (
   <div className="App">
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/Electricals' element={<ShopCategory banner={electricals_banner} category="electricals"/>}/>
            <Route path='/Furnitures' element={<ShopCategory banner={furnitures_banner} category="furnitures"/>}/>
            <Route path="Product" element={<Product/>}>
              <Route path=":productId" element={<Product/>}/>
            </Route>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Login' element={<LoginSignup/>}/>
            <Route path="/details" element={<Details/>}/>




        </Routes>
        <Footer/>
        
    </BrowserRouter>
   </div>
  );
}

export default App;
