import './Gallery.css';

import gallery1 from '../../assets/img/gallery/gallery1.jpg';
import gallery2 from '../../assets/img/gallery/gallery2.jpg';
import gallery3 from '../../assets/img/gallery/gallery3.jpg';
import gallery4 from '../../assets/img/gallery/gallery4.jpg';
import gallery5 from '../../assets/img/gallery/gallery5.jpg';
import gallery6 from '../../assets/img/gallery/gallery6.jpg';


export function Gallery() {
  const images = [
    { src: gallery1, alt: "Galeria 1" },
    { src: gallery2, alt: "Galeria 2" },
    { src: gallery3, alt: "Galeria 3" },
    { src: gallery4, alt: "Galeria 4" },
    { src: gallery5, alt: "Galeria 5" },
    { src: gallery6, alt: "Galeria 6" },
  ];

  return (
    <section id="galeria" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Galeria</h2>
          <p>Destaques de pedidos para você se inspirar e criar o seu com a gente</p>
        </div>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}