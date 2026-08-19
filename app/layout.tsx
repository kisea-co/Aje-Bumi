import type { Metadata } from "next";
import "./globals.css";
import "./palette.css";

export const metadata: Metadata = {
  title: "Ajé Bumi | Adornment, memory, and becoming",
  description:
    "Ajé Bumi is a jewelry house shaped by sacred femininity, water, memory, ritual, and adornment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
