import React, { useState } from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import AppHeader from '../../components/Layout/AppHeader';
import './Aula.css';
import avatar from '../../assets/images/avatar.webp';

const Aula = () => {
  const [collapsed, setCollapsed] = useState(false); 
  const [aulaAtual, setAulaAtual] = useState('Aula1'); 
  const [isImageActive, setIsImageActive] = useState(false);
  const [isButtonHidden, setIsButtonHidden] = useState(false);

  const aulas = ['Aula1', 'Aula2', 'Aula3', 'Aula4', 'Aula5', 'Aula6', 'Aula7', 'Aula8'];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleImageExpansion = () => {
    if (!isImageActive) {
      setIsButtonHidden(true);
      setIsImageActive(true);
    } else {
      setIsImageActive(false);
      setTimeout(() => {
        setIsButtonHidden(false);
      }, 500);
    }
  };

  return (
    <div className="video-aulas-page">
      <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <div className="main-content">
        <AppHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <div className="content">
          <div className="video-section">
            <div className="header-aula">
              {aulaAtual}
            </div>
            <div className="video-container">
              {/* Vídeo */}
              Vídeo da Aula
            </div>
          </div>
          <div className="aulas-list">
            <div className="aulas-first">
              <h3>Aulas</h3>
            </div>
            {aulas.map((aula, index) => (
              <div
                key={index}
                className={`aula-item ${aulaAtual === aula ? 'selected' : ''}`}
                onClick={() => setAulaAtual(aula)}
              >
                {aula}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button 
        className={`popup-button ${isButtonHidden ? 'hide' : ''}`} 
        onClick={toggleImageExpansion}
      >
        Mostrar Imagem
      </button>
      <div className={`popup-image ${isImageActive ? 'active' : ''}`}>
        <img src={avatar} alt="Imagem Expansível" />
        <button className="close-popup" onClick={toggleImageExpansion}>
          X
        </button>
      </div>
    </div>
  );
};

export default Aula;
