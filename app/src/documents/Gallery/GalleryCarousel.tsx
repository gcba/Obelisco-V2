type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

type GalleryCarouselProps = {
  baseId: string;
  images: GalleryImage[];
  variant: 'indicators' | 'thumbnails';
};

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ baseId, images, variant }) => {
  const modalId = `${baseId}Modal`;
  const modalCarouselId = `${baseId}ModalControls`;
  const previousButton = (
    <button className="carousel-control-prev" type="button" data-bs-target={`#${baseId}`} data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Anterior</span>
    </button>
  );
  const nextButton = (
    <button className="carousel-control-next" type="button" data-bs-target={`#${baseId}`} data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Siguiente</span>
    </button>
  );
  const indicators = (
    <div className="carousel-indicators">
      {images.map((image, index) => (
        <button
          key={image.id}
          type="button"
          data-bs-target={`#${baseId}`}
          data-bs-slide-to={index}
          className={index === 0 ? 'active' : ''}
          aria-current={index === 0 ? 'true' : undefined}
          aria-label={`Ver imagen ${index + 1}`}
          style={variant === 'thumbnails' ? { backgroundImage: `url(${image.src})` } : undefined}
        ></button>
      ))}
    </div>
  );

  return (
    <>
      <div id={baseId} className={`carousel slide gallery-carousel gallery-carousel-${variant}`}>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={image.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="gallery-carousel-image">
                <img src={image.src} className="d-block" alt={image.alt} />
                <button
                  type="button"
                  className="gallery-carousel-expand"
                  data-bs-toggle="modal"
                  data-bs-target={`#${modalId}`}
                  aria-label={`Ampliar imagen ${index + 1} de ${images.length}`}
                >
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    open_in_full
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-carousel-navigation">
          {variant === 'thumbnails' ? (
            <>
              {previousButton}
              {indicators}
              {nextButton}
            </>
          ) : (
            <>
              {indicators}
              <div className="gallery-carousel-controls">
                {previousButton}
                {nextButton}
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className="modal modal-carousel"
        data-bs-backdrop="static"
        tabIndex={-1}
        role="dialog"
        id={modalId}
        aria-label="Galería ampliada"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <a href="#" className="modal-carousel-close" data-bs-dismiss="modal">
              Cerrar ventana
            </a>
            <div id={modalCarouselId} className="carousel slide" data-bs-interval="false">
              <div className="carousel-inner">
                {images.map((image, index) => (
                  <div key={image.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={image.src} className="d-block w-100" alt={image.alt} />
                    <div className="carousel-caption">
                      <div className="row mb-4">
                        <div className="col text-end">
                          <span className="text-xs">
                            Imagen {index + 1}/{images.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${modalCarouselId}`}
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#${modalCarouselId}`}
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryCarousel;
