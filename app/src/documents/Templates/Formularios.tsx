'use client';
// import Image from 'next/image';
import { basePath } from '@/utils';
import Link from 'next/link';
import React from 'react';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

export default function Formularios() {
  const sections = [
    {
      title: 'Tipos de formularios',
      content: (
        <>
          <div className="container">
            <div className="max-items-2">
              <div className="col">
                <a
                  href={`${basePath}/templates/formularios/formulario-pagina-unica`}
                  className="list-group-item item-sm"
                >
                  <div className="access-content">
                    <span className="access-title">Formulario de página única</span>
                    <p className="access-text">
                      Se usa en páginas simples para ingresar datos que no requieren una continuidad de pasos.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col">
                <a
                  href={`${basePath}/templates/formularios/formulario-multipagina`}
                  className="list-group-item item-sm"
                >
                  <div className="access-content">
                    <span className="access-title">Formulario multipágina</span>
                    <p className="access-text">
                      Se usa en trámites donde se requiere completar varios pasos antes de enviar el formulario.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <nav aria-label="Navegación secundaria">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/templates">Plantillas</Link>
          </li>
        </ol>
      </nav>
      <ComponentHeader
        title="Formularios"
        description={[
          `
          Permiten a las personas interactuar con el sistema, ingresando, editando o confirmando información. Se usan para registrarse en un servicio, programa o beneficio, para solicitar turnos o iniciar sesión en una cuenta.
          `,
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="none" />
    </>
  );
}
