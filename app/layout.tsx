import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sean Gleeson — Commerce, Product, Builder",
  description:
    "Commerce leader and product strategist. At Target, building pricing tools that earn trust. Leveling up on AI through practice, action, and experimentation.",
  openGraph: {
    title: "Sean Gleeson — Commerce, Product, Builder",
    description:
      "Commerce leader and product strategist. At Target, building pricing tools that earn trust. Leveling up on AI through practice, action, and experimentation.",
    url: "https://seangleeson.dev",
    siteName: "Sean Gleeson",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sean Gleeson — Commerce, Product, Builder",
    description:
      "Commerce leader and product strategist. At Target, building pricing tools that earn trust. Leveling up on AI through practice, action, and experimentation.",
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
      className={`${fraunces.variable} ${dmSans.variable}`}
    >
      <body className="bg-bg text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-accent-bg focus:px-4 focus:py-2 focus:text-accent text-sm font-medium"
        >
          Skip to content
        </a>
        <header>
          <Nav />
        </header>
        <main id="main">
          {children}
        </main>
        <footer className="max-w-content mx-auto px-6 md:px-12 py-8">
          <p className="font-sans text-sm text-ink-secondary">
            Built by Sean Gleeson · {new Date().getFullYear()}
          </p>
        </footer>
      </body>
    </html>
  );
}
