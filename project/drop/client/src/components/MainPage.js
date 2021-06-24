import React from 'react';
import { addMessage } from '../actions/messageAction'
import { AnalyzeTone } from '../actions/ToneAction'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { SUPABASE_KEY, url, supabase } from './SupabaseKey'
import { Emotions } from '../actions/SaveAction';



const MainPage = () => {
    const dispatch = useDispatch()
    const text = useSelector((state) => state.Tone)
    const Response = useSelector(state => state.Respond)
    console.log(Response)

    const [mood, setMood] = useState("")
    const [response, setResponse] = useState("")

    const SupabaseSave = async () => {
        setResponse()
        const { data, error } = await supabase
            .from('Post')
            .insert([
                { mood: mood, respond: Response[0].computer.response, ai: Response[0].bot.ai }
            ])
    };
    return (
        <div className="main-container">
            <div className="main contents">
                <div className="header">
                    <h1>Drop Thoughts</h1>
                </div>
                <div className="message__box">
                    <input placeholder="How Are You Feeling Today?" name="url" onChange={(e) => setMood(e.target.value)}></input>
                </div>

                <div className="submit__btn">
                    <button type="button" id="submit__btn" onClick={(e) => AnalyzeTone(dispatch, mood)}>Submit</button>
                </div>
                <form>
                    <div className="save__btn">
                        <button type="button" id="save__btn" onClick={(e) => SupabaseSave()}>Save</button>
                    </div>

                </form>
            </div>
        </div>

    )
};

export default MainPage;
