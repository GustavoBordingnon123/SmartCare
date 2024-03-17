"use client";

import React from 'react';
import { usePathname, useRouter } from "next/navigation";
import { User, Utensils, CalendarCheck, Hospital } from 'lucide-react';

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const items = [
        { label: 'Perfil', href: '/profile', icon: <User /> },
        { label: 'Agenda', href: '/agenda', icon: <CalendarCheck /> },
        { label: 'Dieta', href: '/dieta', icon: <Utensils /> },
        { label: 'Registros medicos', href: '/registros', icon: <Hospital /> },
    ];

    return (
        <nav>
            <ul className='flex flex-col gap-5'>
                {items.map((item, index) => (
                    <li key={index} className='w-52 pl-4 border-b-2 border-white pb-5'>
                        <a href={item.href} className={`flex gap-2 ${pathname === item.href ? 'text-[#4CAF50]' : 'text-white'}`}>
                            {item.icon}
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
