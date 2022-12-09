import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({
  user: { isLoggedIn: false, role: '' },
  loginHandler: (login, password) => {},
  logoutHandler: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ isLoggedIn: false, role: '' })
  const users = {
    'user@mail.com': {
      role: 'user',
      password: '123',
    },
    'admin@mail.com': {
      role: 'admin',
      password: '123',
    },
  }
  useEffect(() => {
    const login = localStorage.getItem('isLoggedIn')
    if (!!login) setUser({ isLoggedIn: true, role: users[login].role })
  }, [])

  const checkUser = (login, password) => password === users[login].password

  const loginHandler = (login, password) => {
    const checkUserResult = checkUser(login, password)
    if (checkUserResult) {
      localStorage.setItem('isLoggedIn', login)
      setUser({ isLoggedIn: true, role: users[login].role })
    }
  }
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setUser({ isLoggedIn: false, role: '' })
  }

  const authState = { user, loginHandler, logoutHandler }

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
