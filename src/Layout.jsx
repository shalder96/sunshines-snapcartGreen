import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButton from './components/FAB'
import { ThemeProvider } from './contexts/theme'
import useLogin, { LoginProvider } from './contexts/loginContext'
import { ProductProvider } from './contexts/ProductContext'
import ShopContextProvider from './contexts/ShopContext'

function Layout() {

  const [themeMode, setThemeMode] = useState("light")
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [productName, setProductName] = useState("Fresh Tomatoes")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in theme
  useEffect(() => {
    const theme = document.querySelector('html');
    theme.classList.remove("light", "dark")
    theme.classList.add(themeMode)
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <LoginProvider value={{username, password, setUsername, setPassword}}>
        <ProductProvider value={{productName, setProductName}}>
          <ShopContextProvider>
            <Navbar />
            <Outlet />
            <Footer />
            <FloatingButton />
          </ShopContextProvider>
        </ProductProvider>
      </LoginProvider>
    </ThemeProvider>
  )
}

export default Layout