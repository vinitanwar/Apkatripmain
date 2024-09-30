import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/AllComponent/Navbar";
import Footer from "./Component/Footer";
import Topbar from "./Component/Topbar";
import Providerfile from "./Component/Store/Providerfile";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apka Trip",
  description: "Book online Trip",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
     
      </head>
      <body className={inter.className}>
        <Providerfile>
        <Topbar />

        <div className="block md:hidden">
          <Navbar />
        </div>
        {children}
        <Footer />
        </Providerfile>
      </body>
      
    </html>
  );
}
