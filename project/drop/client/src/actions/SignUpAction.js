import { SIGN_UP } from "../action-types/SignUpType"

const URL = "/newUser"

export const Registration = async (dispatch, username, password, email) => {
  const info = await fetch(URL,{method: "POST",
  headers: {
                'Content-Type' : 'application/json',
            }}
  )
  console.log(info)
}
