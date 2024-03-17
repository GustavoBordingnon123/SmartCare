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

    const buttonClasses = `text-center py-2 hover:opacity-50 w-[300px] rounded-md cursor-pointer uppercase text-white ${
        type === 'danger' ? 'bg-red-500' : type === 'success' ? 'bg-green-500' : 'bg-[#4CAF50]'
    }`;

    const handleClick = () => {
        if (href) {
            router.push(href);
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <a className={`${buttonClasses} flex items-center justify-center gap-2`} onClick={handleClick}>
            {icon}
            {text}
        </a>
    );
};

export default Button;
