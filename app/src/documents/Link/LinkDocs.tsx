import { basePath } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { LINK_DEFAULT, LINK_EXTERNAL, LINK_DOWNLOAD, LINK_ACCESS, LINK_ACCESSIBILTY } from './code-views';

const LinkDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Predeterminado',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={LINK_DEFAULT}>
            <div className="container">
              <p>
                <LinkClient>enlace en párrafo</LinkClient>
              </p>
              <p>
                <small>
                  <LinkClient>enlaces en párrafo</LinkClient>
                </small>
              </p>
              <div className="bg-dark p-2">
                <p>
                  <LinkClient className="link-white">enlace en párrafo</LinkClient>
                </p>
                <p className="mb-0">
                  <small>
                    <LinkClient className="link-white">enlaces en párrafo</LinkClient>
                  </small>
                </p>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Externo',
      content: (
        <>
          <CodeBox codeHTML={LINK_EXTERNAL}>
            <div className="container">
              <div className="p-2">
                <p>
                  <LinkClient className="external">enlace externo</LinkClient>
                </p>
              </div>
              <div className="bg-dark p-2">
                <p className="mb-0">
                  <LinkClient className="external link-white">enlace externo</LinkClient>
                </p>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Descarga',
      content: (
        <>
          <CodeBox codeHTML={LINK_DOWNLOAD}>
            <div className="container">
              <div className="p-2">
                <p>
                  <LinkClient className="download" download="">
                    enlace de descarga
                  </LinkClient>
                </p>
              </div>

              <div className="bg-dark p-2">
                <p className="mb-0">
                  <LinkClient className="download link-white" download="">
                    enlace de descarga
                  </LinkClient>
                </p>
              </div>
              <LinkClient className="btn btn-secondary btn-sm download-link my-3" download="">
                Descargar
              </LinkClient>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Acceso',
      content: (
        <>
          <CodeBox codeHTML={LINK_ACCESS}>
            <div className="container">
              <div className="p-2">
                <p>
                  <LinkClient className="access">enlace de acceso</LinkClient>
                </p>
              </div>

              <div className="bg-dark p-2">
                <p className="mb-0">
                  <LinkClient className="access link-white">enlace de acceso</LinkClient>
                </p>
              </div>
            </div>
          </CodeBox>

          <br />
        </>
      ),
    },
  ];

  const SECTION_UX = [
    {
      title: 'Uso',
      firstTitle: true,
      content: (
        <>
          <div className="list-informative pb-3">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet">
              <li>Para navegar a un nuevo destino, ya sea interno o externo.</li>
              <li>Para saltar o desplazarse a un nuevo lugar en la página (anclas).</li>
              <li>Enlaces a correos electrónicos o números telefónicos (pueden iniciar una aplicación).</li>
            </ul>
          </div>
          <div className="list-informative" style={{ marginTop: '32px' }}>
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>
                Para realizar una acción, como enviar un formulario, guardar o editar, utilizar el componente{' '}
                <a href="https://gcba.github.io/Obelisco-V2/components/button">Botón</a>.
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
          <p className="text-md">
            Cada tipo de enlace sugiere una acción concreta y guía a la persona usuaria hacia adelante en la navegación
            del sitio web.
          </p>

          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Enlace predeterminado</p>
              <p className="text-md">
                Se utiliza para navegar dentro de una misma página como ancla, o para correos electrónicos y
                direcciones.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/enlace/enlaces_tipos_predeterminado.svg`}
                alt="Enlace tipo predeterminado"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Enlace de acceso</p>
              <p className="text-md">
                Se utiliza para ver más información de una sección, redirigiéndote a una nueva página del mismo sitio
                web. Por ejemplo: &quot;Ver más noticias&quot;.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/enlace/enlaces_tipos_acceso.svg`}
                alt="Enlace tipo acceso"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Enlace de descarga</p>
              <p className="text-md">
                Se utiliza para indicar la descarga de un recurso. El nombre del enlace debe ser descriptivo, para darle
                contexto a la persona usuaria de lo que está descargando, y evitar etiquetado genérico como
                &quot;Descargar archivo&quot;.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/enlace/enlaces_tipos_descarga.svg`}
                alt="Enlace tipo descarga"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">Enlace externo</p>
              <p className="text-md">
                Se utiliza para enlazar contenido a un sitio web externo, por fuera del dominio actual. Indica la
                redirección en una nueva pestaña, para no comprometer la navegación actual de la persona usuaria.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/enlace/enlaces_tipos_externo.svg`}
                alt="Botón de exito"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Tamaños',
      content: (
        <>
          <p className="mb-4">
            Hay dos tamaños de enlaces: grande y chico, tanto para dispositivos <i>desktop, tablet y mobile</i>.
          </p>
          <Image
            src={`${basePath}/images/enlace/enlace_tamaños.svg`}
            alt="Tamaños de botones"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },

    {
      title: 'Disposición',
      content: <></>,
    },
    {
      subtitle: (
        <>
          Enlaces independientes <i>(Standalone links)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Se utilizan solos o después de un bloque de contenido. Se puede usar cualquier tipo de enlace
            (predeterminado, de acceso, externo o de descarga), para brindar mayor contexto sobre la acción a la que
            hace referencia, o para redirigir a otro punto por dentro o fuera del sitio web.
          </p>
          <Image
            src={`${basePath}/images/enlace/enlace_disposicion.svg`}
            alt="Cómo usar los íconos"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          Enlaces de anclaje <i>(Anchor links)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md">
            Los enlaces predeterminados se pueden utilizar como anclas al contenido en el cuerpo de una página. Esta
            disposición solo es útil si el contenido de la página es extenso ya que facilita el scroll directo a las
            secciones de información.
          </p>
          <p className="text-md">
            Al trabajar con anclas, es recomendable que los enlaces aparezcan al comienzo del cuerpo del contenido.
            Deben estar jerarquizados y organizados dentro de una lista de enlaces, bajo un título claro, como
            &quot;Contenido en esta página&quot;, para que las personas usuarias identifiquen su función.
          </p>
          <Image
            src={`${basePath}/images/enlace/enlace_bloque_de_texto.svg`}
            alt="Enlaces en bloques de texto"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          Enlaces en bloques de texto <i>(Inline links)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Se utilizan para enlazar un concepto, frase o palabras dentro de un bloque de texto.
          </p>

          <Image
            src={`${basePath}/images/enlace/enlace_de_anclaje.svg`}
            alt="Enlaces en bloques de texto"
            width="800"
            height="200"
            className="img-fluid"
          />

          <p className="d-flex text-md fw-semibold mt-4">
            <span className="pe-1 material-symbols-rounded" aria-hidden="true">
              info
            </span>
            Uso del componente en Figma
          </p>

          <p className="text-md">
            Para los diseñadores en Figma, no existe un componente correspondiente al Enlace dentro de un bloque de
            texto, pero es posible replicar el estilo del componente siguiendo los siguientes pasos:
          </p>

          <ol>
            <li className="mb-2">
              Seleccioná el concepto, palabra o frase que quieras que sea un enlace en un bloque de texto.
            </li>
            <li className="mb-2">
              Aplicá el color{' '}
              <strong>
                {' '}
                <i>text-link</i>{' '}
              </strong>{' '}
              que se encuentra en las{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/colors#section-pallette-3">variables de color</a>.
            </li>
            <li className="mb-2">Cambiá el estilo del texto por la variante correspondiente a &quot;Enlace&quot;.</li>
            <li className="mb-2">
              Si necesitas reforzar la acción del enlace con un ícono, especificá en la entrega al equipo de desarrollo
              y maquetación si se trata de un enlace externo, de acceso o de descarga.
            </li>
          </ol>

          <p className="text-xl" style={{ marginTop: '32px' }}>
            Ejemplos de uso
          </p>

          <div>
            <div className="max-items-2">
              {/* 1 */}
              <div className="col">
                <Image
                  src={`${basePath}/images/enlace/enlace_inline_usar.svg`}
                  alt="Mala práctica en enlaces ejemplo 2"
                  width="800"
                  height="242"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">close</span>
                  <p className="mb-0">
                    El color no debe ser el único medio visual para transmitir información, indicar una acción o
                    responder a una interacción
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="col">
                <Image
                  src={`${basePath}/images/enlace/enlace_inline_no_usar.svg`}
                  alt="Buena práctica en enlaces ejemplo 2"
                  width="800"
                  height="242"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p className="mb-0">
                    Utilizar la variante de texto “Enlace” para diferenciar el componente del resto del texto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Contenido',
      content: (
        <>
          <p className="text-md">
            El texto de los enlaces debe estar cuidadosamente pensado, para guiar a las personas usuarias de manera
            clara y eficiente hacia el contenido o la acción que buscan. Se recomienda que los enlaces sean:
          </p>

          <ul className="list-informative-bullet">
            <li>
              <strong>Específicos</strong>: describen con precisión lo que se encontrará al clickearlos, evitando textos
              ambiguos y genéricos.
            </li>
            <li>
              <strong>Sustanciales</strong>: las personas usuarias escanean los contenido de texto, y focalizan su
              atención en los elementos que destacan por tener un estilo diferente. En la mayoría de casos, se leen solo
              los enlaces y no el texto circundante, por lo que el texto del enlace debe entenderse de forma
              independiente y aislada, aún cuando haya información alrededor que sirva de contexto.
            </li>
            <li>
              <strong>Sinceros</strong>: el texto de los enlaces informa claramente sobre lo que sucederá al hacer
              click, y cumple lo más rápido posible con la acción para no perder la confianza de la persona usuaria.
            </li>
            <li>
              <strong>Concisos</strong>: redactar el texto de los enlaces de forma clara y concisa, priorizando que las
              primeras palabras transmitan el propósito del enlace rápida y claramente.
            </li>
            <li>
              <strong>Distinguibles</strong>: un cuerpo de texto puede tener varios enlaces en una misma oración,
              siempre que sean relevantes y sumen al contexto. Sobrecargar un párrafo u oración con diferentes enlaces,
              sin un objetivo claro o con fines comerciales, aumenta la carga cognitiva y empeora la experiencia de la
              persona usuaria.
            </li>
          </ul>

          <p className="text-xl" style={{ marginTop: '32px' }}>
            Ejemplos de uso
          </p>

          <div>
            <div className="max-items-2">
              {/* 1 */}
              <div className="col pe-3">
                <Image
                  src={`${basePath}/images/enlace/enlace_no_usar_2.svg`}
                  alt="Mala práctica en enlaces ejemplo 2"
                  width="800"
                  height="242"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">close</span>
                  <p className="mb-0">
                    El texto del enlace es demasiado largo y aumenta la carga cognitiva de las personas usuarias,
                    dificultando el escaneo de los contenidos clave de la página.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="col ps-3">
                <Image
                  src={`${basePath}/images/enlace/enlace_usar_2.svg`}
                  alt="Buena práctica en enlaces ejemplo 2"
                  width="800"
                  height="242"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p className="mb-0">
                    Enlazar sobre una parte representativa del texto, que sea suficiente para entender la acción o
                    redirección a la que hace referencia.
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="col pe-3">
                <Image
                  src={`${basePath}/images/enlace/enlace_no_usar_3.svg`}
                  alt="Mala práctica en enlaces ejemplo 3"
                  width="800"
                  height="242"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">close</span>
                  <p className="mb-0">
                    Los enlaces agregan carga cognitiva y afectan la lectura. No utilizar demasiados enlaces dentro de
                    un párrafo.
                  </p>
                </div>
              </div>
              {/* 4 */}
              <div className="col ps-3">
                <Image
                  src={`${basePath}/images/enlace/enlace_usar_3.svg`}
                  alt="Buena práctica en enlaces ejemplo 3"
                  width="800"
                  height="242"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p className="mb-0">
                    Optimizar el uso de enlaces según lo que aportan al contexto. Antes de dividir y redirigir a la
                    persona usuaria desde diferentes puntos, enlazar la información afín.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl" style={{ marginTop: '32px' }}>
            Sobre los textos de enlaces genéricos
          </p>

          <p className="text-md">
            A la hora de redactar el texto de un enlace, se desaconsejan frases genéricas como &quot;Ver más&quot;,
            &quot;Aprender más&quot; o &quot;Más información&quot;, salvo que el texto que precede al enlace clarifique
            el contexto. Las personas usuarias que utilizan medios alternativos para recorrer el sitio, como lectores de
            pantalla, no pueden volver rápidamente al texto del párrafo anterior para comprender a qué se refería el
            enlace.
          </p>

          <p className="text-xl" style={{ marginTop: '32px' }}>
            Ejemplos de uso
          </p>

          <div>
            <div className="max-items-2">
              {/* 1 */}
              <div className="col pe-3">
                <Image
                  src={`${basePath}/images/enlace/enlace_no_usar_4.svg`}
                  alt="Mala práctica en enlaces ejemplo 4"
                  width="800"
                  height="242"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">close</span>
                  <p className="mb-0">
                    El texto del enlace no describe a dónde se dirigirá la persona usuaria, ni qué se espera encontrar
                    al ingresar, generando desconfianza.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="col ps-3">
                <Image
                  src={`${basePath}/images/enlace/enlace_usar_4.svg`}
                  alt="Buena práctica en enlaces ejemplo 4"
                  width="800"
                  height="242"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p className="mb-0">
                    Se recomienda tratarlos como llamados a la acción con frases verbales concisas para aumentar la
                    compresión de la persona usuaria.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
          <p className="text-md mb-4">El enlace puede tener hasta 3 elementos dependiendo del tipo.</p>
          <Image
            src={`${basePath}/images/enlace/enlace_anatomia.svg`}
            alt="Anatomia del botón"
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
                  <td>Texto del enlace</td>
                  <td>Obligatorio.</td>
                </tr>
                <tr>
                  <td>Ícono final</td>
                  <td>Opcional, dependiendo del tipo de enlace.</td>
                </tr>
                <tr>
                  <td>Subrayado</td>
                  <td>Obligatorio.</td>
                </tr>
                <tr>
                  <td>Ícono inicial</td>
                  <td>Opcional, dependiendo del tipo de enlace.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Estados',
      content: <></>,
    },
    {
      subtitle: (
        <>
          Predeterminado <i>(default)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">Este es el estado por defecto del enlace.</p>
          <Image
            src={`${basePath}/images/enlace/enlace_estado_predeterminado.svg`}
            alt="Estado Estado   del enlace"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          Sobre <i>(hover)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Este es el estado que adopta el enlace cuando un cursor pasa sobre él, cambiando su apariencia para indicar
            su interactividad a la persona usuaria. Para asegurar una experiencia accesible, los enlaces cambian el
            grosor de trazo, sin cambiar el color.
          </p>
          <Image
            src={`${basePath}/images/enlace/enlace_estado_sobre.svg`}
            alt="Estado Estado   del enlace"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          En foco <i>(focus)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea
            claramente visible cuando recibe la atención del usuario, especialmente al ser navegado con el teclado. En
            Obelisco se utiliza un borde o anillo (focus ring) por fuera del componente en un color distintivo.
          </p>
          <Image
            src={`${basePath}/images/enlace/enlace_estado_en_foco.svg`}
            alt="Estado en Estado   del enlace"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          Visitado <i>(visited)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Este es el estado que adopta el enlace cuando la persona usuaria ya hizo click en él anteriormente. Esto
            permite a la persona usuaria identificar qué enlaces ya navegó o visitó en interacciones previas.
          </p>
          <Image
            src={`${basePath}/images/enlace/enlace_estado_visitado.svg`}
            alt="Estado Estado   del enlace"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Espaciado',
      content: (
        <>
          <p className="text-md mb-4">
            Al utilizarse con ícono (enlace de acceso, externo y/o de descarga), los enlaces tienen un espacio entre el
            texto y el ícono, para evitar que el ícono colapse con el texto y mantenga relación al mismo tiempo.
          </p>
          <Image
            src={`${basePath}/images/enlace/enlace_espaciado.svg`}
            alt="Estado   del enlace"
            width="800"
            height="285"
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
          <p className="text-md" style={{ marginBottom: '32px' }}>
            El componente de enlace está construido para ser reconocido por herramientas de asistencia como la
            navegación por teclado o lectores por voz.
          </p>
          <span className="badge badge-default ms-1">TAB</span>
          <span className="badge badge-default">ENTER</span>
          <p className="text-md mb-4">
            Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Además, con
            el <i>enter</i>, puede accionar los elementos sobre los que esté posicionada como botones, enlaces, entre
            otros.
          </p>

          <Image
            src={`${basePath}/images/boton/boton_navegacion_alternativa.svg`}
            alt="Navegacion alternativa del botón"
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
            Para asegurar una navegación integral, los enlaces deben tener el atributo <i>aria-label</i> con una
            descripción explicativa del tipo de enlace y el contenido al que redirige, dándole mayor contexto a la
            persona usuaria sobre adónde va y la acción que desencadena.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {LINK_ACCESSIBILTY}
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
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
            target="_blank"
            rel="noopener noreferrer"
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
            href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.1 Keyboard (Level A)
          </a>
          <p>Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.</p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html#dfn-link-purpose"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.4 Link Purpose (In Context) (Level A)
          </a>
          <p>
            El propósito de cada enlace debe ser determinado solo con el texto del enlace o con el texto del enlace
            junto con su contexto determinado de forma programática, excepto en los casos en los que el propósito del
            enlace sea ambiguo para los usuarios en general.
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
            del teclado es visible.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 3.2.4 Consistent Identification (Level AA)
          </a>
          <p>
            Los componentes que tienen la misma funcionalidad dentro de un conjunto de páginas web se identifican de
            manera consistente. Los enlaces que dirigen a un mismo lugar deben tener la misma identificación para no
            generar confusiones. Un ejemplo de inconsistencia podría ser un enlace que diga &quot;Ingresá al Portal de
            Pagos&quot;, y otro que lleve al mismo sitio pero diga &quot;Ingresá a la Plataforma de Pagos de la
            Ciudad&quot;.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Enlaces"
        description={[
          'Los enlaces son hipervínculos que la persona usuaria utiliza para navegar contenidos en un sitio web. Pueden dirigir tanto a información y recursos dentro de una misma página o sitio web, como también a páginas externas.',
        ]}
      />
      <Tabs
        sectionUx={SECTION_UX}
        sectionDev={SECTIONS_DEV}
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

export default LinkDocs;
