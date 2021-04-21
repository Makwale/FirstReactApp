import React from 'react';

function CourseCard(props){
    return (
        <div>
                <img width="250" height="200" src={props.course.imgUrl}/>
                <h3>{props.course.name}</h3>
                <h6>R{props.course.price}</h6>
            </div>
    )
}

export default CourseCard;