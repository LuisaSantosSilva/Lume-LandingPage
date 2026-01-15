import './Benefits.css';

export function Benefits() {
  return (
    <section id="beneficios" className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2>Benefícios</h2>
          <p>Conheça um pouco sobre nossos benefícios</p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <h4 className="card-title">Qualidade Premium</h4>
            <p className="card-desc">Joias produzidas com materiais selecionados, garantindo durabilidade e beleza por muito mais tempo.</p>
            <a href="#galeria" className="benefit-btn">Ver galeria</a>
          </div>

          <div className="benefit-card">
            <h4 className="card-title">Design Exclusivo</h4>
            <p className="card-desc">Peças únicas, criadas para destacar sua personalidade e trazer elegância em cada detalhe.</p>
            <a href="#galeria" className="benefit-btn">Ver galeria</a>
          </div>

          <div className="benefit-card">
            <h4 className="card-title">Entrega Rápida e Segura</h4>
            <p className="card-desc">Seu pedido chega até você com todo cuidado, segurança e no menor tempo possível.</p>
            <a href="#galeria" className="benefit-btn">Ver galeria</a>
          </div>
        </div>
      </div>
    </section>
  );
}