/* eslint-disable */
import store from '../../../../src/redux/store/store';
import {fetchData} from '../../../../src/redux/reducers/Set_Product';
describe('redux actions teting', () => {
   
    it('fetch data started and set loading is false ',()=>{
        cy.window().then((win) => {
            win.localStorage.setItem("isLogin", true);
            win.localStorage.setItem(
                "userCredentials",
                JSON.stringify([
                    {
                        isActive: true,
                        email: "john.doe@example.com",
                        password: "password@123",
                        firstName: "John",
                        lastName: "Doe",
                        mobile: "9510950033",
                    },
                ])
            );
        });
        cy.visit("http://localhost:3000/products");
        
        cy.wrap(store.dispatch(fetchData.pending()))
        
        
        cy.wrap(store).invoke('getState')
        .then((state)=>{
            expect(state.product.loading).equal(true);

            
        })

    })

    it('fetch data loading flase and data came to array ',()=>{
        cy.window().then((win) => {
            win.localStorage.setItem("isLogin", true);
            win.localStorage.setItem(
                "userCredentials",
                JSON.stringify([
                    {
                        isActive: true,
                        email: "john.doe@example.com",
                        password: "password@123",
                        firstName: "John",
                        lastName: "Doe",
                        mobile: "9510950033",
                    },
                ])
            );
        });
        cy.visit("http://localhost:3000/products");
        
        cy.wrap(store.dispatch(fetchData.fulfilled()))
        
        
        cy.wrap(store).invoke('getState')
        .then((state)=>{
            expect(state.product.products).not.equal(null);

            
        })

    })


    it('fetch data loading false and error occue ',()=>{
        cy.window().then((win) => {
            win.localStorage.setItem("isLogin", true);
            win.localStorage.setItem(
                "userCredentials",
                JSON.stringify([
                    {
                        isActive: true,
                        email: "john.doe@example.com",
                        password: "password@123",
                        firstName: "John",
                        lastName: "Doe",
                        mobile: "9510950033",
                    },
                ])
            );
        });
        cy.visit("http://localhost:3000/products");
        
        cy.wrap(store.dispatch(fetchData.rejected()))
        
        
        cy.wrap(store).invoke('getState')
        .then((state)=>{
            expect(state.product.error).not.equal('')    
        })

    })

    

})