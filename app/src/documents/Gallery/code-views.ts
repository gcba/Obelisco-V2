export const GALLERY_INTERACTIVE = `//GRID
<div class="gallery-grid gallery-max-3">
  <a
    href="gallery/1.jpg"
    class="gallery-grid-item"
    data-bs-toggle="modal"
    data-bs-target="#modalGallery"
  >
    <img 
      src="https://gcba.github.io/Obelisco/gallery/1.jpg" 
      alt="Texto alternativo de la imagen" 
    />
  </a>
  <a
    href="gallery/2.jpg"
    class="gallery-grid-item"
    data-bs-toggle="modal"
    data-bs-target="#modalGallery"
  >
    <img 
      src="https://gcba.github.io/Obelisco/gallery/2.jpg" 
      alt="Texto alternativo de la imagen" 
    />
  </a>
  <a
    href="gallery/3.jpg"
    class="gallery-grid-item"
    data-bs-toggle="modal"
    data-bs-target="#modalGallery"
  >
    <img 
      src="https://gcba.github.io/Obelisco/gallery/3.jpg" 
      alt="Texto alternativo de la imagen" 
    />
  </a>
</div>

//CAROUSEL 
<div
  class="modal modal-carousel"
  data-bs-backdrop="static"
  tabindex="-1"
  role="dialog"
  id="modalGallery"
>
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <a href="#" class="modal-carousel-close" data-bs-dismiss="modal">
        Cerrar ventana
      </a>

      <div
        id="modalGalleryControls"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img
              src="https://gcba.github.io/Obelisco/gallery/1.jpg"
              class="d-block w-100"
              alt="Texto alternativo de la imagen"
            />
            <div class="carousel-caption">
              <div class="row mb-4">
                <div class="col">
                  <span class="text-xs">Autor de la imagen.</span>
                </div>
                <div class="col text-end">
                  <span class="text-xs">Imagen 1/3</span>
                </div>
              </div>
              <h5 class="h2">Título de la imagen 1.</h5>
              <p>
                Descripción o epígrafe de la imagen.
                <br />
                Recomendamos en este espacio no utilizar más de 2 líneas, para
                generar una lectura óptima.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img
              src="https://gcba.github.io/Obelisco/gallery/2.jpg"
              class="d-block w-100"
              alt="Texto alternativo de la imagen"
            />
            <div class="carousel-caption">
              <div class="row mb-4">
                <div class="col">
                  <span class="text-xs">Autor de la imagen.</span>
                </div>
                <div class="col text-end">
                  <span class="text-xs">Imagen 2/3</span>
                </div>
              </div>
              <h5 class="h2">Título de la imagen 2.</h5>
              <p>
                Descripción o epígrafe de la imagen.
                <br />
                Recomendamos en este espacio no utilizar más de 2 líneas, para
                generar una lectura óptima.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img
              src="https://gcba.github.io/Obelisco/gallery/3.jpg"
              class="d-block w-100"
              alt="Texto alternativo de la imagen"
            />
            <div class="carousel-caption">
              <div class="row mb-4">
                <div class="col">
                  <span class="text-xs">Autor de la imagen.</span>
                </div>
                <div class="col text-end">
                  <span class="text-xs">Imagen 3/3</span>
                </div>
              </div>
              <h5 class="h2">Título de la imagen 3.</h5>
              <p>
                Descripción o epígrafe de la imagen.
                <br />
                Recomendamos en este espacio no utilizar más de 2 líneas, para
                generar una lectura óptima.
              </p>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#modalGalleryControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#modalGalleryControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  </div>
</div>`;

