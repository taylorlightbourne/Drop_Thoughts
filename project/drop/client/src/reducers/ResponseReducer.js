import { Send_Back_Response } from "../action-types/ResponseType"

const intialState = [ ]

const Respond = (state = intialState, action) => {
  switch(action.type) {
    case Send_Back_Response:
      return [...state,action.payload]
      default:
        return state
  }
}

export default Respond;
