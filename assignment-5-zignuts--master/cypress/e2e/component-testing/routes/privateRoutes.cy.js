/* eslint-disable no-undef */
describe('private routes',()=>{
    it('not allow user to navigate product page',()=>{
        cy.visit('http://localhost:3000/products')
        cy.url().should('include', '/login')
    })


    it('allow user to access protexted routes',()=>{
        
        cy.window().then(win=>{
            win.localStorage.setItem('isLogin', true);
            win.localStorage.setItem('loginData', JSON.stringify([{
                fname: 'john',
                lname: 'doe',
                email: 'john@gmail.com',
                password: 'U2FsdGVkX18doIGbiIglkD2ON0AAo7jwg8HasdqZoN8=',
                mobile: '8520125689',
                isActive: true
            }]));

        })
        cy.visit('http://localhost:3000/products')
        cy.url().should('include', '/products')
    })
})