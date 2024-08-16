import React from 'react'
import CounterClick from './Counter'

describe('<CounterClick />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CounterClick />)
  })
})