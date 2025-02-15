import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/app/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "auto",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`scroll-smooth ${jetBrainsMono.className}`}>
      <body className="antialiased">
        <div className="bg-white bg-center bg-repeat antialiased bg-[url('/dots.svg')]">
          <Header />
          <div className="max-w-[750px] mx-auto min-h-[calc(100vh-184px)]">
            <main className="md:ml-8">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: "Md Abdul Majid - Software Engineer",
  description:
    "I'm working as a Software Engineer focused on backend and frontend. I'm passionate about PHP and JavaScript and working with Laravel, VueJS, ReactJS, Livewire, AlpineJS, jQuery",
  applicationName: "Abdul Majid Portfolio",
  authors: [{ name: "Md Abdul Majid", url: "https://abdulmajid.dev" }],
  generator: "Md Abdul Majid",
  keywords: [
    "abdul majid",
    "web developer",
    "Software Engineer",
    "abdul majid cse",
    "abdul majid bd",
    "web developer",
    "laravel",
    "laravel-livewire",
    "Vuejs",
    "ReactJS",
    "PHP",
    "JavaScript",
  ],
  creator: "Md Abdul Majid",
  publisher: "Md Abdul Majid",
  robots: "index, follow",
  icons: "/logo.png",
  twitter: {
    card: "summary",
    site: "https://abdulmajid.dev",
    creator: "@abdulmajidcse",
    images: "https://abdulmajid.dev/logo.png",
  },
};

export default RootLayout;
