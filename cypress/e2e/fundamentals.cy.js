describe('fundamentals test', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals')
  })
  it('Contains correct header text', () => {
    // left off at 45min
    // cy.visit('/fundamentals')
    // getting the data-test attribute, then chaining an assertion with should 
    // that passes 'contain.text as its first argument and the text we're looking
    // for in the second argument
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
    // cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
  })
  it('Accordion works correctly ', () => {
    // cy.visit('/fundamentals')
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role=button]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role=button]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')

  })
})