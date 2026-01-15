import { useState, useEffect, useRef } from 'react';
import './Customize.css';

export function Customize() {
  const formRef = useRef(null);

  const [selections, setSelections] = useState({
    ring: { checked: false, qty: 0, price: 50.90 },
    earring: { checked: false, qty: 0, price: 35.90 },
    necklace: { checked: false, qty: 0, price: 100.00 },
    bracelet: { checked: false, qty: 0, price: 65.00 },
  });

  const [detailExtra, setDetailExtra] = useState(0);
  const [total, setTotal] = useState(0);
  const [fileName, setFileName] = useState("Enviar foto ou print");
  
  // Estado único para controlar o Modal
  const [modalConfig, setModalConfig] = useState({ 
    isOpen: false, 
    isError: false, 
    title: "", 
    message: "" 
  });

  useEffect(() => {
    let newTotal = 0;
    let anySelected = false;

    Object.values(selections).forEach(item => {
      if (item.checked) {
        anySelected = true;
        const quantity = parseInt(item.qty) || 0;
        newTotal += item.price * quantity;
      }
    });

    if (anySelected) {
      newTotal += detailExtra;
    } else {
      newTotal = 0;
    }

    setTotal(newTotal);
  }, [selections, detailExtra]);

  const handleCheckboxChange = (type) => {
    setSelections(prev => {
      const isChecking = !prev[type].checked;
      return {
        ...prev,
        [type]: {
          ...prev[type],
          checked: isChecking,
          qty: isChecking ? 1 : 0
        }
      };
    });
  };

  const handleQtyChange = (type, val) => {
    setSelections(prev => ({
      ...prev,
      [type]: { ...prev[type], qty: val }
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName("Arquivo: " + e.target.files[0].name);
    } else {
      setFileName("Enviar foto ou print");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const anyChecked = Object.values(selections).some(item => item.checked);

    if (!anyChecked) {
      setModalConfig({
        isOpen: true,
        isError: true,
        title: "Ops!",
        message: "Por favor, selecione pelo menos uma joia para continuar."
      });
      return;
    }

    const hasInvalidQty = Object.values(selections).some(item =>
      item.checked && (parseInt(item.qty) <= 0 || item.qty === "")
    );

    if (hasInvalidQty) {
      setModalConfig({
        isOpen: true,
        isError: true,
        title: "Quantidade necessária",
        message: "A quantidade deve ser de pelo menos 1 unidade para os itens selecionados."
      });
      return;
    }

    // Mensagem de Sucesso
    setModalConfig({
      isOpen: true,
      isError: false,
      title: "Pedido enviado com sucesso!",
      message: "" 
    });
    document.body.style.overflow = 'hidden';
  };

  const resetForm = () => {
    setSelections({
      ring: { checked: false, qty: 0, price: 50.90 },
      earring: { checked: false, qty: 0, price: 35.90 },
      necklace: { checked: false, qty: 0, price: 100.00 },
      bracelet: { checked: false, qty: 0, price: 65.00 },
    });
    setDetailExtra(0);
    setFileName("Enviar foto ou print");
    setTotal(0);
    if (formRef.current) formRef.current.reset();
  };

  const closeModal = () => {
    const wasError = modalConfig.isError;
    setModalConfig({ ...modalConfig, isOpen: false });
    document.body.style.overflow = 'auto';
    
    // Só reseta o formulário se a mensagem era de sucesso
    if (!wasError) {
      resetForm();
    }
  };

  return (
    <section id="personalize" className="customize-section">
      <div className="customize-header">
        <h2>Personalize</h2>
        <p>Crie sua joia exclusiva conosco, manifeste seu interesse respondendo o formulário abaixo</p>
      </div>

      <form className="customize-form" id="customizeForm" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-card">
          <div className="form-section-title">
            <h3>Dados da(s) Joia(s)</h3>
            <div className="line"></div>
          </div>

          <div className="form-grid">
            <div className="price-table">
              <h4>Tabela de preços</h4>
              <p>Anel: R$50,90 cada</p>
              <p>Brinco: R$35,90 o par</p>
              <p>Colar: R$100,00 cada</p>
              <p>Pulseira: R$65,00 cada</p>
              <br />
              <p>Cor além das bases:<br />+R$15,00</p>
            </div>

            <div className="form-group">
              <label className="group-title">Qual tipo de joia você deseja? *</label>
              <span className="subtitle">(Pode selecionar mais de uma opção)</span>

              {Object.keys(selections).map((type) => (
                <div className="selection-row" key={type}>
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={selections[type].checked}
                      onChange={() => handleCheckboxChange(type)}
                    />
                    <span className="checkmark"></span>
                    {type === 'ring' && 'Anel'}
                    {type === 'earring' && 'Brinco (o par)'}
                    {type === 'necklace' && 'Colar'}
                    {type === 'bracelet' && 'Pulseira'}
                  </label>
                  <div className="qty-input">
                    <span>qtd:</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="qty-field"
                      value={selections[type].qty}
                      disabled={!selections[type].checked}
                      onChange={(e) => handleQtyChange(type, e.target.value.replace(/\D/g, ''))}
                      onBlur={(e) => {
                        if (selections[type].checked && (e.target.value === "" || e.target.value === "0")) {
                          handleQtyChange(type, "1");
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="form-group">
              <label className="group-title">Cor base*</label>
              <span className="subtitle">(Selecione apenas uma)</span>
              <label className="radio-container">
                <input type="radio" name="base_color" value="silver" required />
                <span className="radio-mark"></span> Prata
              </label>
              <label className="radio-container">
                <input type="radio" name="base_color" value="gold" />
                <span className="radio-mark"></span> Dourado
              </label>
            </div>
          </div>

          <div className="form-grid second-row">
            <div className="form-group">
              <label className="group-title">Cor de detalhes ou pedrinhas*</label>
              <span className="subtitle">(Selecione apenas uma)</span>
              <div className="colors-grid">
                <label className="radio-container">
                  <input
                    type="radio"
                    name="detail_color"
                    value="none"
                    defaultChecked
                    onChange={() => setDetailExtra(0)}
                  />
                  <span className="radio-mark"></span> Não quero
                </label>
                {[
                  { en: 'pink', pt: 'Rosa' },
                  { en: 'blue', pt: 'Azul' },
                  { en: 'purple', pt: 'Roxo' },
                  { en: 'green', pt: 'Verde' },
                  { en: 'black', pt: 'Preto' },
                  { en: 'red', pt: 'Vermelho' },
                  { en: 'white', pt: 'Branco' }
                ].map(color => (
                  <label className="radio-container" key={color.en}>
                    <input
                      type="radio"
                      name="detail_color"
                      value={color.en}
                      onChange={() => setDetailExtra(15)}
                    />
                    <span className="radio-mark"></span> {color.pt}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="group-title">Conte como você imagina sua joia*</label>
              <span className="subtitle">(Descreva o formato, estilo, símbolos, nome, iniciais, tamanho, acabamento, etc.)</span>
              <textarea placeholder="Digite aqui" required></textarea>
            </div>

            <div className="form-group">
              <label className="group-title">Você possui alguma imagem de referência? (opcional)</label>
              <label className="file-upload-wrapper">
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <span className="file-custom-link">{fileName}</span>
              </label>
            </div>
          </div>

          <div className="form-section-title">
            <h3>Dados para retorno</h3>
            <div className="line"></div>
          </div>

          <div className="form-grid last-row">
            <div className="form-group">
              <label className="group-title">Adicionar e-mail *</label>
              <input type="email" placeholder="Digite aqui" required className="text-input" />
            </div>
            <div className="form-group">
              <label className="group-title">Adicionar whatsApp (opcional)</label>
              <input type="tel" placeholder="Digite aqui" className="text-input" />
            </div>
            <div className="total-container">
              <span>Total:</span>
              <strong>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-form-btn">Entrar na fila de criação</button>
      </form>

      {/* Modal (Sucesso ou Erro) */}
      {modalConfig.isOpen && (
        <div className="modal-overlay">
          <div className={`modal-content ${modalConfig.isError ? 'error-modal' : ''}`}>
            <span className="close-modal" onClick={closeModal}>X</span>
            
            <p className="success-title">
              {modalConfig.isError ? (
                modalConfig.title
              ) : (
                <>Pedido enviado com <span>sucesso!</span></>
              )}
            </p>

            <p className="success-text">
              {modalConfig.isError ? (
                modalConfig.message
              ) : (
                <>
                  Suas escolhas foram registradas com carinho.<br />
                  Em breve entraremos em contato <span>pelo e-mail</span> informado.
                </>
              )}
            </p>

            <h4 className="modal-logo">Lume<span>.</span></h4>
          </div>
        </div>
      )}
    </section>
  );
}