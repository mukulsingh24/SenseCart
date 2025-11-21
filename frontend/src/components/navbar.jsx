import React from "react";
import { Link } from "react-router-dom"
function Nav(){
    const auth = localStorage.getItem('token');
    const logout = () =>{
        localStorage.removeItem('token')
        window.location.href="/login";
    }
    return(
        <div>
            <h1>E-Commerce Store</h1>
            {
                auth ? 
                <button onClick={logout}>Logout</button>
                :
                <div><Link to="/login">Login</Link>
                <span> | </span>
                <Link to="/register">Register</Link></div>
            }
        </div>
    )
}

export default Nav