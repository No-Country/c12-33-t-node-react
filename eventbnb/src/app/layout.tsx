"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Filter from "../components/filter/Filter";
import Provider from "../components/Provider";

import { SalonsProvider } from "../context/SalonsProvider";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hideHeaderFooter, setHideHeaderFooter] = useState(true);

  // useEffect(() => {
  //   const arr = window.location.pathname.split("/");
  //   const isHideHeaderFooter = arr.find((path) => path === "become-a-host");
  //   setHideHeaderFooter(isHideHeaderFooter || false);
  // }, []);

  return (
    <html lang="en">
      <body>
        <Provider>
          <SalonsProvider>
            <Header />
            {children}
            <Footer />

            {/* {!hideHeaderFooter && <Header />}
            {children}
            {!hideHeaderFooter && <Footer />} */}
          </SalonsProvider>
        </Provider>
      </body>
    </html>
  );
}
