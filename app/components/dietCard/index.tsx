import Separator from "@/app/components/ui/separator";
import { EggFried, UtensilsCrossed } from "lucide-react";
import Line from '@/public/linha.png'
import Image from 'next/image'

interface DietCardProps {
    title: string;
    text: string[];
}

const DietCard = ({ title, text }: DietCardProps) => {
    return (
        <div className="flex flex-col bg-[#4CAF50] p-2 w-[80%] rounded-md">

            <div className="flex justify-between w-full">
             <UtensilsCrossed size={32}  color="white" className="relative right-4 bottom-4 rotate-12"/>
             <UtensilsCrossed size={32}  color="white" className="relative left-4 bottom-4 rotate-[-12deg]"/>
            </div>
            

            <p className="text-white text-2xl w-full text-center mb-4 font-extrabold">{title}</p>

            {text.map((item, index) => (
                <p key={index} className="text-white text-lg w-full text-center my-2">{item}</p> 
            ))}

            <div className="flex gap-2 justify-center items-center mt-4">
                <Separator />
                <div className="bg-[#035142] flex justify-center items-center h-16 w-32 rounded-full">
                    <EggFried size={32} color="white"/>
                </div>
                <Separator />
            </div>

            <div className="flex justify-between w-full h-1">
             <UtensilsCrossed size={32}  color="white" className="relative right-4 bottom-2 rotate-12"/>
             <UtensilsCrossed size={32}  color="white" className="relative left-4 bottom-2 rotate-[-12deg]"/>
            </div>

        </div>
    );
};

export default DietCard;
