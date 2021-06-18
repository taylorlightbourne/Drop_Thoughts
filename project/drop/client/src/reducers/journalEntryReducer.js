import { USER_JOURNAL } from "../action-types/userJournal-action-type"
const initialstate = ""

const nameOfUser = (state = initialstate, action) => {
    switch (action.type) {
        case USER_JOURNAL:
            return (state = action.payload) //(this will have to change when user inputs data)
        default:
            return state
    }
}
export default nameOfUser
