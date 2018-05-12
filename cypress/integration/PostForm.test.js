describe('my first test', function(){
    it('does not do much', function(){
        expect(true).to.equal(true)
    })
})
describe('testing the PostForm                                                                           ', function(){
    it('visits the localhost3000', function(){
        cy.visit('http://localhost:3000/#/')
        cy.get('h1').should('contain', 'Embracing Blue')
        cy.contains('Forum').click()
        cy.url()
        .should('include','/#/posts')
        .get('h1').should('contain','Add your story')
        .get('label').should('contain','Title of Post')
        .get('label').should('contain','Content')
        
    })

    it('contains correct input fields for posts', function(){
        cy.visit('http://localhost:3000/#/posts')
        cy.get('textarea').first()
    })
})

 
// describe('it gets the header', function(){
//     it('will look for Embracing blue', function(){
//         cy.get('h1').should('contain', 'Embracing Blue')
//     })
// })
