"use client";

import { Check, X } from "lucide-react";
import React, { useState } from "react";

interface InputProps {
    label: string;
    placeholder: string;
    regex?: RegExp;
    labelColor?: string;
}

const Input = ({ label, placeholder, regex}: InputProps) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isRegexValid, setIsRegexValid] = useState<boolean>(false);
    const [isValidating, setIsValidating] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(value);

        if (regex) {
            setIsValidating(true);
            setIsRegexValid(regex.test(value));
        } else {
            setIsValidating(false);
        }
    };

    return (
        <div className="flex flex-col gap-2 w-[80%]">
            <label htmlFor={label} className={`
                 ${isValidating && isRegexValid ? "text-emerald-500" : isValidating ? "text-red-500" : "text-white"}
            `}>
                {label}
            </label>
            <div className="flex w-full gap-2 ">
                <input
                    id={label}
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleChange}
                    className={`bg-transparent w-full rounded-md py-1 px-2 text-black border-2 focus:outline-none 
                        ${isValidating && isRegexValid ? "border-emerald-500" : isValidating ? "border-red-500" : "border-white"}
                        ${isValidating && isRegexValid ? "text-emerald-500" : isValidating ? "text-red-500" : "text-white"}
                        ${isValidating && isRegexValid ? "focus: border-emerald-500" : isValidating ? "focus: border-red-500" : "none"}
                        `}
                />
                {isValidating && isRegexValid ? (
                    <Check size={32} className="relative right-12 top-[2px] text-emerald-500" />
                ) : isValidating ? (
                    <X size={32} className="relative right-12 top-[2px] text-red-500" />
                ) : <X size={32} className="opacity-0" />}
            </div>
        </div>
    );
};

export default Input;
