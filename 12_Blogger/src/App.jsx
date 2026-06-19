import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/Auth"
import { login, logout } from "./store/authSlice"
import { Header, Footer } from "./components"

function App() {

  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData)
        dispatch(login({userData}))
      else
        dispatch(logout())
    })

    .finally(()=>setloading(false))
  }, [dispatch])

  return !loading ? (<div className="min-h-screen flex flex-wrap content-between bg-amber-300">
    <div className="w-full block">
    <Header/>
    <main>
      <div>Hello</div>
    </main>
    <Footer/>
    </div>
  </div>
  ) : (null); 
}

export default App
