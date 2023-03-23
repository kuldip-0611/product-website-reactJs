/* eslint-disable no-undef */
describe('header access', ()=>{
    it('not access private header',()=>{
        cy.window().then(win=>{
            win.localStorage.setItem('isLogin', false);
            win.localStorage.setItem('loginData', JSON.stringify([{
                fname:'john',
                lname:'doe',
                email:'john@gmail.com',
                password:'John@1234',
                mobile:'4561237894',
                isActive:true
            }]));
        })
        cy.visit('http://localhost:3000/products');
    })
    it('access private header',()=>{
        cy.window().then(win=>{
            win.localStorage.setItem('isLogin', true);
            win.localStorage.setItem('loginData', JSON.stringify([{
                fname:'john',
                lname:'doe',
                email:'john@gmail.com',
                password:'John@1234',
                mobile:'4561237894',
                isActive:true
            }]));

        })
        cy.visit('http://localhost:3000/login');
    })
})