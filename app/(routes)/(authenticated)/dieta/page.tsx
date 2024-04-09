import React from 'react';
import DietCard from '@/app/components/dietCard';
import Separator from '@/app/components/ui/separator';

const Dieta = () => {
  // Opções para o café da manhã
  const cafeDaManhaOpcoes = [
    {
      title: 'Opção 1',
      text: [
        '1 iogurte',
        '4 colheres de sopa de granola + 1 colher de uva passa + 1 colher de pasta de amendoim + 1-2 frutas picadas',
        '1 xícara de café'
      ]
    },
    {
      title: 'Opção 2',
      text: [
        '1 ovo cozido',
        '2 fatias de pão integral',
        '1 banana',
        '1 xícara de chá verde'
      ]
    },
    {
      title: 'Opção 3',
      text: [
        '1 copo de suco de laranja natural',
        '2 fatias de queijo branco',
        '2 fatias de presunto magro',
        '1 torrada integral'
      ]
    }
  ];

  // Opções para o almoço
  const almocoOpcoes = [
    {
      title: 'Almoço 1',
      text: [
        'Salada de folhas verdes com tomate e cenoura ralada',
        'Arroz integral',
        'Feijão',
        'Filé de frango grelhado',
        '1 copo de suco de abacaxi'
      ]
    },
    {
      title: 'Almoço 2',
      text: [
        'Salada de alface, rúcula e agrião',
        'Purê de batata-doce',
        'Peixe assado',
        '1 fatia de melancia'
      ]
    },
    {
      title: 'Almoço 3',
      text: [
        'Salada de repolho roxo e cenoura ralada',
        'Macarrão integral ao sugo',
        'Carne moída refogada',
        '1 pêssego'
      ]
    }
  ];

  // Opções para o jantar
  const jantaOpcoes = [
    {
      title: 'Jantar 1',
      text: [
        'Sopa de legumes',
        'Sanduíche de peito de peru com queijo branco',
        '1 maçã'
      ]
    },
    {
      title: 'Jantar 2',
      text: [
        'Salada de tomate e pepino',
        'Frango assado com batatas',
        '1 pera'
      ]
    },
    {
      title: 'Jantar 3',
      text: [
        'Salada de folhas verdes',
        'Omelete de cogumelos',
        '1 fatia de abacaxi'
      ]
    }
  ];

  return (
    <div className="flex justify-center flex-col gap-5 py-8 w-full">
      {/* Café da manhã */}
      <div className='flex items-center flex-col gap-8 mt-16 w-full'>
        <p className='text-3xl text-white font-extrabold'>Café da manhã</p>
        <Separator />
        <div className='flex items-center flex-col gap-8 mt-16 w-full'>
          {cafeDaManhaOpcoes.map((opcao, index) => (
            <DietCard key={index} title={opcao.title} text={opcao.text} />
          ))}
        </div>
      </div>

      {/* Almoço */}
      <div className='flex items-center flex-col gap-8 mt-16 w-full'>
        <p className='text-3xl text-white font-extrabold'>Almoço</p>
        <Separator />
        <div className='flex items-center flex-col gap-8 mt-16 w-full'>
          {almocoOpcoes.map((opcao, index) => (
            <DietCard key={index} title={opcao.title} text={opcao.text} />
          ))}
        </div>
      </div>

      {/* Jantar */}
      <div className='flex items-center flex-col gap-8 mt-16 w-full'>
        <p className='text-3xl text-white font-extrabold'>Jantar</p>
        <Separator />
        <div className='flex items-center flex-col gap-8 mt-16 w-full'>
          {jantaOpcoes.map((opcao, index) => (
            <DietCard key={index} title={opcao.title} text={opcao.text} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Dieta;
