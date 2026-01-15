import './Hero.css';

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="content">
        <h1>Onde seu brilho vira joia</h1>
        <p>
          Joias femininas exclusivas, pensadas para expressar sua essência em cada detalhe.
        </p>
        <a href="#personalize" className="hero-btn">Personalizar agora</a>
      </div>
    </section>
  );
}