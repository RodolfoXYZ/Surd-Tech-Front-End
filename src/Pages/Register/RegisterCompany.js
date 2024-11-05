import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import styles from './Register.module.css';

const RegisterCompany = () => {
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
          <h1 className={styles.title}>SurdTech</h1> {}
        </div>
        <h3 className={styles.subtitle}>Cadastre sua empresa</h3> {/* Título ajustado conforme a imagem */}
        <Form
          name="company_register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Nome da empresa"
                name="companyName"
                rules={[{ required: true, message: 'Por favor, insira o nome da empresa!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="CNPJ"
                name="cnpj"
                rules={[{ required: true, message: 'Por favor, insira o CNPJ!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="E-mail"
                name="email"
                rules={[
                  { required: true, message: 'Por favor, insira seu e-mail!' },
                  { type: 'email', message: 'E-mail inválido!' },
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
                label="Confirme a senha"
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

export default RegisterCompany;
