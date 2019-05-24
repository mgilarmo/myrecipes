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
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter-square" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-pinterest-square" />
          </a>
        </div>
      </div>
    </div>
  )
};

export default Footer;