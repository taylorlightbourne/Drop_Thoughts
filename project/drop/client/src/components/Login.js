import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SUPABASE_KEY, url, supabase } from './SupabaseKey'
import '../components/LoginRegister.css';
import InspoCard from "./InspoCard";
import Footer from './Footer';


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
    };
    return (
        <div className="main-container">
            <div className="main-contents">
                <div className="loginHeader">
                    <h1 className="head-of-page">Login</h1>
                    <p className="text">Please sign into your account.</p>
                </div>
                <br></br>
                <form onSubmit={signIn}>
                    <div className="email__input">
                        <input placeholder="Email" type="text" name="email" id="floatingInput" onChange={(e) =>
                            setSignInUserFormData({
                                ...signInUserFormData,
                                [e.target.name]: e.target.value,
                            })
                        } required></input>
                    </div>
                    <br />
                    <div className="password__input">
                        <input placeholder="Password" type="password" name="password" id="floatingInput" onChange={(e) =>
                            setSignInUserFormData({
                                ...signInUserFormData,
                                [e.target.name]: e.target.value,
                            })
                        } required></input>
                    </div>
                    <br />
                    <div className="submit__btn">
                        <button type="submit" id="submit__btn">Login</button>
                    </div>
                </form>
                <br />
                <Link className="already" to="/register">
                    <p>New User? Create an Account Here</p>
                </Link>
                <br />
                <div className="quoteAPI">
                    <InspoCard author={author} quote={quote} />
                </div>
            </div>
            <Footer />
        </div >
    )
};

export default Login;
