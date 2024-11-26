import React, { useState, useEffect } from 'react';
import { Layout, Input, Card, Spin, Alert, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Sidebar from '../../components/Layout/Sidebar';
import AppHeader from '../../components/Layout/AppHeader';
import axios from 'axios';

const { Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [videos, setVideos] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false); 
  const [search, setSearch] = useState(''); 

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const fetchVideos = async () => {
    setLoading(true); 
    setError(false); 
    try {
      const token = localStorage.getItem("authToken"); 
      const response = await axios.get('https://surdtech-backend.onrender.com/video', {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      setVideos(response.data);
    } catch (error) {
      console.error('Erro ao buscar vídeos:', error.response?.data || error.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const filteredVideos = videos.filter((video) =>
    video.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

      <Layout>
        <AppHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <Content style={{ margin: '16px' }}>
          <Input
            placeholder="Pesquise pelo nome do vídeo"
            prefix={<SearchOutlined />}
            style={{ width: '100%', marginBottom: '16px', maxWidth: '500px' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {loading ? (
            <Spin size="large" style={{ display: 'block', margin: 'auto' }} />
          ) : error ? (
            <Alert
              message="Erro ao carregar vídeos"
              description="Houve um problema ao carregar os vídeos. Tente novamente mais tarde."
              type="error"
              showIcon
            />
          ) : filteredVideos.length === 0 ? (
            <Empty description="Nenhum vídeo encontrado" />
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              {filteredVideos.map((video) => (
                <Card
                  key={video.idVideo}
                  title={video.titulo}
                  bordered={false}
                  style={{ width: 300 }}
                >
                  {/* Player do vídeo */}
                  <iframe
                    width="100%"
                    height="200"
                    src={video.url.replace('watch?v=', 'embed/')}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  {/* Descrição do vídeo */}
                  <div style={{ marginTop: '12px' }}>
                    <p style={{
                      fontSize: '14px',
                      color: '#555',
                      lineHeight: '1.5',
                      wordBreak: 'break-word',
                      maxHeight: '60px', 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis', 
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {video.descricao}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
