import React, {useState, useContext} from 'react'
import axios from 'axios';
import AuthContext from './context/AuthContext';
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'
import { setTimeout } from 'timers';
// import './Register.css'

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    //function for toast message
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    var err_count = 0;

    function login(e) {
        e.preventDefault();


        if(password === undefined)
        {
            setPasswordError("Enter Password !");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter Password !'
              })
        }
        else {
            setPasswordError(undefined);
        }


        if(email === undefined)
        {
            setEmailError("Enter your Email address !");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter Email id!'
              })
        }
        else{
            setEmailError(undefined);
        }

        
        if(err_count === 0)
        {
            render_data();
        }
    }

    async function render_data(){
        try {
            const loginData = {
                email, password
            };

            await axios.post("http://localhost:5000/auth/login", loginData); 
            await getLoggedIn();
           
            history.push("/home")
            Swal.fire({
                icon: 'success',
                title: 'Welcome !',
                text: 'Successfully Logged in',
                })

        } catch (err) {

            setEmailError("Incorrect Email or Password !")
            Toast.fire({
                icon: 'error',
                title: 'Incorrect Email or Password !'
              })    
        
            console.error(err);
        }
    }

    return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto bg-light">
        <div className="card card0 border-0">
            <div className="row d-flex">
                <div className="col-lg-6">
                    <div className="card1 pb-5">
                        <div className="row justify-content-center border-line"> <img src="images/travel3.jpg" className="image"/> </div>
                    </div>
                </div>
                <form className="col-lg-6" onSubmit={login}>
                    <div className="card2 card border-0 px-4 py-5">
                        <h3 className="text-center">Login</h3>
                        <center><hr className="w-50"/></center>
                        <div className="row px-3"> 
                                <h6 className="mb-0 mt-3 text-sm">Email Address</h6>
                            <input className="input" type="text" placeholder="Enter a valid email address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            />
                            <small><b className="text-danger">{emailError}</b></small>
                        </div>
                        <div className="row px-3"> 
                                <h6 className="mb-0 mt-3 text-sm">Password</h6>
                            <input className="input" type="password" placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            />
                            <small><b className="text-danger">{passwordError}</b></small>
                        </div><br/>
                        <center><div className="mb-3 px-3"> <button type="submit/reset" className="btn btn-primary text-center w-50">Log In</button></div></center>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login

{/* <div>
            <h1>Login to Your account</h1>
            <form onSubmit={login}>
                <input type="email" placeholder="Enter emamil here" 
                onChange={(e)=>setEmail(e.target.value)}
                value={email}     
                />
                <input type="password" placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}      
                />
                <button type="submit">Log in</button>
            </form>
        </div> */}