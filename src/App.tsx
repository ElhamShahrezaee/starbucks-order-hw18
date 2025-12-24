import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const increase = (id: number) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
  };

  const decrease = (id: number) => {
    if (!cart[id]) return;
    setCart({ ...cart, [id]: cart[id] - 1 });
  };

  const totalPrice = products.reduce((total, product) => {
    return total + (cart[product.id] || 0) * product.price;
  }, 0);

  const hasItem = totalPrice > 0;

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={cart[product.id] || 0}
            onIncrease={() => increase(product.id)}
            onDecrease={() => decrease(product.id)}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="bg-gray-100 mt-8 p-6 text-center">
        <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>

        <button
          disabled={!hasItem}
          className={`mt-4 px-8 py-2 rounded text-white ${
            hasItem ? "bg-orange-400" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit Order
        </button>
      </div>
    </div>
  );
}

export default App;
