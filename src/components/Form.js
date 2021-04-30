import React, { Component } from 'react'
import FormContainer from './FormContainer'

class Form extends Component{

    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            message: "",
            checked: true,
            gender: "",
            province: "Gauteng"
        }

        this.onKyDown = this.onKyDown.bind(this)

        this.onSubmit = this.onSubmit.bind(this)
    }

    render(){
        return <FormContainer onKyDown={this.onKyDown} state={this.state} onSubmit={this.onSubmit}/>
    }

    onKyDown(event){

        event.target.type == "checkbox" ?
            this.setState({checked: !this.state.checked})
        :
            this.setState({[event.target.name]: event.target.value})
        
    }

    onSubmit(event){
        alert(event)
    }
   
}

export default Form
