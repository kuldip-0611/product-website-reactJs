/* eslint-disable no-undef */
describe('login',()=>{
    it('allows users to login',()=>{
        cy.window().then((win)=>{
            win.localStorage.setItem('isLogin',false);
            win.localStorage.setItem('loginData',JSON.stringify([{
                email:'john@gmail.com',
                password:'U2FsdGVkX18doIGbiIglkD2ON0AAo7jwg8HasdqZoN8='
            }]))
        })
        cy.visit("http://localhost:3000/login");

        cy.get('#login_email').type('john@gmail.com');
        cy.get('#login_password').type('John@1234');

        cy.get('#loginBtn').click();

        cy.window().then((win)=>{
            win.localStorage.setItem('isLogin',true);
        });
        cy.url().should('include','/products')

        
    })
    it('not allows users to login',()=>{
        cy.window().then((win)=>{
            win.localStorage.setItem('isLogin',false);
            win.localStorage.setItem('loginData',JSON.stringify([{
                email:'john@gmail.com',
                password:'U2FsdGVkX18doIGbiIglkD2ON0AAo7jwg8HasdqZoN8='
            }]))
        })
        
        cy.visit("http://localhost:3000/login");

        cy.get('#login_email').type('john@gmail.com');
        cy.get('#login_password').type('Joh@1234');

        cy.get('#loginBtn').click();

        cy.window().then((win)=>{
            win.localStorage.setItem('isLogin',true);
        }); 
    })
})