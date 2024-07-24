import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Md Abdul Majid - Software Engineer",
  description:
    "Professional Software Engineer and working with Laravel, Livewire, AlpineJS, jQuery, VueJS, ReactJS",
  applicationName: "Abdul Majid Portfolio",
  authors: [{ name: "Md. Abdul Majid", url: "https://abdulmajid.dev" }],
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
  icons: "/abdul-majid.jpg",
  twitter: {
    card: "summary",
    site: "https://abdulmajid.dev",
    creator: "@abdulmajidcse",
    images: "https://abdulmajid.dev/abdul-majid.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white bg-center bg-repeat antialiased bg-[url('/dots.svg')] font-libre-baskerville">
        <Header />
        <div className="max-w-[750px] mx-auto min-h-[calc(100vh-180px)]">
          <main className="md:ml-8 mb-10">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
