import './Lookbook.css';

function Lookbook() {
  const lookbookImages = [
    { id: 1, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1200&fit=crop', title: 'Vintage Street Style' },
    { id: 2, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1200&fit=crop', title: '90s Archive' },
    { id: 3, image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&h=1200&fit=crop', title: 'Y2K Revival' },
    { id: 4, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1200&fit=crop', title: 'Retro Essentials' },
    { id: 5, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1200&fit=crop', title: 'Archive Collection' },
    { id: 6, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1200&fit=crop', title: 'Vintage Finds' }
  ];

  return (
    <div className="lookbook-page">
      <div className="container">
        <h1 className="page-title">Lookbook</h1>
        <p className="lookbook-intro">
          Explore our curated vintage streetwear in action. Each piece tells a story.
        </p>
        
        <div className="lookbook-grid">
          {lookbookImages.map(item => (
            <div key={item.id} className="lookbook-item vintage-image">
              <img src={item.image} alt={item.title} />
              <div className="lookbook-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lookbook;

