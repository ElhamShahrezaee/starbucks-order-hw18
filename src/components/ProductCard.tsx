import type { Product } from "../data/products";

interface Props {
  product: Product;
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  showButtons?: boolean; // کنترل نمایش دکمه‌ها
}

const ProductCard = ({
  product,
  quantity,
  onIncrease,
  onDecrease,
  showButtons = true,
}: Props) => {
  return (
    <div className="bg-[#1e3932] text-white rounded-xl p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="h-32 mb-4" />

      <div className="w-full text-left">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="mb-3 text-orange-200">${product.price}</p>
      </div>

      <div className="flex items-center justify-center w-full">
        {showButtons ? (
          <>
            <button
              onClick={onIncrease}
              className="bg-orange-200 text-black px-3"
            >
              +
            </button>

            <span className="bg-white text-black px-3">{quantity}</span>

            <button
              onClick={onDecrease}
              className="bg-orange-200 text-black px-3"
            >
              -
            </button>
          </>
        ) : (
          <span className="block w-full text-left">Qty: {quantity}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
