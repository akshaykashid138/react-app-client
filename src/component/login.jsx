import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
export class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }

    handleInputChange=(e)=>{
        const {name,value}=e.target
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const {email,password}=this.state;
        const data={
           email:email,
           password:password
        }
        axios.post("https://fullstack-mernstackapp.herokuapp.com/users/login",data).then((res)=>{
            console.log(res)
            if(res.data.success) {
                 
                this.setState({email:"", password:""})
                this.props.history.push("https://pedantic-allen-916df9.netlify.app/homeScreen")
            }
            else{
                alert(res.data.message)
            }
        })
    }
    render() {
        return (
            <div>
                <div class="signup-form">
    <form >
		<h2>Login</h2>
                
        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Email" required="required" onChange={this.handleInputChange} autocomplete="off"/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required" onChange={this.handleInputChange} autocomplete="off"/>
        </div>
		
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block" onClick={this.onSubmit}>Login</button>
        </div>
    </form>
	<div class="text-center">You don't have an account? <Link to="/register">Sign Up</Link></div>
</div>
            </div>
        )
    }
}

export default Login
