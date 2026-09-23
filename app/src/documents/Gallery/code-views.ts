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

export const GALLERY_CAROUSEL_THUMBNAILS = `<div class="container">
        <div class="row justify-content-center">
          <div class="col-12 d-flex justify-content-center">
            <div id="galleryCarousel" class="carousel slide gallery-carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="gallery-carousel-image"><img src="https://gcba.github.io/Obelisco/gallery/1.jpg"
                      alt="Texto alternativo de la imagen"><button type="button" class="gallery-expand-button"
                      data-bs-toggle="modal" data-bs-target="#modalGallery1" aria-label="Ampliar imagen"><span
                        class="material-symbols-rounded o-icon" aria-hidden="true">zoom_out_map</span></button></div>
                </div>
                <div class="carousel-item ">
                  <div class="gallery-carousel-image"><img src="https://gcba.github.io/Obelisco/gallery/2.jpg"
                      alt="Texto alternativo de la imagen"><button type="button" class="gallery-expand-button"
                      data-bs-toggle="modal" data-bs-target="#modalGallery1" aria-label="Ampliar imagen"><span
                        class="material-symbols-rounded o-icon" aria-hidden="true">zoom_out_map</span></button></div>
                </div>
                <div class="carousel-item ">
                  <div class="gallery-carousel-image"><img src="https://gcba.github.io/Obelisco/gallery/3.jpg"
                      alt="Texto alternativo de la imagen"><button type="button" class="gallery-expand-button"
                      data-bs-toggle="modal" data-bs-target="#modalGallery1" aria-label="Ampliar imagen"><span
                        class="material-symbols-rounded o-icon" aria-hidden="true">zoom_out_map</span></button></div>
                </div>
                <div class="carousel-item ">
                  <div class="gallery-carousel-image"><img src="https://gcba.github.io/Obelisco/gallery/4.jpg"
                      alt="Texto alternativo de la imagen"><button type="button" class="gallery-expand-button"
                      data-bs-toggle="modal" data-bs-target="#modalGallery1" aria-label="Ampliar imagen"><span
                        class="material-symbols-rounded o-icon" aria-hidden="true">zoom_out_map</span></button></div>
                </div>
                <div class="carousel-item ">
                  <div class="gallery-carousel-image"><img src="https://gcba.github.io/Obelisco/gallery/5.jpg"
                      alt="Texto alternativo de la imagen"><button type="button" class="gallery-expand-button"
                      data-bs-toggle="modal" data-bs-target="#modalGallery1" aria-label="Ampliar imagen"><span
                        class="material-symbols-rounded o-icon" aria-hidden="true">zoom_out_map</span></button></div>
                </div>
                <div class="carousel-item ">
                  <div class="gallery-carousel-image"><img src="https://gcba.github.io/Obelisco/gallery/1.jpg"
                      alt="Texto alternativo de la imagen"><button type="button" class="gallery-expand-button"
                      data-bs-toggle="modal" data-bs-target="#modalGallery1" aria-label="Ampliar imagen"><span
                        class="material-symbols-rounded o-icon" aria-hidden="true">zoom_out_map</span></button></div>
                </div>
                <div class="carousel-item ">
                  <div class="gallery-carousel-image"><img src="https://gcba.github.io/Obelisco/gallery/2.jpg"
                      alt="Texto alternativo de la imagen"><button type="button" class="gallery-expand-button"
                      data-bs-toggle="modal" data-bs-target="#modalGallery1" aria-label="Ampliar imagen"><span
                        class="material-symbols-rounded o-icon" aria-hidden="true">zoom_out_map</span></button></div>
                </div>
                <div class="carousel-item ">
                  <div class="gallery-carousel-image"><img src="https://gcba.github.io/Obelisco/gallery/3.jpg"
                      alt="Texto alternativo de la imagen"><button type="button" class="gallery-expand-button"
                      data-bs-toggle="modal" data-bs-target="#modalGallery1" aria-label="Ampliar imagen"><span
                        class="material-symbols-rounded o-icon" aria-hidden="true">zoom_out_map</span></button></div>
                </div>
                <div class="carousel-item ">
                  <div class="gallery-carousel-image"><img src="https://gcba.github.io/Obelisco/gallery/1.jpg"
                      alt="Texto alternativo de la imagen"><button type="button" class="gallery-expand-button"
                      data-bs-toggle="modal" data-bs-target="#modalGallery1" aria-label="Ampliar imagen"><span
                        class="material-symbols-rounded o-icon" aria-hidden="true">zoom_out_map</span></button></div>
                </div>
                <div class="carousel-item ">
                  <div class="gallery-carousel-image"><img src="https://gcba.github.io/Obelisco/gallery/3.jpg"
                      alt="Texto alternativo de la imagen"><button type="button" class="gallery-expand-button"
                      data-bs-toggle="modal" data-bs-target="#modalGallery1" aria-label="Ampliar imagen"><span
                        class="material-symbols-rounded o-icon" aria-hidden="true">zoom_out_map</span></button></div>
                </div>
              </div>
              <div class="gallery-image-paginator"><button class="carousel-control-prev" type="button"
                  data-bs-target="#galleryCarousel" data-bs-slide="prev"><span class="carousel-control-prev-icon"
                    aria-hidden="true"></span><span class="visually-hidden">Anterior</span></button>
                <div class="carousel-indicators gallery-thumbnails"><button type="button"
                    class="gallery-thumbnail active" data-bs-target="#galleryCarousel" data-bs-slide-to="0"
                    aria-current="true" aria-label="Ver imagen 1"><img
                      src="https://gcba.github.io/Obelisco/gallery/1.jpg" alt=""></button><button type="button"
                    class="gallery-thumbnail " data-bs-target="#galleryCarousel" data-bs-slide-to="1"
                    aria-label="Ver imagen 2"><img src="https://gcba.github.io/Obelisco/gallery/2.jpg"
                      alt=""></button><button type="button" class="gallery-thumbnail " data-bs-target="#galleryCarousel"
                    data-bs-slide-to="2" aria-label="Ver imagen 3"><img
                      src="https://gcba.github.io/Obelisco/gallery/3.jpg" alt=""></button><button type="button"
                    class="gallery-thumbnail " data-bs-target="#galleryCarousel" data-bs-slide-to="3"
                    aria-label="Ver imagen 4"><img src="https://gcba.github.io/Obelisco/gallery/4.jpg"
                      alt=""></button><button type="button" class="gallery-thumbnail " data-bs-target="#galleryCarousel"
                    data-bs-slide-to="4" aria-label="Ver imagen 5"><img
                      src="https://gcba.github.io/Obelisco/gallery/5.jpg" alt=""></button><button type="button"
                    class="gallery-thumbnail " data-bs-target="#galleryCarousel" data-bs-slide-to="5"
                    aria-label="Ver imagen 6"><img src="https://gcba.github.io/Obelisco/gallery/1.jpg"
                      alt=""></button><button type="button" class="gallery-thumbnail " data-bs-target="#galleryCarousel"
                    data-bs-slide-to="6" aria-label="Ver imagen 7"><img
                      src="https://gcba.github.io/Obelisco/gallery/2.jpg" alt=""></button><button type="button"
                    class="gallery-thumbnail " data-bs-target="#galleryCarousel" data-bs-slide-to="7"
                    aria-label="Ver imagen 8"><img src="https://gcba.github.io/Obelisco/gallery/3.jpg"
                      alt=""></button><button type="button" class="gallery-thumbnail " data-bs-target="#galleryCarousel"
                    data-bs-slide-to="8" aria-label="Ver imagen 9"><img
                      src="https://gcba.github.io/Obelisco/gallery/1.jpg" alt=""></button><button type="button"
                    class="gallery-thumbnail " data-bs-target="#galleryCarousel" data-bs-slide-to="9"
                    aria-label="Ver imagen 10"><img src="https://gcba.github.io/Obelisco/gallery/3.jpg" alt=""></button>
                </div><button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel"
                  data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span
                    class="visually-hidden">Siguiente</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal modal-carousel bg-dark modal-gallery-carousel" data-bs-backdrop="static" tabindex="-1"
        id="modalGallery1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content bg-none"><a href="#" class="modal-carousel-close-dark" data-bs-dismiss="modal"> </a>
            <div id="modalGalleryControls1" class="carousel slide" data-bs-ride="false">
              <div class="carousel-inner">
                <div class="carousel-item active"><img src="https://gcba.github.io/Obelisco/gallery/1.jpg"
                    class="d-block" alt="Texto alternativo de la imagen"></div>
                <div class="carousel-item "><img src="https://gcba.github.io/Obelisco/gallery/2.jpg"
                    class="d-block" alt="Texto alternativo de la imagen"></div>
                <div class="carousel-item "><img src="https://gcba.github.io/Obelisco/gallery/3.jpg"
                    class="d-block" alt="Texto alternativo de la imagen"></div>
                <div class="carousel-item "><img src="https://gcba.github.io/Obelisco/gallery/4.jpg"
                    class="d-block" alt="Texto alternativo de la imagen"></div>
                <div class="carousel-item "><img src="https://gcba.github.io/Obelisco/gallery/5.jpg"
                    class="d-block" alt="Texto alternativo de la imagen"></div>
                <div class="carousel-item "><img src="https://gcba.github.io/Obelisco/gallery/1.jpg"
                    class="d-block" alt="Texto alternativo de la imagen"></div>
                <div class="carousel-item "><img src="https://gcba.github.io/Obelisco/gallery/2.jpg"
                    class="d-block" alt="Texto alternativo de la imagen"></div>
                <div class="carousel-item "><img src="https://gcba.github.io/Obelisco/gallery/3.jpg"
                    class="d-block" alt="Texto alternativo de la imagen"></div>
                <div class="carousel-item "><img src="https://gcba.github.io/Obelisco/gallery/1.jpg"
                    class="d-block" alt="Texto alternativo de la imagen"></div>
                <div class="carousel-item "><img src="https://gcba.github.io/Obelisco/gallery/3.jpg"
                    class="d-block" alt="Texto alternativo de la imagen"></div>
              </div>
              <div class="carousel-caption mt-0 mb-0"><span class="text-xs gallery-image-counter">Imagen 1/10</span>
                <p class="headline-lg">Título</p>
                <p class="text-md">Descripción</p>
              </div>
              <div class="gallery-image-paginator"><button class="carousel-control-prev" type="button"
                  data-bs-target="#modalGalleryControls1" data-bs-slide="prev"><span class="carousel-control-prev-icon"
                    aria-hidden="true"></span><span class="visually-hidden">Anterior</span></button>
                <div class="carousel-indicators gallery-thumbnails"><button type="button"
                    class="gallery-thumbnail active" data-bs-target="#modalGalleryControls1" data-bs-slide-to="0"
                    aria-current="true" aria-label="Ver imagen 1"><img
                      src="https://gcba.github.io/Obelisco/gallery/1.jpg" alt=""></button><button type="button"
                    class="gallery-thumbnail " data-bs-target="#modalGalleryControls1" data-bs-slide-to="1"
                    aria-label="Ver imagen 2"><img src="https://gcba.github.io/Obelisco/gallery/2.jpg"
                      alt=""></button><button type="button" class="gallery-thumbnail "
                    data-bs-target="#modalGalleryControls1" data-bs-slide-to="2" aria-label="Ver imagen 3"><img
                      src="https://gcba.github.io/Obelisco/gallery/3.jpg" alt=""></button><button type="button"
                    class="gallery-thumbnail " data-bs-target="#modalGalleryControls1" data-bs-slide-to="3"
                    aria-label="Ver imagen 4"><img src="https://gcba.github.io/Obelisco/gallery/4.jpg"
                      alt=""></button><button type="button" class="gallery-thumbnail "
                    data-bs-target="#modalGalleryControls1" data-bs-slide-to="4" aria-label="Ver imagen 5"><img
                      src="https://gcba.github.io/Obelisco/gallery/5.jpg" alt=""></button><button type="button"
                    class="gallery-thumbnail " data-bs-target="#modalGalleryControls1" data-bs-slide-to="5"
                    aria-label="Ver imagen 6"><img src="https://gcba.github.io/Obelisco/gallery/1.jpg"
                      alt=""></button><button type="button" class="gallery-thumbnail "
                    data-bs-target="#modalGalleryControls1" data-bs-slide-to="6" aria-label="Ver imagen 7"><img
                      src="https://gcba.github.io/Obelisco/gallery/2.jpg" alt=""></button><button type="button"
                    class="gallery-thumbnail " data-bs-target="#modalGalleryControls1" data-bs-slide-to="7"
                    aria-label="Ver imagen 8"><img src="https://gcba.github.io/Obelisco/gallery/3.jpg"
                      alt=""></button><button type="button" class="gallery-thumbnail "
                    data-bs-target="#modalGalleryControls1" data-bs-slide-to="8" aria-label="Ver imagen 9"><img
                      src="https://gcba.github.io/Obelisco/gallery/1.jpg" alt=""></button><button type="button"
                    class="gallery-thumbnail " data-bs-target="#modalGalleryControls1" data-bs-slide-to="9"
                    aria-label="Ver imagen 10"><img src="https://gcba.github.io/Obelisco/gallery/3.jpg" alt=""></button>
                </div><button class="carousel-control-next" type="button" data-bs-target="#modalGalleryControls1"
                  data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span
                    class="visually-hidden">Siguiente</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>`;

export const GALLERY_CAROUSEL_THUMBNAILS_JS = `const mainCarousel = document.getElementById('galleryCarousel');
const modalCarousel = document.getElementById('modalGalleryControls1');
const modal = document.getElementById('modalGallery1');
const counter = modalCarousel?.querySelector('.gallery-image-counter');
const total = modalCarousel?.querySelectorAll('.carousel-item').length;

if (counter) counter.textContent = \`Imagen 1/\${total}\`;

const goToSlide = (carousel, index) => {
  carousel?.querySelector(\`[data-bs-slide-to="\${index}"]\`)?.click();
};

modal?.addEventListener('show.bs.modal', () => {
  const slides = mainCarousel?.querySelectorAll('.carousel-item');
  const activeIndex = slides ? [...slides].findIndex((slide) => slide.classList.contains('active')) : 0;
  goToSlide(modalCarousel, activeIndex);
});

modalCarousel?.addEventListener('slid.bs.carousel', (event) => {
  goToSlide(mainCarousel, event.to);
  if (counter) counter.textContent = \`Imagen \${event.to + 1}/\${total}\`;
});`;
