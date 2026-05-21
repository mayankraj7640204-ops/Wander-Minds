import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1b1e2e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wandermayank.netlify.app"),
  title: "WanderMind | AI Travel Platform",
  description: "Your AI travel companion. Every journey, remembered. Plan itineraries and connect with travelers worldwide.",
  keywords: ["AI travel", "travel planner", "itinerary builder", "travel community", "WanderMind"],
  openGraph: {
    title: "WanderMind | AI Travel Platform",
    description: "Your AI travel companion. Every journey, remembered.",
    url: "https://wanderminds.netlify.app",
    siteName: "WanderMind",
    images: [{ url: "/cta-bg.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WanderMind | AI Travel Platform",
    description: "Your AI travel companion. Every journey, remembered.",
    images: ["/cta-bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-sand text-foreground">{children}</body>
    </html>
  );
}
