import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
    title: 'Accesibilidad en los productos digitales del GCBA',
    firstTitle: true,
    content: (
      <>
        <p className="text-xl">Ley de accesibilidad de la información</p>
        <p className="text-md">
          De acuerdo a la ley 26.653 de Accesibilidad de la Información, el Estado debe{' '}
          <strong>
            respetar en los diseños de sus productos digitales las normas y requisitos sobre accesibilidad para
            facilitar el acceso a los contenidos
          </strong>
          , con el objeto de garantizarles igualdad de oportunidades.
        </p>
        <a
          href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/175000-179999/175694/norma.htm"
          className="external"
        >
          Accesibilidad de la información | Ley Nº 26.653
        </a>

        <p className="text-xl mb-2" style={{ marginTop: '32px' }}>
          Resolución N°94/SECITD/23
        </p>
        <p className="text-md">
          El objetivo de la resolución N°94/SECITD/23 es{' '}
          <strong>facilitar el acceso a los contenidos a todas las personas</strong> en igualdad de oportunidades.
        </p>
        <a href="https://gcba.github.io/assets/resolucion/ck_PE-RES-MJGGC-SECITD-94-23-6626.pdf" className="external">
          Conocer la resolución
        </a>
      </>
    ),
  },
  {
    title: 'Pautas de accesibilidad para contenido web',
    content: (
      <>
        <p className="text-md">
          Es un conjunto de <strong>requisitos reconocidos internacionalmente</strong> para hacer que los sitios web
          sean <strong>accesibles para todas las personas</strong>. Fueron elaborados por la WAI (Web Accesibility
          Initiative) de la W3C, organización internacional que tiene como objetivo crear estándares para la World Wide
          Web, y establece cuatro principios para que el contenido web sea más utilizable para las personas usuarias en
          general:
        </p>
        <ul className="list-informative-bullet mb-4">
          <li>
            <strong>Perceptible</strong>: las personas usuarias deben poder percibir el contenido del sitio, sin
            importar el medio que estén utilizando.
          </li>
          <li>
            <strong>Operable</strong>: las personas usuarias deben poder navegar el sitio, sin restricciones, de manera
            confiable y ordenada, a través de medios convencionales o alternativos.
          </li>
          <li>
            <strong>Comprensible</strong>: las personas usuarias deben entender todas las funciones de la interfaz y
            poder comprender la información.
          </li>
          <li>
            <strong>Robusto</strong>: el contenido de un sitio web debe adaptarse a las actualizaciones de navegadores y
            tecnologías de asistencia para que pueda ser interpretado de manera confiable.
          </li>
        </ul>
        <a href="https://www.w3.org/TR/WCAG22/#perceivable" className="external">
          Pautas de accesibilidad WCAG 2.2
        </a>
      </>
    ),
  },
  {
    title: 'La colaboración es la clave',
    content: (
      <>
        <p className="text-md">
          Si bien en Obelisco se concibe la accesibilidad como una parte integral del proceso para cada uno de los
          elementos que lo conforman, depender únicamente del sistema de diseño no asegura contar con experiencias 100 %
          accesibles y usables. Es importante que cada uno de quienes consumen Obelisco evalúen constantemente el
          producto, basándose en los criterios y guía que ofrece el sistema de diseño, y ahondando en una investigación
          personalizada según las necesidades particulares.
        </p>
      </>
    ),
  },
  {
    title: '¿Cómo se trabaja la accesibilidad en Obelisco?',
    content: (
      <>
        <p className="text-md">
          Las <i>foundations</i> o guías de estilo en Obelisco marcan la pauta al construir componentes, con criterios y
          consideraciones clave para un óptimo funcionamiento web. Alcanzar los más altos estándares de accesibilidad
          (AA-AAA) depende de contar con bases robustas, flexibles y escalables. La concepción de cualquier elemento
          dentro del sistema de diseño sigue un proceso de análisis y auditoría que asegura versiones integrales para
          cada uno; a grandes rasgos, Obelisco desarrolla 5 etapas:
        </p>

        <ul className="list-steps list-steps-sm list-steps-numbers ms-1">
          <li className="list-steps-item">
            <h3 className="list-steps-item-title">Definir el alcance</h3>
            <p>
              Refinamiento del requerimiento, definición de criterios de aceptación, nivel de conformidad propuesto y
              consideraciones particulares del elemento, y herramientas a utilizar.
            </p>
          </li>
          <li className="list-steps-item">
            <h3 className="list-steps-item-title">Explorar el elemento</h3>
            <p>Análisis del contexto de uso, propósito y funcionalidad.</p>
          </li>
          <li className="list-steps-item">
            <h3 className="list-steps-item-title">Seleccionar una muestra representativa</h3>
            <p>Identificación de casos reales y puesta en común.</p>
          </li>
          <li className="list-steps-item">
            <h3 className="list-steps-item-title">Auditar la muestra</h3>
            <p>Realización de pruebas internas, pruebas colaborativas y pruebas con personas usuarias.</p>
          </li>
          <li className="list-steps-item">
            <h3 className="list-steps-item-title">Registrar los resultados de la evaluación</h3>
            <p>Documentación y toma de decisiones.</p>
          </li>
        </ul>

        <p className="text-xl" style={{ marginTop: '32px' }}>
          Documentación específica sobre accesibilidad
        </p>
        <p className="text-md">
          En Obelisco, cada uno de los elementos que conforman la librería, las guías de estilo y los componentes,
          cuenta con una pestaña de accesibilidad donde se detallan las consideraciones específicas según su contexto de
          uso.
        </p>

        <a href="https://gcba.github.io/Obelisco-V2/components" className="access">
          Librería de Obelisco
        </a>
      </>
    ),
  },
  {
    title: 'Recursos recomendados para una evaluación integral',
    content: (
      <>
        <p className="text-md">
          Para evaluar la correcta implementación del sistema de diseño y asegurar una experiencia digital inclusiva, es
          recomendable utilizar, principalmente, los mismos recursos que se utilizan dentro de los procesos de Obelisco.
        </p>
        <p className="text-xl" style={{ marginTop: '32px' }}>
          Herramientas de evaluación <i>online</i>
        </p>

        <div className="list-link">
          <a href="https://www.figma.com/exit?url=https%3A%2F%2Fwave.webaim.org" className="external">
            WAVE Web Accessibility Evaluation Tools
          </a>
          <a href="https://webaim.org/resources/contrastchecker/" className="external">
            WAVE Contrast Checker
          </a>
          <a href="https://webaim.org/resources/linkcontrastchecker/" className="external">
            WAVE Link Contrast Checker
          </a>
        </div>

        <p className="text-xl" style={{ marginTop: '32px' }}>
          Extensiones de evaluación web para navegadores
        </p>

        <div className="list-link">
          <a
            href="https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?utm_source=item-share-cp&pli=1"
            className="external"
          >
            WAVE Evaluation Tool (Chrome extension)
          </a>
          <a href="https://silktide.com/" className="external">
            Silktide (Chrome extension)
          </a>
          <a
            href="https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?utm_source=item-share-cp"
            className="external"
          >
            axe DevTools - Web Accessibility Testing (Chrome extension)
          </a>
        </div>

        <p className="text-xl" style={{ marginTop: '32px' }}>
          Herramientas de evaluación por voz
        </p>
        <div className="list-link">
          <a href="https://www.nvaccess.org/download/" className="external">
            NVDA Screen Reader
          </a>
          <a href="https://support.freedomscientific.com/Downloads/JAWS" className="external">
            JAWS Screen Reader
          </a>
        </div>
      </>
    ),
  },
  {
    title: 'Soporte',
    content: (
      <>
        <p className="text-md">
          Obelisco es un sistema de diseño que se alimenta del feedback constante que recibe de todas las partes que lo
          utilizan. Si necesitás reportar algún problema o resolver una duda, podés{' '}
          <a href="https://github.com/gcba/Obelisco-V2/issues">abrir un issue en GitHub</a>.
        </p>
      </>
    ),
  },
];

const AccessibilityModule: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Accesibilidad"
        description={[
          'Obelisco está diseñado y construido para ser accesible para todas las personas, sin importar su habilidad tecnológica o su contexto de uso. ',
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="editor" noScrollButton={true} />
    </>
  );
};

export default AccessibilityModule;
