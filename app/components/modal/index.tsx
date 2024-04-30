import { X } from "lucide-react";
import Kawan from '@/public/kawan.jpg';
import useModalStore from "@/hooks/useModal";
import Select from "@/app/components/ui/separator/select";

const Modal = () => {

    const { toggle, setToggle } = useModalStore();

    const closeModal = () => {
        setToggle(!toggle);
    }

    const optionsDieta = ["ovo", "banana", "refri"];

    const optionsTreino = ["ovo", "banana", "refri"];

    return(
        <div className="w-[80%] h-[80%]  bg-darkGreen rounded-lg">
            <div 
                className="flex justify-center items-center bg-white rounded-full w-10 h-10 relative left-[94%] top-4" 
                onClick={closeModal}
            >
                <X size={28}  className="cursor-pointer text-darkGreen"/>
            </div>

            <div className="flex flex-col justify-center items-center w-full">

                <div className="flex flex-col items-center justify-center gap-2 ">
                    <div 
                        className='flex justify-center items-center bg-white h-36 w-36 rounded-full'
                        style={{ backgroundImage: `url(${Kawan.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                    <p className="text-3xl text-white font-bold">Kawan Brito</p>
                </div>

                <div className="flex flex-col gap-2 w-fit px-14 mt-8">

                    <p className="text-xl text-white">Email: <span>kawanzinho@gmail</span></p>
                    <p className="text-xl text-white">Cpf: <span>000.000.000-00</span></p>

                    <Select label="Selecione uma opcão de dieta"  options={optionsDieta} />   

                    <Select label="Selecione uma opcão de dieta"  options={optionsTreino} /> 
                </div>

            </div>

        </div>
    );
}

export default Modal;