import React from 'react';
import { Row, Col, Button } from 'antd';
import styles from './Produto.module.css'


const Produto = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.headerTitle}>SurdTech</h1>
        <p className={styles.headerSubtitle}>ESCOLHA O PRODUTO IDEAL PARA VOCÊ:</p>
      </header>

      <Row justify="center" className={styles.content}>
        <Col xs={24} md={12} className={styles.productColumn}>
          <h2 className={styles.productTitle}>On demand</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Seu próprio ambiente de acesso</li>
            <li className={styles.listItem}>Conteúdo em diversos formatos</li>
            <li className={styles.listItem}>Dashboard completo para gerenciamento</li>
            <li className={styles.listItem}>Oferta de cursos, aulas e treinamentos em um ambiente fácil e exclusivo</li>
          </ul>
          <Button type="primary" className={`${styles.enterButton} ${styles.onDemandButton}`}>Entrar</Button>
        </Col>

        <Col xs={24} md={12} className={styles.productColumn}>
          <h2 className={styles.productTitle}>Educ</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Trilha de aprendizado</li>
            <li className={styles.listItem}>Conteúdo em diversos formatos</li>
            <li className={styles.listItem}>Dashboard completo para gerenciamento</li>
            <li className={styles.listItem}>Provas e testes</li>
            <li className={styles.listItem}>Elaboração de pesquisas</li>
          </ul>
          <Button type="primary" className={`${styles.enterButton} ${styles.educButton}`}>Entrar</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Produto;