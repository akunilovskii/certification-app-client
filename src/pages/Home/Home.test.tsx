import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'

test('renders text on the Home page', () => {
  render(<Home />)
  const linkElement = screen.getByText('Home')
  expect(linkElement).toBeInTheDocument()
})
