import React from 'react';
import { Row, Col } from 'antd';
import CourseCard from './CourseCard';

const CourseList = () => {
  const courses = [
    {
      id: 1,
      title: 'Educação Financeira',
      image: 'https://via.placeholder.com/150?text=Educação+Financeira', 
    },
    {
      id: 2,
      title: 'Desenvolvimento Pessoal',
      image: 'https://via.placeholder.com/150?text=Desenvolvimento+Pessoal',
    },
    {
      id: 3,
      title: 'Empreendedorismo',
      image: 'https://via.placeholder.com/150?text=Empreendedorismo', 
    },
    {
      id: 4,
      title: 'Autoconhecimento',
      image: 'https://via.placeholder.com/150?text=Autoconhecimento',
    },
    {
      id: 5,
      title: 'Educação Financeira',
      image: 'https://via.placeholder.com/150?text=Educação+Financeira',
    },
    {
      id: 6,
      title: 'Desenvolvimento Pessoal',
      image: 'https://via.placeholder.com/150?text=Desenvolvimento+Pessoal',
    },
    {
      id: 7,
      title: 'Empreendedorismo',
      image: 'https://via.placeholder.com/150?text=Empreendedorismo', 
    },
    {
      id: 8,
      title: 'Autoconhecimento',
      image: 'https://via.placeholder.com/150?text=Autoconhecimento', 
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      {courses.map((course) => (
        <Col key={course.id} xs={24} sm={12} md={8} lg={6}>
          <CourseCard course={course} />
        </Col>
      ))}
    </Row>
  );
};

export default CourseList;


