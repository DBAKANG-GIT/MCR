import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./component/layout/AppFooter";
import Navbar from "./component/layout/AppHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      </body>
    </html>
  );
}
