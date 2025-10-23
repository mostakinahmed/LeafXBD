import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-gray-900 text-gray-300 py-10">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Responsive Grid: 1 column on mobile, 2 on md, 4 on lg */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <Link to={"/"}>
                  <img className="h-14 w-30" src="/logo full.png" alt="" />
                </Link>

                <p className="text-gray-400 mb-4">
                  Your one-stop shop for all your tech needs. Quality products,
                  great prices.
                </p>
                <p className="text-gray-500 text-sm">
                  &copy; {new Date().getFullYear()} Victus Byte. All rights
                  reserved.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-indigo-500">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-500">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-500">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-500">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Customer Support */}
              <div>
                <h4 className="text-white font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-indigo-500">
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-500">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-500">
                      Order Status
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-500">
                      Payment Options
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-white font-semibold mb-4">
                  Subscribe to our Newsletter
                </h4>
                {/* Responsive form: vertical on mobile, horizontal on sm+ */}
                <form className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-3 py-2 rounded border-2 bg-amber-50 text-gray-900 flex-grow"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
                  >
                    Subscribe
                  </button>
                </form>

                {/* Social Icons */}
                <div className="flex space-x-4 mt-6">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:text-indigo-500"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.128 8.438 9.876v-6.987H7.898v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.466h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="hover:text-indigo-500"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.298 4.298 0 001.88-2.37 8.57 8.57 0 01-2.72 1.04 4.29 4.29 0 00-7.3 3.91A12.18 12.18 0 013 5.16a4.28 4.28 0 001.33 5.72 4.25 4.25 0 01-1.94-.53v.05a4.29 4.29 0 003.44 4.2 4.3 4.3 0 01-1.93.07 4.29 4.29 0 004 2.98A8.6 8.6 0 012 19.54 12.14 12.14 0 008.29 21c7.54 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.32 8.32 0 0022.46 6z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-indigo-500"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.5-2.5a1 1 0 110 2 1 1 0 010-2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
