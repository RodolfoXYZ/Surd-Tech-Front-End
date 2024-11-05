import React, { useState } from 'react';
import { Layout, Avatar, Modal, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = ({ collapsed, toggleCollapsed }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

 
  const user = {
    name: 'João Silva',
    email: 'joao.silva@email.com',
  };

  
  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleLogout = () => {
    setIsModalVisible(false);
    navigate('/'); 
  };

  // Definir o título com base no caminho da URL
  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/Prova':
        return 'Provas';
      case '/aula':
        return 'Videoaulas';
      case '/dashboard':
        return 'DashBoard';
      default:
        return 'Página';
    }
  };

  return (
    <Header style={{ background: '#fff', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {collapsed ? (
          <MenuUnfoldOutlined className="trigger" onClick={toggleCollapsed} />
        ) : (
          <MenuFoldOutlined className="trigger" onClick={toggleCollapsed} />
        )}
        <h2 style={{ marginLeft: '16px', fontSize: '20px', fontWeight: 'bold' }}>{getTitle()}</h2>
      </div>
      
      <Avatar icon={<UserOutlined />} onClick={showModal} style={{ cursor: 'pointer' }} />

      <Modal title="Perfil do Usuário" visible={isModalVisible} onOk={handleOk} onCancel={handleOk} footer={null}>
        <p><strong>Nome:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <Button type="primary" onClick={handleLogout}>Sair</Button>
      </Modal>
    </Header>
  );
};

export default AppHeader;
