import React from 'react'
import DisplayPage from './DisplayPage'

describe('<DisplayPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DisplayPage />)
  })
})