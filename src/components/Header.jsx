import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            GARMFILES
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/categories" onClick={() => setIsMenuOpen(false)}>Categories</Link>
            <Link to="/lookbook" onClick={() => setIsMenuOpen(false)}>Lookbook</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>

          <div className="header-actions">
            <button 
              className="icon-btn" 
              onClick={toggleSearch}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link to="/wishlist" className="icon-btn" aria-label="Wishlist">
              <Heart size={20} />
              {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
            </Link>
            <Link to="/cart" className="icon-btn" aria-label="Cart">
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </Link>
            <button 
              className="icon-btn mobile-menu-btn" 
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {isSearchOpen && (
        <div className="search-overlay" onClick={toggleSearch}>
          <div className="search-container" onClick={(e) => e.stopPropagation()}>
            <div className="search-input-wrapper">
              <Search size={24} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search vintage streetwear..."
                autoFocus
              />
            </div>
            <button className="search-close" onClick={toggleSearch}>
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

