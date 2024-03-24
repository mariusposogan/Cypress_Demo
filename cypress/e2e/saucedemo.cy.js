describe('SwagLabs', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Login with incorect credentials', () => {
        cy.get('[data-test="username"]').type('name@email.com');
        cy.get('#password').type('1234abcde');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should("exist");
        cy.screenshot();
        cy.wait(1500); 
    })

    it('Login with correct credentials', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    })

    it('Logout', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    })

    it('Side menu', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#inventory_sidebar_link').should("exist");
    })

    it('Add to cart and remove from cart', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
        
    })

    it('Checkout', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Calin');
        cy.get('[data-test="lastName"]').type('Robertson');
        cy.get('[data-test="postalCode"]').type('90210');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="back-to-products"]').click();
    })

    it('Product details', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#item_0_title_link > .inventory_item_name').click();
        cy.get('.inventory_details_desc').should("contain.text", "A red light");
        cy.wait(1500); 
    })

    it('Back to products button', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('[data-test="back-to-products"]').click()
        cy.get('.title').should("contain.text", "Products");
    })

})