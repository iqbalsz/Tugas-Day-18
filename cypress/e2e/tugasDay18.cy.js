import loginPage from "../pageObject/loginPage"
const inputan = require('../fixtures/tugasDay18/data.json')

describe('Login and Register Scenario', () => {
  const LoginPage = new loginPage()
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html')
  })
  
  it('Success Register', () => {
    cy.get('#signin2').click() // klik menu header Sign Up
    cy.wait(400) // menunggu menu keluar
    cy.get(LoginPage.reg_username).type(inputan.vld_username) // input uname
    cy.get(LoginPage.reg_password).type(inputan.vld_password) // input password
    cy.get('[onclick="register()"]').click() // klik tombol register
  })

  it('Failed Register - User Already Exist', () => {
    cy.get('#signin2').click() // klik menu header Sign Up
    cy.wait(400) // menunggu menu keluar
    cy.get(LoginPage.reg_username).type(inputan.vld_username) // input uname
    cy.get(LoginPage.reg_password).type(inputan.vld_password) // input password
    cy.get('[onclick="register()"]').click() // klik tombol register
    cy.on('window:alert', (t)=>{
      expect(t).to.contains('This user already exist.')
    })
  })

  it('Success Login', () => {
    cy.get('#login2').click()
    cy.wait(400)
    cy.get(LoginPage.log_username).type(inputan.vld_username)
    cy.get(LoginPage.log_password).type(inputan.vld_password)
    cy.get('[onclick="logIn()"]').click()
    cy.get('#nameofuser').should('be.visible')
  })

  it('Failed Login - Wrong Password', () => {
    cy.get('#login2').click()
    cy.wait(400)
    cy.get(LoginPage.log_username).type(inputan.vld_username)
    cy.get(LoginPage.log_password).type('wewew')
    cy.get('[onclick="logIn()"]').click()
    cy.on('window:alert', (t)=>{
      expect(t).to.contains('Wrong password.')
    })
  })
})