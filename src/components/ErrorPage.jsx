import { useRouteError } from "react-router-dom";

import React from 'react'

function ErrorPage() {

    const errorMsg = useRouteError()
    console.log(errorMsg)
  return (
    <div>
      <h1>{errorMsg.status} {errorMsg.statusText}</h1>
    </div>
  )
}

export default ErrorPage
