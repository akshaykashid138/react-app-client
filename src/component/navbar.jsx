import React from 'react'
import { Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="https://pedantic-allen-916df9.netlify.app">Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <Link class="nav-item nav-link" to="/register">Register</Link>
                    <Link class="nav-item nav-link" to="/login">Login</Link>
                    
                    </div>
                </div>
        </nav>
        </div>
    )
}

export default Navbar
