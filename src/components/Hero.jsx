import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content vintage-texture">
            <h1 className="hero-title">
              CURATED VINTAGE<br />
              FOR MODERN STYLE
            </h1>
            <p className="hero-subtitle">
              Authentic archive streetwear. Redefined for today.
            </p>
            <Link to="/shop" className="btn btn-accent">
              Explore Vintage
            </Link>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="hero-card">
            <h3>Shop the Collection</h3>
            <p>Explore our latest vintage drops</p>
            <Link to="/shop" className="card-link">
              VIEW ALL →
            </Link>
          </div>
          
          <div className="hero-card">
            <h3>New Drops Daily</h3>
            <p>Fresh vintage picked daily</p>
            <div className="card-icon">→</div>
          </div>
          
          <div className="hero-card">
            <h3>Contact</h3>
            <p>Get in touch with us</p>
            <Link to="/contact" className="card-link">
              CONTACT →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

