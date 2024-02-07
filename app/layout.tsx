"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import store from "./store/store";
import { Provider } from 'react-redux';


import Head from "next/head";
import React from "react";
import Footer from "./components/footer";
import Navbar from "./components/NavbarComp/navbar";
import MobileNavbar from "./components/NavbarComp/mobileNavbar";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="tr" suppressHydrationWarning={true} >
      <Provider store={store}> 
      <Head>
        <title>Title</title>
        <meta name='description' content='Description' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jockey+One&display=swap"
            rel="stylesheet"
          />
      </Head>
        <body style={{ fontFamily: 'Jockey One, sans-serif' }} className={inter.className}> 
        <Theme>
        <div className="fixed top-0 left-0 w-full z-10 sm:block hidden ">
        <Navbar/>
        </div>
        <div className="fixed top-0 left-0 w-[100vw] z-10 sm:hidden  " >
          <MobileNavbar/>
        </div>
      
       
            {children}
          
         
          <Footer />
       
        </Theme>
        </body>
      </Provider>
    </html>
   
  );
}
