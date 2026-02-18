import Image from 'next/image';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { SELECT, SELECT_DISABLED } from './code-views';
const basePath = '/Obelisco-V2';

const CODE_INTERACTIVITY = `<div class="form-label-container">  
  <label for="input-select" class="form-label">    
    Nombre del selector *  
  </label>
</div>
<select 
class="form-control form-select" 
id="input-select" 
aria-label="Ejemplo de selección por defecto">    
  <option value="0">Seleccionar</option>    
  <option value="1">Opción</option>    
  <option value="2">Opción</option>    
  <option value="3">Opción</option>
</select>
<p class="form-label-description">Campo de asistencia</p>`;

export default function FormSelect() {
  const SECTION_DEV = [
    {
      title: 'Campo de Selección (select)',
      firstTitle: true,
    },
    {
      subtitle: 'Predeterminado',
      content: (
        <CodeBox codeHTML={SELECT}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <div className="form-label-container">
                <label htmlFor="input-select" className="form-label">
                  Nombre del selector *
                </label>
              </div>
              <select className="form-control form-select" aria-label="Ejemplo de selección por defecto">
                <option value="0">Seleccionar</option>
                <option value="1">Opción</option>
                <option value="2">Opción</option>
                <option value="3">Opción</option>
              </select>
              <p className="form-label-description">Campo de asistencia</p>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Deshabilitado',
      content: (
        <CodeBox codeHTML={SELECT_DISABLED}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <div className="form-label-container">
                <label htmlFor="example-disabled-select" className="form-label disabled">
                  Nombre del selector *
                </label>
              </div>
              <select className="form-control form-select" aria-label="Ejemplo de selección por defecto" disabled>
                <option selected>Campo de selección</option>
                <option value="1">Opción</option>
                <option value="2">Opción</option>
                <option value="3">Opción</option>
              </select>
              <p className="form-label-description">Campo de asistencia</p>
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
                <li>Cuando la persona usuaria debe seleccionar una opción de una lista de más de 3 opciones.</li>
              </ul>
            </div>
            <div className="list-informative">
              <p className="text-xl">Cuándo no usar</p>
              <ul className="list-informative-bullet">
                <li>
                  Cuando la persona usuaria necesite seleccionar más de una opción, utilizá el componente{' '}
                  <Link href={'/components/form-check'}>casilla de verificación</Link>
                </li>
                <li>
                  Cuando sea necesario que seleccionar una única opción de un conjunto de menos de 3 opciones, utilizá
                  el <Link href={'/components/form-radio'}>botón de radio</Link>
                </li>
              </ul>
            </div>
          </section>
        </>
      ),
    },
    {
      title: 'Ejemplo de uso',
      content: (
        <>
          <p className="mb-4">
            El campo de selección se usa exclusivamente en formularios para elegir una única opción de una lista de 3 o
            más opciones preestablecidas, y, generalmente, requiere una acción de envío final para confirmar la
            selección.
          </p>
          <Image
            src={`${basePath}/images/forms/select/use_example.svg`}
            alt="Ejemplo de uso del campo de selección"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Indicador de requerido y opcional',
      content: (
        <>
          <p className="mb-4">
            Indica si un campo es obligatorio u opcional, ayudando a las personas a completar el formulario con
            claridad. Podés consultar la <Link href={'/patterns'}>ficha de patrones de formulario</Link> para conocer
            los lineamientos de uso del indicador.
          </p>
          <Image
            src={`${basePath}/images/forms/select/required_example.svg`}
            alt="Ejemplo del campo requerido"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Contenidos',
      content: (
        <>
          <ul className="list-informative-bullet">
            <li>Evitar términos ambiguos o genéricos como &quot;Seleccione una opción&quot;.</li>
            <li>
              <strong>Texto de opciones breves.</strong> Cada opción dentro del selector no debe ocupar más de una
              línea. Considera un máximo de 3 a 5 palabras, o no más de 40 caracteres.
            </li>
            <li>El contenido debe ser claro, conciso y comprensible de inmediato para la persona usuaria.</li>
            <li>Evitar el uso de descripciones o explicaciones extensas dentro de la lista de opciones.</li>
            <li>
              <strong>Máximo de 15 opciones.</strong> Recomendamos que la lista de opciones tenga un mínimo de 3 y un
              máximo de 15 opciones. De lo contrario, considera agregar una función de filtrado para seleccionar una
              opción.
            </li>
          </ul>
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
            El componente de campo de selección está construido para ser accesible mediante navegación por teclado y
            reconocible por lectores de pantalla, comunicando su estado (activo o deshabilitado) de forma clara.
          </p>
          <div className="flex flex-column gap-3">
            <div>
              <span className="badge badge-s-default">TAB</span>
              <span className="badge badge-s-default">ENTER</span>
              <span className="badge badge-default">SPACE</span>
            </div>
            <p>
              Utilizando el <i>tab</i> la persona usuaria puede llegar hasta el campo de selección. Con la{' '}
              <i>barra espaciadora</i> (space), las <i>flechas</i> para arriba o abajo puede abrir el desplegable donde
              estarán las opciones a seleccionar. Las flechas, además, se usan para navegar a través de las opciones,
              las cuales pueden ser seleccionadas con la <i>barra espaciadora</i> o <i>enter</i>. En ese mismo acto se
              cierra el desplegable.
            </p>
            <Image
              src={`${basePath}/images/forms/select/nav_alternative.svg`}
              alt="Ejemplo de navegacion alternativa del campo de selección"
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
          <div className="mb-4 flex flex-column gap-3">
            <p>
              Utilizá el atributo <i>for</i> para asociar una etiqueta {`<label>`} con el elemento de formulario{' '}
              {`<select>`}, haciendo coincidir su valor con el atributo &quot;id&quot; del elemento correspondiente.
            </p>
            <p>
              Para el campo de selección se debe utilizar la etiqueta {`<select>`}, la cual engloba las opciones a
              desplegarse. Se utiliza la etiqeta {`<option>`} para cada item.
            </p>
          </div>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {CODE_INTERACTIVITY}
          </SyntaxHighlighter>
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
            href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 3.3.2 Labels or Instructions (Level A)
          </a>
          <p className="mt-2">
            Asegúrese de que todo el texto de ayuda y los mensajes de error proporcionen asistencia significativa para
            ayudar a los usuarios a evitar o corregir errores.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions"
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
        <section className="d-flex flex-column gap-3">
          <Image
            src={`${basePath}/images/forms/select/anatomy.svg`}
            alt="Anatomía del botón de select"
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
                  <td>Obligatorio, indicá que tipo de información requiere el campo.</td>
                </tr>
                <tr>
                  <td>2. Campo de selección</td>
                  <td>Obligatorio, es el área donde aparecerá la opción seleccionada.</td>
                </tr>
                <tr>
                  <td>3. Indicador de requerido</td>
                  <td>Opcional, los campos pueden etiquetarse como obligatorios u opcionales según el contexto.</td>
                </tr>
                <tr>
                  <td>4. Placeholder</td>
                  <td>Opcional, puede usarse para ejemplificar el formato del dato esperado.</td>
                </tr>
                <tr>
                  <td>
                    5. Icono derecho (<i>expandir</i>)
                  </td>
                  <td>Obligatorio. Se utiliza para indicar que el campo puede expandirse para mostrar las opciones.</td>
                </tr>
                <tr>
                  <td>6. Texto descriptivo</td>
                  <td>
                    Opcional pero recomendado, se utiliza para proporcionar ayuda o contexto adicional a la persona
                    usuaria sobre la opción que tiene que seleccionar.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
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
                <p style={{ marginBottom: '0px !important;' }}>
                  Estado predeterminado del campo de selección en una interfaz.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/select/state_default.svg`}
                alt="Ejemplo del campo de selección en estado predeterminado"
                width="800"
                height="242"
                className="img-fluid"
              />
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column  gap-2">
                <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                  En Foco (<i>focus</i>)
                </h3>
                <p style={{ marginBottom: '0px !important;' }}>
                  Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea
                  claramente visible cuando recibe la atención del usuario, especialmente al ser navegado con el
                  teclado. En Obelisco se utiliza un borde o anillo (focus ring) por fuera del componente en un color
                  distintivo.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/select/state_focus.svg`}
                alt="Ejemplo del campo de selección en estado foco"
                width="800"
                height="242"
                className="img-fluid"
              />
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column  gap-2">
                <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                  Activo
                </h3>
                <p style={{ marginBottom: '0px !important;' }}>Cuando un usuario está seleccionando una opción.</p>
              </div>
              <Image
                src={`${basePath}/images/forms/select/state_active.svg`}
                alt="Ejemplo del campo de selección en estado activo"
                width="800"
                height="242"
                className="img-fluid"
              />
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column  gap-2">
                <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                  Completado
                </h3>
                <p style={{ marginBottom: '0px !important;' }}>
                  Indica que la persona usuaria seleccionó una opción de la lista expandible.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/select/state_completed.svg`}
                alt="Ejemplo del campo de selección en estado completado"
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
                  Para garantizar la accesibilidad, el estado de error debe ser claramente perceptible. En los campos de
                  texto, se utiliza un borde en color rojo con suficiente contraste. Esto asegura que todas las personas
                  puedan identificar y corregir errores fácilmente, cumpliendo con las pautas de accesibilidad (WCAG).
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/select/state_error.svg`}
                alt="Ejemplo del campo de selección en estado de error"
                width="800"
                height="242"
                className="img-fluid"
              />
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column  gap-2">
                <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                  Deshabilitado (<i>disabled</i>)
                </h3>
                <p style={{ marginBottom: '0px !important;' }}>
                  Estado que indica que el campo de selección no está disponible para la interacción, lo que significa
                  que no puede activarse.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/select/state_disabled.svg`}
                alt="Ejemplo del campo de selección en estado deshabilitado"
                width="800"
                height="242"
                className="img-fluid"
              />
            </div>
          </section>
        </>
      ),
    },
  ];

  return (
    <>
      <>
        <ComponentHeader
          title="Campo de selección (select)"
          description="El campo de selección permite a las personas usuarias elegir una opción de una lista de tres o más opciones preestablecidas. Generalmente, se usa en formularios."
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
    </>
  );
}
