import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import './Resultados.css';

function Resultados() {
  const [user, setUser] = useState({ nome: 'Geraldo Fux', media: '7,5', ranking: '6' });

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch("https://surdtech-backend.onrender.com/auth/profile", {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter perfil');
        }
        return response.json();
      })
      .then(data => setUser(data))
      .catch(error => console.error('Erro ao buscar dados do usuário:', error));
  }, []);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="resultados-container">
        <aside className="resultados-perfil">
          <div className="perfil-foto">
            <span className="perfil-icone">👤</span>
          </div>
          <h2>{user.nome}</h2>
          <p>Sua média <span className="media-valor">{user.media}</span></p>
          <p>Posição no Ranking <span className="ranking-valor">{user.ranking}</span></p>
        </aside>

        <section className="resultados-conteudo">
          <div className="provas-executadas">
            <h3>Provas executadas <span className="seta">▶</span></h3>
            <div className="provas-lista">
              <div className="prova">
                <h4>Prova 1</h4>
                <p>12/02</p>
                <button>Visualizar</button>
              </div>
              <div className="prova">
                <h4>Prova 2</h4>
                <p>12/03</p>
                <button>Visualizar</button>
              </div>
            </div>
          </div>

          <div className="provas-agendadas">
            <h3>Provas agendadas <span className="seta">▶</span></h3>
            <div className="prova-agendada">
              <span className="bullet">•</span> Prova 3 - 27/02
              <button>Visualizar</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resultados;
