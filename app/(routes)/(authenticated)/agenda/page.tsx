import React from 'react'
import Calendar from '@/app/components/calendar';
import ScheduleCard from '@/app/components/ScheduleCard';

const Agenda = () => {
    return (
        <div className="flex flex-col gap-5 py-8">
            <div className='w-full flex justify-around items-start'>

                <div className='h-full w-[500px]'>   
                    <Calendar />
                </div>

                <div className='h-full flex flex-col justify-center items-center'>
                    <p className='text-3xl text-white'>Eventos do dia:</p>

                    <div className='flex flex-col gap-4 mt-8'>
                        <ScheduleCard title='Treino de controle de bola' data='Horário: 15:00 /  16:00'/>
                        <ScheduleCard title='Treino de penalti' data='Horário: 9:00 /  10:00'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agenda;
