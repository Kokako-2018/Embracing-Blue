describe('Embracing Blue', function(){
   it('.should() - assert that <title> is correct', function(){
       cy.visit('http://localhost:3000/#/')
       cy.title().should('include', 'Embracing Blue')
    })

    it('should have navbar with 6 items', function(){
        cy.get('.navbar-item').siblings().should('have.length', 6)
    }) 

    // it('should have different navgation items', function(){
    //     cy.get('.navbar-item').should('contain', 'Home,OurStories, Forum,Register,Login,search')
    // })

    it('should have 3 clickables and 6 tiles', function(){
        cy.get('.column').siblings().should('have.length', 9)
    })
    
    
    it('should have footer element at the bottom', function (){
        cy.get('.footer').should('contain','Footer')
    })

    // ----- test functionality of buttons
    context('querying the functionality', function () { 

        beforeEach(function(){

            cy.visit('http://localhost:3000')
        })

        it('should click on the forum and go to forum page', function (){
            cy.contains('Forum').click()
            cy.url()
            .should('include','/#/posts')
            
        })
        it('should click on the forum and go to our stories page', function(){
            cy.contains('Our Stories').click()
            cy.url()
            .should('include','/#/ourStories')
        })
        it('should click on the register and go to register page', function(){
            cy.contains('Register').click()
            cy.url()
            .should('include','/#/register')
        })
        it('should click on the login and go to the login page', function(){
            cy.contains('Login').click()
            cy.url()
            .should('include', '/#/login')
        })
        it('should have search button', function(){
            cy.contains('search').click()
            .should('include the search results')
        })
        // it('should have yound tile and once clicked it should go to young page', function(){
        //     cy.contains('Link to/Young').click()
        //     .should('include', '/#/Young')
        // })
    
    })
       

})


