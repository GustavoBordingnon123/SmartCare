"use client";

import { Check, X } from "lucide-react";
import React, { useState } from "react";

interface InputProps {
    label: string;
    placeholder: string;
    regex?: RegExp;
    icon?:any;
    labelColor?: string;
}

const Input = ({ label, placeholder, regex, labelColor = "black" }: InputProps) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(value);

        if (regex) {
            setIsValid(regex.test(value));
        }
        
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={label} className={`text-${labelColor}`}>
                {label}
            </label>
            <div className="flex w-full gap-2">
                <input
                    id={label}
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleChange}
                    className={`bg-[#D9D9D9] w-[80%] rounded-md py-1 px-2 text-black border-2 ${
                        !isValid ? "border-red-500" : "border-none"
                    }`}
                />
                {!isValid ? (
                    <X  size={32} className="relative right-12 top-[2px] text-red-500"/>
                ): (
                    <Check  size={32} className="relative right-12 top-[2px] text-emerald-500"/>
                )
                }   
            </div>
        
        </div>
    );
};

export default Input;
