
describe('Get API for Rest', ()=>{

    it('GET Api Test for Flask - MotorBike', ()=>{

        cy.request('https://flask-rest-api-demo.herokuapp.com/product/motorbike').then((res) => {
            expect(res.status).equal(200)
            expect(res.body.product[0]).has.property('price', 599.99)
            expect(res.body.product[0]).has.property('product', 'motorbike')
        }) 
    })

    it('GET Api Test for Flask - Users', ()=>{

        cy.request('https://flask-rest-api-demo.herokuapp.com/users').then((res) => {
            expect(res.status).equal(200)
            expect(res.body.users[0]).has.property('username', 'test_1')
            expect(res.body.users[1]).has.property('id', 2)
            expect(res.body.users).has.length(5)
            expect(res.body.users[0]).not.have.property('price')
        }) 
    })


})