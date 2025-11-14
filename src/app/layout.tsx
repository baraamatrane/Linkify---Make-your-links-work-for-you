import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Linkify - Make your links work for you",
  description: "Make your links work for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
