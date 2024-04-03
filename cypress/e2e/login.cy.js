describe('Login Specs', () => {
  beforeEach(() => {
    cy.visit('https://kasirdemo.belajarqa.com')
  })
  it('Should login without issues', () => {


    cy.get('#email').type('ameliadesipratiw@gmail.com')
    cy.get('#password').type('A')
    cy.get('.chakra-button').click()
    cy.get('h3').should('have.text', 'kasirAja')
  })

})

