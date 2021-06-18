import React, {useState} from 'react';
import { useDispatch, useSelector} from "react-redux"
import { AnalyzeTone } from '../actions/ToneAction'



const MainPage = () => {

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
        <div class="main contents">
            <div className="header">
                <h1>Drop Thoughts</h1>
            </div>
            <form>
                <div className="subject__title">
                    <input placeholder="Subject"></input>
                </div>
                <div className="message__box">
                    <input placeholder="How Are You Feeling Today?"></input>
                </div>
                <div className="submit__btn">
                    <button type="submit" id="submit__btn">Submit</button>
                </div>
                
            </form>
        </div>
        <>
        <div className="con">
          {Response.map(convo => {
            return (
          <div className="Ai">
                <>
                  <h3>
                    {convo.computer.response}
                    
                  </h3>
                </>
          </div>
            )
          })}

          <div className="Person" id="person">
              <h3>
                {text.map.length !== 0 &&text.map(messages => messages.userMessage)}
              </h3>
          </div>
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Chat" onChange={(e) => setInput( e.target.value)}/>
          <button type='submit' className="send" onClick={(e) => AnalyzeTone(dispatch, input)}>
          </button>
        </div>
      </>
    </div>
    )
};

export default MainPage;