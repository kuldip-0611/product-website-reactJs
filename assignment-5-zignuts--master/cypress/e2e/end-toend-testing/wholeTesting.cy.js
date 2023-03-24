/* eslint-disable */
const { slowCypressDown } = require("cypress-slow-down")

slowCypressDown(900)

describe('loading successfull', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })
    it("check all fields and routes", () => {
        /* This is a test case for the login page. for edit profile testing purpose  */
        cy.window().then(win=>{
            win.localStorage.setItem('isLogin', false);
            win.localStorage.setItem('loginData',JSON.stringify([{
                fname: 'john',
                lname: 'doe',
                email: 'ram@gmail.com',
                password: 'U2FsdGVkX18doIGbiIglkD2ON0AAo7jwg8HasdqZoN8=',
                mobile: '8520125689',
                isActive: false
            },
            
        ]))
        })

        const loginUserData = {
            email: "john@gmail.com",
            password: "John@1234"
        }
        /* This is a test case for the login page. */
        cy.visit('http://localhost:3000/products')
        cy.url().should('include', '/')

        cy.get('#login_email').type(loginUserData.email);
        cy.get('#login_password').type(loginUserData.password);

        cy.get('#loginBtn').click();
        /* Clicking on the button with the id of `registre_user`. */
        cy.get('#registre_user').click();

        /* This is a test case for the registration page. */
        cy.visit('http://localhost:3000/registration');
        cy.get('input[name="fname"]').type('john');
        cy.get('input[name="lname"]').type('dow');
        cy.get('input[name="email"]').type('john@gmail.com');
        cy.get('input[name="password"]').type('John@1234');
        cy.get('input[name="repeatpassword"]').type('John@1234');
        cy.get('input[name="mobile"]').type('5236457885');

        cy.get('button[type="submit"]').click();



        /* Clicking on the button with the id of `change_profile`. */
        cy.get('#change_profile').click();

        cy.visit('http://localhost:3000/editprofile');

        /* Typing the values in the input fields. */
        cy.get('#profile_edit_fname').clear().type('janardan');
        cy.get('#profile_edit_lname').clear().type('dow');
        cy.get('#profile_edit_email').clear().type('johnd@gmail.com');
        cy.get('#profile_edit_mobile').clear().type('8520125623');

        /* Clicking on the button with the id of `change_profile_submit`. */
        cy.get('#change_profile_submit').click();

      
        cy.get('#profile_edit_fname').clear().type('janardan');
        cy.get('#profile_edit_lname').clear().type('dow');
        cy.get('#profile_edit_email').clear().type('ram@gmail.com');
        cy.get('#profile_edit_mobile').clear().type('8520125623');
        cy.get('#change_profile_submit').click();



        cy.visit('http://localhost:3000/products');

        /* This is a test case for changing the password. */
        cy.get('#change_password').click();
        cy.get('#current_password').type('John@1234');
        cy.get('#edit_password').type('Johnd@1234');
        cy.get('#confirm_edit_password').type('Johnd@1234');

        cy.get('#change_password_btn').click();

        //current password is mismatch
        cy.get('#current_password').clear().type('Joh@1234');
        cy.get('#edit_password').clear().type('John@1234');
        cy.get('#confirm_edit_password').clear().type('John@1234')

        cy.get('#change_password_btn').click();

        //all three passwords same test case
        cy.get('#current_password').clear().type('Johnd@1234');
        cy.get('#edit_password').clear().type('Johnd@1234');
        cy.get('#confirm_edit_password').clear().type('Johnd@1234')

        cy.get('#change_password_btn').click();

        /* Clicking on the button with the id of `logout`. */
        cy.get('#logout').click();


        /* This is a test case for the login page. */
        cy.get('#login_email').type('johnd@gmail.com');
        cy.get('#login_password').type('Johnd@1234');

        cy.get('#loginBtn').click();
        cy.visit('http://localhost:3000/products')

        cy.get('#detail-btn').click();

        cy.get('#logout').click();


    })
})  