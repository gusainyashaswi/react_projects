import React from 'react'
import { useState } from 'react'


function App() {

  const [num, setnum]=useState(0)
  const [string, setstring]=useState("")

  function inc(){
    if(num>=0) setstring("")
    setnum(num+1)
  }
  function dec(){
    if(num<=0) setstring("Aur Niche Kahan Jayega")
    else
    setnum(num-1)
  }


  return (
    <>
    <div>Counter {num}</div>
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
    <p>{string}</p>
    </>
  )
}

export default App