import { basePath } from '@/utils';
import Image from 'next/image';
import React from 'react';

import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { SM_INFO, SM_SUCCESS, SM_WARNING, SM_DANGER, SM_INSTITUTIONAL } from './code-views';

const SECTION_UX = [
  {
    title: 'Uso',
    firstTitle: true,
    content: (
      <>
        <div className="list-informative">
          <p className="text-xl">Cuándo usar</p>
          <ul className="list-informative-bullet">
            <li>Cuando no hay contenido para mostrar en una pantalla, o cuando una búsqueda no arroja resultados.</li>
            <li>Para comunicar sobre un error, advertencia, información o éxito de un proceso.</li>
          </ul>
        </div>
        <div className="list-informative" style={{ marginTop: '32px' }}>
          <p className="text-xl">Cuándo no usar</p>
          <ul className="list-informative-bullet">
            <li>
              Para informar el estado actual del sistema al procesar una tarea, utilizar{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/alert">Alertas</a>. Por ejemplo: una alerta de
              error por un campo de formulario incompleto.
            </li>
            <li>
              Para informar estados de carga temporales, utilizar el{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/spinner">Spinner</a>.
            </li>
            <li>
              Para destacar contenido dentro del cuerpo de una página a modo de banner, utilizar el componente{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/highlighted">Destacado</a>.
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
        <p className="text-xl mb-2">Mensaje institutional</p>
        <p className="text-md mb-4">
          Se utiliza para brindar información institucional, por ejemplo, el redireccionamiento a otros sitios externos
          al Gobierno de la Ciudad de Buenos Aires.
        </p>
        <Image
          src={`${basePath}/images/mensaje_de_estado/mensaje_institucional.svg`}
          alt="Mensaje de estado institucional"
          width="800"
          height="280"
          className="img-fluid"
        ></Image>

        <p className="text-xl mb-2" style={{ marginTop: '32px' }}>
          Mensaje de información
        </p>
        <p className="text-md mb-4">
          Se utiliza para brindar información relevante para las personas usuarias sobre el proceso que están
          realizando. Por ejemplo: cuando no hay contenido para mostrar en una página o búsqueda, a modo de <i>empty</i>{' '}
          state.
        </p>
        <Image
          src={`${basePath}/images/mensaje_de_estado/mensaje_informacion.svg`}
          alt="Mensaje de estado información"
          width="800"
          height="280"
          className="img-fluid"
        ></Image>

        <p className="text-xl mb-2" style={{ marginTop: '32px' }}>
          Mensaje de éxito
        </p>
        <p className="text-md mb-4">
          Se utiliza para confirmar a la persona usuaria que una acción se ha realizado correctamente, brindándole
          seguridad y cierre sobre el proceso.
        </p>
        <Image
          src={`${basePath}/images/mensaje_de_estado/mensaje_exito.svg`}
          alt="Mensaje de estado información"
          width="800"
          height="280"
          className="img-fluid"
        ></Image>

        <p className="text-xl mb-2" style={{ marginTop: '32px' }}>
          Mensaje de advertencia
        </p>
        <p className="text-md mb-4">
          Se utiliza para captar la atención de las personas usuarias, ya sea como advertencia previa o como
          consecuencia de una acción clave dentro del flujo.
        </p>
        <Image
          src={`${basePath}/images/mensaje_de_estado/mensaje_advertencia.svg`}
          alt="Mensaje de estado advertencia"
          width="800"
          height="280"
          className="img-fluid"
        ></Image>

        <p className="text-xl mb-2" style={{ marginTop: '32px' }}>
          Mensaje de error
        </p>
        <p className="text-md mb-4">
          Se utiliza para comunicar que el proceso no se pudo completar, e indica los pasos a seguir para solucionarlo.
        </p>
        <Image
          src={`${basePath}/images/mensaje_de_estado/mensaje_error.svg`}
          alt="Mensaje de estado error"
          width="800"
          height="280"
          className="img-fluid"
        ></Image>
      </>
    ),
  },
  {
    title: 'Disposición',
    content: (
      <>
        <p className="text-md mb-4">
          El mensaje de estado debe ser el único elemento del cuerpo de la página, para hacer foco en el contenido y
          evitar sobrecargar a la persona usuaria con información.
        </p>
        <Image
          src={`${basePath}/images/mensaje_de_estado/disposicion.svg`}
          alt="Disposición"
          width="800"
          height="280"
          className="img-fluid"
        ></Image>
      </>
    ),
  },
  {
    title: 'Contenido',
    content: (
      <>
        <p className="text-md mb-4">
          La información textual de los mensajes de estado debe brindar un contexto claro y entendible, para que la
          persona usuaria determine cómo continuar.
        </p>
        <div className="col">
          <Image
            src={`${basePath}/images/mensaje_de_estado/contenido_correcto.svg`}
            alt="Buena práctica de contenido"
            width="800"
            height="280"
            className="img-fluid"
          ></Image>
          <div className="d-flex pt-3">
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">
              Los encabezados y las descripciones deben agregar información útil para ayudar a la persona usuaria a
              entender los diferentes estados de un proceso.
            </p>
          </div>
        </div>
        <div className="col">
          <Image
            src={`${basePath}/images/mensaje_de_estado/contenido_incorrecto.svg`}
            alt="Mala práctica de contenido"
            width="800"
            height="280"
            className="img-fluid"
            style={{ marginTop: '2rem !important' }}
          ></Image>
          <div className="d-flex pt-3">
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">
              Evitar los mensajes ambiguos que no proporcionan información relevante para la persona usuaria.
            </p>
          </div>
        </div>

        <p className="text-xl mt-3 pt-3 mb-3">Uso de accionables</p>
        <p className="text-md mb-3">
          Los mensajes de estado deben incluir accionables claros que permitan a la persona usuaria tomar decisiones
          útiles frente a una situación específica. Estos accionables facilitan continuar navegando por el sitio o
          acceder rápidamente a ayuda en caso de necesitarlo, mejorando la experiencia y reduciendo posibles
          frustraciones.
        </p>
        <ul className="list-informative-bullet">
          <li>
            Las etiquetas de los botones deben ser breves, claras y descriptivas. Se recomienda usar verbos en
            indicativo que describan la acción que se realizará, como “Adjuntar archivo”.
          </li>
          <li>
            Representan una oportunidad para incentivar a las personas usuarias a seguir navegando e interactuando con
            la página.
          </li>
        </ul>
        <div className="col">
          <Image
            src={`${basePath}/images/mensaje_de_estado/accionable_correcto.svg`}
            alt="Buena práctica de accionable"
            width="800"
            height="280"
            className="img-fluid"
            style={{ marginTop: '1.5rem !important' }}
          ></Image>
          <div className="d-flex pt-2">
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Utilizar los mensajes de estado como una oportunidad para reponerse de los errores.</p>
          </div>
        </div>
        <div className="col">
          <Image
            src={`${basePath}/images/mensaje_de_estado/accionable_incorrecto.svg`}
            alt="Mala práctica de accionable"
            width="800"
            height="280"
            className="img-fluid"
            style={{ marginTop: '2rem !important' }}
          ></Image>
          <div className="d-flex pt-2">
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">
              No brindar las acciones pertinentes al mensaje de estado puede generar que la persona usuaria cierre la
              página o abandone la navegación.
            </p>
          </div>
        </div>

        <p className="text-xl mt-3 pt-3 mb-3">Colores semánticos y uso de íconos</p>
        <p className="text-md mb-3">
          El ícono de un mensaje de estado sirve como refuerzo visual y semántico para ayudar a la persona usuaria a
          identificar el tipo de <i>feedback</i> que recibe. Más allá de la ayuda que representa, no se debe depender de
          la iconografía para comunicar el estado, por lo que el título y la descripción del mensaje deben ser claros y
          explicativos.
        </p>
        <div className="col">
          <Image
            src={`${basePath}/images/mensaje_de_estado/colores_semanticos_iconos.svg`}
            alt="Mala práctica de colores semanticos"
            width="800"
            height="280"
            className="img-fluid"
            style={{ marginTop: '2rem !important' }}
          ></Image>
          <div className="d-flex pt-2">
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">
              No modificar el uso de la paleta cromática en la iconografía. El color semántico debe ser congruente con
              el contenido del mensaje.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Patrones de uso',
    content: (
      <>
        <p className="text-md" style={{ marginBottom: '32px' }}>
          El mensaje de estado aparece posterior a procesos de carga y no suplanta otros componentes que se utilizan
          para guiar la espera. Por ejemplo, dentro de un pago o trámite, se utiliza para detallar y confirmar la
          actualidad del proceso e indicar los siguientes pasos.
        </p>
        <div className="col">
          <Image
            src={`${basePath}/images/mensaje_de_estado/patron_de_uso_1.svg`}
            alt="Patrón de uso paso 1"
            width="800"
            height="280"
            className="img-fluid"
          ></Image>
          <div className="d-flex pt-2">
            <p className="mb-0">1. La persona usuaria confirma el proceso.</p>
          </div>
        </div>
        <div className="col">
          <Image
            src={`${basePath}/images/mensaje_de_estado/patron_de_uso_2.svg`}
            alt="Patrón de uso paso 2"
            width="800"
            height="280"
            className="img-fluid"
            style={{ marginTop: '2rem' }}
          ></Image>
          <div className="d-flex pt-2">
            <p className="mb-0">
              2. El sistema valida la información mediante la retroalimentación del indicador de carga.
            </p>
          </div>
        </div>
        <div className="col">
          <Image
            src={`${basePath}/images/mensaje_de_estado/patron_de_uso_3.svg`}
            alt="Patrón de uso paso 3"
            width="800"
            height="280"
            className="img-fluid"
            style={{ marginTop: '2rem !important' }}
          ></Image>
          <div className="d-flex pt-2">
            <p className="mb-0">
              3. El mensaje de estado brinda visibilidad sobre la confirmación o rechazo de la solicitud, y las acciones
              pertinentes para que la persona usuaria continúe la navegación.
            </p>
          </div>
        </div>
      </>
    ),
  },
];

const SECTIONS_DEV = [
  {
    title: 'Información',
    firstTitle: true,
    content: (
      <CodeBox codeHTML={SM_INFO}>
        <div className="px-3">
          <div className="status status-info">
            <h2 className="status-title">Este es el título de un mensaje de estado</h2>
            <p className="status-text">
              Este es un párrafo breve que sirve como mensaje. Puede utilizarse para dar indicaciones adicionales como
              la realización de una tarea o instrucciones a seguir.
            </p>
            <div className="list-informative status-list">
              <ul className="list-informative-bullet">
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-primary">
              Botón
            </button>
            <button type="button" className="btn btn-outline-primary">
              Botón
            </button>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Éxito',
    content: (
      <CodeBox codeHTML={SM_SUCCESS}>
        <div className="px-3">
          <div className="status status-success">
            <h2 className="status-title">Este es el título de un mensaje de estado</h2>
            <p className="status-text">
              Este es un párrafo breve que sirve como mensaje. Puede utilizarse para dar indicaciones adicionales como
              la realización de una tarea o instrucciones a seguir.
            </p>
            <div className="list-informative status-list">
              <ul className="list-informative-bullet">
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-primary">
              Botón
            </button>
            <button type="button" className="btn btn-outline-primary">
              Botón
            </button>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Advertencia',
    content: (
      <CodeBox codeHTML={SM_WARNING}>
        <div className="px-3">
          <div className="status status-warning">
            <h2 className="status-title">Este es el título de un mensaje de estado</h2>
            <p className="status-text">
              Este es un párrafo breve que sirve como mensaje. Puede utilizarse para dar indicaciones adicionales como
              la realización de una tarea o instrucciones a seguir.
            </p>
            <div className="list-informative status-list">
              <ul className="list-informative-bullet">
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-primary">
              Botón
            </button>
            <button type="button" className="btn btn-outline-primary">
              Botón
            </button>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Error',
    content: (
      <CodeBox codeHTML={SM_DANGER}>
        <div className="px-3">
          <div className="status status-danger">
            <h2 className="status-title">Este es el título de un mensaje de estado</h2>
            <p className="status-text">
              Este es un párrafo breve que sirve como mensaje. Puede utilizarse para dar indicaciones adicionales como
              la realización de una tarea o instrucciones a seguir.
            </p>
            <div className="list-informative status-list">
              <ul className="list-informative-bullet">
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un{' '}
                  <LinkClient>enlace</LinkClient>.
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-primary">
              Botón
            </button>
            <button type="button" className="btn btn-outline-primary">
              Botón
            </button>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Institucional',
    content: (
      <CodeBox codeHTML={SM_INSTITUTIONAL}>
        <div className="px-3">
          <div className="status status-institutional">
            <h2 className="status-title">Este es el título de un mensaje de estado</h2>
            <p className="status-text">
              Este es un párrafo breve que sirve como mensaje. Puede utilizarse para dar indicaciones adicionales como
              la realización de una tarea o instrucciones a seguir. Puede contener un <LinkClient>enlace</LinkClient>.
            </p>
            <button type="button" className="btn btn-primary">
              Botón
            </button>
            <button type="button" className="btn btn-outline-primary">
              Botón
            </button>
          </div>
        </div>
      </CodeBox>
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
          src={`${basePath}/images/mensaje_de_estado/anatomia.svg`}
          alt="Anatomia del mensaje de estado"
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
                <td>Ícono o ilustración</td>
                <td>Obligatorio.</td>
              </tr>
              <tr>
                <td>Título</td>
                <td>Obligatorio.</td>
              </tr>
              <tr>
                <td>Descripción</td>
                <td>Obligatoria.</td>
              </tr>
              <tr>
                <td>Lista informativa</td>
                <td>Opcional, solo si es necesario listar información.</td>
              </tr>
              <tr>
                <td>Accionables</td>
                <td>Obligatorio. Puede llevar hasta 2 accionables.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: 'Variantes',
    content: <></>,
  },
  {
    subtitle: (
      <>
        <i>Desktop</i>
      </>
    ),
    content: (
      <>
        <p className="text-md mb-4">
          En la versión <i>desktop</i>, los mensajes de estado siguen el patrón de lectura en F y un orden de lectura de
          izquierda a derecha.
        </p>
        <Image
          src={`${basePath}/images/mensaje_de_estado/variante_desktop.svg`}
          alt="Variante desktop de mensaje de estado"
          width="800"
          height="280"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    subtitle: (
      <>
        <i>Mobile</i>
      </>
    ),
    content: (
      <>
        <p className="text-md mb-4">
          En dispositivos móviles, los mensajes de estado siguen la estructura de columna, acomodando los elementos que
          conforman el componente uno debajo del otro. Por tratarse de acciones principales y para asegurar la
          usabilidad de los accionables, los botones siguen la alineación en columna y de ancho completo.
        </p>
        <Image
          src={`${basePath}/images/mensaje_de_estado/variante_mobile.svg`}
          alt="Variante mobile de mensaje de estado"
          width="800"
          height="280"
          className="img-fluid"
        />
      </>
    ),
  },

  {
    title: 'Espaciado',
    content: (
      <>
        <p className="text-md">
          El mensaje de estado se divide en dos bloques. El primer bloque incluye el ícono, el título, la bajada y la
          lista, con un espaciado de 16px entre cada elemento. El segundo, contiene los accionables y tiene un espaciado
          de 48px respecto al primer bloque.
        </p>
      </>
    ),
  },
  {
    subtitle: (
      <>
        <i>Desktop</i>
      </>
    ),
    content: (
      <>
        <Image
          src={`${basePath}/images/mensaje_de_estado/espaciado_desktop.svg`}
          alt="Espaciado desktop de mensaje de estado"
          width="800"
          height="280"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    subtitle: (
      <>
        <i>Mobile</i>
      </>
    ),
    content: (
      <>
        <Image
          src={`${basePath}/images/mensaje_de_estado/espaciado_mobile.svg`}
          alt="Espaciado mobile de mensaje de estado"
          width="800"
          height="280"
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
          Todos los elementos del mensaje de estado pueden recorrerse utilizando la navegación por teclado u otras
          herramientas de asistencia como lectores por voz.
        </p>
        <span className="badge badge-default ms-1">TAB</span>
        <span className="badge badge-default">ENTER</span>
        <p className="text-md mb-4">
          Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Además, con el{' '}
          <i>enter</i>, puede accionar los elementos sobre los que esté posicionada como botones, enlaces, entre otros.
        </p>

        <Image
          src={`${basePath}/images/mensaje_de_estado/navegacion_alternativa.svg`}
          alt="Navegacion alternativa del botón"
          width="738"
          height="400"
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
          className="external mb-2"
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
          className="external mb-2"
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
          className="external mb-2"
          href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 2.1.1 Keyboard (Level A)
        </a>
        <p>Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.</p>

        <a
          className="external mb-2"
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

        <a
          className="external mb-2"
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
          className="external mb-2"
          href="https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 2.4.3 Focus Order (Level A)
        </a>
        <p>
          Si una página web puede navegarse de forma secuencial y las secuencias de navegación afectan el significado o
          la operación, los componentes enfocables reciben el foco en un orden que preserve el significado y la
          operabilidad.
        </p>

        <a
          className="external mb-2"
          href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html#dfn-link-purpose"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 2.4.4 Link Purpose (In Context) (Level A)
        </a>
        <p>
          El propósito de cada enlace debe ser determinado solo con el texto del enlace o con el texto del enlace junto
          con su contexto determinado de forma programática, excepto en los casos en los que el propósito del enlace sea
          ambiguo para los usuarios en general.
        </p>
      </>
    ),
  },
];

const StatusMessageDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Mensaje de estado"
        description={[
          'Los mensajes de estado son elementos que informan y brindan contexto a las personas usuarias dentro de un flujo, acompañando su experiencia con retroalimentación relevante.',
        ]}
      />
      <Tabs
        sectionUx={SECTION_UX}
        sectionDev={SECTIONS_DEV}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'specs',
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

export default StatusMessageDocs;
