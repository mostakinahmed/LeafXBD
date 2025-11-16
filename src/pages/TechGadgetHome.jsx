import React, { useState, useEffect } from "react";

// TechGadget - Homepage (Single-file React component using TailwindCSS)
// Assumptions made: Light theme, Professional layout, responsive, uses placeholder images.
// Replace image URLs and link targets with your real assets.

export default function TechGadgetHome() {
  const heroBanners = [
    "ads banner 2.png",
    "ads img 2.png",
    "https://via.placeholder.com/1600x500?text=Hero+Banner+3",
  ];

  const smallBanners = [
    "https://via.placeholder.com/600x150?text=Small+Banner+1",
    "https://via.placeholder.com/600x150?text=Small+Banner+2",
  ];

  const categories = [
    { id: 1, name: "Phones", img: "https://via.placeholder.com/300x200?text=Phones" },
    { id: 2, name: "Laptops", img: "https://via.placeholder.com/300x200?text=Laptops" },
    { id: 3, name: "Accessories", img: "https://via.placeholder.com/300x200?text=Accessories" },
    { id: 4, name: "Wearables", img: "https://via.placeholder.com/300x200?text=Wearables" },
  ];

  const products = new Array(8).fill(0).map((_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    price: (99 + i * 25).toFixed(2),
    img: `https://via.placeholder.com/400x300?text=Product+${i + 1}`,
  }));

  // Hero slider
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroBanners.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top bar */}
      <div className="bg-indigo-600 text-white text-sm py-1">
        <div className="container mx-auto px-4 flex justify-between">
          <div>Free shipping over $50</div>
          <div>24/7 Support: +1 (800) 123-456</div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">TechGadget</div>
            <nav className="hidden md:flex gap-4 text-sm">
              <a href="#" className="hover:text-indigo-600">Home</a>
              <a href="#" className="hover:text-indigo-600">Shop</a>
              <a href="#" className="hover:text-indigo-600">Offers</a>
              <a href="#" className="hover:text-indigo-600">Blog</a>
              <a href="#" className="hover:text-indigo-600">Contact</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="Search products, brands..."
                className="border rounded-md px-3 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
            <button className="px-3 py-2">❤️</button>
            <button className="px-3 py-2 border rounded">Cart (0)</button>
            <button className="px-3 py-2 border rounded">Sign in</button>
          </div>
        </div>
      </header>

      {/* Navigation on mobile */}
      <div className="bg-white md:hidden py-2 shadow-sm">
        <div className="container mx-auto px-4 flex gap-3 overflow-x-auto">
          <a className="px-3 py-1 bg-gray-100 rounded-full text-sm">Categories</a>
          <a className="px-3 py-1 bg-gray-100 rounded-full text-sm">Deals</a>
          <a className="px-3 py-1 bg-gray-100 rounded-full text-sm">New</a>
          <a className="px-3 py-1 bg-gray-100 rounded-full text-sm">Brands</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main slider */}
          <div className="lg:col-span-2 relative overflow-hidden rounded">
            {heroBanners.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Hero ${i}`}
                className={`w-full h-64 md:h-80 lg:h-96 object-cover absolute inset-0 transition-opacity duration-700 ${
                  i === slide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
            {/* Quick CTA */}
            <div className="absolute left-6 top-1/3 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white p-6 rounded shadow-md max-w-sm">
              <h2 className="text-xl font-semibold">Mega Gadget Sale</h2>
              <p className="text-sm mt-2">Up to 50% off on select items. Limited time only.</p>
              <div className="mt-4">
                <a href="#" className="bg-white text-indigo-600 px-3 py-2 rounded font-medium">Shop Now</a>
              </div>
            </div>
          </div>

          {/* Right small banners */}
          <div className="flex flex-col gap-4">
            {smallBanners.map((b, i) => (
              <img key={i} src={b} alt={`Small ${i}`} className="w-full h-32 object-cover rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4 mt-8">
        <h3 className="text-lg font-semibold mb-4">Shop by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => (
            <div key={c.id} className="bg-white rounded shadow-sm p-3 text-center">
              <img src={c.img} alt={c.name} className="mx-auto h-32 object-cover rounded" />
              <div className="mt-2 font-medium">{c.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Flash Sale / Hot Deals */}
      <section className="container mx-auto px-4 mt-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Hot Deals</h3>
          <div className="text-sm text-gray-500">Ends in: <strong>03:12:45</strong></div>
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.slice(0, 6).map((p) => (
            <div key={p.id} className="bg-white rounded shadow p-3 text-center">
              <img src={p.img} alt={p.title} className="h-36 w-full object-cover rounded" />
              <div className="mt-2 text-sm font-medium">{p.title}</div>
              <div className="mt-1 text-indigo-600 font-semibold">${p.price}</div>
              <button className="mt-2 w-full text-sm py-1 border rounded">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 mt-8">
        <h3 className="text-lg font-semibold mb-4">New Arrivals</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded shadow p-3">
              <img src={p.img} alt={p.title} className="h-40 w-full object-cover rounded" />
              <div className="mt-2 font-medium text-sm">{p.title}</div>
              <div className="mt-1 text-indigo-600 font-semibold">${p.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Carousel (simple) */}
      <section className="container mx-auto px-4 mt-8">
        <h3 className="text-lg font-semibold mb-4">Top Brands</h3>
        <div className="flex gap-6 items-center overflow-x-auto py-2">
          {new Array(8).fill(0).map((_, i) => (
            <div key={i} className="flex-shrink-0 bg-white p-4 rounded shadow text-center w-40">
              <img src={`https://via.placeholder.com/150x60?text=Brand+${i + 1}`} alt={`Brand ${i + 1}`} className="mx-auto h-10 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 mt-8">
        <h3 className="text-lg font-semibold mb-4">What customers say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded shadow p-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                <div>
                  <div className="font-medium">Customer {i}</div>
                  <div className="text-sm text-gray-500">Verified buyer</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600">Great product quality and fast shipping. Highly recommended!</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 mt-8">
        <div className="bg-indigo-600 text-white rounded p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold">Join our newsletter</h4>
            <p className="text-sm">Get 10% off your first order — plus exclusive deals.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input type="email" placeholder="Enter your email" className="px-3 py-2 rounded w-full md:w-72 text-gray-800" />
            <button className="bg-white px-4 py-2 rounded text-indigo-600 font-semibold">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 mt-12">
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl font-bold">TechGadget</div>
            <p className="mt-2 text-sm text-gray-400">Your trusted tech marketplace for gadgets and accessories.</p>
          </div>
          <div>
            <h5 className="font-semibold">Support</h5>
            <ul className="mt-2 text-sm text-gray-400 space-y-1">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Company</h5>
            <ul className="mt-2 text-sm text-gray-400 space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Follow Us</h5>
            <div className="flex gap-3 mt-2">
              <div className="h-8 w-8 rounded bg-gray-700"></div>
              <div className="h-8 w-8 rounded bg-gray-700"></div>
              <div className="h-8 w-8 rounded bg-gray-700"></div>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 py-4">© {new Date().getFullYear()} TechGadget. All rights reserved.</div>
      </footer>
    </div>
  );
}
