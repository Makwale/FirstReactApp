import React from 'react';

function Footer(){
    let date = new Date();
    let name = "Emmanuel";
    let header = [];

    for(let i = 1; i <= 4; i++){
        header.push(<h1 style={{ color: i < 3 ? "red" : "yellow"}}>This is footer stored in a header variable {i}</h1>)
    }
   


    return header;
}

export default Footer;