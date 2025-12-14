import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Categories.css';

function Categories() {
  const categoryGroups = [
    {
      name: 'Hoodies',
      products: products.filter(p => p.category === 'Hoodies')
    },
    {
      name: 'Jackets',
      products: products.filter(p => p.category === 'Jackets')
    },
    {
      name: 'Sweatshirts',
      products: products.filter(p => p.category === 'Sweatshirts')
    },
    {
      name: 'T-Shirts',
      products: products.filter(p => p.category === 'T-Shirts')
    },
    {
      name: 'Pants',
      products: products.filter(p => p.category === 'Pants')
    }
  ];

  return (
    <div className="categories-page">
      <div className="container">
        <h1 className="page-title">Categories</h1>
        
        {categoryGroups.map(category => (
          <section key={category.name} className="category-section">
            <div className="category-header">
              <h2>{category.name}</h2>
              <Link to={`/shop?category=${category.name}`} className="view-all-link">
                View All →
              </Link>
            </div>
            <div className="products-grid">
              {category.products.slice(0, 4).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Categories;

