/* eslint-disable no-undef */
describe('login',()=>{
    it('should login',()=>{
        cy.visit('http://localhost:3000/registration');
        cy.get('input[name="fname"]').type('john');
        cy.get('input[name="lname"]').type('dow');
        cy.get('input[name="email"]').type('envkt@example.com');
        cy.get('input[name="password"]').type('John@1234');
        cy.get('input[name="repeatpassword"]').type('John@1234');
        cy.get('input[name="mobile"]').type('5236457885');

        cy.get('button[type="submit"]').click();
        cy.url().should("include", "/products");

        cy.get('#logout').click();

        //go to login page
        cy.visit('http://localhost:3000/login');

        /* Typing the email and password in the input fields. */
        cy.get('#email').type('envkt@example.com');
        cy.get('#password').type('John@1234');

        cy.get('button[type="submit"]').click();

        /* Checking if the url contains the string '/products'. */
        cy.url().should('include','/products');

    })

    it('show error message with invalid credentials',()=>{
        cy.visit('http://localhost:3000/registration');
        cy.get('input[name="fname"]').type('john');
        cy.get('input[name="lname"]').type('dow');
        cy.get('input[name="email"]').type('envkt@example.com');
        cy.get('input[name="password"]').type('John@1234');
        cy.get('input[name="repeatpassword"]').type('John@1234');
        cy.get('input[name="mobile"]').type('5236457885');

        cy.get('button[type="submit"]').click();
        cy.url().should("include", "/products");

        cy.get('#logout').click();

       /* Visiting the login page. */
        cy.visit('http://localhost:3000/login');

        /* Typing the email and password in the input which is wrong . */
        cy.get('#email').type('envkt@example.com');
        cy.get('#password').type('John@12345');

        cy.get('button[type="submit"]').click();

        //check error message 
    })
})