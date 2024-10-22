import React, { useState } from 'react';
import { Layout } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Sidebar from '../../components/Layout/Sidebar';
import AppHeader from '../../components/Layout/AppHeader';
import './Prova.css';

const { Content } = Layout;

const Prova = () => {

  console.log('Componente Prova carregado!'); 

  const tableData = [
    { option: 'A)', alternative: 'Lorem ipsum', progress: ['a', 'b', 'c', 'd'] },
    { option: 'B)', alternative: 'Lorem ipsum', progress: ['1', '2', '3', '4'] },
    { option: 'C)', alternative: 'Lorem ipsum', progress: ['a', '7', 'd', 'e'] },
    { option: 'D)', alternative: 'Lorem ipsum', progress: ['a', '7', 'd', 'e'] },
    { option: 'E)', alternative: 'Lorem ipsum', progress: ['a', '7', 'd', 'e'] },
  ];

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="exam-page" style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <Layout>

        <AppHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <Content style={{ margin: '24px 16px 0', padding: '0 24px', backgroundColor: '#fff' }}>
          <div>
            <h1>Prova 1</h1>
            <div className="navigation-buttons" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ArrowLeftOutlined className='ArrowButton' />
                <span style={{ marginLeft: '8px' }}>Questão anterior</span>
              </div>
              <h2>Questão 4</h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px' }}>Próxima questão</span>
                <ArrowRightOutlined className='ArrowButton' />
              </div>
            </div>

            <div className="div-content" style={{ marginTop: '24px', border: '1px solid #d9d9d9', padding: '16px' }}>
              {/* Conteúdo da questão */}
            </div>


            <table className="custom-table" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Opções</th>
                  <th>Alternativas</th>
                  <th colSpan="4">Progresso</th>
                </tr>

              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.option}</td>
                    <td>{row.alternative}</td>
                    {row.progress.map((prog, i) => (
                      <td key={i}>{prog}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Prova;
