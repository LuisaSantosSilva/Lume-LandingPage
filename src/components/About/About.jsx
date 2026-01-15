import './About.css';

import about1 from '../../assets/img/about/about1.jpg';
import about2 from '../../assets/img/about/about2.jpg';

export function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>Sobre nós</h2>
          <p>Conheça um pouco sobre quem somos</p>
        </div>

        <div className="about-content">
          <div className="about-images">
            <div className="img-wrapper back-img">
              <img src={about1} alt="Sobre 1" />
            </div>
            <div className="img-wrapper front-img">
              <img src={about2} alt="Sobre 2" />
            </div>
          </div>

          <div className="about-text-info">
            <div className="info-block">
              <h3>Quem somos?</h3>
              <p>
                A Lume é uma marca de joias femininas criada para iluminar a beleza autêntica de cada mulher. 
                Desenvolvemos peças delicadas, únicas e cheias de significado, pensadas para acompanhar você.
              </p>
            </div>

            <div className="info-block">
              <h3>Missão e Visão</h3>
              <p>
                Nossa missão é valorizar a autoestima feminina através de joias que contam histórias. 
                Sendo assim, nossa visão é ser referência em elegância, autenticidade e conexão emocional com nossas clientes.
              </p>
            </div>

            <div className="info-block">
              <h3>Valores</h3>
              <p>
                • Amor pelo que fazemos;<br />
                • Qualidade em cada detalhe;<br />
                • Respeito e empoderamento feminino;<br />
                • Transparência e confiança;<br />
                • Beleza com propósito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}