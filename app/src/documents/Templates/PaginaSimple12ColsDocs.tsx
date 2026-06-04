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

const PaginaSimple12ColsDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel-content-docs');

  const DOC_SECTIONS = [
    {
      firstTitle: true,
      title: '¿A qué llamamos 12 columnas?',
      content: (
        <>
          <div>
            <div className="d-flex flex-column gap-3 mb-5">
              <p className="text-md m-0">
                En general, en página simple se organiza contenido informativo de forma detallada, sin que implique una
                acción por parte de la persona usuaria. Eventualmente, puede contener enlaces para redireccionar a otras
                secciones para que pueda realizar el trámite, inscribirse en el curso o reservar el turno.
                <br /> Sus características admiten la convivencia de contenido variado, entre lo estático (texto,
                tablas) y lo accionable (tarjetas, destacados, accesos). Esto es posible porque la plantilla
                disponibiliza el 100% del ancho de la grilla (12 columnas).
              </p>

              <div className="list-informative d-flex flex-column gap-2">
                <h3 className="list-informative-subtitle m-0">Cuándo usar</h3>
                <ul className="list-informative-bullet">
                  <li>
                    Para combinar información textual (en formato párrafo y tabla) y sumar contenido enlazado como
                    tarjetas y destacados.
                  </li>
                  <li>
                    Para organizar información y contenidos en otros formatos que no están contemplados en las otras
                    plantillas del sistema Obelisco.
                  </li>
                </ul>
              </div>

              <div className="list-informative d-flex flex-column gap-2">
                <h3 className="list-informative-subtitle m-0">Cuándo no usar</h3>
                <ul className="list-informative-bullet">
                  <li>
                    Para informar sobre la gestión de un trámite, recomendamos usar la plantilla
                    <Link href={'página de trámites.'}>página de trámites</Link>.
                  </li>
                  <li>
                    Para agrupar información sobre un mismo tema en subtemas, en este caso recomendamos el uso de la
                    plantilla de{' '}
                    <Link href={'https://gcba.github.io/Obelisco-V2/templates/pagina-de-libro'}>Página libro</Link>
                  </li>
                </ul>
              </div>
            </div>

            <Image
              src={`${basePath}/images/templates/pagina_simple/12-columns-cards.svg`}
              alt="Ejemplo de jerariquia de tarjetas"
              width="800"
              height="295"
              className="img-fluid"
            />
            <p className="text-xs mt-1">
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
      subtitleBold: 'Tabla',
      content: (
        <>
          <div className="d-flex flex-column gap-3">
            <p className="text-md m-0">
              La tabla muestra datos organizados y estructurados en filas y columnas, para categorizar y comparar
              contenido relacionado.
            </p>
            <div className="list-informative d-flex flex-column gap-2">
              <h3 className="list-informative-subtitle m-0 text-md">Cuándo usar</h3>
              <ul className="list-informative-bullet">
                <li>Para mostrar contenido estructurado en columnas y filas.</li>
                <li>Para comparar valores y reconocer patrones.</li>
                <li>Para organizar gran volumen de información.</li>
              </ul>
            </div>
            <div className="list-informative d-flex flex-column gap-2">
              <h3 className="list-informative-subtitle m-0 text-md">Cuándo no usar</h3>
              <ul className="list-informative-bullet">
                <li>Para mostrar contenido sin organización.</li>
                <li>Para comunicar información no relacionada.</li>
                <li>Para ordenar poca información, menor a dos líneas.</li>
              </ul>
            </div>
            <p className="text-md">
              La tabla puede estar acompañada por un título y un párrafo de texto de dos líneas, que no deben ocupar más
              de 6 columnas de la grilla responsiva de nuestro sistema de diseño Obelisco.
            </p>
            <p className="text-md">
              Podés consultar la{' '}
              <Link href={'https://gcba.github.io/Obelisco-V2/components/table'}>documentación de tabla</Link> para
              conocer más sobre el uso y variantes del componente.
            </p>
            <Image
              src={`${basePath}/images/templates/pagina_simple/12-columns-table.svg`}
              alt="Ejemplo uso de tabla"
              width="800"
              height="295"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      subtitleBold: 'Tarjetas horizontales',
      content: (
        <>
          <div className="d-flex flex-column gap-3">
            <p className="text-md m-0">
              Las variantes disponibles para este tipo de página incluyen todas las variaciones de la tarjeta
              horizontal, es decir, se pueden usar las variantes con icono, con imagen, sin multimedia, de 4 columnas y
              de 6 columnas de ancho.
            </p>
            <div className="list-informative d-flex flex-column gap-2">
              <h3 className="list-informative-subtitle m-0 text-md">
                <strong>Variantes disponibles de tarjetas horizontales:</strong>
              </h3>
              <ul className="list-informative-bullet">
                <li>
                  Variante de <strong>4 columnas,</strong> con ícono/imagen.
                </li>
                <li>
                  Variante de <strong>6 columnas,</strong> con ícono/imagen.
                </li>
              </ul>
            </div>
            <div className="list-informative d-flex flex-column gap-2">
              <h3 className="list-informative-subtitle m-0 text-md">
                <strong>Variaciones del componente:</strong>
              </h3>
              <ul className="list-informative-bullet">
                <li>Con botones, con enlaces, con accesos y botones de descarga.</li>
              </ul>
            </div>
            <p className="text-md m-0">
              En <i>desktop</i>, las tarjetas horizontales de 4 columnas pueden agruparse hasta un máximo de 3 por
              línea, mientras que las de 6 columnas pueden hasta un máximo de 2 por línea. Recomendamos que la cantidad
              máxima de opciones no supere las 6 tarjetas para optimizar la toma de decisiones y evitar abrumar a las
              personas usuarias.
            </p>
            <p className="text-md m-0">
              Podés consultar la{' '}
              <Link href={'https://gcba.github.io/Obelisco-V2/components/cards'}>documentación de tarjetas</Link> para
              conocer más sobre el uso y variantes del componente.
            </p>
            <div className="d-flex flex-column" style={{ gap: '1.5rem' }}>
              <Image
                src={`${basePath}/images/templates/pagina_simple/tarjetas_1.svg`}
                alt="Ejemplo uso de tarjetas"
                width="800"
                height="295"
                className="img-fluid"
              />
              <div>
                <p className="text-lg">Ejemplos de uso</p>
                <Image
                  src={`${basePath}/images/templates/pagina_simple/tarjetas_2.svg`}
                  alt="Ejemplo uso de tarjetas"
                  width="800"
                  height="295"
                  className="img-fluid mb-2"
                />
                <div className="d-flex">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p>
                    Recomendamos agrupar por categorías, temáticas, tipos de contenido, etc., el contenido de las
                    tarjetas para facilitar la lectura y toma de decisión de la persona usuaria.
                  </p>
                </div>
                <div>
                  <Image
                    src={`${basePath}/images/templates/pagina_simple/tarjetas_3.svg`}
                    alt="Ejemplo uso de tarjetas"
                    width="800"
                    height="295"
                    className="img-fluid mb-2"
                  />

                  <div className="d-flex">
                    <span className="material-symbols-rounded text-danger">close</span>
                    <p>Evitar combinar la disposición y/o los tipos de tarjetas dentro de un mismo grupo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      subtitleBold: 'Tarjeta vertical',
      content: (
        <>
          <div className="d-flex flex-column gap-3">
            <p className="text-md m-0">
              La variante disponible para este tipo de página incluye el tipo para cursos o talleres, de 4 columnas de
              ancho con imagen, etiqueta, título y bajada.
            </p>
            <div className="list-informative d-flex flex-column gap-2">
              <h3 className="list-informative-subtitle m-0 text-md">
                <strong>Elementos del componente:</strong>
              </h3>
              <ul className="list-informative-bullet">
                <li>Imagen multimedia.</li>
                <li>Eitqueta: única donde se avisa si el curso o taller está abierto o cerrado para su inscripción.</li>
                <li>Título descriptivo del curso.</li>
                <li>Bajada con información complementaria como público, días y horarios de cursada.</li>
              </ul>
            </div>
            <p className="text-md">
              En <i>desktop</i>, las tarjetas verticales de 4 columnas pueden agruparse hasta un máximo de 3 por línea.
            </p>
            <p className="text-md">
              Podés consultar la{' '}
              <Link href={'https://gcba.github.io/Obelisco-V2/components/cards'}>documentación de tarjetas</Link> para
              conocer más sobre el uso y variantes del componente.
            </p>
            <Image
              src={`${basePath}/images/templates/pagina_simple/12-columns-vertical-cards.svg`}
              alt="Ejemplo uso de tarjetas verticales"
              width="800"
              height="295"
              className="img-fluid my-2"
            />
            <p className="text-xs">
              Variante disponible del componente Tarjetas para curso o taller en la plantilla de página simple.
            </p>
          </div>
        </>
      ),
    },
    {
      subtitleBold: 'Destacados',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md m-0">
              Los destacados permiten resaltar contenido relevante que requiere un nivel jerárquico mayor al resto de la
              información. Su uso se limita a <strong>un destacado por página</strong> para asegurar el énfasis en los
              elementos destacados y evitar que compitan entre sí.
            </p>
            <p className="text-md m-0">
              La variante disponible para el tipo de página simple es el <strong>destacado sin multimedia</strong> con
              fondo secundario. En todos los dispositivos ocupa el 100% del ancho de la pantalla. Se pueden utilizar
              todas las variantes de accionables según la necesidad del contenido.
            </p>
            <div className="list-informative d-flex flex-column gap-2">
              <h3 className="list-informative-subtitle text-md m-0">
                <strong>Variantes disponibles:</strong>
              </h3>
              <ul className="list-informative-bullet">
                <li>Destacado sin multimedia con fondo secundario.</li>
              </ul>
            </div>
            <div className="list-informative d-flex flex-column gap-2">
              <h3 className="list-informative-subtitle m-0 text-md">
                <strong>Variaciones del componente:</strong>
              </h3>
              <ul className="list-informative-bullet">
                <li>Con botones, con enlaces, con accesos y botones de descarga.</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <Image
                src={`${basePath}/images/templates/pagina_simple/destacados.svg`}
                alt="Ejemplo uso de destacado"
                width="800"
                height="295"
                className="img-fluid mb-2"
              />
              <p className="text-sm">Variantes de accionables en el componente Destacado.</p>
            </div>
            <div>
              <p className="text-lg">Ejemplos de uso</p>
              <Image
                src={`${basePath}/images/templates/pagina_simple/destacados_2.svg`}
                alt="Ejemplo uso de destacado"
                width="800"
                height="295"
                className="img-fluid mb-2"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      subtitleBold: 'Galería de imágenes',
      content: (
        <>
          <p className="text-md m-0">
            Las imágenes se utilizan como complemento figurativo o ilustrativo de la información del párrafo de texto
            anterior o posterior, por eso sugerimos que su uso se limite a brindar mayor contexto a la persona usuaria.
          </p>
          <p className="text-md m-0">
            En una página simple, las imágenes se ubican antes, después, o entre párrafos de texto, y pueden ser parte
            de una <Link href={'https://gcba.github.io/Obelisco-V2/components/gallery'}>galería de imágenes</Link> a
            través de una cuadrícula de fotos interactivas y de una vista ampliada con el formato de carrusel. El{' '}
            <strong>máximo</strong> de imágenes para este tipo de formato es hasta 7 imágenes.
          </p>
          <div className="d-flex flex-column gap-3">
            <div>
              <p className="text-lg">Ejemplos de uso</p>
              <Image
                src={`${basePath}/images/templates/pagina_simple/contenido_texto_2.svg`}
                alt="Ejemplo uso de párrafo de texto"
                width="800"
                height="295"
                className="img-fluid mb-2"
              />
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="text-sm m-0">
                  En la continuación de un párrafo de texto, recomendamos mantener la disposición de 8 columnas para
                  ubicar las imágenes.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={`${basePath}/images/templates/pagina_simple/contenido_texto_3.svg`}
                alt="Ejemplo uso de párrafo de texto"
                width="800"
                height="295"
                className="img-fluid mb-2"
              />
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p className="text-sm m-0">
                  En <i>desktop</i>, evitar que las imágenes ocupen el 100% del ancho de la página para no interferir en
                  la lectura e interacción del usuario con la página.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Contenido de texto',
      content: (
        <>
          <div className="d-flex flex-column gap-3">
            <p className="text-md m-0">
              Podés consultar las <Link href={''}>pautas y lineamientos de contenidos</Link> para conocer más prácticas
              recomendadas sobre escritura en interfaces digitales.
            </p>

            <div className="d-flex flex-column gap-2">
              <h5 className="m-0 fw-semibold">Títulos</h5>
              <p className="text-md m-0">
                <strong>El título principal</strong> de la página es un encabezado H1 que admite hasta 3 líneas de
                extensión. En cambio, los <strong>títulos de las secciones</strong> dentro de la página son encabezados
                H2 y admiten un máximo de 70 caracteres, equivalente a una línea de texto.
              </p>
              <p className="text-md m-0">
                En dispositivos <i>desktop</i>, la extensión del contenedor de los encabezados H2 no debe exceder las 8
                columnas de la grilla.
              </p>
            </div>

            <div className="d-flex flex-column gap-2">
              <h5 className="m-0 fw-semibold">Párrafos de texto</h5>
              <p className="text-md m-0">
                En dispositivos <i>desktop</i>, el contenedor del párrafo de texto no debe ser mayor a 8 columnas. Nunca
                el 100% porque se generan líneas de texto muy largas y perjudica la lectura.
              </p>
              <Image
                src={`${basePath}/images/templates/pagina_simple/contenido_texto.svg`}
                alt="Ejemplo uso de párrafo de texto"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Espaciados',
      content: (
        <>
          <div className="d-flex flex-column" style={{ gap: '1.5rem' }}>
            <div className="d-flex flex-column" style={{ gap: '.75rem' }}>
              <p className="text-md m-0">
                Para mantener una estructura clara, legible y alineada al sistema de grillas, recomendamos los
                siguientes espaciados entre secciones para dispositivos desktop:
              </p>

              <div className="list-informative d-flex flex-column">
                <ul className="list-informative-bullet">
                  <li>
                    <strong>Espaciado horizontal de 48px:</strong> Entre secciones consecuentes del cuerpo de la página,
                    incluye secciones de contenido de texto, secciones de tarjetas, accesos u otro.
                  </li>
                  <li>
                    <strong>Espaciado horizontal de 24px:</strong> Entre el encabezado H2 de la sección y el contenido
                    en sí mismo, pueden ser tarjetas, accesos, contenido de texto u otro.
                  </li>
                </ul>
              </div>
            </div>

            <Image
              src={`${basePath}/images/templates/pagina_simple/espaciados.svg`}
              alt="Ejemplo de espaciados"
              width="800"
              height="295"
              className="img-fluid"
            />
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
        href="https://gcba.github.io/obelisco-demo/pagina_simple/ejemplo_12_columnas/index.html"
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

export default PaginaSimple12ColsDocs;
