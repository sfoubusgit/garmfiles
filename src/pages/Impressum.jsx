import './Privacy.css';

function Impressum() {
  return (
    <div className="impressum-page">
      <div className="container">
        <h1 className="page-title">Impressum</h1>
        
        <div className="impressum-content">
          <section>
            <h2>Legal Information</h2>
            <p>
              <strong>Company Name:</strong> GARMFILES<br />
              <strong>Address:</strong> [Your Address]<br />
              <strong>Email:</strong> info@garmfiles.com<br />
              <strong>Phone:</strong> [Your Phone]
            </p>
          </section>

          <section>
            <h2>Responsible for Content</h2>
            <p>
              [Your Name]<br />
              [Your Address]
            </p>
          </section>

          <section>
            <h2>VAT Information</h2>
            <p>
              VAT ID: [Your VAT ID if applicable]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Impressum;

