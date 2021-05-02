import React, { Component } from 'react' 
import { Switch, Route, Link } from "react-router-dom";
class HeaderComponent extends Component { 
    constructor(props) { 
        super(props) 
        this.state = {  } 
    } 
 
    render() { 
        return ( 
           
                <div className="body">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/employees"} className="navbar-brand">
                    Employee Management System
                </Link>
                <div className="navbar-nav mr-auto">

                    <li className="nav-item">
                    <Link to={"/pay"} className="nav-link">
                        Payment
                    </Link>
                    </li>

                    
                    <li className="nav-item">
                        <a href="/custlogin" className="nav-link" onClick={this.logOut}>
                        
                        </a>
                    </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/custlogin"} className="nav-link">
                        Login
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to={"/custregister"} className="nav-link">
                        Sign Up
                        </Link>
                    </li>
                    </div>
                )
                </nav>
                {/* <header> 
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark"> 
                    <div><a href="https://javaguides.net" className="navbar-brand">Employee Management App</a></div> 
                    </nav> 
                </header>  */}
            </div> 
        ) 
    } 
} 
 
export default HeaderComponent 