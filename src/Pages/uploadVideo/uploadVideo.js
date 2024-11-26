import React, { useState } from 'react';
import { Layout, Form, Input, Button, message } from 'antd';
import Sidebar from '../../components/Layout/Sidebar';
import AppHeader from '../../components/Layout/AppHeader';
import axios from 'axios';

const { Content } = Layout;

const UploadVideo = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleFinish = async (values) => {
    setLoading(true);
    const token = localStorage.getItem('authToken');

    try {
      // Envia apenas o link do vídeo
      const data = {
        titulo: values.titulo,
        descricao: values.descricao,
        link: values.link,  // O link do vídeo
      };

      await axios.post('https://surdtech-backend.onrender.com/video/upload', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      message.success('Vídeo enviado com sucesso!');
      form.resetFields();
    } catch (error) {
      console.error('Erro ao enviar vídeo:', error.response?.data || error.message);
      message.error('Erro ao enviar vídeo. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <Layout>
        <AppHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <Content style={{ margin: '16px' }}>
          <div style={{ background: '#fff', padding: '24px', borderRadius: '8px' }}>
            <h2 style={{ marginBottom: '24px', textAlign: 'center', color: '#004666' }}>
              Upload de Vídeo
            </h2>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleFinish}
              style={{ maxWidth: '600px', margin: 'auto' }}
            >
              <Form.Item
                name="titulo"
                label="Título"
                rules={[{ required: true, message: 'Por favor, insira o título do vídeo' }]}
              >
                <Input placeholder="Digite o título do vídeo" />
              </Form.Item>

              <Form.Item
                name="descricao"
                label="Descrição"
                rules={[{ required: true, message: 'Por favor, insira a descrição do vídeo' }]}
              >
                <Input.TextArea placeholder="Digite a descrição do vídeo" rows={4} />
              </Form.Item>

              <Form.Item
                name="link"
                label="Link do Vídeo"
                rules={[{ required: true, message: 'Por favor, insira o link do vídeo' }]}
              >
                <Input placeholder="Digite o link do vídeo" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  style={{ backgroundColor: '#004666', color: '#fff', border: 'none' }}
                >
                  Enviar
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UploadVideo;
