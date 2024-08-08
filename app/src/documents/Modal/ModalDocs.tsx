"use client";
import React, { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from "@/components/Template/Box";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import Divisor from "@/components/Template/Divisor";
import { ModalTypes } from "./code-views";

const SwitchDocs: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  return (
    <BoxTemplate>
      <div className="col-12">
        <Scrollspy
          sectionRefs={[section1Ref, section2Ref, section3Ref, section4Ref]}
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
                    <a href="#section-2">Tipos</a>
                  </li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8 p-0">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Modal</h1>
                    </HeadingTemplate>
                    <MainDescription description="Los modales muestran información importante que las personas usuarias deben reconocer. Aparecen en forma de ventana sobre la interfaz y bloquean el flujo de trabajo hasta que se selecciona una acción." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Tipos</h2>
                    </HeadingTemplate>

                    <div className="row justify-content-between">
                      <div className="col-auto">
                        <button
                          type="button"
                          className="btn btn-primary"
                          // Se cambia 'data-toggle' a 'data-bs-toggle'
                          data-bs-toggle="modal"
                          // Se cambia 'data-target' a 'data-bs-target'
                          data-bs-target="#exampleModal1"
                        >
                          Modal de confirmación
                        </button>
                      </div>
                      <div className="col-auto">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal2"
                        >
                          Modal de peligro
                        </button>
                      </div>
                      <div className="col-auto">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal3"
                        >
                          Modal de reconocimiento
                        </button>
                      </div>
                    </div>

                    {/* Cambios en las clases y atributos de modal */}
                    <div
                      className="modal fade"
                      tabIndex={-1}
                      //  Eliminación del 'role="dialog"' ya que Bootstrap 5 lo maneja automáticamente
                      id="exampleModal1"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered modal-sm"
                        // Eliminación del 'role="document"' ya que no es necesario en Bootstrap 5
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title">¡Importante!</h4>
                          </div>
                          <div className="modal-body">
                            <p>
                              Antes de realizar la ficha de salud, tené en
                              cuenta haber realizado los pasos previos
                              correspondientes.
                            </p>
                          </div>
                          <div className="modal-footer">
                            {/* Se cambia 'data-dismiss' a 'data-bs-dismiss' */}
                            <button
                              type="button"
                              className="btn btn-outline-link"
                              data-bs-dismiss="modal"
                            >
                              Volver atrás
                            </button>
                            <button type="button" className="btn btn-secondary">
                              Continuar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      tabIndex={-1}
                      id="exampleModal2"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-sm">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title">Eliminar documento</h4>
                          </div>
                          <div className="modal-body">
                            <p>
                              El documento que seleccionaste será eliminado.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              data-bs-dismiss="modal"
                            >
                              Cancelar
                            </button>
                            <button type="button" className="btn btn-danger">
                              Eliminar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      tabIndex={-1}
                      id="exampleModal3"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-sm">
                        <div className="modal-content">
                          <div className="modal-header unbordered">
                            <small>CARGA EXITOSA</small>
                            <h4 className="modal-title">
                              Los archivos se cargaron correctamente
                            </h4>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Aceptar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />

                    <CodeCopy code={ModalTypes} />
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

export default SwitchDocs;
