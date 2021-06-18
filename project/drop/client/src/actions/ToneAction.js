import { Get_Tone } from "../action-types/ToneType"
import { Get_Message } from "../action-types/MessageType"
import { Send_Back_Response } from '../action-types/ResponseTypes'

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

  if (mood === "Sadness") {
    response = "I'm sorry to hear that your sad 😢 hopefully you feel better soon my boy"
  } else if (mood === "Joy") {
    response = "Glad to see you happy Queen 😉"
  } else if (mood === "Anger") {
    response = "WOAH calm down my boy how about taking a walk or admiring the guy who made this site 😎"
  } else if (mood === "Fear") {
    response = "Everyone gets afraid just don't let it consume you and stay strong my boy 🙌"
  } else if (mood === "Confident") {
    response = "Oh you feeling it like that ya love to see it 🧐"
  } else if (mood === []) {
    response = "Cmon give me some emotion my boy"
  } else {
    response = "Hmmm a interesting response 🤨"
  }
dispatch({type: Send_Back_Response, payload: {computer:{response}}})
dispatch({type: Get_Message, payload:{userMessage:payload}})
};
