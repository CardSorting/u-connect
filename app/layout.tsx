// [LAYER: UI] Root application shell and metadata for the LaunchHive frontend.
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "LaunchHive | AI commercialization matching for Utah deep-tech",
  description:
    "LaunchHive helps Utah researchers, founders, operators, executives, students, and advisors discover commercialization matches through guided AI intake.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}