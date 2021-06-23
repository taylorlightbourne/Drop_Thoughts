import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import '../components/LoginRegister.css';

const Login = () => {
    useEffect(() => {
    Inspiration();
    }, []);

    const Inspiration = async () => {
    const response = await fetch("http://quotes.rest/qod.json", {
    headers: { Accept: "application/json" },
    });
    const parsedData = await response.json();
    console.log(parsedData.contents.quotes[0].author)
    };
    return (
        <div className="main-container">
                <div className="main-contents">
                    <div className="header">
                        <h1>Login</h1>
                        <p>Please sign into your account.</p>
                    </div>
                    <form action="http://localhost:3001/login" method="POST">
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
                    <Link to="/register">
                        <p>New User? Create an Account Here</p>
                    </Link>
                </div>
            </div>
    )
};

export default Login;
