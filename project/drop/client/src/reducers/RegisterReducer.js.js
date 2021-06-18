import { SIGN_UP } from '../action-types/SignUpType'

const intialState = []

const Registration = (state = intialState, action) => {
  switch(action.type) {
    case SIGN_UP:
      return [...state,action.payload]
      default:
        return state
  }
}

export default Registration;
