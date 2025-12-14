import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>GARMFILES</h4>
          <p>Curated vintage streetwear for modern style.</p>
        </div>
        
        <div className="footer-section">
          <h4>Shop</h4>
          <Link to="/shop">All Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/lookbook">Lookbook</Link>
        </div>
        
        <div className="footer-section">
          <h4>Info</h4>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        
        <div className="footer-section">
          <h4>Legal</h4>
          <Link to="/shipping">Shipping & Returns</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/impressum">Impressum</Link>
        </div>
        
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Stay updated on new drops</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit" className="btn btn-accent">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GARMFILES. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

