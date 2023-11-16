export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ProductsUpdateResult {
  added: Product[];
}

export interface ProductsStateObserver {
  availableProductsUpdated(
    availableProducts: Product[]
  ): ProductsUpdateResult;
}


export class Store {
  stateObservers: ProductsStateObserver[] = [];
  constructor() { }
}
