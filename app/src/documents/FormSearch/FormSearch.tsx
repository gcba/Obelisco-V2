import { basePath } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { SEARCH, SEARCH_BUTTON, SEARCH_DISABLED } from './code-views';

const CODE_INTERACTIVITY = `<form> 
  <div class="form-label-container"> 
    <label for="search" class="form-label">Ejemplo Buscador</label>  
  </div>
  <div class='search-container'>  
    <input
      type="search"
      class="form-control input-search"
      id="search"
      placeholder="Buscar..."
      name="search"
      aria-label="Campo de búsqueda"
    />  
    <button class="reset" type="reset" aria-label="Borrar"></button> 
  </div>
</form>`;

const FormSearchDocs: React.FC = () => {
  const SECTION_DEV = [
    {
      title: 'Buscador',
      firstTitle: true,
      content: (
        <CodeBox codeHTML={SEARCH}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <form>
                <div className="form-label-container">
                  <label htmlFor="search" className="form-label">
                    Ejemplo Buscador
                  </label>
                </div>
                <div className="search-container">
                  <input
                    type="search"
                    className="form-control input-search"
                    id="search"
                    placeholder="Buscar..."
                    name="search"
                    aria-label="Campo de búsqueda"
                  />
                  <button className="reset" type="reset" aria-label="Borrar"></button>
                </div>
              </form>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Buscador con botón',
      content: (
        <CodeBox codeHTML={SEARCH_BUTTON}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <form>
                <div className="form-label-container">
                  <label htmlFor="search-btn" className="form-label">
                    Ejemplo Buscador con botón
                  </label>
                </div>
                <div className="search-container">
                  <input
                    type="search"
                    className="form-control input-search input-search-with-button"
                    id="search-btn"
                    placeholder="Buscar..."
                    name="search"
                    aria-label="Campo de búsqueda"
                  />
                  <button className="reset" type="reset" aria-label="Borrar"></button>
                  <button className="button-search" type="submit" aria-label="Buscar"></button>
                </div>
              </form>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Deshabilitado',
      content: (
        <CodeBox codeHTML={SEARCH_DISABLED}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <form>
                <div className="form-label-container">
                  <label htmlFor="search-btn" className="form-label disabled">
                    Ejemplo buscador deshabilitado
                  </label>
                </div>
                <div className="search-container">
                  <input
                    type="search"
                    className="form-control input-search input-search-with-button"
                    id="search-btn"
                    placeholder="Buscar..."
                    name="search"
                    aria-label="Campo de búsqueda"
                    disabled
                  />
                  <button className="reset" type="reset" aria-label="Borrar"></button>
                </div>
              </form>
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
                <li>
                  Cuando la persona usuaria necesita hacer una búsqueda general que sea el disparador de la navegación
                  en la página, por ejemplo en una página de trámites buscar &quot;Otorgamiento de licencia&quot;
                </li>
                <li>
                  Cuando la persona usuaria necesite filtrar en tiempo real contenido de un conjunto de opciones
                  establecidas.
                </li>
              </ul>
            </div>
            <div className="list-informative">
              <p className="text-xl">Cuándo usar</p>
              <ul className="list-informative-bullet">
                <li>Para consultas complejas que involucran varias palabras clave o una sintaxis específica.</li>
                <li>Cuando haya cantidad pequeñas o limitadas de datos.</li>
                <li>Cuando la información sea sencilla y se puede encontrar fácilmente.</li>
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
            Este componente permite a los usuarios buscar contenido de forma rápida, sin necesidad de navegar por
            diferentes secciones. Incluye un campo de entrada con un ícono de lupa y presenta dos variantes según el
            estado de uso:
          </p>
          <div className="d-flex flex-column gap-1 mb-4">
            <Image
              src={`${basePath}/images/forms/search/types.svg`}
              alt="Tipos de campo de búsqueda"
              width="800"
              height="200"
              className="img-fluid"
            />
            <p style={{ marginBottom: '0 !important;' }}>
              <strong>Buscador con accionable.</strong> Se utiliza para búsquedas centrales de la página y en secciones
              sin contexto claro.
            </p>
          </div>

          <div className="d-flex flex-column gap-1 mb-4">
            <Image
              src={`${basePath}/images/forms/search/types_1.svg`}
              alt="Tipos de campo de búsqueda"
              width="800"
              height="200"
              className="img-fluid"
            />
            <p style={{ marginBottom: '0 !important;' }}>
              <strong> Buscador sin accionable.</strong> Se utiliza para búsquedas internas dentro de una sección ya
              contextualizada, como buscar por nombre y apellido
            </p>
          </div>
        </>
      ),
    },
    {
      title: 'Ejemplo de uso',
      content: (
        <>
          <section className="d-flex flex-column gap-4">
            <div>
              <p className="headline-sm">Búsquedas relacionadas con base de datos</p>
              <p className="mb-4">
                Se utiliza cuando la información a buscar no está disponible localmente en la interfaz y necesita ser
                consultada en una fuente externa por ejemplo, una base de datos.
              </p>
              <Image
                src={`${basePath}/images/forms/search/use_example.svg`}
                alt="Ejemplo de uso del campo de búsqueda"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>

            <div>
              <p className="headline-sm">Filtrado de opciones disponibles</p>
              <p className="mb-4">
                Puede ser útil en formularios, o secciones con contenido preestablecido, para encontrar información
                rápidamente. Generalmente, el contenido se va ajustando automáticamente a medida que la persona usuaria
                escribe.
              </p>
              <Image
                src={`${basePath}/images/forms/search/use_example_1.svg`}
                alt="Ejemplo de uso del campo de búsqueda"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
          </section>
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
                Etiquetas claras y concisas
              </h3>
              <p style={{ marginBottom: '0px !important;' }}>
                Las etiquetas son opcionales en un componente de búsqueda, sin embargo, se usan para identificar y
                describir el propósito de la búsqueda. Escribí el texto de la etiqueta con mayúscula inicial solo al
                comienzo, y sé claro y lo más conciso posible.
              </p>
            </div>

            <div className="d-flex flex-column  gap-2">
              <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                Texto de marcador de posición (placeholder)
              </h3>
              <p style={{ marginBottom: '0px !important;' }}>
                Usar únicamente texto de marcador de posición genera problemas de accesibilidad, ya que no es leído por
                los lectores de pantalla y desaparece cuando el usuario comienza a escribir. Cuando uses un marcador de
                posición en una búsqueda, asegurate de que no contenga información importante sobre cómo usar el campo.
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
            El componente Buscador está construido para ser accesible mediante navegación por teclado y reconocible por
            lectores de pantalla, comunicando su estado (activado o desactivado) de forma clara.
          </p>
          <div className="flex flex-column gap-3">
            <div>
              <span className="badge badge-default ms-1">TAB</span>
              <span className="badge badge-default">ENTER</span>
            </div>
            <p>
              Utilizando el tab la persona usuaria puede navegar a través de elementos de la interfaz. Además, con el
              enter, puede accionar los elementos sobre los que esté posicionada como botones, enlaces, entre otros.
            </p>
            <Image
              src={`${basePath}/images/forms/search/nav_alternative.svg`}
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
              El buscador siempre debe tener una etiqueta {`<label>`} clara y relacionada con la acción que representa.
            </p>
            <p>
              El {`<label>`} es clave para que las personas que usan tecnologías asistivas, como lectores de pantalla,
              entiendan para qué sirve el buscador.
            </p>
            <p>
              El atributo &quot;for&quot; asocia un {`<label>`} con un elemento de formulario como un {`<input>`},{' '}
              {`<select>`}, {`<textarea>`}, etc. mediante el &quot;id&quot; del elemento objetivo.
            </p>
          </div>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-column  gap-2">
              <h3 className="text-xl" style={{ marginBottom: '0px !important;' }}>
                Interactividad limitada
              </h3>
              <p style={{ marginBottom: '0px !important;' }}>
                Cuando un componente de buscador está deshabilitado temporalmente, es importante indicarlo correctamente
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
            href="https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.1 Bypass Blocks (Level A)
          </a>
          <p className="mt-2">
            Para ayudar a los usuarios de lectores de pantalla en la navegación, cada búsqueda debe estar dentro de una
            región de landmark (hito) ARIA. Cada instancia debe tener una etiqueta única de identificación, a menos que
            las búsquedas duplicadas realicen la misma función.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.5 Multiple Ways (Level AA)
          </a>
          <p className="mt-2">
            Considera usar un mecanismo de búsqueda para ayudar a los usuarios a localizar información fácilmente y de
            múltiples maneras La búsqueda permite a los usuarios encontrar información de manera más fácil y precisa,
            incluyendo a personas con discapacidades visuales, limitaciones cognitivas u otras discapacidades.
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
            del teclado es visible. Cuando utiliza un teclado para navegar por los componentes, los enlaces tienen un
            subrayado visible y un recuadro outline que indica que los enlaces son interactivos.
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
              src={`${basePath}/images/forms/search/anatomy.svg`}
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
                      1. Etiqueta (<i>label</i>)
                    </td>
                    <td>Opcional, puede reforzar que tipo de información requiere el campo.</td>
                  </tr>
                  <tr>
                    <td>2. Indicador de requerido</td>
                    <td>Opcional, los campos pueden etiquetarse como obligatorios u opcionales según el contexto.</td>
                  </tr>
                  <tr>
                    <td>3. Placeholder</td>
                    <td>Opcional, puede usarse para ejemplificar el formato del dato esperado.</td>
                  </tr>
                  <tr>
                    <td>
                      4. Campo (<i>inputField</i>)
                    </td>
                    <td>Obligatorio, es el área donde las personas usuarias ingresan el texto.</td>
                  </tr>
                  <tr>
                    <td>5. Texto descriptivo</td>
                    <td>
                      Opcional pero recomendado, se utiliza para proporcionar ayuda o contexto adicional a la persona
                      usuaria sobre el dato que tiene que ingresar.
                    </td>
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
                <p style={{ marginBottom: '0px !important;' }}>Estado predeterminado del buscador en una interfaz.</p>
              </div>
              <Image
                src={`${basePath}/images/forms/search/state_default.svg`}
                alt="Ejemplo del campo de búsqueda en estado predeterminado"
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
                  Es un principio de accesibilidad que garantiza que el campo de búsqueda sea claramente visible cuando
                  recibe el foco, especialmente al ser navegado con el teclado. En Obelisco, esto se indica mediante un
                  borde o anillo (focus ring) alrededor del campo en un color distintivo, lo que ayuda a la persona
                  usuaria a identificar dónde está interactuando.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/search/state_focus.svg`}
                alt="Ejemplo del campo de búsqueda en estado de foco"
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
                <p style={{ marginBottom: '0px !important;' }}>
                  Es el estado en el que el campo de búsqueda está en foco y la persona usuaria está escribiendo. Este
                  estado suele destacarse visualmente mediante un cambio de color, borde o sombra para indicar que el
                  componente está listo para recibir texto.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/search/state_active.svg`}
                alt="Ejemplo del campo de búsqueda en estado activo"
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
                  Es el estado del componente cuando la persona usuaria ha ingresado texto en el campo de búsqueda. Se
                  muestra una interfaz con una cruz a la derecha para borrar el contenido y una lupa como botón para
                  ejecutar la búsqueda, indicando que el campo está listo para ser usado.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/search/state_completed.svg`}
                alt="Ejemplo del campo de búsqueda en estado completado"
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
                  Estado que indica que el botón no está disponible para la interacción, lo que significa que no puede
                  activarse.
                </p>
              </div>
              <Image
                src={`${basePath}/images/forms/search/state_disabled.svg`}
                alt="Ejemplo del campo de búsqueda en estado deshabilitado"
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
          <div className="d-flex flex-column gap-3 mb-4">
            <p style={{ marginBottom: '0px !important;' }}>
              La separación vertical entre elementos es de 8px tanto para dispositivos desktop como mobile.
            </p>
            <p style={{ marginBottom: '0px !important;' }}>
              Podes consultar la <Link href="/patterns">ficha de patrones de formulario</Link> para conocer la
              separación entre secciones.
            </p>
          </div>
          <Image
            src={`${basePath}/images/forms/search/spaces.svg`}
            alt="Ejemplo del campo de búsqueda con espaciados"
            width="800"
            height="242"
            className="img-fluid"
          />
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Campo de búsqueda (search)"
        description={[
          'El campo de búsqueda ayuda a los usuarios a encontrar rápidamente el contenido que necesitan, sin tener que recorrer manualmente la navegación de la página.',
        ]}
      />
      <Tabs
        sectionUx={SECTION_UX}
        sectionDev={SECTION_DEV}
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

export default FormSearchDocs;
