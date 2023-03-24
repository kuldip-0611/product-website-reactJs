/* eslint-disable no-undef */
describe('logout', () => {
    it('allow user to logout', () => {
        cy.window().then(win => {
            win.localStorage.setItem('isLogin', true);
            win.localStorage.setItem('loginData',JSON.stringify([{
                fname:'john',
                lname:'doe',
                email:'john@gmail.com',
                password:'U2FsdGVkX18doIGbiIglkD2ON0AAo7jwg8HasdqZoN8=',
                mobile:'5212325212',
                isActive:true
            }]))
        })
        cy.visit('http://localhost:3000/products')

        cy.get('#logout').click();
        cy.window().then(win => {
            win.localStorage.setItem('isLogin', false);
            win.localStorage.setItem('loginData',JSON.stringify([{
                fname:'john',
                lname:'doe',
                email:'john@gmail.com',
                password:'U2FsdGVkX18doIGbiIglkD2ON0AAo7jwg8HasdqZoN8=',
                mobile:'5212325212',
                isActive:false
            }]))
        })
       
        cy.url().should('include', '/login');
        
    })
})