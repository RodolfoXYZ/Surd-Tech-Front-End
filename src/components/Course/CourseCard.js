import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/aula');
  };

  return (
    <Card
      hoverable
      cover={<img alt={course.name} src={`/assets/images/${course.image}`} />}
      onClick={handleCardClick}
    >
      <Meta
        title={`Nome: ${course.name}`}
        description={`Duração: ${course.duration}`}
      />
    </Card>
  );
};

export default CourseCard;
