'use client';
import Link from 'next/link';
import React from 'react';

import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

const TemplatesComponents: React.FC = () => {
  const SECTION_UX = [
    {
      title: 'Áreas de Gobierno',
      firstTitle: true,
      content: (
        <>
          <p>
            Página principal de un ministerio, secretaría o subsecretaría. Es la puerta de acceso a los demás tipos de
            contenido (artículos, páginas, páginas de libro, etc.)
          </p>

          <div className="container">
            <div className="max-items-2 mb-5 pt-3">
              <div className="col">
                <Link href="/templates/pagina-area-uno" className="list-group-item">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    language
                  </span>
                  <div className="access-content">
                    <span className="access-title">Guía de uso</span>
                  </div>
                </Link>
              </div>
              <div className="col">
                <a
                  href="https://gcba.github.io/obelisco-demo/pagina_area/area_de_gobierno/op1.html"
                  target="_blank"
                  className="list-group-item"
                >
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    language
                  </span>
                  <div className="access-content">
                    <span className="access-title">Página de primer nivel</span>
                  </div>
                </a>
              </div>

              <div className="col">
                <Link href="/templates/pagina-area-dos" className="list-group-item">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    language
                  </span>
                  <div className="access-content">
                    <span className="access-title">Guía de uso</span>
                  </div>
                </Link>
              </div>
              <div className="col">
                <a
                  href="https://gcba.github.io/obelisco-demo/pagina_area/area_de_gobierno/op2.html"
                  className="list-group-item"
                  target="_blank"
                >
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    language
                  </span>
                  <div className="access-content">
                    <span className="access-title">Página de segundo nivel</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Página Simple',
      content: (
        <>
          <p className="text-md">
            Las usamos para transmitir información estática de menor jerarquía, en comparación a una página de área, y
            con menor cantidad de contenido.
          </p>
          <div className="container">
            <div className="max-items-2">
              <div className="col">
                <a
                  href="https://gcba.github.io/obelisco-demo/pagina_simple/pagina_simple_op5/index.html"
                  className="list-group-item"
                >
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    language
                  </span>
                  <div className="access-content">
                    <span className="access-title">Página simple</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Página de libro',
      content: (
        <>
          <p className="text-md">
            Las usamos para agrupar información sobre un mismo tema en subtemas. Los índices y las subpáginas deben
            tener como mínimo 2 párrafos de 5 líneas de información.
          </p>
          <div className="container">
            <div className="max-items-2">
              <div className="col">
                <a href="https://gcba.github.io/obelisco-demo/pagina_libro/index.html" className="list-group-item">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    language
                  </span>
                  <div className="access-content">
                    <span className="access-title">Página de libro</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Trámites',
      content: (
        <>
          <p className="text-md">
            Página que usamos para todos los trámites que ofrece el Gobierno de la Ciudad de Buenos Aires.
          </p>
          <div className="container">
            <div className="max-items-2">
              <div className="col">
                <Link href="/templates/pagina-tramites" className="list-group-item">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    language
                  </span>
                  <div className="access-content">
                    <span className="access-title">Guía de uso</span>
                  </div>
                </Link>
              </div>
              <div className="col">
                <a href="https://gcba.github.io/obelisco-demo/pagina_libro/index.html" className="list-group-item">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    language
                  </span>
                  <div className="access-content">
                    <span className="access-title">Página de trámites</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Noticias',
      content: (
        <>
          <p className="text-md">
            Las utilizamos para comunicar noticias y novedades. Este tipo de página debe actualizarse al menos 1 vez por
            semana.
          </p>

          <div className="container">
            <div className="max-items-2">
              <div className="col">
                <a href="https://gcba.github.io/obelisco-demo/pagina_libro/index.html" className="list-group-item">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    language
                  </span>
                  <div className="access-content">
                    <span className="access-title">Página de libro</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Formularios',
      content: (
        <>
          <p className="text-md mb-4">
            Permiten a las personas interactuar con el sistema, ingresando, editando o confirmando información. Se usan
            para registrarse en un servicio, programa o beneficio, para solicitar turnos o iniciar sesión en una cuenta.
          </p>

          <div className="container">
            <div className="max-items-2">
              <div className="col">
                <a href="https://gcba.github.io/obelisco-demo/pagina_libro/index.html" className="list-group-item">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    language
                  </span>
                  <div className="access-content">
                    <span className="access-title">Formulario de página única</span>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://gcba.github.io/obelisco-demo/pagina_libro/index.html" className="list-group-item">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    language
                  </span>
                  <div className="access-content">
                    <span className="access-title">Formulario multipágina</span>
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
      <ComponentHeader
        title="Construir una plantilla"
        description={[
          `
          Las plantillas son combinaciones de organismos y componentes que sirven como ejemplos y como guía para generar contenido. Son un buen punto de partida para construir nuevas páginas utilizando Obelisco como sistema de diseño.
          `,
        ]}
      />
      <Tabs sectionUx={SECTION_UX} />
    </>
  );
};

export default TemplatesComponents;
