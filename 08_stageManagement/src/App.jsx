import React from "react"
import Login from "./components/Login"
import ContextProvider from "./context/ContextProvider"
import Profile from "./components/Profile"

function App() {

  return (
    <>
      <ContextProvider>
        <Login />
        <Profile />
      </ContextProvider>
    </>
  )
}

export default App
