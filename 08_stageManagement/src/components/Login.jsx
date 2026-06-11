import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [name, setname] = useState("")
  const [password, setpassword] = useState("")

  const {setuser} = useContext(UserContext)

  function handleSubmit(e){
    e.preventDefault()
    setuser({name, password})
  }


  return (
    <div className='flex justify-center items-center text-center flex-col gap-4 w-screen h-screen'>
      <div className='border-4 flex justify-center items-center text-center flex-col gap-4 p-10 text-4xl'>
        <h1 className='underline text-6xl hover:text-amber-400'>Login</h1>
        <input className='shadow-2xl p-3 border-4 rounded-2xl hover:bg-amber-400' type="text" placeholder='username' value={name} onChange={(e)=> setname(e.target.value)} />
        <input className='shadow-2xl p-3 border-4 rounded-2xl hover:bg-amber-400' type="password" placeholder='password' value={password} onChange={(e)=> setpassword(e.target.value)}/>
        {/* <input className='p-3 border-4 rounded-2xl hover:bg-amber-400' type="date" /> */}
        <button className='p-3 border rounded-2xl shadow-2xl cursor-pointer hover:bg-green-400' type='submit' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login