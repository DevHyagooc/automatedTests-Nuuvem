describe('Quem Somos', () => {
 beforeEach(() => {
  cy.visit('https://www.riotgames.com/pt-br/trabalhe-conosco')
 })
 it('Acessar página Quem Somos', () => {
  cy.url()
   .should('be.equal', 'https://www.riotgames.com/pt-br/trabalhe-conosco')
 })
})