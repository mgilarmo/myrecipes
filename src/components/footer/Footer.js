import React from 'react';
import '../../css/footer/Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-grid">
        <div className="footer-item-copyright">
          &copy; 2019, My Recipes
        </div>
        <div className="footer-item-social">
          <i className="fab fa-facebook-square" />
          <i className="fab fa-twitter-square" />
          <i className="fab fa-instagram" />
          <i className="fab fa-pinterest-square" />
        </div>
      </div>
    </div>
  )
};

export default Footer;