import React, { useEffect, useState } from 'react';
import { Layout, Avatar, Menu, Dropdown, Button, Card, Row, Col } from 'antd';
import { UserOutlined, DownOutlined, HomeOutlined, BookOutlined, SearchOutlined } from '@ant-design/icons';
import styles from './ProfilePage.module.css';

const { Header, Sider, Content } = Layout;

const ProfilePage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token'); // Obter o token

    fetch("https://surdtech-backend.onrender.com/auth/profile", {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Adicionar o token no cabeçalho
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
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <div>
          <p><strong>{user.nome}</strong></p>
          <p>E-mail: {user.email}</p>
          <p>CPF: 123.456.789-00</p>
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <Button type="link">Sair da conta</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Menu lateral */}
      <Sider theme="dark" collapsible>
        <div className={styles.logo}>SurdTech</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<BookOutlined />}>
            Biblioteca
          </Menu.Item>
          <Menu.Item key="3" icon={<SearchOutlined />}>
            Pesquisa
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Conteúdo principal */}
      <Layout className={styles.siteLayout}>
        {/* Header com o logo e pesquisa */}
        <Header className={styles.header} style={{ background: '#fff', padding: 0 }}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Pesquisar..." />
          </div>
          <Dropdown overlay={menu} trigger={['click']}>
            <Button className={styles.profileButton}>
              <Avatar icon={<UserOutlined />} />
              <span>Seu perfil</span>
              <DownOutlined />
            </Button>
          </Dropdown>
        </Header>

        <Content style={{ margin: '0 16px' }}>
          {/* Conteúdo principal */}
          <div className={styles.content}>
            <h2>Meus certificados</h2>
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <Card cover={<img alt="Desenvolvimento de Software" src="https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg" />}>
                  Desenvolvimento de Software
                </Card>
              </Col>
              <Col span={6}>
                <Card cover={<img alt="Feed de Notícias" src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" />}>
                  Feed de Notícias
                </Card>
              </Col>
              <Col span={6}>
                <Card cover={<img alt="Liderança Cooperativa" src="https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg" />}>
                  Liderança Cooperativa
                </Card>
              </Col>
              <Col span={6}>
                <Card cover={<img alt="Sobre Nós" src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg" />}>
                  Sobre Nós
                </Card>
              </Col>
              <Col span={6}>
                <Card cover={<img alt="Lorem Ipsum" src="https://images.pexels.com/photos/3184426/pexels-photo-3184426.jpeg" />}>
                  Lorem Ipsum
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProfilePage;
