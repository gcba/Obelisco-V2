import { basePath } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  CHECKBOX,
  CHECKBOX_DISABLED,
  CHECKBOX_GROUP,
  CHECKBOX_NO_TEXT,
  CHECKBOX_POSITION,
  CHECKBOX_TERMS,
} from './code-views';

// import { RADIO, RADIO_DISABLED, RADIO_GROUP, RADIO_NO_TEXT, RADIO_POSITION } from './code-views';

const CODE_INTERACTIVITY = `<div class="form-checkbox"> 
    <input 
      class="form-checkbox-input" 
      type="checkbox" 
      name="professionCheckbox"
      id="profession-checkbox-designer" 
      value="diseñador" 
      checked 
    /> 
    <label class="form-checkbox-label" for="profession-checkbox-designer"> Diseñador </labeñ>
</div>`;

const FormCheckDocs = () => {
  const SECTION_DEV = [
    {
      title: 'Casilla de selección múltiple (Checkbox)',
      firstTitle: true,
    },
    {
      subtitle: 'Predeterminada',
      content: (
        <CodeBox codeHTML={CHECKBOX}>
          <div className="container">
            <p className="headline-md">Seleccioná una o varias opciones *</p>
            <div className="form-checkbox">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="professionCheckbox"
                id="profession-checkbox-designer"
                value="diseñador"
                defaultChecked={true}
              />
              <label className="form-checkbox-label" htmlFor="profession-checkbox-designer">
                Diseñador
              </label>
            </div>
            <div className="form-checkbox">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="professionCheckbox"
                id="profession-checkbox-developer"
                value="desarrollador"
              />
              <label className="form-checkbox-label" htmlFor="profession-checkbox-developer">
                Desarrollador
              </label>
            </div>
            <div className="form-checkbox">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="professionCheckbox"
                id="profession-checkbox-content"
                value="redactor"
              />
              <label className="form-checkbox-label" htmlFor="profession-checkbox-content">
                Redactor de contenidos
              </label>
            </div>
            <div className="form-checkbox">
              <input
                className="form-checkbox-input is-invalid"
                type="checkbox"
                name="professionCheckbox"
                id="profession-checkbox-validation"
                value="invalido"
              />
              <label className="form-checkbox-label" htmlFor="profession-checkbox-validation">
                Inválido
              </label>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Checkbox Group',
      content: (
        <CodeBox codeHTML={CHECKBOX_GROUP}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <div className="form-input-group" role="checkboxgroup" aria-labelledby="group-label">
                <div className="form-label-container">
                  <span id="group-label" className="form-label">
                    Seleccioná tus hobbies:
                  </span>
                  <span className="badge-forms badge-optional-forms">Opcional</span>
                </div>
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
                  no más de 3 líneas.
                </p>
                <div className="form-checkbox">
                  <input type="checkbox" name="hobbies" value="leer" className="form-checkbox-input" id="checkbox_1" />
                  <label className="form-checkbox-label" htmlFor="checkbox_1">
                    Leer
                  </label>
                </div>
                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    name="hobbies"
                    value="musica"
                    className="form-checkbox-input"
                    id="checkbox_2"
                  />
                  <label className="form-checkbox-label" htmlFor="checkbox_2">
                    Escuchar música
                  </label>
                </div>
                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    name="hobbies"
                    value="deporte"
                    className="form-checkbox-input"
                    id="checkbox_3"
                  />
                  <label className="form-checkbox-label" htmlFor="checkbox_3">
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
        <CodeBox codeHTML={CHECKBOX_DISABLED}>
          <div className="container">
            <div className="form-checkbox">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="checkboxDisabled"
                id="disabled-checkbox"
                value="disabled"
                disabled
              />
              <label className="form-checkbox-label" htmlFor="disabled-checkbox" aria-disabled="true">
                Deshabilitado
              </label>
            </div>
            <div className="form-checkbox">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="checkboxDisabled"
                id="disabled-checkbox-checked"
                value="disabled"
                disabled
                checked
              />
              <label className="form-checkbox-label" htmlFor="disabled-checkbox-checked" aria-checked="true">
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
        <CodeBox codeHTML={CHECKBOX_NO_TEXT}>
          <div className="container">
            <div className="form-checkbox">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="checkboxNoText"
                id="checkbox-no-text"
                value="Sin texto"
              />
              <label
                className="form-checkbox-label"
                htmlFor="checkbox-no-text"
                aria-label="Casilla múltiple sin texto"
              ></label>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: "Casilla 'Términos y condiciones'",
      content: (
        <CodeBox codeHTML={CHECKBOX_TERMS}>
          <div className="container">
            <div className="form-checkbox">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="checkboxTerms"
                id="checkbox-terms"
                value="copywrite"
              />
              <label className="form-checkbox-label" htmlFor="checkbox-terms">
                Acepto los <a href="#">términos y condiciones</a>
              </label>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Posicionamiento',
      content: (
        <CodeBox codeHTML={CHECKBOX_POSITION}>
          <div className="container">
            <div className="form-checkbox reverse">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="checkboxPosition"
                id="checkbox-position"
                value="redactor"
              />
              <label className="form-checkbox-label" htmlFor="checkbox-position">
                Checkbox posicionado a la derecha
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
                <li>Se usan cuando las personas usuarias pueden elegir una o más opciones entre varias disponibles.</li>
                <li>
                  Mostrar una opción simple que requiere aceptación o confirmación adicional, como antes de enviar un
                  formulario.
                </li>
              </ul>
            </div>
            <div className="list-informative">
              <p className="text-xl">Cuándo usar</p>
              <ul className="list-informative-bullet">
                <li>
                  Cuando se requiere una única respuesta dentro de un conjunto de opciones, en ese caso utilizar el
                  componente <Link href={'/components/form-radio'}>botón de radio</Link>
                </li>
                <li>
                  Cuando la acción debe ejecutarse de inmediato al seleccionar, en ese caso usar el componente{' '}
                  <Link href={'/components/button'}>botón</Link>
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
            Los <i>checkboxes</i> permiten seleccionar una o varias opciones dentro de un grupo. Cuando están
            seleccionados muestran una marca dentro de la casilla, y cuando no lo están, queda vacía.
          </p>
          <Image
            src={`${basePath}/images/forms/check/types.svg`}
            alt="Tipos de casilla de verificación"
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
          <p className="mb-3">
            Recomendamos una disposición vertical de los <i>checkboxes</i>, ya que facilita la lectura, mejora la
            accesibilidad y evita que las opciones se pasen por alto.
          </p>
          <div className="max-items-2">
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/forms/check/disposition_1.svg`}
                alt="Ejemplo de disposición vertical"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="mb-0">
                  Una disposición vertical ayuda a mantener un flujo visual natural y hace más accesible la selección de
                  opciones.
                </p>
              </div>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/forms/check/disposition_2.svg`}
                alt="Ejemplo de disposición vertical"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-danger">close</span>
                <p className="mb-0">
                  La disposición horizontal puede dificultar la lectura y comprender qué etiqueta corresponde a cada
                  opción.
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
      subtitle: 'Para selección múltiples opciones en formularios',
      content: (
        <>
          <div className="d-flex flex-column  gap-3">
            <p>
              Para ofrecer varias opciones dentro de una categoría, usá un grupo de <i>checkboxes</i>. Este grupo debe
              tener una etiqueta que lo identifique, como un título. Si el grupo incluye más de cinco opciones,
              considerá usar un componente de selección <i>(select)</i> para facilitar la lectura y la elección.
            </p>
            <Image
              src={`${basePath}/images/forms/check/useContext_1.svg`}
              alt="Ejemplo de contexto de uso en opciones multiples"
              width="800"
              height="242"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      subtitle: 'Aplicación de filtros.',
      content: (
        <>
          <div className="d-flex flex-column  gap-3">
            <p>
              En filtros, los <i>checkboxes</i> permiten seleccionar varias opciones al mismo tiempo sin necesidad de
              confirmar cada cambio, lo que da flexibilidad para ajustar los resultados según las preferencias.
            </p>
            <Image
              src={`${basePath}/images/forms/check/useContext_2.svg`}
              alt="Ejemplo de contexto de uso en selección multiple"
              width="800"
              height="242"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      subtitle: 'Confirmación y aceptación.',
      content: (
        <>
          <div className="d-flex flex-column  gap-3">
            <p>
              Los <i>checkboxes</i> independientes se usan para confirmar acciones o aceptar condiciones. A diferencia
              de los botones de radio, se pueden marcar o desmarcar antes de enviar. Suelen ir acompañados de un botón
              para confirmar. Si se usan para aceptar términos, se recomienda escribir la frase en primera persona y
              mostrar un enlace con más información.
            </p>
            <Image
              src={`${basePath}/images/forms/check/useContext_3.svg`}
              alt="Ejemplo de contexto de uso en selección multiple"
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
              <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                Uso de mayúsculas
              </h3>
              <p style={{ marginBottom: '0px !important;' }}>
                Utilizar mayúsculas en la letra inicial de todas las etiquetas del grupo.
              </p>
            </div>

            <div className="d-flex flex-column  gap-2">
              <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                Longitud del texto
              </h3>
              <p style={{ marginBottom: '0px !important;' }}>
                Las etiquetas deben ser legibles, consistentes y concisas. En <i>checkboxes</i> independientes se
                permite más texto, pero en grupos conviene mantener las etiquetas cortas para no afectar la experiencia
                si se extienden a una segunda línea.
              </p>
            </div>

            <div className="d-flex flex-column  gap-2">
              <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                Etiquetas
              </h3>
              <p style={{ marginBottom: '0px !important;' }}>
                Usa etiquetas claras y concisas para que los usuarios puedan escanear las opciones fácilmente. Asegurate
                de presentar todas las opciones y que no se superpongan. Todas las etiquetas deben ser consistentes en
                longitud, tiempo verbal y significado. Para etiquetas de grupo, indicá la categoría del conjunto.
              </p>
            </div>

            <div className="d-flex flex-column  gap-2">
              <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                Organización
              </h3>
              <p style={{ marginBottom: '0px !important;' }}>
                Asegurate de que las opciones de los <i>checkboxes</i> estén organizadas de forma lógica y con sentido.
                Tené en cuenta que, al listar elementos alfabéticamente, el orden puede cambiar al localizar el texto.
              </p>
            </div>
            <div className="d-flex flex-column  gap-2">
              <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                Puntuación
              </h3>
              <p style={{ marginBottom: '0px !important;' }}>
                Evita usar signos de puntuación en las etiquetas, excepto cuando la etiqueta sea una oración completa,
                por ejemplo, en términos y condiciones.
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
            El componente <i>checkbox</i> está construido para ser accesible mediante navegación por teclado y
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
              <i>tab</i>, puede accionar los elementos sobre los que esté posicionada como botones, enlaces, entre
              otros.
            </p>
            <Image
              src={`${basePath}/images/forms/check/nav_alternative.svg`}
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
              Un checkbox siempre debe ir acompañado de una etiqueta {`<label>`} clara y relacionada con la acción u
              opción que representa.
            </p>
            <p>
              El atributo &quot;<i>for</i>&quot; asocia un {`<label>`} con un elemento de formulario como un {`<input>`}
              , {`<select>`}, {`<textarea>`}, etc. haciendo coincidir su valor con el atributo &quot;<i>id</i>&quot; del
              elemento correspondiente.
            </p>
          </div>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-column  gap-2">
              <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                Interactividad limitada
              </h3>
              <p style={{ marginBottom: '0px !important;' }}>
                Cuando un <i>checkbox</i> está deshabilitado temporalmente, es importante indicarlo correctamente
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
  const SPECS = [
    {
      title: 'Anatomía',
      firstTitle: true,
      content: (
        <>
          <section className="d-flex flex-column gap-3">
            <Image
              src={`${basePath}/images/forms/check/anatomy.svg`}
              alt="Anatomía de la casilla de verificación"
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
                    <td>Checkbox</td>
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
              src={`${basePath}/images/forms/check/anatomy_1.svg`}
              alt="Anatomía de la casilla de verificación"
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
                      Obligatorio, texto que informa el tipo de información que la persona usuaria puede seleccionar.
                    </td>
                  </tr>
                  <tr>
                    <td>2. Indicador de requerido</td>
                    <td>Opcional, indica si un campo es obligatorio u opcional.</td>
                  </tr>
                  <tr>
                    <td>3. Texto descriptivo</td>
                    <td>Opcional, se utiliza para proporcionar ayuda o contexto adicional a la persona usuaria.</td>
                  </tr>
                  <tr>
                    <td>4.Botón de radio</td>
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
                <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                  Predeterminado <i>(default)</i>
                </h3>
                <p style={{ marginBottom: '0px !important;' }}>Estado predeterminado del checkbox en una interfaz.</p>
              </div>
              <Image
                src={`${basePath}/images/forms/check/state_default.svg`}
                alt="Ejemplo del botón de check en estado predeterminado"
                width="800"
                height="242"
                className="img-fluid"
              />
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column  gap-2">
                <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                  Sobre <i>(hover)</i>
                </h3>
                <p style={{ marginBottom: '0px !important;' }}>
                  Estado que adopta el checkbox cuando un cursor pasa sobre él, cambiando su apariencia para indicar su
                  interactividad a la persona usuaria.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/check/state_hover.svg`}
                alt="Ejemplo del botón de check en estado 'sobre'"
                width="800"
                height="242"
                className="img-fluid"
              />
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column  gap-2">
                <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                  En foco <i>(focus)</i>
                </h3>
                <p style={{ marginBottom: '0px !important;' }}>
                  Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea
                  claramente visible cuando recibe la atención del usuario, especialmente al ser navegado con el
                  teclado. En Obelisco se utiliza un borde o anillo <i>(focus ring)</i> por fuera del componente en un
                  color distintivo.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/check/state_focus.svg`}
                alt="Ejemplo del botón de check en estado 'foco'"
                width="800"
                height="242"
                className="img-fluid"
              />
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column  gap-2">
                <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                  Error
                </h3>
                <p style={{ marginBottom: '0px !important;' }}>
                  Para garantizar la accesibilidad, el estado de error debe ser claramente perceptible. En los checkbox,
                  se utiliza un borde en color rojo con suficiente contraste. Esto asegura que todas las personas puedan
                  identificar y corregir errores fácilmente, cumpliendo con las pautas de accesibilidad (WCAG).
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/check/state_error.svg`}
                alt="Ejemplo del botón de check en estado error"
                width="800"
                height="242"
                className="img-fluid"
              />
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column  gap-2">
                <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                  Deshabilitado <i>(disabled)</i>
                </h3>
                <p style={{ marginBottom: '0px !important;' }}>
                  Estado que indica que el botón no está disponible para la interacción, lo que significa que no puede
                  activarse.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/check/state_disabled.svg`}
                alt="Ejemplo del botón de check en estado deshabilitado"
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
            <p style={{ marginBottom: '0px !important;' }}>
              La separación vertical entre <i>checkboxes</i> es de 8px. tanto para dispositivos desktop como mobile.
            </p>
            <p style={{ marginBottom: '0px !important;' }}>
              Podes consultar la <Link href={'/patterns'}>ficha de patrones de formulario </Link> para conocer la
              separación entre secciones.
            </p>
            <Image
              src={`${basePath}/images/forms/check/spaced.svg`}
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
        title="Casilla de verificación (checkbox)"
        description="La casilla de verificación (checkbox) es un componente que permite a las personas usuarias seleccionar una o varias opciones dentro de un conjunto."
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

export default FormCheckDocs;
