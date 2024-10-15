import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate(); 

  const onFinish = (values) => {
    console.log('Success:', values);
    navigate('/home');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.logoContainer}>
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
            label="Cpf/Cnpj"
            name="cpfCnpj"
            rules={[{ required: true, message: 'Por favor, insira seu Cpf/Cnpj!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
          >
            <Input.Password />
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
