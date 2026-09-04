'use client';
// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
// import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

// import { AREA_1 } from './code-views';

const basePath = '/Obelisco-V2';

export default function PagSimples() {
  //   const [activeTab, setActiveTab] = useState('panel-content-docs');

  const sections = [
    {
      //   firstTitle: true,
      title: 'Tipos de página simple',
      content: (
        <>
          <div className="container">
            <div className="max-items-2">
              <div className="col">
                <a
                  href={`${basePath}/templates/paginas-simples/pagina-simple-12-columnas`}
                  className="list-group-item item-sm"
                >
                  <div className="access-content">
                    <span className="access-title">Página simple a 12 columnas</span>
                    {/* <p className="access-text">
                      Página principal de un ministerio del Gobierno de la Ciudad de Buenos Aires.
                    </p> */}
                  </div>
                </a>
              </div>

              <div className="col">
                <a
                  href={`${basePath}/templates/paginas-simples/pagina-simple-8-columnas`}
                  className="list-group-item item-sm"
                >
                  <div className="access-content">
                    <span className="access-title">Página simple a 8 columnas</span>
                    {/* <p className="access-text">Son el nexo a más información de un área, programa o servicio.</p> */}
                  </div>
                </a>
              </div>

              <div className="col">
                <a
                  href={`${basePath}/templates/paginas-simples/pagina-simple-calendario`}
                  className="list-group-item item-sm"
                >
                  <div className="access-content">
                    <span className="access-title">Página simple de calendario</span>
                    {/* <p className="access-text">Son el nexo a más información de un área, programa o servicio.</p> */}
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
        title="Página Simple"
        description={[
          `Las usamos para transmitir información estática de menor jerarquía, en comparación a una página de área, y con menor cantidad de contenido.`,
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="none" />
    </>
  );
}
