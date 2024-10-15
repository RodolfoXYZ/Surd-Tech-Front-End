import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CourseCard = ({ course }) => {
  return (
    <Card
      hoverable
      cover={<img alt={course.name} src={`/assets/images/${course.image}`} />}
    >
      <Meta
        title={`Nome: ${course.name}`}
        description={`Duração: ${course.duration}`}
      />
    </Card>
  );
};

export default CourseCard;
