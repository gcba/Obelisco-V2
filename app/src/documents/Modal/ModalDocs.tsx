import { basePath } from '@/utils';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { MODAL_CONFIRM, MODAL_DANGER, MODAL_RECOGNITION, MODAL_ACCESIBILITY } from './code-views';

const ModalDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Tipos',
      firstTitle: true,
    },
    {
      subtitle: 'Modal de confirmación',
      content: (
        <CodeBox codeHTML={MODAL_CONFIRM}>
          <div className="container">
            <button
              type="button"
              className="btn btn-primary mb-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              Modal de confirmación
            </button>
          </div>

          <div
            className="modal fade"
            tabIndex={-1}
            id="exampleModal1"
            aria-labelledby="exampleModal1Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="exampleModal1Label">
                    ¡Importante!
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    Antes de realizar la ficha de salud, tené en cuenta haber realizado los pasos previos
                    correspondientes.
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">
                    Volver atrás
                  </button>
                  <button type="button" className="btn btn-primary">
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Modal de peligro',
      content: (
        <CodeBox codeHTML={MODAL_DANGER}>
          <div className="container">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
              Modal de peligro
            </button>
          </div>
          <div
            className="modal fade"
            tabIndex={-1}
            id="exampleModal2"
            aria-labelledby="exampleModal2Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="exampleModal2Label">
                    Eliminar documento
                  </h4>
                </div>
                <div className="modal-body">
                  <p>El documento que seleccionaste será eliminado.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                    Cancelar
                  </button>
                  <button type="button" className="btn btn-danger">
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Modal de reconocimiento',
      content: (
        <CodeBox codeHTML={MODAL_RECOGNITION}>
          <div className="container">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
              Modal de reconocimiento
            </button>
          </div>
          <div
            className="modal fade"
            tabIndex={-1}
            id="exampleModal3"
            aria-labelledby="exampleModal3Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-sm">
              <div className="modal-content">
                <div className="modal-header unbordered">
                  <small>CARGA EXITOSA</small>
                  <h4 className="modal-title" id="exampleModal3Label">
                    Los archivos se cargaron correctamente
                  </h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Aceptar
                  </button>
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
          <div className="list-informative">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet">
              <li>
                Utilizar los modales para confirmar acciones o completar tareas que requieran toda la atención de la
                persona usuaria.
              </li>
              <li>
                Usar los modales con moderación ya que interrumpen el flujo de trabajo hasta que se seleccione una
                acción.
              </li>
            </ul>
          </div>

          <div className="list-informative" style={{ marginTop: '32px' }}>
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>
                Evitar usar modales para informar sobre el estado del sistema. En esos casos utilizar{' '}
                <a href="/Obelisco-V2/components/alert">Alertas</a>
              </li>
              <li>
                No utilizar modales para mensajes a modo de aviso general. Para esos casos utilizar{' '}
                <a href="/Obelisco-V2/components/banner">Banners</a>
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
      title: 'Tipos',
      content: (
        <>
          <p className="text-xl fw-semibold mb-2">Modal de reconocimiento</p>
          <p className="text-md mb-4">
            Estos modales comunican información importante que las personas usuarias deben reconocer. Poseen un único
            botón principal que debe estar ubicado del lado derecho del componente.
            <br />
            <br />
            Los modales de reconocimiento pueden ser descartados haciendo clic en la acción principal, presionando la
            tecla ESC en el teclado o mismo haciendo clic por fuera del modal.
          </p>
          <Image
            src={`${basePath}/images/modal/reconocimiento.svg`}
            alt="Modal de reconocimiento"
            width="800"
            height="200"
            className="img-fluid"
          />
          <p className="text-xl fw-semibold mb-2 mt-4">Modal de confirmación</p>
          <p className="text-md mb-4">
            Son utilizados para validar las decisiones de las personas usuarias. Este tipo de modal requiere que se
            realice una acción para que el mismo se complete y se cierre. Posee botones de cancelación y de acción
            principal. El botón secundario se debe ubicar a la izquierda y el botón principal a la derecha.
            <br />
            <br />
            Los modales de confirmación son persistentes hasta que se descartan haciendo clic en la acción principal, en
            el botón secundario, presionando la tecla ESC en el teclado o mismo haciendo clic por fuera del modal.
          </p>
          <Image
            src={`${basePath}/images/modal/confirmacion.svg`}
            alt="Modal de confirmación"
            width="800"
            height="200"
            className="img-fluid"
          />
          <p className="text-xl fw-semibold mb-2 mt-4">Modal de peligro</p>
          <p className="text-md mb-4">
            Son utilizados cuando una persona usuaria necesita confirmar una decisión que afectará su experiencia de
            manera negativa o irreversible. En este modal el botón principal se reemplaza por un botón de peligro y se
            descarta de la misma forma que los modales de confirmación.
          </p>
          <Image
            src={`${basePath}/images/modal/peligro.svg`}
            alt="Modal de peligro"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Contexto de uso',
      content: (
        <>
          <p className="text-xl fw-semibold mb-2">Título como único mensaje</p>
          <p className="text-md mb-3">
            El título del modal puede incluír el mensaje completo para asegurar la claridad visual del componente y que
            la descripción no comunique información repetitiva. Incluso puede cotener una volanta para anteceder el
            título.
          </p>
          <Image
            src={`${basePath}/images/modal/contexto_uso.svg`}
            alt="Modal contexto de uso"
            width="800"
            height="200"
            className="img-fluid"
          />
          <p className="text-md mt-3 mb-4">
            El tamaño del desplegable se adaptará a la cantidad de caracteres que contenga el mismo. En caso de no poder
            resumir la información, superando esta el ancho máximo de 4 columnas, se truncará el texto cortando la
            última palabra y agregando tres (3) puntos que denoten la continuidad de dicha información.
          </p>
          <p className="text-xl fw-semibold mb-2">Estado focus</p>
          <p className="text-md mb-3">
            Cuando un modal se abre, el foco inicial debe estar en la primera ubicación que acepte la entrada de
            información de una persona usuaria. Por ejemplo, si el modal contiene un formulario, el enfoque debe
            establecerse automáticamente en el primer campo.
            <br />
            <br />
            Sin embargo, el uso de formularios dentro de los modales es opcional. Si se trata de un modal que no posee
            campos, el foco debe estar en el botón principal y permanecer en el cuadro de diálogo hasta que la persona
            usuaria lo cierre.
          </p>
          <Image
            src={`${basePath}/images/modal/estado_focus.svg`}
            alt="Modal estado focus"
            width="800"
            height="200"
            className="img-fluid"
          />
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
          <Image
            src={`${basePath}/images/modal/anotomia.svg`}
            alt="Modal anotomia"
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
                  <td>
                    1. Volanta <i>(Opcional)</i>
                  </td>
                  <td>
                    Texto breve de contexto que antecede al título. Se utiliza para reforzar la categoría, estado o tipo
                    de acción del modal (por ejemplo: Advertencia, Confirmación, Paso 2 de 3).
                  </td>
                </tr>
                <tr>
                  <td>2. Título</td>
                  <td>
                    Títulos simples que comuniquen claramente el efecto principal de la acción que esté a punto de
                    realizar una persona. Lo ideal es que los títulos usen la misma frase o una similar a la llamada a
                    la acción que llevó a alguien al cuadro de diálogo en primer lugar.
                  </td>
                </tr>
                <tr>
                  <td>3. Descripción</td>
                  <td>
                    Texto explicativo que amplía el contexto del título. Brinda información adicional, instrucciones o
                    consecuencias de la acción
                  </td>
                </tr>
                <tr>
                  <td>4. Accionables</td>
                  <td>
                    Incluye una acción primaria (destacada) y, opcionalmente, una secundaria para cancelar o realizar
                    una alternativa.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
            El componente de modal está construido para ser accesible mediante navegación por teclado y reconocible por
            lectores de pantalla, comunicando su estado de forma clara.
          </p>
          <span className="badge badge-default ms-1">TAB</span>
          <span className="badge badge-default">SHIFT + TAB</span>
          <span className="badge badge-default">ENTER</span>
          <span className="badge badge-default">SPACE</span>
          <span className="badge badge-default">SCAPE</span>
          <ul className="list-informative-bullet my-4">
            <li>
              Tab / Shift + Tab
              <br />
              Permiten navegar únicamente entre los elementos interactivos dentro del modal. El foco queda atrapado
              mientras el modal esté abierto (focus trap).
            </li>
            <li>
              Enter / Space <br />
              Activan el elemento enfocado, como botones de acción.
            </li>
            <li>
              Escape (ESC)
              <br />
              Cierra el modal y devuelve el foco al elemento que lo activó, siempre que el cierre esté habilitado.
            </li>
          </ul>
          <Image
            src={`${basePath}/images/modal/navegacion_alternativa.svg`}
            alt="Modal navegacion alternativa"
            width="800"
            height="200"
            className="img-fluid"
          />
          <p className="text-md mt-4">
            Al abrirse el modal, el foco debe posicionarse automáticamente en el primer elemento interactivo relevante
            (generalmente el botón primario si es un modal sin campos).
            <br />
            <br />
            Mientras el modal esté visible, el contenido de fondo no debe ser navegable ni interactivo.
          </p>
          <p className="text-md mt-4">
            Cuando se cierra el modal, el foco debe volver al elemento que activó el modal. Esto permite a los usuarios
            de teclados y lectores de pantalla continuar el contexto en el que abrieron originalmente el modal.
          </p>
        </>
      ),
    },
    {
      title: 'Etiquetado descriptivo',
      content: (
        <>
          <p className="text-md mb-4">
            Para cumplir con buenas prácticas de accesibilidad (WCAG + WAI-ARIA), recomendamos proporcionar etiquetas
            accesible alternativa que comunique claramente el estado del componente.
          </p>
          <p className="text-md mb-0">Recomendamos:</p>
          <ul className="list-informative-bullet mb-4">
            <li>
              Role=<i>&quot;dialog&quot;</i>. Define el contenedor del modal como un cuadro de diálogo.
            </li>
            <li>
              Vincular el título del modal con el contenedor del diálogo con <i>aria-labelledby</i>, permitiendo que los
              lectores de pantalla anuncien correctamente el encabezado al abrirse.
            </li>
            <li>
              Asociar la descripción adicional (opcional) mediante <i>aria-describedby</i>, cuando exista contenido
              explicativo y simple. Es aconsejable omitir la especificación <i>aria-describedby</i> si el contenido del
              modal incluye estructuras semánticas, como listas, tablas o varios párrafos, que deben percibirse para
              comprender fácilmente el contenido, es decir, si el contenido sería difícil de entender cuando se anuncia
              como una sola cadena ininterrumpida.
            </li>
          </ul>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {MODAL_ACCESIBILITY}
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
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
          >
            Success Criterion 1.3.1 Info and Relationships (Level A)
          </a>
          <p>
            La información, la estructura y las relaciones transmitidas a través de la presentación pueden determinarse
            mediante programación o están disponibles en el texto.
          </p>
          <a
            className="external"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast"
          >
            Success Criterion 1.4.11 Non-Text Contrast (Level AA)
          </a>
          <p>
            La presentación visual de elementos de la interfaz de usuario y objetos gráficos tiene por lo menos una
            relación de contraste de 3:1 con respecto a los colores adyacentes.
          </p>
          <a
            className="external"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
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
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text"
          >
            Success Criterion 1.4.4 Resize Text (Level AA)
          </a>
          <p>
            Excepto por los subtítulos e imágenes de texto, el texto puede redimensionarse hasta un 200 % sin tecnología
            de asistencia, sin pérdida de contenido ni funcionalidad.
          </p>
          <a
            className="external"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
          >
            Success Criterion 1.4.10 Reflow (Level AA)
          </a>
          <p>
            El contenido puede presentarse sin pérdida de información o funcionalidad y sin necesidad de desplazarse en
            dos dimensiones, siempre que el desplazamiento vertical se ajuste a un ancho equivalente a 320 píxeles CSS y
            el desplazamiento horizontal a una altura equivalente a 256 píxeles CSS, excepto en aquellas partes del
            contenido que requieran un diseño bidimensional para su uso o significado.
          </p>
          <a
            className="external"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
          >
            Success Criterion 2.1.1 Keyboard (Level A)
          </a>
          <p>Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.</p>
          <a
            className="external"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
          >
            Success Criterion 2.1.2 No Keyboard Trap (Level A)
          </a>
          <p>
            Si el foco del teclado puede moverse a un componente de la página utilizando una interfaz de teclado,
            también debe ser posible mover el foco fuera de ese componente usando únicamente la misma interfaz de
            teclado. Si se requiere algo más que las teclas de flecha, tabulador u otros métodos estándar para salir, se
            debe informar al usuario sobre el método necesario para mover el foco.
          </p>
          <a
            className="external"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
          >
            Success Criterion 2.4.3 Focus Order (Level A)
          </a>
          <p>
            Si una página web puede navegarse de forma secuencial y las secuencias de navegación afectan el significado
            o la operación, los componentes enfocables reciben el foco en un orden que preserve el significado y la
            operabilidad.
          </p>
          <a
            className="external"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
          >
            Success Criterion 2.4.7 Focus Visible (Level AA)
          </a>
          <p>
            Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque
            del teclado es visible.
          </p>
          <a
            className="external"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html"
          >
            Success Criterion 3.2.3 Consistent Navigation (Level AA)
          </a>
          <p>
            Los mecanismos de navegación que se repiten en varias páginas web dentro de un conjunto de páginas aparecen
            en el mismo orden relativo cada vez que se repiten, a menos que el usuario inicie un cambio.
          </p>
          <a
            className="external"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
          >
            Success Criterion 4.1.2 Name, Role, Value (Level A)
          </a>
          <p>
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
        title="Modal"
        description={[
          'Los modales muestran información importante que las personas usuarias deben reconocer. Aparecen en forma de ventana sobre la interfaz y bloquean el flujo de trabajo hasta que se selecciona una acción.',
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
            id: 'section-accessibility',
            sectionContent: SECTION_ACCESSIBILITY,
          },
        ]}
      />
    </>
  );
};

export default ModalDocs;
