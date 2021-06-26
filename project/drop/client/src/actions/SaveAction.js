
const URL = "http://localhost:3001/newMood"

export const Emotions = async (dispatch, url, response, created_at,e) => {
  console.log("sent to posts db ")
  e.preventDefault()
  const info = await fetch("http://localhost:3001/newMood",
  {method: "POST",
  headers: {
                'Content-Type' : 'application/json',
            },
          body: JSON.stringify({url,response,created_at})
        }
  )
}
