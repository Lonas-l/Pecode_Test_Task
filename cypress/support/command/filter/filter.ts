export const openFilterModal = () => {
    cy.getByTestId("parameters").click();
};

export const applyFilter = () => {
    cy.intercept("POST", "**/ajax/filter/**").as("acceptOptions");
    cy.get(".submit").click();
    cy.wait("@acceptOptions");
};

export const chooseBrandById = (index : number) => {
    cy.get('[id^=popularinput-checkbox-]').eq(index).click();
};

export const choosePrice = (priceFrom : number) => {
    cy.get('label[for="filter-price"]').click();
    cy.get(`label[data-set-from="${priceFrom}"]`).click();
};


declare global {
    namespace Cypress {
        interface Chainable {
            applyFilter: () => void;
            openFilterModal: () => void;
            chooseBrandById: (index : number) => void;
            choosePrice: (priceFrom : number) => void;
        }
    }
}