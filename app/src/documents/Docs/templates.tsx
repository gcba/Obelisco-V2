'use client';

// import Link from 'next/link';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { PATTERNS_ACCESSIBILTY } from './code-views';

const basePath = '/Obelisco-V2';

const TemplatesComponents: React.FC = () => {
  const SECTION_UX = [
    {
      title: 'PLANTILLAS',
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
      title: 'Título del formulario',
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
      title: 'Bajada descriptiva',
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
      title: 'Tipos de campos',
      content: (
        <>
          <p className="text-md" style={{ marginBottom: '32px' }}>
            Cada tipo de input tiene una funcionalidad específica. Es importante elegir el indicado según el dato que se
            requiera.
          </p>

          <p className="text-xl mb-2" style={{ fontWeight: 600 }}>
            Campos de texto
          </p>
          {/* Inicio - Campos de texto */}
          <p className="text-md">
            Para conocer más sobre usos, especificaciones de código y accesibilidad, consultar la ficha de{' '}
            <Link href="/components/form-text">Inputs de texto</Link>.
          </p>

          {/* 1 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Texto</p>
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
              <p className="text-xl">Área de texto</p>
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
              <p className="text-xl">Contraseña</p>
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
              <p className="text-xl">Número</p>
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
              <p className="text-xl">Teléfono</p>
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
              <p className="text-xl">Fecha</p>
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
              <p className="text-xl">Hora</p>
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
          {/* Fin - Campos de texto */}

          {/* Inicio - Campo de búsqueda */}
          <p className="text-xl mb-2" style={{ marginTop: '32px', fontWeight: 600 }}>
            Campos de búsqueda
          </p>
          <p className="text-md">
            Para conocer más sobre usos, especificaciones de diseño y código, y accesibilidad, consultar la ficha de{' '}
            <Link href="/components/form-search">Campo de búsqueda</Link>.
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
          {/* Fin - Campo de búsqueda */}

          {/* Inicio - Campo de selección */}
          <p className="text-xl mb-2" style={{ marginTop: '32px', fontWeight: 600 }}>
            Campos de selección
          </p>
          <p className="text-md">
            Para conocer más sobre usos, especificaciones de diseño y código, y accesibilidad, consultar las fichas de{' '}
            {/* # Rutas */}
            <Link href="/components/form-text">Selector</Link>,{' '}
            <Link href="/components/form-radio">Botón de radio</Link> y{' '}
            <Link href="/components/form-check">Casilla de verificación</Link>.
          </p>

          {/* 1 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Selector</p>
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
              <p className="text-xl">Botón de radio</p>
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
              <p className="text-xl">Casilla de verificación</p>
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
          {/* Fin - Campo de selección */}

          {/* Inicio - Carga de archivo */}
          <p className="text-xl mb-2" style={{ marginTop: '32px', fontWeight: 600 }}>
            Carga de archivo
          </p>
          <p className="text-md">
            Para conocer más sobre usos, especificaciones de diseño y código, y accesibilidad, consultar la ficha de{' '}
            <Link href="/components/form-file">File</Link>.
          </p>

          {/* 1 */}
          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Carga de archivo</p>
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
          {/* Fin - Carga de archivo */}
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

  const DIAGRAMACION = [
    {
      title: 'Estructura',
      firstTitle: true,
      content: (
        <>
          <p className="text-md">
            La estructura principal del formulario se organiza a partir de un contenedor que agrupa todos los elementos
            del formulario: campos de entrada, títulos, subtítulos y botones. Este contenedor se adapta al ancho máximo
            disponible según el dispositivo:
          </p>
          <div className="list-informative">
            <ul className="list-informative-bullet">
              <li>
                En <i>desktop</i>, se ubica dentro de 8 columnas.
              </li>
              <li>
                En <i>tablet y mobile</i>, ocupa el 100% del ancho disponible.
              </li>
            </ul>
          </div>
          <div className="mt-4 mb-3">
            <Image
              src={`${basePath}/images/patterns/diagrams/estructura.svg`}
              alt="Estructura de un formulario"
              width="800"
              height="200"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      title: 'Disposición',
      content: (
        <>
          <p className="text-md">
            <strong className="fw-semibold">
              Organizá los campos en una sola columna, ubicándolos uno debajo del otro
            </strong>
            . Esta disposición respeta el flujo natural de lectura, facilita la comprensión del contenido y reduce la
            carga mental al permitir que la información se procese de forma secuencial.
          </p>
          <p className="mb-4">
            <strong className="fw-semibold">El ancho de cada campo </strong>debe ser proporcional a la longitud del
            contenido esperado, ayudando a la persona usuaria a anticipar la cantidad y el tipo de información que debe
            ingresar.
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
      ),
    },
    {
      subtitle: 'Agrupación de campos',
      content: (
        <>
          <p className="mb-4">
            Los campos del formulario que comparten un propósito común, como &quot;Ciudad&quot; y &quot;Código
            postal&quot;, pueden
            <strong> agruparse de forma horizontal </strong>dentro de un contenedor para mejorar la comprensión visual y
            facilitar la navegación a las personas que utilizan tecnologías de asistencia.
          </p>
          <Image
            src={`${basePath}/images/patterns/diagrams/agrupacion_campos.svg`}
            alt="Agrupacion de campos"
            width="800"
            height="200"
            className="img-fluid"
          />
          <div style={{ marginTop: '32px' }}>
            <p className="text-xl mb-4">Ejemplos de uso</p>
            <div className="mb-4">
              <Image
                src={`${basePath}/images/patterns/diagrams/uso_incorrecto_1.svg`}
                alt="Mala práctica de uso ejemplo 1"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-2">
                <span className="material-symbols-rounded text-danger">close</span>
                <p className="mb-0">
                  <strong className="fw-semibold">Evitar agrupar más de tres campos en una misma línea</strong>. Un
                  exceso de campos en disposición horizontal dificulta la lectura, genera desalineaciones y puede
                  afectar negativamente la accesibilidad.
                </p>
              </div>
            </div>
            <div className="mb-4">
              <Image
                src={`${basePath}/images/patterns/diagrams/uso_correcto.svg`}
                alt="Buena práctica de uso"
                width="800"
                height="242"
                className="img-fluid"
              />
              <div className="d-flex pt-2">
                <span className="material-symbols-rounded text-success">check</span>
                <p className="mb-0">
                  <strong className="fw-semibold">
                    Mantener un número consistente de columnas a lo largo del formulario
                  </strong>{' '}
                  favorece la lectura y la previsibilidad visual. En la mayoría de los casos, se recomienda no superar
                  los dos campos por fila para mantener una estructura clara y legible.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      subtitle: 'Alineación de botones',
      content: (
        <>
          <p>
            En formularios integrados en la página, donde no se requiere continuidad o navegación progresiva, las
            acciones principales se alinearan a la izquierda del cuerpo de la página y al final del formulario.
          </p>
          <p className="mb-4">
            Podés consultar la{' '}
            <a href="https://gcba.github.io/Obelisco-V2/components/button" target="_blank">
              {' '}
              documentación de Botones{' '}
            </a>{' '}
            para conocer las combinaciones y alineaciones recomendadas en dispositivos desktop, tablet y mobile.
          </p>
          <Image
            src={`${basePath}/images/patterns/diagrams/alineacion_botones.svg`}
            alt="Mala práctica de uso ejemplo 2"
            width="800"
            height="242"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Espaciados',
      content: (
        <>
          <p>
            Para mantener una estructura clara, legible y alineada al sistema de grillas, recomendamos los siguientes
            espaciados entre campos para dispositivos desktop:
          </p>
          <div className="list-informative pb-4">
            <ul className="list-informative-bullet">
              <li>
                <strong>Espaciado vertical de 24px:</strong> Usado para separar campos dispuestos uno debajo del otro.
              </li>
              <li>
                <strong>Espaciado horizontal de 16px:</strong> Entre campos relacionados ubicados en una misma fila, por
                ejemplo, un campo para seleccionar el tipo de documento y un campo de texto para escribir el número de
                documento.
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
          <p className="mt-4" style={{ marginBottom: '12px' }}>
            Para dispositivos <i>mobile</i>, la disposición de los campos es uno debajo de otro, y el valor de la
            separación entre campos es de 12px.
          </p>
          <Image
            src={`${basePath}/images/patterns/diagrams/espaciados_mobile.svg`}
            alt="Espaciados de ejemplo mobile"
            width="800"
            height="242"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Secciones por temas',
      content: (
        <>
          <p>
            Para reforzar la comprensión del formulario es recomendado agrupar los temas relacionados en secciones con
            encabezados.
          </p>
          <div className="list-informative">
            <ul className="list-informative-bullet">
              <li>
                <strong>Utilice el nivel de encabezado adecuado</strong>. Para los títulos de las secciones de un
                formulario utilizar el estilo de texto Encabezado/ H5/ Semibold.
              </li>
              <li>
                El encabezado de la sección debe describir cómo se relacionan los campos de entrada entre si, y en
                relación al formulario en su totalidad. Por ejemplo, &quot;Información personal&quot; o
                &quot;Información de pago&quot;.
              </li>
              <li>
                La separación entre secciones para dispositivos desktop es de 32px. para ayudar a las personas usuarias
                a comprender y organizar la información de manera más rápida y eficiente. En mobile, la separación entre
                secciones es de 24px.
              </li>
            </ul>
          </div>
          <Image
            src={`${basePath}/images/patterns/diagrams/seccion_por_temas.svg`}
            alt="Seccion por temas"
            width="800"
            height="242"
            className="img-fluid mt-4"
          />
        </>
      ),
    },
    {
      title: 'Indicador de campo requerido y opcional',
      content: (
        <>
          <p className="mb-4">
            Es un indicador diseñado específicamente para los formularios que indica si un campo es opcional o
            requerido, y es el método más explícito y transparente para garantizar que las personas usuarias no tengan
            que hacer suposiciones.
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
                <p className="mb-0">
                  Indicá únicamente las excepciones: si la mayoría de los campos son obligatorios, marcá como
                  &quot;opcional&quot; aquellos que no lo son; si la mayoría son opcionales, marcá como
                  &quot;requerido&quot; solo los campos obligatorios.
                </p>
              </div>
            </div>
          </div>
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
          <p className="text-md" style={{ marginBottom: '32px' }}>
            El componente de enlace está construido para ser reconocido por herramientas de asistencia como la
            navegación por teclado o lectores por voz.
          </p>

          <span className="badge badge-default ms-1">TAB</span>
          <span className="badge badge-default">ENTER</span>
          <p className="text-md mb-4 mt-2">
            Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Además, con
            el <i>enter</i>, puede accionar los elementos sobre los que esté posicionada como botones, enlaces, entre
            otros.
          </p>

          <Image
            src={`${basePath}/images/patterns/accessibility/accessibility_navegacion_alternativa.svg`}
            alt="Accesibilidad en navegación alternativa por TAB"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Consideraciones globales de accesibilidad',
      content: (
        <>
          <p className="text-md">Dependiendo del tipo de campo puede haber lineamientos adicionales.</p>
          <div className="list-informative">
            <ul className="list-informative-bullet">
              <li>
                Los campos de formulario siempre deben contar con un Label identificador visible y legible por los
                lectores de pantalla.
              </li>
              <li>
                Si la sesión expira, la persona usuaria debe poder reautenticarse y continuar desde donde estaba, sin
                pérdida de datos. Se recomienda mostrar el tiempo restante de la sesión y advertir con algunos minutos
                de anticipación antes de que expire.
              </li>
              <li>
                Las personas deben poder revisar sus datos antes de enviar el formulario, especialmente en casos de
                formularios multipágina con información legal y/o transacciones irreversibles.
              </li>
              <li>
                Evitar que los campos de formulario cambien automáticamente el contexto (como navegar a otra página o
                enviar datos) sin que la persona usuaria lo confirme.{' '}
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Instrucciones del formulario',
      content: (
        <>
          <p>
            Antes de comenzar un formulario, agregá <strong>instrucciones claras</strong> que ayuden a las personas a
            completarlo con éxito. Podés indicar qué campos son obligatorios, qué tipo de información se espera y
            cualquier otra indicación útil. Estas instrucciones deben ir <strong>antes del formulario</strong> para que
            cualquier persona, incluso quien usa lector de pantalla, pueda acceder a ellas desde el principio.
          </p>
        </>
      ),
    },
    {
      title: 'Etiquetado descriptivo',
      content: (
        <>
          <p className="mb-4">
            Para que el formulario funcione correctamente, todos los campos deben estar dentro de la etiqueta{' '}
            <code>{'<form>'}</code>. Esto permite que el sistema pueda enviar la información ingresada y ayudar a que
            las personas que usan lectores de pantalla entiendan mejor la estructura del formulario y puedan recorrerlo
            sin problemas.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {PATTERNS_ACCESSIBILTY}
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
            Success Criterion 2.2.5 Re-authenticating (Level AAA)
          </a>
          <p className="mt-2">
            Cuando una sesión autenticada expira, la persona usuaria puede continuar la actividad sin pérdida de datos
            después de re-autenticarse.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.6 Headings and Labels (Level AA)
          </a>
          <p className="mt-2">Los encabezados y las etiquetas describen el tema o el propósito.</p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 3.2.2 On Input (Level A)
          </a>
          <p className="mt-2">
            El cambio de la configuración de cualquier componente de la interfaz no provoca automáticamente un cambio de
            contexto a menos que la persona usuaria haya sido informada del comportamiento antes de utilizar el
            componente.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion Labels or Instructions (Level A)
          </a>
          <p className="mt-2">
            Se proporcionan etiquetas o instrucciones cuando el contenido requiere la entrada de la persona usuaria.
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

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            G98: Proporcionar la posibilidad de revisar y corregir las respuestas antes de enviarlas
          </a>
          <p className="mt-2">
            Antes de que se produzca el paso final que compromete la transacción, se proporcionan instrucciones para
            solicitar que la persona usuaria revise los datos ingresados y confirme. Una vez que la persona confirma, la
            transacción se completa.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Construir una plantilla"
        description={[
          'Los formularios permiten a las personas interactuar con el sistema, ingresando, editando o confirmando información. Un diseño claro y ordenado facilita la comprensión de cada paso y ayuda a completar las tareas sin fricción.',
        ]}
      />
      <Tabs
        sectionUx={SECTION_UX}
        customSections={[
          {
            title: 'Diagramación',
            id: 'layout',
            sectionContent: DIAGRAMACION,
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

export default TemplatesComponents;
