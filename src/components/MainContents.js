import React, { Component } from 'react';
import { coures } from '../assets/coursedata';
import CourseCard from './CourseCard';

class MainContencts extends Component{
    courses = coures.map(course => <CourseCard course= {course}/>)

    constructor(){
        super()
        this.state ={
            test: 0,
            var: "Dick",
            time: new Date().toLocaleTimeString()
        }

        setInterval(() => {
            this.tick();
        }, 1000);
    }

    tick(){
        
        this.setState({ time : new Date().toLocaleTimeString()})
    }

    render(){
        return this.props.isLoading ? <h1>Loading...</h1> :
        (
            <div className="main-contents">
                <h1>Wellome to my first React app</h1>
                <h3>{this.state.test}</h3>
                <h2>{this.state.var}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit {this.state.time}</p>
                <button onClick= {this.count.bind(this)}>Count</button>
                <a href="#">Read More...</a>
                
                {this.courses} 
            </div>
        )
    }

    count(){

        this.setState( state => state = {
            test : state.test + 1,
            var: "What a Dick!!!"
        })
    }
    
   

}

export default MainContencts;