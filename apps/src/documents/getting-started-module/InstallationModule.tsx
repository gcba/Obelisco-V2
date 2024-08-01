import CodeCopy from "@/components/CodeBox";
import BoxTemplate from "@/components/Template/Box";
import Divisor from "@/components/Template/Divisor";
import Flex from "@/components/Template/Flex";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import SimpleText from "@/components/Template/SimpleText";
import React from "react";

const InstallationModule: React.FC = () => {
  // Contenido del módulo instalacion

  const code = `
  npm i @gcba/reactobelisco
  
`;

  return (
    <BoxTemplate>
      <Flex>
        <div className="col-12 col-lg-8">
          <HeadingTemplate>
            <h1>Installation</h1>
          </HeadingTemplate>

          <MainDescription description="Explora esta sección para encontrar el comando de instalación de React-Obelisco utilizando NPM. Se recomienda utilizar versiones superiores a la 16 para asegurar la compatibilidad y obtener lo mejor de nuestra librería de componentes." />

          <Divisor />

          <HeadingTemplate>
            <h2>With NPM</h2>
          </HeadingTemplate>

          <SimpleText description="Haz clic en nuestro cuadro de código para copiar el comando y pégalo en tu consola. " />

          <CodeCopy code={code} />

          <SimpleText description="Así de sencillo es instalarlo y comenzar a aprovechar todas las funcionalidades de React-Obelisco." />

          <SimpleText description="Esta biblioteca ha sido sometida a pruebas de compatibilidad y rendimiento en entornos que incluyen Next.js 12, Next.js 13 y Next.js 14. También ha sido evaluada en Vite, desde la versión 2.9 hasta la versión más reciente, la 5. Puedes encontrar detalles sobre su implementación en estas versiones visitando los siguientes enlaces." />

          <Divisor />

          <div className="card-deck max-cards-2 card-column">
            <div className="card card-horizontal">
              <i className="bx bxs-info-circle card-icon-left"></i>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#" className="card-title-link">
                    Título de la tarjeta con más de una línea
                  </a>
                </h3>
                <p className="card-text">Descripción de la tarjeta</p>
              </div>
            </div>
            <div className="card card-horizontal">
              <i className="bx bxs-info-circle card-icon-left"></i>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#" className="card-title-link">
                    Título de la tarjeta con más de una línea
                  </a>
                </h3>
                <p className="card-text">Descripción de la tarjeta</p>
              </div>
            </div>
            <div className="card card-horizontal">
              <i className="bx bxs-info-circle card-icon-left"></i>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#" className="card-title-link">
                    Título de la tarjeta con más de una línea
                  </a>
                </h3>
                <p className="card-text">Descripción de la tarjeta</p>
              </div>
            </div>
            <div className="card card-horizontal">
              <i className="bx bxs-info-circle card-icon-left"></i>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#" className="card-title-link">
                    Título de la tarjeta con más de una línea
                  </a>
                </h3>
                <p className="card-text">Descripción de la tarjeta</p>
              </div>
            </div>
            <div className="card card-horizontal">
              <i className="bx bxs-info-circle card-icon-left"></i>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#" className="card-title-link">
                    Título de la tarjeta con más de una línea
                  </a>
                </h3>
                <p className="card-text">Descripción de la tarjeta</p>
              </div>
            </div>
            <div className="card card-horizontal">
              <i className="bx bxs-info-circle card-icon-left"></i>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#" className="card-title-link">
                    Título de la tarjeta con más de una línea
                  </a>
                </h3>
                <p className="card-text">Descripción de la tarjeta</p>
              </div>
            </div>
            <div className="card card-horizontal">
              <i className="bx bxs-info-circle card-icon-left"></i>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#" className="card-title-link">
                    Título de la tarjeta con más de una línea
                  </a>
                </h3>
                <p className="card-text">Descripción de la tarjeta</p>
              </div>
            </div>
            <div className="card card-horizontal">
              <i className="bx bxs-info-circle card-icon-left"></i>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#" className="card-title-link">
                    Título de la tarjeta con más de una línea
                  </a>
                </h3>
                <p className="card-text">Descripción de la tarjeta</p>
              </div>
            </div>
          </div>
        </div>
      </Flex>
    </BoxTemplate>
  );
};

export default InstallationModule;
