// import Image from 'next/image';
import React from 'react';
const basePath = '/Obelisco-V2';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
// import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { LINK_DEFAULT } from './code-views';

const InstitutionalBlockDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Predeterminado',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={LINK_DEFAULT}>
            <div className="bloque-institucional">
              <img
                src={`${basePath}/images/bloque_institucional/avatar_autoridad.svg`}
                alt="Avatar de la autoridad"
                className="bloque-institucional-img"
              />
              <div className="bloque-institucional-body">
                <div className="bloque-institucional-autoridad">
                  <h4>Raúl Piola</h4>
                  <p className="text-xl">Secretario de Innovación y Transformación Digital</p>
                </div>
                <div className="bloque-institucional-contacto">
                  <p className="headline-lg">Contacto</p>
                  <p className="text-md">Teléfono: 4323-9380 (int. 4011)</p>
                  <p className="text-md">Correo electrónico: rpiola@buenosaires.gob.ar </p>
                </div>
                <div className="bloque-institucional-redes">
                  <p className="headline-lg">Seguinos en redes</p>
                  <div className="iconos-redes">
                    <i className="o-icon bxl bx-facebook"></i>
                    <i className="o-icon bxl bx-facebook"></i>
                    <i className="o-icon bxl bx-facebook"></i>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Bloque institucional"
        description={[
          'El bloque institucional contiene información de la persona responsable del Ministerio, Secretaría u organismo. Se emplea en las plantillas de páginas de nivel 1 y 2.',
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default InstitutionalBlockDocs;
