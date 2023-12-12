import { selectByTestId } from '../../../helper/getByTestId';
export const searchItem = (itemName: string) => {
    cy.get("[data-popup-handler='search']").click();
    cy.get('#search-input').focus().type(`${itemName}{enter}`);
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId), { timeout: 10000 });
};

declare global {
    namespace Cypress {
        interface Chainable {
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
            searchItem: (itemName: string) => void;
        }
    }
}