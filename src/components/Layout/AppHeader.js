import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = ({ collapsed, toggleCollapsed }) => {
  return (
    <Header style={{ background: '#fff', padding: '0 16px', display: 'flex', alignItems: 'center' }}>
      {collapsed ? (
        <MenuUnfoldOutlined className="trigger" onClick={toggleCollapsed} />
      ) : (
        <MenuFoldOutlined className="trigger" onClick={toggleCollapsed} />
      )}
      <h2 style={{ marginLeft: '16px', fontSize: '20px', fontWeight: 'bold' }}>Home</h2>
    </Header>
  );
};

export default AppHeader;

