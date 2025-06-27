// import { Suspense } from "react"

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow  lg:pt-16 pt-0 ">{children}</main>

      <Footer />
    </div>
  );
}
