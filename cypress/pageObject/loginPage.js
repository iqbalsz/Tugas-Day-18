class loginPage {
    reg_username = '#sign-username'
    reg_password = '#sign-password'
    log_username = '#loginusername'
    log_password = '#loginpassword'
    
    loginUser(user,pw){
        cy.get('#login2').click()
        cy.wait(400)
        cy.get(this.log_username).type(user)
        cy.get(this.log_password).type(pw)
        cy.get('[onclick="logIn()"]').click()
        cy.get('#nameofuser').should('be.visible')
    }
}
export default loginPage