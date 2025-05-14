'use client';

// import Link from 'next/link';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ComponentHeader from '@/components/Template/ComponentHeader';

import Tabs from '@/components/Tabs';

const basePath = '/Obelisco-V2';

const PatternsComponents: React.FC = () => {
  const SECTION_UX = [
    {
      title: 'Uso',
      firstTitle: true,
      content: (
        <>
          <div className="list-informative">
            <p className="text-xl">Cuándo usar</p>
            <div className="list-informative">
              <ul className="list-informative-bullet">
                <li>Para crear una cuenta o iniciar sesión.</li>
                <li>Para registrarse en un servicio, programa o beneficio.</li>
                <li>Para solicitar turnos o inscribirse en actividades. </li>
                <li>Para completar una transacción.</li>
                <li>Para configurar o modificar preferencias y datos de perfil.</li>
                <li>Para responder encuestas de feedback. </li>
              </ul>              
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Buenas prácticas',
      content: (
        <>
          <p className="text-md">
            Antes de construir un formulario, es fundamental comprender quiénes lo van a usar. Para eso, se recomienda
            realizar investigaciones UX, como entrevistas, encuestas, análisis de soluciones similares y testeos con
            personas usuarias.
          </p>

          <p className="text-md">
            Seguir los lineamientos de diseño y desarrollo ayuda a garantizar formularios usables y accesibles. Además,
            muchos recopilan datos sensibles, por lo que es clave respetar las normas de privacidad y seguridad.
          </p>

          <ul className="list-informative-bullet">
            <li>
              <strong>Sólo campos necesarios</strong>: formularios breves facilitan la carga y reducen errores.
            </li>
            <li>
              <strong>Protección de datos</strong>: los formularios deben cumplir con las normativas vigentes de
              privacidad y protección de datos personales.
            </li>
            <li>
              <strong>Sin redundancias</strong>: no pedir información que ya haya sido proporcionada. Si el dato está
              disponible en el sistema, puede mostrarse en modo solo lectura (read-only).
            </li>
            <li>
              <strong>Autocompletado</strong>:cuando sea posible, ciertos campos pueden completarse automáticamente. Por
              ejemplo, cargar el código postal tras ingresar el domicilio.
            </li>
            <li>
              <strong>Tipo de campo adecuado</strong>: elegir el formato correcto según el tipo de dato.
            </li>
            <li>
              <strong>Orden lógico</strong>: disponer los campos de forma coherente. Por ejemplo, país antes que ciudad.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Elementos que componen un formulario',
      content: (
        <>
          <ol className="mb-3">
            <li className="mb-3">Título del formulario y bajada descriptiva.</li>
            <li className="mb-3">
              Campos de entrada <i>(Inputs)</i>.
            </li>
            <li>Accionables.</li>
          </ol>

          <Image
            src={`${basePath}/images/patterns/patterns_elementos_de_un_form.svg`}
            alt="Anatomía de Elementos que componen un formulario"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Título del formulario y bajada descriptiva',
      content: <></>,
    },
    {
      subtitle: 'Título del formulario',
      content: (
        <>
          <p className="text-md mb-4">Identifica al formulario y brinda información sobre la acción a realizar.</p>

          <div className="max-items-2">
            {/* 1 */}
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_ej_1_no_usar.svg`}
                alt="Mala práctica en patrones de formularios ejemplo 1"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-danger">close</span>
                <p className="mb-0">Evitar el uso de tecnicismos o siglas internas que las personas desconocen. </p>
              </div>
            </div>
            {/* 2 */}
            <div className="col pe-3">
              <Image
                src={`${basePath}/images/patterns/patterns_ej_1_si_usar.svg`}
                alt="Buena práctica en patrones de formularios ejemplo 1"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="mb-0">Indicar la acción que están realizando las personas al completar el formulario.</p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      subtitle: 'Bajada descriptiva',
      content: (
        <>
          <p className="text-md mb-4">
            Aporta contexto y brinda instrucciones claras, ayudando a que las personas sepan qué información necesitan y
            cuánto tiempo estimado les llevará completar el formulario.
          </p>

          <div className="max-items-2">
            {/* 1 */}
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_ej_2_si_usar.svg`}
                alt="Buena práctica en patrones de formularios ejemplo 2"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-danger">close</span>
                <p className="mb-0">La bajada no orienta, ni anticipa qué se necesita o cuánto tiempo tomará.</p>
              </div>
            </div>
            {/* 2 */}
            <div className="col pe-3">
              <Image
                src={`${basePath}/images/patterns/patterns_ej_2_no_usar.svg`}
                alt="Mala práctica en patrones de formularios ejemplo 2"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="mb-0">
                  La bajada aporta contexto, requisitos y duración estimada, usando un lenguaje claro y cercano.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Tipos de Input',
      content: (
        <>
          <p className="text-md">
            Cada tipo de input tiene una funcionalidad específica. Es importante elegir el indicado según el dato que se
            requiera.
          </p>
        </>
      ),
    },
    {
      subtitleBold: 'Inputs de texto',
      content: (
        <>
          <p className="text-md">
            Para conocer más sobre usos, especificaciones de código y accesibilidad, consultar la ficha de{' '}
            <Link href="/components/form-text">Inputs de texto</Link>.
          </p>

          {/* 1 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Text</p>
              <p className="text-md">Permite ingresar una línea de texto de pocas palabras.</p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_input_text.svg`}
                alt="Input de texto - Texto"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>

          {/* 2 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Text Area</p>
              <p className="text-md">Permite ingresar múltiples líneas de texto.</p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_input_textarea.svg`}
                alt="Input de texto - Textarea"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>

          {/* 3 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Password</p>
              <p className="text-md">Permite ingresar contraseñas y datos sensibles.</p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_input_password.svg`}
                alt="Input de texto - Password"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>

          {/* 4 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Email</p>
              <p className="text-md">Permite ingresar un correo electrónico.</p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_input_email.svg`}
                alt="Input de texto - Email"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>

          {/* 5 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Number</p>
              <p className="text-md">Permite ingresar números.</p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_input_number.svg`}
                alt="Input de texto - Number"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>

          {/* 6 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Tel</p>
              <p className="text-md">Permite ingresar un número telefónico.</p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_input_tel.svg`}
                alt="Input de texto - Telefono"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>

          {/* 7 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Date</p>
              <p className="text-md">Permite ingresar una fecha.</p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_input_date.svg`}
                alt="Input de texto - Date"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>

          {/* 8 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Time</p>
              <p className="text-md">Permite ingresar un horario.</p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_input_time.svg`}
                alt="Input de texto - Time"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      subtitleBold: 'Input de búsqueda',
      content: (
        <>
          <p className="text-md">
            Para conocer más sobre usos, especificaciones de diseño y código, y accesibilidad, consultar la ficha de{' '}
            <Link href="/components/form-search"> Search</Link>.
          </p>

          {/* 1 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Search</p>
              <p className="text-md">Permite buscar información.</p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_input_search.svg`}
                alt="Input de búsqueda"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      subtitleBold: 'Inputs de selección',
      content: (
        <>
          <p className="text-md">
            Para conocer más sobre usos, especificaciones de diseño y código, y accesibilidad, consultar las fichas de{' '}
            <Link href="/components/form-text#section-dev-6">Select</Link>,{' '}
            <Link href="/components/form-selection#section-dev-2">Radio</Link> y{' '}
            <Link href="/components/form-selection#section-dev-5">Checkbox</Link>.
          </p>

          {/* 1 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Select</p>
              <p className="text-md">
                Permite seleccionar un valor único o múltiples valores dentro de una lista desplegable de opciones.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_input_select.svg`}
                alt="Input de selección - Select"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>

          {/* 2 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Radio</p>
              <p className="text-md">Permite seleccionar un único valor dentro de un número limitado de opciones.</p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_input_radio.svg`}
                alt="Input de selección - Radio"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>

          {/* 3 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Checkbox</p>
              <p className="text-md">
                Permite seleccionar cero o múltiples valores dentro de un número limitado de opciones.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_input_checkbox.svg`}
                alt="Input de selección - Checkbox"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      subtitleBold: 'Input de carga de archivo',
      content: (
        <>
          <p className="text-md">
            Para conocer más sobre usos, especificaciones de diseño y código, y accesibilidad, consultar la ficha de{' '}
            <Link href="/components/form-file">File</Link>.
          </p>

          {/* 1 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">File</p>
              <p className="text-md">Permite cargar uno o múltiples archivos.</p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_input_file.svg`}
                alt="Input de carga de archivo "
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Accionables',
      content: (
        <>
          <p className="text-md">
            Se colocan al final del formulario y sirven para enviar la información ingresada, guardar, avanzar o
            retroceder. Para más lineamientos consultar la ficha de <Link href="/components/button">Botones</Link>.
          </p>

          <div className="max-items-2">
            {/* 1 */}
            <div className="col pe-3">
              <Image
                src={`${basePath}/images/patterns/patterns_accionables_ej_1_no_usar.svg`}
                alt="Mala práctica en patrones accionables ejemplo 1"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-danger">close</span>
                <p className="mb-0">Evitar términos ambiguos como &quot;Enviar&quot; o &quot;Aceptar&quot;.</p>
              </div>
            </div>
            {/* 2 */}
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_accionables_ej_1_si_usar.svg`}
                alt="Buena práctica en patrones accionables ejemplo 1"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="mb-0">
                  Relacionar el texto de los accionables con el contenido del formulario para mayor claridad.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="col pe-3">
              <Image
                src={`${basePath}/images/patterns/patterns_accionables_ej_2_no_usar.svg`}
                alt="Mala práctica en patrones accionables ejemplo 2"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-danger">close</span>
                <p className="mb-0">
                  Evitar términos vagos como &quot;Volver&quot; y &quot;Continuar&quot; para avanzar o retroceder en un
                  formulario multi-página.{' '}
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/patterns/patterns_accionables_ej_2_si_usar.svg`}
                alt="Buena práctica en patrones accionables ejemplo 2"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="mb-0">
                  El texto de los botones debe indicar claramente que se avanza o retrocede en un mismo formulario.{' '}
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  const Diagramacion = [
    {
      title: 'Estructura',
      firstTitle: true,
      content: (
        <>
          <p className="text-md">
            La estructura principal del formulario se define a partir del contenedor <code>CLASE</code> para organizar todo lo que 
            forma parte del formulario: campos, títulos y botones. Este contenedor se adapta al ancho máximo disponible para cada 
            dispositivo:
          </p>
          <div className="list-informative">
            <ul className="list-informative-bullet">
              <li>En <i>desktop</i>, se ubica dentro de 8 columnas.</li>
              <li>En <i>tablet y mobile</i>, ocupa el 100% del ancho disponible.</li>
            </ul>
          </div>

          {/* SUMAR IMAGEN ACTUALIZADA */}
        </>
      ),
    },
    {
      title: 'Disposición',
      content: (
        <>
          <p className="text-md">
            <strong className="fw-semibold">Organizar los campos en una sola columna, uno debajo del otro</strong>. Este orden respeta el flujo natural de lectura y hace 
            que el contenido sea más fácil de entender, y también ayuda a reducir la carga mental y a procesar la información paso a paso.
          </p>
          <p className="fw-bold">Ancho del campo</p> {/* VER CON EL EQUIPO */}
            <p>El ancho de un campo debe ser suficiente para que la persona usuaria considere la extensión del contenido solicitado, 
              brindándole una idea precisa de la longitud de caracteres y el tipo de contenido que acepta el campo. 
            </p>
          <div className="mb-3">
            <Image
              src={`${basePath}/images/patterns/diagrams/disposicion.svg`}
              alt="Disposición de Elementos que componen un formulario"
              width="800"
              height="200"
              className="img-fluid"
            />
          </div>
        </>
      )
    },
    {
      subtitle: 'Agrupación de campos relacionados',
      content: (
        <>
          <p className="text-md">
            Los campos del formulario que comparten un propósito común, como &quot;Ciudad&quot; y &quot;Código postal&quot;, pueden
            <strong> agruparse de forma horizontal </strong>dentro de un contenedor <i className='text-lg'>fieldset</i> para mejorar la comprensión visual 
            y facilitar la navegación a las personas que utilizan tecnologías de asistencia.
          </p>
          {/* <Image
            src={`${basePath}/images/patterns/diagrams/`}
            alt=""
            width="800"
            height="200"
            className="img-fluid"
          /> */}
          <div className="pt-3">
            <p className="text-xl">Ejemplos de uso</p>
            <div style={{ marginTop: '32px' }}>
              <Image
                src={`${basePath}/images/patterns/diagrams/uso_incorrecto_1.svg`}
                alt="Mala práctica de uso ejemplo 1"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-2">
                <span className="material-symbols-rounded text-danger">close</span>
                <p className="mb-0">Evitar un conjunto de campos en dos columnas y otro conjunto en tres columnas.</p>
              </div>
            </div>
            <div style={{ marginTop: '32px' }}>
              <Image
                src={`${basePath}/images/patterns/diagrams/uso_incorrecto_2.svg`}
                alt="Mala práctica de uso ejemplo 2"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-2">
                <span className="material-symbols-rounded text-danger">close</span>
                <p className="mb-0">No exceder a más de tres campos en un conjunto horizontal. En la mayoría de los casos, 
                  es recomendable limitar a dos el número de columnas de un formulario o sección.
                </p>
              </div>
            </div>
            <div style={{ marginTop: '32px' }}>
              <Image
                src={`${basePath}/images/patterns/diagrams/uso_correcto.svg`}
                alt="Buena práctica de uso"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-2">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="mb-0">Utilizar un número consistente de columnas en todo el formulario.</p>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      subtitle: 'Alineación con botones',
      content: (
        <>
          <p>
            En formularios integrados en la página, donde no se requiere continuidad o navegación progresiva, 
            las acciones principales se alinearan a la izquierda del cuerpo de la página y al final del formulario. 
          </p>
          <p>
            Podés consultar la <a href="https://gcba.github.io/Obelisco-V2/components/button" target="_blank"> documentación de 
            Botones </a> para conocer las combinaciones y alineaciones recomendadas en dispositivos desktop, tablet y mobile.
          </p>
           <Image
              src={`${basePath}/images/patterns/diagrams/alineacion_botones.svg`}
              alt="Mala práctica de uso ejemplo 2"
              width="800"
              height="242"
              className="img-fluid"
            />
        </>
      )
    },
    {
      title: 'Espaciados',
      content: (
        <>
          <p>
            Para mantener una estructura clara, legible y alineada al sistema de grillas, recomendamos los siguientes espaciados 
            entre campos para dispositivos desktop:
          </p>
          <div className="list-informative pb-4">
            <ul className="list-informative-bullet">
              <li> 
                <strong>Espaciado vertical de 24px:</strong> Usado para separar campos dispuestos uno debajo del otro.
              </li>
              <li>
                <strong>Espaciado horizontal de 16px:</strong> Entre campos relacionados ubicados en una misma fila, por ejemplo, un campo para seleccionar el tipo de documento y un campo de texto para escribir el número de documento.
              </li>
            </ul>
          </div>
          <Image
            src={`${basePath}/images/patterns/diagrams/espaciados.svg`}
            alt="Espaciados ejemplo Desktop"
            width="800"
            height="242"
            className="img-fluid"
          />
          <p className="mt-4">
            Para dispositivos <i>mobile</i>, la disposición de los campos es uno debajo de otro, y el valor de la separación entre campos es de 12px.
          </p>
          <Image
            src={`${basePath}/images/patterns/diagrams/espaciados_mobile.svg`}
            alt="Espaciados de ejemplo mobile"
            width="800"
            height="242"
            className="img-fluid"
          />
        </>
      )
    },
    {
      title: 'Secciones por temas',
      content: (
        <>
          <p>
            Para reforzar la comprensión del formulario es recomendado agrupar los temas relacionados en secciones con encabezados.
          </p>
          <div className="list-informative">
            <ul className="list-informative-bullet">
              <li>
                <strong>Utilice el nivel de encabezado adecuado</strong>. Para los títulos de las secciones de un formulario utilizar 
                el estilo de texto Encabezado/ H5/ Semibold.
              </li>
              <li>
                El encabezado de la sección debe describir cómo se relacionan los campos de entrada entre si, y en relación al formulario en su totalidad.
                Por ejemplo, “Información personal” o “Información de pago”.
              </li>
              <li>
                La separación entre secciones para dispositivos desktop es de 32px. para ayudar a las personas usuarias a comprender 
                y organizar la información de manera más rápida y eficiente. En mobile, la separación entre secciones es de 24px.
              </li>
            </ul>
          </div>
          <Image
            src={`${basePath}/images/patterns/diagrams/seccion_por_temas.svg`}
            alt="Seccion por temas"
            width="800"
            height="242"
            className="img-fluid"
          />
        </>
      )
    },
    {
      title: 'Etiqueta de campo requerido y opcional',
      content: (
        <>
          <p>
            Es un indicador diseñado específicamente para los formularios que indica si un campo es opcional o requerido, 
            y es el método más explícito y transparente para garantizar que las personas usuarias no tengan que hacer suposiciones.
          </p>
          <Image
            src={`${basePath}/images/patterns/diagrams/etiquetas_campos.svg`}
            alt="Etiquetas de campo requerido y opcional"
            width="800"
            height="242"
            className="img-fluid"
          />
          <p className="text-xl pt-4 pb-2">Ejemplos de uso</p>

          <div className="max-items-2">
            <div className="col pe-3">
              <Image
                src={`${basePath}/images/patterns/diagrams/etiqueta_mal_uso.svg`}
                alt="Mala práctica en etiquetas"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-danger">close</span>
                <p className="mb-0">Evitar mezclar etiquetas obligatorias y opcionales; utilice solo una.</p>
              </div>
            </div>
            <div className="col pe-3">
              <Image
                src={`${basePath}/images/patterns/diagrams/etiqueta_buen_uso.svg`}
                alt="Buena práctica en etiquetas"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="mb-0">Indicá únicamente las excepciones: si la mayoría de los campos son obligatorios, marcá como 
                  &quot;opcional&quot; aquellos que no lo son; si la mayoría son opcionales, marcá como &quot;requerido&quot; 
                  solo los campos obligatorios.
                </p>
              </div>
            </div>
          </div>
        </>
      )
    }
  ];

  return (
    <>
      <ComponentHeader
        title="Construir un formulario"
        description={[
          'Los formularios permiten a las personas interactuar con el sistema, ingresando, editando o confirmando información. Un diseño claro y ordenado facilita la comprensión de cada paso y ayuda a completar las tareas sin fricción.'
        ]}
      />
      <Tabs
        sectionUx={SECTION_UX}
        customSections={[
          {
            title: 'Diagramación',
            id: 'accessibility',
            sectionContent: Diagramacion,
          },
        ]}
      />
    </>
  );
};

export default PatternsComponents;
