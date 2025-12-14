import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="page-title">About GARMFILES</h1>
        
        <div className="about-content">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              GARMFILES is a curated vintage streetwear platform dedicated to bringing 
              authentic archive pieces to modern style enthusiasts. We specialize in 
              handpicked vintage items from the 90s and Y2K era, focusing on quality, 
              authenticity, and unique finds.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              We believe in the power of vintage fashion to tell stories and connect 
              generations. Every piece in our collection is carefully selected for its 
              quality, condition, and cultural significance. We're not just selling 
              clothes—we're preserving and sharing pieces of fashion history.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Do</h2>
            <ul>
              <li>Curate authentic vintage streetwear from the 90s and 2000s</li>
              <li>Verify condition and authenticity of every item</li>
              <li>Provide detailed measurements and condition reports</li>
              <li>Offer new drops daily with fresh vintage finds</li>
              <li>Connect vintage fashion lovers with rare pieces</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;

