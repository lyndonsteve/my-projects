import React from 'react'
import '../components/styles/FooterStyles.css'
import { FaFacebook, FaLinkedinIn, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                <div>
                <h4>Purok Samabag Tawason, Mandaue City</h4>
                <h4>Cebu, Philippines</h4>
                </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} />09459674903</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>lyndonstevebalicuatro@gmail.com</h4>
            </div>
        </div>
        <div className='right'>
            <h4>About the Company</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className='social'>
                <FaFacebook size={30} style={{color: '#ffffff', marginRight: '2rem'}}/>
                <FaTwitter size={30} style={{color: '#ffffff', marginRight: '2rem'}}/>
                <FaLinkedinIn size={30} style={{color: '#ffffff', marginRight: '2rem'}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
