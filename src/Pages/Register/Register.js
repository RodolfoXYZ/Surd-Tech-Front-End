import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import styles from './Register.module.css';

const Register = () => {
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
        <h3 className={styles.subtitle}>Cadastro</h3>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Nome"
                name="name"
                rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Cpf/Cnpj"
                name="cpfCnpj"
                rules={[{ required: true, message: 'Por favor, insira seu Cpf/Cnpj!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Por favor, insira seu email!' },
                  { type: 'email', message: 'Email inválido!' },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Telefone"
                name="phone"
                rules={[{ required: true, message: 'Por favor, insira seu telefone!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Senha"
                name="password"
                rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Confirmar Senha"
                name="confirmPassword"
                rules={[
                  { required: true, message: 'Por favor, confirme sua senha!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('As senhas não coincidem!'));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Cidade"
                name="city"
                rules={[{ required: true, message: 'Por favor, insira sua cidade!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Estado"
                name="state"
                rules={[{ required: true, message: 'Por favor, insira seu estado!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.button}>
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
