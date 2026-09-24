'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';
// import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
// import MainDescription from '@/components/Template/MainDescription';

import { GALLERY_CAROUSEL_THUMBNAILS, GALLERY_CAROUSEL_THUMBNAILS_JS, GALLERY_INTERACTIVE } from './code-views';
const basePath = '/Obelisco-V2';

export const DATA_GALERY = [
  {
    id: 1,
    src: 'https://gcba.github.io/Obelisco/gallery/1.jpg',
    href: 'gallery/1.jpg',
    alt: 'Texto alternativo de la imagen',
  },
  {
    id: 2,
    src: 'https://gcba.github.io/Obelisco/gallery/2.jpg',
    href: 'gallery/2.jpg',
    alt: 'Texto alternativo de la imagen',
  },
  {
    id: 3,
    src: 'https://gcba.github.io/Obelisco/gallery/3.jpg',
    href: 'gallery/3.jpg',
    alt: 'Texto alternativo de la imagen',
  },
];

const DATA_GALLERY_CAROUSEL_1 = [
  ...DATA_GALERY,
  {
    id: 4,
    src: `${basePath}/images/galeria/galeria_323_173.svg`,
    href: 'gallery/4.jpg',
    alt: 'Texto alternativo de la imagen',
  },
  {
    id: 5,
    src: `${basePath}/images/galeria/galeria_728_384.svg`,
    href: 'gallery/5.jpg',
    alt: 'Texto alternativo de la imagen',
  },
  {
    id: 6,
    src: `${basePath}/images/galeria/galeria_941_563.svg`,
    href: 'gallery/1.jpg',
    alt: 'Texto alternativo de la imagen',
  },
  {
    id: 7,
    src: `${basePath}/images/galeria/galeria_1278_785.svg`,
    href: 'gallery/1.jpg',
    alt: 'Texto alternativo de la imagen',
  },
  {
    id: 8,
    src: `${basePath}/images/galeria/galeria_728_384.svg`,
    href: 'gallery/1.jpg',
    alt: 'Texto alternativo de la imagen',
  },
  {
    id: 9,
    src: 'https://gcba.github.io/Obelisco/gallery/1.jpg',
    href: 'gallery/1.jpg',
    alt: 'Texto alternativo de la imagen',
  },
  {
    id: 10,
    src: 'https://gcba.github.io/Obelisco/gallery/3.jpg',
    href: 'gallery/1.jpg',
    alt: 'Texto alternativo de la imagen',
  },
];

