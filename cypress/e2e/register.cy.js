describe('Register Specs', () => {
  beforeEach(() => {
    cy.visit('https://kasirdemo.belajarqa.com')
  })
  it('register new user', () => {
    cy.contains("a", "ingin mencoba, daftar ?").click()

    cy.get('#name').type('Tokoamel')
    cy.get('#email').type('ameliadesipratiw@gmail.com')
    cy.get('#password').type('A')
    cy.get('.chakra-button').click({ multiple: true })
    cy.get('li').should('have.class', 'chakra-toast').should('have.text', 'Toko berhasil didaftarkananda dapat menggunakan login sekarang')

  })

})

