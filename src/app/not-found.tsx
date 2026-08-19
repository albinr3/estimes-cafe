import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UtensilsCrossed, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-paper text-brand-text">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center bg-white border border-brand-line p-8 sm:p-10 rounded-sm shadow-md">
          <div className="w-16 h-16 bg-[#f4ede1] text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
            <UtensilsCrossed className="w-8 h-8 text-brand-gold" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mb-2">
            404 &bull; Page Not Found
          </span>
          <h1 className="font-serif text-3xl text-brand-green font-normal mb-3">
            Looking for Fresh Flavors?
          </h1>
          <p className="font-serif text-sm text-brand-muted leading-relaxed mb-8">
            The page you are looking for might have been moved or doesn&apos;t exist. Let&apos;s get you back to our delicious menu or home page.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 border border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Explore Menu</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
