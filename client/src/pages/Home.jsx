import Axios from 'axios'
import React from 'react'
import Cookies from 'universal-cookie'

function Home() {

  const cookie = new Cookies()
  const testApi = () => {
    Axios
      .post("http://localhost:3002/test", {}, { headers: { sessiontoken: cookie.get("sessionToken").session_token } })
      .then((resp) => {
        alert(resp.data)
      })
      .catch((err) => {
        //alert(err.message)
        alert("User NOT authenticated !")
      })
  }


  return (
    <div className="homeContainer">
      <button onClick={testApi}>TestAPI</button>
    </div>
  )
}

export default Home