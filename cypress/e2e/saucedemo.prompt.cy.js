const USER = 'standard_user';

describe('Verify standard user can login', () => {
  it('Standard User can login into https://www.saucedemo.com/', () => {
    cy.fixture('users').then((users) => {
      cy.prompt([
        `Visit ${Cypress.env('baseUrl')}`,
        `Type ${users[USER].email} in the username field`,
        `Type ${users[USER].password} in the password field`,
        'Click the login button',
        "Select a random item from the products page and click the \"Add to cart\" button",
        "Click on the shopping cart icon and verify the item is present in the cart",
        "Click on \"Checkout\" button",
        'Type Jon in the first name field',
        'Type Doe in the last name field',
        'Type 12901 in the postal code field',
        'Click the continue button',
        'Click the finish button',
        'Verify the complete header element has text Thank you for your order!',
      ]);
    });
  });
});
