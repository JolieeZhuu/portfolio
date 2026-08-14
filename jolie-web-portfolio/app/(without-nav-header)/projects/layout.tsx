import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="m-4 mx-90 mt-10"> 
            {/* fix the spacing because currently it is fixed */}
            {children}
        </div>
    </>
  );
}
