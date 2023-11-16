import { Product, ProductsStateObserver, Store } from "./store";

export class StoreManager extends Store {
  constructor() {
    super();
    this.stateObservers = [];
  }
  registerProductsStateObserver(observer: ProductsStateObserver) {
    this.stateObservers.push(observer);
  }
  updateAvailableProductsStateObservers(newProducts: Product[]) {
    const availableProducts = [...newProducts];
    for (const observer of this.stateObservers) {
      const result = observer.availableProductsUpdated(availableProducts);
      availableProducts.push(...result.added);
    }
  }
}
