
import React from 'react';
import { addMessage } from '../actions/MessageAction'
import { AnalyzeTone } from '../actions/ToneAction'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Emotions } from '../actions/SaveAction';

const MainPage = () => {
    const dispatch = useDispatch()
    const text = useSelector((state) => state.Tone)

    const Response = useSelector(state => state.Respond)
    console.log({Response})
    const firstCpuResp = Response[0].computer.response
    console.log("firstCpuResp",firstCpuResp)

    const [input,setInput ] = useState("")
const convo = text.length === 0 ? {} : text


        const dispatch = useDispatch()
        const text = useSelector((state) => state.Tone)
      
        const Response = useSelector(state => state.Respond)
        console.log({Response})
        const firstCpuResp = Response[0].computer.response
        console.log("firstCpuResp",firstCpuResp)
      
        const [input,setInput ] = useState("")
      const convo = text.length === 0 ? {} : text

    return (
    <div className="main-container">
        <div className="main contents">
            <div className="header">
                <h1>Drop Thoughts</h1>
            </div>
                <div className="message__box">
                    <input placeholder="How Are You Feeling Today?" name="url" onChange={(e) => setInput( e.target.value)}></input>
                </div>

                <div className="submit__btn">
                    <button  type="button" id="submit__btn" onClick={(e) => AnalyzeTone(dispatch, input)}>Submit</button>
                </div>
            <form>
                <div className="save__btn">
                    <button  type="button" id="save__btn">Save</button>
                </div>
                
            </form>
        </div>
        </div>

    )
};

export default MainPage;
