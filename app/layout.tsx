import type { Metadata } from "next";
import {
  Nunito,
  Lato,
  Libre_Baskerville,
  Playfair_Display,
} from "next/font/google";
import "@/app/global.css";

const nunitoFont = Nunito({
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin-ext"],
  display: "auto",
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const playfair_display = Playfair_Display({
  subsets: ["latin-ext"],
  variable: "--font-playfair-display",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${lato.variable} ${libre_baskerville.variable} ${playfair_display.variable} ${nunitoFont.className} font-sans`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
};

export const metadata: Metadata = {
  title: "Md Abdul Majid - Software Engineer",
  description:
    "Professional Software Engineer and working with Laravel, Livewire, AlpineJS, jQuery, VueJS, ReactJS",
  applicationName: "Abdul Majid Portfolio",
  authors: [{ name: "Md. Abdul Majid", url: "https://abdulmajid.com.bd" }],
  generator: "Md. Abdul Majid",
  keywords: [
    "abdul majid",
    "web developer",
    "Software Engineer",
    "abdul majid cse",
    "abdul majid bd",
    "professional web developer",
    "laravel",
    "laravel-livewire",
    "Vuejs",
    "ReactJS",
  ],
  creator: "Md. Abdul Majid",
  publisher: "Md. Abdul Majid",
  robots: "index, follow",
  icons: "/abdulmajid.jpg",
  twitter: {
    card: "summary",
    site: "https://abdulmajid.com.bd",
    creator: "@abdulmajidcse",
    images: "https://abdulmajid.com.bd/abdulmajid.jpg",
  },
};

export default RootLayout;
