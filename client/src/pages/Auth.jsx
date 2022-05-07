import Axios from 'axios'
import React, { useEffect } from 'react'
import { useSearchParams, Navigate } from "react-router-dom"
import Cookies from "universal-cookie"

const Auth = () => {

  const [searchParams] = useSearchParams()
  const cookie = new Cookies()

  useEffect(() => {
    Axios
      .post("http://localhost:3002/auth", {
        token: searchParams.get("token")         //"token" is the same variable_name from URL after cliking on "Log in" button in email
      })
      .then((response) => {
        cookie.set("sessionToken", response.data)
      })
  })


  return (
    <Navigate to="/" replace />
  )
}

export default Auth