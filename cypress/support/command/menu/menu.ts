export const toggleMenu = () => {
    cy.get("#menu-toggle").click();
};

export const clickMenuItemByIndex = (index : number) => {
    cy.get('.menu-list__item .menu-list__link')
        .eq(index)
        .invoke('attr', 'href')
        .then((href) => {
            const categoryNumber = href.match(/\/categorys\/(\d+)\/?/)[1];
            cy.intercept('GET', `**/categorys/${categoryNumber}`).as('loadProducts');

            cy.get('.menu-list__item .menu-list__link')
                .eq(index)
                .click({ force: true });

            cy.wait('@loadProducts');
        });
}

declare global {
    namespace Cypress {
        interface Chainable {
            toggleMenu: () => void;
            clickMenuItemByIndex: (index : number) => void;
        }
    }
}