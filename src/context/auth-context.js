import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({
  isLoggedIn: false,
  loginHandler: (login) => {},
  logoutHandler: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) setIsLoggedIn(true)
    console.log(localStorage.getItem('isLoggedIn'))
  }, [])

  const loginHandler = (login) => {
    localStorage.setItem('isLoggedIn', login)
    setIsLoggedIn(true)
  }
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }
  const authState = { isLoggedIn, loginHandler, logoutHandler }

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
