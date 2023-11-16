import { Product, ProductsStateObserver } from "./store";

export class Customer {
  productToWatch: Product;
  constructor(neededProduct: Product) {
    this.productToWatch = neededProduct;
  }
  newProductsStateObserver(): ProductsStateObserver {
    return {
      availableProductsUpdated: (availableProducts: any[]) => {
        if (availableProducts.some(product => product.id === this.productToWatch.id)) {
          console.log(`Yes! ${this.productToWatch.name} is available!`);
          return {
            added: [this.productToWatch],
          };
        }
        return {
          added: [],
        };
      },
    };
  }
}
