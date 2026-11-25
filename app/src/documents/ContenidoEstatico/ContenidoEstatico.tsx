// import Image from 'next/image';
import React from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// const basePath = '/Obelisco-V2';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

// import LinkClient from '../../components/LinkClient/index';
import { CONTENIDO_ESTATICO_3_COLS, CONTENIDO_ESTATICO_2_COLS } from './code-views';

const SECTIONS_DEV = [
  {
    title: 'Tres columnas',
    firstTitle: true,
    content: (
      <CodeBox codeHTML={CONTENIDO_ESTATICO_2_COLS}>
        <div className="container">
          <div className="box-sizing-static-content">
            <div className="static-content-items-2">
              <div className="col">
                <div className="static-content card unbordered">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    info
                  </span>
                  <p className="headline-lg">Este es el título del componente</p>
                  <p className="text-md">
                    Este un texto de prueba para representar la bajada del componente. El mismo no tiene una cantidad
                    mínima ni máxima de caracteres pero la sugerencia es 230.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="static-content card unbordered">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    info
                  </span>
                  <p className="headline-lg">Este es el título del componente</p>
                  <p className="text-md">
                    Este un texto de prueba para representar la bajada del componente. El mismo no tiene una cantidad
                    mínima ni máxima de caracteres pero la sugerencia es 230.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Dos columnas',
    content: (
      <CodeBox codeHTML={CONTENIDO_ESTATICO_3_COLS}>
        <div className="container">
          <div className="box-sizing-static-content">
            <div className="static-content-items-3">
              <div className="col">
                <div className="static-content card unbordered">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    info
                  </span>
                  <p className="headline-lg">Este es el título del componente</p>
                  <p className="text-md">
                    Este un texto de prueba para representar la bajada del componente. El mismo no tiene una cantidad
                    mínima ni máxima de caracteres pero la sugerencia es 230.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="static-content card unbordered">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    info
                  </span>
                  <p className="headline-lg">Este es el título del componente</p>
                  <p className="text-md">
                    Este un texto de prueba para representar la bajada del componente. El mismo no tiene una cantidad
                    mínima ni máxima de caracteres pero la sugerencia es 230.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="static-content card unbordered">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    info
                  </span>
                  <p className="headline-lg">Este es el título del componente</p>
                  <p className="text-md">
                    Este un texto de prueba para representar la bajada del componente. El mismo no tiene una cantidad
                    mínima ni máxima de caracteres pero la sugerencia es 230.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
];

const ContenidoEstaticoDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Contenido Estático"
        description={[
          'Los accesos funcionan como puntos de ingreso a diferentes secciones y pueden agruparse cuando hay una similitud en su contenido.',
        ]}
      />
      <Tabs
        sectionDev={SECTIONS_DEV}
        // sectionUx={SECTION_UX}
        // customSections={[
        //   {
        //     title: 'Especificaciones',
        //     id: 'section-specs',
        //     sectionContent: SPECS,
        //   },
        //   {
        //     title: 'Accesibilidad',
        //     id: 'accessibility',
        //     sectionContent: ACCESSIBILITY,
        //   },
        // ]}
      />
    </>
  );
};

export default ContenidoEstaticoDocs;
