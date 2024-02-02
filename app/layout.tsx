"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import store from "./store/store";
import { Provider } from 'react-redux';


import Head from "next/head";
import React from "react";
import Footer from "./components/footer";
import Navbar from "./components/NavbarComp/navbar";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jockey+One&display=swap"
            rel="stylesheet"
          />
      </Head>
        <body style={{ fontFamily: 'Jockey One, sans-serif' }} className={inter.className}> 
        <Navbar/>
        {children} 
        <Footer/>
        </body>
      </Provider>
    </html>
   
  );
}
