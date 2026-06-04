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

const PaginaSimple8ColsDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel-content-docs');

  const DOC_SECTIONS = [
    {
      firstTitle: true,
      title: '¿A qué llamamos 8 columnas?',
      content: (
        <>
          <div>
            <div className="d-flex flex-column gap-3 mb-5">
              <p className="text-md m-0">
                En general, en página simple se organiza contenido informativo de forma detallada, sin que implique una
                acción por parte de la persona usuaria. Eventualmente, puede contener enlaces para redireccionar a otras
                secciones para que pueda realizar el trámite, inscribirse en el curso o reservar el turno.
                <br /> Sus características admiten la convivencia de contenido variado, entre lo estático (texto,
                imágenes, descripciones) y lo accionable (listas, cita, desplegables). Esto es posible porque la
                plantilla disponibiliza el 70% del ancho de la grilla (8 columnas).
              </p>

              <div className="list-informative d-flex flex-column gap-2">
                <h3 className="list-informative-subtitle m-0">Cuándo usar</h3>
                <ul className="list-informative-bullet">
                  <li>
                    Para combinar información textual (en formato párrafo, listas y cita) y sumar contenido multimedia
                    como imagen y video.
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
                    Para informar sobre la gestión de un trámite, recomendamos usar la plantilla página de{' '}
                    <Link href={'https://gcba.github.io/Obelisco-V2/templates/formularios/formulario-pagina-unica'}>
                      trámites
                    </Link>
                    .
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
              src={`${basePath}/images/templates/pagina_simple/estructura_gral.svg`}
              alt="Ejemplo de estructura general"
              width="800"
              height="295"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      title: 'Cuerpo de la página',
      content: (
        <>
          <p className="text-md">
            Este módulo tiene como objetivo concentrar el contenido principal de la página. Permite organizar la
            información y sumar recursos complementarios. Está compuesto por los siguientes elementos:
          </p>
        </>
      ),
    },
    {
      subtitleBold: 'Elementos de párrafo',
      content: (
        <>
          <div className="d-flex flex-column gap-3">
            <div className="list-informative d-flex flex-column gap-2">
              <h3 className="list-informative-subtitle m-0 text-md">
                Opciones disponibles para redactar, estructurar y dar forma al contenido textual de la página simple:
              </h3>
              <ul className="list-informative-bullet">
                <li>
                  Títulos y subtítulos que pueden ir de ‘Encabezado 2’ a ‘Encabezado 6’, utilizados para organizar y
                  jerarquizar el contenido en secciones, especialmente en textos extensos.
                </li>
                <li>
                  Texto general para el desarrollo completo de la información. Permite aplicar estilos de formato como
                  negrita e itálica para jerarquizar y destacar contenido relevante.
                </li>
                <li>Enlaces, permite enlazar información complementaria sin extender el texto principal.</li>
                <li>
                  Listas simples con viñetas o numeración para organizar información, que puede incluir enlace. Las
                  listas con viñetas se utilizan cuando los elementos no siguen un orden secuencial, mientras que las
                  listas numeradas se emplean cuando existe un orden o secuencia definida.
                </li>
                <li>
                  Listas simples con enlaces, que pueden tener o no icono de descarga, para enlazar con otras pantallas
                  y descarga de documentación.
                </li>
                <li>
                  Cita destacada, debe incluir la frase y, opcionalmente, puede incluir el nombre de la persona autora
                  de la cita.
                </li>
              </ul>
            </div>
            <Image
              src={`${basePath}/images/templates/pagina_simple/section-subtitle.svg`}
              alt="Ejemplo de estructura general"
              width="800"
              height="295"
              className="img-fluid my-3"
            />
          </div>
        </>
      ),
    },
    {
      subtitleBold: 'Elementos multimedia',
      content: (
        <>
          <div className="list-informative d-flex flex-column gap-2">
            <h3 className="list-informative-subtitle m-0 text-md">
              Opciones disponibles para incorporar recursos audiovisuales que complementan el contenido de la página
              simple:
            </h3>
            <ul className="list-informative-bullet">
              <li>
                Permite insertar una imagen puntual entre bloques de texto para acompañar o reforzar una idea específica
                del contenido. Recomendamos completar el campo de texto alternativo con una breve descripción de la
                imagen para garantizar la accesibilidad.
                <br />
                <br /> <b>Ejemplo de texto alternativo:</b> “Grupo de personas realizando actividades recreativas al
                aire libre”.
              </li>
              <li>
                Incrustación de video, permite incorporar contenido audiovisual en la página, ya sea mediante un video
                remoto (YouTube) o un archivo de video cargado desde el dispositivo. El uso de este elemento es opcional
                y se recomienda limitarlo a un solo video por publicación.
              </li>
              <li>
                Fotogalería, compuesta por varias imágenes presentadas en una grilla adaptable. El uso es opcional y
                permite cargar entre 1 y 7 elementos.
                <br /> <b>Peso máximo</b>: 400 KB
                <br /> <b>Formato permitido</b>: .jpg, .jpeg, .webp, .avif
              </li>
            </ul>
          </div>
          <Image
            src={`${basePath}/images/templates/pagina_simple/8-columns-image.svg`}
            alt="Ejemplo uso de imagen"
            width="800"
            height="295"
            className="img-fluid mt-4"
          />
          <Image
            src={`${basePath}/images/templates/pagina_simple/8-columns-video.svg`}
            alt="Ejemplo uso de video"
            width="800"
            height="295"
            className="img-fluid my-4"
          />
          <p className="text-xl">Buenas prácticas</p>
          <div className="d-flex">
            <span className="material-symbols-rounded text-success">check</span>

            <p>Redactar utilizando lenguaje claro, evitando tecnicismos innecesarios.</p>
          </div>
          <div className="d-flex">
            <span className="material-symbols-rounded text-success">check</span>

            <p>Incorporar recursos multimedia solo si aportan información útil o contextual.</p>
          </div>
          <div className="d-flex">
            <span className="material-symbols-rounded text-success">check</span>

            <p>Verificar enlaces antes de publicar.</p>
          </div>

          <p className="text-xl mt-4">Malas prácticas</p>
          <div className="d-flex">
            <span className="material-symbols-rounded text-danger">close</span>

            <p>Sobrecargar el contenido con elementos multimedia sin propósito informativo.</p>
          </div>
          <div className="d-flex">
            <span className="material-symbols-rounded text-danger">close</span>

            <p>Insertar bloques extensos de texto sin estructura, listas ni separación.</p>
          </div>
          <div className="d-flex">
            <span className="material-symbols-rounded text-danger">close</span>

            <p>Utilizar imágenes pixeladas o contenido no verificado.</p>
          </div>
        </>
      ),
    },
    {
      title: 'Componentes utilizados',
      subtitleBold: 'Galería de imágenes',
      content: (
        <>
          <p className="text-md">
            Las imágenes se utilizan como complemento figurativo o ilustrativo de la información del párrafo de texto
            anterior o posterior, por eso sugerimos que su uso se limite a brindar mayor contexto a la persona usuaria.
          </p>
          <p className="text-md">
            En una página simple, las imágenes se ubican antes, después, o entre párrafos de texto, y pueden ser parte
            de una <Link href={'https://gcba.github.io/Obelisco-V2/components/gallery'}>galería de imágenes</Link> a
            través de una cuadrícula de fotos interactivas y de una vista ampliada con el formato de carrusel. El{' '}
            <b>máximo</b> de imágenes para este tipo de formato es hasta 7 imágenes.
          </p>
          <p className="text-md">Ejemplos de uso</p>
          <Image
            src={`${basePath}/images/templates/pagina_simple/8-columns-gallery.svg`}
            alt="Ejemplo uso de galeria"
            width="800"
            height="295"
            className="img-fluid mb-2"
          />
          <div className="d-flex">
            <span className="material-symbols-rounded text-success">check</span>

            <p>
              En la continuación de un párrafo de texto, recomendamos mantener la disposición de 8 columnas para ubicar
              las imágenes.
            </p>
          </div>
          <Image
            src={`${basePath}/images/templates/pagina_simple/8-columns-text.svg`}
            alt="Ejemplo uso de parrafo texto"
            width="800"
            height="295"
            className="img-fluid mb-2"
          />
          <div className="d-flex">
            <span className="material-symbols-rounded text-danger">close</span>

            <p>
              En desktop, evitar que las imágenes ocupen el 100% del ancho de la página para no interferir en la lectura
              e interacción del usuario con la página.
            </p>
          </div>
        </>
      ),
    },
    {
      subtitleBold: 'Colapsables',
      content: (
        <>
          <div style={{ marginBottom: '1.75rem' }}>
            <p className="text-md" style={{ marginTop: '1.5rem', marginBottom: '.75rem' }}>
              Los colapsables sirven para mostrar y ocultar secciones de contenido relacionado en una página, lo que
              mejora la experiencia de las personas usuarias.
            </p>
            <div className="list-informative d-flex flex-column gap-2">
              <h3 className="list-informative-subtitle m-0">Variantes disponibles:</h3>
              <ul className="list-informative-bullet">
                <li>Colapsable sólo título (obligatorio).</li>
                <li>Colapsable con título y descripción (opcional).</li>
              </ul>
            </div>
            <div className="mt-3">
              <Image
                src={`${basePath}/images/templates/pagina_simple/colapsables.svg`}
                alt="Ejemplo uso de colapsable"
                width="800"
                height="295"
                className="img-fluid mb-2"
              />
              <p className="text-sm m-0">Variantes disponibles de Colapsables para la plantilla de página simple.</p>
            </div>
          </div>
          <div className="mb-3">
            <p className="text-xl fw-semibold">Contexto de uso</p>
            <p className="text-md mb-2">
              <strong>Para secciones de preguntas frecuentes.</strong> La cantidad máxima de opciones para incluir en
              una sección de preguntas frecuentes es de 6 colapsables, y una cantidad mínima de 4 opciones.
            </p>
            <Image
              src={`${basePath}/images/templates/pagina_simple/colapsables_2.svg`}
              alt="Ejemplo uso de colapsable"
              width="800"
              height="295"
              className="img-fluid mb-2"
            />
          </div>
          <div>
            <p className="text-md mb-2">
              Si son menos de 4 preguntas frecuentes recomendamos que no se use el componente Colapsables. En cambio, sí
              recomendamos redactar la información directamente en el cuerpo.
            </p>
            <Image
              src={`${basePath}/images/templates/pagina_simple/colapsables_3.svg`}
              alt="Ejemplo uso de colapsable"
              width="800"
              height="295"
              className="img-fluid mb-2"
            />
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
        href="https://gcba.github.io/obelisco-demo/pagina_simple/ejemplo_8_columnas/index.html"
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

export default PaginaSimple8ColsDocs;
