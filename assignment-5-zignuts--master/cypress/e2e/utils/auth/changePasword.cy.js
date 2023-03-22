/* eslint-disable no-undef */
describe('change password', () => {
    it('allow user to change password', () => {
        /* This is setting the local storage of the browser. */
        cy.window().then(win => {
            win.localStorage.setItem('isLogin', true);
            win.localStorage.setItem('loginData',JSON.stringify([{
                fname:"john",
                lname:"dow",
                email:"john@gmail.com",
                password:'U2FsdGVkX18doIGbiIglkD2ON0AAo7jwg8HasdqZoN8=',
                mobile:"9925736905",
                isActive:true,
            }]) 
            );
        }


        )
        /* The above code is changing the password of the user. */
        cy.visit('http://localhost:3000/products');
        cy.get('#change_password').click();
        cy.get('#current_password').type('John@1234');
        cy.get('#edit_password').type('Johnd@1234');
        cy.get('#confirm_edit_password').type('Johnd@1234');

        cy.get('#change_password_btn').click();

        

    })

  
    it('not allow user to change password', ()=>{
        cy.window().then((win)=>{
            win.localStorage.setItem('isLogin', true);
            win.localStorage.setItem('loginData',JSON.stringify([{
                fname:"john",
                lname:"dow",
                email:"john@gmail.com",
                password:'U2FsdGVkX18doIGbiIglkD2ON0AAo7jwg8HasdqZoN8=',
                isActive:true
            }]));
           
            

        })
        cy.visit('http://localhost:3000/products');
        cy.get('#change_password').click();

        cy.get('#current_password').type('Joh@1234');
        cy.get('#edit_password').type('John@1234');
        cy.get('#confirm_edit_password').type('John@1234')

        cy.get('#change_password_btn').click();
    })
    it('not allow user to change password', ()=>{
        cy.window().then((win)=>{
            win.localStorage.setItem('isLogin', true);
            win.localStorage.setItem('loginData',JSON.stringify([{
                fname:"john",
                lname:"dow",
                email:"john@gmail.com",
                password:'U2FsdGVkX18doIGbiIglkD2ON0AAo7jwg8HasdqZoN8=',
                isActive:true
            }]));
           
            

        })
        cy.visit('http://localhost:3000/products');
        cy.get('#change_password').click();

        cy.get('#current_password').type('John@1234');
        cy.get('#edit_password').type('John@1234');
        cy.get('#confirm_edit_password').type('John@1234')

        cy.get('#change_password_btn').click();
    })
    
    
})