import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Wishlist.css';

function Wishlist() {
  // In a real app, this would come from state/context
  const wishlistItems = products.filter(p => p.isNew).slice(0, 4);

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="container">
          <h1 className="page-title">Wishlist</h1>
          <div className="empty-wishlist">
            <p>Your wishlist is empty</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="container">
        <h1 className="page-title">Wishlist</h1>
        <div className="products-grid">
          {wishlistItems.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;

