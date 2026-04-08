import { Product } from "@/types";

export default function ProductList({ 
  products, 
  currentCategory, 
  isLoading 
}: { 
  products: Product[], 
  currentCategory: string,
  isLoading: boolean
}) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 space-y-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-indigo-100 dark:border-zinc-800 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-zinc-500 font-bold animate-pulse tracking-tight">Updating Inventory...</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 transition-all">
        <div className="bg-zinc-100 dark:bg-zinc-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <p className="text-zinc-500 font-medium">No products found in <span className="text-indigo-600 dark:text-indigo-400 font-bold capitalize">{currentCategory}</span></p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-indigo-600 rounded-full"></span>
          Viewing: <span className="text-indigo-600 dark:text-indigo-400 capitalize">{currentCategory}</span>
          <span className="text-xs font-medium text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700">
            {products.length} Results
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-bold px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-lg uppercase tracking-widest border border-zinc-200 dark:border-zinc-700">
                {item.category}
              </span>
              {item.quantity > 10 ? (
                <span className="flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 px-2.5 py-1 rounded-full whitespace-nowrap">
                  ● IN STOCK
                </span>
              ) : item.quantity > 0 ? (
                <span className="flex items-center text-[10px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400 px-2.5 py-1 rounded-full whitespace-nowrap">
                  ● LOW STOCK ({item.quantity})
                </span>
              ) : (
                <span className="flex items-center text-[10px] font-bold text-rose-600 bg-rose-50 dark:bg-rose-900/20 dark:text-rose-400 px-2.5 py-1 rounded-full whitespace-nowrap">
                  ● OUT OF STOCK
                </span>
              )}
            </div>
            
            <h2 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-1 group-hover:text-indigo-600 transition-colors truncate">
              {item.product_name}
            </h2>
            
            <p className="text-sm text-zinc-500 mb-6 font-medium">By {item.supplier}</p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <p className="text-2xl font-black text-zinc-900 dark:text-white">
                ₹{item.price.toLocaleString()}
              </p>
              <button className="flex items-center gap-2 px-3 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl text-xs font-bold transition-transform active:scale-95">
                Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}