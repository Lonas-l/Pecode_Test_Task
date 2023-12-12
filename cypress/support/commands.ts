import * as general from "./command/general/general";
import * as basket from "./command/basket/basket";
import * as menu from "./command/menu/menu";
import * as product from "./command/product/product";
import * as filter from "./command/filter/filter";
import * as auth from "./command/auth/auth";
import * as wishlist from "./command/wishlist/wishlist";

Cypress.Commands.addAll(general);
Cypress.Commands.addAll(basket);
Cypress.Commands.addAll(menu);
Cypress.Commands.addAll(product);
Cypress.Commands.addAll(filter);
Cypress.Commands.addAll(auth);
Cypress.Commands.addAll(wishlist);

export {};