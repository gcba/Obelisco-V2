'use client';

import Image from 'next/image';
import { useState } from 'react';

import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { GALLERY_INTERACTIVE } from './code-views';

const GalleryGrid: React.FC<{ images: string[]; maxColumns: number }> = ({ images, maxColumns }) => (
  <>
    <div className={`gallery-grid gallery-max-${maxColumns}`}>
      {images.map((src, index) => (
        <div className="gallery-grid-item" key={index}>
          <Image src={src} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
    </div>
  </>
);

const generateCode = (numImages: number): string => {
  let imagesCode = '';
  for (let i = 1; i <= numImages; i++) {
    imagesCode += `
    <a
      href="gallery/${i}.jpg"
      className="gallery-grid-item"
      data-bs-toggle="modal"
      data-bs-target="#modalGallery"
    >
      <Image 
        src="https://gcba.github.io/Obelisco/gallery/${i}.jpg" 
        alt="Texto alternativo de la imagen"
      />
    </a>
    `;
  }
  return `<div className="gallery-grid gallery-max-${Math.min(numImages, 7)}">
    ${imagesCode}
  </div>`;
};

const GalleryDocs: React.FC = () => {
  const [selectedGrid, setSelectedGrid] = useState(2);

  const images = [
    'https://gcba.github.io/Obelisco/gallery/1.jpg',
    'https://gcba.github.io/Obelisco/gallery/2.jpg',
    'https://gcba.github.io/Obelisco/gallery/3.jpg',
    'https://gcba.github.io/Obelisco/gallery/4.jpg',
    'https://gcba.github.io/Obelisco/gallery/5.jpg',
    'https://gcba.github.io/Obelisco/gallery/3.jpg',
    'https://gcba.github.io/Obelisco/gallery/4.jpg',
  ];

  return (
    <DocumentationTemplate
      sections={[
        {
          title: 'Galería',
          content: (
            <MainDescription description="Descubre nuestra galería de imágenes. Navega a través de una cuadrícula de fotos interactivas y de una vista ampliada con nuestro carrusel." />
          ),
          h1: true,
        },
        {
          id: 'section-1',
          title: 'Grillas',
          content: (
            <>
              <CodeBox codeHTML={generateCode(selectedGrid + 1)}>
                <div className="container">
                  <div className="row justify-content-center">
                    <h5 className="mb-3 text-center">Cantidad de imágenes:</h5>
                    <div className="col-12 col-md-10 text-center">
                      <div className="btn-group mb-4" role="group" aria-label="Grillas de imágenes">
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                          <button
                            key={num}
                            type="button"
                            className={`btn ${selectedGrid === num - 1 ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setSelectedGrid(num - 1)}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                      <GalleryGrid images={images.slice(0, selectedGrid + 1)} maxColumns={selectedGrid + 1} />
                    </div>
                  </div>
                </div>
              </CodeBox>
            </>
          ),
        },
        {
          id: 'section-2',
          title: 'Interactiva',
          content: (
            <CodeBox codeHTML={GALLERY_INTERACTIVE}>
              <div className="container">
                <div className="row">
                  <div className="p-0 col-12 col-md-8 offset-md-2">
                    <div className="gallery-grid gallery-max-3">
                      <a
                        href="gallery/1.jpg"
                        className="gallery-grid-item"
                        data-bs-toggle="modal"
                        data-bs-target="#modalGallery"
                      >
                        <Image
                          src="https://gcba.github.io/Obelisco/gallery/1.jpg"
                          alt="Texto alternativo de la imagen"
                        />
                      </a>
                      <a
                        href="gallery/2.jpg"
                        className="gallery-grid-item"
                        data-bs-toggle="modal"
                        data-bs-target="#modalGallery"
                      >
                        <Image
                          src="https://gcba.github.io/Obelisco/gallery/2.jpg"
                          alt="Texto alternativo de la imagen"
                        />
                      </a>
                      <a
                        href="gallery/3.jpg"
                        className="gallery-grid-item"
                        data-bs-toggle="modal"
                        data-bs-target="#modalGallery"
                      >
                        <Image
                          src="https://gcba.github.io/Obelisco/gallery/3.jpg"
                          alt="Texto alternativo de la imagen"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal modal-carousel"
                data-bs-backdrop="static"
                tabIndex={-1}
                role="dialog"
                id="modalGallery"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <a href="#" className="modal-carousel-close" data-bs-dismiss="modal">
                      Cerrar ventana
                    </a>

                    <div
                      id="modalGalleryControls"
                      className="carousel slide"
                      data-bs-ride="carousel"
                      data-bs-interval="false"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                          <Image
                            src="https://gcba.github.io/Obelisco/gallery/1.jpg"
                            className="d-block w-100"
                            alt="Texto alternativo de la imagen"
                          />
                          <div className="carousel-caption">
                            <div className="row mb-4">
                              <div className="col">
                                <span className="text-xs">Autor de la imagen.</span>
                              </div>
                              <div className="col text-end">
                                <span className="text-xs">Imagen 1/3</span>
                              </div>
                            </div>
                            <h5 className="h2">Título de la imagen 1.</h5>
                            <p>
                              Descripción o epígrafe de la imagen.
                              <br />
                              Recomendamos en este espacio no utilizar más de 2 líneas, para generar una lectura óptima.
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                          <Image
                            src="https://gcba.github.io/Obelisco/gallery/2.jpg"
                            className="d-block w-100"
                            alt="Texto alternativo de la imagen"
                          />
                          <div className="carousel-caption">
                            <div className="row mb-4">
                              <div className="col">
                                <span className="text-xs">Autor de la imagen.</span>
                              </div>
                              <div className="col text-end">
                                <span className="text-xs">Imagen 2/3</span>
                              </div>
                            </div>
                            <h5 className="h2">Título de la imagen 2.</h5>
                            <p>
                              Descripción o epígrafe de la imagen.
                              <br />
                              Recomendamos en este espacio no utilizar más de 2 líneas, para generar una lectura óptima.
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                          <Image
                            src="https://gcba.github.io/Obelisco/gallery/3.jpg"
                            className="d-block w-100"
                            alt="Texto alternativo de la imagen"
                          />
                          <div className="carousel-caption">
                            <div className="row mb-4">
                              <div className="col">
                                <span className="text-xs">Autor de la imagen.</span>
                              </div>
                              <div className="col text-end">
                                <span className="text-xs">Imagen 3/3</span>
                              </div>
                            </div>
                            <h5 className="h2">Título de la imagen 3.</h5>
                            <p>
                              Descripción o epígrafe de la imagen.
                              <br />
                              Recomendamos en este espacio no utilizar más de 2 líneas, para generar una lectura óptima.
                            </p>
                          </div>
                        </div>
                      </div>

                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#modalGalleryControls"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#modalGalleryControls"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CodeBox>
          ),
        },
      ]}
    />
  );
};

export default GalleryDocs;
