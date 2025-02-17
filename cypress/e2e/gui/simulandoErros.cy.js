describe('Simulação de erros', () => {
 beforeEach(() => {
  cy.visit('/')
  cy.get('.store-button')
   .click()
 })

 it('Buscando um produto inexistente', () => {
  const produto = 'agua mole em pedra dura tanto bate até que fura'
  const msgErro = 'Poxa! Não encontramos o resultado para sua busca :('
  
  cy.gui_buscarProduto(produto)
  cy.get('.products-items')
    .should('contain', `${msgErro}`)
 })

})