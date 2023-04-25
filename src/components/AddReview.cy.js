import React from 'react'
import AddReview from './AddReview'

describe('<AddReview />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddReview />)
  })
})