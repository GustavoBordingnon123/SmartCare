"use client";

import React from 'react'

import Button from '@/app/components/ui/separator/button';
import Input from '@/app/components/ui/separator/input';

const Profile = () => {

    const inputCampos = [
      {
        text: 'Nome',
        regex: undefined
      },
      {
        text: 'Email',
        regex:undefined
      },
      {
        text: 'Cpf',
        regex:undefined
      },
      {
        text: 'Primeira senha',
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
      },
    ]

    return (
      <div className="flex flex-col gap-5 mx-10 py-8">

            <div className='flex gap-5 justify-start items-start ml-5'>
                <p className='text-3xl font-extrabold text-white'>Crie um novo atleta</p>
            </div>

            <div className='flex gap-5 flex-col justify-center items-start ml-5 mt-5 w-full'>
                {inputCampos.map((opcao, index) => (
                  <Input 
                    label={`${opcao.text}`} 
                    placeholder={`${opcao.text}`} 
                    regex={opcao.regex} 
                    labelColor='white' 
                  />
                ))}

                <Button text='Criar' href='/adm/athletes'/>
            </div>

      </div>
    )
}

export default Profile
