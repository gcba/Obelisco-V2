import Image from 'next/image';

import LinkClient from '@/components/LinkClient';
import ComponentHeader from '@/components/Template/ComponentHeader';

const basePath = '/Obelisco-V2';
const colors = ['yellow', 'cyan', 'blue'];

const CarouselDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader title="Carousel" description={['Descripcion Carousel']} />

      <div className="container">
        <h2>DESTACADO</h2>
        <div id="carousel" className="carousel slide" data-bs-wrap="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="panel-horizontal-content">
                <div className="panel-horizontal">
                  <Image
                    src={`${basePath}/images/destacado.jpg`}
                    alt="descripción de imagen"
                    className="panel-img"
                    width={538}
                    height={304}
                  ></Image>
                  <div className="panel-body">
                    <h2 className="panel-title">Título del destacado</h2>
                    <p className="panel-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <LinkClient className="btn btn-secondary btn-lg">Botón</LinkClient>
                      <LinkClient className="btn btn-outline-secondary btn-lg">Botón</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="panel-horizontal-content">
                <div className="panel-horizontal">
                  <Image
                    src={`${basePath}/images/destacado.jpg`}
                    alt="descripción de imagen"
                    className="panel-img"
                    width={538}
                    height={304}
                  ></Image>
                  <div className="panel-body">
                    <h2 className="panel-title">Título del destacado</h2>
                    <p className="panel-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <LinkClient className="btn btn-secondary btn-lg">Botón</LinkClient>
                      <LinkClient className="btn btn-outline-secondary btn-lg">Botón</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="panel-horizontal-content">
                <div className="panel-horizontal">
                  <Image
                    src={`${basePath}/images/destacado.jpg`}
                    alt="descripción de imagen"
                    className="panel-img"
                    width={538}
                    height={304}
                  ></Image>
                  <div className="panel-body">
                    <h2 className="panel-title">Título del destacado</h2>
                    <p className="panel-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <LinkClient className="btn btn-secondary btn-lg">Botón</LinkClient>
                      <LinkClient className="btn btn-outline-secondary btn-lg">Botón</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>

        <h2> DESTACADO DARK</h2>
        <div id="carousel-dark" className="carousel dark slide" data-bs-wrap="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="panel-horizontal-content">
                <div className="panel-horizontal">
                  <Image
                    src={`${basePath}/images/destacado.jpg`}
                    alt="descripción de imagen"
                    className="panel-img"
                    width={538}
                    height={304}
                  ></Image>
                  <div className="panel-body">
                    <h2 className="panel-title">Título del destacado</h2>
                    <p className="panel-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <LinkClient className="btn btn-light btn-lg">Botón</LinkClient>
                      <LinkClient className="btn btn-outline-light btn-lg">Botón</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="panel-horizontal-content">
                <div className="panel-horizontal">
                  <Image
                    src={`${basePath}/images/destacado.jpg`}
                    alt="descripción de imagen"
                    className="panel-img"
                    width={538}
                    height={304}
                  ></Image>
                  <div className="panel-body">
                    <h2 className="panel-title">Título del destacado</h2>
                    <p className="panel-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <LinkClient className="btn btn-light btn-lg">Botón</LinkClient>
                      <LinkClient className="btn btn-outline-light btn-lg">Botón</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="panel-horizontal-content">
                <div className="panel-horizontal">
                  <Image
                    src={`${basePath}/images/destacado.jpg`}
                    alt="descripción de imagen"
                    className="panel-img"
                    width={538}
                    height={304}
                  ></Image>
                  <div className="panel-body">
                    <h2 className="panel-title">Título del destacado</h2>
                    <p className="panel-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <LinkClient className="btn btn-light btn-lg">Botón</LinkClient>
                      <LinkClient className="btn btn-outline-light btn-lg">Botón</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel-dark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button type="button" data-bs-target="#carousel-dark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel-dark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carousel-dark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel-dark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>

        <h2>CARDS</h2>
        <div id="carousel-cards" className="carousel cards slide" data-bs-wrap="false">
          <h4 className="m-0">Encabezado de la seccion</h4>

          <div className="carousel-inner responsive-scroll">
            <div className="carousel-item active">
              {colors.map((color, i) => (
                <div className="card" key={i}>
                  <Image
                    src={`${basePath}/images/card-img-top.jpg`}
                    className="card-img"
                    alt="descripción de imagen"
                    width={348}
                    height={196}
                  />
                  <div className={`card-body card-border-bottom-${color}`}>
                    <h3 className="card-title">
                      <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                    </h3>
                    <p className="card-text">Descripción de la tarjeta</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-item">
              {colors.map((color, i) => (
                <div className="card" key={i}>
                  <Image
                    src={`${basePath}/images/card-img-top.jpg`}
                    className="card-img"
                    alt="descripción de imagen"
                    width={348}
                    height={196}
                  />
                  <div className={`card-body card-border-bottom-${color}`}>
                    <h3 className="card-title">
                      <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                    </h3>
                    <p className="card-text">Descripción de la tarjeta</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-item">
              {colors.map((color, i) => (
                <div className="card" key={i}>
                  <Image
                    src={`${basePath}/images/card-img-top.jpg`}
                    className="card-img"
                    alt="descripción de imagen"
                    width={348}
                    height={196}
                  />
                  <div className={`card-body card-border-bottom-${color}`}>
                    <h3 className="card-title">
                      <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                    </h3>
                    <p className="card-text">Descripción de la tarjeta</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel-cards"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button type="button" data-bs-target="#carousel-cards" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel-cards" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carousel-cards" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel-cards" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>

          <a href="#" target="_blank" rel="noopener noreferrer">
            Enlace predeterminado
          </a>
        </div>

        <h2>CARDS DARK</h2>
        <div id="carousel-cards-dark" className="carousel cards dark slide" data-bs-wrap="false">
          <h4 className="m-0">Encabezado de la seccion</h4>

          <div className="carousel-inner responsive-scroll">
            <div className="carousel-item active">
              {colors.map((color, i) => (
                <div className="card" key={i}>
                  <Image
                    src={`${basePath}/images/card-img-top.jpg`}
                    className="card-img"
                    alt="descripción de imagen"
                    width={348}
                    height={196}
                  />
                  <div className={`card-body card-border-bottom-${color}`}>
                    <h3 className="card-title">
                      <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                    </h3>
                    <p className="card-text">Descripción de la tarjeta</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-item">
              {colors.map((color, i) => (
                <div className="card" key={i}>
                  <Image
                    src={`${basePath}/images/card-img-top.jpg`}
                    className="card-img"
                    alt="descripción de imagen"
                    width={348}
                    height={196}
                  />
                  <div className={`card-body card-border-bottom-${color}`}>
                    <h3 className="card-title">
                      <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                    </h3>
                    <p className="card-text">Descripción de la tarjeta</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-item">
              {colors.map((color, i) => (
                <div className="card" key={i}>
                  <Image
                    src={`${basePath}/images/card-img-top.jpg`}
                    className="card-img"
                    alt="descripción de imagen"
                    width={348}
                    height={196}
                  />
                  <div className={`card-body card-border-bottom-${color}`}>
                    <h3 className="card-title">
                      <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                    </h3>
                    <p className="card-text">Descripción de la tarjeta</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel-cards-dark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel-cards-dark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel-cards-dark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <a href="#" target="_blank" className="link-white" rel="noopener noreferrer">
            Enlace predeterminado
          </a>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel-cards-dark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel-cards-dark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CarouselDocs;
