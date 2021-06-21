import { SIGN_UP } from "../action-types/SignUpType"

const URL = "http://localhost:3001/newUser"

export const Registration = async (dispatch, username, password, email,e) => {
  console.log("signing up user")
  e.preventDefault()
  const info = await fetch("http://localhost:3001/newUser",
  {method: "POST",
  headers: {
                'Content-Type' : 'application/json',
            },
          body: JSON.stringify({username,password,email})
        }
  )
  console.log(info.json)
}
