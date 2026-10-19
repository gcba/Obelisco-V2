import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

const basePath = '/Obelisco-V2';
import {
  HERO_MULTIMEDIA,
  HERO_MULTIMEDIA_BOTONES,
  HERO_MULTIMEDIA_CAMPO_BUSCADOR,
  HERO_MULTIMEDIA_DESPLEGABLES,
  // HERO_MULTIMEDIA_ETIQUETAS,
  HERO_MULTIMEDIA_IMAGEN,
} from './code-views';

const ZoomContainer = ({ children }: React.PropsWithChildren) => <div style={{ zoom: 0.5 }}>{children}</div>;

const HeroMultimediaDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Con imagen',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={HERO_MULTIMEDIA_IMAGEN}>
            <ZoomContainer>
              <div className="container-headers">
                {/* Header multimedia y contenido ⬇ */}
                <header className="hero-landing  ">
                  {/* multimedia */}
                  {/* <video src={`${basePath}/images/hero/multimedia/videoplayback.mp4`} autoPlay muted loop playsInline></video> */}
                  <img src={`${basePath}/images/hero/hero_multimedia.jpg`} alt="Imagen de fondo" />

                  {/* capa gradiente */}
                  <div className="ob-bg"></div>

                  {/* contenido, título, bajada, accionables */}
                  <div className="container hero-landing-container">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 2</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 3</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página anterior</a>
                        </li>
                      </ol>
                    </nav>
                    <div className="row">
                      <div className="col-12 col-lg-8 w-100">
                        <h1>Título de la página</h1>
                        <p className="text-xl">
                          Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
                          brevemente su función.
                        </p>

                        {/* accionable botones */}
                        <div className="btn-hero">
                          <button type="button" className="btn btn-light">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-light">
                            Botón
                          </button>
                        </div>
                        {/* accionable botones */}
                      </div>
                    </div>
                  </div>
                  {/* contenido, título, bajada, accionables */}
                </header>
              </div>
            </ZoomContainer>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Con vídeo',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={HERO_MULTIMEDIA}>
            <ZoomContainer>
              <div className="container-headers">
                {/* Header multimedia y contenido ⬇ */}
                <header className="hero-landing  ">
                  {/* multimedia */}
                  <video src={`${basePath}/images/hero/videoplayback.mp4`} autoPlay muted loop playsInline></video>

                  {/* capa gradiente */}
                  <div className="ob-bg"></div>

                  {/* contenido, título, bajada, accionables */}
                  <div className="container hero-landing-container">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 2</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 3</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página anterior</a>
                        </li>
                      </ol>
                    </nav>
                    <div className="row">
                      <div className="col-12 col-lg-8 w-100">
                        <h1>Título de la página</h1>
                        <p className="text-xl">
                          Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
                          brevemente su función.
                        </p>

                        <div className="container-dropdowns">
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-dropdown btn-dropdown-border btn-lg"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
                              <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                expand_more
                              </span>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Opción de navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Opción de navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Opción de navegación</span>
                              </a>
                            </div>
                          </div>

                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-dropdown btn-dropdown-border btn-lg"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
                              <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                expand_more
                              </span>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Opción de navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Opción de navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Opción de navegación</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* contenido, título, bajada, accionables */}
                </header>
              </div>
            </ZoomContainer>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Accionables',
    },
    {
      subtitle: 'Con botones',
      content: (
        <>
          <CodeBox codeHTML={HERO_MULTIMEDIA_BOTONES}>
            <ZoomContainer>
              <div className="container-headers">
                {/* Header multimedia y contenido ⬇ */}
                <header className="hero-landing  ">
                  {/* multimedia */}
                  <video src={`${basePath}/images/hero/videoplayback.mp4`} autoPlay muted loop playsInline></video>
                  {/* <img src={`${basePath}/images/hero/hero_multimedia.jpg`} /> */}

                  {/* capa gradiente */}
                  <div className="ob-bg"></div>

                  {/* contenido, título, bajada, accionables */}
                  <div className="container hero-landing-container">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 2</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 3</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página anterior</a>
                        </li>
                      </ol>
                    </nav>
                    <div className="row">
                      <div className="col-12 col-lg-8 w-100">
                        <h1>Título de la página</h1>
                        <p className="text-xl">
                          Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
                          brevemente su función.
                        </p>

                        {/* accionable botones */}
                        <div className="btn-hero">
                          <button type="button" className="btn btn-light">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-light">
                            Botón
                          </button>
                        </div>
                        {/* accionable botones */}
                      </div>
                    </div>
                  </div>
                  {/* contenido, título, bajada, accionables */}
                </header>
              </div>
            </ZoomContainer>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Con campo buscador',
      content: (
        <>
          <CodeBox codeHTML={HERO_MULTIMEDIA_CAMPO_BUSCADOR}>
            <ZoomContainer>
              <div className="container-headers">
                {/* Header multimedia y contenido ⬇ */}
                <header className="hero-landing  ">
                  {/* multimedia */}
                  <video src={`${basePath}/images/hero/videoplayback.mp4`} autoPlay muted loop playsInline></video>
                  {/* <img src={`${basePath}/images/hero/hero_multimedia.jpg`} /> */}

                  {/* capa gradiente */}
                  <div className="ob-bg"></div>
                  {/* capa gradiente */}

                  {/* contenido, título, bajada, accionables */}
                  <div className="container hero-landing-container">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 2</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 3</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página anterior</a>
                        </li>
                      </ol>
                    </nav>
                    <div className="row">
                      <div className="col-12 col-lg-8 w-100">
                        <h1>Título de la página</h1>
                        <p className="text-xl">
                          Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
                          brevemente su función.
                        </p>

                        {/* accionable campo buscador */}
                        <div className="d-grid d-sm-grid d-md-flex flex-wrap search-container">
                          {/* search wrapper */}
                          <div className="search-wrapper">
                            <label htmlFor="search-home" className="sr-only">
                              Buscar
                            </label>

                            <input
                              type="text"
                              id="search-home"
                              name="search-home"
                              maxLength={100}
                              autoComplete="off"
                              className="form-control"
                              placeholder="¿En qué te podemos ayudar?"
                            />

                            <div className="search-btn-container">
                              <button className="btn btn-lg btn-primary btn-search">
                                <p>Buscar</p>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    d="M11.3137 10.0598H10.6553L10.422 9.83477C11.422 8.6681 11.9387 7.07643 11.6553 5.38477C11.2637 3.0681 9.33034 1.2181 6.99701 0.934766C3.47201 0.501433 0.505339 3.4681 0.938672 6.9931C1.22201 9.32643 3.07201 11.2598 5.38867 11.6514C7.08034 11.9348 8.67201 11.4181 9.83867 10.4181L10.0637 10.6514V11.3098L13.6053 14.8514C13.947 15.1931 14.5053 15.1931 14.847 14.8514C15.1887 14.5098 15.1887 13.9514 14.847 13.6098L11.3137 10.0598ZM6.31367 10.0598C4.23867 10.0598 2.56367 8.38477 2.56367 6.30977C2.56367 4.23477 4.23867 2.55977 6.31367 2.55977C8.38867 2.55977 10.0637 4.23477 10.0637 6.30977C10.0637 8.38477 8.38867 10.0598 6.31367 10.0598Z"
                                    fill="white"
                                  ></path>
                                </svg>
                              </button>
                            </div>

                            {/* input buscador */}
                            <div className="search-results bg-light">
                              <div>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="list-link-result">
                                  <span className="material-symbols-rounded">search</span>
                                  Enlace predeterminado
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="list-link-result">
                                  <span className="material-symbols-rounded">search</span>
                                  Enlace predeterminado
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="list-link-result">
                                  <span className="material-symbols-rounded">search</span>
                                  Enlace predeterminado
                                </a>
                              </div>
                            </div>
                            {/* input buscador */}
                          </div>
                          {/* search wrapper */}
                        </div>
                        {/* accionable campo buscador */}
                      </div>
                    </div>
                  </div>
                  {/* contenido, título, bajada, accionables */}
                </header>
              </div>
            </ZoomContainer>
          </CodeBox>
        </>
      ),
    },

    {
      subtitle: 'Con desplegables',
      content: (
        <>
          <CodeBox codeHTML={HERO_MULTIMEDIA_DESPLEGABLES}>
            <ZoomContainer>
              <div className="container-headers">
                {/* Header multimedia y contenido ⬇ */}
                <header className="hero-landing  ">
                  {/* multimedia */}
                  <video src={`${basePath}/images/hero/videoplayback.mp4`} autoPlay muted loop playsInline></video>
                  {/* <img src={`${basePath}/images/hero/hero_multimedia.jpg`} /> */}

                  {/* capa gradiente */}
                  <div className="ob-bg"></div>

                  {/* contenido, título, bajada, accionables */}
                  <div className="container hero-landing-container">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 2</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 3</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página anterior</a>
                        </li>
                      </ol>
                    </nav>
                    <div className="row">
                      <div className="col-12 col-lg-8 w-100">
                        <h1>Título de la página</h1>
                        <p className="text-xl">
                          Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
                          brevemente su función.
                        </p>

                        {/* Accionable desplegables */}
                        <div className="container-dropdowns">
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-dropdown btn-dropdown-border btn-lg"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
                              <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                expand_more
                              </span>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Opción de navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Opción de navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Opción de navegación</span>
                              </a>
                            </div>
                          </div>

                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-dropdown btn-dropdown-border btn-lg"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
                              <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                expand_more
                              </span>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Opción de navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Opción de navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Opción de navegación</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* Accionable desplegables */}
                      </div>
                    </div>
                  </div>
                  {/* contenido, título, bajada, accionables */}
                </header>
              </div>
            </ZoomContainer>
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
          <p className="text-xl">Cuándo usar</p>
          <ul className="list-informative-bullet mb-3">
            <li>
              Opcionalmente puede estar presente en las páginas de área que requieran un componente principal que
              funcione como introducción al contenido multimedia (video o imagen), y que inmediatamente capte la
              atención de la persona usuaria.
            </li>
          </ul>

          <p className="text-xl">Cuándo no usar</p>
          <ul className="list-informative-bullet">
            <li>
              En caso de que no se cuente con una imagen o video de calidad que representen el área, se debe utilizar el
              componente Cabecera institucional (ver documentación).
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Disposición',
      content: (
        <>
          <p className="text-md" style={{ marginTop: '32px' }}>
            Se ubica siempre en la parte superior del sitio, inmediatamente debajo del Encabezado <i>(header)</i>{' '}
            principal, actuando como punto de inicio y orientación del contenido de la página.
          </p>
        </>
      ),
    },
    {
      subtitle: <>Imagen y Video</>,
      content: '',
    },
    {
      tertiarytitle: (
        <>
          En dispositivos <i>desktop</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            El contenedor de la cabecera ocupa el 100% del ancho de la pantalla, manteniendo el orden de lectura de
            izquierda a derecha en sentido horizontal de los elementos como formas y multimedia.
          </p>
          <Image
            src={`${basePath}/images/hero/multimedia/img.svg`}
            alt="Cabecera de página disposición desktop"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginBottom: '32px' }}
          />

          <p className="text-md fw-bold mb-4">Responsive en tamaños de pantalla grandes</p>
          <p className="text-md">
            <strong>Entre 1200 a 1400px</strong>: Hasta pantallas de 1400px. las alineaciones de texto y forma de la
            cabecera van a estar en sincronía con el resto del contenido principal de la página para compensar los pesos
            visuales del componente en la interfaz.
          </p>
          <Image
            src={`${basePath}/images/hero/multimedia/img_1.svg`}
            alt="Cabecera de página disposición desktop"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginBottom: '32px' }}
          />

          <p className="text-md">
            <strong>Mayor a 1920px</strong>: Para pantallas con resoluciones mayores a 1920 px., la página mantiene un
            ancho fijo y se extienden márgenes en blanco para ocupar el espacio disponible de la pantalla.
          </p>

          <Image
            src={`${basePath}/images/hero/multimedia/img_2.svg`}
            alt="Cabecera de página disposición desktop"
            width="800"
            height="200"
            className="img-fluid mb-4"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          En dispositivos <i>tablet</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            La cabecera ocupa el 100% del ancho de la pantalla, incluyendo los márgenes, manteniendo una disposición
            vertical de la estructura. Esto quiere decir que, en el orden de lectura, migas de pan, título, descripción
            y accionables, se van a ubicar primeros, y, por debajo, la multimedia.
          </p>
          <Image
            src={`${basePath}/images/hero/multimedia/img_3.svg`}
            alt="Cabecera de página disposición tablet"
            width="800"
            height="200"
            className="img-fluid mb-4"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          En dispositivos <i>Mobile</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Al igual que en dispositivos tablet, la cabecera ocupa el 100% del ancho de la pantalla, incluyendo los
            márgenes, manteniendo una disposición vertical de la estructura. Los elementos deben posicionarse uno debajo
            del otro. En el siguiente orden: Migas de pan, Título, Subtítulo, accionables. Los accionables deben ocupar
            el 100% del ancho de la pantalla.
            <br />
            El desplegable va a tener el texto centrado y la flecha de despliegue a la derecha del accionable.
          </p>
          <Image
            src={`${basePath}/images/hero/multimedia/img_4.svg`}
            alt="Cabecera de página disposición tablet"
            width="800"
            height="200"
            className="img-fluid mb-4"
          />
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
          <Image
            src={`${basePath}/images/hero/multimedia/img_5.svg`}
            alt="Cabecera de página anatomia"
            width="800"
            height="200"
            className="img-fluid mb-4"
          />

          <div className="responsive-scroll mt-4" tabIndex={0}>
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
                  <td>1. Gradiente</td>
                  <td>
                    Obligatorio, debe estar presente en todos los componentes Cabecera Multimedia tanto en su variante
                    imagen como en video.
                  </td>
                </tr>
                <tr>
                  <td>2. Migas de pan</td>
                  <td>
                    Obligatorio, todas las páginas de área deben contener migas de pan. Forman una ruta de navegación.
                  </td>
                </tr>
                <tr>
                  <td>3. Título de la cabecera</td>
                  <td>Obligatorio, todas las páginas deben contener un título.</td>
                </tr>
                <tr>
                  <td>4. Subtítulo de la cabecera</td>
                  <td>Opcional, puede ser un texto de apoyo al título principal.</td>
                </tr>
                <tr>
                  <td>5. Acciones</td>
                  <td>
                    Obligatorio, todas las páginas deben incluir botones, desplegables, etiquetas, campos de búsqueda, u
                    otros.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Especificaciones sobre la multimedia',
    },
    {
      subtitleBold: 'Multimedia con imagen',
      content: (
        <>
          <ul className="list-informative-bullet">
            <li>Los elementos multimedia, tanto de tipo imagen como video, deben tener un peso menor a 10MB.</li>
          </ul>
        </>
      ),
    },
    {
      subtitleBold: 'Multimedia con imagen',
      content: (
        <>
          <p className="text-lg fw-semibold">Contenido</p>
          <ul className="list-informative-bullet">
            <li>Los elementos multimedia, tanto de tipo imagen como video, deben tener un peso menor a 10MB.</li>
          </ul>

          <p className="text-lg fw-semibold mb-2">Formatos recomendados </p>
          <ul className="list-informative-bullet" style={{ marginBottom: '12px', marginTop: '12px' }}>
            <li>
              <p className="text-md fw-bold d-inline">JPEG</p>: Es la opción más conocida, y ofrece buena
              compatibilidad, y relación tamaño/peso. Los archivos suelen tener las extensiones .jpg, .jpeg
            </li>
            <li>
              <p className="text-md fw-bold d-inline">WebP</p>: Es poco conocido, pero ofrece buena calidad con
              compresión eficiente. Los archivos tienen la extensión &quot;.WEBP&quot;.
            </li>
            <li>
              <p className="text-md fw-bold d-inline">AVIF</p>: Mayor compresión que formatos JPG/JPEG y alta calidad de
              imagen. Es compatible en la mayoría de los principales navegadores como Chrome, Firefox y Safari.
            </li>
          </ul>

          <p className="text-lg fw-semibold mb-2">Tamaños recomendados </p>
          <p className="text-lg">
            Resolución base de 1600x900 (16:9) con peso menor a 400 KB.
            <br />
            Esta imagen se redimensionará para adaptarse a los distintos dispositivos.
          </p>

          <ul className="list-informative-bullet">
            <li>
              <p className="text-md fw-bold d-inline">Desktop</p>: 1600x900px. resolución máxima recomendada (proporción
              16:9). Peso sugerido {'<250 KB'}
            </li>
          </ul>
        </>
      ),
    },
    {
      subtitleBold: 'Multimedia con video',
      content: (
        <>
          <p className="text-lg fw-semibold mb-2 mt-4">Formatos recomendados </p>

          <ul className="list-informative-bullet" style={{ marginBottom: '12px' }}>
            <li>
              <p className="text-md fw-bold d-inline">MP4</p>: Formato de video ampliamente soportado. Adecuado para
              videos cortos, fondos animados o clips promocionales. No soporta transparencia; requiere fallback estático
              si el autoplay falla.
            </li>
            <li>
              <p className="text-md fw-bold d-inline">WebM</p>: Formato de video optimizado para la web, alternativa
              libre a MP4. Soporte limitado en navegadores antiguos o entornos legacy.
            </li>
          </ul>

          <p className="text-lg fw-semibold mb-2">Tamaños recomendados </p>
          <p className="text-lg">
            Resolución base de 1600x900 (16:9) con peso menor a 400 KB.
            <br />
            Este video se redimensionará para adaptarse a los distintos dispositivos.
          </p>

          <li>
            <p className="text-md fw-bold d-inline">Desktop</p>: 1920x1080 px. resolución máxima recomendada (proporción
            16:9). Peso sugerido {'<2 MB'}
          </li>
        </>
      ),
    },

    {
      title: 'Variantes',
    },
    {
      subtitle: 'Con imagen',
      content: (
        <>
          <Image
            src={`${basePath}/images/hero/multimedia/img_6.svg`}
            alt="Variante imagen"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />
        </>
      ),
    },
    {
      subtitle: 'Con video',
      content: (
        <>
          <Image
            src={`${basePath}/images/hero/multimedia/img_7.svg`}
            alt="Variante video"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />
        </>
      ),
    },

    {
      subtitle: 'Accionables',
      content: (
        <>
          <p className="text-md mb-4">
            Permite incluir uno o más enlaces accionables ubicados por fuera del texto principal de la alerta. Su
            función es ofrecer al usuario caminos directos para resolver la situación comunicada, sin interrumpir la
            lectura del mensaje.
          </p>

          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Con botones
          </p>
          <Image
            src={`${basePath}/images/hero/multimedia/img_8.svg`}
            alt="Accionables con botones del hero"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />

          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Con campo de búsqueda
          </p>
          <Image
            src={`${basePath}/images/hero/multimedia/img_9.svg`}
            alt="Accionables con campo de búsqueda del hero"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />

          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Con desplegables de selección
          </p>
          <Image
            src={`${basePath}/images/hero/multimedia/img_10.svg`}
            alt="Accionables con desplegables de selección del hero"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />

          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Con desplegables de selección y botón{' '}
          </p>
          <Image
            src={`${basePath}/images/hero/multimedia/img_11.svg`}
            alt="Accionables con etiquetas"
            width="738"
            height="400"
            className="img-fluid mb-4"
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
          <p className="text-md">
            El componente Cabecera de página está construido para ser accesible mediante navegación por teclado y
            reconocible por lectores de pantalla.{' '}
          </p>
          <span className="badge badge-s-default ms-1">TAB</span>
          <span className="badge badge-s-default">ENTER</span>
          <p className="text-md">
            Utilizando el tab la persona usuaria puede navegar a través de elementos de la interfaz. Acciones como
            accionar botones o abrir desplegables se pueden realizar con las teclas Enter o space, y controlar con las
            flechas del teclado.
          </p>

          <Image
            src={`${basePath}/images/hero/multimedia/img_12.svg`}
            alt="Navegacion alternativa de la Cabecera de página"
            width="738"
            height="400"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Etiquetado descriptivo',
      content: (
        <>
          <p className="text-md">
            La etiqueta de texto {'<h1>'} representa el título con más jerarquía de la página y aparece al inicio del
            bloque del componente para garantizar orientación, SEO y accesibilidad. Cada página debe tener un único{' '}
            {'<h1>'} y no debe repetirse en otras secciones o encabezados internos, para evitar confusión y mantener una
            estructura semántica clara.
          </p>

          <p className="text-md mt-4">
            El atributo alt es el texto alternativo que reemplaza lo visual y describe el propósito del contenido sin
            necesidad de verlo.
            <br />
            <br />
            Si la multimedia es sólo decorativa, es decir que no aporta información clave, el atributo alt puede estar
            vacío para que el lector de pantalla lo ignore, por ejemplo:
            <strong>{'<img alt="" />'}</strong>
          </p>

          <p className="text-xl">Accesibilidad</p>
          <p className="text-md">
            El contenido multimedia debe cumplir con las siguientes reglas para garantizar su correcta accesibilidad y
            usabilidad:
          </p>
          <ul className="list-informative-bullet">
            <li>Limitar la duración máxima de los videos a 5 segundos.</li>
            <li>Los videos no deben tener sonido.</li>
            <li>
              Corroborar la correcta relación de contraste de color entre multimedia (imagen y video) y elementos de
              frente. Para cumplir con esta regla se deberá utilizar la forma de fondo gradiente.
            </li>
          </ul>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {HERO_MULTIMEDIA_IMAGEN}
          </SyntaxHighlighter>
        </>
      ),
    },
    {
      title: 'Criterios WCAG aplicados',
      content: (
        <>
          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.3.1 Info and Relationships (Level A){' '}
          </a>
          <p>
            La información, la estructura y las relaciones transmitidas a través de la presentación pueden determinarse
            mediante programación o están disponibles en el texto.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.11 Non-Text Contrast (Level AA){' '}
          </a>
          <p>
            La presentación visual de elementos de la interfaz de usuario y objetos gráficos tiene por lo menos una
            relación de contraste de 3:1 con respecto a los colores adyacentes.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.3 Contrast (Minimum) (Level AA){' '}
          </a>
          <p>
            La presentación visual de texto y de imágenes de texto tiene una relación de contraste de por lo menos
            4.5:1, excepto textos grandes e imágenes de texto grande que tienen un contraste de por lo menos 3:1, textos
            o imágenes que son parte de un componente inactivo de interfaz de usuario o son pura decoración, o
            logotipos.{' '}
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.4 Resize Text (Level AA){' '}
          </a>
          <p>
            Excepto por los subtítulos e imágenes de texto, el texto puede redimensionarse hasta un 200 % sin tecnología
            de asistencia, sin pérdida de contenido ni funcionalidad.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.10 Reflow (Level AA){' '}
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
            Success Criterion 2.1.1 Keyboard (Level A){' '}
          </a>
          <p>Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.</p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.2 No Keyboard Trap (Level A){' '}
          </a>
          <p>
            Si el foco del teclado puede moverse a un componente de la página utilizando una interfaz de teclado,
            también debe ser posible mover el foco fuera de ese componente usando únicamente la misma interfaz de
            teclado. Si se requiere algo más que las teclas de flecha, tabulador u otros métodos estándar para salir, se
            debe informar al usuario sobre el método necesario para mover el foco.
          </p>

          <a
            className="external"
            href="https://www.w3.org/TR/WCAG22/#pause-stop-hide"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.2.2 Pause, Stop, Hide (Level A){' '}
          </a>
          <p>
            Para cualquier información que se mueva, parpadee, se desplace o se actualice automáticamente, se
            proporciona un mecanismo para que la persona usuaria pueda pausarla, detenerla u ocultarla, salvo que dicha
            actividad sea esencial para la operación.
            <br />
            También aplica a contenido que:
          </p>
          <ul className="list-informative-bullet mb-3">
            <li>Comienza automáticamente.</li>
            <li>Dura más de 5 segundos.</li>
            <li>Se presenta junto con otro contenido.</li>
          </ul>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html#dfn-link-purpose"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.4 Link Purpose (In Context) (Level A)
          </a>
          <p>
            El propósito de cada enlace debe ser determinado solo con el texto del enlace o con el texto del enlace
            junto con su contexto determinado de forma programática, excepto en los casos en los que el propósito del
            enlace sea ambiguo para los usuarios en general.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.7 Focus Visible (Level AA){' '}
          </a>
          <p>
            Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque
            del teclado es visible. Cuando utiliza un teclado para navegar por los componentes, los enlaces tienen un
            subrayado visible y un recuadro <i>outline</i> que indica que los enlaces son interactivos.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/location.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.8. Location (Level AAA){' '}
          </a>
          <p>La información sobre la ubicación del usuario dentro de un conjunto de páginas web está disponible.</p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 3.2.3 Consistent Navigation (Level AA){' '}
          </a>
          <p>
            Los mecanismos de navegación que se repiten en varias páginas web dentro de un conjunto de páginas aparecen
            en el mismo orden relativo cada vez que se repiten, a menos que el usuario inicie un cambio.{' '}
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Cabecera de página multimedia"
        description={[
          'La Cabecera de página Multimedia es el área principal de una página que brinda información introductoria para orientar a la persona usuaria en el propósito de la misma. El componente principal es un elemento multimedia qué puede ser de tipo imagen o video. También, puede contener accionables como botones, campos de búsqueda y otros.',
        ]}
      />
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX}
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

export default HeroMultimediaDocs;
