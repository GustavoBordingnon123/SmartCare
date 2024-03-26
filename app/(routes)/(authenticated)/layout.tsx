import React from 'react'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Logo from '@/public/logo.png'
import Image from 'next/image'


import Sidebar from '../../components/sideBar'


const font = Urbanist({ subsets: ['latin'] })


export const metadata: Metadata = {
    title: 'SmartCare',
    description: 'site para acompanhamento de saude e bem estar',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={`${font.className}, flex gap-2 w-full bg-mediumBlue`}>
         
            <main className='flex w-full h-full'>  

              <div className='h-full w-64'> 
                  <Sidebar />
              </div>

              <div className='min-h-screen h-full w-[100%] bg-mediumBlue'>
                {children}
              </div>

            </main>
          
        </body>
      </html>
    )
}