describe('template spec', () => {

  // cypress.on('ucaught:exception', (err,runnable) => {
  // returning false here prevents Cypress from
  // failing the test

  it('navigate to main page', () => {

    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.url().should('eq', 'https://www.accesstravel.com/en-US/Hotel/List')

  })

  beforeEach(() => {
    cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    cy.get('button.button').click()
  })

  it('positive test search button Jerusalem', () => {
    cy.get('[class="form-control city-select"]').type('Jerusalem')
    cy.get('[class="form-control city-select"]').select('Jerusalem') // Select the 'Jerusalem' option
    cy.get('[type="submit"]').click()
  })

  it('positive test search button London', () => {
    cy.get('[class="form-control city-select"]').type('London')
    cy.get('[class="form-control city-select"]').select('London') // Select the 'London' option
    cy.get('[type="submit"]').click()
  })

  it('positive test search button New York', () => {
    cy.get('[class="form-control city-select"]').type('New York')
    cy.get('[class="form-control city-select"]').select('New York') // Select the 'New York' option
    cy.get('[type="submit"]').click()
  })

  it('positive test numbers of Childrens', () => {
    cy.get('[data-val-required="The ChildrenNum field is required."]').clear()
    cy.get('[data-val-required="The ChildrenNum field is required."]').type('2')
    cy.get('[type="submit"]').click()
    cy.get('[id="Filter_ChildrensAge[0]"]').clear().type('10').click()
    cy.get('[id="Filter_ChildrensAge[1]"]').clear().type('12').click()


  })
})
