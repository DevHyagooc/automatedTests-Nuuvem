Cypress.Commands.add('gui_acessarPaginaHeader', (headerMenu, nameLi) => {
  cy.get(headerMenu)
    .should('exist')
    .trigger('mouseover')

  cy.get('li')
    .contains(nameLi)
    .should('be.visible')
    .click()
});

Cypress.Commands.add('gui_acessarNovaAbaHeader', (headerMenu, nameLi) => {
  cy.get(headerMenu)
    .should('exist')
    .trigger('mouseover')

  cy.get('li')
    .contains(nameLi)
    .should('be.visible')
    .invoke('removeAttr', 'target')
    .click()
});

Cypress.Commands.add('gui_acessarRedeSocial', (title) => {
  cy.get(`a[title="${title}"]`)
    .should('exist')
    .invoke('removeAttr', 'target')
    .click()
});

Cypress.Commands.add('gui_acessarPaginaFooter', (title) => {
  cy.get(`nav.footer__list`)
    .contains(title)
    .should('exist')
    .click()
});

Cypress.Commands.add('gui_acessarNovaAbaFooter', (title) => {
  cy.get(`nav.footer__list`)
    .contains(title)
    .should('exist')
    .invoke('removeAttr', 'target')
    .click()
});

Cypress.Commands.add('gui_buscarProduto', (produto) => {
  cy.get('.header-search--large > .header-search-wrapper--retracted input[type=search][placeholder=Buscar]')
    .should('exist')
    .type(`${produto}{enter}`)
});

Cypress.Commands.add('gui_adicionarCarrinho', () => {
  cy.get('.product-section.product-section--buy.hide-down-m')
    .should('be.visible')
    .within(() => {
      cy.wait(2000)
      cy.get('button[title="Comprar"]')
        .should('be.visible')
        .click()
    })
});

Cypress.Commands.add('gui_removerCarrinho', () => {
  cy.get('.btn--lg')
    .should('be.visible')
    .click()
  cy.get('.header-cart-nav--foot > .btn')
    .should('be.visible')
    .click()
  cy.origin('https://secure.nuuvem.com', () => {
    cy.get('.product-card--wrapper-col')
      .contains('Alan Wake 2')
      .should('exist')
    cy.get('.icon.icon-delete.icon-normal')
      .click()
  })

});

Cypress.Commands.add('gui_mudarLinguagem', (language) => {
  cy.get('.store-icon.store-icon-forum')
    .should('exist')
    .click()
  cy.get('li')
    .contains(language)
    .should('exist')
    .click()
});