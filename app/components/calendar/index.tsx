"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    useEffect(() => {
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    }, [currentDate, selectedDay]); 

    const currentMonth = () => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthNames[currentDate.getMonth()];
    };

    function generateCalendar(year: number, month: number) {
        const calendarDays: JSX.Element[] = [];

        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const firstDayOfWeek = firstDayOfMonth.getDay();

        for (let i = 0; i < firstDayOfWeek; i++) {
            calendarDays.push(<div key={`empty_${i}`} className="text-center py-2 shadow-lg rounded-lg"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isSelectedDay = day === selectedDay;

            let dayClasses = 'text-center py-2 shadow-lg cursor-pointer rounded-lg';
            if (isSelectedDay) {
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
        setSelectedDay(null);
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, prevDate.getDate()));
        setSelectedDay(null);
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
