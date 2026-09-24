interface HeaderProps {
  totalItems: number;
}

export default function Header({ totalItems }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-slate-800 px-6 py-4 rounded-lg">
      <h1 className="text-xl font-bold text-white">Shopping Cart</h1>
      <span className="bg-orange-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
        {totalItems} Item{totalItems === 1 ? "" : "s"}
      </span>
    </header>
  );
}
