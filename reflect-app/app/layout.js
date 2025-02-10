import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: "Reflect App",
  description: "Journaling",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          <div className="bg-[url(/bg.jpg)]  opacity-50 fixed -z-10 inset-0" />
          <Header/>
          <main>
            {children}
          </main>
          <footer>
            made by sourav
          </footer>

        </body>
      </html>
    </ClerkProvider>

  );
}
