"use client";

import { useState } from "react";

export default function SearchBar({ filters, setFilters, handleSearch, resetFilters }: any) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const categories = ["All", "Groceries", "Electronics", "Personal Care", "Fashion", "Fitness", "Furniture"];

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 lg:p-6 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8 transition-all">
      <div className="flex flex-row items-center gap-2 lg:hidden mb-0">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 text-sm"
            value={filters.q}
            onChange={(e) => setFilters({ ...filters, q: e.target.value })}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(1)}
          />
        </div>
        <button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className={`p-3 rounded-xl border transition-all ${
            isMobileFilterOpen 
            ? "bg-indigo-600 border-indigo-600 text-white" 
            : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </button>
      </div>

      <div className={`${isMobileFilterOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:items-end gap-4 mt-4 lg:mt-0`}>
        <div className="hidden lg:flex flex-col gap-1 flex-1">
          <label className="text-[10px] font-bold text-zinc-400 uppercase ml-1 tracking-wider">Search</label>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
            value={filters.q}
            onChange={(e) => setFilters({ ...filters, q: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-1 lg:w-48">
          <label className="text-[10px] font-bold text-zinc-400 uppercase ml-1 tracking-wider">Category</label>
          <select
            className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 transition-all text-sm appearance-none"
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:flex lg:gap-4">
          <div className="flex flex-col gap-1 lg:w-32">
            <label className="text-[10px] font-bold text-zinc-400 uppercase ml-1 tracking-wider">Min Price</label>
            <input
              type="number"
              placeholder="Min"
              className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 text-sm"
              value={filters.minPrice}
              onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1 lg:w-32">
            <label className="text-[10px] font-bold text-zinc-400 uppercase ml-1 tracking-wider">Max Price</label>
            <input
              type="number"
              placeholder="Max"
              className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 text-sm"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            />
          </div>
        </div>

        <div className="flex gap-2 lg:ml-auto">
          <button
            onClick={() => {
              handleSearch(1);
              setIsMobileFilterOpen(false);
            }}
            className="flex-1 lg:flex-none lg:px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-indigo-200 dark:shadow-none text-sm whitespace-nowrap"
          >
            Apply
          </button>
          <button
            onClick={() => {
              resetFilters();
              setIsMobileFilterOpen(false);
            }}
            className="px-6 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 font-semibold rounded-xl transition-all text-sm"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}