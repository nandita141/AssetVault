import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AssetVault | Decentralized Physical Asset Management",
  description: "Secure, transparent, and decentralized physical asset management on the Stellar blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        {children}
      </body>
    </html>
  );
}
