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

  const versionPages = { text: ` ${version}`, url: 'https://github.com/gcba/Obelisco-V2/releases/latest', id: 1 };
  const sections = [
    {
      title: 'Versión 1.18.1',
      date: '13/08/2026',
      content: (
        <>
          <ul className="docs-list">
            <p
              className="text-body-secondary d-flex text-sm align-items-center gap-1 mb-0"
              style={{ paddingBottom: '16px' }}
            >
              <span className="material-symbols-rounded" aria-hidden="true" style={{ color: '#0086AD' }}>
                info
              </span>
              <span>Esta versión contiene cambios de colores que impactan al sistema en su totalidad.</span>
            </p>
            <p>La Versión 1.18.1 contiene lo siguiente: </p>
            <li>Se crea una nueva paleta de colores. Todos los colores de la rampa cambiaron.</li>
            <li>
              <strong>Correciones (fix):</strong>
              <ul>
                <li>
                  Se corrige el color y tamaño de las flechas de Carrusel en estado <code>focus</code>, ahora se ve el
                  ícono correcto.
                </li>
                <li>Se corrige el indicador del footer en responsive.</li>
                <li>
                  Se corrige el <code>padding</code> de disposición de Destacados verticales, en pantallas pequeñas.{' '}
                </li>
                <li>
                  Destacado container con degrade:
                  <ul>
                    <li>
                      Se corrige el alto y el alto máximo. Mide por defecto y cómo máximo <code>432px</code>.
                    </li>
                    <li>
                      Se corrige que al tener una imagen ancha, esta no empuje al contenido. Ahora ambos ocupan 50%, sin
                      importar el tamaño de la imagen.
                    </li>
                    <li>Al Destacado container sin multimedia, se le corrigen los espaciados en responsive.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Versión 1.18.0',
      date: '28/07/2026',
      content: (
        <>
          <ul className="docs-list">
            <p>La Versión 1.18.0 contiene lo siguiente: </p>
            <li>
              Se crea una nueva variante de Tarjetas verticales de noticias, sin borde:{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/cards#section-dev-10">
                Tarjetas de noticias sin borde
              </a>
              .
            </li>
            <li>
              Se crea una nueva Tarjeta vertical, de cursos:{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/cards#section-dev-10">Tarjetas de cursos</a>.
            </li>
            <li>
              Se truncan tarjetas verticales (excepto eventos, impacto visual y noticia sin borde) a 2 líneas en título,
              3 líneas en descripción.
            </li>
            <li>
              <strong>Correciones (fix):</strong>
              <ul>
                <li>
                  Estado <code>focus</code> en Cabecera de página institucional, con accionable campo buscador.
                </li>
                <li>
                  Carrusel de destacados entre <code>992px</code> y <code>1200px</code>. La disposición pasa a ser
                  vertical.
                </li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Versión 1.17.0',
      date: '27/07/2026',
      content: (
        <>
          <ul className="docs-list">
            <p>La Versión 1.17.0 contiene lo siguiente: </p>
            <li>
              Se crea una nueva variante de Cabecera de Página con multimedia:{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/hero-multimedia">Cabecera de Página multimedia</a>.
            </li>
            <li>
              Se creó la sección de{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/hero">Cabecera de Página institucional</a>.
            </li>
            <li>
              Se eliminaron las variantes de colores para cabecera institucional, dejando como único color de fondo
              relacionado al manual de marca <code>bg-blue</code>.
            </li>
            <li>
              Se eliminó la variante &quot;dinámica&quot; para cabeceras con clase <code> wave </code>y sus respectivas
              variantes de multimedia.
            </li>
          </ul>
          En{' '}
          <a href="https://gcba.github.io/Obelisco-V2/documentation/update-component#section-change-8">
            Cambios en componente
          </a>{' '}
          está la documentación de las clases en detalle.
        </>
      ),
    },
    {
      title: 'Versión 1.16.0',
      date: '21/07/2026',
      content: (
        <>
          <ul className="docs-list">
            <p>La Versión 1.16.0 contiene lo siguiente: </p>
            <li>
              Se crea una nueva variante de Tarjetas horizontales:{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/cards#section-dev-1">
                Tarjetas visuales con ícono
              </a>
              .
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Versión 1.15.0',
      date: '15/07/2026',
      content: (
        <>
          <ul className="docs-list">
            <p>La Versión 1.15.0 contiene lo siguiente: </p>
            <li>Componente Tarjetas, se crea la variante Tarjetas de impacto visual.</li>
            <li>
              Componente Carrusel, se crea la variante que utiliza las Tarjetas de impacto visual, tiene una disposición
              de controles diferente y exclusiva para esta variante.
            </li>
            <li>
              <strong>Correción (fix) en Destacado container</strong>.
              <ul>
                <li>
                  El componente con multimedia pasa a tener una altura mínima de <code>432px</code>y sin multimedia{' '}
                  <code>264px</code>.
                </li>
                <li>
                  Se crea la clase <code>.panel-img-edge</code> para manipular las imagenes grandes, del mismo o mayor
                  tamaño que el alto mínimo. Esta nueva clase se utiliza junto con <code>.panel-img</code>.
                </li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Versión 1.14.0',
      date: '07/07/2026',
      content: (
        <>
          <ul className="docs-list">
            <p>La Versión 1.14.0 contiene lo siguiente: </p>
            <li>
              Se sumaron nuevas variantes para el componente{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/highlighted">Destacado:</a>
            </li>
            <ul>
              <li>Se agrega la variante con color en degrade y ancho contenedor.</li>
              <li>
                Se agrega la variante con fondos de color <code>dark</code> y <code>light</code>, para ancho contenedor
                en destacados horizontales.
              </li>
              <li>Se agrega la variante con fondo blanco para destacado vertical.</li>
              <li>
                Se agrega la clase <code>panel-inverted</code> para invertir el contenido en los destacados horizontales
                en todas sus variantes. Se usa así: <code>{'<div class="panel-horizontal panel-inverted">'}</code>
              </li>
            </ul>
            <br />
            <li>
              Se modifican los bordes y padding para el componente: <i>Desplegable de navegación y selección</i> y{' '}
              <i>Navegacion horizontal y vertical.</i>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Versión 1.13.0',
      date: '30/06/2026',
      content: (
        <>
          <ul className="docs-list">
            <p>La Versión 1.13.0 contiene lo siguiente: </p>
            <li>
              Se crean nuevas clases para las nuevas variantes del componente{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/badge">Etiqueta</a>:
              <ul>
                <li>
                  Etiquetas primarias y secundarias.
                  <br />
                  <code>.badge-p-{'{color}'}</code> y <code>.badge-s-{'{color}'}</code>
                </li>
                <li>
                  Etiquetas clickeables
                  <br />
                  <code>.badge-s-link-{'{color}'}</code>
                </li>
                <li>
                  Etiquetas seleccionables y eliminables
                  <br />
                  <code>.badge-select</code> y <code>.badge-remove</code>
                </li>
                <li>
                  Tamaños de etiquetas
                  <br />
                  <code>.badge-sm</code> y <code>.badge-lg</code>
                </li>
              </ul>
              En{' '}
              <a href="https://gcba.github.io/Obelisco-V2/documentation/update-component#section-change-16">
                Cambios en componente
              </a>{' '}
              está la documentación de las nuevas clases en detalle.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Versión 1.12.1',
      date: '24/06/2026',
      content: (
        <>
          <ul className="docs-list">
            <p>La Versión 1.12.1 contiene lo siguiente: </p>
            <li>
              Al componente Indicador, en Pie de página (Footer), se cambia la clase <code>btn-secondary</code> por{' '}
              <code>btn-primary</code>.
            </li>
            <li>
              Se corrige el color de los elementos en el componente Alerta de sistema - Advertencia (Warning) por{' '}
              <code>$primary</code>.
            </li>
            <li>
              Se alinea el ícono informativo de estado en{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/form-validation"> Validacion de Inputs</a>.
            </li>
            <li>
              Se cambia el color de <code>$secondary</code> por <code>$primary</code> para item de eventos (simples o
              múltiples) en componente Calendario.
            </li>
            <li>
              Se cambia la clase <code>bg-primary</code> por <code>bg-secondary</code> en Barra de progreso.
            </li>
            <li>
              Se modifica el radio de borde del botón de carga de archivo. Ahora es <code>$pill</code>, igual que los
              input.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Versión 1.12.0',
      date: '22/06/2026',
      content: (
        <ul className="docs-list">
          <p className="text-body-secondary d-flex text-sm align-items-center gap-1">
            <span className="material-symbols-rounded" aria-hidden="true" style={{ color: '#0086AD' }}>
              info
            </span>
            <span>
              Esta versión implican cambios de estilos que impactan al sistema en general y todos sus componentes. Se
              recomienda verificar el buen uso de clases para su correcta visualización.
            </span>
          </p>
          <p>La Versión 1.12.0 contiene lo siguiente: </p>
          <li>
            La tipografía principal pasa a ser Archivo. La nueva importación se encuentra en el siguiente{' '}
            <a href="https://gcba.github.io/Obelisco-V2/getting-started/imports">link</a>.
          </li>
          <li>
            Se agregó en Guías de estilos, una sección de{' '}
            <a href="https://gcba.github.io/Obelisco-V2/components/borders">Bordes</a>. Allí se indican los nuevos
            valores y clases para <code>{'border-radius'}</code>.
          </li>
          <li>
            Se invierte el color <code> primario </code> por <code> secundario</code>.
          </li>
          <li>
            El color terciario pasa a ser <code>{'cyan-500'}</code> (<code>{'#64D8C8'}</code> ).
            <br />
            El color terciario <strong>outline</strong> , pasa a ser <code>{'cyan-900'}</code> (<code>{'#10413a'}</code>{' '}
            ).
          </li>
          <li>
            El componente Pie de página (Footer) junto con el componente Indicador, se visualizan con nuevos estilos de
            radio y color.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.11.1',
      date: '04/06/2026',
      content: (
        <ul className="docs-list">
          <p>La Versión 1.11.1 contiene lo siguiente: </p>
          <li>
            Se crea el componente{' '}
            <a href="https://gcba.github.io/Obelisco-V2/components/highlighted-lateral" target="_blank">
              Destacado lateral
            </a>
            . En{' '}
            <a href="https://gcba.github.io/Obelisco-V2/documentation/update-component#section-change-14">
              Cambios en componentes
            </a>{' '}
            está la documentación de la nueva estructura.
          </li>
          <li>Se elimina el componente Bloque de trámite, se lo reemplaza por el componente Destacado lateral.</li>
          <li>
            En el componente Mapa se modificó el botón de <code>primario</code> a <code>primario outline</code>
          </li>
          <li>Se agrega la posibilidad de tener título y bajada en Tablas.</li>
          <li>
            La etiqueta <code>{' <h5>'}</code> pasa a tener peso <code>{'semibold'}</code>.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.10.0',
      date: '09/03/2026',
      content: (
        <ul className="docs-list">
          <p>La Versión 1.10.0 contiene lo siguiente: </p>
          <li>
            Se corrigen estilos en el componente Cabecera de página para color de fondo y Breadcrumb (migas de pan).
          </li>
          <br />
          <li>Se agregan estilos en el componente Calendario, para indicar uno o más &quot;eventos&quot; por fecha.</li>
          <li>Se agregan estilos para el nuevo comportamiento que indica la fecha actual.</li>
          <li>El componente Calendario cuenta con un ejemplo interactivo.</li>
          En{' '}
          <a href="https://gcba.github.io/Obelisco-V2/documentation/update-component#section-change-9">
            Cambios en componentes
          </a>{' '}
          está la documentación de las nuevas clases.
        </ul>
      ),
    },
    {
      title: 'Versión 1.9.1',
      date: '18/02/2026',
      content: (
        <ul className="docs-list">
          <p>La Versión 1.9.1 contiene lo siguiente: </p>
          <li>
            Se corrige la visualización de los elementos <code>{'<iframe>'}</code> para la versión multimedia de
            Cabecera de página.
          </li>
          <li>
            Se agregan clases para la alineación de la multimedia en Cabecera de página. En{' '}
            <a href="https://gcba.github.io/Obelisco-V2/documentation/update-component#section-change-8">
              Cambios en componentes
            </a>{' '}
            está la documentación de las nuevas clases.
          </li>
          <li>
            Se agrega la variante encabezado Noticias en{' '}
            <a href="https://gcba.github.io/Obelisco-V2/components/hero">Cabecera de pagina</a>
          </li>
          <li>Se corrige fix de modal en mobile.</li>
          <li>Se corrige fix en la visualización del componente galería.</li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.9.0',
      date: '10/02/2026',
      content: (
        <ul className="docs-list">
          <p>La Versión 1.9.0 contiene lo siguiente: </p>
          <li>
            Se incorpora la<strong> nueva versión de boxicons 3.0.8</strong>, eso trae los siguientes cambios:
          </li>

          <div className="responsive-scroll mb-3" tabIndex={0}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="tb-text">
                    Antes
                  </th>
                  <th scope="col" className="tb-text">
                    Ahora
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>{`<i class="o-icon bx bxl-instagram-alt">`}</code>
                  </td>
                  <td>
                    <code>{`<i class="o-icon bxl bx-instagram-alt">`}</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <li>
            Se crea la <a href="http://">seccion de Íconos</a>, con su documentación de uso.
          </li>
          <li>
            La red social Twitter ya no necesita la clase <code>{'social-x'}</code>, en la nueva versión de Box Icons se
            encuentra el nuevo ícono <i className="o-icon bxl bx-twitter-x" style={{ verticalAlign: 'sub' }}></i>{' '}
            <code>{'<i className="o-icon bxl bx-twitter-x"></i>'}</code>
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.8.4',
      date: '10/12/2025',
      content: (
        <ul className="docs-list">
          <p>La Versión 1.8.4 contiene lo siguiente: </p>
          <li>Se modifica el borde en componente Alertas.</li>
          <li>
            Se agrega una nueva variante &quot;Alerta sistemas&quot; en el componente Alertas. En{' '}
            <a href="https://gcba.github.io/Obelisco-V2/documentation/update-component#section-change-3">
              Cambios en componentes
            </a>{' '}
            está la documentación de las nuevas clases.
          </li>
          <li>En el componente Carrusel, el contenido se alinea con el container, solo en resoluciones desktop.</li>
          <li>Se agrega la variante de fondo blanco para el carrusel de destacados.</li>
          <li>
            Se agregan clases en los elementos <code>{'<img>'}</code> y <code>{'<video>'}</code> para ajustar el
            alineamento de la multimedia en el componente Cabecera de Página. En{' '}
            <a href="https://gcba.github.io/Obelisco-V2/documentation/update-component#section-change-8 ">
              Cambios en componentes
            </a>{' '}
            está la documentación de las nuevas clases.
          </li>
          <li>Se agrega la variante de fondo oscuro al componente destacado horizontal.</li>
          <li>Se hacen correcciones de los code-view en los componentes.</li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.8.3',
      date: '14/11/2025',
      content: (
        <ul className="docs-list">
          <p>La versión 1.8.3 contiene lo siguiente: </p>
          <li>
            Se corrige la visualización de Carrusel de Tarjetas, al ser menos de 3 por slide. Siendo 3 el máximo
            permitido.
          </li>
          <li>Se corrige fix de Carrusel de Destacados en Desktop.</li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.8.2',
      date: '11/11/2025',
      content: (
        <ul className="docs-list">
          <p>La versión 1.8.2 contiene lo siguiente: </p>
          <li>
            Se agrega la clase <code>.card-items</code> al componente carrusel para asegurar la correcta visualización
            de la altura de las tarjetas.
          </li>
          <li>
            Se corrigieron los <code>code views</code> de los componentes y los redireccionamientos de las URLs dentro
            del sitio web.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.8.1',
      date: '06/11/2025',
      content: (
        <ul className="docs-list">
          <p>La versión 1.8.1 contiene lo siguiente: </p>
          <li>
            Se modifica la variante{' '}
            <a href="https://gcba.github.io/Obelisco-V2/components/highlighted#section-dev-2">Destado Conjunto</a>, del
            componente Destacado. En{' '}
            <a href="https://gcba.github.io/Obelisco-V2/documentation/update-component#section-change-14">
              Cambios en componentes
            </a>
            , se encuentran las modificaciones.
          </li>
          <li>
            Se realizaron correcciones en el componente Cabecera de Página, también documentadas en{' '}
            <a href="https://gcba.github.io/Obelisco-V2/documentation/update-component#section-change-8">
              Cambios en componentes
            </a>
            .
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.8.0',
      date: '28/10/2025',
      content: (
        <ul className="docs-list">
          <p>La Versión 1.8.0 contiene lo siguiente: </p>
          <li>Se modifica el nombre del componente &quot;Tarjeta de Agenda&quot; a &quot;Tarjeta de Eventos&quot;</li>
          <li>
            Se crea la clase <code>.card-eventos</code> para espaciados y tamaño. En{' '}
            <a href="https://gcba.github.io/Obelisco-V2/documentation/update-component#section-change-31">
              Cambios en componentes
            </a>{' '}
            se disponibiliza la documentación del componente.
          </li>
          <li>
            Se crea el componente <a href="https://gcba.github.io/Obelisco-V2/components/carousel">Carrusel.</a>
          </li>
          <li>
            El componente cuenta con las variantes para <strong>Destacados</strong> y <strong>Tarjetas</strong> en su
            versión <i>desktop</i> y <i>mobile</i> para fondos <i>claros</i> y <i>oscuros</i>.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.7.1',
      date: '20/10/2025',
      content: (
        <ul className="docs-list">
          <p>La versión 1.7.1 contiene lo siguiente: </p>
          <li>Se corrigen alineaciones y márgenes del componente Cabecera de Página</li>
          <li>
            <strong>
              Se define un punto de corte (breakpoint) en la etiqueta <code>body</code>.{' '}
            </strong>
            Para dispositivos con resoluciones superiores a 1920px, el contenido tiene un ancho máximo de 1900px.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.7.0',
      date: '15/10/2025',
      content: (
        <ul className="docs-list">
          <p>La versión 1.7.0 contiene lo siguiente: </p>
          <li>
            Se crea el componente <a href="https://gcba.github.io/Obelisco-V2/components/hero">Cabecera de página.</a>
          </li>
          <li>
            <strong>Contenido principal:</strong> Se crean las clases <code>.bg-content-hero-{'{color}'} </code>
            para definir el color de fondo del contenido principal del Hero. <br />
            Colores disponibles:
            <ul>
              <li className="mb-0">
                <code>sky</code>
              </li>
              <li className="mb-0">
                <code>blue</code>
              </li>
              <li className="mb-0">
                <code>cyan</code>
              </li>
              <li className="mb-0">
                <code>yellow</code>
              </li>
              <li className="mb-0">
                <code>red</code>
              </li>
              <li className="mb-0">
                <code>purple</code>
              </li>
              <li className="mb-0">
                <code>light</code>
              </li>
              <li className="mb-0">
                <code>dark</code>
              </li>
            </ul>
          </li>

          <li>
            <strong>Aside:</strong> Se crean las clases <code>.bg-aside-hero-{'{color}'}</code>, que deben utilizarse
            junto con <code>.aside</code> para definir el color del fondo lateral. <br />
            Colores disponibles:
            <ul>
              <li>
                <code>dark</code>
              </li>
              <li>
                <code>light</code>
              </li>
            </ul>
            <p>Además el aside puede estar acompañado de multimedia, incluyendo imágenes o videos.</p>
          </li>

          <li>
            <strong>Decoraciones visuales:</strong> Se incorporan las clases <code>.corner</code> (borde esquinado) y{' '}
            <code>.wave</code> (efecto de onda).
          </li>

          <li>
            <strong>Accionables:</strong> Los ejemplos que tenemos disponibles pueden ser de tipo:
            <ul>
              <li>
                <strong> Botón: </strong>Donde se incorpora la clase <code>.btn-hero</code>, que permite generar un
                botón expandible a partir de 360px de ancho.
              </li>
              <li>
                <strong>Buscador: </strong>Donde se integran las clases <code>.search-wrapper</code>,{' '}
                <code>.search-results</code>, <code>.search-btn-container</code> y{' '}
                <code>#search-home.form-control</code>.
              </li>
              <li>
                Para <strong>Etiquetas</strong> y <strong>Desplegables</strong> se colocan las clases necesarias para la
                disposición visual y espaciados como <code>d-flex</code>, <code>d-grid</code>, <code>column-gap-2</code>{' '}
                o <code>row-gap-4</code>
              </li>
            </ul>
            {/* <p className='mb-0'>
              <strong> Botón: </strong>Donde se incorpora la clase <code>.btn-hero</code>, que permite generar un botón expandible a
              partir de 360px de ancho.
            </p>
            <p>
              <strong>Buscador: </strong>Donde se integran las clases <code>.search-wrapper</code>,{' '}
              <code>.search-results</code>, <code>.search-btn-container</code> y <code>#search-home.form-control</code>.
            </p>
            <p>
              Para <strong>Etiquetas</strong> y <strong>Desplegables</strong> se colocan las clases necesarias para la disposición 
              visual y espaciados como <code>d-flex</code>, <code>d-grid</code>, <code>column-gap-2</code> o <code>row-gap-4</code>
            </p> */}
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.6.2',
      date: '09/10/2025',
      content: (
        <ul className="docs-list">
          <p>La versión 1.6.2 contiene lo siguiente: </p>
          <li>
            Se modifica la propiedad color del componente Migas de pan para fondos claros al <code>#101e37</code>
          </li>
          <li>
            Se agrega la variante <code>dark</code> de Migas de pan para fondos oscuros
          </li>
          <li>Se modifica el color de la línea divisoria del componente header</li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.6.1',
      date: '02/09/2025',
      content: (
        <ul className="docs-list">
          <p>La versión 1.6.1 contiene lo siguiente: </p>
          <li>Actualización de la Ficha de componente Páginado.</li>
          <li>Actualización de la Ficha de componente Tarjetas.</li>
          <li>Nueva variante de componente Tarjetas con miscelánea.</li>
          <li>
            En{' '}
            <a href="https://gcba.github.io/Obelisco-V2/documentation/update-component#section-change-31">
              Cambios de componentes
            </a>{' '}
            se encuentran las clases para las Tarjetas con miscelánea.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.6.0',
      date: '07/07/2025',
      content: (
        <ul className="docs-list">
          <p>La versión 1.6.0 contiene lo siguiente: </p>
          <li>
            Se disponibiliza componente Galeria, se incluye documentación en{' '}
            <a href="https://gcba.github.io/Obelisco-V2/documentation/update-component#section-change-18">
              Cambios en componentes
            </a>
            .
          </li>
          <li>Fix de comportamiento de tarjetas verticales de noticias.</li>
          <li>
            Se crea la clase <code>has-card-items</code> para tarjetas con disposición y scroll.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.6',
      date: '28/05/2025',
      content: (
        <ul className="docs-list">
          <p>La versión 1.5.6 contiene lo siguiente: </p>
          <li>
            Se modifica el posicionamiento del texto de asistencia para tener una mejor alineación entre el input y
            label en formularios horizontales.
          </li>
          <li>Se modifica el posicionamiento del contador de caracteres en validación del input textarea.</li>
          <li>
            Se agrega un espacio superior e inferior <i>(css)</i> en la clase <code>form-label-container</code>.
          </li>
          <li>
            Se agrega la sección de diagramación en patrones <i>(documentación).</i>
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.5',
      date: '09/05/2025',
      content: (
        <ul className="docs-list">
          <p>
            La versión 1.5.5 contiene el fix de la versión anterior, agregando los archivos de estilos css compilados.{' '}
          </p>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.4',
      date: '08/05/2025',
      content: (
        <ul className="docs-list">
          <p>La versión 1.5.4 contiene lo siguiente: </p>
          <li>
            Se corrigen estilos de la clase <code>form-control</code>
          </li>
          <li>
            Se agrega la variante en formulario de selección de <i>radio-group</i> y <i>checkbox-group</i>
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.3',
      date: '23/04/2025',
      content: (
        <ul className="docs-list">
          <p>La versión 1.5.3 contiene lo siguiente: </p>
          <li>Creación del componente Input File (Carga de archivo).</li>
          <li>Creación de la etiqueta Badge Forms para identificar si un campo es requerido u opcional.</li>
          <li>
            Se modifica visualmente la validación de los campos manteniendo la misma clase <code>invalid-feedback</code>
            ; <code>valid-feedback</code>
          </li>
          <li>Se modifica el gap entre el subtítulo y los ítems en los componentes de Listas de 8px a 4px.</li>
          <li>Se incorporó una volanta descriptiva dentro del componente Pasos de un formulario</li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.2',
      date: '25/03/2025',
      content: (
        <ul className="docs-list">
          <p>La versión 1.5.2 contiene los siguientes fixes: </p>
          <li>Nueva variante del componente Header: &quot;Banner del GCBA&quot;. Actualización de su ficha.</li>
          <li>Se actualiza la guía de adopción de Obelisco, incluyendo el modelo de contribución.</li>
          <li>Se actualiza el PDF descargable de la guía de adopción en la sección de &quot;Sobre Obelisco&quot;.</li>
          <li>
            Nuevos templates de issues para contribuir con Obelisco: &quot;new_feature&quot; y &quot;bug_report&quot;.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.1',
      date: '02/12/2024',
      content: (
        <ul className="docs-list">
          <p>La versión 1.5.1 contiene los siguientes fixes: </p>
          <li>
            Se modifica el máximo de líneas en título (2) y descripción (3) del{' '}
            <span className="fst-italic">organismo Accesos.</span>
          </li>
          <li>
            Se ajusta el alineado vertical del componente radio que se encuentra dentro del componente{' '}
            <span className="fst-italic">Colapsable con lista seleccionable.</span>
          </li>
          <li>Se modifica el tamaño del ícono en botón mediano a 18px. </li>
          <li>
            En el organismo Pie de página <span className="fst-italic">(Footer)</span>, se coloca el ícono de la red
            social &quot;X&quot;, por medio de la clase <code>.social-x </code> antes utilizada en una etiqueta{' '}
            <code>img</code>.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.0',
      date: '28/11/2024',
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
      date: '25/11/2024',
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
    // **
    {
      title: 'Versión 1.0.0',
      date: '05/09/2024',
      content: (
        <ul className="docs-list">
          <p>La versión 1.0.0 es la primer versión de Obelisco V2.</p>
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
          'En esta sección se encuentran los versionados de la librería y la documentación de los cambios que se hicieron sobre cada versión de Obelisco.',
          <>
            <span className="d-flex gap-1">
              Versión actual:{' '}
              <Link href="https://github.com/gcba/Obelisco-V2/releases" target="blank">
                {versionPages.text}
              </Link>{' '}
              <i className="bxl bx-github mt-1" style={{ fontSize: '18px' }} />
            </span>
          </>,
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="change" />
    </>
  );
};

export default ReleasesComponents;
