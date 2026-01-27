'use client';
import { basePath } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { TabItem, TabPanel } from '@/components/Tabs';
import { CodeViewTemplate } from '@/components/Template/CodeViewTemplate';
import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

import { TEMPLATE_PAG_LIBRO } from './code-views';

const TemplatePaginaLibroDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel-content-docs');

  const DOC_SECTIONS = [
    {
      firstTitle: true,
      title: 'Encabezado',
      content: (
        <>
          <div style={{ marginTop: '8px' }}>
            <p className="text-md">
              Se encuentra al comienzo de la página, justo debajo del componente Migas de pan. Su funcionalidad es
              brindar un pantallazo acerca de la página. Está compuesto por:
            </p>
            <div className="list-informative mb-5">
              <ul className="list-informative-bullet">
                <li>Título, obligatorio.</li>
                <li>Bajada, opcional. Da más contexto sobre la página y se usa de apoyo al título.</li>
                <li>Sección de redes sociales, opcional.</li>
                <li>Línea divisoria, obligatoria.</li>
              </ul>
            </div>
            <Image
              src={`${basePath}/images/templates/pagina_libro/encabezado.svg`}
              alt="Ejemplo encabezado de página libro"
              width="800"
              height="295"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      title: 'Navegación vertical',
      content: (
        <>
          <div>
            <p className="text-md" style={{ marginBottom: '2rem' }}>
              Contiene accesos directos a las distintas secciones de la página y señala en cuál se encuentra la persona
              usuaria, es obligatoria.
            </p>
            <Image
              src={`${basePath}/images/templates/pagina_libro/nav_vertical.svg`}
              alt="Ejemplo encabezado de página libro"
              width="800"
              height="295"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      title: 'Cuerpo de página',
      content: (
        <>
          <div>
            <p>Contenido de la página. Está compuesto por secciones que pueden incluir:</p>
            <div className="list-informative" style={{ margin: '2rem 0' }}>
              <ul className="list-informative-bullet">
                <li>Título, obligatorio.</li>
                <li>Bajada, opcional. Brinda contexto sobre la sección y se usa de apoyo al título.</li>
                <li>Enlaces, opcional.</li>
                <li>Botones, obligatoria.</li>
                <li>Imagen, opcional.</li>
              </ul>
            </div>
          </div>
          <Image
            src={`${basePath}/images/templates/pagina_libro/page_body.svg`}
            alt="Ejemplo encabezado de página libro"
            width="800"
            height="295"
            className="img-fluid"
          />
          <div className="d-flex flex-column" style={{ marginTop: '2rem', gap: '2rem' }}>
            <div>
              <p className="text-xl" style={{ marginBottom: '0.75rem' }}>
                Buenas prácticas
              </p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>
                  Se recomienda limitar la navegación vertical a un máximo de 10 opciones para evitar un scroll excesivo
                  en la versión mobile.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xl" style={{ marginBottom: '0.75rem' }}>
                Malas prácticas
              </p>
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>
                  En este tipo de páginas no se recomienda utilizar secciones de tarjetas, ni otros componentes que no
                  estén especificados arriba.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Espaciado',
      content: (
        <>
          <div>
            <p className="text-md m-0">
              Para mantener una estructura clara, legible y alineada al sistema de grillas, recomendamos los siguientes
              espaciados entre títulos, párrafos y accionables.
            </p>

            <div className="d-flex flex-column " style={{ gap: '2rem', marginTop: '2rem' }}>
              <Image
                src={`${basePath}/images/templates/pagina_libro/space_1.svg`}
                alt="Ejemplo encabezado de página libro"
                width="800"
                height="295"
                className="img-fluid"
              />
              <Image
                src={`${basePath}/images/templates/pagina_libro/space_2.svg`}
                alt="Ejemplo encabezado de página libro"
                width="800"
                height="295"
                className="img-fluid"
              />
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
        title="Página de libro"
        description={[
          `
          Las usamos para agrupar información sobre un mismo tema en subtemas. Los índices y las subpáginas deben tener como mínimo 2 párrafos de 5 líneas de información.
          `,
        ]}
      />
      <a
        className="btn btn-outline-secondary"
        href="https://gcba.github.io/obelisco-demo/pagina_libro/index.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginBottom: '32px' }}
      >
        Acceder a la plantilla
        <span className="material-symbols-rounded o-icon">open_in_new</span>
      </a>
      <div>
        <nav className="tabs-box" aria-label="Navegación por pestañas">
          <ul className="nav nav-pills nav-box tabs p-0" role="tablist">
            <TabItem
              id={`panel-content-docs`}
              title={'Especificaciones'}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabItem id={`panel-content-html`} title={'Código'} activeTab={activeTab} setActiveTab={setActiveTab} />
          </ul>
        </nav>

        <hr className="mt-0 mb-4" />

        <div className="tab-content" style={{ paddingTop: '32px' }}>
          <TabPanel id={`panel-content-docs`} activeTab={activeTab}>
            <DocumentationTemplate sections={DOC_SECTIONS} type="ux" />
          </TabPanel>
          <TabPanel id={`panel-content-html`} activeTab={activeTab}>
            <CodeViewTemplate template={TEMPLATE_PAG_LIBRO} />
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default TemplatePaginaLibroDocs;
