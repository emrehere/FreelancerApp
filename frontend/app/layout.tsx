"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import store from "./store/store";
import { Provider } from 'react-redux';
import Head from "next/head";
import React from "react";
import dynamic from 'next/dynamic'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const MobileNavbar = dynamic(() => import('./components/NavbarComp/mobileNavbar'), {
  ssr: false
})


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="tr"  >
      <Provider store={store}> 
      <Head>
        <title>Title</title>
        <meta name='description' content='Description' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
          
      </Head>
        <body style={{ fontFamily: 'Jockey One, sans-serif' }} className={inter.className}> 
        <div className="overflow-x-hidden">
        <Theme>
     
        <div className="fixed top-0 left-0 w-[100vw] z-10 sm:hidden  " >
          <MobileNavbar/>
        </div>
      
       
            {children}
          

       
        </Theme>
        </div>
        </body>
      </Provider>
    </html>
   
  );
}
