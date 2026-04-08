# 🛒 Inventory Search Application

A modern, responsive inventory search application built using **Next.js, React, and Tailwind CSS**. This project provides a clean and intuitive UI for browsing products, applying smart filters, and switching between buyer and supplier views.

---

## 🚀 Features

### 🔍 Smart Search & Filters

* Search products by name
* Filter by category
* Price range filtering (min & max)
* Instant results with API integration
* Reset filters with one click

### 🧑‍💼 Role-Based View (UI)

* **Buyer View (default)** – Browse products
* **Supplier View** – Includes supplier panel (UI only)

### 📦 Inventory Display

* Clean card-based UI

* Displays product details:

  * Product name
  * Category
  * Price
  * Supplier
  * Quantity available

* Inventory status:

  * ✅ In Stock
  * ⚠️ Low Stock

### 📱 Mobile-First Design

* Fully responsive layout
* Optimized for mobile, tablet, and desktop
* Grid-based adaptive UI

### 📊 Pagination

* Efficient handling of large datasets
* 6 products per page
* Smooth navigation

### 🎨 UI/UX Enhancements

* Modern card design with shadows
* Smooth hover interactions
* Clean spacing and typography
* Soft gradient background

---

## 🏗️ Tech Stack

* **Frontend:** Next.js (React)
* **Styling:** Tailwind CSS
* **API:** Next.js API Routes
* **State Management:** React Hooks

---

## 📂 Project Structure

```
src/
 ├── app/
 │    ├── page.tsx
 │    ├── globals.css
 │    └── api/
 │         └── search/route.ts
 │
 ├── components/
 │    ├── ProductList.tsx
 │    ├── SearchBar.tsx
 │    ├── RoleToggle.tsx
 │    └── SupplierPanel.tsx
 │
 ├── data/
 │    └── products.ts
 │
 └── types/
      └── index.ts
```

---

## ⚙️ Installation & Setup

```bash
git clone <your-repo-url>
cd inventory-app
npm install
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 🔄 API Endpoint

### `GET /api/search`

#### Query Parameters:

* `q` → search keyword
* `category` → filter by category
* `minPrice` → minimum price
* `maxPrice` → maximum price

#### Example:

```
/api/search?q=rice&category=Groceries&minPrice=50&maxPrice=200
```

---

## 📊 Data

* 30 mock product records
* Categories included:

  * Groceries
  * Electronics
  * Personal Care
  * Stationery
  * Home Care

---

## 💡 Design Decisions

* Card-based UI for better readability
* Mobile-first responsive design
* Client-side pagination for performance
* Simple role toggle for UI demonstration
* Tailwind CSS for rapid and clean styling

---

## 🔮 Future Improvements

* Supplier product management (Add/Edit/Delete)
* Backend database integration
* Authentication & authorization
* Sorting and advanced filters
* Debounced search
* Dark mode support

---

## 👨‍💻 Developer

**Name:** Sai Chandan Gundaboina
**Email:** [saichandhanyadav2002@gmail.com](mailto:saichandhanyadav2002@gmail.com)
**LinkedIn:** https://linkedin.com/in/saichandanyadav
**GitHub:** https://github.com/saichandanyadav

---

## 🏁 Conclusion

This project demonstrates strong fundamentals in:

* UI/UX design
* Responsive development
* API integration
* Component-based architecture

Built to be **clean, scalable, and user-friendly**, making it ideal for assignments and frontend portfolio projects.

---
