import React from 'react';

import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
       
      <div className="footer-section">
    <h3>Hi, I'm  Anshree Kakde,</h3>
    <p> a passionate web developer with experience in building responsive and user-friendly applications.</p>
    <p>I enjoy learning new technologies and improving my skills in front-end and back-end development.</p>
    
  </div>


        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><p>Aychit Mandir Road ,</p></li>
            <li><p>Mahal Nagpur-440002</p></li>
            <li><p><a href="tel:+23923929210">+963 735 6788</a></p></li>
            <li><p><a href="mailto:info@yourdomain.com">anshreekakde86@gmail.com</a></p></li>
            <li>
              {/* <form>
                <input type="email" placeholder="Enter email address" />
                <button type="submit">Subscribe</button>
              </form> */}
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Work Experience</a></li>
            <li><a href="#">Contact</a></li>
         
          </ul>   

        </div>
        <div className="footer-section">   

          <h3>Tools</h3>
          <ul className="instagram-grid">
            {/* Add image URLs or placeholders for Instagram posts */}
            <li> <img  className='footerimage' src="/assets/images/bootstrap-logo-shadow.png" alt="Tech Icon 5" /></li>
             <li> <img className='footerimage' src="/assets/images/logo192.png" alt="Tech Icon 1" /></li>
            <li> <img  className='footerimage'src="/assets/images/social_11516140.png" alt="Tech Icon 3" /></li>
            <li><img   className='footerimage' src="/assets/images/social_11516361.png" alt="Tech Icon 4" /></li>
            <li> <img   className='footerimage'src="/assets/images/js_5968292.png" alt="Tech Icon 5" /></li>
            <li>  <img   className='footerimage' src="/assets/images/coding-icon_12254068.png" alt="Tech Icon 1" /></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright ©2021 All rights reserved.</p>
        <p>This template is made with <a href="https://colorlib.com">Colorlib.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;