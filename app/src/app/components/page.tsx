'use client';

import Link from 'next/link';

import {
  componentsPages,
  formsPages,
  organismsPages,
  stylesPages,
  templatesPages,
} from '@/components/Layout/main-layout';

export default function ComponentsPage() {
  return (
    <>
      <h1 className="visually-hidden">Secciones de la libreria de componentes Obelisco v2</h1>

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
      <div className="mb-5 bg-light p-3 rounded-4">
        <p className="headline-lg fw-bold d-flex">
          <span className="material-symbols-rounded o-icon me-2" aria-hidden="true">
            code_blocks
          </span>
          Componentes
        </p>
        <div className="access-items-3">
          {componentsPages.map(({ text, url, id }) => (
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
      <div className="mb-5 bg-light p-3 rounded-4">
        <p className="headline-lg fw-bold d-flex">
          <span className="material-symbols-rounded o-icon me-2" aria-hidden="true">
            view_list
          </span>
          Formularios
        </p>
        <div className="access-items-3">
          {formsPages.map(({ text, url, id }) => (
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
      <div className="mb-5 bg-light p-3 rounded-4">
        <p className="headline-lg fw-bold d-flex">
          <span className="material-symbols-rounded o-icon me-2" aria-hidden="true">
            widget_small
          </span>
          Organismos
        </p>
        <div className="access-items-3">
          {organismsPages.map(({ text, url, id }) => (
            <div className="col" key={id}>
              <Link href={url} className="list-group-item item-sm">
                <div className="access-content">
                  <span className="access-title">{text}</span>
                  <p className="access-text">Organismo</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-5 bg-light p-3 rounded-4">
        <p className="headline-lg fw-bold d-flex">
          <span className="material-symbols-rounded o-icon me-2" aria-hidden="true">
            widget_small
          </span>
          Templates
        </p>
        <div className="access-items-3">
          {templatesPages.map(({ text, url, id }) => (
            <div className="col" key={id}>
              <Link href={url} className="list-group-item item-sm">
                <div className="access-content">
                  <span className="access-title">{text}</span>
                  <p className="access-text">Templates</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
