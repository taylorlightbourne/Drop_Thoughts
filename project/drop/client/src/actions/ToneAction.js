
import { Get_Tone } from "../action-types/ToneType"
import { Get_Message } from "../action-types/MessageType"
import { Send_Back_Response } from '../action-types/ResponseType'

const API_KEY = process.env.REACT_APP_API_KEY

let response = ""
let ai = ""

export const AnalyzeTone = async (dispatch, payload) => {
  

  const URL = `https://api.us-east.tone-analyzer.watson.cloud.ibm.com/instances/8ef3ba6c-91c0-43bf-937f-d80ba8fa9d90/v3/tone?version=2017-09-21&text=${payload}`

  const analyze = await fetch(URL, {
    method: "get",
    mode: "cors",
    headers: {
      "Accept": "application/json",
      "Content-Type": "text/plain",
      "Authorization": `Basic YXBpa2V5OkkxMlBWa24yMVBnMnRjN1NIWnZfeEpfY3pYQ19maUNscDQyeEJWTGdUVldH`
    }
  });
  const results = await analyze.json();
  // console.log(results)
  let response = results.document_tone.tones[0].tone_name
  console.log(response)

  if (response === "Sadness") {
    ai = "I'm sorry to hear that your sad 😢 hopefully you feel better soon my boy"
  } else if (response === "Joy") {
    ai = "Glad to see you happy Queen 😉"
  } else if (response === "Anger") {
    ai = "WOAH calm down my boy how about taking a walk or admiring the guy who made this site 😎"
  } else if (response === "Fear") {
    ai = "Everyone gets afraid just don't let it consume you and stay strong my boy 🙌"
  } else if (response === "Confident") {
    ai = "Oh you feeling it like that ya love to see it 🧐"
  } else if (response === []) {
    ai = "Cmon give me some emotion my boy"
  } else {
    ai = "Hmmm a interesting response 🤨"
  }
  console.log(Response)
  dispatch({ type: Send_Back_Response, payload: { computer: { response }, bot: { ai } } })
  dispatch({ type: Get_Message, payload: { userMessage: payload } })
};
