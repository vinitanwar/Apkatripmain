import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/AllComponent/Navbar";
import Footer from "./Component/Footer";
import Topbar from "./Component/Topbar";
import Providerfile from "./Component/Store/Providerfile";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apka Trip",
  description: "Book online Trip",
};

export default async function RootLayout({ children }) {

  const locale = await getLocale();
 

  const messages = await getMessages();



  return (
    <html lang={locale} >
      <head>

        
     
      </head>
      <body className={inter.className}>
      <NextIntlClientProvider messages={messages}>
        <Providerfile>
        <Topbar />

        <div className="block md:hidden">
          <Navbar />
        </div>
        {children}
        <Footer />
        </Providerfile>
      </NextIntlClientProvider>
      </body>
      
    </html>
  );
}
