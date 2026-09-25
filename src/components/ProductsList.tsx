export interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductsListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

export default function ProductsList({
  products,
  addToCart,
}: ProductsListProps) {
  return (
    <section className="bg-slate-800 rounded-lg p-6 w-full min-w-0 ">
      <h2 className="text-lg font-bold text-white mb-4 ">Products</h2>
      <div className="mt-6">
        <ul className="flex flex-col gap-3">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex-1 text-left">
                <span className="text-white font-medium">{product.name}</span>
              </div>

              <div className="text-center">
                <span className="text-slate-400 text-sm">${product.price}</span>
              </div>

              <div className="flex-1 text-right">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
