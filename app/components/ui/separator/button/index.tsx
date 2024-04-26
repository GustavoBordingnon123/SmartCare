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

const Button = ({ text, width, onClick, href, type = 'default', icon,  }: ButtonProps) => {
    const router = useRouter();

    const buttonClasses = `text-white ${
        type === 'danger' ? 'bg-red-500' : type === 'success' ? 'bg-green' : 'bg-[#4CAF50]'
    }`;
    
    const handleClick = () => {
        if (href) {
            router.push(href);
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <a
         className={`
            ${buttonClasses} overflow-hidden min-w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold
            cursor-pointer relative z-10 group text-center flex gap-2 justify-center hover:opacity-[0.8]`
          }
         onClick={handleClick}
        >
        {text}
        {icon}
      </a>
      
      
    );
};

export default Button;