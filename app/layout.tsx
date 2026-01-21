import type { Metadata } from "next";
import { Proxima_Nova, Adobe_Garamond_Pro } from "next/font/google";
import "./globals.css";

const proximaNova = Proxima_Nova({
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-proxima-nova",
  display: "swap",
});

const adobeGaramond = Adobe_Garamond_Pro({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-adobe-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bitcoin Association Switzerland",
  description: "The Bitcoin Association Switzerland forms an active community of enthusiasts with regular events, try to resolve open legal questions, and educate the public by providing a contact point for media inquiries.",
  openGraph: {
    title: "Bitcoin Association Switzerland",
    url: "https://www.bitcoinassociation.ch",
    type: "website",
    images: [
      {
        url: "https://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/t/59062102be659450876bfb81/1493573890585/logo_with_name.png?format=1500w",
        width: 227,
        height: 237,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${proximaNova.variable} ${adobeGaramond.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
