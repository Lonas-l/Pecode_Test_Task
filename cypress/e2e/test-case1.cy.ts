// Test case 1:
// Summary: “Verify if the price filter working correctly for the following marketplaces”
// 1. Open marketplace url. Verify it.
// 2. Open category and subcategory if it is necessary.
// 3. Navigate to the filters section, for the following marketplaces it is located on the left side. Apply 2 3 filters.
// 4. Verify that all the items on the page are sorted correctly by the from and to price filters you entered.

describe("Test case 1", () => {

    beforeEach(() => {
        cy.visit(`${Cypress.config("baseUrl")}`);
        cy.get(".page-home").should("be.visible");
    });

    // Will fail, because filter doesn't work correctly

    it("Verify if the price filter working correctly for the following marketplaces", () => {
        cy.toggleMenu();
        cy.clickMenuItemByIndex(3);
        cy.openFilterModal();
        cy.chooseBrandById(0);
        cy.choosePrice(250);
        cy.applyFilter();
        cy.get(".selected-filter-list .selected-filter-list__item").should("have.length", 2);
        cy.get(".catalog-products li[data-brand]").each(($item) => {
            const price = parseFloat(Cypress.$($item).attr("data-price"));
            cy.wrap($item).should("have.attr", "data-brand", "Artdeco");
            expect(price).to.be.gte(250);
            expect(price).to.be.lte(500);
        });
    });

});
