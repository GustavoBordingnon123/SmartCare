interface InputProps {
    label: string;
    placeholder: string;
    labelColor?: string;
}

const Input = ({ label, placeholder, labelColor = "black" }: InputProps) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={label} className={`text-${labelColor}`}>
                {label + ":"}
            </label>
            <input
                id={label}
                placeholder={placeholder}
                className="bg-[#D9D9D9] w-[300px] rounded-md py-1 px-2 text-black"
            />
        </div>
    );
};

export default Input;
