import React, { useState } from 'react';
import { Layout, Row, Col, Card } from 'antd';
import Sidebar from '../../components/Layout/Sidebar';
import AppHeader from '../../components/Layout/AppHeader';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const { Content } = Layout;

const DashBoard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

 
  const employeeAccessData = {
    labels: ['Acessou', 'Não acessou'],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ['#6A5ACD', '#FF6347'],
      },
    ],
  };

  
  const courseAccessData = {
    labels: ['Empreendimento', 'Vendas', 'Tecnologia'],
    datasets: [
      {
        label: 'Acessos',
        data: [40, 80, 60],
        backgroundColor: '#6A5ACD',
      },
    ],
  };

 
  const articleAccessData = {
    labels: ['Technology', 'Empreendimento', 'Gestão'],
    datasets: [
      {
        label: 'Acesso',
        data: [45, 23, 97],
        backgroundColor: '#6A5ACD',
      },
    ],
  };

  
  const examsData = {
    labels: ['Technology', 'Empreendimento', 'Gestão'],
    datasets: [
      {
        data: [45, 23, 97],
        backgroundColor: ['#FF6347', '#87CEFA', '#6A5ACD'],
      },
    ],
  };

  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
     
      <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

      <Layout>
        
        <AppHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

        <Content style={{ margin: '24px', backgroundColor: '#fff', padding: 24 }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={12}>
              <Card title="Quantos funcionários registrados acessaram a plataforma">
                <div style={{ width: '100%', height: '200px', margin: '0 auto' }}>
                  <Pie data={employeeAccessData} options={options} />
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={12}>
              <Card title="Cursos mais acessados">
                <div style={{ width: '100%', height: '200px', margin: '0 auto' }}>
                  <Bar data={courseAccessData} options={options} />
                </div>
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
            <Col xs={24} sm={12} lg={12}>
              <Card title="Artigos mais acessados">
                <div style={{ width: '100%', height: '200px', margin: '0 auto' }}>
                  <Bar data={articleAccessData} options={options} />
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={12}>
              <Card title="Quantas provas foram realizadas">
                <div style={{ width: '100%', height: '200px', margin: '0 auto' }}>
                  <Pie data={examsData} options={options} />
                </div>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashBoard;
