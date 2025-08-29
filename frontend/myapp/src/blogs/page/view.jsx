import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Top bar */}
      <div className="bg-gray-900 text-gray-100 text-xs text-center py-2">
        Free shipping worldwide on all orders over $40
      </div>

      {/* Logo & Nav */}
      <div className="border-b">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4">
          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start mb-2 md:mb-0">
            <span className="font-serif text-2xl tracking-wide font-semibold">Lou Paperie</span>
          </div>
          {/* Nav */}
          <nav className="flex-1 flex justify-center space-x-8 text-gray-700 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Shop</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
          {/* Icons */}
          <div className="flex-1 flex justify-center md:justify-end items-center space-x-4 text-gray-700">
            <button aria-label="Account" className="hover:text-gray-900">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>
            </button>
            <button aria-label="Cart" className="hover:text-gray-900 flex items-center">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              <span className="ml-1 text-xs">(0)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="border-b">
        <div className="max-w-6xl mx-auto py-4 px-4 flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
      </div>

      {/* Shop Collections */}
      <div className="max-w-6xl mx-auto px-4">
        <header className="my-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Shop Collections</h1>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded shadow-sm border flex flex-col">
              {/* Product Image */}
              <div className="w-full h-48 bg-gray-50 flex items-center justify-center rounded-t">
                <img
                  src={product.picture}
                  alt={product.name}
                  className="max-h-40 object-contain"
                  loading="lazy"
                />
              </div>
              {/* Footer */}
              <div className="bg-gray-900 text-white p-4 text-center rounded-b flex flex-col">
                <h2 className="text-base font-medium mb-1">{product.name}</h2>
                <a href="#" className="text-xs underline hover:text-gray-300">View All</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What's New */}
      <div className="max-w-6xl mx-auto px-4 mt-16 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 text-center tracking-tight">What's New</h2>
      </div>
    </div>
  );
}