import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { ReduxProvider } from "@/Provider/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elevyze Gym",
  description:
    "Elevyze Gym is a gym management software that helps you manage your gym's membership and membership payments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <ReduxProvider>
            {children}
            <Toaster richColors position="top-center" />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
