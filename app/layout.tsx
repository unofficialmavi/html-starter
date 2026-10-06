import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MavRent — Property Operating Platform",
  description: "Manage, market and grow your rental property business.",
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}