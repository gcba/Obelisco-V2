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
        <div className="access-items-3">
          {stylesPages.map(({ text, url, id }) => (
            <div className="col" key={id}>
              <Link href={url} className="list-group-item item-sm">
                <div className="access-content">
                  <span className="access-title">{text}</span>
                </div>
              </Link>
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
        <div className="max-items-3" >
          {componentsPages.map(({ text, url, id }) => (
            <Link href={url} key={id} className="col">
              <div className='card'>
                <img className="card-img" src={"https://ngx-obelisco-demo.web.app/assets/component-cards/Accesos.svg"} alt="descripción de imagen" />
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="#" className="card-title-link">{text}</a>
                  </h3>
                </div>
              </div>
            </Link>
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
        <div className="max-items-3" >
          {formsPages.map(({ text, url, id }) => (
            <Link href={url} key={id} className="col">
              <div className='card'>
                <img className="card-img" src={"https://ngx-obelisco-demo.web.app/assets/component-cards/Accesos.svg"} alt="descripción de imagen" />
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="#" className="card-title-link">{text}</a>
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Organismos */}
      <div className="mb-5 bg-light p-3 rounded-4">
        <p className="headline-lg fw-bold">Organismos</p>
        <div className="max-items-3" >
          {organismsPages.map(({ text, url, id }) => (
            <Link href={url} key={id} className="col">
              <div className='card'>
                <img className="card-img" src={"https://ngx-obelisco-demo.web.app/assets/component-cards/Accesos.svg"} alt="descripción de imagen" />
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="#" className="card-title-link">{text}</a>
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
