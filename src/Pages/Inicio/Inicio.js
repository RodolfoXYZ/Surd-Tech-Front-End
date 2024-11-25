import React from 'react';
import { Button, Layout } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import logo from '../../assets/images/logo.png'; 

const { Content } = Layout;

const Inicio = () => {
  const navigate = useNavigate(); 

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Content
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ marginBottom: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <img 
            src={logo} 
            alt="Logo SurdTech" 
            style={{ width: '40px', height: 'auto' }} 
          />
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#d4a15a', margin: 0 }}>
            SurdTech
          </h1>
        </div>

        <div>
          <Button
            type="primary"
            style={{
              backgroundColor: '#DCA55A',
              borderColor: '#d4a15a',
              width: '200px',
              marginBottom: '10px',
            }}
            onClick={() => navigate('/login')} 
          >
            Entrar
          </Button>
          <br />
          <Button
            type="default"
            style={{
              width: '200px',
              borderColor: '#617b97',
              color: '#617b97',
            }}
            onClick={() => navigate('/register')} 
          >
            Criar Conta
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default Inicio;
