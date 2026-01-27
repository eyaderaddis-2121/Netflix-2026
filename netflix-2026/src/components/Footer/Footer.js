import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook'; 
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon  from '@mui/icons-material/Instagram';
  

const Footer = () => {
  return (
    <div className='footer-outer-container'>
      <div className='footer-inner-container'>
        <div className='footer-icons'>
          <FacebookIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
        <div className='footer-data'>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li> 
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate  Information</li>  </ul> 
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='service-code'>
          <button className='service-code-button'>Service Code</button>
        </div>
        <div className='footer-note'>
          <p>© 1997-2024 Netflix, Inc.</p>

        </div>
      </div>
    </div>
  )
  }

export default Footer;
