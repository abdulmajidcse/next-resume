import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white bg-center bg-repeat antialiased bg-[url('/dots.svg')] font-libre-baskerville">
      <Header />
      <div className="max-w-[750px] mx-auto min-h-[calc(100vh-180px)]">
        <main className="md:ml-8 mb-10">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
