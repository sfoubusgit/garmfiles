import './Privacy.css';

function Privacy() {
  return (
    <div className="privacy-page">
      <div className="container">
        <h1 className="page-title">Privacy Policy</h1>
        
        <div className="privacy-content">
          <section>
            <h2>Introduction</h2>
            <p>
              GARMFILES ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your 
              information when you visit our website.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information</li>
              <li>Shipping and billing addresses</li>
              <li>Payment information</li>
              <li>Email address for newsletter subscriptions</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal 
              information. However, no method of transmission over the internet is 
              100% secure.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us 
              at info@garmfiles.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacy;

