import React from 'react';
import Link from 'react-router-dom';

const Login = () => {

    return (
        <div className="main-container">
                <div class="main contents">
                    <div className="header">
                        <h1>Login</h1>
                        <p>Please sign into your account.</p>
                    </div>
                    <form>
                        <div>
                            <label><b>Email: </b></label>
                            <input type="text" name="email" id="floatingInput" required></input>
                        </div>
                        <div>
                            <label><b>Password: </b></label>
                            <input type="password" name="password" id="floatingInput" required></input>
                        </div>
                        <div className="submit__btn">
                            <button type="submit" id="submit__btn">Login</button>
                        </div>
                    </form>
                    <Link to="">
                        <p>New User? Create an Account Here</p>
                    </Link>
                </div>
            </div>
    )
};

export default Login;