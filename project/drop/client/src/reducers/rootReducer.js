import { combineReducers } from "redux";
import nameOfUser from "./nameReducer";
import Tone from './ToneReducer'
import Respond from "./ResponseReducer"

const rootReducer = combineReducers({
    Tone,
    Respond,
    nameOfUser
})
export default rootReducer
