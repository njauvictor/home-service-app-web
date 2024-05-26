import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import NextAuthSessionProvider from "./provider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "./(routes)/details/_components/Footer";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Molo Pages | Molo Business Directory",
  description: "Find Any Businesses or Services in Molo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <div className="mx-6 md:mx-16">
            
            <Toaster />
            <Header />
            <main>{children}</main>
                   
          </div>
          <Footer />   
         
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
