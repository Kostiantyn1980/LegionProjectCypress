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
    cy.get('[class="form-control city-select"]').type('Jerusalem').should("be.visible")
    cy.get('[class="form-control city-select"]').select('Jerusalem') // Select the 'Jerusalem' option
    cy.get('[type="submit"]').click()

  })
  it('positive test search button London', () => {
    cy.get('[class="form-control city-select"]').type('London').should("be.visible")
    cy.get('[class="form-control city-select"]').select('London') // Select the 'London' option
    cy.get('[type="submit"]').click()

  })
  it('positive test search button New York', () => {
    cy.get('[class="form-control city-select"]').type('New York').should("be.visible")
    cy.get('[class="form-control city-select"]').select('New York') // Select the 'New York' option
    cy.get('[type="submit"]').click()

  })
  it('positive test numbers of Childrens', () => {
    cy.get('[data-val-required="The ChildrenNum field is required."]').clear()
    cy.get('[data-val-required="The ChildrenNum field is required."]').type('2').should('have.value','2')
    cy.get('[type="submit"]').click()
    cy.get('[id="Filter_ChildrensAge[0]"]').clear().type('10').click().should('have.value','10')
    cy.get('[id="Filter_ChildrensAge[1]"]').clear().type('12').click().should('have.value','12')
  })

  it('negative dates test Checkin', () => {
    cy.get('[name="Filter.CheckIn"]').clear()
    cy.get('[name="Filter.CheckIn"]').type('-201-13-33').should('have.value', '-201-13-33')

  })
  it('negative dates test Checkout', () => {
    cy.get('[name="Filter.CheckOut"]').clear()
    cy.get('[name="Filter.CheckOut"]').type('14-2001-21').should('have.value', '14-2001-21')
    cy.get('[type="submit"]').click()

  })
  it('negative Adults test', () => {
    cy.get('[class="form-control city-select"]').select('Jerusalem')
    cy.get('[id="Filter_AdultNum"]').clear().type(-5).should('have.value', '-5')
    cy.get('[type="submit"]').click()

  })
  it('negative Childrens test', () => {
    cy.get('[class="form-control city-select"]').select('Jerusalem')
    cy.get('[name="Filter.ChildrenNum"]').clear().type(-2).should('have.value', '-2')
    cy.get('[type="submit"]').click()


  })
})
