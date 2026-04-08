"use client";

export default function RoleToggle({ role, setRole }: any) {
  return (
    <div className="relative flex bg-zinc-100 dark:bg-zinc-800/50 p-1 rounded-xl w-full md:w-64">
      <div
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-zinc-700 shadow-sm rounded-lg transition-all duration-300 ease-in-out ${
          role === "supplier" ? "left-[50%]" : "left-1"
        }`}
      />
      <button
        onClick={() => setRole("buyer")}
        className={`relative z-10 flex-1 py-2 text-sm font-bold transition-colors ${
          role === "buyer" ? "text-indigo-600 dark:text-white" : "text-zinc-500 hover:text-zinc-700"
        }`}
      >
        Buyer
      </button>
      <button
        onClick={() => setRole("supplier")}
        className={`relative z-10 flex-1 py-2 text-sm font-bold transition-colors ${
          role === "supplier" ? "text-indigo-600 dark:text-white" : "text-zinc-500 hover:text-zinc-700"
        }`}
      >
        Supplier
      </button>
    </div>
  );
}