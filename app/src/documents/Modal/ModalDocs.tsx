import { basePath } from '@/utils';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import CriteriosWCAG from '@/components/CriteriosWCAG';
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
          <CriteriosWCAG
            list={['1.3.1', '1.4.11', '1.4.3', '1.4.4', '1.4.10', '2.1.1', '2.1.2', '2.4.3', '2.4.7', '3.2.3', '4.1.2']}
          />
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
            id: 'specs',
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
