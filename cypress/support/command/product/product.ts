export const clickProductByIndex = (index: number) => {

    cy.get(".catalog-products [data-click-event=\"product_select\"] .simple-slider-list__image")
        .eq(index)
        .invoke("attr", "href")
        .then((href) => {

            // These errors from makeup code, i can't do something except ignoring (on functionality it is not influence)
            cy.on("uncaught:exception", (err, runnable) => {
                if (err.message.includes("Cannot read properties of undefined (reading 'push')")) {
                    return false;
                }
            });

            cy.intercept("GET", `**${href}`).as("loadDetailProduct");
            cy.get("[data-click-event='product_select'] .simple-slider-list__image")
                .eq(index)
                .click({force: true});

            cy.wait("@loadDetailProduct");
        });
};
export const clickOnBuyButton = () => {
    cy.get(".buy").click({force: true});
};

export const sendToFavorite = () => {
    cy.get(".product__to-favourite").click();
    cy.get("div[name='wl-follow-subscription-cancel']:visible").click();
};


interface ProductInfoTypes {
    name: string;
    category: string;
    price: string;
}

export const getProductInformation = () => {
    const productInfo: ProductInfoTypes = {
        name: "",
        category: "",
        price: ""
    };

    cy.get(".product-item__name").invoke("text").then((text) => {
        productInfo.name = text;
    });
    cy.get(".product-item__category").invoke("text").then((text) => {
        productInfo.category = text;
    });
    cy.get(".product-item__price .price_item").invoke("text").then((text) => {
        productInfo.price = text;
    });

    return cy.wrap(productInfo);
};

declare global {
    namespace Cypress {
        interface Chainable {
            toggleMenu: () => void;
            clickProductByIndex: (index: number) => void;
            clickOnBuyButton: () => void;
            sendToFavorite: () => void;
            getProductInformation: () => Cypress.Chainable<ProductInfoTypes>;
        }
    }
}