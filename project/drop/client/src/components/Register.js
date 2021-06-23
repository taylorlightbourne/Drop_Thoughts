import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Registration } from '../actions/SignUpAction';
import './LoginRegister.css';

const Register = () => {
    const dispatch = useDispatch()

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    return (
    <div className="main-container">
        <div className="main-contents">
            <div className="header">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
            </div>
            <form onSubmit={(e) => Registration(dispatch, username, password, email,e)}>
                <div>
                    <label><b>Username: </b></label>
                    <input type="text" name="username" id="floatingInput" onChange={(e) => setUserName(e.target.value)} required></input>
                </div>
                <div>
                    <label><b>Password: </b></label>
                    <input type="password" name="password" id="floatingInput" onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <div>
                    <label><b>Email: </b></label>
                    <input type="text" name="email" id="floatingInput" onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <div className="submit__btn">
                    <button type="submit" id="submit__btn" >Create Account</button>
                </div>
            </form>
            <Link to="/login">
                <p>Already Have an Account? Login Here</p>
            </Link>
        </div>
    </div>
    )
};
export default Register;
