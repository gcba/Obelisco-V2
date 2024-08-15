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
  EGcodeListWidthComplete2ColumnsAccess,
  EGcodeListWidthComplete1ColumnAccess,
  EGcodeListWidthByAccess4ColumnsAccess,
  EGcodeListWidthByAccess3ColumnsAccess,
  EGcodeListWidthByAccess2ColumnsAccess,
  EGcodeListWidthByAccess1ColumnAccess,
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
      title: "Lista ancho completo | Cuatro Columnas",
      content: (
        <section>
          <div className="container">
            <div className="access-deck max-cards-4 row">
              <a href="#" className="list-group-item item-sm col">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm col">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm col">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm col">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm col">
                <span className="access-title">Acceso</span>
              </a>
            </div>
          </div>

          <CodeCopy code={EGcodeListWidthComplete4ColumnsAccess} />
        </section>
      ),
    },
    {
      id: "section-7",
      title: "Lista ancho completo | Tres Columnas",
      content: (
        <section>
          <div className="container">
            <div className="access-deck max-cards-3 row">
              <a href="#" className="list-group-item item-sm col">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm col">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm col">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm col">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm col">
                <span className="access-title">Acceso</span>
              </a>
            </div>
          </div>

          <CodeCopy code={EGcodeListWidthComplete3ColumnsAccess} />
        </section>
      ),
    },
    {
      id: "section-8",
      title: "Lista ancho completo | Dos Columnas",
      content: (
        <section>
          <div className="container">
            <div className="access-deck max-cards-2">
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
            </div>
          </div>
          <CodeCopy code={EGcodeListWidthComplete2ColumnsAccess} />
        </section>
      ),
    },
    {
      id: "section-9",
      title: "Lista ancho completo | Una Columna",
      content: (
        <section>
          <div className="container">
            <div className="access-deck max-cards-1">
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
            </div>
          </div>
          <CodeCopy code={EGcodeListWidthComplete1ColumnAccess} />
        </section>
      ),
    },
    {
      id: "section-10",
      title: "Lista ancho por acceso | Cuatro Columna",
      content: (
        <section>
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
              <a href="#" className="col list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="col list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="col list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="col list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="col list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
            </div>
          </div>

          <CodeCopy code={EGcodeListWidthByAccess4ColumnsAccess} />
        </section>
      ),
    },
    {
      id: "section-11",
      title: "Lista ancho por acceso | Tres Columnas",
      content: (
        <section>
          <div className="container">
            <div className="access-deck access-column max-cards-3">
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
            </div>
          </div>
          <CodeCopy code={EGcodeListWidthByAccess3ColumnsAccess} />
        </section>
      ),
    },
    {
      id: "section-12",
      title: "Lista ancho por acceso | Dos Columnas",
      content: (
        <section>
          <div className="container">
            <div className="access-deck access-column max-cards-2">
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
            </div>
          </div>
          <CodeCopy code={EGcodeListWidthByAccess2ColumnsAccess} />
        </section>
      ),
    },
    {
      id: "section-12",
      title: "Lista ancho por acceso | Una Columna",
      content: (
        <section>
          <div className="container">
            <div className="access-deck access-column max-cards-4">
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">Acceso</span>
              </a>
            </div>
          </div>
          <CodeCopy code={EGcodeListWidthByAccess1ColumnAccess} />
        </section>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default AccessDocs;
