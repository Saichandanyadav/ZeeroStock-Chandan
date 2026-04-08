import { NextRequest, NextResponse } from "next/server";
import { products } from "@/data/products";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const q = searchParams.get("q")?.toLowerCase() || "";
  const category = searchParams.get("category");
  const minPrice = searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : null;
  const maxPrice = searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : null;
  const page = Number(searchParams.get("page")) || 1;
  const limit = 8;

  let results = [...products];

  if (q) {
    results = results.filter((item) => item.product_name.toLowerCase().includes(q));
  }

  if (category && category !== "All") {
    results = results.filter((item) => item.category === category);
  }

  if (minPrice !== null) {
    results = results.filter((item) => item.price >= minPrice);
  }

  if (maxPrice !== null) {
    results = results.filter((item) => item.price <= maxPrice);
  }

  const total = results.length;
  const startIndex = (page - 1) * limit;
  const paginatedResults = results.slice(startIndex, startIndex + limit);

  return NextResponse.json({
    data: paginatedResults,
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: page
  });
}