"use client";

import React from 'react';
import { Urbanist } from 'next/font/google';
import Sidebar from '../../components/sideBar'
import { CalendarCheck, Hospital, User, Utensils } from 'lucide-react';

const font = Urbanist({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBarOpen, setSideBarOpen] = React.useState(true);

  const items = [
    { label: 'Perfil', href: '/profile', icon: <User /> },
    { label: 'Agenda', href: '/agenda', icon: <CalendarCheck /> },
    { label: 'Dieta', href: '/dieta', icon: <Utensils /> },
    { label: 'Registros medicos', href: '/registros', icon: <Hospital /> },
  ];


  return (
    <html lang="en">
      <body className={`${font.className}, flex gap-2 w-full bg-mediumBlue`}>
        <main className="flex w-full h-full">
          <div 
            className={`w-${sideBarOpen ? '[250px]' : '[64px]'}`}
            style={{ width: sideBarOpen ? '250px' : '64px', transition: 'width 0.5s' }}
          >
            <Sidebar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} items={items} />
          </div>
          <div className="min-h-screen h-full w-[100%] bg-mediumBlue">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}