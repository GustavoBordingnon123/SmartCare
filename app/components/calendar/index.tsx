"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    useEffect(() => {
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    }, [currentDate, selectedDay]); // Adicionei selectedDay aqui para re-renderizar quando o dia selecionado mudar

    const currentMonth = () => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthNames[currentDate.getMonth()];
    };

    function generateCalendar(year: number, month: number) {
        const calendarDays: JSX.Element[] = [];

        // Crie um objeto de data para o primeiro dia do mês especificado
        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Calcule o dia da semana para o primeiro dia do mês (0 - Domingo, 1 - Segunda-feira, ..., 6 - Sábado)
        const firstDayOfWeek = firstDayOfMonth.getDay();

        // Crie caixas vazias para os dias antes do primeiro dia do mês
        for (let i = 0; i < firstDayOfWeek; i++) {
            calendarDays.push(<div key={`empty_${i}`} className="text-center py-2 border"></div>);
        }

        // Crie caixas para cada dia do mês
        for (let day = 1; day <= daysInMonth; day++) {
            const isCurrentDay = year === currentDate.getFullYear() && month === currentDate.getMonth() && day === currentDate.getDate();
            const isSelectedDay = day === selectedDay;

            let dayClasses = 'text-center py-2 border cursor-pointer';
            if (isSelectedDay) {
                dayClasses += ' bg-green text-white';
            } else if (isCurrentDay) {
                dayClasses += ' bg-green text-white';
            }

            calendarDays.push(
                <div key={`day_${day}`} className={dayClasses} onClick={() => setSelectedDay(day)}>
                    {day}
                </div>
            );
        }

        return calendarDays;
    }

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, prevDate.getDate()));
        setSelectedDay(null); // Resetar o dia selecionado ao mudar de mês
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, prevDate.getDate()));
        setSelectedDay(null); // Resetar o dia selecionado ao mudar de mês
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="lg:w-full md:w-9/12 sm:w-10/12  p-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-3 bg-darkGreen">
                        <button onClick={handlePrevMonth} className="text-white flex gap-2 select-none">
                            <ChevronLeft /> Previous
                        </button>
                        <h2 className="text-white">{currentMonth()} {currentDate.getFullYear()}</h2>
                        <button onClick={handleNextMonth} className="text-white flex gap-2 select-none">
                            Next <ChevronRight />
                        </button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 p-4" id="calendar">
                        {generateCalendar(currentDate.getFullYear(), currentDate.getMonth())}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;

