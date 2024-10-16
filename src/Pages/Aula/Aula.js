import React, { useState } from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import AppHeader from '../../components/Layout/AppHeader';
import './Aula.css';


const Aula = () => {
    const [collapsed, setCollapsed] = useState(false); 
    const [aulaAtual, setAulaAtual] = useState('Aula1'); 
  
    const aulas = ['Aula1', 'Aula2', 'Aula3', 'Aula4', 'Aula5', 'Aula6', 'Aula7', 'Aula8'];
  

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
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
                {/* Video */}
                Vídeo da Aula
              </div>
            </div>
            <div className="aulas-list">
                <di className="aulas-first">
                    <h3>Aulas</h3>
                </di>
             
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
      </div>
    );
  };

export default Aula;
