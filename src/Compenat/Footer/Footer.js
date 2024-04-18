import React from 'react'; 
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'; 
import img from '../Assets/logoALnada.png'; 
import './Footer.css' 
 
export default function Footer() { 
   
  return ( 
    <MDBFooter  className='text-center text-lg-start all text-light mt-5'> 
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom '> 
 
        <div className='me-5 d-none d-lg-block'> 
          <span className='h1fot'>Get connected with us on social networks:</span> 
        </div> 
 
        <div> 
          <a href='' className='me-4 text-reset'> 
            <MDBIcon fab icon="facebook-f" /> 
          </a> 
          <a href='' className='me-4 text-reset'> 
            <MDBIcon fab icon="twitter" /> 
          </a> 
          <a href='' className='me-4 text-reset'> 
            <MDBIcon fab icon="google" /> 
          </a> 
          <a href='' className='me-4 text-reset'> 
            <MDBIcon fab icon="instagram" /> 
          </a> 
          <a href='' className='me-4 text-reset'> 
            <MDBIcon fab icon="linkedin" /> 
          </a> 
          <a href='' className='me-4 text-reset'> 
            <MDBIcon fab icon="github" /> 
          </a> 
        </div> 
      </section> 
 
      <section className=''> 
        <MDBContainer className='text-center text-md-start mt-5'> 
          <MDBRow className='mt-3'> 
 
            <MDBCol md="4" lg="1" xl="2"  className='mx-auto mb-4'> 
              <img src={img} alt="" width={'200px'} className='img' /> 
            </MDBCol> 
 
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'> 
              <h6 className='text-uppercase fw-bold mb-4'> 
                <MDBIcon icon="gem" className="me-3" /> 
                AL Nada 
              </h6> 
              <p> 
              A minimalist clothing brand that combines clean lines and timeless design for an understated, sophisticated style. Quality craftsmanship and subtle detailing define its commitment to modern elegance. 
              </p> 
            </MDBCol> 
 
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'> 
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6> 
              <p> 
                <a href='#!' className='text-reset'> 
                Denim 
                </a> 
              </p> 
              <p> 
                <a href='#!' className='text-reset'> 
                Outerwear 
                </a> 
              </p> 
              <p> 
                <a href='#!' className='text-reset'> 
                Blouses & Chemises 
                </a> 
              </p> 
              <p> 
                <a href='#!' className='text-reset'> 
                Tout Afficher 
                </a> 
              </p> 
            </MDBCol> 
 
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'> 
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6> 
              <p> 
                <a href='#!' className='text-reset'> 
                  Pricing 
                </a> 
              </p> 
              <p> 
                <a href='#!' className='text-reset'> 
                  Settings 
                </a> 
              </p> 
              <p> 
                <a href='#!' className='text-reset'> 
                  Orders 
                </a> 
              </p> 
              <p> 
                <a href='#!' className='text-reset'> 
                  Help 
                </a> 
              </p> 
            </MDBCol> 
 
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'> 
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6> 
              <p> 
                <MDBIcon icon="home" className="me-2" /> 
                New York, NY 10012, US 
              </p> 
              <p> 
                <MDBIcon icon="envelope" className="me-3" /> 
                info@example.com 
              </p> 
              <p> 
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
</p> 
              <p> 
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89 
              </p> 
            </MDBCol> 
          </MDBRow> 
        </MDBContainer> 
      </section> 
 
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}> 
        © 2021 Copyright: 
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'> 
          MDBootstrap.com 
        </a> 
      </div> 
    </MDBFooter> 
  ); 
}