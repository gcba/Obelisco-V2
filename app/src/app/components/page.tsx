'use client';

import Link from 'next/link';

import { componentsPages, formsPages, organismsPages, stylesPages } from '@/components/Layout/main-layout';

export default function ComponentsPage() {
  return (
    <>
      <h1 className="visually-hidden">Secciones de la libreria de componentes Obelisco v2</h1>
      <div className="mb-5 bg-light p-3 rounded-4">
        <p className="headline-lg fw-bold">Estilos</p>
        <div className="access-items-3">
          {stylesPages.map(({ text, url, id }) => (
            <div className="col" key={id}>
              <Link href={url} className="list-group-item item-sm">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  palette
                </span>
                <div className="access-content">
                  <span className="access-title">{text}</span>
                  <p className="access-text">Estilos</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-5 bg-light p-3 rounded-4">
        <p className="headline-lg fw-bold">Componentes</p>
        <div className="access-items-3">
          {componentsPages.map(({ text, url, id }) => (
            <div className="col" key={id}>
              <Link href={url} className="list-group-item item-sm">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  code_blocks
                </span>
                <div className="access-content">
                  <span className="access-title">{text}</span>
                  <p className="access-text">Componente</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-5 bg-light p-3 rounded-4">
        <p className="headline-lg fw-bold">Formularios</p>
        <div className="access-items-3">
          {formsPages.map(({ text, url, id }) => (
            <div className="col" key={id}>
              <Link href={url} className="list-group-item item-sm">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  view_list
                </span>
                <div className="access-content">
                  <span className="access-title">{text}</span>
                  <p className="access-text">Formulario</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Eliminar clase d-none al agregar organismos en la segunda entrega */}
      <div className="mb-5 bg-light p-3 rounded-4 d-none">
        <p className="headline-lg fw-bold">Organismos</p>
        <div className="access-items-3">
          {organismsPages.map(({ text, url, id }) => (
            <div className="col" key={id}>
              <Link href={url} className="list-group-item item-sm">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  cards
                </span>
                <div className="access-content">
                  <span className="access-title">{text}</span>
                  <p className="access-text">Organismo</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
