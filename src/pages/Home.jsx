import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

function Home() {
  const featuredProducts = products.filter(p => p.isNew).slice(0, 8);

  return (
    <div className="home">
      <Hero />
      
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Vintage</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            <div className="category-tile">
              <div className="category-image vintage-image">
                <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop" alt="Hoodies" />
              </div>
              <span className="category-label">Hoodies</span>
            </div>
            <div className="category-tile">
              <div className="category-image vintage-image">
                <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop" alt="Jackets" />
              </div>
              <span className="category-label">Jackets</span>
            </div>
            <div className="category-tile">
              <div className="category-image vintage-image">
                <img src="https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&h=600&fit=crop" alt="Sweatshirts" />
              </div>
              <span className="category-label">Sweatshirts</span>
            </div>
            <div className="category-tile">
              <div className="category-image vintage-image">
                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop" alt="T-Shirts" />
              </div>
              <span className="category-label">T-Shirts</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

