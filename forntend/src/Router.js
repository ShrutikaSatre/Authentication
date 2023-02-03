import React, {useContext} from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './Home';
import PageNotFound from './PageNotFound'
import NavBar from './NavBar';
import Register from './Register'
import Login from './Login'
import AuthContext from './context/AuthContext';
import Admin from './Admin' 
// import PostUpdates from './PostUpdates';


function Router() {

    const {loggedIn} = useContext(AuthContext)

    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                {
                    loggedIn === false && (
                    <>
                        <Route exact path="/login">
                            <Login/>                 
                        </Route>
                        <Route exact path="/checkout">
                            <center className="mt-5 mb-5">
                                <h1>Error 500</h1>
                                <h3>Permission not granted</h3>
                            </center>                 
                        </Route>
                        <Route exact path="/register">
                            <Register/>
                        </Route>
                    </>
                )}
                {
                    loggedIn === true && (
                    <>
                        <Route exact path="/home">
                            <Home/>                   
                        </Route>
                        <Route exact path="/login">
                            <center className="mt-5 mb-5">
                                <h1>Error 500</h1>
                                <h3>You are alrady logged in</h3>
                            </center>                 
                        </Route>
                        <Route exact path="/feedback">
                            <center className="mt-5 mb-5">
                                <h1>Error 500</h1>
                                <h3>Only users can give feedback</h3>
                            </center>             
                        </Route>
                    </>
                )}
                
            </Switch>
        </BrowserRouter>
    )
}

export default Router
