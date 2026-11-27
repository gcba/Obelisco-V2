import Image from 'next/image';
import React from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const basePath = '/Obelisco-V2';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

// import LinkClient from '../../components/LinkClient/index';
import { CONTENIDO_ESTATICO_3_COLS, CONTENIDO_ESTATICO_2_COLS } from './code-views';

const SECTIONS_DEV = [
  {
    title: 'Tres columnas',
    firstTitle: true,
    content: (
      <CodeBox codeHTML={CONTENIDO_ESTATICO_2_COLS}>
        <div className="container">
          <div className="box-sizing-static-content">
            <div className="static-content-items-2">
              <div className="col">
                <div className="static-content card unbordered">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    info
                  </span>
                  <p className="headline-lg">Este es el título del componente</p>
                  <p className="text-md">
                    Este un texto de prueba para representar la bajada del componente. El mismo no tiene una cantidad
                    mínima ni máxima de caracteres pero la sugerencia es 230.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="static-content card unbordered">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    info
                  </span>
                  <p className="headline-lg">Este es el título del componente</p>
                  <p className="text-md">
                    Este un texto de prueba para representar la bajada del componente. El mismo no tiene una cantidad
                    mínima ni máxima de caracteres pero la sugerencia es 230.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Dos columnas',
    content: (
      <CodeBox codeHTML={CONTENIDO_ESTATICO_3_COLS}>
        <div className="container">
          <div className="box-sizing-static-content">
            <div className="static-content-items-3">
              <div className="col">
                <div className="static-content card unbordered">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    info
                  </span>
                  <p className="headline-lg">Este es el título del componente</p>
                  <p className="text-md">
                    Este un texto de prueba para representar la bajada del componente. El mismo no tiene una cantidad
                    mínima ni máxima de caracteres pero la sugerencia es 230.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="static-content card unbordered">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    info
                  </span>
                  <p className="headline-lg">Este es el título del componente</p>
                  <p className="text-md">
                    Este un texto de prueba para representar la bajada del componente. El mismo no tiene una cantidad
                    mínima ni máxima de caracteres pero la sugerencia es 230.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="static-content card unbordered">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    info
                  </span>
                  <p className="headline-lg">Este es el título del componente</p>
                  <p className="text-md">
                    Este un texto de prueba para representar la bajada del componente. El mismo no tiene una cantidad
                    mínima ni máxima de caracteres pero la sugerencia es 230.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
];

const SECTION_UX = [
  {
    title: 'Uso',
    firstTitle: true,
    content: (
      <>
        <div>
          <p className="text-xl">Cuándo usar</p>
          <ul className="list-informative-bullet">
            <li>Cuando la información mostrada no requiera interacción por parte de la persona usuaria. </li>
            <li>Cuando se quieran destacar particularidades sobre eventos.</li>
            <li>Cuando se quieran destacar características relacionadas a servicios.</li>
            <li>Cuando se quieran destacar detalles de un área.</li>
          </ul>
        </div>

        <div className="list-informative" style={{ paddingTop: '32px' }}>
          <p className="text-xl">Cuándo no usar</p>
          <ul className="list-informative-bullet">
            <li>
              Cuando la persona usuaria precise interactuar con otra vista del sitio. En ese caso utilizar el componente
              <a href="https://gcba.github.io/Obelisco-V2/components/cards">Tarjeta</a>.
            </li>
            <li>
              Cuando la persona usuaria precise interactuar para conocer información relevante con una o dos llamadas a
              la acción. En ese caso utilizar el componente{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/highlighted">Destacado</a>.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'Agrupación',
    content: (
      <>
        <p className="text-md mb-4">
          El componente Contenido estático se utiliza en grupo para presentar información que no requiere interacción
          por parte de la persona usuaria y precisa mostrar datos de forma concisa a partir de un icono, título y
          bajada. Como por ejemplo: Detalles de servicios, un evento, un programa o un área.
        </p>

        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_1.svg`}
          alt="Ilustración de Agrupación de contenido estatico"
          width="800"
          height="200"
          className="img-fluid"
        />

        <div className="d-flex pt-3 mb-4">
          <span className="material-symbols-rounded text-success">check</span>

          <p className="mb-0">
            Utilizar un mínimo de 3 instancias de 4 columnas, no de 6. Usar componentes con la misma posición de icono.
          </p>
        </div>

        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_2.svg`}
          alt="Ilustración de Agrupación de contenido estatico"
          width="800"
          height="200"
          className="img-fluid"
        />

        <div className="d-flex pt-3 mb-4">
          <span className="material-symbols-rounded text-success">check</span>

          <p className="mb-0">
            En ancho completo de resolución desktop, no usar 1 instancia aislada. Usar componentes con una cantidad de
            columnas que permitan completar la o las filas. Por ejemplo: 2 de 6 columnas o 3 de 4 columnas.{' '}
          </p>
        </div>

        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_3.svg`}
          alt="Ilustración de Agrupación de contenido estatico"
          width="800"
          height="200"
          className="img-fluid"
        />

        <div className="d-flex pt-3 mb-4">
          <span className="material-symbols-rounded text-danger">close</span>

          <p className="mb-0">
            No utilizar instancias con altura variable. Normalizar la misma en todas las instancias.
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'Tipos',
    content: (
      <>
        <p className="text-md mb-4">
          El componente posee distintos tipos según la ubicación de su icono y su color de fondo.
        </p>

        <div className="max-items-2 mb-2" style={{ marginTop: '32px' }}>
          <div className="col pe-3">
            <p className="headline-lg fw-semibold">Fondo </p>
            <p className="text-md">
              Se puede elegir el color de fondo del componente entre dos opciones: Light (claro) o Blanco.
            </p>
          </div>
          <div className="col ps-3">
            <Image
              src={`${basePath}/images/contenido_estatico/contenido_estatico_4.svg`}
              alt="Botón primario"
              width="800"
              height="200"
              className="img-fluid"
            />
          </div>

          <div className="col pe-3">
            <p className="headline-lg fw-semibold">Ubicación del icono </p>
            <p className="text-md">
              Se puede elegir la ubicación del icono entre dos opciones: Centrado o zona superior izquierda.{' '}
            </p>
          </div>
          <div className="col ps-3">
            <Image
              src={`${basePath}/images/contenido_estatico/contenido_estatico_5.svg`}
              alt="Botón primario"
              width="800"
              height="200"
              className="img-fluid"
            />
          </div>
        </div>
      </>
    ),
  },
];

const SECTION_SPECS = [
  {
    title: 'Anatomía',
    firstTitle: true,
    content: (
      <>
        <p className="text-md">Elementos que componen el componente de Contenido estático.</p>
        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_6.svg`}
          alt="Anatomía del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />
        <div className="responsive-scroll mt-5" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  Elemento
                </th>
                <th scope="col" className="tb-text">
                  Carácter
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. Icono</td>
                <td>
                  Obligatorio. Elemento gráfico opcional que acompaña al contenido y refuerza visualmente su temática.
                </td>
              </tr>
              <tr>
                <td>2. Título</td>
                <td>Obligatorio. Texto breve que identifica el tema principal del contenido.</td>
              </tr>
              <tr>
                <td>3. Descripción</td>
                <td>Obligatorio. Texto complementario que amplía o contextualiza el título.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: 'Variantes',
    content: (
      <>
        <h5>Desktop</h5>
        <p className="headline-md">6 columnas</p>
        <p className="text-md">
          El componente ocupa 6 columnas de ancho. Se utiliza cuando se quiere compartir información más extensa que en
          el componente 4 columnas.
        </p>
        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_7.svg`}
          alt="Estado predeterminado del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />

        <p className="headline-md">4 columnas</p>
        <p className="text-md">
          El componente ocupa 4 columnas de ancho. Se utiliza cuando se quiere compartir información breve y
          estructurada dentro del maquetado.
        </p>
        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_8.svg`}
          alt="Estado predeterminado del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />

        <h5>Mobile</h5>
        <p className="headline-md">2 columnas</p>
        <p className="text-md">
          El componente ocupa 6 columnas de ancho. Se utiliza cuando se quiere compartir información más extensa que en
          el componente 4 columnas.
        </p>
        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_9.svg`}
          alt="Estado predeterminado del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    title: 'Modulación',
    content: (
      <>
        <p className="text-md my-4">
          El componente Contenido estático y sus variantes cuentan con un ancho fijo establecido. Dependiendo del tipo y
          el dispositivo, se modulan de diferentes maneras. En desktop, puede agruparse en 2 o 3 por línea y en mobile 1
          por línea.
        </p>
        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_10.svg`}
          alt="Tamaños del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />
        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_11.svg`}
          alt="Tamaños del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />
        <p className="text-md">
          En desktop, las instancias de 4 columnas pueden agruparse hasta un máximo de 3 por línea, mientras que las de
          6 columnas pueden hasta un máximo de 2 por línea.
        </p>
        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_12.svg`}
          alt="Tamaños del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />
        <p className="text-md">
          En mobile, las instancias se ubican una debajo de la otra y ocupan el ancho total de la grilla del
          dispositivo.
        </p>
      </>
    ),
  },
  {
    title: 'Ejemplos de uso',
    content: (
      <>
        <p className="text-md">
          Los grupos de contenido estático pueden formarse por distintos tipos tanto de 6 columnas como de 4.
        </p>

        <p className="headline-md">Grupo de 2 componentes de 6 columnas</p>
        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_13.svg`}
          alt="Tamaños del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />

        <div className="d-flex pt-3 mb-4">
          <span className="material-symbols-rounded text-success">check</span>

          <p className="mb-0">
            Un grupo con 2 componentes de 6 columnas, cada uno de ellos con el icono ubicado en la zona superior
            izquierda y con un fondo predeterminado.{' '}
          </p>
        </div>

        <p className="headline-md">Grupo de 6 componentes de 4 columnas</p>
        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_14.svg`}
          alt="Tamaños del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />

        <div className="d-flex pt-3 mb-4">
          <span className="material-symbols-rounded text-success">check</span>

          <p className="mb-0">
            Un grupo con 6 componentes de 4 columnas, cada uno de ellos con el icono ubicado en el centro y con fondo.
          </p>
        </div>

        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_15.svg`}
          alt="Tamaños del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />

        <div className="d-flex pt-3 mb-4">
          <span className="material-symbols-rounded text-danger">close</span>

          <p className="mb-0">
            Material Icons es la librería base principal para todas las interfaces. No utilizar íconos outline o con
            borde. Los iconos utilizados deben ser rounded y sólidos/rellenos.
          </p>
        </div>

        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_16.svg`}
          alt="Tamaños del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />

        <div className="d-flex pt-3 mb-4">
          <span className="material-symbols-rounded text-danger">close</span>

          <p className="mb-0">No utilizar bullets ni accionables.</p>
        </div>
      </>
    ),
  },
  {
    title: 'Espaciado',
    content: (
      <>
        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_17.svg`}
          alt="Tamaños del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />

        <p className="text-md">
          El espaciado recomendado para las instancias en dispositivos desktop es de 32px. en sentido horizontal, y
          32px. en sentido vertical.{' '}
        </p>

        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_18.svg`}
          alt="Tamaños del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />

        <p className="text-md">
          En dispositivos móviles, todas las instancias se ubican una debajo de la otra, ocupando el ancho total de la
          grilla del dispositivo y tienen una separación de 16 px.{' '}
        </p>
      </>
    ),
  },
];

