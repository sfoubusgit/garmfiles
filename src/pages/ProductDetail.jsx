import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingBag, Heart, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(product?.size);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.image);

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <p>Product not found</p>
        </div>
      </div>
    );
  }

  const isSoldOut = product.stock === 0;
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    // Cart logic here
    alert('Added to cart!');
  };

  return (
    <div className="product-detail">
      <div className="container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="product-detail-layout">
          <div className="product-images">
            <div className="main-image vintage-image">
              <img src={mainImage} alt={product.title} />
              {isSoldOut && <div className="sold-out-overlay">SOLD OUT</div>}
            </div>
            <div className="image-thumbnails">
              <img 
                src={product.image} 
                alt={product.title}
                className={mainImage === product.image ? 'active' : ''}
                onClick={() => setMainImage(product.image)}
              />
            </div>
          </div>

          <div className="product-info">
            {product.label && (
              <span className="product-label">{product.label}</span>
            )}
            <h1>{product.title}</h1>
            <p className="product-price">€{product.price}</p>
            
            <div className="product-details">
              <div className="detail-item">
                <span className="detail-label">Condition:</span>
                <span>{product.condition}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Brand:</span>
                <span>{product.brand}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Era:</span>
                <span>{product.era}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Measurements:</span>
                <span>{product.measurements}</span>
              </div>
            </div>

            <div className="size-selector">
              <label>Size: {selectedSize}</label>
            </div>

            <div className="quantity-selector">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div className="product-actions">
              <button 
                className="btn btn-accent" 
                onClick={handleAddToCart}
                disabled={isSoldOut}
              >
                <ShoppingBag size={20} />
                {isSoldOut ? 'Sold Out' : 'Add to Cart'}
              </button>
              <button className="btn btn-white">
                <Heart size={20} />
                Add to Wishlist
              </button>
            </div>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="related-products">
            <h2>Related Products</h2>
            <div className="products-grid">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;

