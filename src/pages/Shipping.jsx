import './Shipping.css';

function Shipping() {
  return (
    <div className="shipping-page">
      <div className="container">
        <h1 className="page-title">Shipping & Returns</h1>
        
        <div className="shipping-content">
          <section className="shipping-section">
            <h2>Shipping</h2>
            <h3>Shipping Rates</h3>
            <ul>
              <li>Standard Shipping: €10 (5-7 business days)</li>
              <li>Express Shipping: €20 (2-3 business days)</li>
              <li>Free Shipping on orders over €100</li>
            </ul>
            
            <h3>International Shipping</h3>
            <p>
              We ship worldwide. International shipping rates vary by destination. 
              Delivery times are typically 7-14 business days for international orders.
            </p>
          </section>

          <section className="shipping-section">
            <h2>Returns</h2>
            <h3>Return Policy</h3>
            <p>
              We accept returns within 14 days of delivery. Items must be in the 
              same condition as received, with all original tags attached.
            </p>
            
            <h3>How to Return</h3>
            <ol>
              <li>Contact us at info@garmfiles.com to initiate a return</li>
              <li>We'll provide you with a return shipping label</li>
              <li>Package the item securely and send it back</li>
              <li>Once received, we'll process your refund within 5-7 business days</li>
            </ol>
            
            <h3>Refunds</h3>
            <p>
              Refunds will be issued to the original payment method. Shipping costs 
              are non-refundable unless the item was defective or incorrect.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Shipping;

