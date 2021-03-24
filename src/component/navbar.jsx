import React from 'react'

function Navbar() {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link" href="https://pedantic-allen-916df9.netlify.app/register">Register</a>
                    <a class="nav-item nav-link" href="https://pedantic-allen-916df9.netlify.app/login">Login</a>
                    
                    </div>
                </div>
        </nav>
        </div>
    )
}

export default Navbar
