import React from 'react'
import Kawan from '@/public/kawan.jpg';

import Button from '@/app/components/ui/separator/button'
import Separator from '@/app/components/ui/separator'


import { Pencil, TriangleAlert } from 'lucide-react';
import InputField from '@/app/components/ui/separator/inputNew';
 
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
      <div className="flex flex-col gap-5 ml-10 py-8">

          <div className='flex gap-5 justify-center items-center'>

            <div 
              className='flex justify-center items-center bg-white h-32 w-32 rounded-full'
              style={{ backgroundImage: `url(${Kawan.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            

            {/* <Input label='Seu nome' placeholder='Edite aqui seu nome...' labelColor='white' /> */}

          </div>

          <div className='my-10 h-full flex flex-col gap-5 justify-center  items-center'>

            <p className='text-3xl text-white'>Dados pessoais:</p>
          
            <Separator  width='300px'/>

            {inputCampos.map((opcao, index) => (
              <InputField label={opcao.text} />
            ))}

            <Separator  width='300px'/>

          </div>

          <div className='flex flex-col gap-5  items-center'>

            <Button text='Salvar Mudanças' href='/profile' icon={<Pencil color='white'/>}/>

            <Button text='Excluir conta' href='/profile' type='danger' icon={<TriangleAlert color='white'/>}/>

          </div>

         
      </div>
    )
}

export default Profile
