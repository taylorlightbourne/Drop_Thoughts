import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createClient } from "@supabase/supabase-js";
import '../components/LoginRegister.css';
import InspoCard from "./InspoCard";
import footerDesign from '../Assets/FooterDesign.png'

const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY
const url = "https://bmfrpwptdmmebjwjsfcj.supabase.co";

const supabase =  createClient(url,SUPABASE_KEY);

const Login = () => {

    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    const history = useHistory();

    useEffect(() => {
    Inspiration();
    }, []);

    const userInStorage = localStorage.getItem("supabase.auth.token");
    const parsed = JSON.parse(userInStorage);
    console.log(parsed);
    const [userFormData, setUserFormData] = useState({});
    const [signInUserFormData, setSignInUserFormData] = useState({});
    const [user, setUser] = useState(
    parsed ? parsed.currentSession?.user?.email : ""
    );
    const dispatch = useDispatch()

    const Inspiration = async () => {
    const response = await fetch("http://quotes.rest/qod.json", {
    headers: { Accept: "application/json" },
    });
    const parsedData = await response.json();
    console.log(parsedData.contents.quotes[0].author)
    setQuote(parsedData.contents.quotes[0].quote)
    setAuthor(parsedData.contents.quotes[0].author)
    };

    const signIn = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signIn({
        email: signInUserFormData.email,
        password: signInUserFormData.password,
        });
        console.log({ error });
        console.log({ user });
        console.log({ session });
        if (error) {
        alert(error.message);
        } else {
        setUser(user.email);
        history.push('/')
        }
        // localStorage.setItem("token", session.access_token);
    };
    return (
        <div className="main-container">
                <div className="main-contents">
                    <div className="header">
                        <h1 id="login">Login</h1>
                        <p id="p_notice">Please sign into your account.</p>
                    </div>
                    <br></br>
                    <form onSubmit={signIn}>
                        <div className="email__input">
                            <input type="text" name="email" id="floatingInput" onChange={(e) =>
                            setSignInUserFormData({
                            ...signInUserFormData,
                            [e.target.name]: e.target.value,
                            })
                            } required></input>
                        </div>
                        <br></br>
                        <div className="password__input">
                            <input type="password" name="password" id="floatingInput" onChange={(e) =>
                            setSignInUserFormData({
                            ...signInUserFormData,
                            [e.target.name]: e.target.value,
                            })
                            }  required></input>
                        </div>
                        <br></br>
                        <div className="submit__btn">
                            <button type="submit" id="submit__btn">Login</button>
                        </div>
                    </form>
                    <Link to="/register">
                        <p>New User? Create an Account Here</p>
                    </Link>
                    <div className="quoteAPI">
                        <InspoCard author={author} quote={quote}/>
                    </div>
                </div>
                <footer>
                    <img src={footerDesign} />
                </footer>
            </div>
    )
};

export default Login;
