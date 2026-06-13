import react, { useState } from 'react'
import { useEffect } from 'react'
import { ContextProvider } from "./context/UserContext"
import ThemeButton from "./components/ThemeButton"
import Card from "./components/Card"
function App() {

  const [themeMode, setThemeMode] = useState("light")

   const darkMode = () => {
    setThemeMode("dark")
   }

   const lightMode = () => {
    setThemeMode("light")
   }

   useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)
   },[themeMode])

  return (
    <>
    <ContextProvider value={{themeMode, darkMode, lightMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeButton/>
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card/>
              </div>
          </div>
      </div>
      </ContextProvider>
    </>
  )
}

export default App
