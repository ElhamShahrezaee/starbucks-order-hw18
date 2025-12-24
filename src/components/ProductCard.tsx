import type { Product } from "../data/products";

interface Props {
  product: Product;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const ProductCard = ({ product, quantity, onIncrease, onDecrease }: Props) => {
  return (
    <div className="bg-green-900 text-white rounded-xl p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="h-32 mb-4" />

      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="mb-3">${product.price}</p>

      <div className="flex items-center gap-3">
        <button
          onClick={onDecrease}
          className="bg-orange-200 text-black px-3 rounded"
        >
          -
        </button>

        <span>{quantity}</span>

        <button
          onClick={onIncrease}
          className="bg-orange-200 text-black px-3 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
