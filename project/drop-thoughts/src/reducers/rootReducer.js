import { combineReducers } from "redux";
import Tone from "./ToneReducer";
import Respond from "./ResponseReducer";
const rootReducer = combineReducers({

Tone,
Respond
})
export default rootReducer