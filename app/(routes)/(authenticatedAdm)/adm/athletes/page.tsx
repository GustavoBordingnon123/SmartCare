"use client";

import React from 'react';
import Kawan from '@/public/kawan.jpg';
import Button from '@/app/components/ui/separator/button';
import Separator from '@/app/components/ui/separator';
import { Pencil, Plus, TriangleAlert } from 'lucide-react';
import InputField from '@/app/components/ui/separator/inputNew';
import CardAtlhete from '@/app/components/ui/separator/cardAtlhete';
import useModal from '@/hooks/useModal';
import Modal from '@/app/components/modal';

const Profile = () => {
    const { toggle, setToggle } = useModal();

    const inputCampos = [
        {
            text: 'Kawan brito'
        },
        {
            text: 'kawanzinho@gmail.com'
        },
        {
            text: '124.222.576-56'
        },
        {
            text: '********'
        },
    ];

    const handleCardClick = () => {
        setToggle(!toggle); // Alterna entre verdadeiro e falso para abrir/fechar o modal
    };

    return (
        <div className="flex flex-col gap-5 mx-10 py-8">
            <div className='flex gap-5 justify-between items-start ml-5'>
                <p className='text-3xl font-extrabold text-white'>Seus atletas</p>
                <Button text='Adicionar atleta' href='/adm/newAthlete' icon={<Plus size={32} color='white'/>}/>
            </div>
            <div className='flex gap-8 flex-wrap items-start ml-5 w-full'>
                <CardAtlhete name='kawan brito' onClick={handleCardClick} />
                <CardAtlhete name='kawan brito' onClick={handleCardClick} />
                <CardAtlhete name='kawan brito' onClick={handleCardClick} />
                <CardAtlhete name='kawan brito' onClick={handleCardClick} />
                <CardAtlhete name='kawan brito' onClick={handleCardClick} />
            </div>
            {!toggle && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <Modal />
                </div>
            )}
        </div>
    );
};

export default Profile;
