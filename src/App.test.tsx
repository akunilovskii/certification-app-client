import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'
import App from './App'

test('renders app name', () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  )
  const linkElement = screen.getByText('Starter App')
  expect(linkElement).toBeInTheDocument()
})
