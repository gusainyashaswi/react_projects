import {useContext, createContext} from "react"

export const UserContext = createContext({
    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {}
})

export const ContextProvider = UserContext.Provider

export default function useTheme() {
    return useContext(UserContext)
}