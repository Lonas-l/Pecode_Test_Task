// Test case 3:
// Summary: “Search the item”
// 1. Open marketplace url. Verify it.
// 2. Search random item by name.
// 3. Verify that all items are correctly displayed according to your searching request (only on the first page)

describe("Test case 3", () => {

    beforeEach(() => {
        cy.visit("https://makeup.com.ua/ua/");
        cy.get(".page-home").should("be.visible");
    });

    it("Search the item", () => {
        const randomItemName = "Dior Sauvage";

        cy.searchItem(randomItemName);

        cy.get(".catalog-products [data-click-event='product_select']").each(($item) => {
            cy.wrap($item).find(".simple-slider-list__name").invoke('text').then((itemName) => {
                const regex = /(Dior.*Sauvage|Sauvage.*Dior)/i; // Case-insensitive match
                expect(itemName).to.match(regex);
            });
        });
    });

});
