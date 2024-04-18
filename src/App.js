
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbare from './Compenat/Navbar/Navbare'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import women_banner from './Compenat/Assets/msg6662565080-1711.jpg'
import men_banner from './Compenat/Assets/msg6662565080-1710.jpg'

import kid_banner from './Compenat/Assets/Votre texte de paragraphe (1).png'
import Product from './Pages/Product';
import CategorySearchBar from './Compenat/Navbar/NavbarBottom'
import LoginPage from './Pages/LoginPage'
import Cart from './Pages/Cart';
// import Adminnada from './Pages/Adminnada';
import Footer from './Compenat/Footer/Footer'
function App() {
  return (
    <div >
      <BrowserRouter> 
     <Navbare/>
     <CategorySearchBar/>
      <Routes>
      <Route path="/" element = {<Shop/>} ></Route> 
      <Route path="/login" element={<LoginPage />} />  {/* Nouvelle route pour la page de connexion */}
      
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="women"/>}> </Route>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="men"/>}> </Route>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}> </Route>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}></Route>
      </Route>
      <Route path='/Cart' element={<Cart/>}/>
       
      {/* <Route path="/admin/*" element={<Adminnada />} />  */}
          {/* <Route path="/loginSignup" element={<LoginSignup setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />  */}
        

     
      

      </Routes>
      <Footer/>
      </BrowserRouter> 
     
    </div>
  );
}

export default App;
