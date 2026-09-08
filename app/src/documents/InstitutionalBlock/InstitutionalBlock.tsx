// import Image from 'next/image';
import React from 'react';
const basePath = '/Obelisco-V2';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
// import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { BLOQUE_INSTITUCIONAL, BLOQUE_INSTITUCIONAL_SIN_MULTIMEDIA } from './code-views';

const ZoomContainer = ({ children }: React.PropsWithChildren) => <div style={{ zoom: 0.5 }}>{children}</div>;

const InstitutionalBlockDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Predeterminado',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={BLOQUE_INSTITUCIONAL}>
            <div className="container">
              <ZoomContainer>
                <div className="bloque-institucional">
                  <img
                    src={`${basePath}/images/bloque_institucional/avatar_autoridad.svg`}
                    alt="Avatar de la autoridad"
                    className="bloque-institucional-img"
                  />
                  <div className="bloque-institucional-body">
                    <div className="bloque-institucional-autoridad">
                      <h4>Nombre y apellido</h4>
                      <p className="text-xl">Cargo o rol dentro del organismo</p>
                    </div>
                    <div className="bloque-institucional-contacto">
                      <p className="headline-lg">Contacto</p>
                      <p className="text-md">Teléfono: 4000-0000 (int. 4000)</p>
                      <p className="text-md">Correo electrónico: apellido@buenosaires.gob.ar </p>
                    </div>
                    <div className="bloque-institucional-redes">
                      <p className="headline-lg">Seguinos en redes</p>
                      <div className="iconos-redes">
                        <a href="http://">
                          <i className="o-icon bxl bx-facebook"></i>
                        </a>
                        <a href="http://">
                          <i className="o-icon bxl bx-instagram-alt"></i>
                        </a>
                        <a href="http://">
                          <i className="o-icon bxl bx-twitter-x"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ZoomContainer>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Sin multimedia',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={BLOQUE_INSTITUCIONAL_SIN_MULTIMEDIA}>
            <div className="container">
              <ZoomContainer>
                <div className="bloque-institucional">
                  <div className="bloque-institucional-body">
                    <div className="bloque-institucional-autoridad">
                      <h4>Nombre y apellido</h4>
                      <p className="text-xl">Cargo o rol dentro del organismo</p>
                    </div>
                    <div className="bloque-institucional-contacto">
                      <p className="headline-lg">Contacto</p>
                      <p className="text-md">Teléfono: 4000-0000 (int. 4000)</p>
                      <p className="text-md">Correo electrónico: apellido@buenosaires.gob.ar </p>
                    </div>
                    <div className="bloque-institucional-redes">
                      <p className="headline-lg">Seguinos en redes</p>
                      <div className="iconos-redes">
                        <a href="#">
                          <i className="o-icon bxl bx-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="o-icon bxl bx-instagram-alt"></i>
                        </a>
                        <a href="#">
                          <i className="o-icon bxl bx-twitter-x"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ZoomContainer>
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
