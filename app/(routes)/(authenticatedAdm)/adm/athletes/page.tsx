import React from 'react'
import Kawan from '@/public/kawan.jpg';

import Button from '@/app/components/ui/separator/button'
import Separator from '@/app/components/ui/separator'


import { Pencil, Plus, TriangleAlert } from 'lucide-react';
import InputField from '@/app/components/ui/separator/inputNew';
import CardAtlhete from '@/app/components/ui/separator/cardAtlhete';
 
const Profile = () => {

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
    ]

    return (
      <div className="flex flex-col gap-5 mx-10 py-8">

          <div className='flex gap-5 justify-between items-start ml-5'>
                <p className='text-3xl font-extrabold text-white'>Seus atletas</p>
                <Button text='Adicionar atleta' href='/adm/newAthlete' icon={<Plus size={32} color='white'/>}/>
          </div>
         
         <div className='flex gap-8 flex-wrap items-start ml-5 w-full'>
            <CardAtlhete name='kawan brito' />
            <CardAtlhete name='kawan brito' />
            <CardAtlhete name='kawan brito' />
            <CardAtlhete name='kawan brito' />
         </div>

      </div>
    )
}

export default Profile
