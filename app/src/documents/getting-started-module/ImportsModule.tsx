import CodeCopy from "@/components/CodeCopy";
import BoxTemplate from "@/components/Template/Box";
import Divisor from "@/components/Template/Divisor";
import Flex from "@/components/Template/Flex";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import SimpleText from "@/components/Template/SimpleText";
import React from "react";

const ImportsModule: React.FC = () => {
  // Contenido del módulo instalacion

  const codeCss = `
    <link 
      rel="stylesheet" 
      href="ruta/al/proyecto/dist/obelisco.css"
    />
    
    import 'obelisco-v2/dist/styles.css';
  `;
  const codeCdn = `
    <link 
      href="https://gcba.github.io/Obelisco/obelisco.css" 
      rel="stylesheet" 
    />
  `;
  const TipografyCode = `
    <link 
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" 
      rel="stylesheet">
    </link>

    <link 
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" 
      rel="stylesheet">
    </link>
  `;
  const IconCode = `
    <link 
      href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' 
      rel='stylesheet'
    >
    <link 
      href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" 
      rel="stylesheet"
    >
  `;

  const JsCode = `
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" 
      integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" 
      crossorigin="anonymous">
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" 
      integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" 
      crossorigin="anonymous">
    </script>
  `;
  return (
    <BoxTemplate>
      <Flex>
        <div className="col-12 col-lg-8" id="section1">
          <HeadingTemplate>
            <h1>Imports</h1>
          </HeadingTemplate>

          <MainDescription
            description="Después de instalar Obelisco v2, sigue adelante con la sección
            'Importaciones' para integrar los recursos esenciales que aseguran
            el funcionamiento correcto de nuestros componentes."
          />

          <Divisor />

          <HeadingTemplate>
            <h2>Importar estilos</h2>
          </HeadingTemplate>

          <SimpleText
            description="Las hojas de estilos se pueden importar tanto en sass como en css ya
            compilado. El archivo css está ubicado en /dist/obelisco.css y el
            archivo principal de sass en /src/scss/obelisco.scss."
          />

          <CodeCopy code={codeCss} />

          <Divisor />

          <HeadingTemplate>
            <h2>Importar estilos con CDN</h2>
          </HeadingTemplate>

          <SimpleText
            description="Las hojas de estilos se pueden importar tanto en sass como en css ya
            compilado. El archivo css está ubicado en /dist/obelisco.css y el
            archivo principal de sass en /src/scss/obelisco.scss."
          />

          <CodeCopy code={codeCdn} />

          <Divisor />

          <HeadingTemplate>
            <h2 id="section2">Importar tipografia</h2>
          </HeadingTemplate>

          <SimpleText
            description="Obelisco requiere las tipografías Nunito y Open sans disponibles en
            google fonts, para utilizarlas con su CDN podemos hacerlo de la
            siguiente forma:"
          />

          <CodeCopy code={TipografyCode} />

          <Divisor />

          <HeadingTemplate>
            <h2>Importar Iconos</h2>
          </HeadingTemplate>

          <SimpleText description="Para utilizarlas con su CDN podemos hacerlo de la siguiente forma:" />

          <CodeCopy code={IconCode} />

          <Divisor />

          <HeadingTemplate>
            <h2 id="section3">Importar Js</h2>
          </HeadingTemplate>

          <SimpleText
            description="Como Obelisco está construido sobre bootstrap 5.3, debemos tener esas
            dependencias."
          />

          <CodeCopy code={JsCode} />

          <Divisor />

          <SimpleText
            description="Sin estas importaciones no se garantiza que la libreria de
            componentes se presente en correcto funcionamiento"
          />
        </div>
      </Flex>
    </BoxTemplate>
  );
};

export default ImportsModule;
