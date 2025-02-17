describe('Funções que envolvem o produto', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.store-button')
      .click()
    cy.intercept('https://www.youtube.com/**', { body: '' });
  })

  it('Buscando um produto', () => {
    const produto = 'Alan Wake 2'

    cy.gui_buscarProduto(produto)
    cy.get('.grid-col-6.grid-col-sm-4.grid-col-md-4.grid-col-lg-3')
      .should('contain', `${produto}`)
  })

  it('Colocando um produto no carrinho', () => {
    cy.visit('https://www.nuuvem.com/br-pt/item/alan-wake-2')

    cy.gui_adicionarCarrinho()
    cy.get('button[title="No carrinho"]', { timeout: 10000 })
      .should('exist')
  })

  it('Retirando um produto do carrinho', () => {
    cy.visit('https://www.nuuvem.com/br-pt/item/alan-wake-2')

    cy.gui_adicionarCarrinho()
    cy.get('button[title="No carrinho"]', { timeout: 10000 })
      .should('exist')
    cy.gui_removerCarrinho()
    cy.origin('https://secure.nuuvem.com', () => {
      cy.get('section.cart-products--empty.box')
        .should('contain', 'Não há itens no seu carrinho :(')
    })
  })
})