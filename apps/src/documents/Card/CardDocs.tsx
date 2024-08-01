'use client'

import React, { useRef } from 'react';
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from '@/components/Template/Box';
import HeadingTemplate from '@/components/Template/HeadingTemplate';
import MainDescription from '@/components/Template/MainDescription';
import Divisor from '@/components/Template/Divisor';
import SimpleText from '@/components/Template/SimpleText';

import { EGCodeButton, EGCodeButtonExpandable, EGCodeButtonIcon, EGCodeButtonOutline, EGCodeButtonSizes, EGCodeButtonSpinner, EGcodeImportButton } from './code-views';

const CardDocs: React.FC = () => {

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  const section7Ref = useRef<HTMLDivElement>(null);
  const section8Ref = useRef<HTMLDivElement>(null);
  const section9Ref = useRef<HTMLDivElement>(null);
  const section10Ref = useRef<HTMLDivElement>(null);

  return (
    <BoxTemplate>
      <div
        className="col-12"
      >
        <Scrollspy sectionRefs={[
          section1Ref,
          section2Ref,
          section3Ref,
          section4Ref,
          section5Ref,
          section6Ref,
          section7Ref,
          section8Ref,
          section9Ref,
          section10Ref
        ]}>
          {({ currentElementIndexInViewport }) => (
            <div className='box-scrollspy'>
              <div className='nav-scrollspy d-none d-lg-block'>
                <ul
                  className='scrollspy'
                  data-cy="nav-wrapper"
                >
                  <p className='font-weight-bold mb-1'> On this page
                  </p>
                  <li className={currentElementIndexInViewport === 0 ? "active" : ""}><a href="#section-1">Introducción</a></li>
                  <li className={currentElementIndexInViewport === 1 ? "active" : ""}><a href="#section-2">Importación</a></li>
                  <li className={currentElementIndexInViewport === 2 ? "active" : ""}><a href="#section-3">Uso</a></li>
                  <li className={currentElementIndexInViewport === 3 ? "active" : ""}><a href="#section-4">Simple</a></li>
                  <li className={currentElementIndexInViewport === 4 ? "active" : ""}><a href="#section-5">Modos de uso</a></li>
                  <li className={currentElementIndexInViewport === 5 ? "active" : ""}><a href="#section-6">Outlines</a></li>
                  <li className={currentElementIndexInViewport === 6 ? "active" : ""}><a href="#section-7">Sizes</a></li>
                  <li className={currentElementIndexInViewport === 7 ? "active" : ""}><a href="#section-8">Expandible</a></li>
                  <li className={currentElementIndexInViewport === 8 ? "active" : ""}><a href="#section-9">Con Icono</a></li>
                  <li className={currentElementIndexInViewport === 9 ? "active" : ""}><a href="#section-10">Con spinner</a></li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Tarjetas</h1>
                    </HeadingTemplate>
                    <MainDescription description="Las tarjetas son componentes accionables que se utilizan en grupo para comunicar información que requiere de cierto tipo de categorización y jerarquización visual. Se visualizan en contenedores flexibles y actúan como punto de entrada a un tema en particular." />
                  </section>

                  <Divisor />
                  {/* 
                  <div className='col-6'>
                    <Card>
                      <CardBody>
                        <i className="bx bxs-info-circle card-icon"></i>
                        <CardTitle>
                          <CardLink allClickable>
                            Título de la tarjeta
                          </CardLink>
                        </CardTitle>
                        <CardText>
                          Descripción de la tarjeta.
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>

                  <br />

                  <div className='col-6'>
                    <Card isVerticalUbordered>
                      <CardBody>
                        <i className="bx bxs-info-circle card-icon"></i>
                        <CardTitle>
                          <CardLink href='www.google.com'>
                            Título de la tarjeta
                          </CardLink>
                        </CardTitle>
                        <CardText>
                          Descripción de la tarjeta.
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>

                  <br />

                  <div className='col-6'>
                    <Card>
                      <CardImg src="https://gcba.github.io/Obelisco/cards/img-top.jpg" />
                      <CardBody>
                        <CardTitle>
                          <CardLink allClickable>
                            Título de la tarjeta
                          </CardLink>
                        </CardTitle>
                        <CardText>
                          Descripción de la tarjeta.
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>

                  <br />

                  <div className='col-6'>
                    <Card>
                      <CardImg src="https://gcba.github.io/Obelisco/cards/img-top.jpg" />
                      <CardBody>
                        <CardBadges>
                          <Badge isDanger>
                            Etiqueta
                          </Badge>
                          <Badge isPrimary>
                            Etiqueta
                          </Badge>
                          <Badge isSecondary>
                            Etiqueta
                          </Badge>
                        </CardBadges>
                        <CardTitle>
                          <CardLink allClickable>
                            Título de la tarjeta
                          </CardLink>
                        </CardTitle>
                        <CardText>
                          Descripción de la tarjeta.
                        </CardText>
                        <CardInfo>
                          <small>
                            Fecha de publicación
                          </small>
                        </CardInfo>
                      </CardBody>
                    </Card>
                  </div>

                  <br />

                  <div className='col-6'>
                    <Card>
                      <CardImg src="https://gcba.github.io/Obelisco/cards/img-top.jpg" />
                      <CardBody>
                        <CardHeadline>
                          sobrelinea
                        </CardHeadline>
                        <CardTitle>
                          <CardLink allClickable>
                            Título de la tarjeta
                          </CardLink>
                        </CardTitle>
                        <CardText>
                          Descripción de la tarjeta.
                        </CardText>
                        <CardInfo>
                          <div className="pt-2">
                            <small>
                              <span className="material-icons-round">calendar_today</span>
                              Lun 01/1
                            </small>
                            <small>
                              <span className="material-icons-round">watch_later</span>
                              17 | 18 | 19 hs
                            </small>
                          </div>
                        </CardInfo>
                      </CardBody>
                    </Card>
                  </div>

                  <br />
                  <p>horizontal</p>

                  <div className='col-6'>
                    <Card isHorizontal>
                      <i className="bx bxs-info-circle card-icon-left"></i>
                      <CardBody>
                        <CardTitle>
                          <CardLink allClickable>
                            Título de la tarjeta
                          </CardLink>
                        </CardTitle>
                        <CardText>
                          Descripción de la tarjeta.
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>

                  <br />

                  <div className='col-6'>
                    <Card isHorizontal isHorizontalUnbordered>
                      <i className="bx bxs-info-circle card-icon-left"></i>
                      <CardBody>
                        <CardTitle>
                          <CardLink>
                            Título de la tarjeta
                          </CardLink>
                        </CardTitle>
                        <CardText>
                          Descripción de la tarjeta.
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>

                  <br />

                  <div className='col-6'>
                    <Card isHorizontal>
                      <CardImg src="https://gcba.github.io/Obelisco/cards/img-top.jpg" imgHorizontal />
                      <CardBody>
                        <CardTitle>
                          <CardLink allClickable>
                            Título de la tarjeta
                          </CardLink>
                        </CardTitle>
                        <CardText>
                          Descripción de la tarjeta.
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>

                  <br />

                  <div className='col-6'>
                    <Card isHorizontal isHorizontalUnbordered>
                      <CardImg src="https://gcba.github.io/Obelisco/cards/img-top.jpg" imgHorizontal />
                      <CardBody>
                        <CardTitle>
                          <CardLink>
                            Título de la tarjeta
                          </CardLink>
                        </CardTitle>
                        <CardText>
                          Descripción de la tarjeta.
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>

                  <br />

                  <div className='col-6'>
                    <Card isHorizontal>
                      <CardBody>
                        <CardTitle>
                          <CardLink allClickable>
                            Título de la tarjeta
                          </CardLink>
                        </CardTitle>
                        <CardText>
                          Descripción de la tarjeta.
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>

                  <br />

                  <div className='col-6'>
                    <Card isHorizontal isHorizontalUnbordered>
                      <CardBody>
                        <CardTitle>
                          <CardLink>
                            Título de la tarjeta
                          </CardLink>
                        </CardTitle>
                        <CardText>
                          Descripción de la tarjeta.
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>

                  <br />

                  <div className='col-8'>
                    <Card isThematic>
                      <CardImg src="https://gcba.github.io/Obelisco/cards/home.svg" imgHorizontal />
                      <CardBody>
                        <CardTitle>
                          <CardLink>
                            Título de la tarjeta
                          </CardLink>
                        </CardTitle>
                        <CardText>
                          Descripción de la tarjeta.
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>

                  <br />

                  <div className='col-6'>
                    <Card isMap>
                      <CardBody>
                        <CardTitle>
                          Ubicación
                        </CardTitle>
                        <CardText>
                          Av. Uspallata 3160
                        </CardText>
                        <CardIframe>
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.561313314447!2d-58.40988132452283!3d-34.64052465944252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0de7f4d675%3A0xfc2ef5324296a64!2sUspallata%203160%2C%20C1437JCL%20CABA!5e0!3m2!1ses!2sar!4v1704218461718!5m2!1ses!2sar"
                            width="600"
                            height="146"
                            title="Mapa de como llegar"
                            loading="lazy"
                            tabIndex={1}
                            referrerPolicy="no-referrer-when-downgrade"
                            className='border-none'
                          ></iframe>
                        </CardIframe>
                        <Button isExpanded>Como llego</Button>
                      </CardBody>
                    </Card>
                  </div> */}

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">import</h2>
                    </HeadingTemplate>
                    <SimpleText description="Recuerda importarlo de manera correcta, ya sea el componente completo o cada modulo del componente por separado." />
                    <CodeCopy code={EGcodeImportButton} />
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Usage</h2>
                    </HeadingTemplate>
                    <SimpleText description="loremloremlorem loremloremlorem loremlorem lorem lorem loremlorem." />
                  </section>

                  <Divisor />

                  <section id="section-4" ref={section4Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Simple</h3>
                    </HeadingTemplate>
                    <SimpleText description="Este componente proporciona el componente Acceso completo con la finalidad de que se use con icono, sin icono, con descripcion o sin descripcion, es un componente fijo no modular, permite añadirle un className, pero no se recomienda añadirle mas codigo HTML ya que este componente tambien se encuentra en la seccion Acceso Modularizado." />

                    {/* <div className='d-flex flex-wrap gap-1'>
                      <div>
                        <Button>Default Button</Button>
                      </div>
                    </div> */}

                    <br />
                    <CodeCopy code={EGCodeButton} />
                  </section>

                  <Divisor />

                  <section id="section-5" ref={section5Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Modos de uso</h3>
                    </HeadingTemplate>

                    <SimpleText description="Se desarrolla de manera modular, permitiendo una mayor libertad al momento de usar el componente, permitiendo añadir mas HTML y clases personalizadas permitiendo que el componente pueda adaptarse a cada necesidad, manteniendo la estructura base del componente." />
                  </section>

                  <Divisor />

                  <section id="section-6" ref={section6Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Outlines</h3>
                    </HeadingTemplate>

                    <SimpleText description="Se añade con la finalidad de envolver los elementos que estaran incluidos en el componente Acceso, como titulos, descripcion, iconos entre otros, este componente recibe una props url y className. Basicamente es un tag <a> que viene con los estilos bases de obelisco." />

                    {/* <div className='d-flex flex-wrap gap-1'>
                      <div>
                        <Button isOutlinePrimary>Large Button</Button>
                      </div>

                      <div>
                        <Button isOutlineSecondary>Default Button</Button>
                      </div>

                      <div>
                        <Button isOutlineSuccess>Small Button</Button>
                      </div>

                      <div>
                        <Button isOutlineDanger>Small Button</Button>
                      </div>

                      <div>
                        <Button isOutlineLink>Small Button</Button>
                      </div>
                    </div> */}

                    <CodeCopy code={EGCodeButtonOutline} />
                  </section>

                  <Divisor />

                  <section id="section-7" ref={section7Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Sizes</h3>
                    </HeadingTemplate>

                    <SimpleText description="Se añade con la finalidad de envolver los elementos Ttulos y descripcion, recibe un children que permite agregar mas contenido dependiendo de las necesidades e incluyen la props className para asignar clases customizadas." />

                    {/* <div className='d-flex flex-wrap gap-1'>
                      <div>
                        <Button size="lg">LG Button</Button>
                      </div>

                      <div>
                        <Button>Default Button</Button>
                      </div>

                      <div>
                        <Button size="sm">SM Button</Button>
                      </div>
                    </div> */}

                    <CodeCopy code={EGCodeButtonSizes} />
                  </section>

                  <Divisor />

                  <section id="section-8" ref={section8Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Expandible</h3>
                    </HeadingTemplate>

                    <SimpleText description="Se añade con la finalidad de asignar un titulo, este titulo viene con los estilos proporcionados por Obelisco." />

                    <div className='d-flex flex-wrap gap-1'>
                      {/* <div className='col-12 col-lg-6 p-0'>
                        <Button isSecondary isExpanded>Expandible</Button>
                      </div> */}
                    </div>

                    <CodeCopy code={EGCodeButtonExpandable} />
                  </section>

                  <Divisor />

                  <section id="section-9" ref={section9Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Con Icono</h3>
                    </HeadingTemplate>

                    <SimpleText description="Se añade con la finalidad de asignar una descricioón, esta descripción viene con los estilos proporcionados por Obelisco." />

                    {/* <div className='d-flex flex-wrap gap-1'>
                      <div>
                        <Button isIcon>
                          <i className="bx bxs-info-circle"></i>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isSecondary isIcon>
                          <i className="bx bxs-info-circle"></i>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isSuccess isIcon>
                          <i className="bx bxs-info-circle"></i>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isDanger isIcon>
                          <i className="bx bxs-info-circle"></i>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isLink isIcon>
                          <i className="bx bxs-info-circle"></i>
                          Botón
                        </Button>
                      </div>

                      <br />

                      <div>
                        <Button isOutlinePrimary isIcon>
                          <i className="bx bxs-info-circle"></i>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isOutlineSecondary isIcon>
                          <i className="bx bxs-info-circle"></i>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isOutlineSuccess isIcon>
                          <i className="bx bxs-info-circle"></i>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isOutlineDanger isIcon>
                          <i className="bx bxs-info-circle"></i>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isOutlineLink isIcon>
                          <i className="bx bxs-info-circle"></i>
                          Botón
                        </Button>
                      </div>
                    </div> */}

                    <CodeCopy code={EGCodeButtonIcon} />
                  </section>

                  <Divisor />

                  <section id="section-10" ref={section10Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Con Spinner</h3>
                    </HeadingTemplate>

                    <SimpleText description="Juntando los atomos del componente podemos llegar al componente final de Accesos de Obelisco." />

                    {/* <div className='d-flex flex-wrap gap-1'>
                      <div>
                        <Button isIcon>
                          <div className="spinner-border text-dark spinner-border-sm" role="status">
                            <span className="sr-only">Cargando...</span>
                          </div>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isSecondary isIcon>
                          <div className="spinner-border text-light spinner-border-sm" role="status">
                            <span className="sr-only">Cargando...</span>
                          </div>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isSuccess isIcon>
                          <div className="spinner-border text-light spinner-border-sm" role="status">
                            <span className="sr-only">Cargando...</span>
                          </div>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isDanger isIcon>
                          <div className="spinner-border text-light spinner-border-sm" role="status">
                            <span className="sr-only">Cargando...</span>
                          </div>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isLink isIcon>
                          <div className="spinner-border text-info spinner-border-sm" role="status">
                            <span className="sr-only">Cargando...</span>
                          </div>
                          Botón
                        </Button>
                      </div>

                      <br />

                      <div>
                        <Button isOutlinePrimary isIcon>
                          <div className="spinner-border text-dark spinner-border-sm" role="status">
                            <span className="sr-only">Cargando...</span>
                          </div>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isOutlineSecondary isIcon>
                          <div className="spinner-border text-secondary  spinner-border-sm" role="status">
                            <span className="sr-only">Cargando...</span>
                          </div>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isOutlineSuccess isIcon>
                          <div className="spinner-border text-success spinner-border-sm" role="status">
                            <span className="sr-only">Cargando...</span>
                          </div>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isOutlineDanger isIcon>
                          <div className="spinner-border text-danger spinner-border-sm" role="status">
                            <span className="sr-only">Cargando...</span>
                          </div>
                          Botón
                        </Button>
                      </div>

                      <div>
                        <Button isOutlineLink isIcon>
                          <div className="spinner-border text-info spinner-border-sm" role="status">
                            <span className="sr-only">Cargando...</span>
                          </div>
                          Botón
                        </Button>
                      </div>
                    </div> */}

                    <CodeCopy code={EGCodeButtonSpinner} />
                  </section>
                </div>
              </article>
            </div>
          )}
        </Scrollspy>
      </div>
    </BoxTemplate >
  );
};

export default CardDocs;
