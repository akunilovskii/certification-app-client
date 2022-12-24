import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import LoginForm from './LoginForm'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from '../store/store'
import { useDispatch, useSelector, Provider } from 'react-redux'
import Layout from './layout/Layout'
// import configureStore from 'redux-mock-store'

describe('login form tests', () => {
  const reactRedux = { useDispatch, useSelector }
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
  const renderApp = (mockStore = store) =>
    render(
      <Router>
        <Provider store={mockStore}>
          <Layout>
            <LoginForm index={0} />
          </Layout>
        </Provider>
      </Router>
    )

  afterEach(() => {
    cleanup()
  })

  test('show login form', () => {
    renderApp()
    const loginButton = screen.getByTestId('loginForm')
    expect(loginButton).toBeInTheDocument()
  })

  test('login form submit event', () => {
    renderApp()
    const loginButton = screen.getByTestId('loginForm1')
    const mockDispatch = jest.fn()
    useDispatchMock.mockReturnValue(mockDispatch)
    store.dispatch = mockDispatch

    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    fireEvent.change(emailInput, { target: { value: 'admin@mail.com' } })
    fireEvent.change(passwordInput, { target: { value: '123' } })
    expect(store.dispatch).not.toHaveBeenCalled()
    fireEvent.click(loginButton)
    expect(store.dispatch).toHaveBeenCalled()
  })

  // test('logout happens', () => {
  //   const mockStore = configureStore()
  //   const initialState = {
  //     user: { userInfo: { email: 'user@mail.com', isLoggedIn: true } },
  //   }
  //   let updatedStore = mockStore(initialState)

  //   renderApp(updatedStore)
  //   const logoutButton = screen.getByTestId('logout')
  //   const mockDispatch = jest.fn()
  //   useDispatchMock.mockReturnValue(mockDispatch)
  //   updatedStore.dispatch = mockDispatch

  //   const navigateSpy = jest.spyOn(Router, 'navigate')
  //   component.showNews()
  //   expect(navigateSpy).toHaveBeenCalledWith(['/news'])

  //   expect(updatedStore.dispatch).not.toHaveBeenCalled()
  //   fireEvent.click(logoutButton)
  //   expect(updatedStore.dispatch).toHaveBeenCalled()
  // })
})
