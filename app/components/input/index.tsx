interface inputProps{
    label:string
    placeholder: string
}


const Input = ({label,placeholder}:inputProps) => {
    return(

        <div className="flex flex-col gap-1">

            <label htmlFor={label} className="text-black">{label  + ":"}</label>

            <input 
                id={label} 
                placeholder={placeholder} 
                className="bg-[#D9D9D9] w-[300px] rounded-md py-1 px-2 text-black" 
            />

        </div>

    );
}

export default Input;