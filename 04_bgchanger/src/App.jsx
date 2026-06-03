import { useState } from "react"


function App() {

  const [bg, setbg]=useState('white')

  return(
    <>
    <div className={`flex flex-wrap justify-center items-center h-screen ${bg}`}>
    <div className={`flex flex-wrap justify-center items-center min-h-1 min-w-auto gap-1 bg-yellow-100 rounded-4xl p-2`} >
      <button className="flex outline-none pl-10 pr-10 pt-5 pb-5 m-5 bg-red-600 rounded-2xl text-white cursor-pointer" onClick={()=>{
        setbg("bg-red-600")
      }}>Red</button>
      <button className="flex outline-none pl-10 pr-10 pt-5 pb-5 m-5 bg-green-600 rounded-2xl text-white cursor-pointer" onClick={()=>{
        setbg("bg-green-600")}}
        >Green</button>
      <button className="flex outline-none pl-10 pr-10 pt-5 pb-5 m-5 bg-blue-700 rounded-2xl text-white cursor-pointer" onClick={()=>{
        setbg("bg-blue-700")
      }}>Blue</button>
      <button className="flex outline-none pl-10 pr-10 pt-5 pb-5 m-5 bg-yellow-300 rounded-2xl text-white cursor-pointer" onClick={()=>{
        setbg("bg-yellow-300")
      }}>Yellow</button>
      <button className="flex outline-none pl-10 pr-10 pt-5 pb-5 m-5 bg-black rounded-2xl text-white cursor-pointer" onClick={()=>{
        setbg("bg-black")
      }}>Black</button>
      <button className="flex outline-none pl-10 pr-10 pt-5 pb-5 m-5 bg-orange-600 rounded-2xl text-white cursor-pointer" onClick={()=>{
        setbg("bg-orange-600")
      }}>Orange</button>
      <button className="flex outline-none pl-10 pr-10 pt-5 pb-5 m-5 bg-teal-600 rounded-2xl text-white cursor-pointer" onClick={()=>{
        setbg("bg-teal-600")
      }}>Teal</button>
      <button className="flex outline-none pl-10 pr-10 pt-5 pb-5 m-5 bg-pink-600 rounded-2xl text-white cursor-pointer" onClick={()=>{
        setbg("bg-pink-600")
      }}>Pink</button>
      <button className="flex outline-none pl-10 pr-10 pt-5 pb-5 m-5 bg-purple-600 rounded-2xl text-white cursor-pointer" onClick={()=>{
        setbg("bg-purple-600")
      }}>Purple</button>
    </div>
    </div>

    </>
  )
}

export default App
