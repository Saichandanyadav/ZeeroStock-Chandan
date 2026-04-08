# 🛒 Inventory Search Application

A modern, responsive inventory search application built using **Next.js, React, and Tailwind CSS**. This project delivers a clean, fast, and intuitive experience for browsing products, applying smart filters, and switching between buyer and supplier views.

---

## 🌐 Live Demo

🚀 **View Live Application:**
https://zeerostock-chandan.vercel.app/

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

* Clean, modern card-based UI

* Displays:

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
* Smooth grid-based UI

### 📊 Pagination

* Handles large datasets efficiently
* 6 products per page
* Smooth navigation between pages

### 🎨 UI/UX Enhancements

* Modern card design with shadows
* Smooth hover effects
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
git clone https://github.com/saichandanyadav/ZeeroStock-Chandan.git
cd inventory-search-app-chandan
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

**Sai Chandan Gundaboina**

📧 Email: [saichandhanyadav2002@gmail.com](mailto:saichandhanyadav2002@gmail.com)
🔗 LinkedIn: https://linkedin.com/in/saichandanyadav
💻 GitHub: https://github.com/saichandanyadav

---

## 🏁 Conclusion

This project demonstrates strong fundamentals in:

* UI/UX design
* Responsive development
* API integration
* Component-based architecture

---
