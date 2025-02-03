import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';
const basePath = '/Obelisco-V2';

import { BREADCRUMB, BREADCRUMB_ACCESSIBILTY } from './code-views';

const BreadcrumbDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Simple',
      content: (
        <>
          <CodeBox codeHTML={BREADCRUMB}>
            <div className="container">
              <nav aria-label="Navegación secundaria">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <LinkClient>Inicio</LinkClient>
                  </li>
                  <li className="breadcrumb-item">
                    <LinkClient>Página intermedia con mucho mucho texto</LinkClient>
                  </li>
                  <li className="breadcrumb-item">
                    <LinkClient>Intermedia</LinkClient>
                  </li>
                  <li className="breadcrumb-item">
                    <LinkClient>Página anterior</LinkClient>
                  </li>
                </ol>
              </nav>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  const SECTION_UX = [
    {
      title: 'Uso',
      content: (
        <>
          <div className="list-informative pb-3">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet">
              <li>
                Para mostrar la jerarquía de navegación, de más de dos niveles, y los pasos que siguió el usuario para
                llegar a la página actual.
              </li>
            </ul>
          </div>
          <div className="list-informative pb-3">
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>Como enlaces a contenido que se ubique por fuera del encabezado de la página.</li>
              <li>
                Dentro de un bloque de texto, considerá utilizar el componente{' '}
                <a href="https://gcba.github.io/Obelisco-V2/components/link">Enlace</a>.
              </li>
              <li>
                Para guiar a los usuarios a través de un proceso de varios pasos, utilizá el componente{' '}
                <a href="https://gcba.github.io/Obelisco-V2/components/steps-form">Pasos de un formulario</a>.
              </li>
              <li>
                Cuando se utiliza la navegación horizontal en combinación con la navegación principal, puede resultar
                redundante incluir migas de pan.
              </li>
              <li>En las páginas de inicio omita incluir el componente migas de pan.</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Disposición',
      content: (
        <>
          <p className="text-md">
            Se ubican en la parte superior izquierda de la página, generalmente, dentro del encabezado de página, por
            encima del título H1.
          </p>
          <Image
            src={`${basePath}/images/migasDePan/migasDePan_disposicion.svg`}
            alt="Migas de pan disposición"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Contenido',
    },
    {
      subtitle: 'Basado en el ancho',
      content: (
        <>
          <p className="text-md">
            Cuando el nombre de un enlace de ancla excede los 32 caracteres (incluyendo espacios), el texto se trunca y
            agrega tres puntos (…) al final para visualizar que hay más texto en ese nivel.
          </p>
          <Image
            src={`${basePath}/images/migasDePan/migasDePan_contenido.svg`}
            alt="Migas de pan basado en el ancho"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
  ];

  const SPECS = [
    {
      title: 'Anatomía',
      content: (
        <>
          <p className="text-md">Las migas de pan tienen una composición diferente dependiendo de la variante.</p>
          <Image
            src={`${basePath}/images/migasDePan/migasDePan_anatomia.svg`}
            alt="Anatomia del botón"
            width="800"
            height="280"
            className="img-fluid"
          />

          <div className="responsive-scroll mt-4" tabIndex={0}>
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
                  <td>Enlace de ancla</td>
                  <td>Obligatorio, se requiere al menos un enlace principal.</td>
                </tr>
                <tr>
                  <td>Separador</td>
                  <td>Opcional, dependiendo de la cantidad de anclas.</td>
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
          <p className="text-md">
            Existen 2 variantes de migas de pan, que se utilizan según el dispositivo desde el que navega la persona
            usuaria.
          </p>
        </>
      ),
    },
    {
      subtitle: (
        <>
          {' '}
          <i>desktop</i>{' '}
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Puede estar compuesta por hasta 4 enlaces de ancla, que representan el camino de la persona usuaria.{' '}
          </p>
          <Image
            src={`${basePath}/images/migasDePan/migasDePan_variantes_desktop.svg`}
            alt="Migas de Pan variante desktop"
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
          {' '}
          Dispositivos móviles <i>(tables y mobile)</i>{' '}
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            En dispositivos móviles, solo se ve un enlace de ancla, que hace referencia a la página anterior a la que se
            encuentra la persona usuaria, y sirve para volver un paso hacia atrás.
          </p>
          <Image
            src={`${basePath}/images/migasDePan/migasDePan_variantes_mobile.svg`}
            alt="Estado sobre del boton"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
  ];

  const ACCESSIBILITY = [
    {
      title: 'Navegación alternativa',
      content: (
        <>
          <p className="text-md">
            El componente de migas de pan está construido para ser reconocido por herramientas de asistencia como la
            navegación por teclado o lectores por voz.
          </p>
          <span className="badge badge-default ms-1">TAB</span>
          <span className="badge badge-default">ENTER</span>
          <p className="text-md">
            Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Además, con
            el <i>enter</i>, puede accionar los elementos sobre los que esté posicionada como botones, enlaces, entre
            otros.
          </p>

          <Image
            src={`${basePath}/images/migasDePan/migasDePan_accesibilidad.svg`}
            alt="Navegacion alternativa de las migas de pan"
            width="738"
            height="400"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Etiquetado descriptivo',
      content: (
        <>
          <p className="text-md">
            Las migas de pan son otra forma de navegar el sitio, por lo que utilizan una etiqueta semántica (
            <i>{`<nav>`}</i>), y están identificadas como una navegación secundaria a través del atributo{' '}
            <i>aria-label</i>. Esto permite diferenciar las migas de pan de otro elementos de navegación, y ser
            reconocidas independientemente de la forma en que la persona usuaria recorra la página.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {BREADCRUMB_ACCESSIBILTY}
          </SyntaxHighlighter>
        </>
      ),
    },
    {
      title: 'Criterios WCAG aplicados',
      content: (
        <>
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
            La presentación visual de texto y de imágenes de texto tiene una relación de contraste de por lo menos
            4.5:1, excepto textos grandes e imágenes de texto grande que tienen un contraste de por lo menos 3:1, textos
            o imágenes que son parte de un componente inactivo de interfaz de usuario o son pura decoración, o
            logotipos.
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
            href="https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.3 Focus Order (Level A)
          </a>
          <p>
            Al navegar por las migas de pan con el teclado, el foco en los enlaces permanece en orden lógico en relación
            con los demás enlaces en la ruta de navegación.
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
            del teclado es visible. Cuando utiliza un teclado para navegar por las migas de pan, los enlaces tienen un
            subrayado visible y un recuadro outline que indica que los enlaces son interactivos.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 3.2.3 Consistent Navigation (Level AA)
          </a>
          <p>
            Cuando navega por diferentes páginas del sitio web, los enlaces de las migas de pan siempre están en el
            mismo orden y en el mismo lugar.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/location.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.8. Location (Level AAA)
          </a>
          <p>Los usuarios saben dónde se encuentran en un conjunto de páginas.</p>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Migas de pan"
        description={[
          'El componente de migas de pan ayuda a los usuarios a comprender dónde se encuentran dentro de la estructura de un sitio web y moverse entre niveles.',
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

export default BreadcrumbDocs;
