import Image from 'next/image';

import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  CAROUSEL_DESTACADO,
  CAROUSEL_DESTACADO_DARK,
  CAROUSEL_CARDS,
  CAROUSEL_CARDS_DARK,
  CAROUSEL_CARDS_EVENTS,
} from './code-views';

const basePath = '/Obelisco-V2';
const colors = ['yellow', 'cyan', 'blue'];

const ZoomContainer = ({ children }: React.PropsWithChildren) => <div style={{ zoom: 0.5 }}>{children}</div>;

const CarouselDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'De destacados',
      firstTitle: true,
    },
    {
      subtitle: 'Con fondo claro',
      content: (
        <CodeBox codeHTML={CAROUSEL_DESTACADO}>
          <div className="container">
            <ZoomContainer>
              <div id="carousel" className="carousel slide">
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
                            Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede
                            contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso,
                            de pocas líneas. No puede contener negritas ni enlaces
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
                            Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede
                            contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso,
                            de pocas líneas. No puede contener negritas ni enlaces
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
                            Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede
                            contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso,
                            de pocas líneas. No puede contener negritas ni enlaces
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
            </ZoomContainer>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Con fondo oscuro',
      content: (
        <CodeBox codeHTML={CAROUSEL_DESTACADO_DARK}>
          <div className="container">
            <ZoomContainer>
              <div id="carousel-dark" className="carousel dark slide">
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
                            Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede
                            contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso,
                            de pocas líneas. No puede contener negritas ni enlaces
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
                            Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede
                            contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso,
                            de pocas líneas. No puede contener negritas ni enlaces
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
                            Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede
                            contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso,
                            de pocas líneas. No puede contener negritas ni enlaces
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
                  <button
                    type="button"
                    data-bs-target="#carousel-dark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carousel-dark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carousel-dark"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carousel-dark"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </div>
            </ZoomContainer>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'De tarjetas',
    },
    {
      subtitle: 'Con fondo claro',
      content: (
        <CodeBox codeHTML={CAROUSEL_CARDS}>
          <div className="container">
            <ZoomContainer>
              <div id="carousel-cards" className="carousel cards slide">
                <div className="title">
                  <h4 className="m-0">Encabezado de la seccion</h4>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Enlace predeterminado
                  </a>
                </div>

                <div className="carousel-inner responsive-scroll">
                  <div className="carousel-item active">
                    <div className="card-items">
                      <div className="card">
                        <Image
                          src={`${basePath}/images/card-img-top.jpg`}
                          className="card-img"
                          alt="descripción de imagen"
                          width={348}
                          height={196}
                        />
                        <div className="card-body card-border-bottom-yellow">
                          <h3 className="card-title">
                            <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                          </h3>
                          <p className="card-text">Descripción de la tarjeta</p>
                        </div>
                      </div>
                      <div className="card">
                        <Image
                          src={`${basePath}/images/card-img-top.jpg`}
                          className="card-img"
                          alt="descripción de imagen"
                          width={348}
                          height={196}
                        />
                        <div className="card-body card-border-bottom-yellow">
                          <h3 className="card-title">
                            <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                          </h3>
                          <p className="card-text">Descripción de la tarjeta</p>
                        </div>
                      </div>
                      {/* {colors.map((color, i) => (
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
                      ))} */}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card-items">
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
                  <div className="carousel-item">
                    <div className="card-items">
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
                  <button
                    type="button"
                    data-bs-target="#carousel-cards"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carousel-cards"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carousel-cards"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carousel-cards"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </div>
            </ZoomContainer>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Con fondo claro',
      content: (
        <CodeBox codeHTML={CAROUSEL_CARDS_EVENTS}>
          <div className="container">
            <ZoomContainer>
              <div id="carousel-cards-eventos" className="carousel cards slide">
                <div className="title">
                  <h4 className="m-0">Encabezado de la seccion</h4>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Enlace predeterminado
                  </a>
                </div>

                <div className="carousel-inner responsive-scroll">
                  <div className="carousel-item active">
                    <div className="card-items">
                      <div className="card card-eventos">
                        <Image
                          alt="descripción de imagen"
                          loading="lazy"
                          width="348"
                          height="196"
                          decoding="async"
                          data-nimg="1"
                          className="card-img"
                          src="/Obelisco-V2/images/card-img-top.jpg"
                        />
                        <div className="card-body">
                          <p className="card-headline">TIPO DE EVENTO</p>
                          <div className="mb-3">
                            <span className="badge badge-default">Etiqueta</span>
                            <span className="badge badge-default">Tipo de público</span>
                          </div>
                          <h3 className="card-title">
                            <a
                              href="#"
                              className="card-title-link ellipsis-2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Este es el título del evento que puede contener 2 líneas de texto
                            </a>
                          </h3>
                          <p className="card-text ellipsis-4">
                            Esta es la descripción del evento que puede contener hasta 4 líneas de texto. Cuando la
                            descripción se excede de este límite, el texto se trunca y aparece el
                          </p>
                          <div className="card-info">
                            <div className="pt-2">
                              <small>
                                <span className="material-symbols-rounded o-icon">calendar_today</span>Lun 01/1
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">schedule</span>17 | 18 | 19 hs
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">location_on</span>Ubicación del evento
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card card-eventos">
                        <Image
                          alt="descripción de imagen"
                          loading="lazy"
                          width="348"
                          height="196"
                          decoding="async"
                          data-nimg="1"
                          className="card-img"
                          src="/Obelisco-V2/images/card-img-top.jpg"
                        />
                        <div className="card-body">
                          <p className="card-headline">TIPO DE EVENTO</p>
                          <div className="mb-3">
                            <span className="badge badge-default">Etiqueta</span>
                            <span className="badge badge-default">Tipo de público</span>
                          </div>
                          <h3 className="card-title">
                            <a
                              href="#"
                              className="card-title-link ellipsis-2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Este es el título del evento que puede contener 2 líneas de texto
                            </a>
                          </h3>
                          <p className="card-text ellipsis-4">
                            Esta es la descripción del evento que puede contener hasta 4 líneas de texto. Cuando la
                            descripción se excede de este límite, el texto se trunca y aparece el
                          </p>
                          <div className="card-info">
                            <div className="pt-2">
                              <small>
                                <span className="material-symbols-rounded o-icon">calendar_today</span>Lun 01/1
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">schedule</span>17 | 18 | 19 hs
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">location_on</span>Ubicación del evento
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card-items">
                      <div className="card card-eventos">
                        <Image
                          alt="descripción de imagen"
                          loading="lazy"
                          width="348"
                          height="196"
                          decoding="async"
                          data-nimg="1"
                          className="card-img"
                          src="/Obelisco-V2/images/card-img-top.jpg"
                        />
                        <div className="card-body">
                          <p className="card-headline">TIPO DE EVENTO</p>
                          <div className="mb-3">
                            <span className="badge badge-default">Etiqueta</span>
                            <span className="badge badge-default">Tipo de público</span>
                          </div>
                          <h3 className="card-title">
                            <a
                              href="#"
                              className="card-title-link ellipsis-2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Este es el título del evento que puede contener 2 líneas de texto
                            </a>
                          </h3>
                          <p className="card-text ellipsis-4">
                            Esta es la descripción del evento que puede contener hasta 4 líneas de texto. Cuando la
                            descripción se excede de este límite, el texto se trunca y aparece el
                          </p>
                          <div className="card-info">
                            <div className="pt-2">
                              <small>
                                <span className="material-symbols-rounded o-icon">calendar_today</span>Lun 01/1
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">schedule</span>17 | 18 | 19 hs
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">location_on</span>Ubicación del evento
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card card-eventos">
                        <Image
                          alt="descripción de imagen"
                          loading="lazy"
                          width="348"
                          height="196"
                          decoding="async"
                          data-nimg="1"
                          className="card-img"
                          src="/Obelisco-V2/images/card-img-top.jpg"
                        />
                        <div className="card-body">
                          <p className="card-headline">TIPO DE EVENTO</p>
                          <div className="mb-3">
                            <span className="badge badge-default">Etiqueta</span>
                            <span className="badge badge-default">Tipo de público</span>
                          </div>
                          <h3 className="card-title">
                            <a
                              href="#"
                              className="card-title-link ellipsis-2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Este es el título del evento que puede contener 2 líneas de texto
                            </a>
                          </h3>
                          <p className="card-text ellipsis-4">
                            Esta es la descripción del evento que puede contener hasta 4 líneas de texto. Cuando la
                            descripción se excede de este límite, el texto se trunca y aparece el
                          </p>
                          <div className="card-info">
                            <div className="pt-2">
                              <small>
                                <span className="material-symbols-rounded o-icon">calendar_today</span>Lun 01/1
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">schedule</span>17 | 18 | 19 hs
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">location_on</span>Ubicación del evento
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card card-eventos">
                        <Image
                          alt="descripción de imagen"
                          loading="lazy"
                          width="348"
                          height="196"
                          decoding="async"
                          data-nimg="1"
                          className="card-img"
                          src="/Obelisco-V2/images/card-img-top.jpg"
                        />
                        <div className="card-body">
                          <p className="card-headline">TIPO DE EVENTO</p>
                          <div className="mb-3">
                            <span className="badge badge-default">Etiqueta</span>
                            <span className="badge badge-default">Tipo de público</span>
                          </div>
                          <h3 className="card-title">
                            <a
                              href="#"
                              className="card-title-link ellipsis-2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Este es el título del evento que puede contener 2 líneas de texto
                            </a>
                          </h3>
                          <p className="card-text ellipsis-4">
                            Esta es la descripción del evento que puede contener hasta 4 líneas de texto. Cuando la
                            descripción se excede de este límite, el texto se trunca y aparece el
                          </p>
                          <div className="card-info">
                            <div className="pt-2">
                              <small>
                                <span className="material-symbols-rounded o-icon">calendar_today</span>Lun 01/1
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">schedule</span>17 | 18 | 19 hs
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">location_on</span>Ubicación del evento
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card-items">
                      <div className="card card-eventos">
                        <Image
                          alt="descripción de imagen"
                          loading="lazy"
                          width="348"
                          height="196"
                          decoding="async"
                          data-nimg="1"
                          className="card-img"
                          src="/Obelisco-V2/images/card-img-top.jpg"
                        />
                        <div className="card-body">
                          <p className="card-headline">TIPO DE EVENTO</p>
                          <div className="mb-3">
                            <span className="badge badge-default">Etiqueta</span>
                            <span className="badge badge-default">Tipo de público</span>
                          </div>
                          <h3 className="card-title">
                            <a
                              href="#"
                              className="card-title-link ellipsis-2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Este es el título del evento que puede contener 2 líneas de texto
                            </a>
                          </h3>
                          <p className="card-text ellipsis-4">
                            Esta es la descripción del evento que puede contener hasta 4 líneas de texto. Cuando la
                            descripción se excede de este límite, el texto se trunca y aparece el
                          </p>
                          <div className="card-info">
                            <div className="pt-2">
                              <small>
                                <span className="material-symbols-rounded o-icon">calendar_today</span>Lun 01/1
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">schedule</span>17 | 18 | 19 hs
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">location_on</span>Ubicación del evento
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card card-eventos">
                        <Image
                          alt="descripción de imagen"
                          loading="lazy"
                          width="348"
                          height="196"
                          decoding="async"
                          data-nimg="1"
                          className="card-img"
                          src="/Obelisco-V2/images/card-img-top.jpg"
                        />
                        <div className="card-body">
                          <p className="card-headline">TIPO DE EVENTO</p>
                          <div className="mb-3">
                            <span className="badge badge-default">Etiqueta</span>
                            <span className="badge badge-default">Tipo de público</span>
                          </div>
                          <h3 className="card-title">
                            <a
                              href="#"
                              className="card-title-link ellipsis-2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Este es el título del evento que puede contener 2 líneas de texto
                            </a>
                          </h3>
                          <p className="card-text ellipsis-4">
                            Esta es la descripción del evento que puede contener hasta 4 líneas de texto. Cuando la
                            descripción se excede de este límite, el texto se trunca y aparece el
                          </p>
                          <div className="card-info">
                            <div className="pt-2">
                              <small>
                                <span className="material-symbols-rounded o-icon">calendar_today</span>Lun 01/1
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">schedule</span>17 | 18 | 19 hs
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">location_on</span>Ubicación del evento
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card card-eventos">
                        <Image
                          alt="descripción de imagen"
                          loading="lazy"
                          width="348"
                          height="196"
                          decoding="async"
                          data-nimg="1"
                          className="card-img"
                          src="/Obelisco-V2/images/card-img-top.jpg"
                        />
                        <div className="card-body">
                          <p className="card-headline">TIPO DE EVENTO</p>
                          <div className="mb-3">
                            <span className="badge badge-default">Etiqueta</span>
                            <span className="badge badge-default">Tipo de público</span>
                          </div>
                          <h3 className="card-title">
                            <a
                              href="#"
                              className="card-title-link ellipsis-2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Este es el título del evento que puede contener 2 líneas de texto
                            </a>
                          </h3>
                          <p className="card-text ellipsis-4">
                            Esta es la descripción del evento que puede contener hasta 4 líneas de texto. Cuando la
                            descripción se excede de este límite, el texto se trunca y aparece el
                          </p>
                          <div className="card-info">
                            <div className="pt-2">
                              <small>
                                <span className="material-symbols-rounded o-icon">calendar_today</span>Lun 01/1
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">schedule</span>17 | 18 | 19 hs
                              </small>
                              <small>
                                <span className="material-symbols-rounded o-icon">location_on</span>Ubicación del evento
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      y
                    </div>
                  </div>
                </div>

                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carousel-cards-eventos"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carousel-cards-eventos"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carousel-cards-eventos"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carousel-cards-eventos"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carousel-cards-eventos"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </div>
            </ZoomContainer>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Con fondo oscuro',
      content: (
        <CodeBox codeHTML={CAROUSEL_CARDS_DARK}>
          <div className="container">
            <ZoomContainer>
              <div id="carousel-cards-dark" className="carousel cards dark slide">
                <div className="title">
                  <h4 className="m-0">Encabezado de la seccion</h4>
                  <a href="#" target="_blank" className="link-white" rel="noopener noreferrer">
                    Enlace predeterminado
                  </a>
                </div>

                <div className="carousel-inner responsive-scroll">
                  <div className="carousel-item active">
                    <div className="card-items">
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
                  <div className="carousel-item">
                    <div className="card-items">
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
                  <div className="carousel-item">
                    <div className="card-items">
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
            </ZoomContainer>
          </div>
        </CodeBox>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Carrusel"
        description={[
          'El carrusel permite a las personas usuarias navegar horizontalmente para ver diferentes contenidos colocados dentro del componente, pueden ser grupos de tarjetas o contenido destacado.',
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default CarouselDocs;
