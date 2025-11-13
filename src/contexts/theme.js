import { createContext, useContext} from "react";

//create context with default values
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
})

//theme provider
export const ThemeProvider = ThemeContext.Provider

//created useTheme Hook
export default function useTheme() {
  return useContext(ThemeContext)
}