// Test case 4:
// Summary: “Add to favorite item”
// 1. Open marketplace url. Verify it.
// 2. Login with correct data
// 3. Open category and subcategory if it is necessary
// 4. Add to favorite item
// 5. Go to favorite page
// 6. Verify that item is correctly displayed

describe("Test case 4", () => {

    beforeEach(() => {
        cy.visit("https://makeup.com.ua/ua/");
        cy.get(".page-home").should("be.visible");
    });

    afterEach(() => {
        cy.removeFromWishlist();
    });

    it("Add to favorite item", () => {
        cy.clickOnProfileButton();
        cy.fillLoginFields(Cypress.env("TEST_EMAIL"), Cypress.env("TEST_PASSWORD"));
        cy.submitAuth();
        cy.toggleMenu();
        cy.clickMenuItemByIndex(6);
        cy.clickProductByIndex(4);
        cy.sendToFavorite();
        cy.clickOnProfileButton();
        cy.goToWishlistPage();
        cy.get(".product-list__item").should("have.length", "1");
    });

});