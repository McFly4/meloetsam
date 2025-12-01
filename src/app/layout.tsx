import type { Metadata } from "next";
import { Playfair_Display, Hind_Vadodara } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ConditionalFooter from "@/components/ConditionalFooter";

const playfairDisplay = Playfair_Display({
	variable: "--font-playfair-display",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const hindVadodara = Hind_Vadodara({
	variable: "--font-hind-vadodara",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Mariage Mélo et Sam",
  description: "Célébrons l'amour de Mélo et Sam - Joignez-vous à nous pour une journée inoubliable remplie de joie, de rires et de souvenirs précieux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${hindVadodara.variable} antialiased`}
      >
				<Header />
        {children}
				<ConditionalFooter />
      </body>
    </html>
  );
}
