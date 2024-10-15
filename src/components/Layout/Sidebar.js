import React from 'react';
import { Layout, Menu } from 'antd';
import { SearchOutlined, BookOutlined, HomeOutlined} from '@ant-design/icons';
import logo from '../../assets/images/logo.svg';

const { Sider } = Layout;

const Sidebar = ({ collapsed, toggleCollapsed }) => {
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
      </Menu>
    </Sider>
  );
};

export default Sidebar;
