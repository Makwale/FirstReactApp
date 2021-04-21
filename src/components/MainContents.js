import React from 'react';
import { coures } from '../assets/coursedata';
import CourseCard from './CourseCard';

function MainContencts(){
    let courses = coures.map(course => <CourseCard course= {course}/>)
    return (
        <div className="main-contents">
            <h1>Wellome to my first React app</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <a href="#">Read More...</a>
            
            {courses} 
        </div>
    )
}

export default MainContencts;