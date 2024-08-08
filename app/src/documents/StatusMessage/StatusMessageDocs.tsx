"use client";

import React, { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from "@/components/Template/Box";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import Divisor from "@/components/Template/Divisor";
import { SMType1, SMType2, SMType3, SMType4, SMType5 } from "./code-views";

const StatusMessageDocs: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);

  return (
    <BoxTemplate>
      <div className="col-12">
        <Scrollspy
          sectionRefs={[
            section1Ref,
            section2Ref,
            section3Ref,
            section4Ref,
            section5Ref,
            section6Ref,
          ]}
        >
          {({ currentElementIndexInViewport }) => (
            <div className="box-scrollspy">
              <div className="nav-scrollspy d-none d-lg-block">
                <ul className="scrollspy" data-cy="nav-wrapper">
                  <p className="font-weight-bold mb-1">On this page</p>
                  <li
                    className={
                      currentElementIndexInViewport === 0 ? "active" : ""
                    }
                  >
                    <a href="#section-1">Introducción</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 1 ? "active" : ""
                    }
                  >
                    <a href="#section-2">De información</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 2 ? "active" : ""
                    }
                  >
                    <a href="#section-3">De exitó</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-4">De advertencia</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 4 ? "active" : ""
                    }
                  >
                    <a href="#section-5">De peligro</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 5 ? "active" : ""
                    }
                  >
                    <a href="#section-6">Institucional</a>
                  </li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8 p-0">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Mensaje de estado</h1>
                    </HeadingTemplate>
                    <MainDescription description="Los mensajes de estado son comunicaciones que ayudan a las personas usuarias a tomar decisiones premeditadas. Informan que algo ha ocurrido o va a ocurrir y tal vez requieran de su acción. También, sirven para reducir la incertidumbre y evitar que los usuarios cometan errores." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Información</h2>
                    </HeadingTemplate>

                    <div className="container p-5 bg-light">
                      <div className="status status-info">
                        <h2 className="status-title">
                          Esto es un título de un mensaje de información
                        </h2>
                        <p className="status-text">
                          Este es un párrafo que brinda información necesaria
                          con la finalidad de guiar y ayudar a las personas
                          usuarias a finalizar un proceso o iniciar uno nuevo.
                        </p>
                        <p className="status-text">
                          Este es un párrafo que brinda información necesaria
                          con la finalidad de guiar y ayudar a las personas
                          usuarias a finalizar un proceso o iniciar uno nuevo.
                        </p>
                        <button type="button" className="btn btn-secondary">
                          Botón
                        </button>
                      </div>
                    </div>

                    <br />
                    <CodeCopy code={SMType1} />
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Éxito</h2>
                    </HeadingTemplate>

                    <div className="container p-5 bg-light">
                      <div className="status status-success">
                        <h2 className="status-title">
                          Esto es un título de un mensaje de éxito
                        </h2>
                        <p className="status-text">
                          Esto es un párrafo que acompaña y sirve para indicar
                          que el usuario realizó una acción correctamente, como
                          cuando realiza una tarea con éxito.
                        </p>
                        <ul className="status-list">
                          <li>
                            Éste es un ítem dentro de una lista que puede
                            contener un <a href="#">enlace</a>.
                          </li>
                          <li>
                            Los ítems pueden contener o no enlaces. Este es un
                            ejemplo para un detalle que no lleva enlace.
                          </li>
                          <li>Éste es otro ítem dentro de una lista.</li>
                        </ul>
                        <button type="button" className="btn btn-secondary">
                          Botón
                        </button>
                      </div>
                    </div>

                    <br />
                    <CodeCopy code={SMType2} />
                  </section>

                  <Divisor />

                  <section id="section-4" ref={section4Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Advertencia</h2>
                    </HeadingTemplate>

                    <div className="container p-5 bg-light">
                      <div className="status status-warning">
                        <h2 className="status-title">
                          Esto es un título de un mensaje de advertencia
                        </h2>
                        <p className="status-text">
                          Esto es un párrafo que advierte y sirve para indicarle
                          al usuario que preste atención a determinada
                          información o acción que debe realizar.
                        </p>
                        <ul className="status-list">
                          <li>
                            Contar con Clave Ciudad de
                            <a href="#">AGIP</a>
                          </li>
                          <li>
                            Cargar en el Sistema de Tramitación a Distancia
                            (TAD) la siguiente documentación obligatoria:
                          </li>
                          <li>
                            Anexo II Formulario de Presentación de Programa de
                            Capacitación
                          </li>
                        </ul>
                        <button type="button" className="btn btn-secondary">
                          Botón
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          Botón
                        </button>
                      </div>
                    </div>

                    <br />
                    <CodeCopy code={SMType3} />
                  </section>

                  <Divisor />

                  <section id="section-5" ref={section5Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Error</h2>
                    </HeadingTemplate>

                    <div className="container p-5 bg-light">
                      <div className="status status-danger">
                        <h2 className="status-title">
                          Esto es un título de un mensaje de peligro
                        </h2>
                        <p className="status-text">
                          Este párrafo sirve para comunicar que algo salió mal y
                          explica cómo puede ser solucionado. Muestra errores
                          sobre algo que se realizó.
                        </p>
                        <ul className="status-list">
                          <li>
                            Contar con Clave Ciudad de
                            <a href="#">AGIP</a>
                          </li>
                          <li>
                            Cargar en el Sistema de Tramitación a Distancia
                            (TAD) la siguiente documentación obligatoria:
                          </li>
                          <li>
                            Anexo II Formulario de Presentación de Programa de
                            Capacitación
                          </li>
                        </ul>
                        <button type="button" className="btn btn-secondary">
                          Botón
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          Botón
                        </button>
                      </div>
                    </div>

                    <br />
                    <CodeCopy code={SMType4} />
                  </section>

                  <Divisor />

                  <section id="section-6" ref={section6Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Institucional</h2>
                    </HeadingTemplate>

                    <div className="container p-5 bg-light">
                      <div className="status status-institutional">
                        <h2 className="status-title">
                          Este es un mensaje institucional del Gobierno de la
                          Ciudad de Buenos Aires
                        </h2>
                        <p className="status-text">
                          En el cuerpo de este componente pueden ir enlaces o
                          botones:
                          <a href="#">https://ejemplo.buenosaires.gob.ar</a>
                        </p>
                        <button type="button" className="btn btn-outline-link">
                          Ir al sitio web
                        </button>
                      </div>
                    </div>

                    <br />
                    <CodeCopy code={SMType5} />
                  </section>
                </div>
              </article>
            </div>
          )}
        </Scrollspy>
      </div>
    </BoxTemplate>
  );
};

export default StatusMessageDocs;
