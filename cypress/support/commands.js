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