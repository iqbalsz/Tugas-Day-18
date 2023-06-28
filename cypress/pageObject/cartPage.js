class cartPage {
    full_name = '#name'
    country = '#country'
    city = '#city'
    cred_card = '#card'
    month = '#month'
    year = '#year'
    
    addToCart(){
        cy.wait(400)
        cy.contains('Samsung galaxy s6').click()
        cy.wait(400)
        cy.get('[onclick="addToCart(1)"]')
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('Product added.')
        })
    }
}
export default cartPage