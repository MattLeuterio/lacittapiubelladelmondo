import "./globals.css";
import { Montserrat, Kapakana } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const kapakana = Kapakana({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "La città più bella del mondo",
  description: "Cosenza - La città più bella del mondo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${montserrat.className} ${kapakana.className}`}>{children}</body>
    </html>
  );
}
