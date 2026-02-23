import { basePath } from '@/utils';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { FILE_DEFAULT, FILE_DISABLED, INPUT_FILE_ACCESSIBILITY } from './code-views';

const FormFileDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Carga de archivo',
      firstTitle: true,
    },
    {
      subtitle: 'Default',
      content: (
        <CodeBox codeHTML={FILE_DEFAULT}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <div className="form-label-container">
                <label htmlFor="exampleInputFile" className="form-label">
                  Label
                </label>
                <span className="badge-forms badge-required-forms">Requerido</span>
              </div>
              <input
                type="file"
                className="form-control"
                id="exampleInputFile"
                name="uploadedFile"
                aria-describedby="carga de archivo"
                accept="image/png, image/jpeg"
              />
              <p className="form-label-description">
                Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no
                más de 3 líneas.
              </p>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Deshabilitado',
      content: (
        <CodeBox codeHTML={FILE_DISABLED}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <div className="form-label-container">
                <label htmlFor="exampleInputFile" className="form-label">
                  Label
                </label>
                <span className="badge-forms badge-required-forms">Requerido</span>
              </div>
              <input
                type="file"
                className="form-control"
                id="exampleInputFile"
                name="uploadedFile"
                accept="image/png, image/jpeg"
                aria-describedby="carga de archivo"
                disabled
              />
              <p className="form-label-description">
                Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no
                más de 3 líneas.
              </p>
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
              <li>Cuando se necesita que la persona usuaria suba uno o varios archivos desde su dispositivo.</li>
              <li>
                En formularios o procesos donde los archivos son parte esencial de la acción (por ejemplo, enviar
                documentación, adjuntar imágenes, etc.).
              </li>
            </ul>
          </div>
          <div className="list-informative" style={{ marginTop: '32px' }}>
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>No usarlo para acciones que no impliquen la carga de archivos.</li>
              <li>
                Evitar colocarlo junto a campos que no estén relacionados, para no generar confusión en la interacción.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Ejemplo de uso',
      content: (
        <>
          <p className="text-md mb-4">
            Se usa en formularios que requieren adjuntar documentos, como imágenes o comprobantes. En <i>desktop</i>,
            suele incluir un botón que abre el explorador de archivos del sistema. En <i>mobile</i>, puede abrir el
            explorador o la cámara, según el tipo de archivo solicitado.
          </p>
          <Image
            src={`${basePath}/images/form_file/ej_de_uso_input_file.svg`}
            alt="Ejemplo visual de campo de carga de archivo"
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
          <p className="text-md mb-4">
            Indica si un campo es obligatorio u opcional, ayudando a las personas a completar el formulario con
            claridad. Podés consultar la{' '}
            <a href="https://gcba.github.io/Obelisco-V2/patterns">ficha de patrones de formulario</a> para conocer los
            lineamientos de uso del indicador.
          </p>

          <Image
            src={`${basePath}/images/form_file/indicador_form_file.svg`}
            alt="Ejemplo visual de indicador de requerido y opcional de carga de archivo"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Contenido',
      content: (
        <>
          <p className="text-xl mb-2">Instrucciones claras para la carga de archivos</p>
          <p className="text-md">
            Mostrá de forma anticipada qué tipos de archivos se aceptan, el tamaño máximo y cuántos se pueden cargar.
            Esto ayuda a evitar errores antes de que ocurran.
          </p>

          <p className="text-xl mb-2">Textos legibles</p>
          <p className="text-md">
            Usá etiquetas e indicaciones simples, con buen contraste y jerarquía visual, para que sean fáciles de leer
            en cualquier dispositivo.
          </p>

          <p className="text-xl mb-2">Errores descriptivos</p>
          <p className="text-md">
            Cuando algo falla, el mensaje debe explicar qué pasó y porqué. Evitá frases genéricas y detallá el problema
            concreto, como el tamaño del archivo.
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
          <Image
            src={`${basePath}/images/form_file/anatomia_input_file.svg`}
            alt="Anatomia del input de carga de archivo"
            width="800"
            height="280"
            className="img-fluid mt-2"
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
                  <td>
                    1. Etiqueta (<i>Label</i>)
                  </td>
                  <td>
                    Obligatorio, texto que informa el tipo de información que la persona usuaria puede seleccionar.
                  </td>
                </tr>
                <tr>
                  <td>2. Campo de archivo</td>
                  <td>Obligatorio, indica el nombre del archivo y estado.</td>
                </tr>
                <tr>
                  <td>3. Accionable</td>
                  <td>Obligatorio, despliega la acción para seleccionar un archivo para cargar.</td>
                </tr>
                <tr>
                  <td>4. Texto descriptivo</td>
                  <td>Obligatorio, se utiliza para proporcionar ayuda o contexto adicional a la persona usuaria.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Estados',
      content: (
        <>
          <p className="text-xl">
            Predeterminado <i> (default) </i>
          </p>
          <p className="text-md mb-4">Estado predeterminado de la carga de archivo en una interfaz. </p>
          <Image
            src={`${basePath}/images/form_file/estado_default_file.svg`}
            alt="Estado predeterminado del input de carga de archivo"
            width="800"
            height="280"
            className="img-fluid mb-4"
          />

          <p className="text-xl">Completado</p>
          <p className="text-md mb-4">
            Estado que adopta el componente cuando el archivo fue cargado exitosamente, mostrando una confirmación
            visual (como el cambio de color o texto) para indicar a la persona usuaria que la acción se realizó
            correctamente.
          </p>
          <Image
            src={`${basePath}/images/form_file/estado_completado_file.svg`}
            alt="Estado completado del input de carga de archivo"
            width="800"
            height="280"
            className="img-fluid mb-4"
          />

          <p className="text-xl">
            En foco <i> (focus) </i>
          </p>
          <p className="text-md mb-4">
            Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea
            claramente visible cuando recibe la atención del usuario, especialmente al ser navegado con el teclado. En
            Obelisco se utiliza un borde o anillo (<i>focus ring</i>) por fuera del componente en un color distintivo.
          </p>
          <Image
            src={`${basePath}/images/form_file/estado_focus_file.svg`}
            alt="Estado en foco del input de carga de archivo"
            width="800"
            height="280"
            className="img-fluid mb-4"
          />

          <p className="text-xl">Error</p>
          <p className="text-md mb-4">
            El estado de error debe ser claramente visible y accesible. En el componente de carga de archivos, puede
            incluir mensajes descriptivos, bordes en color rojo y/o íconos de advertencia con buen contraste. Esto
            permite que la persona usuaria identifique el problema (como un formato no permitido o un archivo demasiado
            pesado) y sepa cómo corregirlo, cumpliendo con las pautas de accesibilidad (WCAG).
          </p>
          <Image
            src={`${basePath}/images/form_file/estado_error_file.svg`}
            alt="Estado de error del input de carga de archivo"
            width="800"
            height="280"
            className="img-fluid mb-4"
          />

          <p className="text-xl">
            Deshabilitado <i> (disabled) </i>
          </p>
          <p className="text-md mb-4">
            Estado que indica que el botón no está disponible para la interacción, lo que significa que no puede
            activarse.
          </p>
          <Image
            src={`${basePath}/images/form_file/estado_deshabilitado_file.svg`}
            alt="Estado deshabilitado del input de carga de archivo"
            width="800"
            height="280"
            className="img-fluid mb-4"
          />
        </>
      ),
    },
    {
      title: 'Espaciados',
      content: (
        <>
          <p className="text-md">
            La separación vertical entre elementos es de 8px tanto para dispositivos desktop como mobile.
          </p>
          <p className="text-md">
            Podes consultar <a href="https://gcba.github.io/Obelisco-V2/patterns">ficha de patrones de formulario</a>{' '}
            para conocer la separación entre secciones.
          </p>
          <Image
            src={`${basePath}/images/form_file/espaciados_file.svg`}
            alt="Esquema de espaciados del input de carga de archivo"
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
      firstTitle: true,
      content: (
        <>
          <p className="text-md mb-4">
            El componente de carga de archivo está construido para ser accesible mediante navegación por teclado y
            reconocible por lectores de pantalla, comunicando su estado (activado o desactivado) de forma clara.
          </p>
          <span className="badge badge-default ms-1">TAB</span>
          <span className="badge badge-default">ENTER</span>
          <p className="text-md mb-4">
            Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Además, con
            el <i>enter</i>, puede accionar los elementos sobre los que esté posicionada como botones, enlaces, entre
            otros.
          </p>

          <Image
            src={`${basePath}/images/form_file/accesibilidad_file.svg`}
            alt="Navegacion alternativa del campo de carga de archivo"
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
            Una carga de archivo siempre debe ir acompañado de una etiqueta {`<label>`} clara y relacionada con la
            acción u opción que representa.
          </p>

          <p className="text-md mb-4">
            El atributo <i>&quot;for&quot;</i> asocia un {`<label>`} con un elemento de formulario como un {`<input>`},{' '}
            {`<select>`}, {`<textarea>`}, etc. mediante el <i>&quot;id&quot;</i> del elemento objetivo.
          </p>

          <p className="text-xl mb-2">Interactividad limitada</p>
          <p className="text-md mb-4">
            Cuando un componente de carga de archivo está deshabilitado temporalmente, es importante indicarlo
            correctamente mediante el atributo <i>&quot;disabled&quot;</i>. Además, debe evitarse que el foco del
            teclado llegue al componente, y debe comunicarse su estado a tecnologías de asistencia.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {INPUT_FILE_ACCESSIBILITY}
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
            relación de contraste de 3:1 con respecto a los colores adyacentes.{' '}
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
            href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.6 Headings and Labels (Level AA)
          </a>
          <p>
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
          <p>
            Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque
            del teclado es visible. Cuando utiliza un teclado para navegar por los componentes, los enlaces tienen un
            subrayado visible y un recuadro <i>outline</i> que indica que los enlaces son interactivos.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/on-input.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 3.2.2 On Input (Level A)
          </a>
          <p>
            Garantiza una experiencia predecible avisando desde el inicio sobre patrones poco comunes.Por ejemplo, una
            persona con dificultades cognitivas podría esperar revisar el archivo antes de enviarlo, y puede confundirse
            si el archivo se sube automáticamente al seleccionarlo.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 3.3.3 Error Suggestion (Level AA)
          </a>
          <p>
            Asegurarse de que todos los textos de ayuda y mensajes de error brinden asistencia útil para evitar o
            corregir errores.
            <br />
            No uses mensajes poco claros, como <i> &quot;Seleccioná un formato de archivo válido&quot;</i> . En su
            lugar, aclarar qué formatos son válidos.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Carga de archivo"
        description={['Permite subir o adjuntar archivos desde el dispositivo.']}
      />
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'specs',
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

export default FormFileDocs;
