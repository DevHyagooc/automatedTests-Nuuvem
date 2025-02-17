describe('Linguagem de Interface', () => {
 beforeEach(() => {
   cy.visit('/')
   cy.get('.store-button')
     .click()
 })

 it('Mudando interface para inglês', () => {
   const language = 'English'

   cy.gui_mudarLinguagem(language)
   cy.url()
    .should('be.equal', 'https://www.nuuvem.com/br-en/')
 })

 it('Mudando interface para português', () => {
   const language = 'Português'

   cy.gui_mudarLinguagem(language)
   cy.url()
    .should('be.equal', 'https://www.nuuvem.com/br-pt/')
 })

 it('Mudando interface para espanhol', () => {
   const language = 'Español'

   cy.gui_mudarLinguagem(language)
   cy.url()
    .should('be.equal', 'https://www.nuuvem.com/br-es/')
 })

})