const SECTION_ACCESSIBILITY = [
  {
    title: 'Navegación alternativa',
    firstTitle: true,
    content: (
      <>
        <p className="text-md mb-4">
          El componente Contenido etático se opera completamente con teclado. El foco sigue el orden visual de los
          controles y se mantiene visible en todo momento.
        </p>
        <span className="badge badge-s-default ms-1">Tab</span>
        <span className="badge badge-s-default">Enter</span>
        <span className="badge badge-s-default">Space</span>
        <span className="badge badge-s-default">Scape</span>
        <p className="text-md my-4">Recorre los elementos del componente.</p>
        <Image
          src={`${basePath}/images/contenido_estatico/contenido_estatico_19.svg`}
          alt="Navegación alternativa del contenido estatico"
          width="800"
          height="200"
          className="img-fluid"
        />
      </>
    ),
  },

  {
    title: 'Criterios WCAG aplicados',
    content: (
      <>
        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 1.1.1 Non-text Content (Level A)
        </a>
        <p>
          Si el campo tiene un ícono decorativo, por ejemplo, un ícono de búsqueda, debe tener una alternativa textual o
          estar marcado como decorativo (aria-hidden=&quot;true&quot; o role=&quot;presentation&quot;).
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 1.3.1 Info and Relationships (Level A)
        </a>
        <p>
          La información, la estructura y las relaciones transmitidas a través de la presentación pueden determinarse
          mediante programación o están disponibles en el texto.
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 1.3.12 Meaningful Sequence (Level A){' '}
        </a>
        <p>
          La información, la estructura y las relaciones transmitidas a través de la presentación pueden determinarse
          mediante programación o están disponibles en el texto.
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 1.4.11 Non-Text Contrast (Level AA)
        </a>
        <p>
          La presentación visual de elementos de la interfaz de usuario y objetos gráficos tiene por lo menos una
          relación de contraste de 3:1 con respecto a los colores adyacentes.{' '}
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 1.4.3 Contrast (Minimum) (Level AA)
        </a>
        <p>
          La presentación visual de texto y de imágenes de texto tiene una relación de contraste de por lo menos 4.5:1,
          excepto textos grandes e imágenes de texto grande que tienen un contraste de por lo menos 3:1, textos o
          imágenes que son parte de un componente inactivo de interfaz de usuario o son pura decoración, o logotipos.{' '}
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 1.4.4 Resize Text (Level AA)
        </a>
        <p>
          Excepto por los subtítulos e imágenes de texto, el texto puede redimensionarse hasta un 200 % sin tecnología
          de asistencia, sin pérdida de contenido ni funcionalidad.
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 1.4.10 Reflow (Level AA)
        </a>
        <p>
          El contenido puede presentarse sin pérdida de información o funcionalidad y sin necesidad de desplazarse en
          dos dimensiones, siempre que el desplazamiento vertical se ajuste a un ancho equivalente a 320 píxeles CSS y
          el desplazamiento horizontal a una altura equivalente a 256 píxeles CSS, excepto en aquellas partes del
          contenido que requieran un diseño bidimensional para su uso o significado.
        </p>

        <a
          className="external mb-2"
          href="https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html"
          target="_blank"
        >
          Success Criterion 1.4.12 Text Spacing (Level AA)
        </a>
        <p className="text-md">
          No se produce pérdida de contenido ni funcionalidad al configurar todo lo siguiente y no cambiar ninguna otra
          propiedad de estilo: altura de línea establecida en 1,5; espaciado después de párrafos establecido al menos en
          2 veces el tamaño de fuente; espaciado entre letras establecido al menos en 0,12 veces el tamaño de fuente;
          espaciado entre palabras establecido al menos en 0,16 veces el tamaño de fuente.
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 2.1.1 Keyboard (Level A)
        </a>
        <p>Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.</p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 2.1.2 No Keyboard Trap (Level A)
        </a>
        <p>
          Si el foco del teclado puede moverse a un componente de la página utilizando una interfaz de teclado, también
          debe ser posible mover el foco fuera de ese componente usando únicamente la misma interfaz de teclado. Si se
          requiere algo más que las teclas de flecha, tabulador u otros métodos estándar para salir, se debe informar al
          usuario sobre el método necesario para mover el foco.
        </p>
      </>
    ),
  },
];

const ContenidoEstaticoDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Contenido Estático"
        description={[
          'Los accesos funcionan como puntos de ingreso a diferentes secciones y pueden agruparse cuando hay una similitud en su contenido.',
        ]}
      />
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'section-specs',
            sectionContent: SECTION_SPECS,
          },
          {
            title: 'Accesibilidad',
            id: 'accessibility',
            sectionContent: SECTION_ACCESSIBILITY,
          },
        ]}
      />
    </>
  );
};

export default ContenidoEstaticoDocs;
