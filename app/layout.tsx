import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aje Bumi | Jewelry as lineage, memory, and form",
  description:
    "Aje Bumi is a jewelry house rooted in lineage, sacred femininity, craftsmanship, and permanence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
