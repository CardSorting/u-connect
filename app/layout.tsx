// [LAYER: UI] Root application shell and metadata for the LaunchHive frontend.
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaunchHive | AI commercialization matching for Utah deep-tech",
  description:
    "LaunchHive helps Utah researchers, founders, operators, executives, students, and advisors discover commercialization matches through guided AI intake.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}