import BoxTemplate from "@/components/Template/Box";
import Divisor from "@/components/Template/Divisor";
import Flex from "@/components/Template/Flex";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import SimpleText from "@/components/Template/SimpleText";
import React from "react";

const IntroductionModule: React.FC = () => {
  // Contenido del módulo introduccion

  return (
    <BoxTemplate>
      <Flex>
        <div className="col-12 col-lg-8">
          <HeadingTemplate>
            <h1>Introducción</h1>
          </HeadingTemplate>

          <MainDescription description="¡Bienvenidos a la documentación de la libreria de componentes React-Obelisco!" />

          <Divisor />

          <HeadingTemplate>
            <h2>¿Qué es React-Obelisco?</h2>
          </HeadingTemplate>

          <SimpleText description="React-Obelisco es una librería de componentes para React que simplifica el desarrollo de interfaces web. Con una amplia variedad de componentes, acelera la creación de aplicaciones elegantes. Descubre la eficiencia y versatilidad de React-Obelisco para impulsar tu desarrollo frontend." />

          <SimpleText description="Además, React-Obelisco ofrece una experiencia de usuario fluida y atractiva, permitiendo una fácil integración de recursos esenciales para un desarrollo eficiente. Desde su sencilla instalación hasta la importación intuitiva de componentes, React-Obelisco es la herramienta ideal para desarrolladores que buscan optimizar su flujo de trabajo y crear interfaces web impactantes de manera rápida y eficaz." />

          <Divisor />

          <HeadingTemplate>
            <h2>Principales características</h2>
          </HeadingTemplate>

          <div className="list-informative">
            <h3 className="list-informative-subtitle">
              React-Obelisco se destaca por sus características clave:
            </h3>
            <ul className="list-informative-check">
              <li>
                <strong>Integración con Bootstrap:</strong> Construido sobre la
                base de Bootstrap, React-Obelisco hereda su potente sistema de
                diseño, facilitando la creación de interfaces consistentes y
                estéticas.
              </li>
              <li>
                <strong>Paleta de Colores Predefinida:</strong> Ofrece una
                paleta de colores cuidadosamente seleccionada, simplificando la
                toma de decisiones de diseño y garantizando la coherencia visual
                en toda la aplicación.
              </li>
              <li>
                <strong>Accesibilidad Garantizada:</strong> Con un enfoque
                prioritario en la accesibilidad, cada componente de
                React-Obelisco está diseñado para cumplir con las mejores
                prácticas, asegurando una experiencia inclusiva para todos los
                usuarios.
              </li>
              <li>
                <strong>Amplia Variedad de Componentes:</strong> Más de 20
                componentes disponibles, con más de 30 variantes, proporcionan
                flexibilidad y versatilidad para adaptarse a diversas
                necesidades de diseño y funcionalidades.
              </li>
              <li>
                <strong>Tipografía Predefinida:</strong> Incluye tipografías
                predefinidas que complementan la estética general, facilitando
                la consistencia en la presentación del texto en toda la
                aplicación.
              </li>
            </ul>
          </div>

          <Divisor />

          <HeadingTemplate>
            <h2>Cómo utilizar estos documentos</h2>
          </HeadingTemplate>

          <SimpleText
            description="   En el lado izquierdo de la pantalla, encontrarás la barra de
            navegación de documentos. Las páginas de los documentos están
            organizadas secuencialmente, desde lo básico hasta lo avanzado, para
            que pueda seguirlas paso a paso al crear su aplicación. Sin embargo,
            puede leerlos en cualquier orden o pasar a las páginas que se
            apliquen a su caso de uso."
          />

          <Divisor />

          <HeadingTemplate>
            <h2>Accesibilidad</h2>
          </HeadingTemplate>

          <SimpleText description="React-Obelisco prioriza la accesibilidad, asegurando que todos los usuarios, independientemente de sus habilidades, puedan interactuar con las interfaces de manera efectiva. Con etiquetas semánticas, compatibilidad con lectores de pantalla y controles de teclado, cada componente cumple con estándares estrictos. El diseño incluye contrastes de color accesibles y descripciones adecuadas para elementos interactivos, garantizando una experiencia equitativa para usuarios con discapacidades visuales. La accesibilidad no es solo una característica, sino un compromiso integral en React-Obelisco, proporcionando interfaces web inclusivas y accesibles para un público diverso." />
        </div>
      </Flex>
    </BoxTemplate>
  );
};

export default IntroductionModule;
