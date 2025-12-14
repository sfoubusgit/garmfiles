import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import './ProductCard.css';

function ProductCard({ product }) {
  const isSoldOut = product.stock === 0;
  const isNew = product.isNew;

  return (
    <div className={`product-card ${isSoldOut ? 'sold-out' : ''}`}>
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-wrapper vintage-image">
          <img src={product.image} alt={product.title} />
          {isSoldOut && <div className="sold-out-badge">SOLD OUT</div>}
          {isNew && <div className="new-badge">NEW</div>}
        </div>
        <div className="product-info">
          {product.label && (
            <span className="product-label">{product.label}</span>
          )}
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">€{product.price}</p>
          {product.condition && (
            <p className="product-condition">Condition: {product.condition}</p>
          )}
        </div>
      </Link>
      <button className="wishlist-btn" aria-label="Add to wishlist">
        <Heart size={18} />
      </button>
    </div>
  );
}

export default ProductCard;

