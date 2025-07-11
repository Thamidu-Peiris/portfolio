'use client';

import React, { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:hidden">
      <button
        className="fixed top-4 right-4 z-[1000] p-3 bg-transparent rounded-xl shadow-lg flex flex-col justify-center items-center gap-1 focus:outline-none backdrop-blur-sm"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)' }}
      >
        {/* Hamburger icon */}
        <span className="block w-6 h-0.5 bg-white transition-all duration-300" style={{ transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
        <span className="block w-6 h-0.5 bg-white transition-all duration-300" style={{ transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }}></span>
      </button>
      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-[900]" onClick={() => setOpen(false)}></div>
      )}
      {open && (
        <div className="fixed top-16 right-4 left-4 rounded-lg shadow-lg z-[1001] animate-fade-in bg-white/10 backdrop-blur-xl">
          <ul className="flex flex-col items-center py-4">
            {links.map((link) => (
              <li key={link.href} className="w-full text-center py-2">
                <a
                  href={link.href}
                  className="block w-full px-4 py-2 text-lg text-white font-semibold rounded hover:bg-white/20 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
} 