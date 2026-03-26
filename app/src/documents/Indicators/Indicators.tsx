import Image from 'next/image';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';
const basePath = '/Obelisco-V2';

import { INDICATOR, INDICATOR_BG, INDICATOR_NO_BORDER, INDICATOR_SIZE, INDICATOR_MULTIPLES } from './code-views';

const SECTIONS_DEV = [
  {
    title: 'Sin fondo',
    firstTitle: true,
    content: (
      <CodeBox codeHTML={INDICATOR}>
        <div className="container">
          <div className="indicator">
            <h1>36.578</h1>
            <p className="headline-lg">Días ahorrados</p>
            <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Con fondos',
    content: (
      <CodeBox codeHTML={INDICATOR_BG}>
        <div className="container">
          <div className="indicator bg-light">
            <h1>36.578</h1>
            <p className="headline-lg">Días ahorrados</p>
            <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Sin borde',
    content: (
      <CodeBox codeHTML={INDICATOR_NO_BORDER}>
        <div className="container">
          <div className="indicator bg-light unbordered">
            <h1>36.578</h1>
            <p className="headline-lg">Días ahorrados</p>
            <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
          </div>
          <br />
          <div className="indicator unbordered">
            <h1>36.578</h1>
            <p className="headline-lg">Días ahorrados</p>
            <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Tamaños',
    content: (
      <CodeBox codeHTML={INDICATOR_SIZE}>
        <div className="container">
          <div className="indicator indicator-start bigger-title">
            <h1>36.578</h1>
            <p className="headline-lg">Días ahorrados</p>
            <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
          </div>
          <br />
          <div className="indicator indicator-start bigger-title">
            <h1>36.578</h1>
            <p className="headline-lg">Días ahorrados</p>
            <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Multiples',
    content: (
      <CodeBox codeHTML={INDICATOR_MULTIPLES}>
        <div className="container">
          <div className="d-flex gap-3 justify-content-center">
            <div className="indicator">
              <h1>36.578</h1>
              <p className="headline-lg">Días ahorrados</p>
              <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
            </div>

            <div className="indicator">
              <h1>36.578</h1>
              <p className="headline-lg">Días ahorrados</p>
              <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
            </div>

            <div className="indicator">
              <h1>36.578</h1>
              <p className="headline-lg">Días ahorrados</p>
              <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
            </div>
          </div>

          <div className="d-flex gap-3 justify-content-center pt-3">
            <div className="indicator bg-light">
              <h1>36.578</h1>
              <p className="headline-lg">Días ahorrados</p>
              <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
            </div>

            <div className="indicator bg-light">
              <h1>36.578</h1>
              <p className="headline-lg">Días ahorrados</p>
              <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
            </div>
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
            <li>Para destacar métricas clave (KPIs) dentro de una página o sección.</li>
            <li>Cuando se necesita mostrar información resumida de alto nivel.</li>
            <li>En dashboards o páginas institucionales donde el foco está en la lectura rápida.</li>
            <li>Para comunicar impacto, resultados o volumen de servicios.</li>
          </ul>
        </div>
        <div className="list-informative" style={{ marginTop: '32px' }}>
          <p className="text-xl">Cuándo no usar</p>
          <ul className="list-informative-bullet">
            <li>Cuando el contenido requiere exploración o interacción (usar tablas, gráficos o filtros).</li>
            <li>Para datos complejos que necesitan contexto adicional para ser comprendidos.</li>
            <li>Cuando hay demasiados indicadores (evitar sobrecarga cognitiva).</li>
            <li>Si el dato no es relevante o accionable para la persona usuaria.</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'Tipos',
    content: (
      <>
        <p className="text-xl fw-semibold mb-2">Indicador simple</p>
        <p className="text-md mb-4">Muestra un único valor acompañado de una etiqueta descriptiva.</p>
        <Image
          src={`${basePath}/images/indicator/indicador_2.svg`}
          alt="Componente indicador simple"
          width="800"
          height="200"
          className="img-fluid"
        />
        <p className="text-xl fw-semibold mt-4 mb-2">Indicador con descripción</p>
        <p className="text-md mb-4">Incluye una breve explicación que aporta contexto al dato.</p>
        <Image
          src={`${basePath}/images/indicator/indicador_2.svg`}
          alt="Indicador con descripción"
          width="800"
          height="200"
          className="img-fluid"
        />
        <p className="text-xl fw-semibold mt-4 mb-2">Grupo de indicadores</p>
        <p className="text-md mb-4">Incluye una breve explicación que aporta contexto al dato.</p>
        <Image
          src={`${basePath}/images/indicator/indicador_3.svg`}
          alt="Grupo de indicadores"
          width="800"
          height="200"
          className="img-fluid"
        />{' '}
      </>
    ),
  },
  {
    title: 'Contexto de uso',
    content: (
      <>
        <p className="text-xl fw-semibold mb-2">Contenido</p>
        <p className="text-md mb-4">
          Usar números claros y legibles, incorporando separadores de miles. Los textos deben ser breves y directos,
          evitando tecnicismos innecesarios.
        </p>

        <p className="text-xl fw-semibold mb-2">Redacción</p>
        <p className="text-md mb-4">
          El título debe responder qué representa el número. La descripción debe aportar contexto sin repetir el título,
          manteniendo consistencia gramatical entre indicadores.
        </p>

        <p className="text-xl fw-semibold mb-2">Disposición</p>
        <p className="text-md mb-4">
          Utilizar grillas responsivas. En mobile, los indicadores se apilan verticalmente. Mantener espacios
          consistentes entre componentes para asegurar una buena lectura.
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
          src={`${basePath}/images/indicator/indicador_4.svg`}
          alt="Anatomia del indicador"
          width="800"
          height="280"
          className="img-fluid mb-5"
        />

        <div className="responsive-scroll" tabIndex={0}>
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
                <td>1. Valor numérico</td>
                <td>Dato principal que se quiere destacar.</td>
              </tr>
              <tr>
                <td>2. Título</td>
                <td>Describe el significado del valor.</td>
              </tr>
              <tr>
                <td>3. Título</td>
                <td>Aporta contexto adicional.</td>
              </tr>
              <tr>
                <td>
                  4. Contenedor <i>(Opcional)</i>
                </td>
                <td>Tarjeta visual que agrupa el contenido.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: 'Estilos',
    content: (
      <>
        <p className="text-xl fw-semibold mb-2">Sin contenedor</p>
        <p className="text-md mb-3">
          Se utiliza directamente sobre el fondo de la página. Es ideal para secciones destacadas o encabezados.
        </p>

        <Image
          src={`${basePath}/images/indicator/indicador_5.svg`}
          alt="Migas de Pan variante desktop"
          width="800"
          height="464"
          className="img-fluid"
        />

        <p className="text-xl fw-semibold mb-2">Con contenedor</p>
        <p className="text-md mb-3">
          Cada indicador se presenta dentro de una tarjeta, mejorando la separación visual y la legibilidad.{' '}
        </p>

        <Image
          src={`${basePath}/images/indicator/indicador_6.svg`}
          alt="Migas de Pan variante desktop"
          width="800"
          height="464"
          className="img-fluid"
        />

        <p className="text-xl fw-semibold mb-2">Jerarquía visual</p>
        <p className="text-md mb-3">
          El número es el elemento principal, con mayor tamaño y peso. El título describe el dato y la descripción, si
          está presente, aporta contexto.{' '}
        </p>

        <Image
          src={`${basePath}/images/indicator/indicador_7.svg`}
          alt="Migas de Pan variante desktop"
          width="800"
          height="464"
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
        <p className="text-md">
          El indicador de datos no es un componente interactivo, por lo tanto no requiere navegación mediante teclado ni
          presenta estados de interacción.
        </p>
        <p className="text-md">
          La información se presenta de forma estática y debe ser accesible directamente a través de su contenido
          textual.
        </p>
      </>
    ),
  },
  {
    title: 'Etiquetado descriptivo',
    content: (
      <>
        <p className="text-md">
          Para cumplir con buenas prácticas de accesibilidad (WCAG + WAI-ARIA), se debe asegurar que el contenido sea
          comprensible sin depender únicamente de la presentación visual.
        </p>
        <p className="text-md">
          Ejemplo del indicador: <br />
          Visual: 36.578 <br />
          Días ahorrados Lector de pantalla: &quot;36.578 días ahorrados&quot;
        </p>
        <p className="text-md"> No se requieren atributos ARIA específicos, ya que el componente no es interactivo.</p>
        {/* <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {BREADCRUMB_ACCESSIBILTY}
        </SyntaxHighlighter> */}
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
          Success Criterion 1.3.1 Info and Relationships (Level A){' '}
        </a>
        <p>
          La información, la estructura y las relaciones transmitidas a través de la presentación pueden determinarse
          mediante programación o están disponibles en el texto.
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
          La presentación visual de texto y de imágenes de texto tiene una relación de contraste de por lo menos 4.5:1,
          excepto textos grandes e imágenes de texto grande que tienen un contraste de por lo menos 3:1, textos o
          imágenes que son parte de un componente inactivo de interfaz de usuario o son pura decoración, o logotipos.
        </p>

        <a
          className="external"
          href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 1.4.4 Resize Text (Level AA){' '}
        </a>
        <p>
          Excepto por los subtítulos e imágenes de texto, el texto puede redimensionarse hasta un 200 % sin tecnología
          de asistencia, sin pérdida de contenido ni funcionalidad.
        </p>
      </>
    ),
  },
];

const IndicatorsDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader title="Indicador" description={['Componente Indicador de datos']} />
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'section-specs',
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

export default IndicatorsDocs;
