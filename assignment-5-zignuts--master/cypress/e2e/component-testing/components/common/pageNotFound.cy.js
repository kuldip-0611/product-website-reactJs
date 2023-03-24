/* eslint-disable no-undef */
describe('page not found',()=>{
    it('show error page to user ',()=>{
        cy.window().then(win=>{
            win.localStorage.setItem('isLogin',true);
            win.localStorage.setItem('loginData',JSON.stringify([{
                fname:'john',
                lname:'doe',
                email:'john@gmail.com',
                password:'U2FsdGVkX18doIGbiIglkD2ON0AAo7jwg8HasdqZoN8=',
                mobile:'8520125689',
                isActive:true
            }]));

            cy.visit('http://localhost:3000/xyz');

            cy.get('#home').click();

            cy.visit('http://localhost:3000/products');

        })

    })
})