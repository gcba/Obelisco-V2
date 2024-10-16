/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

import { componentsPages, formsPages, organismsPages, stylesPages } from '@/components/Layout/main-layout';

export default function ComponentsPage() {
  return (
    <>
      <h1 className="visually-hidden">Secciones de la libreria de componentes Obelisco v2</h1>

      {/* Estilos */}
      <div className="mb-5 bg-light p-3 rounded-4">
        <p className="headline-lg fw-bold d-flex">
          <span className="material-symbols-rounded o-icon me-2" aria-hidden="true">
            palette
          </span>
          Estilos
        </p>
        <div className="card-items-3">
          {stylesPages.map(({ text, url, id, imgSrc, description }) => (
            <div className="col" key={id}>
              <div className="card">
                <img
                  className="card-img"
                  src={imgSrc || 'https://gcba.github.io/img/card/homev1.svg'}
                  alt={`Imagen ilustrativa de la ${text} del sistema de diseño de obelisco.`}
                />
                <div className="card-body">
                  <h3 className="card-title">
                    <Link href={url} className="card-title-link">
                      {text}
                    </Link>
                  </h3>
                  <p className="card-text">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Componentes */}
      <div className="mb-5 bg-light p-3 rounded-4">
        <p className="headline-lg fw-bold d-flex">
          <span className="material-symbols-rounded o-icon me-2" aria-hidden="true">
            code_blocks
          </span>
          Componentes
        </p>
        <div className="card-items-3">
          {componentsPages.map(({ text, url, id, imgSrc, description }) => (
            <div className="col" key={id}>
              <div className="card">
                <img
                  className="card-img"
                  src={imgSrc || 'https://gcba.github.io/img/card/homev1.svg'}
                  alt={`Imagen ilustrativa del componente ${text}`}
                />
                <div className="card-body">
                  <h3 className="card-title">
                    <Link href={url} className="card-title-link">
                      {text}
                    </Link>
                  </h3>
                  <p className="card-text">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Formularios */}
      <div className="mb-5 bg-light p-3 rounded-4">
        <p className="headline-lg fw-bold d-flex">
          <span className="material-symbols-rounded o-icon me-2" aria-hidden="true">
            view_list
          </span>
          Formularios
        </p>
        <div className="card-items-3">
          {formsPages.map(({ text, url, id, imgSrc, description }) => (
            <div className="col" key={id}>
              <div className="card">
                <img
                  className="card-img"
                  src={imgSrc || 'https://gcba.github.io/img/card/homev1.svg'}
                  alt={`Imagen ilustrativa del componente ${text}`}
                />
                <div className="card-body">
                  <h3 className="card-title">
                    <Link href={url} className="card-title-link">
                      {text}
                    </Link>
                  </h3>
                  <p className="card-text">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Organismos */}
      <div className="mb-5 bg-light p-3 rounded-4">
        <p className="headline-lg fw-bold">Organismos</p>
        <div className="card-items-3">
          {organismsPages.map(({ text, url, id, imgSrc, description }) => (
            <div className="col" key={id}>
              <div className="card">
                <img
                  className="card-img"
                  src={imgSrc || 'https://gcba.github.io/img/card/homev1.svg'}
                  alt={`Imagen ilustrativa del organismo ${text}`}
                />
                <div className="card-body">
                  <h3 className="card-title">
                    <Link href={url} className="card-title-link">
                      {text}
                    </Link>
                  </h3>
                  <p className="card-text">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
