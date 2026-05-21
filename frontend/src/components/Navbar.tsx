"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MoreHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'FEATURES', href: '#features' },
    { name: 'ITINERARIES', href: '#itineraries' },
    { name: 'COMMUNITY', href: '/dashboard' },
    { name: 'PRICING', href: '/dashboard' },
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 lg:px-12 py-4",
          scrolled && !menuOpen ? "bg-white/70 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group z-[60]" onClick={() => setMenuOpen(false)}>
            <div className="w-10 h-10 flex items-center justify-center rounded overflow-hidden">
              <img src="/logo.png" alt="WanderMind Logo" className="w-full h-full object-cover" />
            </div>
            <span className={cn(
              "text-xl font-bold tracking-tight transition-colors drop-shadow-sm",
              menuOpen 
                ? "text-white" 
                : scrolled 
                  ? "text-brand-indigo group-hover:text-brand-terracotta" 
                  : "text-white group-hover:text-white/80"
            )}>
              WanderMind
            </span>
          </Link>

          {/* Menu Toggle Button */}
          <button 
            className={cn(
              "z-[60] p-2 rounded-full transition-colors drop-shadow-sm",
              menuOpen 
                ? "text-white hover:bg-white/10" 
                : scrolled 
                  ? "text-gray-800 hover:bg-black/5" 
                  : "text-white hover:bg-white/20"
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={32} /> : <MoreHorizontal size={32} />}
          </button>
        </div>
      </header>

      {/* Full Screen Overlay Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-[#d92d20] flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-6 md:gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-4xl md:text-6xl font-black text-white italic tracking-wider hover:scale-110 transition-transform duration-300"
              style={{
                transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div 
            className="flex flex-col md:flex-row items-center gap-6 mt-8"
            style={{
              transitionDelay: menuOpen ? `${navLinks.length * 50}ms` : '0ms',
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0,
              transition: 'all 500ms cubic-bezier(0.22,1,0.36,1)'
            }}
          >
            <button 
              className="text-2xl font-bold text-white hover:text-white/80 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              SIGN IN
            </button>
            <button 
              className="bg-white text-[#d92d20] px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
              onClick={() => setMenuOpen(false)}
            >
              GET STARTED
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
