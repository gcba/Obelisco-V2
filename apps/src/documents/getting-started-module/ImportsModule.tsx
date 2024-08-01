import CodeCopy from "@/components/CodeBox";
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
      rel="stylesheet" 
    />
    <link 
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" 
      rel="stylesheet"
    ></link>
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
    <script 
      src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" 
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" 
      crossorigin="anonymous"
    ></script>
    <script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" 
      crossorigin="anonymous"
    ></script>
  `;
  return (
    <BoxTemplate>
      <Flex>
        <div className="col-12 col-lg-8" id="section1">
          <HeadingTemplate>
            <h1>Imports</h1>
          </HeadingTemplate>

          <MainDescription
            description="Después de instalar React-Obelisco, sigue adelante con la sección
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
            description="Como Obelisco está construido sobre bootstrap 4, debemos tener esas
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
