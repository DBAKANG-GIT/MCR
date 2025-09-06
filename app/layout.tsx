import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./component/layout/AppFooter";
import Navbar from "./component/layout/AppHeader";
import { WhatsAppButton } from "./component/layout/WhatsAppButton";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./component/analytics/GoogleAnalytics";
import StructuredData from "./component/seo/StructuredData";
import SEOMonitor from "./component/seo/SEOMonitor";
import "react-toastify/dist/ReactToastify.css";
import { metadata } from "./metadata";

// Export metadata for Next.js
export { metadata };

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
        <ToastContainer position="top-center" autoClose={3000} />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <SEOMonitor />
      </body>
    </html>
  );
}
