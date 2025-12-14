import './Privacy.css';

function Terms() {
  return (
    <div className="terms-page">
      <div className="container">
        <h1 className="page-title">Terms & Conditions</h1>
        
        <div className="terms-content">
          <section>
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using GARMFILES, you agree to be bound by these 
              Terms and Conditions. If you do not agree, please do not use our website.
            </p>
          </section>

          <section>
            <h2>Products</h2>
            <p>
              All products are vintage items sold as-is. We provide detailed condition 
              reports, but vintage items may have signs of wear consistent with their age.
            </p>
          </section>

          <section>
            <h2>Pricing</h2>
            <p>
              All prices are in EUR and include VAT where applicable. We reserve the 
              right to change prices at any time.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              GARMFILES shall not be liable for any indirect, incidental, or consequential 
              damages arising from the use of our website or products.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Terms;

