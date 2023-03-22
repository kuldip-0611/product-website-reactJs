/* eslint-disable no-undef */
describe('logout', () => {
    it('allow user to logout', () => {
        cy.window().then(win => {
            win.localStorage.setItem('isLogin', false);

            const data = win.localStorage.getItem('loginData');
            console.log(data);
            const inobjData = JSON.parse(data);

            console.log(inobjData);

            // const ActiveData = inobjData.filter(item=>item.isActive);

            // ActiveData[0].isActive = false;
        })
        cy.visit('http://localhost:3000/login')
    })
})