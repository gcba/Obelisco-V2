'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';

import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';


// const basePath = '/Obelisco-V2';

const ApiComponents: React.FC = () => {
  const SECTION_UX = [
    {
      title: 'Uso',
      firstTitle: true,
      content: (
        <>
          <div className="list-informative">
            <p className="text-xl">Cuándo usar</p>
            <div className="list-informative">
              <ul className="list-informative-bullet">
                <li>Para crear una cuenta o iniciar sesión.</li>
                <li>Para registrarse en un servicio, programa o beneficio.</li>
                <li>Para solicitar turnos o inscribirse en actividades. </li>
                <li>Para completar una transacción.</li>
                <li>Para configurar o modificar preferencias y datos de perfil.</li>
                <li>Para responder encuestas de feedback. </li>
              </ul>
            </div>
          </div>
        </>
      ),
    }
  ];

  return (
    <>
      <ComponentHeader
        title="api"
        description={[
          'Los formularios permiten a las personas interactuar con el sistema, ingresando, editando o confirmando información. Un diseño claro y ordenado facilita la comprensión de cada paso y ayuda a completar las tareas sin fricción.'
        ]}
      />
      <Tabs
        sectionUx={SECTION_UX}
      />
    </>
  );
};

export default ApiComponents;
