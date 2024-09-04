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
