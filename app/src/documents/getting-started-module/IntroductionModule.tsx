import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
    title: '¿Qué es Obelisco v2?',
    description: `
      Obelisco v2 es una librería de estilos que facilita la creación de interfaces web mediante componentes que mantienen una coherencia estética y funcional. 
      Este sistema es ideal para desarrollar productos digitales con un diseño armonioso y enfocado en la experiencia del usuario. 
      Proporcionada por el GCBA, Obelisco v2 ofrece una integración sencilla de recursos esenciales que permiten un desarrollo eficiente y estandarizado.
    `,
  },
  {
    title: 'Características principales',
    content: (
      <div className="col-12">
        <div className="list-informative">
          <ul className="list-informative-bullet">
            <li>
              <strong>Integración con Bootstrap:</strong> Construido sobre la base de Bootstrap 5.3, Obelisco v2 hereda
              un sistema de diseño robusto, facilitando la creación de interfaces consistentes y atractivas.
            </li>
            <li>
              <strong>Paleta de colores predefinida:</strong> Ofrece una paleta de colores cuidadosamente seleccionada,
              lo que simplifica la toma de decisiones de diseño y garantiza coherencia visual en toda la aplicación.
            </li>
            <li>
              <strong>Accesibilidad garantizada:</strong> Con un enfoque prioritario en la accesibilidad, cada
              componente de Obelisco v2 está diseñado para cumplir con las mejores prácticas, asegurando una experiencia
              inclusiva para todos los usuarios.
            </li>
            <li>
              <strong>Amplia variedad de componentes:</strong> Con más de 20 componentes disponibles y más de 30
              variantes, Obelisco v2 proporciona flexibilidad y versatilidad para adaptarse a diversas necesidades de
              diseño y funcionalidad.
            </li>
            <li>
              <strong>Tipografía predefinida:</strong> Incluye tipografías predefinidas que complementan la estética
              general, facilitando la consistencia en la presentación del texto en toda la aplicación.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Accesibilidad',
    description: `
      La accesibilidad es una prioridad en Obelisco v2. Cada componente está diseñado para garantizar que todos los usuarios, independientemente de sus habilidades, puedan interactuar con las interfaces de manera efectiva. 
      Se incluyen etiquetas semánticas, compatibilidad con lectores de pantalla, y controles de teclado, asegurando el cumplimiento de estándares estrictos. 
      Además, se cuida el contraste de colores y se proporcionan descripciones adecuadas para elementos interactivos, garantizando una experiencia equitativa para todos los usuarios. 
      En Obelisco v2, la accesibilidad no es solo una característica, sino un compromiso integral que garantiza interfaces web inclusivas y accesibles para un público diverso.
    `,
  },
];
const IntroductionModule: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Sobre Obelisco"
        description={[
          'Obelisco v2 es un Sistema de diseño basado en componentes para productos digitales de la Ciudad de Buenos Aires, diseñado para continuar la evolución de Obelisco en su segunda versión.',
          'Este sistema brinda una mejor experiencia de usuario y simplifica el desarrollo de interfaces web al mantener una armonía digital enfocada en la experiencia de los usuarios, proporcionada por el Gobierno de la Ciudad de Buenos Aires (GCBA).',
          'Con una amplia variedad de componentes, Obelisco v2 acelera la creación de aplicaciones elegantes y funcionales.',
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="init" />
    </>
  );
};

export default IntroductionModule;
