import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://win-games.vercel.app'), // Update this with your actual domain
  title: "$WIN — Games you win",
  description: "Games you win",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "$WIN — Games you win",
    description: "Games you win",
    images: [
      {
        url: '/social-share.png',
        width: 1200,
        height: 630,
        alt: '$WIN — Games you win',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "$WIN — Games you win",
    description: "Games you win",
    images: ['/social-share.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
