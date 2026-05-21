import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 px-6 lg:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-3 group mb-6 inline-flex">
            <div className="w-8 h-8 flex items-center justify-center rounded overflow-hidden">
              <img src="/logo.png" alt="WanderMind Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-indigo">WanderMind</span>
          </Link>
          <p className="text-gray-500 max-w-sm mb-8">
            Your intelligent travel companion. We blend cutting-edge AI with human connection to make every journey unforgettable.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <div key={social} className="w-10 h-10 rounded-full bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-[10px] text-gray-400 font-bold hover:bg-gray-200 transition-colors cursor-pointer">
                {social.slice(0, 2).toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6">Navigation</h4>
          <ul className="space-y-4">
            {['Features', 'Pricing', 'Community', 'Blog'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-brand-terracotta transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6">Stay Inspired</h4>
          <p className="text-sm text-gray-500 mb-4">Subscribe to our newsletter for curated travel stories and AI insights.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo"
            />
            <button className="bg-brand-indigo text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-indigo/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} WanderMind. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-gray-600">Privacy Policy</Link>
          <Link href="#" className="hover:text-gray-600">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
