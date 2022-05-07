import Axios from 'axios'
import React, { useEffect } from 'react'
import { useSearchParams, Navigate } from "react-router-dom"

const Auth = () => {

  const [searchParams] = useSearchParams()

  useEffect(() => {
    Axios.post("http://localhost:3002/auth", {
      token: searchParams.get("token")               //"token" is the same variable_name from URL after cliking on "Log in" button in email
    }).then((response) => {
      console.log(response.data);
    })
  })


  return (
    <Navigate to="/" replace />
  )
}

export default Auth