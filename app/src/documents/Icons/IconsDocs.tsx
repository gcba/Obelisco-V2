import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { ICONS_BOXICONS, ICONS_CUSTOM, ICONS_MATERIAL } from './code-views';

const basePath = '/Obelisco-V2';

const SECTIONS_DEV = [
  {
    title: 'Íconos de Material',
    firstTitle: true,
    content: (
      <>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  Ícono
                </th>
                <th scope="col" className="tb-text">
                  Ligadura tipografica
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    info
                  </span>
                </td>

                <td>
                  <code>{'info'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    check
                  </span>
                </td>

                <td>
                  <code>{'check'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    close
                  </span>
                </td>

                <td>
                  <code>{'close'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    warning
                  </span>
                </td>

                <td>
                  <code>{'warning'}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xl fw-semibold mt-3">Estructura/Uso</p>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {ICONS_MATERIAL}
        </SyntaxHighlighter>
      </>
    ),
  },
  {
    title: 'Íconos de Boxicons',
    content: (
      <>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  Ícono
                </th>
                <th scope="col" className="tb-text">
                  Clase específica
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="o-icon bxl bx-facebook-circle"></i>
                </td>
                <td>
                  <code>{'bx-facebook-circle'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="o-icon bxl bx-instagram-alt"></i>
                </td>
                <td>
                  <code>{'bx-instagram-alt'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="o-icon bxl bx-twitter-x"></i>
                </td>
                <td>
                  <code>{'bx-twitter-x'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="o-icon bxl bx-youtube"></i>
                </td>
                <td>
                  <code>{'bx-youtube'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="o-icon bxl bx-linkedin-square"></i>
                </td>
                <td>
                  <code>{'bx-linkedin-square'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="o-icon bxl bx-tiktok"></i>
                </td>
                <td>
                  <code>{'bx-tiktok'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="o-icon bxl bx-pinterest"></i>
                </td>
                <td>
                  <code>{'bx-pinterest'}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xl fw-semibold mt-3">Estructura/Uso</p>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {ICONS_BOXICONS}
        </SyntaxHighlighter>
      </>
    ),
  },
  {
    title: 'Íconos personalizados',
    content: (
      <>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  Ícono
                </th>
                <th scope="col" className="tb-text">
                  Clase
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="ob-icon interbanking"></i>
                </td>
                <td>
                  <code>{'ob-icon interbanking'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon red-link"></i>
                </td>
                <td>
                  <code>{'ob-icon red-link'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon maestro"></i>
                </td>
                <td>
                  <code>{'ob-icon maestro'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon cabal"></i>
                </td>
                <td>
                  <code>{'ob-icon cabal'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon visa"></i>
                </td>
                <td>
                  <code>{'ob-icon visa'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon pago-mis-cuentas"></i>
                </td>
                <td>
                  <code>{'ob-icon pago-mis-cuentas'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon mercado-pago"></i>
                </td>
                <td>
                  <code>{'ob-icon mercado-pago'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon american-express"></i>
                </td>
                <td>
                  <code>{'ob-icon american-express'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon mastercard"></i>
                </td>
                <td>
                  <code>{'ob-icon mastercard'}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xl fw-semibold mt-3">Estructura/Uso</p>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {ICONS_CUSTOM}
        </SyntaxHighlighter>
      </>
    ),
  },
];

const SECTION_UX = [
  {
    title: 'Principios',
    firstTitle: true,
    content: (
      <>
        <ul className="list-informative-bullet">
          <li>
            <strong>Propósito</strong>: Cada icono debe tener un propósito claramente entendible dentro del contexto.
          </li>
          <li>
            <strong>Entendible</strong>: El icono sin texto debe evitarse, salvo cuando su significado es universal (por
            ejemplo: cerrar).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Librería de iconos',
    content: (
      <>
        <p className="text-xl mb-2">Material Icons</p>
        <p className="text-md">
          Material Icons es la librería base principal para todas las interfaces GCBA y se debe cumplir con 2
          características principales:
        </p>
        <ul className="list-informative-bullet mb-3">
          <li>
            <strong>Tienen que ser &quot;rounded&quot;</strong>, es decir su morfología esta definida por tener bordes
            redondeados. Siempre van a estar compuestos por una class=&quot;material-icons-round&quot;.
          </li>
          <li>
            <strong>Siempre tienen que ser sólidos o rellenos.</strong>: No utilizar íconos &quot;outline&quot; o con
            borde.
          </li>
        </ul>

        <p className="text-xl mb-2">Box Icons</p>
        <p className="text-md">
          Los iconos de redes sociales utilizan la librería Box icons, ya que Material Icons no incluye iconografía de
          marcas. Su uso debe limitarse exclusivamente a estos casos.
        </p>

        <p className="text-xl mb-2">Iconos personalizados</p>
        <p className="text-md">
          Para items que no tienen equivalentes en Material/Boxicons , por ejemplo, íconos de bancos o marcas oficiales
          del GCBA, usaremos los iconos personalizados definidos por Obelisco V2.
        </p>
      </>
    ),
  },
  {
    title: 'Tamaño y escala',
    content: (
      <>
        <p className="text-md mb-4">
          Los iconos siguen una base 24px que permite que los iconos se escalen de forma lineal (up/down) sin perder
          claridad.
        </p>

        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Ícono
              </th>
              <th scope="col" className="tb-text">
                Clase
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>24 px </td>
              <td>Tamaño estándar UI (botones, menús, listas). </td>
            </tr>
            <tr>
              <td>16 px </td>
              <td>Sólo donde el espacio sea crítico y el símbolo sea comprensible. </td>
            </tr>
            <tr>
              <td>≥32 px </td>
              <td>Para indicadores visuales grandes. </td>
            </tr>
            <tr>
              <td>64 px </td>
              <td>Evitar, salvo ilustraciones/pictogramas especializadas. </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    title: 'Color',
    content: (
      <>
        <p className="text-md">
          Los iconos siguen una base 24px que permite que los iconos se escalen de forma lineal (up/down) sin perder
          claridad.
        </p>

        <div className="max-items-2">
          <div className="col pe-3">
            <Image
              src={`${basePath}/images/boton/1.svg`}
              alt="Cómo sí usar los íconos"
              width="800"
              height="200"
              className="img-fluid"
            />
            <p className="mt-4 mb-0 text-sm">
              Por defecto, los iconos deben usar el color base de íconos de la UI (neutro).{' '}
            </p>
          </div>
          <div className="col ps-3">
            <Image
              src={`${basePath}/images/boton/2.svg`}
              alt="Cómo sí usar los íconos"
              width="800"
              height="200"
              className="img-fluid"
            />
            <p className="mt-4 mb-0 text-sm">No utilizar íconos de librerías que no estén en Obelisco.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Accesibilidad',
    content: (
      <>
        <p className="text-md" style={{ marginBottom: '32px' }}>
          Los iconos deben ser comprensibles y utilizables por todas las personas, incluyendo quienes utilizan
          tecnologías asistivas.
        </p>

        <p className="text-xl mb-2">Lineamientos generales</p>
        <ul className="list-informative-bullet" style={{ marginBottom: '32px' }}>
          <li>No deben transmitir información únicamente mediante el color.</li>
          <li>Deben mantener contraste suficiente con el fondo.</li>
          <li>El tamaño base recomendado es 24 px, asegurando buena legibilidad.</li>
        </ul>

        <p className="text-xl mb-2">Iconos decorativos</p>
        <p className="text-md mb-4">
          Cuando el icono no aporta información ni acción, debe ocultarse a lectores de pantalla. No debe recibir foco
          ni interferir con la navegación.
        </p>

        <p className="text-xl mb-2">Iconos informativos</p>
        <p className="text-md mb-4">
          Si el icono comunica un estado o significado, debe tener un nombre accesible (por ejemplo, mediante
          <i>aria-label</i>) o estar acompañado por texto visible que explique su propósito.
        </p>

        <p className="text-xl mb-2">Iconos interactivos</p>
        <p className="text-md">Cuando el icono ejecuta una acción:</p>
        <ul className="list-informative-bullet">
          <li>Debe estar dentro de un elemento interactivo real (ej. {'<button>'}).</li>
          <li>Debe tener un nombre accesible claro.</li>
          <li>Debe contar con foco visible.</li>
          <li>
            Los iconos interactivos deben cumplir con WCAG 2.2.{' '}
            <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">
              Success Criterion 2.5.8 Target Size (Minimum) (Level AA)
            </a>
            asegurando un área mínima de 24 x 24 px.
          </li>
          <li>
            Se recomienda ampliar el área interactiva a 44 x 44 px en contextos táctiles para mejorar la usabilidad.
            <a href="https://www.w3.org/TR/WCAG22/#target-size-enhanced">
              Success Criterion 2.5.5 Target Size (Enhanced)(Level AAA)
            </a>
            .
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Accesibilidad',
    content: (
      <>
        <a className="external d-block mb-3" href="https://fonts.google.com/icons">
          Material Design Icons
        </a>
        <a className="external" href="https://boxicons.com/icons?p=filled">
          Box Icons Library
        </a>
      </>
    ),
  },
];

const IconsDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Íconos"
        description={[
          'Los iconos son elementos gráficos que representan conceptos, acciones o marcas visuales y ayudan a las personas usuarias a navegar y entender la interfaz de forma rápida y clara. En los productos digitales del GCBA utilizamos principalmente Material Icons, con variantes permitidas en casos específicos.',
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} sectionUx={SECTION_UX} />
    </>
  );
};

export default IconsDocs;
