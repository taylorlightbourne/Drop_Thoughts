import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import footerDesign from '../Assets/FooterDesign.png'
import { SUPABASE_KEY, url, supabase } from './SupabaseKey'
import './LoginRegister.css';




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
                <div className="header">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                </div>
                <form onSubmit={signUp}>
                    <div>
                        <label><b>Username: </b></label>
                        <input type="text" name="username" id="floatingInput" onChange={(e) => setUserFormData({
                            ...userFormData,
                            [e.target.name]: e.target.value,
                        })} required></input>
                    </div>
                    <div>
                        <label><b>Password: </b></label>
                        <input type="password" name="password" id="floatingInput" onChange={(e) => setUserFormData({
                            ...userFormData, [e.target.name]: e.target.value,
                        })} required></input>
                    </div>
                    <div>
                        <label><b>Email: </b></label>
                        <input type="text" name="email" id="floatingInput" onChange={(e) =>
                            setUserFormData({
                                ...userFormData, [e.target.name]: e.target.value,
                            })} required></input>
                    </div>
                    <div className="submit__btn">
                        <button type="submit" id="submit__btn" >Create Account</button>
                    </div>
                </form>
                <Link to="/login">
                    <p>Already Have an Account? Login Here</p>
                </Link>

            </div>
            <footer>
                <img src={footerDesign} />
            </footer>
        </div>
    )
};
export default Register;
