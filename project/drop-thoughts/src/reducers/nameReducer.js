import NAME_OF_USER from "../action-type/nameOfUser-action-type"
const initialstate = ""

const nameOfUser = (state = initialstate, action) => {
    switch (action.type) {
        case NAME_OF_USER:
            return (state = action.payload) //(this will have to change with the state of User Input)
        default:
            return state
    }
}
export default nameOfUser
