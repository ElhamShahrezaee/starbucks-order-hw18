export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Cappuccino",
    price: 3.5,
    image: "../src/assets/images/Cappuccino.png",
  },
  {
    id: 2,
    name: "Latte",
    price: 4,
    image: "../src/assets/images/Latte.png",
  },
  {
    id: 3,
    name: "Espresso",
    price: 2.5,
    image: "../src/assets/images/Espresso.png",
  },
  {
    id: 4,
    name: "Mocha",
    price: 4.5,
    image: "../src/assets/images/Mocha.png",
  },
  {
    id: 5,
    name: "Americano",
    price: 3,
    image: "../src/assets/images/Americano.png",
  },
];
