import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './Data/data.json';
import Courses from './Componets/Courses/Courses';
import Cart from './Componets/Cart/Cart';

function App() {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() =>{
    setCourses(data);
  },[])

  const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  }

  return (
    <div className="App">
        <h1>Online Courses Academy</h1>
        <Cart cart={cart}></Cart>
        <ul>
          {
            courses.map(course => <Courses handleAddCourse={handleAddCourse} course ={course} key={course.id}></Courses>)
          }
        </ul>
    </div>
  );
}

export default App;
