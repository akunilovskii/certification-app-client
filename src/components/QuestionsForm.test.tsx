import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import { store } from '../store/store'
import QuestionsForm from './QuestionsForm'
import { Provider } from 'react-redux'

describe('login form tests', () => {
  afterEach(() => cleanup())

  test('show modal window', () => {
    render(
      <Provider store={store}>
        <QuestionsForm />
      </Provider>
    )
    const button = screen.getByTestId('openButton0')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    const saveButton = screen.getByText('Add answer')
    expect(saveButton).toBeInTheDocument()
  })

  test('show  window', () => {
    render(
      <Provider store={store}>
        <QuestionsForm />
      </Provider>
    )
    const button = screen.getByTestId('openButton0')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    const saveButton = screen.getByText('Add answer')
    expect(saveButton).toBeInTheDocument()
  })
})
