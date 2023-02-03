// import React from 'react';
// import Nav from 'react-bootstrap/Nav';
// import {Navbar, NavLink} from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// export const NavBar =()=> {
//     return (
//         <div>
//             <Navbar bg="light" expand="lg" className="navbar">
//             <Navbar.Brand href="/" className="brand">C<span><img src="images/corona.png" alt="corona" width="20px" height="20px"/></span>VID-19 Tracker</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                 <NavLink href="/" activeClassName="active">Home</NavLink>
//                 <NavLink href="/about-covid-19-overview" activeClassName="active">About Covid 19</NavLink>
//                 <NavLink href="/latest-updates" activeClassName="active">Latest Updates</NavLink>
//                 <NavLink href="/self-test" activeClassName="active">Self Checker</NavLink>
//                 </Nav>
//             </Navbar.Collapse>
//             </Navbar>
//         </div>
//     )
// }

// export const NavBar2 =()=> {
//     return (
//         <div>
//             <Navbar className="titles">
//                 <NavLink href="/about-covid-19-overview"><b className="active">Overview</b></NavLink>
//                 <NavLink href="/about-covid-19-prevention"><b>Prevention</b></NavLink>
//                 <NavLink href="/about-covid-19-symptoms"><b>Symptoms</b></NavLink>
//             </Navbar>
//         </div>
//     )
// }

import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import {Navbar, NavLink, NavDropdown} from 'react-bootstrap';
import './Home.css'
import AuthContext from './context/AuthContext';
import LogOut from './LogOut'

function NavBar() {

    const {loggedIn} = useContext(AuthContext);

    return (
        <div>
            <Navbar bg="light" expand="lg" className="navbar container-fluid">
                <Navbar.Brand href="/" className="brand">C<span><img src="images/corona.png" alt="corona" width="20px" height="20px"/></span>VID-19 Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        
                        {
                            loggedIn === false && (
                            <>
                                <NavLink><Link style={{textDecoration: 'none', color: '#6d6666d2'}} to="/">Home</Link></NavLink>
                                <NavLink><Link style={{textDecoration: 'none', color: '#6d6666d2'}} to="/about-covid-19-overview">About Covid-19</Link></NavLink>
                                <NavLink><Link style={{textDecoration: 'none', color: '#6d6666d2'}} to="/latest-updates">Latest Updates</Link></NavLink>
                                <NavLink><Link style={{textDecoration: 'none', color: '#6d6666d2'}} to="/self-test">Self Test</Link></NavLink>
                                <NavLink><Link style={{textDecoration: 'none', color: '#6d6666d2'}} to="/donation">Donate</Link></NavLink>
                                <NavLink><Link style={{textDecoration: 'none', color: '#6d6666d2'}} to="/login">Admin Login</Link></NavLink>
                            </>
                        )}
                        {
                            loggedIn === true && (
                            <>
                                <NavLink href="/admin">User Feedbakes</NavLink>
                                <NavLink href="/donations">Donations</NavLink>
                                <NavLink href="/register">Register new admin</NavLink>
                                <NavLink href="/update">Post Updates</NavLink>
                                <NavLink><LogOut/></NavLink>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar



