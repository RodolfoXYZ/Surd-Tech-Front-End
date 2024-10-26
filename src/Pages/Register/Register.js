import React from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import styles from './Register.module.css'; 

const Register = () => {
  const navigate = useNavigate(); 

  const onFinish = async (values) => {
    console.log(values)
    try {
      const response = await axios.post('https://surdtech-backend.onrender.com/auth/register', {
        nome: values.name,
        email: values.email, 
        senha: values.password, 
        tipoUser: "ALUNO" 
      });

      
      if (response.data && response.data.token) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        message.success('Cadastro realizado com sucesso!');

       
        navigate('/login');
      } else {
        throw new Error('Token não encontrado na resposta');
      }
    } catch (error) {
      if (error.response) {
        
        message.error(`Erro ao realizar o cadastro: ${error.response.data.message || 'Erro desconhecido'}`);
      } else if (error.request) {
        message.error('Não foi possível se conectar ao servidor. Verifique sua conexão.');
      } else {
        message.error('Erro ao realizar o cadastro. Tente novamente.');
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
                <Input placeholder="Digite seu nome" />
              </Form.Item>
            </Col>
            <Col span={12}>
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
            </Col>
          </Row>
          
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Senha"
                name="password"
                rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
              >
                <Input.Password placeholder="Digite sua senha" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Confirmar Senha"
                name="confirmPassword"
                dependencies={['password']}
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
                <Input.Password placeholder="Confirme sua senha" />
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
