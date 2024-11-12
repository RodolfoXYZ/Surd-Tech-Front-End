import React from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import CourseList from '../../components/Course/CouserList';
import './Biblioteca.css';

function Biblioteca() {
  return (
    <div className="library-container">
      <Sidebar />
      <div className="content">
        <h1>Biblioteca</h1>
        <div className="search-bar">
          <input type="text" placeholder="Pesquise pelo nome do curso" />
          <button className="search-button">🔍</button>
        </div>
        <CourseList />
      </div>
    </div>
  );
}

export default Biblioteca; 