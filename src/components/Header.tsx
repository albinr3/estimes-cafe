"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X, Phone, Clock, MapPin } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/catering", label: "Catering" },
    { href: "/private-events", label: "Private Events" },
    { href: "/about", label: "About" },
  ];

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
              Mon – Sat: 8:00 AM – 3:00 PM &bull; Sun: 8:00 AM – 4:00 PM
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
          <Link href="/" className="flex items-center gap-2 py-1 group">
            <Image
              src="/assets/estimes-cafe-logo.webp"
              alt="Estimé by chef Duke — Estime's Café"
              width={180}
              height={70}
              priority
              className="h-12 sm:h-14 w-auto object-contain group-hover:opacity-85 transition-opacity"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 font-serif text-[15px] text-brand-text">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors pb-0.5 ${
                    isActive
                      ? "text-brand-green font-bold border-b-2 border-brand-gold"
                      : "hover:text-brand-green"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/order-online"
              className="bg-brand-green text-white hover:bg-brand-green-dark px-4 py-2.5 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200"
            >
              Order Online
            </Link>
            <a
              href="tel:7326697581"
              className="border border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200"
            >
              Call (732) 669-7581
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/order-online"
              className="px-3 py-1.5 bg-brand-green text-white text-[11px] font-bold uppercase tracking-wider rounded-sm sm:hidden"
            >
              Order
            </Link>
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
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors ${
                    isActive ? "text-brand-green font-bold" : "text-brand-text hover:text-brand-green"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2.5 font-sans">
            <Link
              href="/order-online"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-brand-green text-white py-3 text-xs font-bold uppercase tracking-wider"
            >
              Order Online (Delivery &amp; Pickup)
            </Link>
            <a
              href="tel:7326697581"
              className="w-full text-center border border-brand-green text-brand-green py-3 text-xs font-bold uppercase tracking-wider"
            >
              Call: (732) 669-7581
            </a>
            <Link
              href="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-brand-cream text-brand-text py-2.5 text-xs font-bold uppercase tracking-wider"
            >
              Explore Full Menu
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
