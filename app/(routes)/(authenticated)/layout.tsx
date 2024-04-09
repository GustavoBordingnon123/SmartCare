"use client";

import React from 'react';
import { Urbanist } from 'next/font/google';
import Sidebar from '../../components/sideBar';

const font = Urbanist({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBarOpen, setSideBarOpen] = React.useState(true);

  return (
    <html lang="en">
      <body className={`${font.className}, flex gap-2 w-full bg-mediumBlue`}>
        <main className="flex w-full h-full">
          <div className={`h-full w-${sideBarOpen ? '64' : '18'}  transition-all duration-300 ease-in-out`}>
            <Sidebar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} />
          </div>
          <div className="min-h-screen h-full w-[100%] bg-mediumBlue">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}