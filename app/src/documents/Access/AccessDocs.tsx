"use client";

import React from "react";

import CodeBox from "@/components/CodeBox";
import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import MainDescription from "@/components/Template/MainDescription";

import {
  SIMPLE_ACCESS,
  WITH_DESCRIPTION_ACCESS,
  WITH_ICON_ACCESS,
  FOUR_COLUMNS_ACCESS,
  THREE_COLUMNS_ACCESS,
  ONE_COLUMN_ACCESS,
  SIZES_ACCESS,
} from "./code-views";

const AccessDocs: React.FC = () => {
  const sections = [
    {
      id: "",
      title: "Accesos",
      content: (
        <MainDescription description="Los accesos funcionan como puntos de ingreso a diferentes secciones y pueden agruparse cuando hay una similitud en su contenido." />
      ),
    },
    {
      id: "section-1",
      title: "Simple",
      content: (
        <CodeBox codeHTML={SIMPLE_ACCESS}>
          <section className="container" >
          <div className="list-group">
            <a href="#" className="list-group-item item-sm">
              <span className="access-title">Acceso</span>
            </a>
            <a href="#" className="list-group-item item-sm active">
              <span className="access-title">Acceso</span>
            </a>
            <a href="#" className="list-group-item item-sm hover">
              <span className="access-title">Acceso</span>
            </a>
            <a href="#" className="list-group-item item-sm focus">
              <span className="access-title">Acceso</span>
            </a>
          </div>
        </section>
        </CodeBox>
        
      ),
    },
    {
      id: "section-2",
      title: "Con descripción",
      content: (
        <CodeBox codeHTML={WITH_DESCRIPTION_ACCESS}>
        <section>
          <div className="list-group">
            <a href="#" className="list-group-item item-sm">
              <div className="access-content">
                <span className="access-title">Acceso</span>
                <p className="access-text">Descripción (Opcional)</p>
              </div>
            </a>
            <a href="#" className="list-group-item item-sm active">
              <div className="access-content">
                <span className="access-title">Acceso</span>
                <p className="access-text">Descripción (Opcional)</p>
              </div>
            </a>
            <a href="#" className="list-group-item item-sm hover">
              <div className="access-content">
                <span className="access-title">Acceso</span>
                <p className="access-text">Descripción (Opcional)</p>
              </div>
            </a>
            <a href="#" className="list-group-item item-sm focus">
              <div className="access-content">
                <span className="access-title">Acceso</span>
                <p className="access-text">Descripción (Opcional)</p>
              </div>
            </a>
          </div>
        </section>
        </CodeBox>

      ),
    },
    {
      id: "section-3",
      title: "Con icono",
      content: (
        <CodeBox codeHTML={WITH_ICON_ACCESS}>
        <section>
          <div className="list-group">
            <a href="#" className="list-group-item item-sm">
            <span className="material-symbols-rounded o-icon">info</span>
              <div className="access-content">
                <span className="access-title">Acceso</span>
                <p className="access-text">Descripción (Opcional)</p>
              </div>
            </a>
            <a href="#" className="list-group-item item-sm active">
            <span className="material-symbols-rounded o-icon">info</span>
              <div className="access-content">
                <span className="access-title">Acceso</span>
                <p className="access-text">Descripción (Opcional)</p>
              </div>
            </a>
            <a href="#" className="list-group-item item-sm hover">
            <span className="material-symbols-rounded o-icon">info</span>
              <div className="access-content">
                <span className="access-title">Acceso</span>
                <p className="access-text">Descripción (Opcional)</p>
              </div>
            </a>
            <a href="#" className="list-group-item item-sm focus">
            <span className="material-symbols-rounded o-icon">info</span>
              <div className="access-content">
                <span className="access-title">Acceso</span>
                <p className="access-text">Descripción (Opcional)</p>
              </div>
            </a>
          </div>
        </section>
        </CodeBox>
      ),
    },
    {
      id: "section-4",
      title: "Tamaños",
      content: (
        <CodeBox codeHTML={SIZES_ACCESS}>
        <section>
          <div className="list-group">
            <a href="#" className="list-group-item ">
              <span className="access-title">Acceso</span>
            </a>
            <a href="#" className="list-group-item item-sm hover">
              <span className="access-title">Acceso</span>
            </a>
          </div>
        </section>
        </CodeBox>
      ),
    },
    {
      id: "section-5",
      title: "Disposición",
      content: (
        <>
        <CodeBox codeHTML={FOUR_COLUMNS_ACCESS}>
          {/* Cuatro Columnas */}
          <section>
            <h2>Cuatro columnas</h2>
            <div className="container">
              <div className="access-items-4">
                <div className="col">
                  <a href="#" className="list-group-item item-sm">
                    <span className="access-title">Acceso</span>
                  </a>
                </div>
                <div className="col">
                  <a href="#" className="list-group-item item-sm">
                    <span className="access-title">Acceso</span>
                  </a>
                </div>
                <div className="col">
                  <a href="#" className="list-group-item item-sm">
                    <span className="access-title">Acceso</span>
                  </a>
                </div>
                <div className="col">
                  <a href="#" className="list-group-item item-sm">
                    <span className="access-title">Acceso</span>
                  </a>
                </div>
                <div className="col">
                  <a href="#" className="list-group-item item-sm">
                    <span className="access-title">Acceso</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          </CodeBox>

          <CodeBox codeHTML={THREE_COLUMNS_ACCESS}>
          {/* Tres Columnas */}
          <section>
            <h2>Tres Columnas</h2>
            <div className="container">
              <div className="access-items-3">
                <div className="col">
                  <a href="#" className="list-group-item item-sm">
                    <span className="access-title">Acceso</span>
                  </a>
                </div>
                <div className="col">
                  <a href="#" className="list-group-item item-sm">
                    <span className="access-title">Acceso</span>
                  </a>
                </div>
                <div className="col">
                  <a href="#" className="list-group-item item-sm">
                    <span className="access-title">Acceso</span>
                  </a>
                </div>
                <div className="col">
                  <a href="#" className="list-group-item item-sm">
                    <span className="access-title">Acceso</span>
                  </a>
                </div>
                <div className="col">
                  <a href="#" className="list-group-item item-sm">
                    <span className="access-title">Acceso</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          </CodeBox>

          <CodeBox codeHTML={ONE_COLUMN_ACCESS}>
          {/* Una columna */}
          <section>
            <h2>Una Columna con Aside</h2>
            <div className="container">
              <div className="row">

                {/* Columna para el div de accesos */}
                <div className="col-12 col-lg-4">
                  <div className="max-items-1">
                    <div className="col">
                      <a href="#" className="list-group-item item-sm">
                        <span className="access-title">Acceso</span>
                      </a>
                    </div>
                    <div className="col">
                      <a href="#" className="list-group-item item-sm">
                        <span className="access-title">Acceso</span>
                      </a>
                    </div>
                    <div className="col">
                      <a href="#" className="list-group-item item-sm">
                        <span className="access-title">Acceso</span>
                      </a>
                    </div>
                    <div className="col">
                      <a href="#" className="list-group-item item-sm">
                        <span className="access-title">Acceso</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Columna para el contenido a un lado */}
                <div className="col-12 col-lg-8">
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus nesciunt sed dolorem laboriosam eius voluptatibus
                    omnis accusantium, non atque et at consequuntur accusamus,
                    facilis officia nam consectetur aliquam sunt ipsum. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Possimus
                    nesciunt sed dolorem laboriosam eius voluptatibus omnis
                    accusantium, non atque et at consequuntur accusamus, facilis
                    officia nam consectetur aliquam sunt ipsum.
                  </div>
                </div>
              </div>
            </div>
          </section>
          </CodeBox>
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default AccessDocs;
