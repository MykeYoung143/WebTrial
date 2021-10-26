import React from "react";
import logo from '../../Assets/logo.png'
import './Login.css'

class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }

    handleSubmit = (e) =>{
        
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='div-login'>
                <div className='logo'>
                    <img alt='logo' className ='div-login-logo' src={logo}/>
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <button onSubmit = {this.handleSubmit}>Log In</button>
                        <button onSubmit = {this.handleSubmit}>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login