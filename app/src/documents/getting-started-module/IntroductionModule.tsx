import Image from 'next/image';
const basePath = '/Obelisco-V2';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
    title: 'Características principales',
    firstTitle: true,
    content: (
      <div className="col-12">
        <div className="list-informative">
          <ul className="list-informative-bullet">
            <li>
              <strong>Diseño atómico y modular:</strong> pensar y mantener un sistema atómico permite generar bloques de
              contenido intercambiables, dentro de una grilla que sigue el tamaño de la ventana y muestra la información
              de la forma más amigable a la persona usuaria.
            </li>
            <li>
              <strong>Librería de componentes responsivos:</strong> Obelisco cuenta con una librería de más de 30
              componentes construidos con los más altos estándares de accesibilidad (AA-AAA), y propiedades
              configurables para cada contexto de uso.
            </li>
            <li>
              <strong>
                Guías de estilos o <i>foundations</i> robustas:
              </strong>{' '}
              el sistema de diseño cuenta con guías de estilo escalables, adaptables a cualquier activo digital, y
              basadas en principios y fundamentos que optimizan la experiencia de la persona usuaria.
            </li>
            <li>
              <strong>
                Transparencia y fiabilidad del modelo <i>open source</i>:
              </strong>{' '}
              como sistema de diseño <i>open source</i>, toda la documentación e información sobre el uso e
              implementación de Obelisco en activos digitales está disponible desde cada una de sus capas.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: '¿Cómo utilizar Obelisco?',
    content: (
      <div>
        <p>
          Es posible instalar e implementar Obelisco sobre un activo digital nuevo o existente, con una adopción
          inmediata o gradual del sistema de diseño.
        </p>
        <p>
          {' '}
          Para tener mayor contexto sobre cómo sería el proceso de trabajo conjunto con Obelisco, mirá el siguiente{' '}
          <i>roadmap:</i>
        </p>
        <a
          href={`${basePath}/docs/Workflow-Flujo_de_adopcion.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="m-1"
        >
          <Image
            src={`${basePath}/images/flujo_adopcion.svg`}
            alt="Acceder a pdf"
            width="800"
            height="242"
            className="img-fluid"
          />
        </a>
      </div>
    ),
  },
  {
    title: 'Guía de adopción',
    content: (
      <div>
        <p>
          El modelo de adopción sirve como guía para la correcta instalación e implementación de Obelisco en activos
          digitales, nuevos o existentes. El sistema de diseño ofrece información específica para diseñadores y para
          desarrolladores, como una forma de agilizar los procesos de adopción para cada una de las áreas involucradas.
        </p>
        <a
          href={`${basePath}/docs/Guia_de_adopcion_Obelisco.pdf`}
          download={`${basePath}/docs/Guia_de_adopcion_Obelisco.pdf`}
          className="download"
        >
          Guía de adopción de Obelisco v2
        </a>
      </div>
    ),
  },
  {
    title: 'Conocé Obelisco',
    content: (
      <div className="card-items-2 p-1">
        <div className="col">
          <a href="https://gcba.github.io/Obelisco-V2/components" className="list-group-item">
            <span className="material-symbols-rounded o-icon" aria-hidden="true">
              menu_book
            </span>
            <div className="access-content">
              <span className="access-title">Librería</span>
              <p className="access-text">Lineamientos de uso para los estilos y componentes del sistema.</p>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="https://gcba.github.io/Obelisco-V2/documentation" className="list-group-item">
            <span className="material-symbols-rounded o-icon" aria-hidden="true">
              code
            </span>
            <div className="access-content">
              <span className="access-title">Documentación</span>
              <p className="access-text">Cambios de componentes, versionados y clases disponibles.</p>
            </div>
          </a>
        </div>
      </div>
    ),
  },
  {
    title: 'Soporte',
    content: (
      <div>
        <p>
          Obelisco es un sistema de diseño que se alimenta del feedback constante que recibe de todas las partes que lo
          utilizan. Si necesitás reportar algún problema o resolver una duda, podés{' '}
          <a href="https://github.com/gcba/Obelisco-V2/issues" target="_blank" rel="noopener noreferrer">
            abrir un issue en GitHub{' '}
          </a>
          .
        </p>
      </div>
    ),
  },
];
const IntroductionModule: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Sobre Obelisco"
        description={[
          'Obelisco es el sistema de diseño del Gobierno de la Ciudad de Buenos Aires, construido con foco en la accesibilidad y los estándares más altos de usabilidad. Obelisco facilita la construcción de productos digitales que ofrezcan una experiencia integral y positiva para la ciudadanía.',
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="init" />
    </>
  );
};

export default IntroductionModule;
