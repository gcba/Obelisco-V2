import { basePath } from '@/utils';
import Image from 'next/image';

import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  BANNER_BUTTON,
  BANNER_BUTTON_DARK,
  BANNER_BUTTONS,
  BANNER_BUTTONS_DARK,
  BANNER_SIMPLE,
  BANNER_SIMPLE_DARK,
} from './code-views';

const BannerDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Simple',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={BANNER_SIMPLE}>
            <div className="banner">
              <div className="banner-content">
                <p className="banner-text">
                  Esta descripción de banner <strong>puede tener énfasis</strong> y <LinkClient>enlace</LinkClient>.
                </p>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={BANNER_SIMPLE_DARK}>
            <div className="banner banner-dark">
              <div className="banner-content">
                <p className="banner-text">
                  Esta descripción de banner <strong>puede tener énfasis</strong> y <LinkClient>enlace</LinkClient>.
                </p>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Con botón',
      content: (
        <>
          <CodeBox codeHTML={BANNER_BUTTON}>
            <div className="banner">
              <div className="banner-content">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  departure_board
                </span>
                <p className="banner-text">
                  Este banner tiene un solo botón y <strong>puede tener énfasis</strong>. Se truncan los textos que
                  superen más de una línea de texto.
                </p>
                <div className="banner-actions">
                  <LinkClient className="btn btn-sm btn-primary">Botón</LinkClient>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={BANNER_BUTTON_DARK}>
            <div className="banner banner-dark">
              <div className="banner-content">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  departure_board
                </span>
                <p className="banner-text">
                  Este banner tiene un solo botón y <strong>puede tener énfasis</strong>. Se truncan los textos que
                  superen más de una línea de texto.
                </p>
                <div className="banner-actions">
                  <LinkClient className="btn btn-sm btn-primary">Botón</LinkClient>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Con botones',
      content: (
        <>
          <CodeBox codeHTML={BANNER_BUTTONS}>
            <div className="banner">
              <div className="banner-content">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  cookie
                </span>
                <p className="banner-text">
                  Este banner tiene dos botones y <strong>puede tener énfasis</strong>. Se truncan los textos que
                  superen más de una línea de texto.
                </p>
                <div className="banner-actions">
                  <LinkClient className="btn btn-sm btn-primary">Botón</LinkClient>
                  <LinkClient className="btn btn-sm btn-outline-primary">Botón</LinkClient>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={BANNER_BUTTONS_DARK}>
            <div className="banner banner-dark">
              <div className="banner-content">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  cookie
                </span>
                <p className="banner-text">
                  Este banner tiene dos botones y <strong>puede tener énfasis</strong>. Se truncan los textos que
                  superen más de una línea de texto.
                </p>
                <div className="banner-actions">
                  <LinkClient className="btn btn-sm btn-primary">Botón</LinkClient>
                  <LinkClient className="btn btn-sm btn-outline-light">Botón</LinkClient>
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
          <div className="list-informative">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet">
              <li>
                Para comunicar novedades relevantes (por ejemplo, lanzamientos, cambios importantes o accesos
                destacados).
              </li>
              <li>
                Para reforzar acciones prioritarias que se espera que la persona usuaria conozca al ingresar al sitio.
              </li>
              <li>Para mensajes de alcance general, no asociados a una acción puntual del sistema.</li>
              <li>
                Cuando el contenido requiere alta visibilidad, pero no justifica interrumpir el flujo con un{' '}
                <a href="https://gcba.github.io/Obelisco-V2/components/modal">Modal</a>.
              </li>
            </ul>
          </div>
          <div className="list-informative" style={{ marginTop: '32px' }}>
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>
                Evitar usar modales para informar sobre el estado del sistema. En esos casos utilizar{' '}
                <a href="https://gcba.github.io/Obelisco-V2/components/alert">Alertas</a>{' '}
              </li>
              <li>
                Para mensajes que requieran una respuesta obligatoria o confirmación explícita. En esos casos utilizar{' '}
                <a href="https://gcba.github.io/Obelisco-V2/components/modal">Modal</a>.
              </li>
              <li>
                No usar modales sin la acción de una persona usuaria. Por ejemplo, tocar un botón, un enlace o un ícono.
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
          <p className="text-md mt-4">
            Este componente está diseñado para ser utilizado únicamente en páginas de inicio (Home), donde cumple un rol
            informativo y de orientación inicial.
          </p>
          <p className="text-md mb-4">
            Se presentan al ancho completo del contenedor y buscan captar la atención sin interrumpir completamente la
            navegación.
          </p>
          <p className="text-xl fw-semibold mb-2">Uso de banner en cuerpo de página</p>
          <p className="text-md">
            Los banners pueden disponibilizarse en cualquier parte de la página y funcionan como un elemento más para
            mostrar información. (Ej: &quot;Lanzamos una nueva versión de nuestro sistema de diseño&quot;)
            <br />
            Ademas el banner no puede ubicarse de forma arbitraria: solo puede mostrarse en tres posiciones predefinidas
            dentro de la estructura de la página:
          </p>
          <ol>
            <li className="mb-3">Debajo del header</li>
            <li className="mb-3">Debajo del hero (encabezado de la página)</li>
            <li className="mb-3">Arriba del footer</li>
          </ol>
          <Image
            src={`${basePath}/images/banner/banner_1.svg`}
            alt="Contexto de uso de componente Banner"
            width="800"
            height="200"
            className="img-fluid mb-3"
          />

          <Image
            src={`${basePath}/images/banner/banner_1_1.svg`}
            alt="Contexto de uso de componente Banner"
            width="800"
            height="200"
            className="img-fluid mb-3"
          />

          <Image
            src={`${basePath}/images/banner/banner_1_2.svg`}
            alt="Contexto de uso de componente Banner"
            width="800"
            height="200"
            className="img-fluid"
          />

          <p className="text-xl fw-semibold mb-2 mt-4">Uso de banner con comportamiento fijo (sticky)</p>
          <p className="text-md">
            Algunos mensajes requieren cierto compromiso del usuario y deben mostrarse hasta que este dé su
            consentimiento. Estos son métodos de mensajería altamente invasivos, por lo tanto, deben usarse con mesura.
            Estos mensajes se pueden fijar solo en la parte inferior de la pantalla (EJ: &quot;Aviso de privacidad de
            Cookies&quot;).
          </p>

          <p className="text-xl fw-semibold mb-2 mt-4">Uso de iconografía</p>
          <p className="text-md">
            El uso de iconografía no es obligatorio, y su utilización debe acompañar conceptualmente cada mensaje. Hay
            que poner especial atención en no usar íconos de carácter semántico (información, error, advertencia, éxito
            y similares) que puedan confundir los banners con{' '}
            <a href="https://gcba.github.io/Obelisco-V2/components/alert">alertas</a>.
          </p>
        </>
      ),
    },
    {
      title: 'Contenido',
      content: (
        <>
          <p className="text-md">
            Utilizar un máximo de 110 caracteres para las descripciones de los banners. El contenido debe ser claro,
            simple y conciso. En caso de superar el máximo de caracteres, el texto se truncará (a excepción del Banner
            con enlace, donde el texto no se trunca y pasa a otra línea).
          </p>
          <Image
            src={`${basePath}/images/banner/banner_8.svg`}
            alt="Contenido del  Banner"
            width="800"
            height="200"
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
            src={`${basePath}/images/banner/banner_2.svg`}
            alt="Anatomia del banner"
            width="800"
            height="280"
            className="img-fluid mb-4"
          />

          <div className="responsive-scroll mt-4 mb-4" tabIndex={0}>
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
                  <td>1. Icono (Opcional) </td>
                  <td>
                    Elemento visual que acompaña y refuerza el mensaje. Debe ser coherente con el contenido y no
                    utilizar íconos semánticos de estado.
                  </td>
                </tr>
                <tr>
                  <td>2. Descripción </td>
                  <td>
                    Texto principal del banner. Comunica el mensaje de forma clara y concisa. Puede incluir énfasis o
                    enlaces según la variante.
                  </td>
                </tr>
                <tr>
                  <td>3. Enlace</td>
                  <td>
                    Acción de navegación integrada al texto. Disponible solo en la variante Banner con enlace y ubicada
                    al final del contenido.
                  </td>
                </tr>
                <tr>
                  <td>4. Botón Primario</td>
                  <td>Acción principal del banner. Representa el camino prioritario para la persona usuaria.</td>
                </tr>
                <tr>
                  <td>5. Botón Secundario</td>
                  <td>Acción alternativa o complementaria al botón primario.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-md">
            <strong>Nota:</strong> Las acciones (enlace y botones) no se muestran todas juntas. Su presencia y
            disposición dependen del tipo del banner.
          </p>
        </>
      ),
    },
    {
      title: 'Tipos',
    },
    {
      subtitleBold: 'Banner con enlace',
      content: (
        <>
          <p className="text-md mb-4">
            Las variantes de banner se diferencian por su color de fondo y el tipo de llamado a la acción que contienen.{' '}
          </p>
          <Image
            src={`${basePath}/images/banner/banner_3.svg`}
            alt="Ilustración Banner con enlace"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitleBold: 'Banner con un botón',
      content: (
        <>
          <p className="text-md mb-4">
            En la variante con botón la descripción se alinea a la izquierda y la acompaña un botón secundario como
            llamado a la acción.{' '}
          </p>
          <Image
            src={`${basePath}/images/banner/banner_4.svg`}
            alt="Ilustración Banner con un botón"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitleBold: 'Banner con dos botones',
      content: (
        <>
          <p className="text-md mb-4">
            En la variante con botón la descripción se alinea a la izquierda y la acompañan un botón primario y
            secundario como llamado a la acción. El botón primario siempre se encuentra a la izquierda del secundario.
          </p>
          <Image
            src={`${basePath}/images/banner/banner_5.svg`}
            alt="Ilustración Banner con dos botones"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitleBold: 'Modos de color',
      content: (
        <>
          <p className="text-md mb-2">El componente ofrece 2 modos de color:</p>
          <ul className="list-informative-bullet mb-4">
            <li>
              <strong>Dark</strong>: Pensado para fondos oscuros o contextos donde el banner debe destacarse con alto
              contraste. Refuerza la visibilidad del mensaje y de las acciones.
            </li>
            <li>
              <strong>Light</strong>: Diseñado para fondos claros. Ofrece una lectura más sutil y se integra de forma
              armónica con el resto del contenido de la página.
            </li>
          </ul>
          <Image
            src={`${basePath}/images/banner/banner_6.svg`}
            alt="Ilustración Banner con dos botones"
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
      firstTitle: true,
      content: (
        <>
          <p className="text-md mb-4">
            El componente de banner está construido para ser accesible mediante navegación por teclado y reconocible por
            lectores de pantalla, comunicando su estado de forma clara.
          </p>
          <span className="badge badge-default ms-1">TAB</span>
          <span className="badge badge-default">ENTER</span>
          <ul className="list-informative-bullet mt-4 mb-4">
            <li className="mb-3">
              Tab / Shift + Tab <br />
              Permiten navegar únicamente entre los elementos interactivos dentro del banner. (Enlace y botones)
            </li>
            <li>
              Enter <br /> Activa el elemento interactivo enfocado (enlace o botón).
            </li>
          </ul>

          <Image
            src={`${basePath}/images/banner/banner_7.svg`}
            alt="Navegacion alternativa del banner"
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
            Para cumplir con buenas prácticas de accesibilidad (WCAG + WAI-ARIA), se recomienda que:
          </p>
          <ul className="list-informative-bullet">
            <li>
              Los enlaces y botones cuenten con textos descriptivos que comuniquen claramente la acción que realizan.
            </li>
            <li>
              El ícono incluido en el banner sea marcado como decorativo mediante aria-hidden=&quot;true&quot;, siempre
              que no aporte información relevante.
            </li>
            <li>
              El texto del banner se anuncie de forma continua por los lectores de pantalla, respetando el orden visual
              y semántico.
            </li>
          </ul>
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
            href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 4.1.2 Name, Role, Value (Level A)
          </a>
          <p className="mt-2">
            Para todos los componentes de la interfaz de usuario (incluidos, entre otros: elementos de formulario,
            enlaces y componentes generados por scripts), el nombre y la función se pueden determinar mediante
            programación; los estados, propiedades y valores que puede establecer el usuario se pueden configurar
            mediante programación; y la notificación de cambios en estos elementos está disponible para los agentes de
            usuario, incluidas las tecnologías de asistencia.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Banner"
        description={[
          'Los banners muestran mensajes importantes y breves, a modo de aviso general, para informar a los usuarios sobre temas de diverso interés. Se muestran al ancho completo.',
          ,
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

export default BannerDocs;
