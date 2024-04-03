describe('Category Specs', () => {
  beforeEach(() => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('#email').type('ameliadesipratiw@gmail.com')
    cy.get('#password').type('A')
    cy.get('.chakra-button').click()
    cy.get('h3').should('have.text', 'kasirAja')

  })
  it('added new data category', () => {

    cy.get('a[href="/categories"]').click()
    cy.get('a[href="/categories/create"]').click()
    cy.get('#nama').type('makanan')
    cy.get('#deskripsi').type('untuk kategori makanan')
    cy.get('.chakra-button').click()
    cy.get('.chakra-toast > .chakra-toast__inner').should('have.text', 'successitem ditambahkan')

  })

})