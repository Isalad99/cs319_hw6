import { type Product } from "./ProductsList";

export interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
}

export default function Cart({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}: CartProps) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <section className="bg-slate-800 rounded-lg p-6 w-full min-w-0 flex flex-col">
      <h2 className="text-lg font-bold text-white mb-4">Shopping Cart</h2>

      <div className="mt-6">
        {cartItems.length === 0 ? (
          <p className="text-slate-400 text-sm mb-4">Your cart is empty.</p>
        ) : (
          <ul className="flex flex-col gap-3 mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">{item.name}</p>
                  <p className="text-slate-400 text-xs">${item.price} each</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-6 h-6 flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white rounded"
                  >
                    -
                  </button>
                  <span className="text-white text-sm w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-6 h-6 flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-slate-400 hover:text-red-400 text-xs ml-1"
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="text-white font-bold mt-auto">Total: ${total}</p>
    </section>
  );
}
