import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Pro Controller", quantity: 2 },
  { productName: "Super smash", quantity: 5 }
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Shopping cart</h1>
      {itemsInCart.map(({ productName, quantity }) => <ItemCounter name={productName} quantity={quantity} key={productName} />)}
    </>
  )
}