import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import { ThemeModeProvider } from "@/theme/ThemeContext";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shem Gikunda | Full-Stack Software Engineer Portfolio",
  description: "Personal portfolio website of Shem Gikunda, showcasing systems architecture, Golang, NestJS, and React web engineering achievements.",
  keywords: ["Shem Gikunda", "Software Engineer", "Full Stack Developer", "Golang", "NestJS", "React", "Portfolio", "Nairobi", "Kenya"],
  authors: [{ name: "Shem Gikunda", url: "https://github.com/shem958" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>
        <ThemeModeProvider>
          <Navbar />
          <main style={{ minHeight: "85vh" }}>{children}</main>
          <Footer />
        </ThemeModeProvider>
      </body>
    </html>
  );
}
