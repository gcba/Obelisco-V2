'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { TabItem, TabPanel } from '@/components/Tabs';
import { CodeViewTemplate } from '@/components/Template/CodeViewTemplate';
import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

import { TEMPLATE_PAG_SIMPLE } from './code-views';
const basePath = '/Obelisco-V2';

const PaginaSimpleCalendarioDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel-content-docs');

  const DOC_SECTIONS = [
    {
      firstTitle: true,
      title: '¿A qué llamamos calendario?',
      content: (
        <>
          <div>
            <div className="d-flex flex-column gap-3 mb-5">
              <p className="text-md m-0">
                En general, en página simple se organiza contenido informativo de forma detallada, sin que implique una
                acción por parte de la persona usuaria. En este caso, se organiza un calendario con la visualización de
                los 12 meses del año, que puede contener referencias.
              </p>

              <div className="list-informative d-flex flex-column gap-2">
                <h3 className="list-informative-subtitle m-0">Cuándo usar</h3>
                <ul className="list-informative-bullet">
                  <li>Para informar fechas sobre eventos o actividades agrupadas que ocurren durante el año.</li>
                </ul>
              </div>

              <div className="list-informative d-flex flex-column gap-2">
                <h3 className="list-informative-subtitle m-0">Cuándo no usar</h3>
                <ul className="list-informative-bullet">
                  <li>
                    Para informar informar sobre una sola fecha relevante en el año, emplear en el caso de que se
                    conozcan más de 3 fechas. En el caso de tener menos de 3 fechas relevantes, utilizar otros
                    componentes como tarjetas.
                  </li>
                </ul>
              </div>
            </div>

            <Image
              src={`${basePath}/images/templates/pagina_simple/calendar.svg`}
              alt="Ejemplo de calendario"
              width="800"
              height="295"
              className="img-fluid"
            />
            <p className="text-xs mt-2">
              Estructura principal de la plantilla de página simple con el sistema de columnas visible.
            </p>
          </div>
        </>
      ),
    },
    {
      title: 'Componentes utilizados',
    },
    {
      subtitleBold: 'Calendario',
      content: (
        <>
          <div className="d-flex flex-column gap-3">
            <p className="text-md m-0">
              El calendario muestra los días del mes dentro de un año, se pueden marcar fechas en particular e incluir
              la referencia de la marca señalada.
            </p>
            <div className="list-informative d-flex flex-column gap-2">
              <h3 className="list-informative-subtitle m-0 text-md">Cuándo usar</h3>
              <ul className="list-informative-bullet">
                <li>Para señalar fechas de eventos, actividades de una institución u organismo durante el año.</li>
                <li>Para indicar los días conmemorativos durante el año.</li>
              </ul>
            </div>
            <div className="list-informative d-flex flex-column gap-2">
              <h3 className="list-informative-subtitle m-0 text-md">Cuándo no usar</h3>
              <ul className="list-informative-bullet">
                <li>Para mostrar menos de 3 fechas de eventos o actividades durante el año.</li>
                <li>Para indicar menos de 3 fechas conmemorativas.</li>
                <li>Para mostrar fechas no relacionadas.</li>
              </ul>
            </div>
            <p className="text-md m-0">
              Es conveniente que se muestren todos los meses del año, por más que no contengan fechas relacionadas
              indicadas.
            </p>
            <p className="text-md m-0">
              Podés consultar la{' '}
              <Link href={'https://gcba.github.io/Obelisco-V2/components/calendar'}>documentación de calendario</Link>{' '}
              para conocer más sobre el uso y variantes del componente.
            </p>
            <Image
              src={`${basePath}/images/templates/pagina_simple/calendar-documentation.svg`}
              alt="Documentacion calendario"
              width="800"
              height="295"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      subtitleBold: 'Espaciados',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md m-0">
              Para mantener una estructura clara, legible y alineada al sistema de grillas, recomendamos los siguientes
              espaciados entre secciones para dispositivos <i>desktop</i>:
            </p>
            <div className="list-informative d-flex flex-column gap-2">
              <ul className="list-informative-bullet">
                <li>
                  <b>Espaciado horizontal de 48px</b>: Entre encabezado y el cuerpo de la página.
                </li>
                <li>
                  <b>Espaciado horizontal de 32px</b>: Entre cada uno de los componentes de calendario.
                </li>
                <li>
                  <b>Espaciado vertical de 32px</b>: Entre cada uno de los componentes de calendario.
                </li>
              </ul>
            </div>
          </div>
          <Image
            src={`${basePath}/images/templates/pagina_simple/calendar-spacing.svg`}
            alt="Espaciado calendario"
            width="800"
            height="295"
            className="img-fluid my-4"
          />
          <div className="d-flex gap-4">
            <Image
              src={`${basePath}/images/templates/pagina_simple/calendar-spacing-mobile.svg`}
              alt="Espaciado calendario mobile"
              width="800"
              height="295"
              className="img-fluid"
            />
            <div>
              <p className="text-md">
                Para mantener una estructura clara, legible y alineada al sistema de grillas, recomendamos los
                siguientes espaciados entre secciones para dispositivos <i>mobile</i>:
              </p>
              <ul className="list-informative-bullet">
                <li>
                  <b>Espaciado horizontal de 32px</b>: Entre encabezado y el cuerpo de la página.
                </li>
                <li>
                  <b>Espaciado vertical de 16px</b>: Entre cada uno de los componentes de calendario.
                </li>
              </ul>
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
          <li className="breadcrumb-item">
            <Link href="/templates/paginas-simples">Página simple</Link>
          </li>
        </ol>
      </nav>
      <ComponentHeader
        title="Página simple"
        description={[
          `
          Las usamos para transmitir información estática de menor jerarquía, en comparación a una página de área, y con menor cantidad de contenido.
          `,
        ]}
      />

      <a
        className="btn btn-outline-secondary"
        href="https://gcba.github.io/obelisco-demo/pagina_simple/ejemplo_calendario/index.html"
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
            <CodeViewTemplate template={TEMPLATE_PAG_SIMPLE} />
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default PaginaSimpleCalendarioDocs;
