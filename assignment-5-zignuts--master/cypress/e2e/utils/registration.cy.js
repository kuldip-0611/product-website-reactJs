/* eslint-disable no-undef */
describe('registration',()=>{
    it('allow user to register them self',()=>{
        cy.visit('http://localhost:3000/registration');
        cy.get('input[name="fname"]').type('john');
        cy.get('input[name="lname"]').type('dow');
        cy.get('input[name="email"]').type('envkt@example.com');
        cy.get('input[name="password"]').type('John@1234');
        cy.get('input[name="repeatpassword"]').type('John@1234');
        cy.get('input[name="mobile"]').type('5236457885');

        cy.get('button[type="submit"]').click();

        cy.url().should('include','/products');

    })
})
