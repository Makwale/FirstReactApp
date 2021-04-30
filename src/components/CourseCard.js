import React, { Component } from 'react';

class CourseCard extends Component{

    constructor(){
        super()
        
    }

    
    render(){
       
        return (
            <div>
                    <img width="250" height="200" src={this.props.course.imgUrl}/>
                    <h3>{this.props.course.name}</h3>
                    <h6>R{this.props.course.price}</h6>
                    <button style={{backgroundColor: "yellow", margin: "10px"}} onClick={this.test.bind(this,this.props.course)}>Enroll Now</button>
            </div>
        )
    }

    test(c){
        alert(c.name);
    }
    
}

export default CourseCard;