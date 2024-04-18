import React, { useContext, useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';  // Importer NavLink
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar'; 
import shop from '../Assets/cart_icon.png'; 
import './Style.css';
import iconeshop from '../Assets/logoALnada.png'




export default function Navbare() {
  const [menu, setMenu] = useState("shop");
 

  return (
    <div className='tout-nav'>
       <Navbar expand="lg" className="bg-body-light  "> 
      <Container> 
        <Navbar.Brand as={NavLink} to="/"> 
          <img src={iconeshop} alt="Logo" style={{ width: '190px', height: '100px' }}  className='image'/> 
          
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to='/' className='navLink' onClick={() => { setMenu("shop") }}>
              Shop {menu === "shop" ? <hr /> : <></>}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/womens" className='navLink' onClick={() => { setMenu("womens") }}>
              Women {menu === "womens" ? <hr /> : <></>}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/mens" className='navLink' onClick={() => { setMenu("mens") }}>
              Men {menu === "mens" ? <hr /> : <></>}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/kids" className='navLink' onClick={() => { setMenu("kids") }}>
              Kids {menu === "kids" ? <hr /> : <></>}
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse> 
      </Container> 
      
    </Navbar>
    <hr className="navbar-hr" />
    </div>
    
   
    

  );
}
