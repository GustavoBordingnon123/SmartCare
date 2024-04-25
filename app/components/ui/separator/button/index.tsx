"use client"

import { useRouter } from 'next/navigation';

interface ButtonProps {
    text: string;
    width?: number;
    onClick?: () => void;
    href?: string;
    type?: 'default' | 'danger' | 'success';
    icon?: any;
}

const Button = ({ text, width, onClick, href, type = 'default', icon }: ButtonProps) => {
    const router = useRouter();

    const buttonClasses = `text-white ${
        type === 'danger' ? 'bg-red-500' : type === 'success' ? 'bg-green' : 'bg-[#4CAF50]'
    }`;

    const hoverToggle = `hover:bg-transparent hover:border-2 transition-colors duration-500 ${
        type === 'danger' ? 'hover:border-red-500' : type === 'success' ? 'hover:border-green-500' : 'hover:border-[#4CAF50]'
    }`

    const handleClick = () => {
        if (href) {
            router.push(href);
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <a
         className={`${buttonClasses} overflow-hidden w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group`}
         onClick={handleClick}
        >
        {text}
        {icon}
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
        ></span>
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
        ></span>
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
        ></span>
        <span
          className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
          >{text}</span>
      </a>
      
      
    );
};

export default Button;
