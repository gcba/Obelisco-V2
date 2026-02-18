import Image from 'next/image';
import React from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const basePath = '/Obelisco-V2';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

// import LinkClient from '../../components/LinkClient/index';

import { SCROLLBAR_HORIZONTAL, SCROLLBAR_VERTICAL } from './code-views';

const ScrollBarDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Horizontal',
      firstTitle: true,
      content: (
        <CodeBox codeHTML={SCROLLBAR_HORIZONTAL}>
          <div className="container">
            <div className="responsive-scroll" tabIndex={0}>
              <div className="horizontal-example">
                <h1>Esto es un título de ejemplo</h1>
                <p className="lead">
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene
                  ningún fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento
                  horizontal, mientras que la lista de cuerpos de contenido consecutivos es para probar el
                  desplazamiento vertical.
                </p>
                <br />
                <hr />
                <br />
                <h2>Esto es un título de ejemplo</h2>
                <p>
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene
                  ningún fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento
                  horizontal, mientras que la lista de cuerpos de contenido consecutivos es para probar el
                  desplazamiento vertical.
                </p>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Vertical',
      content: (
        <CodeBox codeHTML={SCROLLBAR_VERTICAL}>
          <div className="container">
            <div className="responsive-scroll" tabIndex={0}>
              <div className="vertical-example">
                <h1>Esto es un título de ejemplo</h1>
                <p className="lead">
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene
                  ningún fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento
                  horizontal, mientras que la lista de cuerpos de contenido consecutivos es para probar el
                  desplazamiento vertical.
                </p>
                <br />
                <hr />
                <br />
                <p>
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene
                  ningún fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento
                  horizontal, mientras que la lista de cuerpos de contenido consecutivos es para probar el
                  desplazamiento vertical.
                </p>
                <br />
                <hr />
                <br />
                <h2>Esto es un título de ejemplo</h2>
                <p>
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene
                  ningún fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento
                  horizontal, mientras que la lista de cuerpos de contenido consecutivos es para probar el
                  desplazamiento vertical.
                </p>
                <br />
                <hr />
                <br />
                <h2>Esto es un título de ejemplo</h2>
                <p>
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene
                  ningún fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento
                  horizontal, mientras que la lista de cuerpos de contenido consecutivos es para probar el
                  desplazamiento vertical.
                </p>
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
          <div className="list-informative">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet">
              <li>Cuando el contenido de un elemento supera el área visible disponible.</li>
              <li>
                Cuando el desplazamiento es necesario para acceder al contenido completo, sin cambiar de vista o
                pantalla.
              </li>
            </ul>
          </div>
          <div className="list-informative" style={{ marginTop: '32px' }}>
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>Cuando el contenido puede mostrarse completo sin necesidad de desplazamiento.</li>
              <li>
                Cuando el desplazamiento genera una experiencia confusa o innecesaria (por ejemplo, scroll dentro de
                scroll sin justificación).
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Contexto de uso',
      content: (
        <>
          <p className="mb-4">
            Este componente está diseñado para utilizarse dentro de contenedores con espacio limitado, donde el
            contenido puede variar dinámicamente en cantidad o tamaño. Se muestra únicamente cuando existe contenido
            desbordado.
            <br />
            <br />
            La barra de desplazamiento permite mantener la estructura del layout sin afectar la navegación principal de
            la página, facilitando el acceso al contenido completo dentro de un área definida.
            <br />
            <br />
            Se recomienda su uso en componentes como tablas, listados extensos, paneles laterales o secciones con
            dimensiones fijas, priorizando siempre la claridad visual y la comprensión del contenido.
          </p>
          <Image
            src={`${basePath}/images/scrollbar/scrollbar_1.svg`}
            alt="Contexto de uso de scrollbar"
            width="800"
            height="200"
            className="img-fluid"
          />

          <p className="text-xl fw-semibold mt-4">Ubicación</p>
          <div className="max-items-2 row-gap-3">
            <div className="col pe-3">
              <Image
                src={`${basePath}/images/scrollbar/scrollbar_2.svg`}
                alt="Cómo sí usar los íconos"
                width="800"
                height="200"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="mb-0 text-sm">
                  La barra de desplazamiento horizontal se debe ubicar al final del contenedor.{' '}
                </p>
              </div>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/scrollbar/scrollbar_3.svg`}
                alt="Cómo no usar los íconos"
                width="800"
                height="200"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-danger">check</span>
                <p className="mb-0 text-sm">No debe ubicarse en la parte superior.</p>
              </div>
            </div>
            <div className="col pe-3">
              <Image
                src={`${basePath}/images/scrollbar/scrollbar_4.svg`}
                alt="Cómo sí usar los íconos"
                width="800"
                height="200"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="mb-0 text-sm">
                  La barra de desplazamiento vertical se ubica al lateral derecho del contenedor.{' '}
                </p>
              </div>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/scrollbar/scrollbar_5.svg`}
                alt="Cómo no usar los íconos"
                width="800"
                height="200"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-danger">check</span>
                <p className="mb-0 text-sm">No debe ubicarse en otros laterales ni superponerse al contenido.</p>
              </div>
            </div>
          </div>

          <p className="text-md mt-4">
            <strong>Recomendación</strong>: Evitar combinar barras horizontales y verticales dentro del mismo
            contenedor, ya que puede dificultar la comprensión del contenido y afectar la experiencia de navegación.
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
            src={`${basePath}/images/scrollbar/scrollbar_6.svg`}
            alt="Anatomia del botón"
            width="800"
            height="280"
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
                  <td>1. Indicador (thumb)</td>
                  <td>
                    Elemento móvil que representa la porción de contenido visible. Su tamaño varía según la cantidad de
                    contenido disponible.
                  </td>
                </tr>
                <tr>
                  <td>2. Pista (track) </td>
                  <td>Área sobre la cual se desplaza el indicador. Representa el espacio total del contenido.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Variantes',
    },
    {
      subtitleBold: 'Barra vertical',
      content: (
        <>
          <p className="text-md mb-4">
            Se utiliza cuando el contenido de un elemento excede el espacio visible a lo alto.{' '}
          </p>
          <Image
            src={`${basePath}/images/scrollbar/scrollbar_7.svg`}
            alt="Ilustración de barra vertical"
            width="800"
            height="285"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitleBold: 'Barra horizontal',
      content: (
        <>
          <p className="text-md mb-4">
            Se utiliza cuando el contenido de un elemento excede el espacio visible a lo ancho.
          </p>
          <Image
            src={`${basePath}/images/scrollbar/scrollbar_8.svg`}
            alt="Ilustración de barra horizontal"
            width="800"
            height="285"
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
          <p className="text-md" style={{ marginBottom: '32px' }}>
            Si el contenedor requiere desplazamiento, puede habilitarse foco con tabindex=&quot;0&quot; para permitir
            desplazamiento con teclado. <br />
            <br />
            Se recomienda utilizarlo únicamente cuando el contenedor no contenga elementos interactivos.
          </p>
          <span className="badge badge-default ms-1">FLECHAS</span>
          <span className="badge badge-default">PAGE UP/PAGE DOWN</span>
          <span className="badge badge-default">INICIO/FIN</span>
          <span className="badge badge-default">ESPACIO</span>

          <p className="text-md mb-4 mt-4">El desplazamiento del contenido puede realizarse mediante:</p>

          <ul className="list-informative-bullet">
            <li>Flechas del teclado.</li>
            <li>Page Up / Page Down.</li>
            <li>Inicio / Fin.</li>
            <li>Barra espaciadora (según navegador).</li>
          </ul>

          <p className="text-md mt-4">El orden de foco no debe verse alterado por la presencia del scroll.</p>

          <Image
            src={`${basePath}/images/scrollbar/scrollbar_9.svg`}
            alt="Navegacion alternativa del botón"
            width="738"
            height="400"
            className="img-fluid mt-4"
          />
        </>
      ),
    },
    {
      title: 'Etiquetado descriptivo',
      content: (
        <>
          <p className="text-md">No se debe aplicar semántica ARIA a la barra de desplazamiento.</p>
          <p className="text-md">Recomendaciones:</p>
          <ul className="list-informative-bullet">
            <li>
              No utilizar role=<i>&quot;scrollbar&quot;</i>.
            </li>
            <li>
              No utilizar role=<i>&quot;progressbar&quot;</i>.
            </li>
            <li>No agregar atributos ARIA para anunciar el desplazamiento.</li>
          </ul>
          <p className="text-md mt-4">
            La navegación y el desplazamiento deben resolverse mediante el comportamiento nativo del navegador.
          </p>
        </>
      ),
    },
    {
      title: 'Criterios WCAG aplicados',
      content: (
        <>
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
            href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.1 Keyboard (Level A){' '}
          </a>
          <p>Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.</p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.3 Focus Order (Level A)
          </a>
          <p>
            Si una página web puede navegarse de forma secuencial y las secuencias de navegación afectan el significado
            o la operación, los componentes enfocables reciben el foco en un orden que preserve el significado y la
            operabilidad.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.7 Focus Visible (Level AA){' '}
          </a>
          <p>
            Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque
            del teclado es visible.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Barra de desplazamiento"
        description="La barra de desplazamiento se utiliza cuando el contenido de un elemento excede el espacio visible, bien sea a lo ancho o a lo largo."
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

export default ScrollBarDocs;
