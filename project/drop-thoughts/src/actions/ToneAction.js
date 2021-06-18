import { Get_Message } from "../action-type/MessageType"
import { Send_Back_Response } from '../action-type/ResponseType'

let response = ""

export const AnalyzeTone = async (dispatch, payload) => {
  const message = document.querySelector("#person")
  message.style.display = "block"

  const URL = `https://api.us-east.tone-analyzer.watson.cloud.ibm.com/instances/8ef3ba6c-91c0-43bf-937f-d80ba8fa9d90/v3/tone?version=2017-09-21&text=${payload}`

  const analyze = await fetch(URL,{method: "get",
  mode: "cors",
    headers: {
      "Accept": "application/json",
      "Content-Type": "text/plain",
      "Authorization": `Basic ${process.env.REACT_APP_TONE_KEY}`
    }
  });
  const results = await analyze.json();
  console.log(results)
  let mood = results.document_tone.tones[0].tone_name
  console.log(mood)

  response=mood

dispatch({type: Send_Back_Response, payload: {computer:{response}}})
dispatch({type: Get_Message, payload:{userMessage:payload}})
};