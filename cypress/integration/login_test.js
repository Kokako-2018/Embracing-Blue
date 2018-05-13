describe('Embracing Blue login form elements are present', function(){
    it('should have login form', function(){
        cy.visit('http://localhost:3000/#/login')
       
     })
     it('should have navbar with 6 items', function(){
        cy.get('.navbar-item').siblings().should('have.length', 6)
    }) 
    
    it('should have User Name input field', function(){
        cy.get('.form').find('#username')
                .should('have.length', 1)
                .should('have.attr', 'placeholder', 'User Name')
    })

    it('should have Password input field', function(){
        cy.get('input[type=password]')
                .should('have.length', 1)
                .should('have.attr', 'placeholder', 'Password')
    })
    
})

describe('Login form validation tests', function(){

    it('User name is required')

    it('password is required')
})

describe('Login form works correctly', function() {
    
    it('Login form works when username and password is correct', function() {
        cy.visit('http://localhost:3000/#/login')
        cy.get('.form').find('#username').type("priya")
        cy.get('input[type=password]').type('1234')
        cy.get('input[type=submit]').click()
        
        cy.location('pathname').should('eq', '/')
        cy.get('.navbar-item').siblings().should('contain', 'Login')

        cy.visit('http://localhost:3000/#/')
        cy.get('.navbar-item').siblings().should('contain', 'Logout')
        
    })

})