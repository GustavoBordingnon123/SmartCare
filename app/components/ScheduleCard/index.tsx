import { Maximize2, Trophy } from "lucide-react";


interface ScheduleCardProps {
    title: string;
    data: string;
}

const ScheduleCard = ({ title, data }: ScheduleCardProps) => {
    return(
       <div className="bg-darkGreen p-4 flex flex-col gap-3 w-[300px] rounded-lg">
            <div className="flex justify-between w-full">
                <Trophy size={20} className="text-white"/>
                <Maximize2 size={20} className="text-white cursor-pointer hover:text-green hover:font-extrabold" />
            </div>
            <div>
                <p className="text-white text-xl">{title}</p>
            </div>
            <div>
                <p className="text-white text-md">{data}</p>
            </div>
       </div>
    );
}

export default ScheduleCard;