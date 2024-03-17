import React from 'react'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Logo from '@/public/logo.png'
import Image from 'next/image'


import Navbar from '../../components/navbar'


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
        <body className={`${font.className}, flex gap-2 w-full`}>
         
            <main className='flex w-full'>  

              <div className='pl-20 pt-10 flex flex-col gap-20'> 
                  <Image
                      src={Logo}
                      alt='logo' 
                      height={70}
                  />
                  
                  <Navbar />
              </div>

              <div className='h-screen w-[100%]'>
                {children}
              </div>

            </main>
          
        </body>
      </html>
    )
}