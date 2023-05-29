import "@/styles/globals.css";
  
export const metadata = {
  title: "text-similarity",
  description: "Open source text similarity checker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="pt-20">{children}</section>;
}
