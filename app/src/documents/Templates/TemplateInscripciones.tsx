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

const TemplateInscripcionesDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel-content-docs');

  const DOC_SECTIONS = [
    {
      title: 'Uso',
      firstTitle: true,
      content: (
        <>
          <p className="text-md">
            Cuando se quiera agrupar la oferta de trámites, como turnos, inscripciones o servicios varios, se puede
            emplear el template catálogo. En él se van a encontrar con uno o varios conjuntos de{' '}
            <a href="https://gcba.github.io/Obelisco-V2/components/cards">tarjetas</a> organizadas bajo títulos, para
            mostrar de forma accesible, legible y ordenada la oferta de los trámites que pueden realizar en esa sección
            del sitio.{' '}
          </p>
          <p className="text-xl">Cuándo usar</p>
          <ul className="list-informative-bullet">
            <li>Para agrupar la oferta disponible para agendar turnos presenciales, en un solo lugar.</li>
            <li>Para visualizar y concretar las incripciones a cursos y capacitaciones.</li>
            <li>Para mostrar de forma ordenada la gestión administrativa de trámites.</li>
            <li>
              Para organizar gran cantidad de tipos de servicios, teniendo en cuenta que puede ser el inicio de un
              proceso más largo.
            </li>
          </ul>
          <p className="text-xl mt-3">Cuándo no usar</p>
          <ul className="list-informative-bullet">
            <li>
              Para agrupar y conectar diferentes componentes navegables, para ello usar el template de{' '}
              <a href="https://gcba.github.io/Obelisco-V2/templates/paginas-de-areas/pagina-area-dos">
                {' '}
                página de área - nivel 2
              </a>
              .
            </li>
            <li>
              Para ofrecer un solo trámite o servicio, para ello emplear directamente el tamplate de{' '}
              <a href="https://gcba.github.io/Obelisco-V2/templates/pagina-tramites">trámites</a>.
            </li>
            <li>
              Para mostrar contenido que no tiene ningún tipo de organización, analizar si aplica usar{' '}
              <a href="https://gcba.github.io/Obelisco-V2/templates/pagina-simple">página simple</a>.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Encabezado',
      content: (
        <>
          <p className="text-lg">Se encuentra al comienzo de la página, justo debajo del header y está formado por:</p>
          <ul className="list-informative-bullet">
            <li>
              <a href="https://gcba.github.io/Obelisco-V2/components/breadcrumb">Migas de pan</a>, que nos indican el
              recorrido de la persona usuaria hasta la página actual.
            </li>
            <li>
              Título, que debe ser claro y utilizar el nombre formal de los servicios, trámites o productos que se
              ofrecen.
            </li>
            <li>
              Breve descripción que explica los tipos de servicios o productos que van en encontrar en la pantalla
              organizados, debe ser de un máximo de 150 caracteres.
            </li>
          </ul>

          <div className="d-flex flex-column">
            <p className="text-xl" style={{ marginTop: '32px' }}>
              Buenas prácticas
            </p>
            <div className="d-flex">
              <span className="material-symbols-rounded text-success">check</span>
              <p style={{ marginBottom: '12px' }}>Utilizar textos breves para la bajada.</p>
            </div>
            <div className="d-flex">
              <span className="material-symbols-rounded text-success">check</span>
              <p style={{ marginBottom: '12px' }}>Evitar abreviaturas o denominaciones informales.</p>
            </div>
            <div className="d-flex">
              <span className="material-symbols-rounded text-success">check</span>
              <p>Usar mayúsculas solo donde corresponda.</p>
            </div>

            <p className="text-xl" style={{ marginTop: '32px' }}>
              Malas prácticas
            </p>
            <div className="d-flex">
              <span className="material-symbols-rounded text-danger">close</span>
              <p style={{ marginBottom: '12px' }}>
                Modificar la estructura visual del componente (tamaño, alineación, espaciados, colores).
              </p>
            </div>
            <div className="d-flex">
              <span className="material-symbols-rounded text-danger">close</span>
              <p style={{ marginBottom: '12px' }}>Usar textos demasiado largos o técnicos en la bajada.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Tarjetas',
      content: (
        <>
          <p className="textm-md">
            En este bloque se presentan dos o más opciones de servicios, trámites o productos en{' '}
            <a href="https://gcba.github.io/Obelisco-V2/components/cards">tarjetas horizontales</a> organizadas en 3
            columnas o 2 columnas, según se requiera respetando tamaños de componentes y organización en grilla. Para
            mayor organización, se recomienda agrupar por subtítulos.
            <br />
            <br />
            Se sugiere organizar cada grupo de tarjeta por orden alfabético en un mismo grupo, por ser una manera
            esperable de visualización.
          </p>
          <ul className="list-informative-bullet">
            <li>
              Tarjeta de ancho de 4 columnas (4-col) organizadas en 3 columnas o tarjetas de ancho de 6 columnas (6-col)
              organizadas en 2 columnas.
            </li>
            <li>Incluye título y descripción, en cada caso, no pueden superar las dos líneas de texto.</li>
            <li>
              Agrupar las tarjetas en categorías descriptivas que se muestren en subtítulos, como ser
              &quot;Cursos&quot;. En el caso de que se tenga una sola categoría de tarjetas, se sugiere omitir el
              subtítulo.
            </li>
            <li>
              Cuando en la fila de 2 o 3 columnas, se tengan 1 o 2 tarjetas, alinearlas a la izquierda. No completar con
              tarjetas vacías el grupo de tarjetas.{' '}
            </li>
          </ul>

          <Image
            src={`${basePath}/images/templates/inscripciones/inscripciones_1.svg`}
            alt="Ejemplo de tarjetas en template inscripciones"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px' }}
          />

          <div className="d-flex flex-column">
            <p className="text-xl" style={{ marginTop: '32px' }}>
              Buenas prácticas
            </p>
            <div className="d-flex">
              <span className="material-symbols-rounded text-success">check</span>
              <p style={{ marginBottom: '12px' }}>
                Verificar ortografía, formato y longitud del texto antes de ser publicado.
              </p>
            </div>
            <div className="d-flex">
              <span className="material-symbols-rounded text-success">check</span>
              <p style={{ marginBottom: '12px' }}>
                Verificar que el servicio y la página a la que redirige estén habilitados.
              </p>
            </div>

            <p className="text-xl" style={{ marginTop: '32px' }}>
              Malas prácticas
            </p>
            <div className="d-flex">
              <span className="material-symbols-rounded text-danger">close</span>
              <p style={{ marginBottom: '12px' }}>
                Modificar la estructura visual del componente (tamaño, alineación, espaciados, colores).
              </p>
            </div>
            <div className="d-flex">
              <span className="material-symbols-rounded text-danger">close</span>
              <p style={{ marginBottom: '12px' }}>Usar textos demasiado largos o técnicos en la bajada.</p>
            </div>
          </div>

          <p className="text-xl">Contenido</p>
          <ul className="list-informative-bullet">
            <li>
              Título de tarjeta: Usar el nombre oficial del trámite, turno o servicio. No abreviar, ni renombrar. Debe
              tener hasta 2 líneas o 60 caracteres, después se corta con puntos suspensivos.
            </li>
            <li>
              Descripción de tarjeta: Ofrecer una oración para orientar sobre el trámite o servicio. Debe tener un
              máximo de 3 líneas o 107 caracteres, después se corta con puntos suspensivos.
            </li>
            <li>
              Título de categoría (opcional): Organizar las tarjetas dentro de categorías reconocibles y descriptivas
              con el/los títulos de los trámites.
            </li>
            <li>Orden de tarjetas: ordenar alfabéticamente dentro de la categoría.</li>
            <li>Cantidad mínima de tarjetas: en cada categoría puede tener una tarjeta alineada a la izquierda. </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Espaciado',
      content: (
        <>
          <p className="text-md">
            Para mantener una estructura clara, legible y alineada al sistema de grilla, recomendamos los siguientes
            espaciados entre títulos, párrafos y accionables, para desktop:
          </p>
          <ul className="list-informative-bullet">
            <li>
              Espacio horizontal: entre encabezado y pie de página (footer) relacionados con títulos y tarjetas debe
              haber un espacio de 48 px. Entre el título y las tarjetas, 24 px. Entre filas de tarjetas 32 px.
            </li>
            <li>Espacio vertical: entre las columnas de tarjetas 32 px.</li>
          </ul>

          <Image
            src={`${basePath}/images/templates/inscripciones/inscripciones_2.svg`}
            alt="Ejemplo de espaciados en template inscripciones"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px' }}
          />

          <p className="text-md">
            Para mantener una estructura clara, legible y alineada en mobile, hay que mantener los siguientes espacios:
          </p>

          <ul className="list-informative-bullet">
            <li>
              Espacio horizontal - encabezado y footer: entre encabezado y pie de página (footer) con títulos y tarjetas
              32 px.
            </li>
            <li>
              Espacio horizontal - tarjetas: los componentes dentro de una misma sección o grupo están dispuestos uno
              debajo del otro y entre cada uno hay 16 px.
            </li>
            <li>
              Espacio horizontal - secciones: al comenzar y finalizar cada sección o grupo, cada margen superior e
              inferior tendrá 24 px.
            </li>
          </ul>

          <Image
            src={`${basePath}/images/templates/inscripciones/inscripciones_3.svg`}
            alt="Ejemplo de espaciados en template inscripciones"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px' }}
          />
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
        title="Inscripciones"
        description={[
          `
          Esta guía está diseñada para proporcionar instrucciones claras para completar el template de catálogo, que se puede emplear para agrupar la oferta de inscripciones, turnos o aquellos servicios que así lo requieran. Busca asegurar consistencia y facilitar la carga correcta del contenido.
          `,
        ]}
      />

      <a
        className="btn btn-outline-secondary"
        href="https://gcba.github.io/obelisco-demo/pagina_simple/pagina_simple_op5/index.html"
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

export default TemplateInscripcionesDocs;
