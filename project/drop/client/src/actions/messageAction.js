import { Get_Message } from "../action-types/MessageType"

export const addMessage = (dispatch, input) => {
  return dispatch({type: Get_Message, payload:{userMessage:input}})
}
