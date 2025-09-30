import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
    title: '4/4 Variante color default con 2 botones',
    content: (
      <div className="col-12">
        <header className="hero">
          <div className="content wave">
            <div className="d-flex flex-column row-gap-4 py-3 py-lg-5">
              <nav aria-label="Navegación secundaria">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="#" style={{ color: '#101E37' }}>
                      Inicio
                    </a>
                  </li>
                </ol>
              </nav>

              <div>
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

              <div className="d-grid d-sm-grid d-md-flex flex-wrap column-gap-2 row-gap-4">
                <div className="form-wrapper " style={{ minWidth: '580px', maxWidth: '580px' }}>
                  <form className="form-group position-relative" role="search" aria-label="Buscar en el sitio">
                    <label htmlFor="search-home" className="sr-only">
                      Buscar
                    </label>

                    <input
                      type="text"
                      id="search-home"
                      name="search-home"
                      maxLength={100}
                      autoComplete="off"
                      className="form-control pe-5 py-3"
                      placeholder="¿En qué te podemos ayudar?"
                      aria-label="Buscar"
                    />

                    <button
                      type="submit"
                      className="btn btn-primary position-absolute end-0 top-50 translate-middle-y me-2"
                    >
                      Buscar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="aside sky-900"></div>
        </header>
      </div>
    ),
  },
  {
    title: '3/4 Variante color default con 3 etiquetas máximo',
    content: (
      <div className="col-12">
        <header className="hero">
          <div className="content wave">
            <div className="d-flex flex-column row-gap-4 py-3 py-lg-5">
              <nav aria-label="Navegación secundaria">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="#" style={{ color: '#101E37' }}>
                      Inicio
                    </a>
                  </li>
                </ol>
              </nav>

              <div>
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo brevemente
                  su función.
                </p>
              </div>

              <div className="d-flex flex-wrap column-gap-2 row-gap-4">
                <span className="me-3 fw-semibold">Texto de las etiquetas: </span>
                <span className="badge badge-default">Etiqueta</span>
                <span className="badge badge-default">Etiqueta</span>
                <span className="badge badge-default">Etiqueta</span>
              </div>
            </div>
          </div>

          <div className="aside sky-900"></div>
        </header>
      </div>
    ),
  },
  {
    title: '2/4 Variante color default con 2 botones',
    content: (
      <div className="col-12">
        <header className="hero">
          <div className="content wave">
            <div className="d-flex flex-column row-gap-4 py-3 py-lg-5">
              <nav aria-label="Navegación secundaria">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="#" style={{ color: '#101E37' }}>
                      Inicio
                    </a>
                  </li>
                </ol>
              </nav>

              <div>
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

              <div className="d-grid d-sm-flex column-gap-2 row-gap-4">
                <button type="button" className="btn btn-secondary w-sm-100">
                  Botón
                </button>
                <button type="button" className="btn btn-outline-secondary w-sm-100">
                  Botón
                </button>
              </div>
            </div>
          </div>

          <div className="aside sky-900"></div>
        </header>
      </div>
    ),
  },
  {
    title: '1/4 Variante color default con 3 desplegables',
    content: (
      <div className="col-12">
        <header className="hero">
          <div className="content wave">
            <div className="d-flex flex-column row-gap-4 py-3 py-lg-5">
              <nav aria-label="Navegación secundaria">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="#" style={{ color: '#101E37' }}>
                      Inicio
                    </a>
                  </li>
                </ol>
              </nav>

              <div>
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

              <div className="d-grid d-sm-flex flex-wrap column-gap-2 row-gap-4">
                {/* <!-- Inicio Desplegable de navegación 1 --> */}
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
                {/* <!-- Fin Desplegable de navegación 1 --> */}
                {/* <!-- Inicio Desplegable de navegación 2 --> */}
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
                {/* <!-- Fin Desplegable de navegación 2 --> */}
                {/* <!-- Inicio Desplegable de navegación 3 --> */}
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
                {/* <!-- Fin Desplegable de navegación 3 --> */}
              </div>
            </div>
          </div>

          <div className="aside sky-900"></div>
        </header>
      </div>
    ),
  },
];

const HeroTemplate: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="HeroTemplate"
        description={[
          'En esta sección, aprenderás cómo instalar y comenzar a utilizar la librería de estilos de componentes Obelisco V2 en tus proyectos. Siguiendo unos sencillos pasos, podrás integrar nuestros componentes estilizados en cualquier aplicación web, ya sea que trabajes con React, Angular, o cualquier otra tecnología.',
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="none" />
    </>
  );
};

export default HeroTemplate;
