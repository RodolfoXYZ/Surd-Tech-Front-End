import React, { useState } from 'react';
import { Layout, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Sidebar from '../../components/Layout/Sidebar';
import AppHeader from '../../components/Layout/AppHeader';
import CourseList from '../../components/Course/CouserList';
import { courses } from '../../data/courses';

const { Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

      <Layout>
        <AppHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <Content style={{ margin: '16px' }}>
          <Input
            placeholder="Pesquise pelo nome do curso"
            prefix={<SearchOutlined />}
            style={{ width: '100%', marginBottom: '16px', maxWidth: '500px' }}
          />
          <CourseList courses={courses} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