export const GALLERY_CAROUSEL_THUMBNAILS = `//CAROUSEL CON MINIATURAS
<div
  id="galleryThumbnails"
  class="carousel slide gallery-carousel gallery-carousel-thumbnails"
>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="gallery-carousel-image">
        <img
          src="https://gcba.github.io/Obelisco/gallery/1.jpg"
          class="d-block"
          alt="Texto alternativo de la imagen 1"
        />
        <button
          type="button"
          class="gallery-carousel-expand"
          data-bs-toggle="modal"
          data-bs-target="#galleryThumbnailsModal"
          aria-label="Ampliar imagen 1 de 2"
        >
          <span class="material-symbols-rounded o-icon" aria-hidden="true">
            open_in_full
          </span>
        </button>
      </div>
    </div>
    <div class="carousel-item">
      <div class="gallery-carousel-image">
        <img
          src="https://gcba.github.io/Obelisco/gallery/2.jpg"
          class="d-block"
          alt="Texto alternativo de la imagen 2"
        />
        <button
          type="button"
          class="gallery-carousel-expand"
          data-bs-toggle="modal"
          data-bs-target="#galleryThumbnailsModal"
          aria-label="Ampliar imagen 2 de 2"
        >
          <span class="material-symbols-rounded o-icon" aria-hidden="true">
            open_in_full
          </span>
        </button>
      </div>
    </div>
  </div>

  <div class="gallery-carousel-navigation">
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#galleryThumbnails"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>

    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#galleryThumbnails"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Ver imagen 1"
        style="background-image: url(https://gcba.github.io/Obelisco/gallery/1.jpg)"
      ></button>
      <button
        type="button"
        data-bs-target="#galleryThumbnails"
        data-bs-slide-to="1"
        aria-label="Ver imagen 2"
        style="background-image: url(https://gcba.github.io/Obelisco/gallery/2.jpg)"
      ></button>
    </div>

    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#galleryThumbnails"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>
</div>

//MODAL
<div
  class="modal modal-carousel"
  data-bs-backdrop="static"
  tabindex="-1"
  role="dialog"
  id="galleryThumbnailsModal"
  aria-label="Galería ampliada"
>
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <a href="#" class="modal-carousel-close" data-bs-dismiss="modal">
        Cerrar ventana
      </a>
      <div
        id="galleryThumbnailsModalControls"
        class="carousel slide"
        data-bs-interval="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://gcba.github.io/Obelisco/gallery/1.jpg"
              class="d-block w-100"
              alt="Texto alternativo de la imagen 1"
            />
            <div class="carousel-caption">
              <div class="row mb-4">
                <div class="col text-end">
                  <span class="text-xs">Imagen 1/2</span>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://gcba.github.io/Obelisco/gallery/2.jpg"
              class="d-block w-100"
              alt="Texto alternativo de la imagen 2"
            />
            <div class="carousel-caption">
              <div class="row mb-4">
                <div class="col text-end">
                  <span class="text-xs">Imagen 2/2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#galleryThumbnailsModalControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#galleryThumbnailsModalControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  </div>
</div>`;

export const GALLERY_CAROUSEL_INDICATORS = `//CAROUSEL CON INDICADORES
<div
  id="galleryIndicators"
  class="carousel slide gallery-carousel gallery-carousel-indicators"
>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="gallery-carousel-image">
        <img
          src="https://gcba.github.io/Obelisco/gallery/1.jpg"
          class="d-block"
          alt="Texto alternativo de la imagen 1"
        />
        <button
          type="button"
          class="gallery-carousel-expand"
          data-bs-toggle="modal"
          data-bs-target="#galleryIndicatorsModal"
          aria-label="Ampliar imagen 1 de 2"
        >
          <span class="material-symbols-rounded o-icon" aria-hidden="true">
            open_in_full
          </span>
        </button>
      </div>
    </div>
    <div class="carousel-item">
      <div class="gallery-carousel-image">
        <img
          src="https://gcba.github.io/Obelisco/gallery/2.jpg"
          class="d-block"
          alt="Texto alternativo de la imagen 2"
        />
        <button
          type="button"
          class="gallery-carousel-expand"
          data-bs-toggle="modal"
          data-bs-target="#galleryIndicatorsModal"
          aria-label="Ampliar imagen 2 de 2"
        >
          <span class="material-symbols-rounded o-icon" aria-hidden="true">
            open_in_full
          </span>
        </button>
      </div>
    </div>
  </div>

  <div class="gallery-carousel-navigation">
    //INDICADORES
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#galleryIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Ver imagen 1"
      ></button>
      <button
        type="button"
        data-bs-target="#galleryIndicators"
        data-bs-slide-to="1"
        aria-label="Ver imagen 2"
      ></button>
    </div>

    <div class="gallery-carousel-controls">
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#galleryIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#galleryIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </div>
</div>

//MODAL
<div
  class="modal modal-carousel"
  data-bs-backdrop="static"
  tabindex="-1"
  role="dialog"
  id="galleryIndicatorsModal"
  aria-label="Galería ampliada"
>
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <a href="#" class="modal-carousel-close" data-bs-dismiss="modal">
        Cerrar ventana
      </a>
      <div
        id="galleryIndicatorsModalControls"
        class="carousel slide"
        data-bs-interval="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://gcba.github.io/Obelisco/gallery/1.jpg"
              class="d-block w-100"
              alt="Texto alternativo de la imagen 1"
            />
            <div class="carousel-caption">
              <div class="row mb-4">
                <div class="col text-end">
                  <span class="text-xs">Imagen 1/2</span>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://gcba.github.io/Obelisco/gallery/2.jpg"
              class="d-block w-100"
              alt="Texto alternativo de la imagen 2"
            />
            <div class="carousel-caption">
              <div class="row mb-4">
                <div class="col text-end">
                  <span class="text-xs">Imagen 2/2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#galleryIndicatorsModalControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#galleryIndicatorsModalControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  </div>
</div>`;
