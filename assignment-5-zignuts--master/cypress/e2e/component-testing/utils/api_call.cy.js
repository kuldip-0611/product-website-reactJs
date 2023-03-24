/* eslint-disable no-undef */
describe('api calling', ()=>{
    it('api calling success', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://dummyjson.com/products/1',
            
        }).then(res=>{
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('title');
            expect(res.body).to.have.property('price');
        })

    })
})