const GalleryGrid: React.FC<{ images: string[]; maxColumns: number }> = ({ images, maxColumns }) => (
  <>
    <div className={`gallery-grid gallery-max-${maxColumns}`}>
      {images.map((src, index) => (
        <div className="gallery-grid-item" key={index}>
          <img src={src} alt={`Imagen ${index + 1}`} />
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
      class="gallery-grid-item"
      data-bs-toggle="modal"
      data-bs-target="#modalGallery"
    >
      <img 
        src="https://gcba.github.io/Obelisco/gallery/${i}.jpg" 
        alt="Texto alternativo de la imagen"
      />
    </a>
    `;
  }
  return `<div class="gallery-grid gallery-max-${Math.min(numImages, 7)}">
    ${imagesCode}
  </div>`;
};

// const ZoomContainer = ({ children }: React.PropsWithChildren) => <div style={{ zoom: 0.5 }}>{children}</div>;

const GalleryDocs: React.FC = () => {
  const [selectedGrid, setSelectedGrid] = useState(2);

  useEffect(() => {
    const mainCarousel = document.getElementById('galleryCarousel');
    const modalCarousel = document.getElementById('modalGalleryControls1');
    const modal = document.getElementById('modalGallery1');
    const counter = modalCarousel?.querySelector('.gallery-image-counter');
    const total = modalCarousel?.querySelectorAll('.carousel-item').length;

    if (counter) counter.textContent = `Imagen 1/${total}`;

    const updateCounter = (event: Event) => {
      const { to } = event as Event & { to: number };
      if (counter) counter.textContent = `Imagen ${to + 1}/${total}`;
    };

    const goToSlide = (carousel: HTMLElement | null, index: number) => {
      carousel?.querySelector<HTMLButtonElement>(`[data-bs-slide-to="${index}"]`)?.click();
    };

    const syncModal = () => {
      const slides = mainCarousel?.querySelectorAll('.carousel-item');
      const activeIndex = slides ? Array.from(slides).findIndex((slide) => slide.classList.contains('active')) : 0;
      goToSlide(modalCarousel, activeIndex);
    };

    const syncMain = (event: Event) => {
      const { to } = event as Event & { to: number };
      goToSlide(mainCarousel, to);
    };

    modal?.addEventListener('show.bs.modal', syncModal);
    modalCarousel?.addEventListener('slid.bs.carousel', syncMain);
    modalCarousel?.addEventListener('slid.bs.carousel', updateCounter);

    return () => {
      modal?.removeEventListener('show.bs.modal', syncModal);
      modalCarousel?.removeEventListener('slid.bs.carousel', syncMain);
      modalCarousel?.removeEventListener('slid.bs.carousel', updateCounter);
    };
  }, []);

  const images = [
    'https://gcba.github.io/Obelisco/gallery/1.jpg',
    'https://gcba.github.io/Obelisco/gallery/2.jpg',
    'https://gcba.github.io/Obelisco/gallery/3.jpg',
    'https://gcba.github.io/Obelisco/gallery/4.jpg',
    'https://gcba.github.io/Obelisco/gallery/5.jpg',
    'https://gcba.github.io/Obelisco/gallery/3.jpg',
    'https://gcba.github.io/Obelisco/gallery/4.jpg',
  ];

  const SECTIONS_DEV = [
    {
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
      title: 'Interactiva',
      content: (
        <CodeBox codeHTML={GALLERY_INTERACTIVE}>
          <div className="container">
            <div className="row">
              <div className="p-0 col-12 col-md-8 offset-md-2">
                <div className="gallery-grid gallery-max-3">
                  {/* cada imagen es un enlace: cuando se hace click acá (a), abrir el elemento con el id#modalGallery */}
                  {DATA_GALERY.map((d) => (
                    <a
                      key={d.id}
                      href={d.href}
                      className="gallery-grid-item"
                      data-bs-toggle="modal"
                      data-bs-target="#modalGallery"
                    >
                      <img src={d.src} alt={d.alt} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* este es el elemento con el id modalGallery */}
          {/* data-bs-backdrop="static - hace que el usuario no pueda cerrar el modal haciendo click afuera del modal. */}
          <div className="modal modal-carousel" data-bs-backdrop="static" tabIndex={-1} role="dialog" id="modalGallery">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <a href="#" className="modal-carousel-close" data-bs-dismiss="modal">
                  Cerrar ventana
                </a>
                {/* carousel */}
                {/* el id modalGalleryControls lo usan los controles de siguiente y previo  */}
                {/* data-bs-interval="false", que no deslice automaticamente */}
                <div
                  id="modalGalleryControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="false"
                >
                  <div className="carousel-inner">
                    {DATA_GALERY.map((d, i) => (
                      <div key={d.id} className={`carousel-item ${i === 0 ? 'active' : ''} `} data-bs-interval="3000">
                        <img
                          src={d.src}
                          key={d.id}
                          // href={d.href}
                          className="d-block gallery-grid-item"
                          data-bs-toggle="modal"
                          data-bs-target="#modalGallery"
                          alt={d.alt}
                        />
                        <div className="carousel-caption">
                          <div className="row mb-4">
                            {/* <div className="col">
                              <span className="text-xs">Autor de la imagen.</span>
                            </div> */}
                            <div className="col text-end">
                              <span className="text-xs">Imagen {d.id}/3</span>
                            </div>
                          </div>
                          {/* <h5 className="h2">Título de la imagen {d.id}.</h5> */}
                          <p>
                            Descripción o epígrafe de la imagen.
                            <br />
                            Recomendamos en este espacio no utilizar más de 2 líneas, para generar una lectura óptima.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                  </button>
                </div>
                {/* carousel */}
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Galería con miniaturas',
      content: (
        <>
          <CodeBox codeHTML={GALLERY_CAROUSEL_THUMBNAILS} codeJS={GALLERY_CAROUSEL_THUMBNAILS_JS}>
            <div className="container">
              {/* <ZoomContainer> */}
              <div className="row justify-content-center">
                <div className="col-12 d-flex justify-content-center">
                  {/* CARRUSEL default */}
                  <div id="galleryCarousel" className="carousel slide gallery-carousel">
                    <div className="carousel-inner">
                      {DATA_GALLERY_CAROUSEL_1.map((d, i) => (
                        <div key={d.id} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                          <div className="gallery-carousel-image">
                            {/* Imagen */}
                            <img src={d.src} alt={d.alt} />

                            {/* Botón para abrir el modal */}
                            <button
                              type="button"
                              className="gallery-expand-button"
                              data-bs-toggle="modal"
                              data-bs-target="#modalGallery1"
                              aria-label="Ampliar imagen"
                            >
                              <span className="material-symbols-rounded o-icon" aria-hidden="true">
                                zoom_out_map
                              </span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* PAGINADOR / MINIATURA */}
                    <div className="gallery-image-paginator">
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#galleryCarousel"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                        <span className="visually-hidden">Anterior</span>
                      </button>

                      <div className="carousel-indicators gallery-thumbnails">
                        {DATA_GALLERY_CAROUSEL_1.map((image, index) => (
                          <button
                            key={image.id}
                            type="button"
                            className={`gallery-thumbnail ${index === 0 ? 'active' : ''}`}
                            data-bs-target="#galleryCarousel"
                            data-bs-slide-to={index}
                            aria-current={index === 0 ? 'true' : undefined}
                            aria-label={`Ver imagen ${index + 1}`}
                          >
                            <img src={image.src} alt="" />
                          </button>
                        ))}
                      </div>

                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#galleryCarousel"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>

                        <span className="visually-hidden">Siguiente</span>
                      </button>
                    </div>
                    {/* PAGINADOR / MINIATURA */}
                  </div>
                  {/* CARRUSEL default */}
                </div>
              </div>
              {/* </ZoomContainer> */}
            </div>
            {/* MODAL */}
            <div
              className="modal modal-carousel bg-dark modal-gallery-carousel pe-0"
              data-bs-backdrop="static"
              tabIndex={-1}
              role="dialog"
              id="modalGallery1"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content bg-none">
                  {/* Cerrar modal */}

                  <a href="#" className="modal-carousel-close-dark" data-bs-dismiss="modal">
                    {' '}
                  </a>

                  {/* CARRUSEL DENTRO DEL MODAL */}
                  <div id="modalGalleryControls1" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-inner">
                      {DATA_GALLERY_CAROUSEL_1.map((d, i) => (
                        <div key={d.id} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                          <img src={d.src} className="d-block" alt={d.alt} />
                        </div>
                      ))}
                    </div>

                    {/* info del carrusel */}
                    <div className="carousel-caption mt-0 mb-0">
                      <span className="text-xs gallery-image-counter">Imagen 1/{DATA_GALLERY_CAROUSEL_1.length}</span>

                      <div className="caption-wrapper">
                        <p className="headline-lg">Título</p>
                        <p className="text-md">Descripción</p>
                      </div>
                    </div>
                    {/* info del carrusel */}

                    {/* MINIATURA */}
                    <div className="gallery-image-paginator">
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#modalGalleryControls1"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                        <span className="visually-hidden">Anterior</span>
                      </button>

                      <div className="carousel-indicators gallery-thumbnails">
                        {DATA_GALLERY_CAROUSEL_1.map((image, index) => (
                          <button
                            key={image.id}
                            type="button"
                            className={`gallery-thumbnail ${index === 0 ? 'active' : ''}`}
                            data-bs-target="#modalGalleryControls1"
                            data-bs-slide-to={index}
                            aria-current={index === 0 ? 'true' : undefined}
                            aria-label={`Ver imagen ${index + 1}`}
                          >
                            <img src={image.src} alt="" />
                          </button>
                        ))}
                      </div>

                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#modalGalleryControls1"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>

                        <span className="visually-hidden">Siguiente</span>
                      </button>
                    </div>
                    {/* MINIATURA */}
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL */}
          </CodeBox>
        </>
      ),
    },
  ];

  const SECTION_UX = [
    {
      title: 'Uso',
      firstTitle: true,
      content: (
        <>
          <div className="list-informative">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet">
              <li>Mostrar un conjunto de imágenes relacionadas, por ejemplo fotos de un evento o de un trámite.</li>
              <li>Permitir a la persona usuaria ver el detalle de cada imagen sin salir de la página.</li>
              <li>Ofrecer navegación secuencial entre varias fotografías mediante miniaturas o paginado.</li>
            </ul>
          </div>
          <div className="list-informative" style={{ marginTop: '32px' }}>
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>
                Cuando necesitás mostrar una única imagen sin posibilidad de ampliarla en una vista de detalle: usá el
                componente de imagen simple.
              </li>
              <li>Cuando el contenido a mostrar son documentos o archivos, no fotografías: usá listas o tablas.</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Ejemplos de uso',
      content: (
        <>
          <p className="text-md mb-4">
            La galería admite distintos tipos de contenido visual: fotografías, gráficos o tapas de publicaciones,
            adaptándose sin romper el diseño.
          </p>

          <p className="text-xl fw-semibold mb-2">Fotografía</p>
          <p className="text-md mb-4">Imágenes fotográficas a pantalla completa, el caso de uso más habitual.</p>
          <Image
            src={`${basePath}/images/galeria/galeria_1.svg`}
            alt="Ejemplo de galería con una imagen fotográfica"
            width="728"
            height="386"
            className="img-fluid"
          />

          <p className="text-xl fw-semibold mb-2 mt-4">Imágenes verticales</p>
          <p className="text-md mb-4">
            Las imágenes con otra relación de aspecto, como una tapa de libro, no rompen el diseño.
          </p>
          <Image
            src={`${basePath}/images/galeria/galeria_1_1.svg`}
            alt="Ejemplo de galería con una imagen vertical"
            width="728"
            height="386"
            className="img-fluid"
          />

          <p className="text-xl fw-semibold mb-2 mt-4">Gráficos e ilustraciones</p>
          <p className="text-md mb-4">También admite piezas gráficas o logos, no solo fotografías.</p>
          <Image
            src={`${basePath}/images/galeria/galeria_1_2.svg`}
            alt="Ejemplo de galería con un gráfico o ilustración"
            width="728"
            height="386"
            className="img-fluid"
          />

          <p className="text-xl fw-semibold mb-2 mt-4">Múltiples Fotos = No</p>
          <p className="text-md mb-4">Una sola imagen, sin miniaturas ni controles de paginado.</p>
          <Image
            src={`${basePath}/images/galeria/galeria_1_3.svg`}
            alt="Ejemplo de galería con una sola imagen"
            width="728"
            height="318"
            className="img-fluid"
          />

          <p className="text-xl fw-semibold mb-2 mt-4">Múltiples Fotos = Sí</p>
          <p className="text-md mb-4">
            Varias imágenes con miniaturas y controles de anterior/siguiente para navegar entre ellas.
          </p>
          <Image
            src={`${basePath}/images/galeria/galeria_1_4.svg`}
            alt="Ejemplo de galería con múltiples imágenes"
            width="728"
            height="386"
            className="img-fluid"
          />

          <p className="text-xl fw-semibold mb-2 mt-4">Múltiples Fotos = Sí (pocas imágenes)</p>
          <p className="text-md mb-4">
            Varias imágenes, pero pocas para llenar la fila: las miniaturas se mantienen centradas entre los controles
            de anterior y siguiente. A medida que se agregan imágenes, la fila crece hacia los costados hasta ocupar
            todo el ancho disponible.
          </p>
          <Image
            src={`${basePath}/images/galeria/galeria_1_5.svg`}
            alt="Ejemplo de galería con pocas imágenes"
            width="728"
            height="386"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Tipos',
      content: (
        <>
          <p className="text-md mb-4">
            La galería tiene dos estados: la grilla, que muestra las imágenes embebidas en la página, y la vista
            expandida, que las muestra en un modal a pantalla completa.
          </p>

          <p className="text-xl fw-semibold mb-2">Grilla</p>
          <p className="text-md mb-4">
            Muestra la imagen principal, sus miniaturas y el botón para expandirla, embebida dentro del flujo de la
            página. Si la galería tiene una sola imagen, las miniaturas se ocultan automáticamente.
          </p>
          <Image
            src={`${basePath}/images/galeria/galeria_2.svg`}
            alt="Ejemplo de galería en grilla"
            width="728"
            height="433"
            className="img-fluid"
          />

          <p className="text-xl fw-semibold mb-2 mt-4">Vista expandida</p>
          <p className="text-md mb-4">
            Muestra la imagen seleccionada en un modal a pantalla completa, con su título, descripción, contador y
            navegación entre imágenes.
          </p>
          <Image
            src={`${basePath}/images/galeria/galeria_2_1.svg`}
            alt="Ejemplo de galería en vista expandida"
            width="728"
            height="427"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Contenido',
      content: (
        <>
          <p className="text-md mb-4">
            Se recomienda usar formatos JPG, PNG o WebP optimizados para web. La galería admite imágenes verticales u
            horizontales sin romper el diseño, y un máximo de 15 imágenes.
          </p>

          <p className="text-xl fw-semibold mb-2">Título de la grilla</p>
          <p className="text-md mb-4">
            La grilla se presenta bajo un título que nombra al conjunto de imágenes. Tiene que ser breve y descriptivo,
            y no debe exceder los 80 caracteres. Es opcional: si se incluye y no se personaliza, muestra por defecto
            &quot;Galería de imágenes&quot;. No forma parte del componente: se compone en la página que lo contiene.
          </p>

          <p className="text-xl fw-semibold mb-2">Título y descripción de la imagen</p>
          <p className="text-md mb-4">
            El título de la imagen es opcional, tiene que ser breve y descriptivo, y no debe exceder los 80 caracteres,
            equivalente a 2 líneas de texto en desktop. La descripción aporta información adicional o contexto sobre la
            imagen y no debe exceder los 180 caracteres, equivalente a 3 líneas de texto en desktop. Si se supera el
            límite, el texto se trunca.
          </p>

          <p className="text-xl fw-semibold mb-2">Textos alternativos</p>
          <p className="text-md">
            Cada imagen debe incluir un texto alternativo que describa su contenido: lo utilizan los lectores de
            pantalla y se muestra si la imagen no llega a cargar.
          </p>
        </>
      ),
    },
  ];

  const SPECS = [
    {
      title: 'Anatomía',
      firstTitle: true,
      content: (
        <>
          <p className="text-md mb-4">
            Elementos que componen la galería, tanto en la grilla como en la vista expandida.
          </p>
          <Image
            src={`${basePath}/images/galeria/galeria_3.svg`}
            alt="Anatomía de la galería"
            width="728"
            height="386"
            className="img-fluid"
          />

          <div className="responsive-scroll mt-4 mb-4" tabIndex={0}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="tb-text">
                    Elemento
                  </th>
                  <th scope="col" className="tb-text">
                    Carácter
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Imagen principal</td>
                  <td>
                    Imagen a pantalla completa dentro del grid o del carrusel. Admite formatos JPG, PNG o WebP, y
                    orientación vertical u horizontal.
                  </td>
                </tr>
                <tr>
                  <td>2. Miniaturas y paginador</td>
                  <td>
                    Fila de miniaturas con controles de anterior/siguiente para navegar entre imágenes. Se ocultan
                    automáticamente si la galería tiene una sola imagen.
                  </td>
                </tr>
                <tr>
                  <td>3. Botón de expandir / cerrar</td>
                  <td>
                    Abre la vista expandida (modal) desde la grilla, o la cierra para volver a ella. En la vista
                    expandida se suman el contador de imagen, título y descripción.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Variantes',
      content: (
        <>
          <p className="text-md mb-4">La galería varía según el dispositivo.</p>

          <p className="text-xl fw-semibold mb-2">Grilla: Desktop / Tablet / Mobile</p>
          <p className="text-md mb-4">
            Ajusta la cantidad de miniaturas visibles y el tamaño de la imagen principal según el ancho de pantalla.
          </p>
          <Image
            src={`${basePath}/images/galeria/galeria_4.svg`}
            alt="Variantes de la galería en grilla para desktop, tablet y mobile"
            width="728"
            height="1073"
            className="img-fluid"
          />

          <p className="text-xl fw-semibold mb-2 mt-4">Vista expandida: Desktop / Tablet / Mobile</p>
          <Image
            src={`${basePath}/images/galeria/galeria_4_1.svg`}
            alt="Variantes de la galería expandida para desktop, tablet y mobile"
            width="728"
            height="1144"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Estados',
      content: (
        <>
          <p className="text-md mb-4">
            Estados de interacción de los controles de la galería, tanto en la grilla como en la vista expandida.
          </p>

          <p className="text-xl fw-semibold mb-2">Hover</p>
          <p className="text-md mb-4">
            El control se destaca con un fondo tenue cuando el puntero se posa sobre él. No aplica en dispositivos
            táctiles.
          </p>
          <Image
            src={`${basePath}/images/galeria/galeria_5.svg`}
            alt="Estado hover de los controles de la galería"
            width="728"
            height="105"
            className="img-fluid"
          />

          <p className="text-xl fw-semibold mb-2 mt-4">Focus</p>
          <p className="text-md mb-4">
            El control muestra un anillo de foco visible al recibir el foco del teclado. Es el estado que permite
            recorrer la galería sin mouse.
          </p>
          <Image
            src={`${basePath}/images/galeria/galeria_5_1.svg`}
            alt="Estado focus de los controles de la galería"
            width="728"
            height="105"
            className="img-fluid"
          />

          <p className="text-xl fw-semibold mb-2 mt-4">Deshabilitado</p>
          <p className="text-md mb-4">
            El control se atenúa y deja de responder cuando no hay una imagen a la que avanzar en esa dirección.
          </p>
          <Image
            src={`${basePath}/images/galeria/galeria_5_2.svg`}
            alt="Estado deshabilitado de los controles de la galería"
            width="728"
            height="105"
            className="img-fluid"
          />

          <p className="text-xl fw-semibold mb-2 mt-4">Miniaturas</p>
          <p className="text-md mb-4">
            Cada miniatura combina dos propiedades independientes: si está seleccionada, es decir si es la imagen que se
            muestra en grande, y si tiene el foco del teclado. El ejemplo muestra las cuatro combinaciones posibles.
          </p>
          <Image
            src={`${basePath}/images/galeria/galeria_5_3.svg`}
            alt="Estados de selección y foco de las miniaturas de la galería"
            width="728"
            height="184"
            className="img-fluid"
          />
        </>
      ),
    },
  ];

  const ACCESSIBILITY = [
    {
      title: 'Navegación alternativa',
      firstTitle: true,
      content: (
        <>
          <p className="text-md mb-4">
            La galería se opera completamente con teclado. El foco sigue el orden visual de los controles y se mantiene
            visible en todo momento.
          </p>
          <Image
            src={`${basePath}/images/galeria/galeria_6.svg`}
            alt="Navegación alternativa de la galería"
            width="728"
            height="395"
            className="img-fluid mb-4"
          />

          <span className="badge badge-s-default">Tab</span>
          <p className="text-md mt-2 mb-4">
            Recorre los controles de la galería: anterior, la tira de miniaturas, siguiente y el botón de expandir. La
            tira es una sola parada de tabulación: el foco entra en la miniatura seleccionada.
          </p>

          <span className="badge badge-s-default">Flecha izquierda</span>
          <span className="badge badge-s-default ms-1">Flecha derecha</span>
          <p className="text-md mt-2 mb-4">
            Con el foco dentro de la tira, mueven el foco entre miniaturas sin cambiar la imagen principal. En la vista
            expandida, pasan a la imagen anterior o siguiente.
          </p>

          <span className="badge badge-s-default">Enter</span>
          <span className="badge badge-s-default ms-1">Space</span>
          <p className="text-md mt-2 mb-4">
            Activan el control con foco: muestran la miniatura enfocada como imagen principal, accionan anterior o
            siguiente, o abren la vista expandida.
          </p>

          <span className="badge badge-s-default">Esc</span>
          <p className="text-md mt-2 mb-4">
            Cierra la vista expandida y devuelve el foco a la imagen desde la que se abrió.
          </p>

          <p className="text-xl fw-semibold mb-2">Lectores de pantalla</p>
          <p className="text-md">
            Los botones de navegación incluyen etiquetas como &quot;Anterior&quot; y &quot;Siguiente&quot; para lectores
            de pantalla, y cada imagen requiere su propio texto alternativo.
          </p>
        </>
      ),
    },
    {
      title: 'Criterios WCAG aplicables',
      content: (
        <>
          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.11 Non-Text Contrast (Level AA)
          </a>
          <p>
            La presentación visual de elementos de la interfaz de usuario y objetos gráficos tiene por lo menos una
            relación de contraste de 3:1 con respecto a los colores adyacentes.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.3.1 Info and Relationships (Level A)
          </a>
          <p>
            La información, la estructura y las relaciones transmitidas a través de la presentación pueden determinarse
            mediante programación o están disponibles en el texto.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.3 Contrast (Minimum) (Level AA)
          </a>
          <p>
            La presentación visual de texto y de imágenes de texto tiene una relación de contraste de por lo menos
            4.5:1, excepto textos grandes e imágenes de texto grande que tienen un contraste de por lo menos 3:1, textos
            o imágenes que son parte de un componente inactivo de interfaz de usuario o son pura decoración, o
            logotipos.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.4 Resize Text (Level AA)
          </a>
          <p>
            Excepto por los subtítulos e imágenes de texto, el texto puede redimensionarse hasta un 200 % sin tecnología
            de asistencia, sin pérdida de contenido ni funcionalidad.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.10 Reflow (Level AA)
          </a>
          <p>
            El contenido puede presentarse sin pérdida de información o funcionalidad y sin necesidad de desplazarse en
            dos dimensiones, siempre que el desplazamiento vertical se ajuste a un ancho equivalente a 320 píxeles CSS y
            el desplazamiento horizontal a una altura equivalente a 256 píxeles CSS, excepto en aquellas partes del
            contenido que requieran un diseño bidimensional para su uso o significado.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.1 Keyboard (Level A)
          </a>
          <p>Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.</p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.2 No Keyboard Trap (Level A)
          </a>
          <p>
            Si el foco del teclado puede moverse a un componente de la página utilizando una interfaz de teclado,
            también debe ser posible mover el foco fuera de ese componente usando únicamente la misma interfaz de
            teclado. Si se requiere algo más que las teclas de flecha, tabulador u otros métodos estándar para salir, se
            debe informar al usuario sobre el método necesario para mover el foco.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.3 Focus Order (Level A)
          </a>
          <p>
            Si una página web puede navegarse de forma secuencial y las secuencias de navegación afectan el significado
            o la operación, los componentes enfocables reciben el foco en un orden que preserve el significado y la
            operabilidad.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.7 Focus Visible (Level AA)
          </a>
          <p>
            Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque
            del teclado es visible.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.5.8 Target Size (Minimum) (Level AA)
          </a>
          <p>El tamaño del objetivo para entradas mediante puntero es de al menos 24 por 24 píxeles CSS.</p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 3.2.3 Consistent Navigation (Level AA)
          </a>
          <p>
            Los mecanismos de navegación que se repiten en varias páginas web dentro de un conjunto de páginas aparecen
            en el mismo orden relativo cada vez que se repiten, a menos que el usuario inicie un cambio.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 3.2.4 Consistent Identification (Level AA)
          </a>
          <p>
            Los componentes que tienen la misma funcionalidad dentro de un conjunto de páginas web se identifican de
            manera consistente. Los enlaces que dirigen a un mismo lugar deben tener la misma identificación para no
            generar confusiones.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Galería"
        description="Permite a las personas usuarias explorar un conjunto de imágenes a través de una cuadrícula de miniaturas y una vista ampliada tipo carrusel."
      />
      <Tabs
        sectionUx={SECTION_UX}
        sectionDev={SECTIONS_DEV}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'section-specs',
            sectionContent: SPECS,
          },
          {
            title: 'Accesibilidad',
            id: 'section-accessibility',
            sectionContent: ACCESSIBILITY,
          },
        ]}
      />
    </>
  );
};

export default GalleryDocs;
