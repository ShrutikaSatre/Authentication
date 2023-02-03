import React, {useContext} from 'react'
import axios from 'axios'
import AuthContext from './context/AuthContext';
import {useHistory} from 'react-router-dom'
import './Admin.css'

function LogOut() {

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function logOut() {
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        history.push("/")
    }

    return (
        <div>
            <a className="log_out_btn" onClick={logOut}>
                Log out
            </a>
        </div>
    )
}

export default LogOut
