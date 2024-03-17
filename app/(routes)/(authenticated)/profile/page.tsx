import React from 'react'
import Image from 'next/image'
import Kawan from '@/public/kawan.jpg';

import Button from '@/app/components/button'
import Input from '@/app/components/input'
import Navbar from '@/app/components/navbar'
import Separator from '@/app/components/separator'


import { Pencil, TriangleAlert } from 'lucide-react';
 
const Profile = () => {

    return (
      <div className="min-h-screen min-w-screen flex flex-col pt-[10%] gap-5 ml-10">

          <div className='flex gap-5 items-center'>

            <div 
              className='flex justify-center items-center bg-white h-[80px] w-[80px] rounded-full'
              style={{ backgroundImage: `url(${Kawan.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            

            <Input label='Seu nome' placeholder='Edite aqui seu nome...' labelColor='white' />

          </div>

          <div className='my-10 h-full flex flex-col gap-5 justify-center'>

            <p className='text-3xl text-white'>Dados pessoais:</p>

            <Separator />

            <Input label='Seu nome' placeholder='Edite aqui seu nome...' labelColor='white' />

            <Input label='Seu Email' placeholder='Edite aqui seu email...' labelColor='white' />

            <Input label='Seu cpf' placeholder='Edite aqui seu cpf...' labelColor='white' />

            <Input label='Sua senha' placeholder='Edite aqui sua senha...' labelColor='white' />

            <Separator />

          </div>

          <div className='flex flex-col gap-5'>

            <Button text='Salvar Mudanças' href='/profile' icon={<Pencil color='white'/>}/>

            <Button text='Excluir conta' href='/profile' type='danger' icon={<TriangleAlert color='white'/>}/>

          </div>

         
      </div>
    )
}

export default Profile
