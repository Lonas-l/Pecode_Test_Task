export const openBasket = () => {
    cy.get(".header-basket").click();
};

export const closeBasket = () => {
    cy.get(".cart .popup-close").click();
};

export const removeItem = (index : number) => {
    cy.intercept('DELETE', '**/ajax/cart/').as('removeProduct');
    cy.get(".product-list__item").eq(index).find(".product__button-remove").click()
    cy.wait('@removeProduct');
};

export const showAllItems = () => {
    cy.get("#show-all-cart-items").click();
};

export const checkPrice = () => {
    cy.get(".product__price").invoke("text").then((text: string) => {
        const prices = text
            .split(" ")
            .map((item) => parseFloat(item.replace(" ₴", "")))
            .filter((price) => !isNaN(price));

        cy.get(".total strong").should("have.text",
            `${prices.reduce((sum, currentPrice) => sum + currentPrice, 0)}`);
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            openBasket: () => void;
            closeBasket: () => void;
            showAllItems: () => void;
            checkPrice: () => void;
            removeItem: (index : number) => void;
        }
    }
}