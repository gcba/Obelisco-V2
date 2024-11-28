"use client"

import Link from 'next/link';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import React, { useState, useEffect } from 'react';


const ReleasesComponents: React.FC = () => {

  const [version, setVersion] = useState<string>('');
 
  useEffect(() => {
    fetch('https://api.github.com/repos/gcba/Obelisco-V2/releases/latest')
      .then((response) => response.json())
      .then((data) => setVersion(data.tag_name))
      .catch((error) => console.error('Error fetching version:', error));
  }, []);
 
  const versionPages = 
    { text: `${version}`, url: 'https://github.com/gcba/Obelisco-V2/releases/latest', id: 1 }
  ;

const sections = [
  {
    title: 'Versión 1.4.2',
    content: (      
      <ul className="docs-list">
        <p>La versión 1.4.2 es la primer versión estable de Obelisco. Los puntos más destacados de ésta contiene: </p>
        <li>
          La totalidad de los componentes migrados de la Versión 1
        </li>
        <li>
          Nueva guía de estilos: Modificación de tipografía, grilla y nueva paleta de color enfocada en la accesibilidad.
        </li>
      </ul>
    ),
  },
];

  return (
    <>
      <nav aria-label="Navegación secundaria">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/documentation">Documentación</Link>
          </li>
        </ol>
      </nav>
      <ComponentHeader
        title="Versionados"
        description={[
          'En esta sección se encuentran los versionados de la librearía y la documentación de los cambios que se hicieron sobre cada versión de Obelisco.',
          <>
            <p>
              Versión actual: <Link href='https://github.com/gcba/Obelisco-V2/releases' target='blank'>{versionPages.text}</Link>            
            </p>
          </>,
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="change" />
    </>
  );
};

export default ReleasesComponents;