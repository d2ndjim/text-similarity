import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "text-similarity",
  description: "Open source text similarity checker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="min-h-screen bg-slate-50 antialiased dark:bg-slate-900">
        <Providers>
          {children}
          <Toaster position="bottom-right" />
          {/* @ts-expect-error Server component*/}
          <Navbar />
        </Providers>
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
