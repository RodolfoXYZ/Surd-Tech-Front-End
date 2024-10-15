import React from 'react';
import { Row, Col } from 'antd';
import CourseCard from './CourseCard';

const CourseList = ({ courses }) => {
  return (
    <>
      {courses.map((courseGroup, index) => (
        <div key={index}>
          <h2 style={{ marginBottom: '16px' }}>{courseGroup.category}</h2>
          <Row gutter={[16, 16]}>
            {courseGroup.data.map((course, i) => (
              <Col key={i} xs={24} sm={12} md={8} lg={6}>
                <CourseCard course={course} />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
};

export default CourseList;
