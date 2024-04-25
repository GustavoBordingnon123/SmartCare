"use client";

import React, { useState } from "react";

interface InputProps {
    label: string;
    placeholder: string;
    regex?: RegExp;
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
        } else {
            setIsValid(true); 
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={label} className={`text-${labelColor}`}>
                {label}
            </label>
            <input
                id={label}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
                className={`bg-[#D9D9D9] w-[80%] rounded-md py-1 px-2 text-black border-2 ${
                    !isValid ? "border-red-500" : "border-none"
                }`}
            />
        </div>
    );
};

export default Input;
