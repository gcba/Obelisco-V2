import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';
const basePath = '/Obelisco-V2';

import {
  DROPDOWN,
  DROPDOWN_CASCADE,
  DROPDOWN_CASCADE_RIGHT,
  DROPDOWN_MENU_ICON,
  DROPDOWN_MENU_ICON_ONLY,
  DROPDOWN_MENU_RIGHT,
  DROPDOWN_NAV_ACCESSIBILITY,
} from './code-views';

const SECTIONS_DEV = [
  {
    title: 'Con icono',
    firstTitle: true,
    content: (
      <>
        <CodeBox codeHTML={DROPDOWN}>
          <div className="container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                  expand_more
                </span>
              </button>
              <div className="dropdown-menu">
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <CodeBox codeHTML={DROPDOWN_MENU_ICON}>
          <div className="container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="material-symbols-rounded o-icon" aria-label="hidden">
                  add
                </span>
                <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
              </button>
              <div className="dropdown-menu">
                <LinkClient className="dropdown-item">
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    add
                  </span>
                  <span className="item-text">Opción de navegación</span>
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    arrow_forward
                  </span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    add
                  </span>
                  <span className="item-text text-end">Opción de navegación</span>
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    arrow_forward
                  </span>
                </LinkClient>
                <a className="dropdown-item disabled">
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    add
                  </span>
                  <span className="item-text text-end">Opción de navegación</span>
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    arrow_forward
                  </span>
                </a>
                <LinkClient className="dropdown-item item-danger">
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    logout
                  </span>
                  <span className="item-text">Cerrar sesión</span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <CodeBox codeHTML={DROPDOWN_MENU_ICON_ONLY}>
          <div className="container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="Menu"
              >
                <span className="material-symbols-rounded o-icon" aria-label="hidden">
                  menu
                </span>
              </button>
              <div className="dropdown-menu">
                <LinkClient className="dropdown-item">
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    add
                  </span>
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text text-end">Opción de navegación</span>
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    arrow_forward
                  </span>
                </LinkClient>
                <LinkClient className="dropdown-item item-danger">
                  <span className="item-text text-end">Cerrar sesión</span>
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    logout
                  </span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
      </>
    ),
  },
  {
    title: 'Disposición derecha',
    content: (
      <>
        <CodeBox codeHTML={DROPDOWN_MENU_RIGHT}>
          <div className="container">
            <div className="dropdown ms-auto">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                  expand_more
                </span>
                <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item item-danger">
                  <span className="item-text">Cerrar sesión</span>
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    logout
                  </span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
      </>
    ),
  },
  {
    title: 'Con cascada',
    content: (
      <>
        <CodeBox codeHTML={DROPDOWN_CASCADE}>
          <div className="container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                  expand_more
                </span>
              </button>
              <div className="dropdown-menu">
                <div className="dropdown sub-dropdown">
                  <button type="button" className="btn btn-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="material-symbols-rounded o-icon" aria-label="hidden">
                      add
                    </span>
                    <span className="btn-dropdown-text ellipsis-1">Opción en cascada</span>
                    <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                      expand_more
                    </span>
                  </button>
                  <div className="dropdown-menu">
                    <LinkClient className="dropdown-item">
                      <span className="item-text">Opción de navegación</span>
                    </LinkClient>
                    <LinkClient className="dropdown-item">
                      <span className="item-text">Opción de navegación</span>
                    </LinkClient>
                    <LinkClient className="dropdown-item">
                      <span className="item-text">Opción de navegación</span>
                    </LinkClient>
                  </div>
                </div>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item item-danger">
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    logout
                  </span>
                  <span className="item-text">Cerrar sesión</span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <CodeBox codeHTML={DROPDOWN_CASCADE_RIGHT}>
          <div className="container">
            <div className="dropdown ms-auto">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                  expand_more
                </span>
                <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <div className="dropdown sub-dropdown">
                  <button type="button" className="btn btn-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                      expand_more
                    </span>
                    <span className="btn-dropdown-text ellipsis-1">Opción en cascada</span>
                    <span className="material-symbols-rounded o-icon" aria-label="hidden">
                      add
                    </span>
                  </button>
                  <div className="dropdown-menu">
                    <LinkClient className="dropdown-item">
                      <span className="item-text">Opción de navegación</span>
                    </LinkClient>
                    <LinkClient className="dropdown-item">
                      <span className="item-text">Opción de navegación</span>
                    </LinkClient>
                    <LinkClient className="dropdown-item">
                      <span className="item-text">Opción de navegación</span>
                    </LinkClient>
                  </div>
                </div>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item item-danger">
                  <span className="item-text">Cerrar sesión</span>
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    logout
                  </span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
      </>
    ),
  },
];

