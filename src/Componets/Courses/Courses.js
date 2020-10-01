import React from 'react';
import './Courses.css';

const Courses = (props) => {
    const course = props.course;
    // console.log(course)
    // const courseStyle = {
    //     border: "3px solid purple",
    //     margin: "10px",
    //     padding: "10px"
    // };

    const handleAddCourse = props.handleAddCourse;

    return (
        <div className="Course">
            <h1>{course.course}</h1>
            <h4>Instructor : {course.instructor} (<small>{course.gender}</small>)</h4>
            <p>Institution : {course.university}</p>
            <h6>Course Fee : ${course.price}</h6>
            <p><small>Email: {course.email}</small></p>
            <button onClick={()=>handleAddCourse(props.course)}>Enroll</button>
        </div>
    );
};

export default Courses;