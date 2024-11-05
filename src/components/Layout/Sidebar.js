import React, { useState } from 'react';
import { Layout, Menu, Modal, Button } from 'antd';
import { SearchOutlined, BookOutlined, HomeOutlined, BellOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo.svg';

const { Sider } = Layout;

const Sidebar = ({ collapsed, toggleCollapsed }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const showLoadingModal = () => {
    setIsModalOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      trigger={null}
      style={{ background: '#004666' }}
    >
      <div
        className="logo"
        style={{
          padding: '20px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            height: '30px',
            marginRight: collapsed ? '0' : '2px',
            transition: 'margin-right 0.3s ease',
          }}
        />
        
        {!collapsed && (
          <span
            style={{
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold',
              transition: 'opacity 0.3s ease',
            }}
          >
            urdTech
          </span>
        )}
      </div>
      
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ background: '#004666' }}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<BookOutlined />}>
          Biblioteca
        </Menu.Item>
        <Menu.Item key="3" icon={<SearchOutlined />}>
          Pesquisa
        </Menu.Item>
        
        <Menu.Item key="4" icon={<BellOutlined />} onClick={showLoadingModal}>
          Notificações
        </Menu.Item>
      </Menu>

      <Modal
        title="Notificações"
        open={isModalOpen}
        onCancel={closeModal}
        footer={
          <Button type="primary" onClick={showLoadingModal} style={{ backgroundColor: '#004666', color: '#fff', border: 'none' }}>
            Recarregar
          </Button>
        }
      >
        {loading ? (
          <p>Carregando notificações...</p>
        ) : (
          <>
            <p>Notificação 1</p>
            <p>Notificação 2</p>
            <p>Notificação 3</p>
          </>
        )}
      </Modal>
    </Sider>
  );
};

export default Sidebar;
