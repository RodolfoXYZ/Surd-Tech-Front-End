import React, { useState } from 'react';
import { Layout, Input, Card, Empty, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Sidebar from '../../components/Layout/Sidebar';
import AppHeader from '../../components/Layout/AppHeader';

const { Content } = Layout;

const Biblioteca = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [search, setSearch] = useState('');

  const artigosMockados = [
    {
      idArtigo: 1,
      titulo: 'Introdução à Programação',
      url: 'https://www.devmedia.com.br/introducao-a-programacao-estruturada/24951',
    },
    {
      idArtigo: 2,
      titulo: 'Desenvolvimento Web',
      url: 'https://developer.mozilla.org/en-US/docs/Learn',
    },
    {
      idArtigo: 3,
      titulo: 'Machine Learning',
      url: 'https://www.ibm.com/cloud/learn/machine-learning',
    },
    {
      idArtigo: 4,
      titulo: 'React para Iniciantes',
      url: 'https://react.dev/learn',
    },
    {
      idArtigo: 5,
      titulo: 'Ant Design na Prática',
      url: 'https://ant.design/docs/react/introduce',
    },
  ];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const filteredArtigos = artigosMockados.filter((artigo) =>
    artigo.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

      <Layout>
        <AppHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <Content style={{ margin: '16px' }}>
          <Input
            placeholder="Pesquise pelo nome do artigo"
            prefix={<SearchOutlined />}
            style={{ width: '100%', marginBottom: '16px', maxWidth: '500px' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {filteredArtigos.length === 0 ? (
            <Empty description="Nenhum artigo encontrado" />
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              {filteredArtigos.map((artigo) => (
                <Card
                  key={artigo.idArtigo}
                  title={artigo.titulo}
                  bordered={false}
                  style={{
                    width: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  
                  <Button
                    type="primary"
                    style={{
                      backgroundColor: '#004666',
                      borderColor: '#004666',
                      fontWeight: 'bold',
                      marginTop: '16px',
                    }}
                    href={artigo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ler Artigo
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Biblioteca;
