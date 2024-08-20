import CodeCopy from "@/components/CodeBox";
import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import MainDescription from "@/components/Template/MainDescription";

import { GalleryInstitution } from "./code-views";

const GalleryGrid: React.FC<{ images: string[]; maxColumns: number }> = ({ images, maxColumns }) => (
  <>
    <h4 className="mb-2">Cantidad de imágenes: {images.length}</h4>
    <div className={`gallery-grid gallery-max-${maxColumns} mb-5`}>
      {images.map((src, index) => (
        <div className="gallery-grid-item" key={index}>
          <img src={src} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
    </div>
    <hr className="my-5" />
  </>
);

const GalleryDocs: React.FC = () => {
  const images = [
    "https://gcba.github.io/Obelisco/gallery/1.jpg",
    "https://gcba.github.io/Obelisco/gallery/2.jpg",
    "https://gcba.github.io/Obelisco/gallery/3.jpg",
    "https://gcba.github.io/Obelisco/gallery/4.jpg",
    "https://gcba.github.io/Obelisco/gallery/5.jpg",
    "https://gcba.github.io/Obelisco/gallery/1.jpg",
    "https://gcba.github.io/Obelisco/gallery/2.jpg",
  ];


  const sections = [
    {
      id: "section-1",
      title: "Galeria",
      content: (
        <MainDescription description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rerum voluptate corrupti, cumque molestias ducimus quae dolores eligendi obcaecati tempore commodi natus impedit autem! Ullam, quis possimus. Atque, nulla tempora." />
      ),
      h1: true,
    },
    {
      id: "section-2",
      title: "Demo",
      content: (
        <>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 offset-md-2">
                <div className="storybook__container-grid">
                  <div className="gallery-grid gallery-max-3">
                    {/* <!-- Cambiado 'data-toggle' a 'data-bs-toggle' --> */}
                    {/* <!-- Cambiado 'data-target' a 'data-bs-target' --> */}
                    <a
                      href="gallery/1.jpg"
                      className="gallery-grid-item"
                      data-bs-toggle="modal"
                      data-bs-target="#modalGallery"
                    >
                      <img src="https://gcba.github.io/Obelisco/gallery/1.jpg" alt="Texto alternativo de la imagen" />
                    </a>
                    <a
                      href="gallery/2.jpg"
                      className="gallery-grid-item"
                      data-bs-toggle="modal"
                      data-bs-target="#modalGallery"
                    >
                      <img src="https://gcba.github.io/Obelisco/gallery/2.jpg" alt="Texto alternativo de la imagen" />
                    </a>
                    <a
                      href="gallery/3.jpg"
                      className="gallery-grid-item"
                      data-bs-toggle="modal"
                      data-bs-target="#modalGallery"
                    >
                      <img src="https://gcba.github.io/Obelisco/gallery/3.jpg" alt="Texto alternativo de la imagen" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Cambiado 'data-backdrop' a 'data-bs-backdrop' --> */}
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
                  {/* <!-- Añadido 'slide' para la transición --> */}
                  {/* <!-- Cambiado 'data-ride' a 'data-bs-ride' --> */}
                  {/* <!-- Cambiado 'data-interval' a 'data-bs-interval' --> */}
                  <div
                    id="modalGalleryControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="false"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active" data-bs-interval="3000">
                        <img
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
                            Recomendamos en este espacio no utilizar más de 2 líneas, para
                            generar una lectura óptima.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item" data-bs-interval="3000">
                        <img
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
                            Recomendamos en este espacio no utilizar más de 2 líneas, para
                            generar una lectura óptima.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item" data-bs-interval="3000">
                        <img
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
                            Recomendamos en este espacio no utilizar más de 2 líneas, para
                            generar una lectura óptima.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Cambiado 'sr-only' a 'visually-hidden' --> */}
                    {/* !-- Cambiado 'data-slide' a 'data-bs-slide' --> */}
                    {/* <!-- Cambiado 'data-target' a 'data-bs-target' --> */}
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
          </div>
          <br />
          <CodeCopy code={GalleryInstitution} />
        </>
      ),
    },
    {
      id: "section-3",
      title: "Grillas",
      content: (
        <>
          {images.map((_, index) => (
            <GalleryGrid key={index} images={images.slice(0, index + 1)} maxColumns={index + 1} />
          ))}
          <br />
          <CodeCopy code={GalleryInstitution} />
        </>
      ),
    },
   
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default GalleryDocs;
