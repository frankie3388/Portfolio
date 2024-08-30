import type { Metadata } from "next";
import { roboto } from '@/styles/fonts';
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/Footer";
import "./globals.css";
import { OffsetYProvider } from "@/hooks/useOffsetY";


export const metadata: Metadata = {
  title: "Frankie's Portfolio",
  description: "Frankie's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <OffsetYProvider>
        <body className={`${roboto.variable} font-roboto`}>
          <Navbar/>
          <main className="flex-1 p-4">
            {children}
          </main>
          <Footer />
        </body>
      </OffsetYProvider>
    </html>
  );
}
