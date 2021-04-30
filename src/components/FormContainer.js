import React from 'react'

function FormContainer(props){
     return (
         <div>
            <form onSubmit={props.onSubmit}>
                <input placeholder="First Name" name="firstName" onKeyUp={props.onKyDown}></input>  <br/>

                <input placeholder="First Name" name="lastName" onKeyUp={props.onKyDown}></input> <br/>
                Disabled<input name="checked" type="checkbox" checked={props.state.checked} onClick={props.onKyDown}></input> <br/>
                <input type="radio"  name="gender" value="Male" onClick={props.onKyDown} ></input> Male <br/>
                <input type="radio" name="gender" value="Female" onClick={props.onKyDown}></input> Female<br/>
                
                <select name="province" onChange={props.onKyDown} value={props.state.province}>
                    <option value="Limpopo">Limpopo</option>
                    <option value="Gauteng" selected>Gauteng</option>
                    <option value="Mpumalanga">Mpumalanga</option>
                </select> <br/>
                <textarea placeholder="Type your message" name="message" onKeyUp={props.onKyDown} />
                <h3>{props.state.firstName} {props.state.lastName} {props.state.message} {props.state.gender} {props.state.province}</h3>
                
                <button type="submit">Submit</button>
            </form>
        </div>
     )
}

export default FormContainer