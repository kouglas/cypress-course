describe('Various example', ()=> {
  beforeEach(()=>{
    cy.visit('/examples')
  })
  it('multi-page testing', ()=> {
    // cy.getDataTest('nav-why-cypress').click()
    // cy.location('pathname').should('equal', "/")

    // cy.getDataTest('nav-overview').click()
    // cy.location('pathname').should('equal', "/overview")

    // cy.getDataTest('nav-fundamentals').click()
    // cy.location('pathname').should('equal', "/fundamentals")

    // cy.getDataTest('nav-forms').click()
    // cy.location('pathname').should('equal', "/forms")

    // cy.getDataTest('nav-examples').click()
    // cy.location('pathname').should('equal', "/examples")

    // cy.getDataTest('nav-components').click()
    // cy.location('pathname').should('equal', "/components")

    it.only('intercepts', ()=> {
      cy.intercept("POST", 'http://localhost:3000/examples', {
        body: {
          message: 'successfully intercepted request'
        }
      })
    })
    // cy.getDataTest('post-button').click()
  })
})