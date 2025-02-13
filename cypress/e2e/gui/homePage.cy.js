describe('Página Principal', () => {
  beforeEach(() => {
    cy.visit('/')
  })
it('Acessar Página Principal', () => {
  cy.url()
    .should('be.equal', 'https://www.riotgames.com/pt-br')
 })
})