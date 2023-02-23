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
    cy.get('[data-val-required="The ChildrenNum field is required."]').type('2').should('have.value','2')
    cy.get('[type="submit"]').click()
    cy.get('[id="Filter_ChildrensAge[0]"]').clear().type('10').click()
    cy.get('[id="Filter_ChildrensAge[1]"]').clear().type('12').click()
  })

  it('negative dates test Checkin', () => {
    cy.get('[name="Filter.CheckIn"]').clear()
    cy.get('[name="Filter.CheckIn"]').type('3103-13-33').should('have.value', '3103-13-33')

  })
  it('negative dates test Checkout', () => {
    cy.get('[name="Filter.CheckOut"]').clear()
    cy.get('[name="Filter.CheckOut"]').type('@#$%-06-14').should('have.value', '@#$%-06-14')
    cy.get('[type="submit"]').click()

  })
  it('negative Adults test', () => {
    cy.get('[class="form-control city-select"]').select('Jerusalem')
    cy.get('[id="Filter_AdultNum"]').clear().type(50).should('have.value', '50')
    cy.get('[type="submit"]').click()

  })
  it('negative Childrens test', () => {
    cy.get('[class="form-control city-select"]').select('Jerusalem')
    cy.get('[name="Filter.ChildrenNum"]').clear().type(50).should('have.value', '50')
    cy.get('[type="submit"]').click()


  })
})
