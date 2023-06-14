import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const TechSection = () => {
  return (
    <section>
      <h2>Tecnologias</h2>
      <div>
        <FaReact size={50} />
        <FaNodeJs size={50} />
        <FaDatabase size={50} />
        {/* Adicione mais ícones de acordo com as tecnologias que deseja mostrar */}
      </div>
    </section>
  );
};

export default TechSection;