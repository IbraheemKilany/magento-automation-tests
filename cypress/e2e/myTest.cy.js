/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {

  return false
})

describe.skip('add random item from certion category', () => {
  it('add random item from Women', () => {
    cy.visit('https://magento.softwaretestingboard.com/')

    //let randomChose = ["Women", "Gear"]
    // let randomIndex = Math.floor(Math.random() * randomChose.length)
    //cy.contains(randomChose[randomIndex]).click()
    cy.get('#ui-id-4').click()
    let randomItems = Math.floor(Math.random() * 4)
    cy.get(".product-items").find(".product-item").eq(randomItems).click()
    let randomSize = Math.floor(Math.random() * 3)
    let randomColor = Math.floor(Math.random() * 3)

    cy.get(".swatch-attribute-options").find(".swatch-option").eq(randomSize).click()
    cy.get(".swatch-attribute-options.clearfix").find(".swatch-option.color").eq(randomColor).click()
    cy.get('#product-addtocart-button').click()

    cy.get('#product-addtocart-button').click()
  })
  it('add random item from Men', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#ui-id-5').click()
    let randomItems = Math.floor(Math.random() * 4)
    cy.get(".product-items").find(".product-item").eq(randomItems).click()
    let randomSize = Math.floor(Math.random() * 3)
    let randomColor = Math.floor(Math.random() * 3)

    cy.get(".swatch-attribute-options").find(".swatch-option").eq(randomSize).click()
    cy.get(".swatch-attribute-options.clearfix").find(".swatch-option.color").eq(randomColor).click()
    cy.get('#product-addtocart-button').click()

    cy.get('#product-addtocart-button').click()
  });
  it.only('add random item from Gear', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#ui-id-6').click()
    let randomItems = Math.floor(Math.random() * 4)
    cy.get(".product-items").find(".product-item").eq(randomItems).click()
    //   let randomSize = Math.floor(Math.random() * 3)
    //  let randomColor = Math.floor(Math.random() * 3)

    //   cy.get(".swatch-attribute-options").find(".swatch-option").eq(randomSize).click()
    //   cy.get(".swatch-attribute-options.clearfix").find(".swatch-option.color").eq(randomColor).click()
    cy.get('#product-addtocart-button').click()

    cy.get('#product-addtocart-button').click()
  });
})
describe.only('login Test Case', () => {
  it('to Login By Incorrect UserName&&Password', () => {
    
  cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9nZWFyLmh0bWw%2C/")
  cy.get('#email').type("kilany970@gmail.com")
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("484838738")
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
  });


});