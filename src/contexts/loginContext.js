import { createContext, useContext } from "react";



export const loginContext = createContext({ 
  username: "",
  setUsername: () => {},
  password: "",
  setPassword: () => {},

})

export const LoginProvider = loginContext.Provider

// 3. Custom hook for context usage
export default function useLogin() {
  return useContext(loginContext);
}


