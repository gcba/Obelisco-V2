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

const TemplatePaginaSimpleDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel-content-docs');

  const DOC_SECTIONS = [
    {
      firstTitle: true,
      title: 'Estructura general',
      content: (
        <>
          <div>
            <div className="d-flex flex-column gap-3 mb-5">
              <p className="text-md m-0">
                Sus características admiten la convivencia de contenido variado, entre lo estático (texto, imágenes,
                descripciones) y lo accionable (tarjetas, destacados, accesos). Esto es posible porque la plantilla
                disponibiliza el 100% del ancho de la grilla (12 columnas).
              </p>

              <div className="list-informative d-flex flex-column gap-2">
                <h3 className="list-informative-subtitle m-0">Cuándo usar</h3>
                <ul className="list-informative-bullet">
                  <li>
                    Para describir un evento (fecha, descripción, fotos) y sumar secciones accionables como accesos a la
                    programación, inscripciones o descargas de material.
                  </li>
                  <li>
                    Para combinar información textual (qué es, requisitos, beneficios) con secciones interactivas como
                    accesos a trámites, descargas y enlaces de contacto.
                  </li>
                </ul>
              </div>

              <div className="list-informative d-flex flex-column gap-2">
                <h3 className="list-informative-subtitle m-0">Cuándo no usar</h3>
                <ul className="list-informative-bullet">
                  <li>
                    Para solicitudes de turnos, inscripciones o envíos de información. En estos casos la estructura debe
                    guiar al usuario con formularios, validaciones y pasos claros, recomendamos usar la plantilla de{' '}
                    <Link href={'https://gcba.github.io/Obelisco-V2/templates/formularios/formulario-pagina-unica'}>
                      Formularios multipágina
                    </Link>
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
      title: 'Componentes utilizados',
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
              En desktop, las tarjetas horizontales de 4 columnas pueden agruparse hasta un máximo de 3 por línea,
              mientras que las de 6 columnas pueden hasta un máximo de 2 por línea. Recomendamos que la cantidad máxima
              de opciones no supere las 6 tarjetas para optimizar la toma de decisiones y evitar abrumar a las personas
              usuarias.
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
                    Las listas de requisitos llevan únicamente un subtítulo y contenido, cualquier elemento adicional
                    debe ir fuera del componente.
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
      subtitleBold: 'Accesos',
      content: (
        <>
          <div className="d-flex flex-column gap-3 mb-3">
            <p className="text-md mb-0">
              Los accesos funcionan como puntos de ingreso a diferentes secciones y pueden agruparse cuando hay una
              similitud en su contenido.
            </p>
            <div className="list-informative d-flex flex-column gap-2">
              <h3 className="list-informative-subtitle m-0 text-md">
                <strong>Variantes disponibles:</strong>
              </h3>
              <ul className="list-informative-bullet">
                <li>Acceso con borde y descripción, sin icono.</li>
                <li>Acceso con borde, sin icono, ni descripción.</li>
              </ul>
            </div>
            <div className="list-informative d-flex flex-column gap-2">
              <h3 className="list-informative-subtitle m-0 text-md">
                <strong>Cantidad óptima de caracteres:</strong>
              </h3>
              <ul className="list-informative-bullet">
                <li>
                  <strong>Titulo:</strong> 2 líneas de texto, equivalente a 60 caracteres incluidos los espacios.
                </li>
                <li>
                  <strong>Descripción:</strong> 3 líneas de texto, equivalente a 90 caracteres incluidos los espacios.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <Image
                src={`${basePath}/images/templates/pagina_simple/accesos.svg`}
                alt="Ejemplo uso de acceso"
                width="800"
                height="295"
                className="img-fluid mb-2"
              />
              <p className="text-sm">Variantes disponibles de Accesos para la plantilla de página simple.</p>
            </div>

            <div>
              <p className="text-lg">Ejemplos de uso</p>
              <Image
                src={`${basePath}/images/templates/pagina_simple/accesos_2.svg`}
                alt="Ejemplo uso de acceso"
                width="800"
                height="295"
                className="img-fluid mb-2"
              />
              <div className="d-flex">
                <span className="material-symbols-rounded text-success">check</span>
                <p>
                  Las listas de requisitos llevan únicamente un subtítulo y contenido, cualquier elemento adicional debe
                  ir fuera del componente.
                </p>
              </div>
            </div>

            <div>
              <Image
                src={`${basePath}/images/templates/pagina_simple/accesos_3.svg`}
                alt="Ejemplo uso de acceso"
                width="800"
                height="295"
                className="img-fluid mb-2"
              />
              <div className="d-flex">
                <span className="material-symbols-rounded text-danger">close</span>
                <p>
                  Las listas de requisitos llevan únicamente un subtítulo y contenido, cualquier elemento adicional debe
                  ir fuera del componente.
                </p>
              </div>
            </div>
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

            <div className="d-flex flex-column gap-2">
              <h5 className="m-0 fw-semibold">Galería de imágenes</h5>
              <p className="text-md m-0">
                Las imágenes se utilizan como complemento figurativo o ilustrativo de la información del párrafo de
                texto anterior o posterior, por eso sugerimos que su uso se limite a brindar mayor contexto a la persona
                usuaria.
              </p>
              <p className="text-md m-0">
                En una página simple, las imágenes se ubican antes, después, o entre párrafos de texto, y pueden ser
                parte de una{' '}
                <Link href={'https://gcba.github.io/Obelisco-V2/components/gallery'}>galería de imágenes</Link> a través
                de una cuadrícula de fotos interactivas y de una vista ampliada con el formato de carrusel. El{' '}
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
                      En <i>desktop</i>, evitar que las imágenes ocupen el 100% del ancho de la página para no
                      interferir en la lectura e interacción del usuario con la página.
                    </p>
                  </div>
                </div>
              </div>
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

export default TemplatePaginaSimpleDocs;
