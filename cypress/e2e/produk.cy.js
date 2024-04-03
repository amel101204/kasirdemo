describe('Products Specs', () => {
  beforeEach(() => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('#email').type('ameliadesipratiw@gmail.com')
    cy.get('#password').type('A')
    cy.get('.chakra-button').click()
    cy.get('h3').should('have.text', 'kasirAja')

  })
  it('added new data products', () => {

    cy.get('a[href="/products"]').click()
    cy.get('a[href="/products/create"]').click()
    cy.get('#nama').type('sosis')
    cy.get('#deskripsi').type('makanan')
    cy.get('[id="harga beli"]').type('5.000')
    cy.get('[id="harga jual"]').type('7.000')
    cy.get('#stok').type('10')
    cy.get('#kategori').click()
    cy.get('.css-u3dlpe').click()
    cy.get('.chakra-button').click()
    cy.get('.chakra-toast > .chakra-toast__inner').should('have.text', 'successitem ditambahkan')

  })

})