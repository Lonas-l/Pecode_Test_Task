export const clickOnProfileButton = () => {
    cy.get(".header-office").click();
};

export const submitAuth = () => {
    cy.get(".form-inner-wrap button.button[type='submit']:visible").click();
};

export const fillLoginFields = (email : string, password: string) => {
    cy.get("input[name='user_login']").focus().type(email);
    cy.get("input[name='user_pw']").focus().type(password);
};

declare global {
    namespace Cypress {
        interface Chainable {
            clickOnProfileButton: () => void;
            submitAuth: () => void;
            fillLoginFields: (email : string, password: string) => void;
        }
    }
}