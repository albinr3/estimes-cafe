import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import StickyMobileBar from "@/components/StickyMobileBar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#4f5e2d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.estimescafe.com"),
  title: "Estime's Café — Premier Breakfast, Brunch, Lunch & Coffee | Colonia, NJ",
  description:
    "Experience handcrafted breakfast, signature weekend brunch, and fresh midday lunch in Colonia, NJ. Chef Duke Estime fuses American comfort classics with vibrant Haitian & Caribbean flavors at 238 Inman Ave.",
  keywords: [
    "breakfast near me",
    "best brunch near me",
    "lunch near me",
    "lunch spots near me",
    "best lunch in Colonia NJ",
    "breakfast Colonia NJ",
    "brunch Colonia NJ",
    "Haitian restaurant NJ",
    "lemon ricotta pancakes",
    "brioche french toast",
    "shrimp and grits NJ",
    "catering breakfast near me",
    "corporate lunch catering NJ",
    "Estime's Cafe"
  ],
  authors: [{ name: "Chef Duke Estime" }, { name: "Estime's Café" }],
  creator: "Estime's Café",
  publisher: "Estime's Café",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.estimescafe.com/",
    siteName: "Estime's Café",
    title: "Estime's Café — Premier Breakfast, Brunch & Lunch in Colonia, NJ",
    description:
      "Handcrafted breakfast, signature weekend brunch, and fresh midday lunch featuring American comfort food with Caribbean fusion. Visit us at 238 Inman Ave, Colonia, NJ.",
    images: [
      {
        url: "/assets/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Estime's Café - Fresh Gourmet Breakfast and Brunch in Colonia, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estime's Café — Premier Breakfast, Brunch & Lunch in Colonia, NJ",
    description:
      "Handcrafted breakfast, signature weekend brunch, and fresh lunch with Caribbean fusion in Colonia, NJ.",
    images: ["/assets/hero.jpg"],
  },
  alternates: {
    canonical: "https://www.estimescafe.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-brand-paper text-brand-text flex flex-col min-h-screen">
        <JsonLd />
        {children}
        <StickyMobileBar />
      </body>
    </html>
  );
}
