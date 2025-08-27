import "./globals.css";
import { Montserrat, Kapakana } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const kapakana = Kapakana({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "La città più bella del mondo",
  description: "Cosenza - La città più bella del mondo",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png" },
    ],
  },
  openGraph: {
    title: "La città più bella del mondo",
    description: "Un sito speciale ✨",
    url: "https://lacittapiubelladelmondo.it",
    siteName: "La città più bella del mondo",
    images: [
      {
        url: "https://lacittapiubelladelmondo.it/cosenza.jpg",
        width: 1200,
        height: 630,
        alt: "Cosenza - La città più bella del mondo",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La città più bella del mondo",
    description: "Un sito speciale ✨",
    images: ["https://lacittapiubelladelmondo.it/cosenza.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${montserrat.className} ${kapakana.className}`}>
        {children}
      </body>
    </html>
  );
}
