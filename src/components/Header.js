import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div >
            <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-secondary ">
                <div className="container">
                <Link to="/"><img style={{maxHeight:40}} src="https://i.ibb.co/ygzqTxZ/favicon.png" class="img-fluid page-header" alt="Responsive image" ></img></Link>
                <Link style={{marginLeft:10}} className="navbar-brand"to="/">Bar Application</Link>
                        <ul className="navbar-nav ml-auto">
                            <li  className="nav-item">
                                <Link className="nav-link" to="/">Homepage</Link>
                            </li>
                        </ul>
                    
                </div>
            </nav>
        </div>
    );
}

export default Header;