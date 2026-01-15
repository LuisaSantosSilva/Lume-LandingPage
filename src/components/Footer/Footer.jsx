import './Footer.css';

import iconLume from '../../assets/img/icons/lume.png';
import iconFb from '../../assets/img/icons/facebook.png';
import iconIg from '../../assets/img/icons/instagram.png';
import iconTw from '../../assets/img/icons/twitter.png';
import iconPi from '../../assets/img/icons/pinterest.png';
import iconFr from '../../assets/img/icons/freepik.png';

export function Footer() {
  return (
    <footer id="contatos" className="main-footer">
      {/* obs: CTA (Call to Action - Chamada de Ação) */}
      <section className="footer-cta">
        <div className="cta-content">
          <h2 className="cta-logo">Lume<span className="dot">.</span></h2>
          <p className="cta-phrase">
            Feito por você e brilhando com você.<br />Crie agora.
          </p>
          <a href="#personalize" className="cta-btn">Personalizar agora</a>
        </div>
      </section>

      {/* Contatos e Redes */}
      <section className="footer-middle">
        <div className="middle-container">
          <div className="footer-icon">
            <img src={iconLume} alt="Logo Lume" />
          </div>
          
          <div className="footer-links-group">
            <div className="contact-box">
              <h4>Contatos</h4>
              <p>E-mail: lume@gmail.com</p>
            </div>

            <div className="social-box">
              <h4>Nossas Redes</h4>
              <div className="icons">
                <a href="#"><img src={iconFb} alt="Facebook" /></a>
                <a href="#"><img src={iconIg} alt="Instagram" /></a>
                <a href="#"><img src={iconTw} alt="Twitter" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright e Parceiros 
      obs: Referenciando onde foram tiradas as imagens */}
      <section className="footer-bottom">
        <div className="bottom-container">
          <p className="copy">Todos os direitos reservados Lume &copy; 2026</p>
          <div className="partners">
            <img src={iconPi} alt="Pinterest" />
            <img src={iconFr} alt="Freepik" />
          </div>
        </div>
      </section>
    </footer>
  );
}