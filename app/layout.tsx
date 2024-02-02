"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import store from "./store/store";
import { Provider } from 'react-redux';
import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" suppressHydrationWarning={true} >
      <Provider store={store}> 
      <Head>
        <title>Title</title>
        <meta name='description' content='Description' />
      </Head>
        <body className={inter.className}> {children} </body>
      </Provider>
    </html>
   
  );
}
