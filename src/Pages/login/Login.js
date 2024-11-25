import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';
import logo from '../../assets/images/logo.png';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post('https://surdtech-backend.onrender.com/auth/login', {
        email: values.email,
        senha: values.password,
      });

      if (response.data && response.data.token) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        message.success('Login realizado com sucesso!');
        navigate('/home');
      } else {
        throw new Error('Token não encontrado na resposta');
      }
    } catch (error) {
      if (error.response) {
        message.error(`Erro ao realizar o login: ${error.response.data.message || 'Erro desconhecido'}`);
      } else if (error.request) {
        message.error('Não foi possível se conectar ao servidor. Verifique sua conexão.');
      } else {
        message.error('Erro ao realizar o login. Tente novamente.');
      }
      console.error('Error:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Erro ao submeter o formulário:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo SurdTech" className={styles.logo} />
          <h1 className={styles.title}>SurdTech</h1>
        </div>
        <h3 className={styles.subtitle}>Login</h3>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Por favor, insira seu email!' },
              { type: 'email', message: 'Formato de email inválido!' },
            ]}
          >
            <Input placeholder="Digite seu email" />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
          >
            <Input.Password placeholder="Digite sua senha" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.button}>
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
