import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({
  isLoggedIn: false,
  loginHandler: (login, password) => {},
  logoutHandler: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const users = {
    'mike@mail.com': '123',
    'alex@mail.com': '123',
  }
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) setIsLoggedIn(true)
  }, [])

  const checkUser = (login, password) => {
    return password === users[login]
  }

  const loginHandler = (login, password) => {
    const checkUserResult = checkUser(login, password)
    if (checkUserResult) {
      localStorage.setItem('isLoggedIn', login)
      setIsLoggedIn(true)
    }
  }
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  const authState = { isLoggedIn, users, loginHandler, logoutHandler }

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
