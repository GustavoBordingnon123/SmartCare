interface ButtonProps{
    text:string
    width:number
}


const Button = ({text,width}:ButtonProps) => {
    return(

        <a className=
        {`w-full bg-[#4CAF50] text-center py-1 hover:opacity-50 w-[${width}px] rounded-md cursor-pointer uppercase`}>
            {text}
        </a>


    );
}

export default Button;