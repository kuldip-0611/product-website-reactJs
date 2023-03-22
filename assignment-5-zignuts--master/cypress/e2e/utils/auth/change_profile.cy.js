/* eslint-disable no-undef */

describe('change profile', ()=>{
    it('should change profile', ()=>{
        cy.window().then(win=>{
            win.localStorage.setItem('isLogin', true);
            win.localStorage.setItem('loginData',JSON.stringify([{
                fname:'john',
                lname:'doe',
                password:'U2FsdGVkX18doIGbiIglkD2ON0AAo7jwg8HasdqZoN8=',
                email:'john@gmail.com',
                mobile:'8520125689'
            }]))
        })
        cy.visit('http://localhost:3000/products');


        cy.get('#change_profile').click();

        cy.visit('http://localhost:3000/editprofile');

        cy.get('#profile_edit_fname').type('janardan');
        cy.get('#profile_edit_lname').type('dow');
        cy.get('#profile_edit_email').type('johnd@gmail.com');
        cy.get('#profile_edit_mobile').type('8520125623');

        cy.get('#change_profile_submit').click();

        
    })
})