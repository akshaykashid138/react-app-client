import React, { Component } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'
// import {Redirect} from 'react-router-dom'


export class Registration extends Component {
    
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
            axios.post("https://fullstack-mernstackapp.herokuapp.com/users/registration",data).then((res)=>{
                console.log(res)
                if(res.data.success) {
                    alert("register success")
                    this.setState({email:"", password:""})
                    // console.log(BrowserRouter)
                    this.props.history.push("/login")
                }else{
                    alert("User already Present")
                }
                
            })
            
        }
        
    
    render() {
        return (
            <div>
                <div class="signup-form">
    <form >
		<h2>Register</h2>
		{/*<p class="hint-text">Create your account. It's free and only takes a minute.</p> */}
                
        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Email" required="required" onChange={this.handleInputChange} autocomplete="off"/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required" onChange={this.handleInputChange} autocomplete="off"/>
        </div>
		
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block" onClick={this.onSubmit}>Register Now</button>
        </div>
    </form>
	<div class="text-center">Already have an account? <Link to="/login">Sign In</Link></div>
</div>
            </div>
        )
    }
}

export default Registration
