'use client';

import { basePath } from '@/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeCopy from '@/components/CodeBox';
import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  PAGINATION_CENTRAL,
  PAGINATION_FINAL,
  PAGINATION_INITIAL,
  PAGINATION_DESCRIPTION,
  PAGINATION_DISABLED,
  PAGINATION_ACCESSIBILITY,
} from './code-views';

const PaginationDocs: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<'inicial' | 'central' | 'final'>('inicial');

  const getCodeExample = () => {
    switch (selectedExample) {
      case 'central':
        return PAGINATION_CENTRAL;
      case 'final':
        return PAGINATION_FINAL;
      case 'inicial':
      default:
        return PAGINATION_INITIAL;
    }
  };

  const SECTIONS_DEV = [
    {
      title: 'Numerado',
      firstTitle: true,
      content: (
        <CodeBox codeHTML={getCodeExample()}>
          <div className="row justify-content-center mt-4">
            <div className="col-auto">
              <div className="btn-group" role="group" aria-label="Basic example">
                <button
                  type="button"
                  className={`btn ${selectedExample === 'inicial' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSelectedExample('inicial')}
                >
                  Inicial
                </button>
                <button
                  type="button"
                  className={`btn ${selectedExample === 'central' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSelectedExample('central')}
                >
                  Central
                </button>
                <button
                  type="button"
                  className={`btn ${selectedExample === 'final' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSelectedExample('final')}
                >
                  Final
                </button>
              </div>
            </div>
          </div>
          <div className="my-4 text-center">
            {selectedExample === 'inicial' && (
              <div className="container">
                <nav aria-label="Ejemplo de paginado numerado inicial">
                  <ul className="pagination">
                    <li className="page-item" style={{ opacity: 0 }}>
                      <span className="page-link">
                        <span className="page-previous-icon" aria-hidden="true"></span>
                        <span className="page-previous-text">Anterior</span>
                      </span>
                    </li>
                    <li className="page-item active">
                      <LinkClient className="page-link">1</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">2</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">3</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">4</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">5</LinkClient>
                    </li>
                    <li className="page-item no-events">
                      <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">10</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">
                        <span className="page-next-text">Siguiente</span>
                        <span className="page-next-icon" aria-hidden="true"></span>
                      </LinkClient>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
            {selectedExample === 'central' && (
              <div className="container">
                <nav aria-label="Ejemplo de paginado numerado central">
                  <ul className="pagination">
                    <li className="page-item">
                      <LinkClient className="page-link">
                        <span className="page-previous-icon" aria-hidden="true"></span>
                        <span className="page-previous-text">Anterior</span>
                      </LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">1</LinkClient>
                    </li>
                    <li className="page-item no-events">
                      <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">4</LinkClient>
                    </li>
                    <li className="page-item active">
                      <LinkClient className="page-link">5</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">6</LinkClient>
                    </li>
                    <li className="page-item no-events">
                      <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">10</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">
                        <span className="page-next-text">Siguiente</span>
                        <span className="page-next-icon" aria-hidden="true"></span>
                      </LinkClient>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
            {selectedExample === 'final' && (
              <div className="container">
                <nav aria-label="Ejemplo de paginado numerado final">
                  <ul className="pagination">
                    <li className="page-item">
                      <LinkClient className="page-link">
                        <span className="page-previous-icon" aria-hidden="true"></span>
                        <span className="page-previous-text">Anterior</span>
                      </LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">1</LinkClient>
                    </li>
                    <li className="page-item no-events">
                      <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">6</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">7</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">8</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">9</LinkClient>
                    </li>
                    <li className="page-item active">
                      <LinkClient className="page-link">10</LinkClient>
                    </li>
                    <li className="page-item" style={{ opacity: 0 }}>
                      <span className="page-link">
                        <span className="page-next-text">Siguiente</span>
                        <span className="page-next-icon" aria-hidden="true"></span>
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Descriptivo',
      content: (
        <CodeCopy codeHTML={PAGINATION_DESCRIPTION}>
          <div className="container">
            <div className="pagination">
              <div className="page-navigation">
                <div className="page-item">
                  <LinkClient className="btn page-link">
                    <span className="page-previous-icon" aria-hidden="true"></span>
                    <span className="page-next-text">Anterior</span>
                  </LinkClient>
                </div>
                <div className="page-item">
                  <LinkClient className="btn page-link">
                    <span className="page-next-text">Siguiente</span>
                    <span className="page-next-icon" aria-hidden="true"></span>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </CodeCopy>
      ),
    },
    {
      title: 'Estado deshabilitado',
      content: (
        <CodeCopy codeHTML={PAGINATION_DISABLED}>
          <div className="container">
            <div className="pagination">
              <div className="page-navigation">
                <div className="page-item disabled">
                  <LinkClient className="btn page-link">
                    <span className="page-previous-icon" aria-hidden="true"></span>
                    <span className="page-next-text">Anterior</span>
                  </LinkClient>
                </div>
                <div className="page-item disabled">
                  <LinkClient className="btn page-link">
                    <span className="page-next-text">Siguiente</span>
                    <span className="page-next-icon" aria-hidden="true"></span>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </CodeCopy>
      ),
    },
  ];

  const SECTION_UX = [
    {
      title: 'Uso',
      firstTitle: true,
      content: (
        <>
          <div className="list-informative">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet">
              <li>
                Cuando hay gran cantidad de información y conviene dividirla en varias páginas para que sea más fácil de
                recorrer, por ejemplo, en resultados de búsqueda.
              </li>
              <li>
                Cuando el espacio es limitado y la estructura visual de la página no permite mostrar todo el contenido
                de una sola vez, por ejemplo, en tablas de datos.
              </li>
            </ul>
          </div>

          <div className="list-informative" style={{ marginTop: '32px' }}>
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>Para contenido que puede entrar razonablemente en una página.</li>
              <li>
                Para cambiar entre distintas vistas o pantallas. En ese caso, usá{' '}
                <a href="/Obelisco-V2/components/tabs">pestañas.</a>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Tipos',
      content: (
        <>
          <p className="text-md">
            Los paginados permiten moverse entre diferentes secciones de contenido. Pueden mostrar números para acceder
            directamente a una página específica, o descripciones como &quot;Anterior&quot; y &quot;Siguiente&quot; para
            avanzar o retroceder de forma secuencial.
          </p>
        </>
      ),
    },
    {
      subtitle: 'Descriptivo',
      content: (
        <>
          <p className="text-md mb-4">
            Permite avanzar o retroceder entre secciones usando botones como &quot;Anterior&quot; y
            &quot;Siguiente&quot;, facilitando una navegación secuencial. Este tipo se usa principalmente en la versión{' '}
            <i>mobile</i>.
          </p>
          <Image
            src={`${basePath}/images/pagination/prev-next-buttons.svg`}
            alt="Anterior Siguiente"
            width="728"
            height="148"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: 'Numerado',
      content: (
        <>
          <p className="text-md mb-4">
            Muestra una secuencia de páginas y permite ir directamente a una de ellas. La página activa se resalta para
            indicar la ubicación actual. Se recomienda su uso en dispositivos desktop y tablet.
          </p>
          <Image
            src={`${basePath}/images/pagination/numbered.svg`}
            alt="Numerado"
            width="728"
            height="148"
            className="img-fluid"
          />
          <div className="list-informative">
            <p className="text-xl fw-semibold" style={{ marginTop: '32px' }}>
              Comportamiento del paginado numerado
            </p>
            <p className="text-md">
              Cuando el total supera las diez, el paginado se trunca automáticamente. La visibilidad depende de la
              página actual, con estas reglas:
            </p>
            <ul className="list-informative-bullet">
              <li>La primera y la última página siempre estarán visibles.</li>
              <li>
                La página anterior y la siguiente a la actual siempre estará visible, salvo que esté en los extremos.
              </li>
              <li>Siempre se mostrará un máximo de diez páginas, incluidas las páginas truncadas.</li>
            </ul>
          </div>

          <p className="text-xl mt-4">Ejemplo de uso</p>
          <Image
            src={`${basePath}/images/pagination/example-use.svg`}
            alt="Ejemplos de uso"
            width="728"
            height="238"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Disposición',
      content: (
        <>
          <p className="text-xl mt-4 mb-2">En cuerpo de páginas</p>
          <p className="text-md mb-4">
            El paginado se ubica siempre centrado en relación al contenido. Puede mostrar hasta 9 botones, incluyendo
            los puntos suspensivos.
          </p>
          <Image
            src={`${basePath}/images/pagination/disposition.svg`}
            alt="Disposición"
            width="728"
            height="503"
            className="img-fluid"
          />

          <p className="text-xl mb-2" style={{ marginTop: '32px' }}>
            En tablas de datos
          </p>
          <p className="text-md mb-4">
            En tablas, el paginado se muestra debajo del contenido y alineado a la derecha. Puede incluir un indicador
            de resultados en pantalla.
          </p>
          <Image
            src={`${basePath}/images/pagination/data-table.svg`}
            alt="Tabla de datos"
            width="728"
            height="383"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Contenido',
      content: (
        <>
          <p className="text-xl mb-2">Texto de la etiqueta</p>
          <p className="text-md">
            El texto de la etiqueta en el componente de paginación debe ser breve y claro. Debe indicar la cantidad de
            ítems por página y el número total de páginas o ítems. Recomendamos no modificar este texto, salvo que sea
            necesario para casos de uso específicos.
          </p>
        </>
      ),
    },
  ];

  const SPECS = [
    {
      title: 'Anatomía',
      firstTitle: true,
      content: (
        <>
          <Image
            src={`${basePath}/images/pagination/anatomy.svg`}
            alt="Anatomia"
            width="728"
            height="240"
            className="img-fluid"
          />
          <table className="table mt-4">
            <thead>
              <tr>
                <th scope="col" style={{ minWidth: '240px' }}>
                  Elemento
                </th>
                <th scope="col">Carácter</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border-end">1. Botón anterior</td>
                <td>
                  Navegación con iconografía <b>&quot;chevron_left&quot;</b> que redirecciona a la &quot;página
                  anterior&quot;.
                </td>
              </tr>

              <tr>
                <td className="border-end">2. Enlace de página</td>
                <td>Número de página secuencial.</td>
              </tr>

              <tr>
                <td className="border-end">3. Truncamiento</td>
                <td>
                  Indica que existen más páginas que no se pueden mostrar para evitar la sobrecarga de información.
                </td>
              </tr>

              <tr>
                <td className="border-end">4. Enlace de página activa</td>
                <td>Resalta la página actual.</td>
              </tr>

              <tr>
                <td className="border-end">5. Botón siguiente</td>
                <td>
                  Navegación con iconografía <b>&quot;chevron_right&quot;</b> que redirecciona a la &quot;página
                  siguiente&quot;.
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: 'Estados',
      content: (
        <>
          <p className="text-xl mt-4">
            Predeterminado (<i>default</i>)
          </p>
          <p className="text-md mb-4">Estado predeterminado de botones del paginado en una interfaz.</p>
          <Image
            src={`${basePath}/images/pagination/state-default.svg`}
            alt="Estado Default"
            width="728"
            height="140"
            className="img-fluid"
          />

          <p className="text-xl mt-4">
            Sobre (<i>hover</i>)
          </p>
          <p className="text-md mb-4">
            Estado que adopta cada botón del paginado cuando un cursor pasa sobre él, cambiando su apariencia para
            indicar su interactividad a la persona usuaria.
          </p>
          <Image
            src={`${basePath}/images/pagination/state-hover.svg`}
            alt="Estado Sobre"
            width="728"
            height="140"
            className="img-fluid"
          />

          <p className="text-xl mt-4">
            En Foco (<i>focus</i>)
          </p>
          <p className="text-md mb-4">
            Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea
            claramente visible cuando recibe la atención del usuario, especialmente al ser navegado con el teclado. En
            Obelisco se utiliza un borde o anillo (focus ring) por fuera del componente en un color distintivo.
          </p>
          <Image
            src={`${basePath}/images/pagination/state-focus.svg`}
            alt="Estado En Foco"
            width="728"
            height="140"
            className="img-fluid"
          />

          <p className="text-xl mt-4">Seleccionado</p>
          <p className="text-md mb-4">
            Estado que adopta el número de página seleccionado en el paginado, indicando visualmente que es la página en
            la que la persona usuaria se encuentra navegando.
          </p>
          <Image
            src={`${basePath}/images/pagination/state-selected.svg`}
            alt="Estado Seleccionado"
            width="728"
            height="140"
            className="img-fluid"
          />

          <p className="text-xl mt-4">
            Deshabilitado (<i>disabled</i>)
          </p>
          <p className="text-md mb-4">
            Estado que indica que los botones no están disponibles para la interacción, lo que significa que no pueden
            activarse.
          </p>
          <Image
            src={`${basePath}/images/pagination/state-disabled.svg`}
            alt="Estado Deshabilitado"
            width="728"
            height="140"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Espaciados',
      content: (
        <>
          <p className="text-md mb-4">La separación horizontal entre botones del paginado es de 8px.</p>
          <Image
            src={`${basePath}/images/pagination/spacing.svg`}
            alt="Espaciados"
            width="728"
            height="264"
            className="img-fluid"
          />
        </>
      ),
    },
  ];

  const ACCESSIBILITY = [
    {
      title: 'Navegación alternativa',
      firstTitle: true,
      content: (
        <>
          <p className="text-md mb-4">
            El componente de Paginado está construido para ser accesible mediante navegación por teclado y reconocible
            por lectores de pantalla, comunicando sus diferentes estados de forma clara.
          </p>
          <span className="badge badge-default ms-1">TAB</span>
          <span className="badge badge-default">ENTER</span>
          <p className="text-md mt-2 mb-4">
            Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Además, con
            el <i>enter</i>, puede accionar los elementos sobre el item en el que la persona está posicionada.
          </p>
          <Image
            src={`${basePath}/images/pagination/alternative-navigation.svg`}
            alt="Navegacion Alternativa"
            width="728"
            height="222"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Etiquetado descriptivo',
      content: (
        <>
          <p className="text-md mb-0">
            La etiqueta que engloba al paginado debe ser un &lt;nav&gt;&lt;/nav&gt;, el cual necesita un atributo
            aria-label que comunique que el componente es de paginación. Dentro de él debería tener una lista sin
            enumerar, &lt;ul&gt;&lt;/ul&gt;, con sus respectivos items, &lt;li&gt;&lt;/li&gt;.
          </p>
          <p className="text-md mb-4">
            Cada etiqueta &lt;a&gt;&lt;/a&gt; debe estar acompañada de aria-label indicando la página a la que se
            redirigía, por ejemplo: &quot;Ir a la página 7&quot;.
          </p>

          <p className="text-xl mb-2">Interactividad limitada</p>
          <p className="text-md mb-4">
            Cuando un botón está deshabilitado, por ejemplo el botón &quot;Anterior&quot;, es importante indicarlo
            correctamente mediante el atributo <i>&quot;disabled&quot;</i>. Además, debe evitarse que el foco del
            teclado llegue al componente, y debe comunicarse su estado a tecnologías de asistencia.
          </p>
          <p className="text-xl mb-2">Funcionalidad técnica</p>
          <p className="text-md mb-4">
            El elemento que esté seleccionado, es decir, que marque la página en la que se encuentra la persona usuaria
            deberá tener activado el atributo aria-current=&quot;page&quot;.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {PAGINATION_ACCESSIBILITY}
          </SyntaxHighlighter>
        </>
      ),
    },
    {
      title: 'Criterios WCAG aplicables',
      content: (
        <>
          <a
            className="external mb-2"
            href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html"
            target="_blank"
          >
            1.3.1 Info and Relationships (Level A)
          </a>
          <p className="text-md">
            La información, la estructura y las relaciones transmitidas a través de la presentación pueden determinarse
            mediante programación o están disponibles en el texto.
          </p>

          <a
            className="external mb-2"
            href="https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html"
            target="_blank"
          >
            1.3.2 Meaningful Sequence (Level A)
          </a>
          <p className="text-md">
            Cuando la secuencia en que se presenta el contenido afecta su significado, se puede determinar mediante
            programación una secuencia de lectura correcta.
          </p>

          <a
            className="external mb-2"
            href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html"
            target="_blank"
          >
            1.4.1 Use of Color (Level A)
          </a>
          <p className="text-md">
            El color no se utiliza como el único medio visual para transmitir información, indicar una acción, provocar
            una respuesta o distinguir un elemento visual.
          </p>

          <a
            className="external mb-2"
            href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html"
            target="_blank"
          >
            1.4.11 Non-text Contrast (Level AA)
          </a>
          <p className="text-md">
            La presentación visual de los siguientes elementos tiene una relación de contraste de al menos 3:1 con
            respecto a los colores adyacentes: componentes de la interfaz de usuario; objetos gráficos.
          </p>

          <a
            className="external mb-2"
            href="https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html"
            target="_blank"
          >
            1.4.12 Text Spacing (Level AA)
          </a>
          <p className="text-md">
            No se produce pérdida de contenido ni funcionalidad al configurar todo lo siguiente y no cambiar ninguna
            otra propiedad de estilo: altura de línea establecida en 1,5; espaciado después de párrafos establecido al
            menos en 2 veces el tamaño de fuente; espaciado entre letras establecido al menos en 0,12 veces el tamaño de
            fuente; espaciado entre palabras establecido al menos en 0,16 veces el tamaño de fuente.
          </p>

          <a
            className="external mb-2"
            href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
            target="_blank"
          >
            1.4.3 Minimum Contrast (Level AA)
          </a>
          <p className="text-md">
            La presentación visual del texto y las imágenes del texto tiene una relación de contraste de al menos 4,5:1.
          </p>

          <a className="external mb-2" href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html" target="_blank">
            2.1.1 Keyboard (Level A)
          </a>
          <p className="text-md">
            Toda la funcionalidad del contenido se puede operar a través de una interfaz de teclado.
          </p>

          <a
            className="external mb-2"
            href="https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html"
            target="_blank"
          >
            2.1.2 No Keyboard Trap (Level A)
          </a>
          <p className="text-md">
            Si el foco del teclado se puede mover a un componente de la página usando una interfaz de teclado, entonces
            el foco se puede mover lejos de ese componente usando solo una interfaz de teclado.
          </p>

          <a
            className="external mb-2"
            href="https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html"
            target="_blank"
          >
            2.2.1 Timing Adjustable (Level A)
          </a>
          <p className="text-md">
            Si hay limitaciones de tiempo establecidas por el contenido, se debe cumplir una de las siguientes
            condiciones: desactivar, ajustar, extender, excepción en tiempo real, excepción esencial, excepción de 20
            horas.
          </p>

          <a
            className="external mb-2"
            href="https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html"
            target="_blank"
          >
            2.5.3 Label in Name (Level A)
          </a>
          <p className="text-md">
            Para los componentes de la interfaz de usuario con etiquetas que incluyen texto o imágenes de texto, el
            nombre contiene el texto que se presenta visualmente.
          </p>

          <a
            className="external mb-2"
            href="https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html"
            target="_blank"
          >
            4.1.3 Status Messages (Level AA)
          </a>
          <p className="text-md">
            En el contenido implementado mediante lenguajes de marcado, los mensajes de estado se pueden determinar
            mediante programación a través de roles o propiedades, de modo que puedan presentarse al usuario mediante
            tecnologías de asistencia sin recibir el foco.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Paginado"
        description={[
          'El paginado permite a la persona usuaria navegar entre páginas cuando el contenido está dividido en varias páginas.',
        ]}
      />
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'section-specs',
            sectionContent: SPECS,
          },
          {
            title: 'Accesibilidad',
            id: 'accessibility',
            sectionContent: ACCESSIBILITY,
          },
        ]}
      />
    </>
  );
};

export default PaginationDocs;
