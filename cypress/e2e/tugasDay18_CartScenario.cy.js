import loginPage from "../pageObject/loginPage"
import cartPage from "../pageObject/cartPage"
const inputan = require('../fixtures/tugasDay18/data.json')

describe('Login and Register Scenario', () => {
  const LoginPage = new loginPage()
  const CartPage = new cartPage()
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html')
  })
  
  it('Success Add to Cart', () => {
    LoginPage.loginUser(inputan.vld_username,inputan.vld_password)
    cy.wait(400)
    cy.contains('Samsung galaxy s6').click()
    cy.wait(400)
    cy.get('[onclick="addToCart(1)"]')
    cy.on('window:alert', (t)=>{
      expect(t).to.contains('Product added.')
    })
  })

  it('Success Place Order', () => {
    LoginPage.loginUser(inputan.vld_username,inputan.vld_password)
    CartPage.addToCart()
    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click()
    cy.wait(400)
    cy.get(CartPage.full_name).type(inputan.fullname)
    cy.get(CartPage.country).type(inputan.country)
    cy.get(CartPage.city).type(inputan.city)
    cy.get(CartPage.cred_card).type(inputan.cred_card)
    cy.get(CartPage.month).type(inputan.month)
    cy.get(CartPage.year).type(inputan.year)
    cy.get('[onclick="purchaseOrder()"]').click()
    cy.contains('Thank you for your purchase!').should('be.visible')
  })

})