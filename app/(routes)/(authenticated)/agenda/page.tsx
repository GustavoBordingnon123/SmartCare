import React from 'react'
import Calendar from '@/app/components/calendar';

const Agenda = () => {
    return (
        <div className="flex flex-col gap-5 ml-10 py-8">
            <div className='bg-green w-[95%] flex justify-around'>

                <div className='w-[500px]'>   
                    <Calendar />
                </div>

                <div className='h-full flex flex-col justify-center'>
                    <p>Eventos do dia</p>
                </div>
            </div>
        </div>
    )
}

export default Agenda;