const SECTION_UX = [
  {
    title: 'Uso',
    firstTitle: true,
    content: (
      <>
        <p className="text-xl">Cuándo usar</p>
        <ul className="list-informative-bullet">
          <li>
            Utilizar los desplegables cuando se necesita navegar entre secciones, páginas o áreas de un sitio o
            aplicación.{' '}
          </li>
          <li>
            Cuando hay varias opciones de navegación relacionadas que no necesitan mostrarse todas al mismo tiempo.
          </li>
          <li>Cuando se requiere organizar jerárquicamente opciones de navegación.</li>
        </ul>

        <p className="text-xl" style={{ marginTop: '32px' }}>
          Cuándo no usar
        </p>

        <ul className="list-informative-bullet">
          <li>
            No utilizar un desplegable de navegación si el objetivo es seleccionar o filtrar información. Para los casos
            en los que se requiera filtrar y/o seleccionar información, utilizar el componente
            <a href="https://gcba.github.io/Obelisco-V2/components/banner">Desplegables de selección</a>.
          </li>
          <li>
            No utilizar un desplegable si la mayor parte de su experiencia se basa en formularios. En ese caso,
            considere usar un{' '}
            <a href="https://gcba.github.io/Obelisco-V2/components/form-select">Campo de Selección (select)</a>.
          </li>
          <li>No usar los desplegables de navegación si se requiere búsqueda, multiselección o tags.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Tipos',
    firstTitle: true,
    content: (
      <>
        <p className="text-md mb-4">
          El objetivo de los desplegables de navegación es reducir la carga cognitiva de la persona usuaria
          proporcionando un acceso rápido a las opciones más relevantes y revelando opciones más detalladas a modo de
          cascada cuando se requiera.
        </p>

        <p className="text-xl fw-semibold mb-2">Desplegables en encabezado de página</p>

        <p className="text-md mb-4">
          Despliega opciones de navegación dentro de un encabezado. Puede contener opciones en un segundo nivel que
          aparezcan a modo de cascada. Las opciones{' '}
          <strong>pueden estar alineadas a la derecha o a la izquierda del botón disparador</strong> según el espacio
          disponible y el dispositivo.
        </p>
        <Image
          src={`${basePath}/images/dropdown_nav/tipos.svg`}
          alt="Desplegables en encabezado de página"
          width="800"
          height="285"
          className="img-fluid mb-4"
        />

        <p className="text-xl fw-semibold mb-2">Desplegables en navegación horizontal</p>

        <p className="text-md mb-4">
          En este contexto el menú desplegable puede mostrar opciones con íconos y cascadas. Según el dispositivo la
          cascada será vertical u horizontal.
        </p>
        <Image
          src={`${basePath}/images/dropdown_nav/tipos_1.svg`}
          alt="Desplegables en navegación horizontal"
          width="800"
          height="285"
          className="img-fluid mb-4"
        />
      </>
    ),
  },
  {
    title: 'Disposiciones',
    content: (
      <>
        <p className="text-xl fw-semibold mb-2">En encabezado de página</p>

        <p className="text-md">
          Dentro de un encabezado de página las opciones desplegadas deben ocupar un ancho fijo de 4 columnas. En
          mobile, deben ocupar un ancho fijo de 2 columnas.
        </p>

        <Image
          src={`${basePath}/images/dropdown_nav/disposiciones.svg`}
          alt="Disposición de desplegable de selección"
          width="800"
          height="285"
          className="img-fluid mb-3"
        />

        <Image
          src={`${basePath}/images/dropdown_nav/disposiciones_1.svg`}
          alt="Disposición de desplegable de selección"
          width="800"
          height="285"
          className="img-fluid mb-3"
        />

        <p className="text-xl fw-semibold mb-2">En navegación horizontal</p>

        <p className="text-md">
          Dentro de la navegación horizontal los desplegables se agrupan de forma horizontal formando una fila. En
          desktop, se deben ubicar uno al lado del otro ocupando un máximo de 8 columnas. En mobile, se deben organizar
          de forma vertical uno debajo del otro.
        </p>

        <Image
          src={`${basePath}/images/dropdown_nav/disposiciones_2.svg`}
          alt="Disposición de desplegable de selección"
          width="800"
          height="285"
          className="img-fluid mb-3"
        />

        <Image
          src={`${basePath}/images/dropdown_nav/disposiciones_3.svg`}
          alt="Disposición de desplegable de selección"
          width="800"
          height="285"
          className="img-fluid mb-3"
        />

        <Image
          src={`${basePath}/images/dropdown_nav/disposiciones_4.svg`}
          alt="Disposición de desplegable de selección"
          width="800"
          height="285"
          className="img-fluid mb-3"
        />

        <Image
          src={`${basePath}/images/dropdown_nav/disposiciones_5.svg`}
          alt="Disposición de desplegable de selección"
          width="800"
          height="285"
          className="img-fluid mb-3"
        />
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
          src={`${basePath}/images/dropdown_nav/specs_anatomia.svg`}
          alt="Anatomia de desplegable de selección"
          width="800"
          height="280"
          className="img-fluid mb-5"
        />

        <div className="responsive-scroll" tabIndex={0}>
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
                <td>1. Campo de selección</td>
                <td>Obligatorio, es el área donde aparecerá la opción seleccionada.</td>
              </tr>
              <tr>
                <td>
                  2. Icono izquierdo <i>(Opcional)</i>
                </td>
                <td>
                  Opcional, se utiliza para facilitar la identificación del desplegable. Utilizar íconos únicamente en
                  los elementos del primer nivel de navegación.
                </td>
              </tr>
              <tr>
                <td>3. Texto del desplegable</td>
                <td>
                  Obligatorio, todas las desplegable de selección deben brindar un mensaje claro sobre el punto que se
                  quiere remarcar.
                </td>
              </tr>
              <tr>
                <td>
                  4. Icono derecho <i>(Expandir)</i>
                </td>
                <td>Obligatorio. Se utiliza para indicar que el campo puede expandirse para mostrar las opciones.</td>
              </tr>
              <tr>
                <td>5. Borde</td>
                <td>
                  Borde visible a su alrededor otorgándole un aspecto más distintivo y resaltado dentro del diseño.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: 'Estados',
  },
  {
    subtitle: (
      <>
        Predeterminado <i>(default)</i>
      </>
    ),
    content: (
      <>
        <p className="text-sm">Estado predeterminado del campo de selección en una interfaz. </p>
        <Image
          src={`${basePath}/images/dropdown_nav/specs_default.svg`}
          alt="Estado predeterminado del desplegable de selección"
          width="800"
          height="148"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    subtitle: (
      <>
        Predeterminado <i>(hover)</i>
      </>
    ),
    content: (
      <>
        <p className="text-sm">Cuando un usuario está sobre el elemento.</p>
        <Image
          src={`${basePath}/images/dropdown_nav/specs_hover.svg`}
          alt="Estado predeterminado del desplegable de selección"
          width="800"
          height="464"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    subtitle: (
      <>
        En foco <i>(focus)</i>
      </>
    ),
    content: (
      <>
        <p className="text-sm">
          Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea claramente
          visible cuando recibe la atención del usuario, especialmente al ser navegado con el teclado. En Obelisco se
          utiliza un borde o anillo (focus ring) por fuera del componente en un color distintivo.{' '}
        </p>
        <Image
          src={`${basePath}/images/dropdown_nav/specs_focus.svg`}
          alt="Estado en foco del desplegable de selección"
          width="800"
          height="464"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    subtitle: 'Expandido',
    content: (
      <>
        <p className="text-sm">Cuando un usuario está seleccionando una opción.</p>
        <Image
          src={`${basePath}/images/dropdown_nav/specs_expandido.svg`}
          alt="Estado en foco del desplegable de selección"
          width="800"
          height="464"
          className="img-fluid mb-4"
        />
      </>
    ),
  },
];

const ACCESSIBILITY = [
  {
    title: 'Navegación por teclado',
    firstTitle: true,
    content: (
      <>
        <p className="text-md mb-4">
          El componente de desplegable de selección está construido para ser accesible mediante navegación por teclado y
          reconocible por lectores de pantalla, comunicando su estado de forma clara.
        </p>
        <span className="badge badge-s-default ms-1">TAB</span>
        <span className="badge badge-s-default">ENTER</span>
        <span className="badge badge-s-default">SPACE</span>
        <span className="badge badge-s-default">SCAPE</span>
        <p className="text-md  mt-4 mb-4">
          Utilizando el <i>tab</i> la persona usuaria puede llegar hasta el campo de selección. Con la{' '}
          <i>barra espaciadora</i> (space), las <i>flechas</i> para arriba o abajo puede abrir el desplegable donde
          estarán las opciones a seleccionar. Las flechas, además, se usan para navegar a través de las opciones, las
          cuales pueden ser seleccionadas con la <i>barra espaciadora</i> o <i>enter</i>.
        </p>

        <Image
          src={`${basePath}/images/dropdown_nav/accesibilidad_nav_alternativa.svg`}
          alt="Navegacion alternativa del desplegable de selección"
          width="738"
          height="400"
          className="img-fluid mb-4"
        />

        <p className="text-md">
          En el desplegable de navegación cuando seleccionamos la opción con barra espaciadora o enter nos redirecciona
          a la opción seleccionada en ese mismo acto.
        </p>
      </>
    ),
  },
  {
    title: 'Etiquetado descriptivo',
    content: (
      <>
        <p className="text-md">
          Para el desplegable de navegación recomendamos utilizar <i>aria-haspopup=&quot;menu&quot;</i>, indica que
          elemento button abre un menú.
        </p>

        <p className="text-md">
          Recomendamos utilizar aria expanded con valor <i>&quot;false&quot;</i> cuando no se muestrea el menú y con el
          valor <i>&quot;true&quot;</i> cuando mostramos el menú.
        </p>

        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {DROPDOWN_NAV_ACCESSIBILITY}
        </SyntaxHighlighter>

        <p className="text-md mt-4 mb-3">
          Para cumplir con buenas prácticas de accesibilidad (WCAG + WAI-ARIA), recomendamos:
        </p>
        <ul>
          <li>
            Utilizar <i>role=&quot;menu&quot;</i> para identificar el contenedor del desplegable cuando este agrupa
            acciones o enlaces de navegación.
          </li>
          <li>
            Utilizar <i>role=&quot;menuitem&quot;</i> en cada opción del menú para indicar que se trata de elementos
            interactivos pertenecientes a un menú.
          </li>
        </ul>
        {/* <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {ALERTAS_ACCESSIBILTY_2}
        </SyntaxHighlighter> */}
      </>
    ),
  },
  {
    title: 'Criterios WCAG aplicados',
    content: (
      <>
        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
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
          href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 1.4.11 Non-Text Contrast (Level AA){' '}
        </a>
        <p>
          La presentación visual de elementos de la interfaz de usuario y objetos gráficos tiene por lo menos una
          relación de contraste de 3:1 con respecto a los colores adyacentes.
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
          imágenes que son parte de un componente inactivo de interfaz de usuario o son pura decoración, o logotipos.
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
          href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 2.1.1 Keyboard (Level A){' '}
        </a>
        <p>Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.</p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
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

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 2.4.7 Focus Visible (Level AA)
        </a>
        <p>
          Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque
          del teclado es visible.
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 4.1.2 Name, Role, Value (Level A)
        </a>
        <p>
          Para todos los componentes de la interfaz de usuario (incluidos, entre otros: elementos de formulario, enlaces
          y componentes generados por scripts), el nombre y la función se pueden determinar mediante programación; los
          estados, propiedades y valores que puede establecer el usuario se pueden configurar mediante programación; y
          la notificación de cambios en estos elementos está disponible para los agentes de usuario, incluidas las
          tecnologías de asistencia.
        </p>
      </>
    ),
  },
];

const DropdownNavDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Desplegable de navegación"
        description={[
          'Este tipo de desplegables permite acceder a opciones de navegación y funcionalidades adicionales de manera organizada, desplegándolas de forma vertical u horizontal.',
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
            id: 'section-accessibility',
            sectionContent: ACCESSIBILITY,
          },
        ]}
      />
    </>
  );
};

export default DropdownNavDocs;
