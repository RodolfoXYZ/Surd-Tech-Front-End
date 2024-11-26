import React, { useState } from 'react';
import { Layout, Menu, Modal, Button } from 'antd';
import { 
  SearchOutlined, 
  BookOutlined, 
  HomeOutlined, 
  BellOutlined, 
  FileOutlined, 
  DashboardOutlined, 
  UploadOutlined // Ícone adicionado
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const { Sider } = Layout;

const Sidebar = ({ collapsed, toggleCollapsed }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleMenuClick = (route) => {
    navigate(route);
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
        <Menu.Item
          key="1"
          icon={<HomeOutlined />}
          onClick={() => handleMenuClick('/home')}
          style={{
            backgroundColor: '#004666',
            borderBottom: '1px solid #003C4D',
          }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<BookOutlined />}
          onClick={() => handleMenuClick('/biblioteca')}
          style={{
            backgroundColor: '#004666',
            borderBottom: '1px solid #003C4D',
          }}
        >
          Biblioteca
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<FileOutlined />}
          onClick={() => handleMenuClick('/prova')}
          style={{
            backgroundColor: '#004666',
            borderBottom: '1px solid #003C4D',
          }}
        >
          Prova
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<DashboardOutlined />}
          onClick={() => handleMenuClick('/dashboard')}
          style={{
            backgroundColor: '#004666',
            borderBottom: '1px solid #003C4D',
          }}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<BellOutlined />}
          onClick={showLoadingModal}
        >
          Notificações
        </Menu.Item>
        <Menu.Item
          key="6"
          icon={<UploadOutlined />} 
          onClick={() => handleMenuClick('/upload-video')} 
        >
          Upload de Vídeo
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
