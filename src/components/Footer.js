import React, { Component } from 'react';

class Footer extends Component{

    date = new Date();
    name = "Emmanuel";
    header = [];

    genHeaders(){
        for(let i = 1; i <= 4; i++){
            this.header.push(<h1 style={{ color: i < 3 ? "red" : "yellow"}}>{this.name} This is footer stored in a header variable {i}</h1>)
        }
       
    }

    
    render(){ 
        
        this.genHeaders();
        return this.header;
    }


}

export default Footer;