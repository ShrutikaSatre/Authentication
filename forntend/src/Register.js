import React, {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from './context/AuthContext';
import './Register.css'
import Swal from 'sweetalert2'

function Register() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordVarify, setPasswordVarify] = useState();
    const [name, setName] = useState();
    const [nameError, setNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordVarifyError, setPasswordVarifyError] = useState();

    var err_count = 0;

    const {getLoggedIn} = useContext(AuthContext)

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

    function isName(nameValue){
        return /^[a-zA-Z ]{2,}$/.test(name);
    }

    function isEmail(emailValue){
        return /^[A-Za-z_.0-9]{3,}@+[a-z.]{4,7}[.]{1}[comin]{2,3}$/.test(email);
    }

    function isPass(pass){
        return /^[\w!@#$%^&*]{8,}$/.test(pass);
    }

    function isStrongestPass(pass){
        return /^(?=.*[0-9])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(pass);
    }
    
    function register(e){
        e.preventDefault();

        if(!isPass(password)) {
            setPasswordVarify(undefined);
            err_count += 1;
        }
        else if(!isStrongestPass(password)){
            setPasswordVarify(undefined);
            err_count += 1;
        }
        else if(passwordVarify === undefined)
        {
            setPasswordVarifyError("Confirm your password !")
            err_count += 1;       
            Toast.fire({
                icon: 'error',
                title: 'Confirm your password !'
              })     
        }
        else if(password !== passwordVarify)
        {
            setPasswordVarifyError("Passwords does not match !")
            err_count += 1;  
            Toast.fire({
                icon: 'error',
                title: 'Both Passwords does not match !'
              })          
        }
        else
        {
            setPasswordVarifyError(undefined);
        }


        if(password === undefined)
        {
            setPasswordError("Enter Password !");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Set password !'
              })
        }
        else if (!isPass(password)) 
        {
            setPasswordError('Use 8 or more Characters. !');
            err_count += 1;    
            Toast.fire({
                icon: 'error',
                title: 'Password shold be more than 8 characters !'
              })        
        }
        else if(!isStrongestPass(password))
        {
            setPasswordError("Use at least 1 number & 1 symbol. !")
            err_count += 1;         
            Toast.fire({
                icon: 'error',
                title: 'Set strong password !'
              })   
        }
        else{
            setPasswordError(undefined);
        }


        if(email === undefined)
        {
            setEmailError("Enter Your Mail address !");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter Your Email id !'
              })
        }
        else if(!isEmail(email))
        {
            setEmailError("Invalid Email address !")
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Invalid Email id !'
              })
        }
        else{
            setEmailError(undefined);
        }


        if(name === undefined) {
            setNameError("Enter Your Name !");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter Your Name !'
              })
        }
        else if(!isName(name)){
            setNameError("Invalid Name !");
            err_count += 1;  
            Toast.fire({
                icon: 'error',
                title: 'Invalid Name !'
              })
        }
        else {
            setNameError(undefined)
        }
        

        if(err_count === 0)
        {
            save_data();
            setTimeout(
                function() {
                    document.location.href="/login"
                },
                4000
            );
            
            Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: 'Your Account is successfully created',
            })
        }
    }

    async function save_data(e){
        try{
            const registerData = {
                name,
                email, 
                password, 
                passwordVarify
            };

            await axios.post("http://localhost:5000/auth/", registerData);

        } catch(err) {
            console.error(err);
            Swal.fire({
                icon: 'error',
                title: 'Admin Alrady Exixts',
                text: 'This email is taken by another account',
            })
        }
    }

    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
            <div className="row d-flex">
                <div className="col-lg-6 mt-lg-5">
                    <div className="card1 pb-5 mt-5">
                        <div className="row px-3 justify-content-center mt-5 mb-lg-0 mb-5 border-line"> <img src="images/travel4.png" className="image"/> </div>
                    </div>
                </div>
                <form className="col-lg-6" onSubmit={register}>
                    <div className="card2 card border-0 px-4 py-5">
                        <h3 className="text-center">Sign Up</h3>
                        <center><hr className="w-50"/></center>
                        <div className="row px-3">          
                            <h6 className="mb-0 mt-3 text-sm">Name</h6>
                            <input className="input" type="text" placeholder="Enter Your Name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            />
                            <small><b className="text-danger">{nameError}</b></small>
                        </div>
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
                        </div>
                        <div className="row px-3"> 
                                <h6 className="mb-0 mt-3 text-sm">Confirm Password</h6>
                            <input className="input" type="password" placeholder="Enter password"
                            onChange={(e) => setPasswordVarify(e.target.value)}
                            value={passwordVarify}
                            /> </div>
                            <small><b className="text-danger" id="con_pass">{passwordVarifyError}</b></small><br/>
                        <div className="row mb-3 px-3"> <button type="submit" className="btn btn-primary text-center">Register</button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Register

{/* <h1>Regsiter a new Account</h1>
            <form onSubmit={register}>
                <input type="email" placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <input type="password" placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
                <input type="password" placeholder="Varify password"
                onChange={(e) => setPasswordVarify(e.target.value)}
                value={passwordVarify}
                />
                <button type="submit">Register</button>                
            </form> */}