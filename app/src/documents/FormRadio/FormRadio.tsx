import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { RADIO, RADIO_DISABLED, RADIO_GROUP, RADIO_NO_TEXT, RADIO_POSITION } from './code-views';

const basePath = '/Obelisco-V2';

const CODE_INTERACTIVITY = `<div class="form-radio">
  <input 
    class="form-radio-input" 
    type="radio" 
    name="professionRadio" 
    id="profession-radio-designer" 
    value="diseñador"
    checked 
  />
  <label class="form-radio-label" for="profession-radio-designer"> Diseñador </label>
</div>`;

const FormRadioDocs = () => {
  const SECTION_DEV = [
    {
      title: 'Casilla de selección única (Radio)',
      firstTitle: true,
    },
    {
      subtitle: 'Predeterminada',
      content: (
        <CodeBox codeHTML={RADIO}>
          <div className="container">
            <p className="headline-md">Seleccioná una opción *</p>
            <div className="form-radio">
              <input
                className="form-radio-input"
                type="radio"
                name="professionRadio"
                id="profession-radio-designer"
                value="diseñador"
                defaultChecked={true}
              />
              <label className="form-radio-label" htmlFor="profession-radio-designer">
                Diseñador
              </label>
            </div>
            <div className="form-radio">
              <input
                className="form-radio-input"
                type="radio"
                name="professionRadio"
                id="profession-radio-developer"
                value="desarrollador"
              />
              <label className="form-radio-label" htmlFor="profession-radio-developer">
                Desarrollador
              </label>
            </div>
            <div className="form-radio">
              <input
                className="form-radio-input"
                type="radio"
                name="professionRadio"
                id="profession-radio-content"
                value="redactor"
              />
              <label className="form-radio-label" htmlFor="profession-radio-content">
                Redactor de contenidos
              </label>
            </div>
            <div className="form-radio">
              <input
                className="form-radio-input is-invalid"
                type="radio"
                name="professionRadio"
                id="profession-radio-validation"
                value="validacion"
              />
              <label className="form-radio-label" htmlFor="profession-radio-validation">
                Validación
              </label>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Radio Group',
      content: (
        <CodeBox codeHTML={RADIO_GROUP}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <div className="form-input-group" role="radiogroup" aria-labelledby="group-label">
                <div className="form-label-container">
                  <span id="group-label" className="form-label">
                    Ejemplo Radio Group
                  </span>
                  <span className="badge-forms badge-optional-forms">Opcional</span>
                </div>
                <p className="form-label-description">
                  Este es un texto de ayuda que da más información sobre el Input. Es opcional, pero recomendado, y de
                  no más de 3 líneas.
                </p>
                <div className="form-radio">
                  <input
                    type="radio"
                    name="professionRadioGroup"
                    value="radio 1"
                    className="form-radio-input"
                    id="radio_1"
                  />
                  <label className="form-radio-label" htmlFor="radio_1">
                    Leer
                  </label>
                </div>
                <div className="form-radio">
                  <input
                    type="radio"
                    name="professionRadioGroup"
                    value="radio 2"
                    className="form-radio-input"
                    id="radio_2"
                  />
                  <label className="form-radio-label" htmlFor="radio_2">
                    Escuchar música
                  </label>
                </div>
                <div className="form-radio">
                  <input
                    type="radio"
                    name="professionRadioGroup"
                    value="radio 3"
                    className="form-radio-input"
                    id="radio_3"
                  />
                  <label className="form-radio-label" htmlFor="radio_3">
                    Hacer deporte
                  </label>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Deshabilitada',
      content: (
        <CodeBox codeHTML={RADIO_DISABLED}>
          <div className="container">
            <div className="form-radio">
              <input
                className="form-radio-input"
                type="radio"
                name="radioDisabled"
                id="radio-disabled"
                value="validacion"
                disabled
              />
              <label className="form-radio-label" htmlFor="radio-disabled" aria-disabled="true">
                Deshabilitado
              </label>
            </div>
            <div className="form-radio">
              <input
                className="form-radio-input"
                type="radio"
                name="radioDisabled"
                id="radio-disabled-checked"
                value="validacion"
                disabled
                checked
              />
              <label className="form-radio-label" htmlFor="radio-disabled-checked" aria-disabled="true">
                Deshabilitado
              </label>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Sin texto',
      content: (
        <CodeBox codeHTML={RADIO_NO_TEXT}>
          <div className="container">
            <div className="form-radio">
              <input
                className="form-radio-input"
                type="radio"
                name="radioNoText"
                id="radio-no-text"
                value="Sin texto"
              />
              <label
                className="form-radio-label"
                htmlFor="radio-no-text"
                aria-label="Casilla múltiple sin texto"
              ></label>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Posicionamiento',
      content: (
        <CodeBox codeHTML={RADIO_POSITION}>
          <div className="container">
            <div className="form-radio reverse">
              <input
                className="form-radio-input"
                type="radio"
                name="radioPosition"
                id="radio-position"
                value="redactor"
              />
              <label className="form-radio-label" htmlFor="radio-position">
                Radio posicionado a la derecha
              </label>
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
          <section className="d-flex flex-column  gap-4">
            <div className="list-informative">
              <p className="text-xl">Cuándo usar</p>
              <ul className="list-informative-bullet">
                <li>Cuando se requiere una única respuesta dentro de una lista de cinco o menos opciones.</li>
              </ul>
            </div>
            <div className="list-informative">
              <p className="text-xl">Cuándo no usar</p>
              <ul className="list-informative-bullet">
                <li>
                  Para seleccionar múltiples opciones, en ese caso utilizá el componente{' '}
                  <Link href={'/components/form-check'}>casillas de verificación</Link>
                </li>
              </ul>
            </div>
          </section>
        </>
      ),
    },
    {
      title: 'Tipos',
      content: (
        <>
          <p className="mb-4">
            Los <i>botones de radio</i> permiten seleccionar solo una opción dentro de un grupo. Cuando uno está
            seleccionado, se marca con un punto en el centro del círculo, y al elegir una nueva opción, la anterior se
            desmarca automáticamente.
          </p>
          <Image
            src={`${basePath}/images/forms/radio/types.svg`}
            alt="Tipos de radio"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Disposición',
      content: (
        <>
          <div className="max-items-2">
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/forms/radio/disposition_1.svg`}
                alt="Ejemplo de disposición vertical"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="mb-0">
                  Una disposición vertical ayuda a mantener un flujo visual natural y aumenta la legibilidad.
                </p>
              </div>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/forms/radio/disposition_2.svg`}
                alt="Ejemplo de disposición vertical"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                {/* <span className="material-symbols-rounded text-info" style={{ backgroundColor: 'none !important;' }}>
                  info
                </span> */}
                <span className="material-symbols-outlined">info</span>
                <p className="mb-0">
                  La disposición horizontal puede ser útil cuando hay sólo dos opciones con etiquetas cortas.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Contextos de uso',
    },
    {
      subtitle: 'Selección de opciones en solicitudes o turnos.',
      content: (
        <>
          <div className="d-flex flex-column  gap-3">
            <p>
              Facilitan la elección de un turno, horario o tipo de servicio, asegurando que la persona usuaria
              seleccione solo una opción que se adapte a su disponibilidad.
            </p>
            <Image
              src={`${basePath}/images/forms/radio/useContext_1.svg`}
              alt="Ejemplo de contexto de uso en solicitudes o turnos"
              width="800"
              height="242"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      subtitle: 'Selección binaria.',
      content: (
        <>
          <div className="d-flex flex-column  gap-3">
            <p>
              Los <i>botones de radio</i> se usan en preguntas con respuestas binarias, como &ldquo;sí&rdquo; o
              &ldquo;no&rdquo;. Para opciones de encendido/apagado, es mejor usar el componente{' '}
              <Link href={'/components/switch'}>switch</Link>
            </p>
            <Image
              src={`${basePath}/images/forms/radio/useContext_2.svg`}
              alt="Ejemplo de contexto de uso en selección binaria"
              width="800"
              height="242"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      title: 'Contenido',
      content: (
        <>
          <section className="d-flex flex-column  gap-3 p-1">
            <div className="d-flex flex-column  gap-2">
              <h3 className="text-xl" style={{ marginBottom: '0px !important' }}>
                Etiquetas de grupo
              </h3>
              <p style={{ marginBottom: '0px !important' }}>
                Usá títulos solo si ayudan a entender mejor para qué sirven los <i>botones de radio</i>. No pongas
                títulos de más si ya hay uno general.
              </p>
            </div>

            <div className="d-flex flex-column  gap-2">
              <h3 className="text-xl" style={{ marginBottom: '0px !important' }}>
                Etiquetas de botones de radio
              </h3>
              <p style={{ marginBottom: '0px !important' }}>
                Las etiquetas de los <i>botones de radio</i> deben ser siempre claras y concisas, y deben colocarse a la
                derecha del botón para mantener una estructura visual coherente y fácil de leer.
              </p>
            </div>

            <div className="d-flex flex-column  gap-2">
              <h3 className="text-xl" style={{ marginBottom: '0px !important' }}>
                Longitud de las etiquetas
              </h3>
              <p style={{ marginBottom: '0px !important' }}>
                Si una etiqueta es muy larga, es mejor que se acomode en una segunda línea antes que recortarla. Lo
                ideal es que tenga tres palabras o menos, y si no entra, conviene reformularla. Si se extiende, el texto
                debe ir debajo del botón para mantener una buena alineación y legibilidad.
              </p>
            </div>

            <div className="d-flex flex-column  gap-2">
              <h3 className="text-xl" style={{ marginBottom: '0px !important' }}>
                Organización
              </h3>
              <p style={{ marginBottom: '0px !important' }}>
                Asegurate de que las opciones estén organizadas de forma lógica y con sentido. Tené en cuenta que, al
                listar elementos alfabéticamente, el orden puede cambiar al localizar el texto.
              </p>
            </div>
            <div className="d-flex flex-column  gap-2">
              <h3 className="text-xl" style={{ marginBottom: '0px !important' }}>
                Puntuación
              </h3>
              <p style={{ marginBottom: '0px !important' }}>
                Evita usar signos de puntuación en las etiquetas, excepto cuando la etiqueta sea una oración completa.
              </p>
            </div>
          </section>
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
          <p className="mb-3">
            El componente de botón de radio está construido para ser accesible mediante navegación por teclado y
            reconocible por lectores de pantalla, comunicando su estado (seleccionado o deseleccionado) de forma clara.
          </p>
          <div className="flex flex-column gap-3">
            <div>
              <span className="badge badge-default ms-1">TAB</span>
              <span className="badge badge-default">ENTER</span>
            </div>
            <p>
              Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Además,
              con el
              <i>enter</i>, puede accionar los elementos sobre los que esté posicionada como botones, enlaces, entre
              otros.
            </p>
            <Image
              src={`${basePath}/images/forms/radio/nav_alternative.svg`}
              alt="Ejemplo de navegacion alternativa del botón de radio"
              width="800"
              height="242"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      title: 'Etiquetado descriptivo',
      content: (
        <>
          <div className="mb-3 flex flex-column gap-3 pb-3">
            <p>
              Un botón de radio siempre debe ir acompañado de una etiqueta {`<label>`} clara y relacionada con la acción
              u opción que representa.
            </p>
            <p>
              El atributo &quot;<i>for</i>&quot; asocia un {`<label>`} con un elemento de formulario como un {`<input>`}
              , {`<select>`}, {`<textarea>`}, etc. haciendo coincidir su valor con el atributo &quot;<i>id</i>&quot; del
              elemento correspondiente.
            </p>
          </div>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-column  gap-2">
              <h3 className="text-xl" style={{ marginBottom: '0px !important' }}>
                Interactividad limitada
              </h3>
              <p style={{ marginBottom: '0px !important' }}>
                Cuando un botón de radio está deshabilitado temporalmente, es importante indicarlo correctamente
                mediante el atributo &quot;<i>disabled</i>&quot;. Además, debe evitarse que el foco del teclado llegue
                al componente, y debe comunicarse su estado a tecnologías de asistencia.
              </p>
            </div>
            <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
              {CODE_INTERACTIVITY}
            </SyntaxHighlighter>
          </div>
        </>
      ),
    },
    {
      title: 'Criterios WCAG aplicables',
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
          <p className="mt-2">
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
          <p className="mt-2">
            La presentación visual de elementos de la interfaz de usuario y objetos gráficos tiene por lo menos una
            relación de contraste de 3:1 con respecto a los colores adyacentes.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.1 Keyboard (Level A)
          </a>
          <p className="mt-2">
            Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.6 Headings and Labels (Level AA)
          </a>
          <p className="mt-2">
            Si se utilizan encabezados o etiquetas, deben describir con precisión el propósito o contenido al que se
            refieren. Esto facilita la comprensión y navegación del contenido, especialmente para personas con
            discapacidades cognitivas o que utilizan lectores de pantalla.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.7 Focus Visible (Level AA)
          </a>
          <p className="mt-2">
            Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque
            del teclado es visible. Cuando utiliza un teclado para navegar por los checkboxs, los enlaces tienen un
            subrayado visible y un recuadro outline que indica que los enlaces son interactivos.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 4.1.2 Name, Role, Value (Level A)
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
  const SPECS = [
    {
      title: 'Anatomía',
      firstTitle: true,
      content: (
        <>
          <section className="d-flex flex-column gap-3">
            <Image
              src={`${basePath}/images/forms/radio/anatomy.svg`}
              alt="Anatomía del botón de radio"
              width="800"
              height="242"
              className="img-fluid"
            />

            <div className="responsive-scroll" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="tb-number">
                      Elemento
                    </th>
                    <th scope="col" className="tb-text">
                      Carácter
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Casilla de selección</td>
                    <td>Obligatorio, indica si la caja de validación esta seleccionada o deseleccionada.</td>
                  </tr>
                  <tr>
                    <td>Etiqueta</td>
                    <td>Obligatorio, describe la información que la persona usuaria puede seleccionar.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Image
              src={`${basePath}/images/forms/radio/anatomy_1.svg`}
              alt="Anatomía del botón de radio"
              width="800"
              height="242"
              className="img-fluid"
            />

            <div className="responsive-scroll" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="tb-number">
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
                      1. <i>Label</i>
                    </td>
                    <td>
                      Obligatorio, texto que informa el tipo de contenido que la persona usuaria puede seleccionar.
                    </td>
                  </tr>
                  <tr>
                    <td>2. Indicador de requerido</td>
                    <td>Opcional, indica si seleccionar una opción del grupo es obligatorio u opcional.</td>
                  </tr>
                  <tr>
                    <td>3. Texto descriptivo</td>
                    <td>Opcional, se utiliza para proporcionar ayuda o contexto adicional a la persona usuaria.</td>
                  </tr>
                  <tr>
                    <td>4. Botón de radio</td>
                    <td>Obligatorio, describe la información que podes seleccionar.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </>
      ),
    },
    {
      title: 'Estados',
      content: (
        <>
          <section className="d-flex flex-column  gap-3 p-1">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column  gap-2">
                <h3 className="text-xl" style={{ marginBottom: '0px !important' }}>
                  Predeterminado <i>(default)</i>
                </h3>
                <p style={{ marginBottom: '0px !important' }}>
                  Estado predeterminado del botón de radio en una interfaz.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/radio/state_default.svg`}
                alt="Ejemplo del botón de radio en estado predeterminado"
                width="800"
                height="242"
                className="img-fluid"
              />
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column  gap-2">
                <h3 className="text-xl" style={{ marginBottom: '0px !important' }}>
                  Sobre <i>(hover)</i>
                </h3>
                <p style={{ marginBottom: '0px !important' }}>
                  Estado que adopta el botón de radio cuando un cursor pasa sobre él, cambiando su apariencia para
                  indicar su interactividad a la persona usuaria.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/radio/state_hover.svg`}
                alt="Ejemplo del botón de radio en estado 'sobre'"
                width="800"
                height="242"
                className="img-fluid"
              />
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column  gap-2">
                <h3 className="text-xl" style={{ marginBottom: '0px !important' }}>
                  En foco <i>(focus)</i>
                </h3>
                <p style={{ marginBottom: '0px !important' }}>
                  Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea
                  claramente visible cuando recibe la atención del usuario, especialmente al ser navegado con el
                  teclado. En Obelisco se utiliza un borde o anillo <i>(focus ring)</i> por fuera del componente en un
                  color distintivo.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/radio/state_focus.svg`}
                alt="Ejemplo del botón de radio en estado 'foco'"
                width="800"
                height="242"
                className="img-fluid"
              />
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column  gap-2">
                <h3 className="text-xl" style={{ marginBottom: '0px !important' }}>
                  Error
                </h3>
                <p style={{ marginBottom: '0px !important' }}>
                  Para garantizar la accesibilidad, el estado de error debe ser claramente perceptible. En los botones
                  de radio, se utiliza un borde en color rojo con suficiente contraste. Esto asegura que todas las
                  personas puedan identificar y corregir errores fácilmente, cumpliendo con las pautas de accesibilidad
                  (WCAG).
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/radio/state_error.svg`}
                alt="Ejemplo del botón de radio en estado error"
                width="800"
                height="242"
                className="img-fluid"
              />
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column  gap-2">
                <h3 className="text-xl" style={{ marginBottom: '0px !important' }}>
                  Deshabilitado <i>(disabled)</i>
                </h3>
                <p style={{ marginBottom: '0px !important' }}>
                  Estado que indica que el botón no está disponible para la interacción, lo que significa que no puede
                  activarse.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/radio/state_disabled.svg`}
                alt="Ejemplo del botón de radio en estado deshabilitado"
                width="800"
                height="242"
                className="img-fluid"
              />
            </div>
          </section>
        </>
      ),
    },
    {
      title: 'Espaciados',
      content: (
        <>
          <div className="d-flex flex-column gap-3">
            <p style={{ marginBottom: '0px !important' }}>
              La separación vertical entre <i>botones de radio</i> es de 8px. tanto para dispositivos desktop como
              mobile..
            </p>
            <p style={{ marginBottom: '0px !important' }}>
              Podes consultar la <Link href={'/patterns'}>ficha de patrones de formulario</Link> para conocer la
              separación entre secciones.
            </p>
            <Image
              src={`${basePath}/images/forms/radio/spaced.svg`}
              alt="Ejemplo de espaciado del botón de radio"
              width="800"
              height="242"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Botón de radio (radio button)"
        description="El botón de radio es un componente que permite a las personas usuarias seleccionar sólo una opción dentro de un conjunto limitado de alternativas visibles."
      />
      <Tabs
        sectionUx={SECTION_UX}
        sectionDev={SECTION_DEV}
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

export default FormRadioDocs;
