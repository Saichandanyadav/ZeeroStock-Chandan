"use client";

import { useState, useEffect } from "react";
import RoleToggle from "@/components/RoleToggle";
import SearchBar from "@/components/SearchBar";
import ProductList from "@/components/ProductList";
import SupplierPanel from "@/components/SupplierPanel";

export default function Home() {
  const [role, setRole] = useState("buyer");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  
  const initialFilters = { q: "", category: "All", minPrice: "", maxPrice: "" };
  const [filters, setFilters] = useState(initialFilters);

  const handleSearch = async (pageNum = 1) => {
    setIsLoading(true);
    const params = new URLSearchParams();
    if (filters.q) params.append("q", filters.q);
    if (filters.category !== "All") params.append("category", filters.category);
    if (filters.minPrice) params.append("minPrice", filters.minPrice);
    if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);
    params.append("page", pageNum.toString());

    try {
      const res = await fetch(`/api/search?${params}`);
      const data = await res.json();

      if (res.ok) {
        setProducts(data.data);
        setTotalPages(data.totalPages);
        setPage(data.currentPage);
        setActiveCategory(filters.category);
      }
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetFilters = async () => {
    setFilters(initialFilters);
    setPage(1);
    handleSearch(1);
  };

  useEffect(() => {
    handleSearch(page);
  }, [page]);

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Inventory Live
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter">
              ZeeroStock
              <span className="text-indigo-600 ml-1">Marketplace</span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">
              Smart commerce for modern inventory management.
            </p>
          </div>

          <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Current View</label>
              <RoleToggle role={role} setRole={setRole} />
          </div>
        </header>

        <div className="space-y-10">
          {role === "supplier" && (
            <section className="animate-in fade-in slide-in-from-top-4 duration-500">
              <SupplierPanel />
            </section>
          )}

          <section className="sticky top-4 z-40">
            <SearchBar 
              filters={filters} 
              setFilters={setFilters} 
              handleSearch={() => { setPage(1); handleSearch(1); }} 
              resetFilters={resetFilters}
            />
          </section>

          <section className="min-h-[400px]">
            <ProductList 
              products={products} 
              currentCategory={activeCategory} 
              isLoading={isLoading} 
            />
          </section>

          {totalPages > 1 && (
            <nav className="flex items-center justify-between gap-2 mt-16 py-6 border-t border-zinc-200 dark:border-zinc-800">
              <button
                disabled={page === 1}
                onClick={() => { setPage(p => p - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-8 py-3 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-xl border border-zinc-200 dark:border-zinc-800 disabled:opacity-40 font-bold transition-all active:scale-95 shadow-sm text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden xs:inline">Previous</span>
              </button>
              
              <div className="flex items-center justify-center px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl min-w-[100px]">
                <span className="text-sm font-black text-zinc-900 dark:text-white">
                  {page} <span className="text-zinc-400 font-medium mx-1">of</span> {totalPages}
                </span>
              </div>

              <button
                disabled={page === totalPages}
                onClick={() => { setPage(p => p + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-8 py-3 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-xl border border-zinc-200 dark:border-zinc-800 disabled:opacity-40 font-bold transition-all active:scale-95 shadow-sm text-sm"
              >
                <span className="hidden xs:inline">Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          )}
        </div>
      </div>
    </main>
  );
}