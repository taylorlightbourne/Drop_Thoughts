import React from 'react';
import { Link } from 'react-router-dom';
import './LoginRegister.css';

const Register = () => {

    return (
    <div className="main-container">
        <div className="main-contents">
            <div className="header">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
            </div>
            <form>
                <div>
                    <label><b>Username: </b></label>
                    <input type="text" name="username" id="floatingInput" required></input>
                </div>
                <div>
                    <label><b>Email: </b></label>
                    <input type="text" name="email" id="floatingInput" required></input>
                </div>
                <div>
                    <label><b>Password: </b></label>
                    <input type="password" name="password" id="floatingInput" required></input>
                </div>
                <div className="submit__btn">
                    <button type="submit" id="submit__btn">Create Account</button>
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