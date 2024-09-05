import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const IntroductionModule: React.FC = () => {
  const sections = [
    {
      id: 'section-1',
      title: 'Introducción',
      content: (
        <>
          <p className="lead">
            Obelisco v2 es un Sistema de diseño basado en componentes para productos digitales de la Ciudad de Buenos
            Aires, diseñado para continuar la evolución de Obelisco en su segunda versión.
          </p>
          <p className="lead">
            Este sistema brinda una mejor experiencia de usuario y simplifica el desarrollo de interfaces web al
            mantener una armonía digital enfocada en la experiencia de los usuarios, proporcionada por el Gobierno de la
            Ciudad de Buenos Aires (GCBA).
          </p>
          <p className="lead">
            Con una amplia variedad de componentes, Obelisco v2 acelera la creación de aplicaciones elegantes y
            funcionales.
          </p>
        </>
      ),
      h1: true,
      defaultTitle: true,
    },
    {
      id: 'section-2',
      title: '¿Qué es Obelisco v2?',
      description: `
        Obelisco v2 es una librería de estilos que facilita la creación de interfaces web mediante componentes que mantienen una coherencia estética y funcional. 
        Este sistema es ideal para desarrollar productos digitales con un diseño armonioso y enfocado en la experiencia del usuario. 
        Proporcionada por el GCBA, Obelisco v2 ofrece una integración sencilla de recursos esenciales que permiten un desarrollo eficiente y estandarizado.
      `,
    },
    {
      id: 'section-3',
      title: 'Características Principales',
      content: (
        <div className="col-12">
          <ul>
            <li>
              <strong>Integración con Bootstrap:</strong> Construido sobre la base de Bootstrap 5.3, Obelisco v2 hereda
              un sistema de diseño robusto, facilitando la creación de interfaces consistentes y atractivas.
            </li>
            <li>
              <strong>Paleta de Colores Predefinida:</strong> Ofrece una paleta de colores cuidadosamente seleccionada,
              lo que simplifica la toma de decisiones de diseño y garantiza coherencia visual en toda la aplicación.
            </li>
            <li>
              <strong>Accesibilidad Garantizada:</strong> Con un enfoque prioritario en la accesibilidad, cada
              componente de Obelisco v2 está diseñado para cumplir con las mejores prácticas, asegurando una experiencia
              inclusiva para todos los usuarios.
            </li>
            <li>
              <strong>Amplia Variedad de Componentes:</strong> Con más de 20 componentes disponibles y más de 30
              variantes, Obelisco v2 proporciona flexibilidad y versatilidad para adaptarse a diversas necesidades de
              diseño y funcionalidad.
            </li>
            <li>
              <strong>Tipografía Predefinida:</strong> Incluye tipografías predefinidas que complementan la estética
              general, facilitando la consistencia en la presentación del texto en toda la aplicación.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'section-4',
      title: 'Accesibilidad',
      description: `
        La accesibilidad es una prioridad en Obelisco v2. Cada componente está diseñado para garantizar que todos los usuarios, independientemente de sus habilidades, puedan interactuar con las interfaces de manera efectiva. 
        Se incluyen etiquetas semánticas, compatibilidad con lectores de pantalla, y controles de teclado, asegurando el cumplimiento de estándares estrictos. 
        Además, se cuida el contraste de colores y se proporcionan descripciones adecuadas para elementos interactivos, garantizando una experiencia equitativa para todos los usuarios. 
        En Obelisco v2, la accesibilidad no es solo una característica, sino un compromiso integral que garantiza interfaces web inclusivas y accesibles para un público diverso.
      `,
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default IntroductionModule;
