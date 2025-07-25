import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/lib/providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlueX widget Dynamic integration example",
  description: "Gluex widget Dynamic integration example", 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}