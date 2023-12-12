
// Test case 2:
// Summary: Add items to the basket
// 1. Open marketplace url. Verify it.
// 2. Open category and subcategory if it is necessary.
// 3. Add any item to the basket.
// 4. Select another category and add an item from that category.
// 5. Verify information of items inside the basket.
// 6. Verify that the price is calculated correctly.
// 7. Verify that the delete item button is clickable.

describe("Test case 2", () => {

    beforeEach(() => {
        cy.visit(`${Cypress.config("baseUrl")}`);
        cy.get(".page-home").should("be.visible");
    });

    it("Verify information of items inside the basket", () => {
        cy.toggleMenu();
        cy.clickMenuItemByIndex(5);
        cy.clickProductByIndex(4);
        cy.clickOnBuyButton();
        cy.getProductInformation().then((productInfo) => {
            cy.clickOnBuyButton();

            cy.get(".product__header").should("have.text", productInfo.name);
            cy.get(".product__header-desc").should("have.text", productInfo.category);
            cy.get(".product__price").should("include.text", productInfo.price);
        });
    });

    it("Verify that the price is calculated correctly", () => {
        cy.toggleMenu();
        cy.clickMenuItemByIndex(5);
        cy.clickProductByIndex(2);
        cy.clickOnBuyButton();
        cy.closeBasket();

        cy.toggleMenu();
        cy.clickMenuItemByIndex(2);
        cy.clickProductByIndex(1);
        cy.clickOnBuyButton();

        cy.checkPrice();
    });

    it("Verify that the delete item button is clickable", () => {
        for (let i = 0; i < 3; i++) {
            cy.toggleMenu();
            cy.clickMenuItemByIndex(6);
            cy.clickProductByIndex(i);
            cy.clickOnBuyButton();
            cy.closeBasket();
        }
        cy.openBasket();
        cy.removeItem(1);
        cy.get(".product-list__item").should("have.length", 2);
    });
});
