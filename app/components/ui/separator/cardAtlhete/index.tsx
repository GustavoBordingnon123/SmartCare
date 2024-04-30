import Kawan from '@/public/kawan.jpg';

import Button from '@/app/components/ui/separator/button'

interface CardAtlheteProps {
    name: string;
    onClick: () => void;
}

const CardAtlhete = ({ name, onClick }: CardAtlheteProps) => {

   
    return (
        <div 
        className="
            flex flex-col w-[250px] h-[300px] bg-white rounded-xl user-none cursor-pointer
            transition-transform duration-300 transform hover:translate-y-[-10px]"
        >
            
            <div className="bg-darkGreen w-[250px] h-[120px] rounded-t-lg absolute"/>

            <div className="flex flex-col justify-center items-center relative top-8 gap-5">

                <div 
                    className='flex justify-center items-center bg-white h-32 w-32 rounded-full border-[5px] border-white shadow-2xl'
                    style={{ backgroundImage: `url(${Kawan.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />

                <p className='text-2xl text-[#7D828C] font-bold'>{name}</p>

                <Button text='ver dados' onClick={onClick}/>


            </div>

        </div>
    );
};

export default CardAtlhete;
