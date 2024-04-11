import React from 'react'

const NavBar = () => {
    return(
        <div className='navbar'>
            <div className="logo">
                <h1>F-Library</h1>
            </div>
            <nav className='navigation'>
                <ul>
                    <li><a href="/">Festival</a></li>
                    <li><a href="/">Category</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
            <div className="btn">
                <button>Login</button>
            </div>
        </div>
    )
}

export default NavBar;