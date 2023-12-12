
export const goToWishlistPage = () => {
    cy.get('.wish-list').click();
};

export const removeFromWishlist = () => {
    cy.get('.product-mobile-settings-button').click();
    cy.get('.product__remove-button:visible').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            goToWishlistPage: () => void;
            removeFromWishlist: () => void;
        }
    }
}