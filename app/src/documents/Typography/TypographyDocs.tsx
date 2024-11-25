import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { HEADLINE, HEADINGS, BODY, OTHER_STYLES, DEFAULT_LISTS, BLOCKQUOTE } from './code-views';

const basePath = '/Obelisco-V2';

const SECTIONS_UX = [
  {
    title: 'Principios',
    content: (
      <div className="list-informative pb-3">
        <ul className="list-informative-bullet">
          <li>
            <span className="fw-semibold">Legible</span>: utilizamos fuentes tipográficas con formas y signos fáciles de
            reconocer.{' '}
          </li>
          <li>
            <span className="fw-semibold">Navegable</span>: la tipografía cuenta con una estructura jerárquica que
            respeta la semántica HTML, permitiendo una comprensión intuitiva del contenido y su organización.
          </li>
          <li>
            <span className="fw-semibold">Consistente</span>: mantenemos un uso coherente de familias tipográficas para
            crear un lenguaje visual predecible que facilita la comunicación.
          </li>
          <li>
            <span className="fw-semibold">Minimalista</span>: utilizamos pesos y tamaños tipográficos de manera
            mesurada, optimizando el ritmo de lectura y centrando la atención en el contenido esencial.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Familias tipográficas',
    content: (
      <>
        <p>
          En Obelisco consideramos que lo más importante es el mensaje, por lo que elegimos familias tipográficas de
          alta legibilidad y versatilidad, y que generen cercanía con las personas usuarias.
        </p>
        <div className="max-items-2">
          <div className="col">
            <img src={`${basePath}/images/typography/typography_1.svg`} className="w-100 pb-4" alt="Familia Nunito" />
            <p className="text-xl mb-2">Nunito</p>
            <p>
              Es una tipografía <i>sans-serif</i> geométrica con formas redondeadas, diseñada para interfaces digitales
              con alta legibilidad.
            </p>
          </div>
          <div className="col">
            <img
              src={`${basePath}/images/typography/typography_1.svg`}
              className="w-100 pb-4"
              alt="Familia Open Sans"
            />
            <p className="text-xl mb-2">Open Sans</p>
            <p>
              Es una tipografía <i>sans-serif</i> humanista, optimizada para interfaces digitales con excelente
              legibilidad.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Roles',
    content: (
      <>
        <p className="mb-4">
          Para generar una jerarquía clara y minimizar las inconsistencias, asignamos a cada estilo un rol que describe
          su función.
        </p>
        <img src={`${basePath}/images/typography/typography_3.svg`} className="w-100" alt="Roles" />
      </>
    ),
  },
  {
    subtitle: (
      <>
        Encabezados <i>(Headings)</i>
      </>
    ),
    content: (
      <p>
        Los encabezados organizan y jerarquizan el contenido. Su tamaño y peso establecen un contraste que ayuda a las
        personas usuarias a entender la estructura de los contenidos de forma fácil y rápida.
      </p>
    ),
  },
  {
    subtitle: (
      <>
        Titulares <i>(Titles)</i>
      </>
    ),
    content: (
      <p>Son textos descriptivos y breves que se utilizan dentro de los componentes a modo de etiqueta o título.</p>
    ),
  },
  {
    subtitle: (
      <>
        Cuerpo <i>(Body)</i>
      </>
    ),
    content: (
      <>
        <p className="mb-4">
          Se usan para todos los cuerpos de lectura extensa y como principal variable texto, generalmente luego de
          encabezados o dentro de componentes.
        </p>
        <p className="mb-5">
          Si bien Obelisco ofrece un tamaño de cuerpo XS, recomendamos no utilizarlo, porque puede presentar problemas
          de legibilidad para las personas usuarias. Su uso está permitido sólo en casos excepcionales o en componentes
          específicos.{' '}
        </p>
      </>
    ),
  },
  {
    title: 'Accesibilidad',
    content: (
      <>
        <p>
          Nuestra escala tipográfica se fundamenta en los criterios de accesibilidad de WCAG 2.2, desarrollando un
          sistema robusto, flexible y adaptable. Cada decisión tipográfica busca eliminar barreras de comprensión y
          optimizar la navegabilidad de la persona usuaria a través de la Web.
        </p>
      </>
    ),
  },
  {
    subtitle: 'Tamaño de fuente y legibilidad',
    content: (
      <>
        <p className="mb-4">
          El tamaño mínimo y por defecto para los textos es de 16px.{' '}
          <span className="fw-semibold">(Cuerpo/M/Regular)</span>, lo que asegura un nivel de legibilidad alto para
          dispositivos desktop y dispositivos mobile. No recomendamos el uso de tamaños menores a esta medida para
          textos corridos porque dificulta la lectura del contenido.
        </p>
        <p className="mb-4">
          La tipografía debe ser escalable y no perder su propiedad responsiva cuando la persona usuaria utiliza
          herramientas como el <i>zoom</i> para ampliar el tamaño de texto (
          <a href="https://www.w3.org/TR/WCAG22/#resize-text" target="_blank">
            Success Criterion 1.4.4 Resize Text
          </a>
          ).
        </p>
        <p>
          Para facilitar la percepción del texto y la identificación de bloques de contenido, los cuerpos de texto deben
          tener el 150 % o el 200 % de espaciado para el interlineado (
          <a href="https://www.w3.org/TR/WCAG22/#visual-presentation" target="_blank">
            Success Criterion 1.4.8 Visual Presentation
          </a>
          ).
        </p>
      </>
    ),
  },
  {
    subtitle: 'Contraste de color',
    content: (
      <>
        <p className="mb-4">
          Para asegurar la legibilidad y percepción del contenido, los textos siempre deben utilizar el color de texto
          por defecto: <span className="fw-semibold">$body-primary</span> sobre fondos claros y{' '}
          <span className="fw-semibold">$text-white</span> sobre fondos oscuros.
        </p>
        <p className="mb-4">
          Es posible utilizar colores que pasen el mínimo ratio de contraste de 4.5:1, que cumple con el nivel de
          validación de AA, pero recomendamos siempre apuntar al ratio de contraste de 7:1, que cumple con el nivel de
          validación de AAA (
          <a href="https://www.w3.org/TR/WCAG22/#contrast-minimum" target="_blank">
            Success Criterion 1.4.3 Contrast (Minimum)
          </a>
          ).
        </p>
        <p className="mb-4">No recomendamos utilizar textos sobre imágenes, porque dificultan la legibilidad.</p>
        <img src={`${basePath}/images/typography/typography_4.svg`} className="w-100" alt="Contraste de color" />
      </>
    ),
  },
  {
    subtitle: 'Consistencia y jerarquía visual',
    content: (
      <>
        <p className="mb-4">
          Utilizamos los estilos tipográficos para encabezados, subtítulos y cuerpos de texto con una clara progresión
          visual. Esto ayuda a mejorar la estructura visual y la comprensión del contenido en todos los niveles,
          priorizando el
          <a href="https://www.w3.org/TR/WCAG22/#section-headings" target="_blank">
            Success Criterion 2.4.10 Section Headings
          </a>
          .
        </p>
        <p className="pb-4 mb-0">
          Para asegurar el uso correcto de la tipografía con una experiencia accesible, identificamos los encabezados
          utilizando la escala de <i>H&apos;s</i>, de H1 a H6. No deben saltarse niveles al trabajar con la escala
          progresiva de jerarquías; si tenemos un H1, el siguiente <i>H</i> debe ser H2 y no un H3, H4 o cualquier otra
          etiqueta que no siga el orden semántico. Solamente se puede utilizar un H1 por página.
        </p>
      </>
    ),
  },
  {
    title: 'Uso',
  },
  {
    subtitle: 'Pesos tipográficos',
    content: (
      <>
        <p className="mb-4">
          Utilizamos diferentes pesos para jerarquizar y enfatizar contenido, generando un orden de lectura basado en
          títulos, subtítulos y párrafos de texto; además, los pesos tipográficos se pueden utilizar dentro de párrafos
          de texto para destacar contenido de interés.
        </p>
        <p className="mb-4">
          Dentro de nuestra escala tipográfica utilizamos <i>regular</i>, <i>semibold</i> y <i>bold</i> como los únicos
          pesos con los que pueden trabajar dentro de Obelisco.
        </p>

        <div className="d-flex flex-column flex-md-row align-items-center mb-4" style={{ gap: '32px' }}>
          <img src={`${basePath}/images/typography/typography_5.svg`} alt="Texto en negrita" />
          <div>
            <p className="mb-0 fw-semibold">
              Negrita <i>(Bold)</i>
            </p>
            <p className="mb-0">
              Se usa para destacar términos clave. Evitá abusar de este estilo para no afectar la legibilidad ni la
              accesibilidad. No lo uses en bajadas, citas o enlaces.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center mb-4" style={{ gap: '32px' }}>
          <img src={`${basePath}/images/typography/typography_6.svg`} alt="Texto en Semi-negrita" />
          <div>
            <p className="mb-0 fw-semibold">
              Semi-negrita <i>(Semibold)</i>
            </p>
            <p className="mb-0">
              Este peso es ligeramente más grueso que el regular. Se usa para destacar elementos clave como títulos,
              subtítulos y llamadas a la acción.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center mb-4" style={{ gap: '32px' }}>
          <img src={`${basePath}/images/typography/typography_7.svg`} alt="Texto en Regular" />
          <div>
            <p className="mb-0 fw-semibold">
              Regular <i>(Regular)</i>
            </p>
            <p className="mb-0">Este es el peso tipográfico base que utilizamos para la mayoría del texto.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    subtitle: 'Formato',
    content: (
      <>
        <p className="mb-4">
          Utilizamos diferentes formatos de texto para añadir claridad o enfatizar un mensaje. Para más información
          sobre usos y convenciones, podés consultar nuestra{' '}
          <a href="https://gcba.github.io/estandares/contenido/comunicar-con-claridad/" target="_blank">
            guía de contenidos
          </a>
          .{' '}
        </p>

        <div className="d-flex flex-column flex-md-row align-items-center mb-4" style={{ gap: '32px' }}>
          <img src={`${basePath}/images/typography/typography_8.svg`} alt="Texto en Cursiva" />
          <div>
            <p className="mb-0 fw-semibold">
              Cursiva <i>(Italic)</i>
            </p>
            <p className="mb-0">
              Se usa para dar énfasis o señalar términos poco familiares, como extranjerismos o jerga. Se permite en
              subtítulos y cuerpos de texto.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center mb-4" style={{ gap: '32px' }}>
          <img src={`${basePath}/images/typography/typography_9.svg`} alt="Texto Subrayado" />
          <div>
            <p className="mb-0 fw-semibold">
              Subrayado <i>(Underline)</i>
            </p>
            <p className="mb-0">
              Está disponible para dar énfasis en un texto, pero se desaconseja su uso porque puede generar confusión
              con los enlaces.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    subtitle: 'Alineación',
    content: (
      <>
        <p className="mb-4">
          Siempre alineamos los textos a la izquierda. No utilizamos párrafos justificados o alineados a la derecha, ya
          que conllevan problemas de legibilidad y accesibilidad, especialmente para personas usuarias con dificultades
          cognitivas o dislexia. No recomendamos el uso de sangrías.
        </p>
      </>
    ),
  },
  {
    subtitle: 'Ancho máximo de párrafo por línea',
    content: (
      <>
        <p className="mb-4">
          Los párrafos con líneas de texto muy extensas o muy cortas afectan el ritmo de lectura. En promedio, un bloque
          de texto debe tener un ancho de entre 70 y 100 caracteres.
        </p>
        <p className="mb-4">
          Los títulos, subtítulos, y bajadas, deben ser lo más cortos y concisos posibles. Utilizamos técnicas de diseño
          responsivo para asegurar que se mantenga una extensión de línea óptima en diferentes dispositivos.
        </p>
        <p className="mb-4">
          El ancho máximo en desktop para un contenedor con texto corrido es de 8 columnas, mientras que en dispositivos{' '}
          <i>tablet</i> y <i>mobile</i> el bloque debe ocupar el 100 % del contenedor disponible.
        </p>
        <img
          src={`${basePath}/images/typography/typography_10.svg`}
          className="w-100"
          alt="Ancho máximo de párrafo por línea"
        />
      </>
    ),
  },
];
const SECTIONS_DEV = [
  {
    title: 'Títulos',
    content: (
      <>
        <CodeBox codeHTML={HEADINGS}>
          <div className="container">
            <h1>Headings h1 - Nunito, 40px, IL 48px</h1>
            <h2>Headings h2 - Nunito, 36px, IL 44px</h2>
            <h3>Headings h3 - Nunito, 32px, IL 44px</h3>
            <h4>Headings h4 - Nunito, 28px, IL 36px</h4>
            <h5>Headings h5 - Nunito, 24px, IL 32px</h5>
            <h6>Headings h6 - Nunito, 20px, IL 28px</h6>
            <p className="text-sm fst-italic mt-4 mb-0 text-body-secondary">* IL: interlineado</p>
          </div>
        </CodeBox>
      </>
    ),
  },
  {
    title: 'Titulares',
    content: (
      <>
        <CodeBox codeHTML={HEADLINE}>
          <div className="container">
            <p className="headline-lg">Titular L - Nunito, 20px, IL 24px</p>
            <p className="headline-md">Titular M - Nunito, 18px, IL 24px</p>
            <p className="headline-sm">Titular S - Nunito, 16px, IL 20px</p>
            <p className="text-sm fst-italic mt-4 mb-0 text-body-secondary">* IL: interlineado</p>
          </div>
        </CodeBox>
      </>
    ),
  },
  {
    title: 'Cuerpo',
    content: (
      <>
        <CodeBox codeHTML={BODY}>
          <div className="container">
            <p className="text-xl">Cuerpo XL - Open Sans, 20px, IL 28px</p>
            <p className="text-lg">Cuerpo L - Open Sans, 18px, IL 28px</p>
            <p>Cuerpo M - Open Sans, 16px, IL 24px</p>
            <p className="text-sm">Cuerpo S - Open Sans, 14px, IL 20px</p>
            <p className="text-xs">Cuerpo XS - Open Sans, 12px, IL 16px</p>
            <br />
            <p>Cuerpo M - Predeterminado - Open Sans, 16px, IL 24px</p>
            <p className="text-sm fst-italic mt-4 mb-0 text-body-secondary">* IL: interlineado</p>
          </div>
        </CodeBox>
      </>
    ),
  },
  {
    title: 'Otros estilos',
    content: (
      <>
        <CodeBox codeHTML={OTHER_STYLES}>
          <div className="container">
            <p className="fw-normal">Texto con font-weight normal (400)</p>
            <p className="fw-semibold">Texto con font-weight semibold (600)</p>
            <p className="fw-bold">Texto con font-weight bold (700)</p>
            <p className="fst-italic">Texto en itálica</p>
            <p className="underline-2">Texto subrayado con grosor de 2px</p>
          </div>
        </CodeBox>
      </>
    ),
  },
  {
    title: 'Listas predeterminadas',
    content: (
      <>
        <CodeBox codeHTML={DEFAULT_LISTS}>
          <div className="container">
            <ul>
              <li>Esto es el texto de una lista</li>
              <li>Esto es el texto de una lista</li>
              <li>Esto es el texto de una lista</li>
            </ul>
            <br />
            <ol>
              <li>Esto es el texto de una lista ordenada</li>
              <li>Esto es el texto de una lista ordenada</li>
              <li>Esto es el texto de una lista ordenada</li>
            </ol>
          </div>
        </CodeBox>
      </>
    ),
  },
  {
    title: 'Citas',
    content: (
      <>
        <CodeBox codeHTML={BLOCKQUOTE}>
          <div className="container">
            <blockquote>
              <p>
                Este es un apartado del texto que se quiere destacar por su importancia dentro del contenido de la
                página.
              </p>
              <p className="author">Nombre del autor de la cita</p>
            </blockquote>
          </div>
        </CodeBox>
      </>
    ),
  },
];
const SECTIONS_SCALE = [
  {
    title: '¿Por qué una escala?',
    content: (
      <>
        <p>
          Basamos nuestra escala tipográfica en la Tercera Menor (Minor Third), adaptándola estratégicamente para crear
          una jerarquía visual armoniosa. El objetivo fue generar una escala tipográfica que equilibre legibilidad,
          consistencia y accesibilidad, permitiendo transiciones sutiles entre tamaños de texto.
        </p>
      </>
    ),
  },
  {
    subtitle: (
      <>
        Encabezados <i>(Headings)</i>
      </>
    ),
    content: (
      <>
        <div className="responsive-scroll mt-4" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  <span className="th-title">Tamaño</span>
                </th>
                <th scope="col" className="tb-text">
                  <span className="th-title">Especificaciones</span>
                </th>
                <th scope="col" className="tb-text">
                  <span className="th-title">Usos</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="h1 fw-normal">H1</span>
                </td>
                <td>
                  <ul className="my-1 ps-0">
                    <li className="pb-3">Fuente: Nunito.</li>
                    <li className="pb-3">Tamaño: 40 px.</li>
                    <li>Interlineado: 48 px.</li>
                  </ul>
                </td>
                <td>
                  <span>
                    Se utiliza como encabezado de página y es el título con mayor jerarquía dentro de la escala
                    tipográfica.
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="h2 fw-normal">H2</span>
                </td>
                <td>
                  <ul className="my-1 ps-0">
                    <li className="pb-3">Fuente: Nunito.</li>
                    <li className="pb-3">Tamaño: 36 px.</li>
                    <li>Interlineado: 44 px.</li>
                  </ul>
                </td>
                <td>
                  <span>Se utiliza para títulos de secciones dentro del cuerpo de una página.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="h3 fw-normal">H3</span>
                </td>
                <td>
                  <ul className="my-1 ps-0">
                    <li className="pb-3">Fuente: Nunito.</li>
                    <li className="pb-3">Tamaño: 32 px.</li>
                    <li>Interlineado: 44 px.</li>
                  </ul>
                </td>
                <td>
                  <span>Se utiliza para títulos de subsecciones dentro del cuerpo de una página.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="h4 fw-normal">H4</span>
                </td>
                <td>
                  <ul className="my-1 ps-0">
                    <li className="pb-3">Fuente: Nunito.</li>
                    <li className="pb-3">Tamaño: 28 px.</li>
                    <li>Interlineado: 36 px.</li>
                  </ul>
                </td>
                <td>
                  <span>Normalmente, se utiliza como subtítulo dentro de secciones de contenido de una página.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="h5 fw-normal">H5</span>
                </td>
                <td>
                  <ul className="my-1 ps-0">
                    <li className="pb-3">Fuente: Nunito.</li>
                    <li className="pb-3">Tamaño: 24 px.</li>
                    <li>Interlineado: 32 px.</li>
                  </ul>
                </td>
                <td>
                  <span>Normalmente, se utiliza como subtítulo dentro de secciones de contenido de una página.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="h6 fw-normal">H6</span>
                </td>
                <td>
                  <ul className="my-1 ps-0">
                    <li className="pb-3">Fuente: Nunito.</li>
                    <li className="pb-3">Tamaño: 20 px.</li>
                    <li>Interlineado: 28 px.</li>
                  </ul>
                </td>
                <td>
                  <span>Es el encabezado de menor jerarquía de la escala tipográfica.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    subtitle: (
      <>
        Titulares <i>(Titles)</i>
      </>
    ),
    content: (
      <>
        <div className="responsive-scroll mt-4" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  <span className="th-title">Tamaño</span>
                </th>
                <th scope="col" className="tb-text">
                  <span className="th-title">Especificaciones</span>
                </th>
                <th scope="col" className="tb-text">
                  <span className="th-title">Usos</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="headline-lg fst-italic fw-normal">Large</span>
                </td>
                <td>
                  <ul className="my-1 ps-0">
                    <li className="pb-3">Fuente: Nunito.</li>
                    <li className="pb-3">Tamaño: 20 px.</li>
                    <li>Interlineado: 24 px.</li>
                  </ul>
                </td>
                <td>
                  <span>Se utiliza como etiqueta o título dentro del cuerpo de un componente.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="headline-md fst-italic fw-normal">Medium</span>
                </td>
                <td>
                  <ul className="my-1 ps-0">
                    <li className="pb-3">Fuente: Nunito.</li>
                    <li className="pb-3">Tamaño: 18 px.</li>
                    <li>Interlineado: 24 px.</li>
                  </ul>
                </td>
                <td>
                  <span>Se utiliza como etiqueta o título dentro del cuerpo de un componente.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="headline-sm fst-italic fw-normal">Small</span>
                </td>
                <td>
                  <ul className="my-1 ps-0">
                    <li className="pb-3">Fuente: Nunito.</li>
                    <li className="pb-3">Tamaño: 16 px.</li>
                    <li>Interlineado: 20 px.</li>
                  </ul>
                </td>
                <td>
                  <span>Se utiliza como etiqueta o título dentro del cuerpo de un componente.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    subtitle: (
      <>
        Cuerpo <i>(Body)</i>
      </>
    ),
    content: (
      <>
        <div className="responsive-scroll mt-4" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  <span className="th-title">Tamaño</span>
                </th>
                <th scope="col" className="tb-text">
                  <span className="th-title">Especificaciones</span>
                </th>
                <th scope="col" className="tb-text">
                  <span className="th-title">Usos</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="text-xl fst-italic fw-normal">Extra large</span>
                </td>
                <td>
                  <ul className="my-1 ps-0">
                    <li className="pb-3">Fuente: Open Sans.</li>
                    <li className="pb-3">Tamaño: 20 px.</li>
                    <li>Interlineado: 28 px.</li>
                  </ul>
                </td>
                <td>
                  <span>Se utiliza como subtítulo y/o descripción dentro del encabezado de una página.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-lg fst-italic fw-normal">Large</span>
                </td>
                <td>
                  <ul className="my-1 ps-0">
                    <li className="pb-3">Fuente: Open Sans.</li>
                    <li className="pb-3">Tamaño: 18 px.</li>
                    <li>Interlineado: 28 px.</li>
                  </ul>
                </td>
                <td>
                  <span>Se utiliza, mayormente, la variable itálica en el componente Citas.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-md fst-italic fw-normal">Medium</span>
                </td>
                <td>
                  <ul className="my-1 ps-0">
                    <li className="pb-3">Fuente: Open Sans.</li>
                    <li className="pb-3">Tamaño: 16 px.</li>
                    <li>Interlineado: 24 px.</li>
                  </ul>
                </td>
                <td>
                  <span>Medida de referencia de la escala tipográfica.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-sm fst-italic fw-normal">Small</span>
                </td>
                <td>
                  <ul className="my-1 ps-0">
                    <li className="pb-3">Fuente: Open Sans.</li>
                    <li className="pb-3">Tamaño: 14 px.</li>
                    <li>Interlineado: 20 px.</li>
                  </ul>
                </td>
                <td>
                  <span>
                    Para textos de menor jerarquía en algunos componentes como volantas, fechas y sobrelíneas.
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-xs fst-italic fw-normal">Extra Small</span>
                </td>
                <td>
                  <ul className="my-1 ps-0">
                    <li className="pb-3">Fuente: Open Sans.</li>
                    <li className="pb-3">Tamaño: 12 px.</li>
                    <li>Interlineado: 16 px.</li>
                  </ul>
                </td>
                <td>
                  <span>
                    Metatexto utilizado en componentes específicos, como el caso del organismo Pie de página (footer).
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
];

const TypographyDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Tipografía"
        description={[
          'La tipografía es uno de los elementos principales para asegurar una experiencia de usuario satisfactoria. Las personas usuarias interactúan con el contenido y realizan tareas en las plataformas, principalmente, a través de la tipografía. Al ser el primer punto de contacto, apuntamos a una experiencia accesible, usable, robusta e inclusiva.',
        ]}
      />
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTIONS_UX}
        customSection={{ title: 'Escala', id: 'scale', sectionContent: SECTIONS_SCALE }}
      />
    </>
  );
};

export default TypographyDocs;
