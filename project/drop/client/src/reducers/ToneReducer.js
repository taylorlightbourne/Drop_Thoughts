import { Get_Tone } from '../action-type/ToneType'
import { Get_Message } from "../action-type/MessageType"
import { Send_Back_Response } from "../action-type/ResponseType"


const intialState = [{computer:[{response: "How you feeling my boy"}]}, {user:[{response: "I am so sad"}]}]

const Tone = (state = intialState, action) => {
  switch(action.type) {
    case Get_Message:
      return [...state,action.payload]
    case Get_Tone:
      return (state)
      case Send_Back_Response:
      return [...state,action.payload]
      default:
        return state
  }
}

export default Tone;