import React from 'react';
import { addMessage } from '../actions/messageAction'
import { AnalyzeTone } from '../actions/ToneAction'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { SUPABASE_KEY, url, supabase } from './SupabaseKey'
import { Emotions } from '../actions/SaveAction';
import Navbar from './Navbar';
import "./MainPage.css";
import logo from "../Assets/DropThoughts.png";

const MainPage = () => {

    const dispatch = useDispatch()
    const history = useHistory();
    const text = useSelector((state) => state.Tone)
    const Response = useSelector(state => state.Respond)
    const [mood, setMood] = useState("")
    const [response, setResponse] = useState("")

    const Disable =  () => {
        let no = document.getElementById("noshow").disabled = true
        document.getElementById("show").addEventListener("click", enable)
        function enable() {
            let no = document.getElementById("noshow").disabled = false
            console.log('enabled')
        }
        if (document.getElementById("in") == "") {
            let show = document.getElementById("show").disabled = true
        }
    };

    useEffect(() => {
        Disable();
    }, []);


    const SupabaseSave = async () => {
        setResponse()
        const { data, error } = await supabase
            .from('Post')
            .insert([
                { mood: mood, respond: Response[0].computer.response, ai: Response[0].bot.ai }
            ])
            history.push("/journal");
    };

    return (
        <div className="container">
            <Navbar />
            <div className="content">
                <div className="top">
                    <img alt=""
                        src={logo} />
                </div>
                <div className="message__box">
                    <input placeholder="How Are You Feeling Today?" id="in" className="mood-checker" name="url" onChange={(e) => setMood(e.target.value)}></input>
                </div>
                <div className="btnsContainer">
                    <div className="main__btn">
                        <button type="button" className="btn" id="show" onClick={(e) => AnalyzeTone(dispatch, mood)}>Send</button>
                    </div>
                    <form>
                        <div className="main__btn">
                            <button type="button" className="btn" id="noshow" onClick={(e) => SupabaseSave()}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >

    )
};

export default MainPage;
