import React from 'react';

interface SeparatorProps {
  width?: string; // Propriedade opcional para a largura do Separator
}

const Separator = ({ width }: SeparatorProps) => {
  const separatorWidth = width || '80%'; // Verifica se a propriedade width foi fornecida, caso contrário, usa 80% como padrão

  return (
    <div className='h-[2px] bg-white' style={{ width: separatorWidth }} />
  );
}

export default Separator;
