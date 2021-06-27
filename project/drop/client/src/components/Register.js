import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Footer from "./Footer";
import { SUPABASE_KEY, url, supabase } from './SupabaseKey'
import './LoginRegister.css';
import logo from "../Assets/DropThoughts.png";




const Register = () => {

    const userInStorage = localStorage.getItem("supabase.auth.token");
    const parsed = JSON.parse(userInStorage);
    console.log(parsed);
    const [userFormData, setUserFormData] = useState({});
    const [signInUserFormData, setSignInUserFormData] = useState({});
    const [user, setUser] = useState(
        parsed ? parsed.currentSession?.user?.email : ""
    );
    const dispatch = useDispatch();
    const history = useHistory();

    const signUp = async (e) => {
        e.preventDefault();
        const { user, session, error } = await supabase.auth.signUp({
            username: userFormData.username,
            email: userFormData.email,
            password: userFormData.password,
        })
        if (error) {
            alert(error.message)
        } else {
            alert("Sign Up succesful")
            history.push('/')
        }
        console.log(user);
    };

    return (
        <div className="main-container">
            <div className="main-contents">
                <div className="top">
                    <img alt=""
                        src={logo} />
                        </div>
                <div className="registerHeader">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                </div>
                <br />
                <form onSubmit={signUp}>
                    <div>
                        <input placeholder="Username" type="text" name="username" id="floatingInput" onChange={(e) => setUserFormData({
                            ...userFormData,
                            [e.target.name]: e.target.value,
                        })} required></input>
                    </div>
                    <br />
                    <div>
                        <input placeholder="Password" type="password" name="password" id="floatingInput" onChange={(e) => setUserFormData({
                            ...userFormData, [e.target.name]: e.target.value,
                        })} required></input>
                    </div>
                    <br />
                    <div>
                        <input placeholder="Email" type="text" name="email" id="floatingInput" onChange={(e) =>
                            setUserFormData({
                                ...userFormData, [e.target.name]: e.target.value,
                            })} required></input>
                    </div>
                    <br />
                    <div className="submit__btn">
                        <button type="submit" id="submit__btn" >Create Account</button>
                    </div>
                </form>
                <br />
                <Link className="already" to="/login">
                    <p>Already Have an Account? Login Here</p>
                </Link>

            </div>
        </div >
    )
};
export default Register;
