  
import { Send_Back_Response } from "../action-type/ResponseType"

const intialState = [{computer:{response:"How you feeling my boy?"}}]

const Respond = (state = intialState, action) => {
  switch(action.type) {
    case Send_Back_Response:
      return [...state,action.payload]
      default:
        return state
  }
}

export default Respond;