import React from 'react';

interface SelectProps {
    label: string;
    options: string[];
}

const Select: React.FC<SelectProps> = ({ label,options }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className='text-white text-lg'> {label} </label>
      <select className='w-full shadow-lg border-0 bg-green color-white'>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
