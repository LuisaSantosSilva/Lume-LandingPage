import './Testimonials.css';

import testimonials1 from '../../assets/img/testimonials/testimonials1.jpg';
import testimonials2 from '../../assets/img/testimonials/testimonials2.jpg';
import testimonials3 from '../../assets/img/testimonials/testimonials3.jpg';

export function Testimonials() {
  const reviews = [
    {
      id: 1,
      stars: "★★★★★",
      quote: "Fiquei apaixonada! O design ficou exatamente como imaginei e a qualidade é incrível.",
      product: "Anéis e pulseiras personalizados",
      image: testimonials1,
      name: "Lívia Oliveira",
      location: "Espírito Santo, BR"
    },
    {
      id: 2,
      stars: "★★★★★",
      quote: "Criar meus próprios anéis foi uma experiência incrível! Ficaram delicados e confortáveis.",
      product: "Anéis personalizados",
      image: testimonials2,
      name: "Mabel Rocha",
      location: "Pernambuco, BR"
    },
    {
      id: 3,
      stars: "★★★★★",
      quote: "Entrega rápida e atendimento maravilhoso! Minhas joias combinam com tudo.",
      product: "Anéis, pulseiras e colares personalizados",
      image: testimonials3,
      name: "Camila Souza",
      location: "Goiás, BR"
    }
  ];

  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="testimonial-header">
        <h2>Depoimentos</h2>
        <p>Avaliações e depoimentos de clientes sobre produtos adquiridos</p>
      </div>

      <div className="testimonials-container">
        {reviews.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <div className="stars">{item.stars}</div>
            <p className="quote">"{item.quote}"</p>
            <h4 className="product-name">{item.product}</h4>
            
            <img 
              src={item.image} 
              alt={`Depoimento de ${item.name}`} 
              className="product-image" 
            />
            
            <div className="user-info">
              <strong>{item.name}</strong>
              <span>{item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}