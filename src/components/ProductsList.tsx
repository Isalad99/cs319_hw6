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
    <section className="bg-slate-800 rounded-lg p-6 flex-1">
      <h2 className="text-lg font-bold text-white mb-4">Products</h2>
      <ul className="flex flex-col gap-3">
        {products.map((product) => (
          <li key={product.id} className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-white font-medium">{product.name}</span>
              <span className="text-slate-400 text-sm">${product.price}</span>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
