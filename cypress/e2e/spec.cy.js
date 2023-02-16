describe('template spec', () => {

// cypress.on('ucaught:exception', (err,runnable) => {
// returning false here prevents Cypress from
// failing the test

it('navigate to main page', () => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    cy.url().should('eq', 'https://www.accesstravel.com/en-US/Home/Index')
  })

  beforeEach(() => {
    cy.visit('https://www.accesstravel.com/en-US/Home/Index')

  })

    it('main page sanity test button Hotel', () => {
      // cy.visit('https://www.accesstravel.com/en-US/Home/Index')
      cy.get('[class="hotels"]').should("be.visible")     
      cy.get('[class="hotels"]').click()

    })

    it('main page sanity test button Guides', () => {
      cy.get('[class="guides js-list-guides"]').should("be.visible")
      cy.get('[class="guides js-list-guides"]').click()
    })

    it('main page sanity test button Tours', () => {
      cy.get('[class="tours js-list-tours"]').should("be.visible")
      cy.get('[class="tours js-list-tours"]').click()

    })

    it('main page sanity test button Things to do', () => {
cy.get('[class="tours attraction-link"]').should("be.visible")
cy.get('[class="tours attraction-link"]').click()


     



    
  })
})