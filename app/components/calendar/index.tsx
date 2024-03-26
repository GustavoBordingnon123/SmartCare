"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect } from 'react';

const Calendar: React.FC = () => {
    useEffect(() => {
        // Função para gerar o calendário para um mês e ano específicos
        function generateCalendar(year: number, month: number) {
            const calendarElement = document.getElementById('calendar') as HTMLDivElement;
            const currentMonthElement = document.getElementById('currentMonth') as HTMLDivElement;

            if (!calendarElement || !currentMonthElement) return;

            // Crie um objeto de data para o primeiro dia do mês especificado
            const firstDayOfMonth = new Date(year, month, 1);
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // Limpe o calendário
            calendarElement.innerHTML = '';

            // Defina o texto do mês atual
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            currentMonthElement.innerText = `${monthNames[month]} ${year}`;

            // Calcule o dia da semana para o primeiro dia do mês (0 - Domingo, 1 - Segunda-feira, ..., 6 - Sábado)
            const firstDayOfWeek = firstDayOfMonth.getDay();

            // Crie cabeçalhos para os dias da semana
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            daysOfWeek.forEach(day => {
                const dayElement = document.createElement('div');
                dayElement.className = 'text-center font-semibold';
                dayElement.innerText = day;
                calendarElement.appendChild(dayElement);
            });

            // Crie caixas vazias para os dias antes do primeiro dia do mês
            for (let i = 0; i < firstDayOfWeek; i++) {
                const emptyDayElement = document.createElement('div');
                calendarElement.appendChild(emptyDayElement);
            }

            // Crie caixas para cada dia do mês
            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'text-center py-2 border cursor-pointer';
                dayElement.innerText = day.toString();

                // Verifique se esta data é a data atual
                const currentDate = new Date();
                if (year === currentDate.getFullYear() && month === currentDate.getMonth() && day === currentDate.getDate()) {
                    dayElement.classList.add('bg-blue-500', 'text-white'); // Adicione classes para o indicador
                }

                calendarElement.appendChild(dayElement);
            }
        }

        // Inicialize o calendário com o mês e ano atuais
        const currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth();
        generateCalendar(currentYear, currentMonth);

        // Event listeners para os botões de mês anterior e próximo
        const prevMonthButton = document.getElementById('prevMonth') as HTMLButtonElement;
        const nextMonthButton = document.getElementById('nextMonth') as HTMLButtonElement;

        if (prevMonthButton && nextMonthButton) {
            prevMonthButton.addEventListener('click', () => {
                currentMonth--;
                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
                }
                generateCalendar(currentYear, currentMonth);
            });

            nextMonthButton.addEventListener('click', () => {
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
                generateCalendar(currentYear, currentMonth);
            });
        }

        // Função para mostrar o modal com a data selecionada
        function showModal(selectedDate: string) {
            const modal = document.getElementById('myModal') as HTMLDivElement;
            const modalDateElement = document.getElementById('modalDate') as HTMLDivElement;

            if (modal && modalDateElement) {
                modalDateElement.innerText = selectedDate;
                modal.classList.remove('hidden');
            }
        }

        // Função para ocultar o modal
        function hideModal() {
            const modal = document.getElementById('myModal') as HTMLDivElement;
            if (modal) modal.classList.add('hidden');
        }

        // Event listener para eventos de clique na data
        const dayElements = document.querySelectorAll('.cursor-pointer') as NodeListOf<HTMLDivElement>;
        dayElements.forEach(dayElement => {
            dayElement.addEventListener('click', () => {
                const day = parseInt(dayElement.innerText);
                const selectedDate = new Date(currentYear, currentMonth, day);
                const options: Intl.DateTimeFormatOptions = {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                };
                const formattedDate = selectedDate.toLocaleDateString(undefined, options);
                showModal(formattedDate);
            });
        });

        // Event listener para fechar o modal
        const closeModalButton = document.getElementById('closeModal') as HTMLButtonElement;
        if (closeModalButton) {
            closeModalButton.addEventListener('click', () => {
                hideModal();
            });
        }

        // Cleanup do useEffect
        return () => {
            // Remova os event listeners quando o componente for desmontado
            if (prevMonthButton) prevMonthButton.removeEventListener('click', () => {});
            if (nextMonthButton) nextMonthButton.removeEventListener('click', () => {});
            dayElements.forEach(dayElement => {
                dayElement.removeEventListener('click', () => {});
            });
            if (closeModalButton) closeModalButton.removeEventListener('click', () => {});
        };
    }, []);

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="lg:w-7/12 md:w-9/12 sm:w-10/12 mx-auto p-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-3 bg-darkGreen">
                        <button id="prevMonth" className="text-white flex gap-2">
                            <ChevronLeft /> Previous
                        </button>
                        <h2 id="currentMonth" className="text-white"></h2>
                        <button id="nextMonth" className="text-white  flex gap-2">
                            Next <ChevronRight /> 
                        </button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 p-4" id="calendar">
                        {/* Os Dias do Calendário Vão Aqui */}
                    </div>
                    <div id="myModal" className="modal hidden fixed inset-0 flex items-center justify-center z-50">
                        <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

                        <div className="modal-container bg-darkBlue w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                            <div className="flex justify-between items-center pb-3">
                                <p className="text-2xl font-bold">Selected Date</p>
                                <button id="closeModal" className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring">✕</button>
                            </div>
                            <div id="modalDate" className="text-xl font-semibold"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Calendar;
