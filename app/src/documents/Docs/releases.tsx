'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const ReleasesComponents: React.FC = () => {
  const [version, setVersion] = useState<string>('');

  useEffect(() => {
    fetch('https://api.github.com/repos/gcba/Obelisco-V2/releases/latest')
      .then((response) => response.json())
      .then((data) => setVersion(data.tag_name))
      .catch((error) => console.error('Error fetching version:', error));
  }, []);

  const versionPages = { text: `${version}`, url: 'https://github.com/gcba/Obelisco-V2/releases/latest', id: 1 };
  const sections = [
    {
      title: 'Versión de prueba ',
      content: (
        <ul className="docs-list">
          <p>La versión de prueba contiene los siguientes fixes: Ademas es para probar los archivos que modifica el PR </p>
          <li>
            {' '}
            Se modifica el máximo de líneas en título (2) y descripción (3) del{' '}
            <span className="fst-italic">organismo Accesos.</span>
          </li>
          <li>
            {' '}
            Se ajusta el alineado vertical del componente radio que se encuentra dentro del componente{' '}
            <span className="fst-italic">Colapsable con lista seleccionable.</span>{' '}
          </li>
          <li> Se modifica el tamaño del ícono en botón mediano a 18px. </li>
          <li>
            {' '}
            En el organismo Pie de página <span className="fst-italic">(Footer)</span>, se coloca el ícono de la red
            social &quot;X&quot;, por medio de la clase <code>.social-x </code> antes utilizada en una etiqueta{' '}
            <code>img</code>.
          </li>
        </ul>
      ),
    },    
    {
      title: 'Versión 1.5.1',
      content: (
        <ul className="docs-list">
          <p>La versión 1.5.1 contiene los siguientes fixes: </p>
          <li>
            {' '}
            Se modifica el máximo de líneas en título (2) y descripción (3) del{' '}
            <span className="fst-italic">organismo Accesos.</span>
          </li>
          <li>
            {' '}
            Se ajusta el alineado vertical del componente radio que se encuentra dentro del componente{' '}
            <span className="fst-italic">Colapsable con lista seleccionable.</span>{' '}
          </li>
          <li> Se modifica el tamaño del ícono en botón mediano a 18px. </li>
          <li>
            {' '}
            En el organismo Pie de página <span className="fst-italic">(Footer)</span>, se coloca el ícono de la red
            social &quot;X&quot;, por medio de la clase <code>.social-x </code> antes utilizada en una etiqueta{' '}
            <code>img</code>.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.0',
      content: (
        <ul className="docs-list">
          <p>La versión 1.5.0 contiene: </p>
          <li>
            Un nuevo editor para poder probar los componentes de obelisco. En ella se podrá copiar el html y manipular
            el código en tiempo real.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.4.2',
      content: (
        <ul className="docs-list">
          <p>La versión 1.4.2 es la primer versión estable de Obelisco. Los puntos más destacados de ésta contiene: </p>
          <li>La totalidad de los componentes migrados de la Versión 1</li>
          <li>
            Nueva guía de estilos: Modificación de tipografía, grilla y nueva paleta de color enfocada en la
            accesibilidad.
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
              Versión actual:{' '}
              <Link href="https://github.com/gcba/Obelisco-V2/releases" target="blank">
                {versionPages.text}
              </Link>
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
