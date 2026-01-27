'use client';
// import Image from 'next/image';
import { basePath } from '@/utils';
import Link from 'next/link';
import React from 'react';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
// import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

// import { AREA_1 } from './code-views';

export default function Areas() {
  //   const [activeTab, setActiveTab] = useState('panel-content-docs');

  const sections = [
    {
      //   firstTitle: true,
      title: 'Tipos de plantillas',
      content: (
        <>
          <div className="container">
            <div className="max-items-2">
              <div className="col">
                <a href={`${basePath}/templates/paginas-de-areas/pagina-area-uno`} className="list-group-item item-sm">
                  <div className="access-content">
                    <span className="access-title">Página de áreas | Nivel 1</span>
                    <p className="access-text">
                      Página principal de un ministerio del Gobierno de la Ciudad de Buenos Aires.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col">
                <a href={`${basePath}/templates/paginas-de-areas/pagina-area-dos`} className="list-group-item item-sm">
                  <div className="access-content">
                    <span className="access-title">Página de áreas | Nivel 2</span>
                    <p className="access-text">Son el nexo a más información de un área, programa o servicio.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <nav aria-label="Navegación secundaria">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/templates">Plantillas</Link>
          </li>
        </ol>
      </nav>
      <ComponentHeader
        title="Páginas de áreas"
        description={[
          `
          Plantilla para páginas institucionales de primer y segundo nivel, utilizada para presentar ministerios, secretarías y sus áreas, programas o servicios del Gobierno de la Ciudad de Buenos Aires.
          `,
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="none" />
    </>
  );
}
