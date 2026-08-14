import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css"
import { cn } from "@/lib/utils";

import NavBar from "@/app/components/navbar";
import Header from "@/app/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header/>
        <div className="flex items-center justify-center mt-4 mb-4">
            <NavBar/>
        </div>
        <div className="m-4 ml-90 mr-90"> 
            {/* fix the spacing because currently it is fixed */}
            {children}
        </div>
    </>
  );
}
