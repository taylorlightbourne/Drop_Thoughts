import { Get_Tone } from '../action-types/ToneType'
import { Get_Message } from "../action-types/MessageType"
import { Send_Back_Response } from "../action-types/ResponseType"
import { AnalyzeTone } from '../actions/ToneAction'

const intialState = [{}]

const Tone = (state = intialState, action) => {
  switch(action.type) {
    case Get_Message:
      return [...state,action.payload]
    case AnalyzeTone:
      return [...state,action.payload]
      case Send_Back_Response:
      return [...state,action.payload]
      default:
        return state
  }
}

export default Tone;
