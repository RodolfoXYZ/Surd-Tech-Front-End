import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = ({ collapsed, toggleCollapsed }) => {
  const location = useLocation();

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
    <Header style={{ background: '#fff', padding: '0 16px', display: 'flex', alignItems: 'center' }}>
      {collapsed ? (
        <MenuUnfoldOutlined className="trigger" onClick={toggleCollapsed} />
      ) : (
        <MenuFoldOutlined className="trigger" onClick={toggleCollapsed} />
      )}
      <h2 style={{ marginLeft: '16px', fontSize: '20px', fontWeight: 'bold' }}>{getTitle()}</h2>
    </Header>
  );
};

export default AppHeader;
