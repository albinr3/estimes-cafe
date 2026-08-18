"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X, Phone, Clock, MapPin, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#fbf8f2]/95 backdrop-blur-md border-b border-[#eee8de] transition-all">
      {/* Top Banner / Micro Bar */}
      <div className="bg-brand-green text-brand-cream text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-container mx-auto flex justify-between items-center tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-brand-gold-light" />
              238 Inman Avenue, Colonia, NJ 07067
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-gold-light" />
              Tue – Sun: 8:00 AM – 3:00 PM (Mon: Closed)
            </span>
          </div>
          <div className="flex items-center gap-4 font-semibold tracking-wider">
            <a
              href="tel:7326697581"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold-light" />
              (732) 669-7581
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-serif italic text-3xl sm:text-4xl text-brand-green font-bold tracking-tight group-hover:text-brand-green-dark transition-colors">
                Estime&apos;s
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-brand-muted font-bold -mt-1">
                Café &bull; Colonia, NJ
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 font-serif text-[15px] text-brand-text">
            <Link
              href="/"
              className="text-brand-green font-semibold border-b-2 border-brand-gold pb-0.5 hover:text-brand-green transition-colors"
            >
              Home
            </Link>

            {/* Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMenuDropdownOpen(true)}
              onMouseLeave={() => setMenuDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-brand-green py-2 transition-colors focus:outline-none"
                onClick={() => setMenuDropdownOpen(!menuDropdownOpen)}
              >
                <span>Menu</span>
                <ChevronDown className="w-3.5 h-3.5 text-brand-gold" />
              </button>
              {menuDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#fbf8f2] border border-brand-line shadow-xl rounded-sm py-2 font-sans text-xs uppercase tracking-wider z-50 animate-fadeIn">
                  <a
                    href="#menu"
                    className="block px-4 py-2.5 hover:bg-brand-cream hover:text-brand-green font-semibold transition-colors"
                  >
                    Breakfast, Brunch &amp; Lunch Menu
                  </a>
                  <a
                    href="#catering"
                    className="block px-4 py-2 hover:bg-brand-cream text-brand-muted hover:text-brand-green transition-colors"
                  >
                    Catering Party Trays Menu
                  </a>
                  <a
                    href="#catering"
                    className="block px-4 py-2 hover:bg-brand-cream text-brand-muted hover:text-brand-green transition-colors"
                  >
                    Weekend Brunch Catering Menu
                  </a>
                  <a
                    href="#catering"
                    className="block px-4 py-2 hover:bg-brand-cream text-brand-muted hover:text-brand-green transition-colors"
                  >
                    Private Events Menu &amp; Packages
                  </a>
                </div>
              )}
            </div>

            {/* Catering Direct Link */}
            <a
              href="#catering"
              className="hover:text-brand-green transition-colors"
            >
              Catering
            </a>

            <a href="#" className="hover:text-brand-green transition-colors">
              Private Events
            </a>
            <a href="#about" className="hover:text-brand-green transition-colors">
              About
            </a>
            <a href="#location" className="hover:text-brand-green transition-colors">
              Location
            </a>
            <a href="#reviews" className="hover:text-brand-green transition-colors">
              Reviews
            </a>
            <a href="#location" className="hover:text-brand-green transition-colors">
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:7326697581"
              className="border border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200"
            >
              Call (732) 669-7581
            </a>
            <a
              href="#menu"
              className="bg-brand-green text-white hover:bg-brand-green-dark px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200"
            >
              View Menu
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:7326697581"
              className="p-2 border border-brand-green text-brand-green rounded-sm sm:hidden"
              aria-label="Call Estime's Cafe"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-text hover:text-brand-green focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-paper border-b border-brand-line px-6 py-6 font-serif text-base space-y-4 shadow-lg">
          <div className="flex flex-col space-y-3 border-b border-brand-line pb-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-green font-bold"
            >
              Home
            </Link>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-green"
            >
              Menu & Specialties
            </a>
            <a
              href="#catering"
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-green"
            >
              Catering Services (B2B & Social)
            </a>
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-green"
            >
              Private Events
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-green"
            >
              Our Story (Chef Duke)
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-green"
            >
              Customer Reviews (4.8★)
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-green"
            >
              Location & Hours (Colonia, NJ)
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5 font-sans">
            <a
              href="tel:7326697581"
              className="w-full text-center bg-brand-green text-white py-3 text-xs font-bold uppercase tracking-wider"
            >
              Call: (732) 669-7581
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center border border-brand-green text-brand-green py-3 text-xs font-bold uppercase tracking-wider"
            >
              Explore Full Menu
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
