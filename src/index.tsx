import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AuthContextProvider } from './context/auth-context'
import { BrowserRouter as Router } from 'react-router-dom'
import { DataContextProvider } from './context/data-context'
import { store } from './store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AuthContextProvider>
          <DataContextProvider>
            <App />
          </DataContextProvider>
        </AuthContextProvider>
      </Provider>
    </Router>
  </React.StrictMode>
)
