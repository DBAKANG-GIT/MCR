import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./component/layout/AppFooter";
import Navbar from "./component/layout/AppHeader";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plusjakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="antialiased font-sans ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
