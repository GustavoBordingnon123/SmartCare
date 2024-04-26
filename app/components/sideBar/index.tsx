import React, { useState } from 'react';
import { usePathname } from "next/navigation";
import { User, Utensils, CalendarCheck, Hospital, ChevronLeft, Sun, Moon, ChevronRight } from 'lucide-react';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import Switch from '../ui/separator/Switch';
import useSwitchStore from '@/hooks/useSwitchStore'; 

import Kawan from '@/public/kawan.jpg';

interface SideBarProps {
  setSideBarOpen:any;
  sideBarOpen: boolean;
  items: any;
}

const SideBar = ({ setSideBarOpen, sideBarOpen, items }: SideBarProps) => {
  const pathname = usePathname();
  const { toggle, setToggle } = useSwitchStore();
  
  // const items = [
  //   { label: 'Perfil', href: '/profile', icon: <User /> },
  //   { label: 'Agenda', href: '/agenda', icon: <CalendarCheck /> },
  //   { label: 'Dieta', href: '/dieta', icon: <Utensils /> },
  //   { label: 'Registros medicos', href: '/registros', icon: <Hospital /> },
  // ];
  
  const SideBarBgColor = toggle ? 'bg-darkBlue' : 'bg-yellow';
  const borderColor = toggle ? 'border-darkBlue-100' : 'border-yellow-100';
  const textColor = toggle ? 'text-gray' : 'text-yellow-200';
  const activeColor = toggle ? 'text-[#4CAF50]' : 'text-white';

  const toggleSidebar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <nav 
      className={`h-full ${SideBarBgColor} fixed flex flex-col px-2 z-50 $`}
      style={{ width: sideBarOpen ? '250px' : '64px', transition: 'width 0.5s' }}
    >
      <div className='h-full'>
        <div 
          className={`w-full h-[${sideBarOpen ? 14 : 8}] border-b ${borderColor} flex justify-between items-center px-2 py-8`}
        >
          <Image
            src={Logo}
            alt='logo'
            height={50}
            className={`${sideBarOpen ? '' : 'hidden'} `}
          />

          
          {sideBarOpen && (
            <ChevronLeft color='gray' className='cursor-pointer' onClick={toggleSidebar} />
          )}

          {!sideBarOpen && (
            <ChevronRight color='gray' className='cursor-pointer' onClick={toggleSidebar} />
          )}
        </div>

        <div className={`w-full border-b ${borderColor} px-2 py-4`}>
          <p className={`text-xl ${textColor}  ${sideBarOpen ? '' : 'hidden'} mb-4 font-bold`}>User</p>
          <div className='flex gap-2 w-full items-center'>
            <div className={`h-12 w-12 rounded-full ${sideBarOpen ? '' : 'w-8'} ${sideBarOpen ? '' : 'h-8'}`}  
              style={{ backgroundImage: `url(${Kawan.src})`, 
              backgroundSize: 'cover', backgroundPosition: 'center' 
            }}/>
            <p className={`${textColor} ${sideBarOpen ? '' : 'hidden'} text-md `}>Kawan Brito</p> 
          </div>
        </div>

        <div className={`w-full border-b ${borderColor} px-2 py-4`}>
          <p className={`text-xl ${textColor} ${sideBarOpen ? '' : 'hidden'} mb-4 font-bold `}>Overview</p>
          <ul className='flex flex-col gap-5'>
            {items.map((item:any, index:any) => (
              <li key={index} className=''>
                <a href={item.href} className={`flex gap-2 cursor-pointer hover:text-[#4CAF50] ${pathname === item.href ? `${activeColor}` : `${textColor}`}`}>
                  {item.icon}
                  <span className={`${sideBarOpen ? '' : 'hidden'} text-md`	}>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {sideBarOpen && (
          <div className='w-full h-[50%] flex justify-start items-end px-2 py-4'>
            <div className='flex gap-2 w-full '>
              <Moon color='#0E3043' />
              <Switch />
              <Sun color='#F9C341' />
            </div>
          </div>
        )}

        {!sideBarOpen && (
          <div className='w-full h-[62.5%] flex justify-start items-end px-2 py-4'>
            <div className='flex gap-2 w-full '>
              {toggle && <Sun color='#F9C341' onClick={() => setToggle(!toggle)} />}
              {!toggle && <Moon color='#0E3043'  onClick={() => setToggle(!toggle)} />}
            </div>
          </div>
        )}
      </div>
      
    </nav>
  );
};

export default SideBar;
