"use client";

import React, { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from "@/components/Template/Box";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import SimpleText from "@/components/Template/SimpleText";

import {
  EGcodeSimpleAccess,
  EGcodeWithDescriptionAccess,
  EGcodeWithIconAccess,
  EGcodeSizesAccess,
  EGcodeListWidthComplete4ColumnsAccess,
  EGcodeListWidthComplete3ColumnsAccess,
  EGcodeListWidthComplete1ColumnWithAside,
} from "./code-views";
import { idText } from "typescript";
import DocumentationTemplate from "@/components/Template/DocumentationTemplate";

const AccessDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      title: "Introducción",
      content: (
        <MainDescription description="Los accesos son avisos que mantienen a los usuarios informados sobre el estado del sistema y pueden requerir o no que realicen una acción." />
      ),
    },
    {
      id: "section-2",
      title: "Simple",
      content: (
        <section>
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
          <CodeCopy code={EGcodeSimpleAccess} />
        </section>
      ),
    },
    {
      id: "section-3",
      title: "Con descripción",
      content: (
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
          <CodeCopy code={EGcodeWithDescriptionAccess} />
        </section>
      ),
    },
    {
      id: "section-4",
      title: "Con icono",
      content: (
        <section>
          <div className="list-group">
            <a href="#" className="list-group-item item-sm">
              <i className="bx bxs-info-circle"></i>
              <div className="access-content">
                <span className="access-title">Acceso</span>
                <p className="access-text">Descripción (Opcional)</p>
              </div>
            </a>
            <a href="#" className="list-group-item item-sm active">
              <i className="bx bxs-info-circle"></i>
              <div className="access-content">
                <span className="access-title">Acceso</span>
                <p className="access-text">Descripción (Opcional)</p>
              </div>
            </a>
            <a href="#" className="list-group-item item-sm hover">
              <i className="bx bxs-info-circle"></i>
              <div className="access-content">
                <span className="access-title">Acceso</span>
                <p className="access-text">Descripción (Opcional)</p>
              </div>
            </a>
            <a href="#" className="list-group-item item-sm focus">
              <i className="bx bxs-info-circle"></i>
              <div className="access-content">
                <span className="access-title">Acceso</span>
                <p className="access-text">Descripción (Opcional)</p>
              </div>
            </a>
          </div>
          <CodeCopy code={EGcodeWithIconAccess} />
        </section>
      ),
    },
    {
      id: "section-5",
      title: "Tamaños",
      content: (
        <section>
          <div className="list-group">
            <a href="#" className="list-group-item ">
              <span className="access-title">Acceso</span>
            </a>
            <a href="#" className="list-group-item item-sm hover">
              <span className="access-title">Acceso</span>
            </a>
          </div>
          <CodeCopy code={EGcodeSizesAccess} />
        </section>
      ),
    },
    {
      id: "section-6",
      title: "Disposición",
      content: (
        <>
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

            <CodeCopy code={EGcodeListWidthComplete4ColumnsAccess} />
          </section>

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

            <CodeCopy code={EGcodeListWidthComplete3ColumnsAccess} />
          </section>

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

            <CodeCopy code={EGcodeListWidthComplete1ColumnWithAside} />
          </section>
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default AccessDocs;
