import { Customer } from "./customer";
import { StoreManager } from "./store-manager";

function openStore() {
  // define the store manager
  const storeManager = new StoreManager();

  // define the customer and the product to watch
  const customer1 = new Customer({ id: '1', name: 'Milk', price: 2.99 });

  // tells the customer to watch for the product
  storeManager.registerProductsStateObserver(customer1.newProductsStateObserver());

  // update new product and notify the customer
  storeManager.updateAvailableProductsStateObservers([
    { id: '1', name: 'Milk', price: 2.99 },
  ]);
}

openStore();