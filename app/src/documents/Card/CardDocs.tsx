import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  DISPOSITION_2,
  DISPOSITION_3,
  DISPOSITION_SCROLL,
  HORIZONTAL_ICON,
  HORIZONTAL_IMG,
  HORIZONTAL_TEXT,
  HORIZONTAL_THEME,
  TARJETAS_ACCESSIBILTY,
  TARJETAS_ACCESSIBILTY_2,
  VERTICAL_AGENDA,
  VERTICAL_ICON,
  VERTICAL_IMG,
  VERTICAL_NOTICE,
  VERTICAL_NOTICE_TRUNCATE,
} from './code-views';

const basePath = '/Obelisco-V2';

const CardDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Horizontal',
      firstTitle: true,
    },
    {
      subtitle: 'Con icono',
      content: (
        <CodeBox codeHTML={HORIZONTAL_ICON}>
          <div className="container">
            <div className="card-box-sizing">
              <div className="card card-horizontal">
                <i className="bx bxs-info-circle card-icon"></i>
                <div className="card-body">
                  <h3 className="card-title">
                    <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                  </h3>
                  <p className="card-text">Descripción de la tarjeta</p>
                </div>
              </div>
              <br />
              <div className="card card-horizontal unbordered">
                <i className="bx bxs-info-circle card-icon"></i>
                <div className="card-body">
                  <h3 className="card-title">
                    <LinkClient>Título de la tarjeta</LinkClient>
                  </h3>
                  <p className="card-text">Descripción de la tarjeta</p>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Con imagen',
      content: (
        <CodeBox codeHTML={HORIZONTAL_IMG}>
          <div className="container">
            <div className="card-box-sizing">
              <div className="card card-horizontal">
                <Image
                  src={`${basePath}/images/card-img-left.jpg`}
                  className="card-img"
                  alt="descripción de imagen"
                  width={64}
                  height={64}
                ></Image>
                <div className="card-body">
                  <h3 className="card-title">
                    <LinkClient className="card-title-link">Título de la tarjeta con más de una línea</LinkClient>
                  </h3>
                  <p className="card-text">Descripción de la tarjeta</p>
                </div>
              </div>
              <br />
              <div className="card card-horizontal unbordered">
                <Image
                  src={`${basePath}/images/card-img-left.jpg`}
                  className="card-img"
                  alt="descripción de imagen"
                  width={64}
                  height={64}
                ></Image>
                <div className="card-body">
                  <h3 className="card-title">
                    <LinkClient>Título de la tarjeta con más de una línea</LinkClient>
                  </h3>
                  <p className="card-text">Descripción de la tarjeta</p>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Solo texto',
      content: (
        <CodeBox codeHTML={HORIZONTAL_TEXT}>
          <div className="container">
            <div className="col-12 col-xl-8">
              <div className="card card-horizontal">
                <div className="card-body">
                  <h3 className="card-title">
                    <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                  </h3>
                  <p className="card-text">Descripción de la tarjeta</p>
                </div>
              </div>
              <br />
              <div className="card card-horizontal unbordered">
                <div className="card-body">
                  <h3 className="card-title">
                    <LinkClient>Título de la tarjeta</LinkClient>
                  </h3>
                  <p className="card-text">Descripción de la tarjeta</p>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Temática',
      content: (
        <CodeBox codeHTML={HORIZONTAL_THEME}>
          <div className="container">
            <div className="card-box-sizing">
              <div className="card thematic">
                <Image
                  src={`${basePath}/images/card-illustration.svg`}
                  className="card-img"
                  alt="descripción de imagen"
                  width={128}
                  height={128}
                ></Image>
                <div className="card-body">
                  <h3 className="card-title">
                    <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                  </h3>
                  <p className="card-text">Descripción de la tarjeta</p>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Vertical',
    },
    {
      subtitle: 'Con icono',
      content: (
        <CodeBox codeHTML={VERTICAL_ICON}>
          <div className="container">
            <div className="card-vertical-box-sizing">
              <div className="card">
                <i className="bx bxs-info-circle card-icon"></i>
                <div className="card-body">
                  <h3 className="card-title">
                    <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                  </h3>
                  <p className="card-text">Descripción de la tarjeta</p>
                </div>
              </div>
              <br />
              <div className="card unbordered">
                <i className="bx bxs-info-circle card-icon"></i>
                <div className="card-body">
                  <h3 className="card-title">
                    <LinkClient>Título de la tarjeta</LinkClient>
                  </h3>
                  <p className="card-text">Descripción de la tarjeta</p>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Con imagen',
      content: (
        <CodeBox codeHTML={VERTICAL_IMG}>
          <div className="container">
            <div className="card-vertical-box-sizing">
              <div className="card">
                <Image
                  src={`${basePath}/images/card-img-top.jpg`}
                  className="card-img"
                  alt="descripción de imagen"
                  width={348}
                  height={196}
                ></Image>
                <div className="card-body">
                  <h3 className="card-title">
                    <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                  </h3>
                  <p className="card-text">Descripción de la tarjeta</p>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Noticia',
      content: (
        <>
          <CodeBox codeHTML={VERTICAL_NOTICE}>
            <div className="container">
              <div className="card-vertical-box-sizing">
                <div className="card">
                  <Image
                    src={`${basePath}/images/card-img-top.jpg`}
                    className="card-img"
                    alt="descripción de imagen"
                    width={348}
                    height={196}
                  ></Image>
                  <div className="card-body">
                    <div className="card-badges">
                      <span className="badge badge-default">etiqueta 1</span>
                      <span className="badge badge-default">etiqueta 2</span>
                    </div>
                    <h3 className="card-title">
                      <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                    </h3>
                    <p className="card-text">Descripción de la tarjeta</p>
                    <div className="card-info">
                      <div>
                        <small>
                          <span>Fecha de publicación</span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <p>A continuación, se muestra variante Noticias con el título truncado: </p>
          <CodeBox codeHTML={VERTICAL_NOTICE_TRUNCATE}>
            <div className="container">
              <div className="card-vertical-box-sizing">
                <div className="card">
                  <Image
                    src="https://gcba.github.io/Obelisco/cards/img-top.jpg"
                    className="card-img"
                    alt="descripción de imagen"
                    width={348}
                    height={196}
                  ></Image>
                  <div className="card-body">
                    <div className="card-badges">
                      <span className="badge badge-default">etiqueta 1</span>
                      <span className="badge badge-default">etiqueta 2</span>
                    </div>
                    <h3 className="card-title">
                      <LinkClient className="card-title-link ellipsis-3">
                        Título de la tarjeta Noticias truncado con texto extendido que supera las tres líneas de
                        longitud.
                      </LinkClient>
                    </h3>
                    <p className="card-text">Descripción de la tarjeta</p>
                    <div className="card-info">
                      <div>
                        <small>
                          <span>Fecha de publicación</span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Agenda',
      content: (
        <CodeBox codeHTML={VERTICAL_AGENDA}>
          <div className="container">
            <div className="card-vertical-box-sizing">
              <div className="card">
                <Image
                  src={`${basePath}/images/card-img-top.jpg`}
                  className="card-img"
                  alt="descripción de imagen"
                  width={348}
                  height={196}
                ></Image>
                <div className="card-body">
                  <p className="card-headline">sobrelinea</p>
                  <h3 className="card-title">
                    <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                  </h3>
                  <p className="card-text">Descripción de la tarjeta</p>
                  <div className="card-info">
                    <div className="pt-2">
                      <small>
                        <span className="material-symbols-rounded o-icon">calendar_today</span>
                        Lun 01/1
                      </small>
                      <small>
                        <span className="material-symbols-rounded o-icon">schedule</span>
                        17 | 18 | 19 hs
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Disposición',
    },
    {
      subtitle: 'Disposicion con scroll',
      content: (
        <CodeBox codeHTML={DISPOSITION_3}>
          <div className="card-box-sizing-disp-scroll">
            <div className="container">
              <div className="responsive-scroll has-card-items " tabIndex={0}>
                <div className="card-items-3">
                  <div className="col">
                    <div className="card">
                      <Image
                        src={`${basePath}/images/card-img-top.jpg`}
                        className="card-img"
                        alt="descripción de imagen"
                        width={348}
                        height={196}
                      ></Image>{' '}
                      <div className="card-body">
                        <div className="card-badges">
                          <span className="badge badge-default">etiqueta 1</span>
                          <span className="badge badge-default">etiqueta 2</span>
                        </div>
                        <h3 className="card-title">
                          <a href="#" className="card-title-link">
                            Título de la tarjeta
                          </a>
                        </h3>
                        <p className="card-text">Descripción de la tarjeta</p>
                        <div className="card-info">
                          <div>
                            <small>
                              <span>Fecha de publicación</span>
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <Image
                        src={`${basePath}/images/card-img-top.jpg`}
                        className="card-img"
                        alt="descripción de imagen"
                        width={348}
                        height={196}
                      ></Image>
                      <div className="card-body">
                        <div className="card-badges">
                          <span className="badge badge-default">etiqueta 1</span>
                          <span className="badge badge-default">etiqueta 2</span>
                        </div>
                        <h3 className="card-title">
                          <a href="#" className="card-title-link">
                            Título de la tarjeta
                          </a>
                        </h3>
                        <p className="card-text">Descripción de la tarjeta</p>
                        <div className="card-info">
                          <div>
                            <small>
                              <span>Fecha de publicación</span>
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <Image
                        src={`${basePath}/images/card-img-top.jpg`}
                        className="card-img"
                        alt="descripción de imagen"
                        width={348}
                        height={196}
                      ></Image>
                      <div className="card-body">
                        <div className="card-badges">
                          <span className="badge badge-default">etiqueta 1</span>
                          <span className="badge badge-default">etiqueta 2</span>
                        </div>
                        <h3 className="card-title">
                          <a href="#" className="card-title-link">
                            Título de la tarjeta
                          </a>
                        </h3>
                        <p className="card-text">Descripción de la tarjeta</p>
                        <div className="card-info">
                          <div>
                            <small>
                              <span>Fecha de publicación</span>
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <Image
                        src={`${basePath}/images/card-img-top.jpg`}
                        className="card-img"
                        alt="descripción de imagen"
                        width={348}
                        height={196}
                      ></Image>
                      <div className="card-body">
                        <div className="card-badges">
                          <span className="badge badge-default">etiqueta 1</span>
                          <span className="badge badge-default">etiqueta 2</span>
                        </div>
                        <h3 className="card-title">
                          <a href="#" className="card-title-link">
                            Título de la tarjeta
                          </a>
                        </h3>
                        <p className="card-text">Descripción de la tarjeta</p>
                        <div className="card-info">
                          <div>
                            <small>
                              <span>Fecha de publicación</span>
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col">
                    <div className="card">
                      <Image
                    src={`${basePath}/images/card-img-top.jpg`}
                    className="card-img"
                    alt="descripción de imagen"
                    width={348}
                    height={196}
                  ></Image>
                      <div className="card-body">
                        <div className="card-badges">
                          <span className="badge badge-default">etiqueta 1</span>
                          <span className="badge badge-default">etiqueta 2</span>
                        </div>
                        <h3 className="card-title">
                          <a href="#" className="card-title-link">
                            Título de la tarjeta
                          </a>
                        </h3>
                        <p className="card-text">Descripción de la tarjeta</p>
                        <div className="card-info">
                          <div>
                            <small>
                              <span>Fecha de publicación</span>
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Tres columnas',
      content: (
        <CodeBox codeHTML={DISPOSITION_3}>
          <div className="card-box-sizing-columns">
            <div className="container">
              <div className="card-items-3">
                <div className="col">
                  <div className="card">
                    <i className="bx bxs-info-circle card-icon"></i>
                    <div className="card-body">
                      <h3 className="card-title">
                        <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                      </h3>
                      <p className="card-text">Descripción de la tarjeta</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <i className="bx bxs-info-circle card-icon"></i>
                    <div className="card-body">
                      <h3 className="card-title">
                        <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                      </h3>
                      <p className="card-text">Descripción de la tarjeta</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <i className="bx bxs-info-circle card-icon"></i>
                    <div className="card-body">
                      <h3 className="card-title">
                        <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                      </h3>
                      <p className="card-text">Descripción de la tarjeta</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <i className="bx bxs-info-circle card-icon"></i>
                    <div className="card-body">
                      <h3 className="card-title">
                        <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                      </h3>
                      <p className="card-text">Descripción de la tarjeta</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <i className="bx bxs-info-circle card-icon"></i>
                    <div className="card-body">
                      <h3 className="card-title">
                        <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                      </h3>
                      <p className="card-text">Descripción de la tarjeta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Dos columnas',
      content: (
        <CodeBox codeHTML={DISPOSITION_2}>
          <div className="card-box-sizing-columns-2">
            <div className="container">
              <div className="card-items-2">
                <div className="col">
                  <div className="card card-horizontal">
                    <i className="bx bxs-info-circle card-icon"></i>
                    <div className="card-body">
                      <h3 className="card-title">
                        <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                      </h3>
                      <p className="card-text">Descripción de la tarjeta</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-horizontal">
                    <i className="bx bxs-info-circle card-icon"></i>
                    <div className="card-body">
                      <h3 className="card-title">
                        <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                      </h3>
                      <p className="card-text">Descripción de la tarjeta</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-horizontal">
                    <i className="bx bxs-info-circle card-icon"></i>
                    <div className="card-body">
                      <h3 className="card-title">
                        <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                      </h3>
                      <p className="card-text">Descripción de la tarjeta</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-horizontal">
                    <i className="bx bxs-info-circle card-icon"></i>
                    <div className="card-body">
                      <h3 className="card-title">
                        <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                      </h3>
                      <p className="card-text">Descripción de la tarjeta</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-horizontal">
                    <i className="bx bxs-info-circle card-icon"></i>
                    <div className="card-body">
                      <h3 className="card-title">
                        <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                      </h3>
                      <p className="card-text">Descripción de la tarjeta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Desplazable',
      content: (
        <CodeBox codeHTML={DISPOSITION_SCROLL}>
          <div className="container">
            <div className="responsive-scroll vertical-cards-container" tabIndex={0}>
              <div className="card">
                <Image
                  src={`${basePath}/images/card-img-top.jpg`}
                  className="card-img"
                  alt="descripción de imagen"
                  width={348}
                  height={196}
                ></Image>
                <div className="card-body">
                  <div className="card-badges">
                    <span className="badge badge-default">etiqueta 1</span>
                    <span className="badge badge-default">etiqueta 2</span>
                  </div>
                  <h3 className="card-title">
                    <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                  </h3>
                  <p className="card-text">Descripción de la tarjeta</p>
                  <div className="card-info">
                    <div>
                      <small>
                        <span>Fecha de publicación</span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <Image
                  src={`${basePath}/images/card-img-top.jpg`}
                  className="card-img"
                  alt="descripción de imagen"
                  width={348}
                  height={196}
                ></Image>
                <div className="card-body">
                  <div className="card-badges">
                    <span className="badge badge-default">etiqueta 1</span>
                    <span className="badge badge-default">etiqueta 2</span>
                  </div>
                  <h3 className="card-title">
                    <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                  </h3>
                  <p className="card-text">Descripción de la tarjeta</p>
                  <div className="card-info">
                    <div>
                      <small>
                        <span>Fecha de publicación</span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <Image
                  src={`${basePath}/images/card-img-top.jpg`}
                  className="card-img"
                  alt="descripción de imagen"
                  width={348}
                  height={196}
                ></Image>
                <div className="card-body">
                  <div className="card-badges">
                    <span className="badge badge-default">etiqueta 1</span>
                    <span className="badge badge-default">etiqueta 2</span>
                  </div>
                  <h3 className="card-title">
                    <LinkClient className="card-title-link">Título de la tarjeta</LinkClient>
                  </h3>
                  <p className="card-text">Descripción de la tarjeta</p>
                  <div className="card-info">
                    <div>
                      <small>
                        <span>Fecha de publicación</span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  const SECTION_UX = [
    {
      title: 'Uso',
      firstTitle: true,
      content: (
        <>
          <div className="list-informative">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet">
              <li>
                Para organizar y agrupar información relacionada, como artículos, noticias o secciones de un sitio web.
              </li>
              <li>
                Con fines de navegación, para que la persona usuaria disponga de distintos puntos de entrada sobre el
                contenido relacionado y acceda a más detalles del mismo.
              </li>
            </ul>
          </div>
          <div className="list-informative" style={{ marginTop: '32px' }}>
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>
                Para desencadenar una acción o evento, considerá utilizar el componente{' '}
                <a href="https://gcba.github.io/Obelisco-V2/components/tarjetas">Botón</a>.
              </li>
              <li>
                Para navegar a otro sitio web, o abrir contenido en una nueva pestaña, considerá utilizar el componente
                de <a href="https://gcba.github.io/Obelisco-V2/components/link">Enlace</a>.
              </li>
              <li>
                Para estructurar contenido estático que no es accionable, ni redirige a ningún lado, considerá utilizar
                el componente{' '}
                <a href="https://gcba.github.io/Obelisco-V2/components/list-informative">Lista informativa</a>.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Disposición',
      content: (
        <>
          <p style={{ marginTop: '32px' }}>
            En Obelisco existen 2 disposiciones posibles: vertical y horizontal. La disposición del componente sirve
            para generar diferentes niveles de jerarquía según el tipo de tarjeta.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_disposicion.svg`}
            alt="Disposición de tarjetas"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Tipos de tarjeta vertical',
      content: (
        <>
          <div className="max-items-2">
            <div className="col">
              <p className="text-xl mt-2">Predeterminada</p>
              <p className="text-md">
                Se utiliza para mostrar información de mayor peso visual en la página, y lleva una imagen descriptiva
                del contenido.
              </p>
            </div>
            <div className="col">
              <Image
                src={`${basePath}/images/tarjetas/tarjetas_vertical_predeterminada.svg`}
                alt="Tarjeta vertical predeterminada"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="max-items-2 mt-4 mb-2">
            <div className="col">
              <p className="text-xl">Noticias</p>
              <p className="text-md">
                Se utiliza para modular contenido de noticias en páginas simples y páginas de área.
              </p>
            </div>
            <div className="col">
              <Image
                src={`${basePath}/images/tarjetas/tarjetas_vertical_noticias.svg`}
                alt="Tarjeta vertical de noticias"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="max-items-2 mt-4 mb-2">
            <div className="col">
              <p className="text-xl">Agenda</p>
              <p className="text-md">Se utiliza para mostrar información sobre un evento.</p>
            </div>
            <div className="col">
              <Image
                src={`${basePath}/images/tarjetas/tarjetas_vertical_agenda.svg`}
                alt="Tarjeta vertical de agenda"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Tipos de tarjeta horizontal',
      content: (
        <>
          <p className="text-xl">Predeterminada</p>
          <p className="text-md mb-4">
            Contiene información que no precisa de imágenes descriptivas. Dentro del entorno de Buenos Aires se utiliza,
            por ejemplo, para agrupar programas o servicios de un área.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_horizontal_predeterminada.svg`}
            alt="Tarjeta horizontal predeterminada"
            width="800"
            height="200"
            className="img-fluid"
          />
          <p className="text-xl mb-4" style={{ marginTop: '32px' }}>
            Temática
          </p>
          <p className="text-md">
            Se utiliza en la página de inicio de Buenos Aires para redirigir a los principales trámites y servicios.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_horizontal_tematica.svg`}
            alt="Tarjeta horizontal tematica"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Agrupación',
      content: (
        <>
          <p className="text-md mb-4">
            Las tarjetas se utilizan en grupo para organizar la navegación y redirección a contenidos relacionados de un
            mismo sitio web.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_agrupacion_si_usar_1.svg`}
            alt="Tarjeta horizontal tematica"
            width="800"
            height="200"
            className="img-fluid"
          />
          <div className="d-flex pt-2" style={{ marginTop: '32px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">
              Utilizar tarjetas con la misma disposición y del mismo tipo dentro de un mismo grupo.
            </p>
          </div>

          {/* <p className="text-md">
            Las tarjetas se utilizan en grupo para organizar la navegación y redirección a contenidos relacionados de un
            mismo sitio web.
          </p> */}
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_agrupacion_no_usar_1.svg`}
            alt="Tarjeta horizontal tematica"
            width="800"
            height="200"
            className="img-fluid"
          />
          <div className="d-flex pt-3">
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">No combinar la disposición y/o los tipos de tarjetas dentro de un mismo grupo.</p>
          </div>
        </>
      ),
    },
    {
      title: 'Modulación',
      content: (
        <>
          <p className="text-md">
            Las tarjetas y sus variantes cuentan con un ancho fijo establecido. Dependiendo del tipo y el dispositivo,
            se modulan de diferentes maneras. En desktop, las tarjetas verticales pueden agruparse hasta un máximo de 3
            por línea.
          </p>

          <Image
            src={`${basePath}/images/tarjetas/tarjetas_modulacion_1.svg`}
            alt="Tarjetas modulacion ej 1"
            width="800"
            height="200"
            className="img-fluid"
          />

          <p className="text-md mt-3">
            En <i>desktop</i>, las tarjetas horizontales de 4 columnas pueden agruparse hasta un máximo de 3 por línea,
            mientras que las de 6 columnas pueden hasta un máximo de 2 por línea.
          </p>

          <Image
            src={`${basePath}/images/tarjetas/tarjetas_modulacion_2.svg`}
            alt="Tarjetas modulacion ej 2"
            width="800"
            height="200"
            className="img-fluid"
          />

          <Image
            src={`${basePath}/images/tarjetas/tarjetas_modulacion_3.svg`}
            alt="Tarjetas modulacion ej 4"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginTop: '1.5rem !important' }}
          />

          <p className="text-md mt-4">
            En <i>mobile</i>, todas las tarjetas van una debajo de la otra y ocupan el ancho total de la grilla del
            dispositivo.
          </p>

          <Image
            src={`${basePath}/images/tarjetas/tarjetas_modulacion_4.svg`}
            alt="Tarjetas modulacion ej 4"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginTop: '1rem !important' }}
          />

          <p className="text-md mt-4">
            En mobile, las tarjetas de noticias forman un carrusel horizontal para facilitar su visualización.
          </p>

          <Image
            src={`${basePath}/images/tarjetas/tarjetas_modulacion_5.svg`}
            alt="Tarjetas modulacion ej 4"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginTop: '1rem !important' }}
          />
        </>
      ),
    },
    {
      subtitle: 'Ejemplos de uso',
      content: (
        <>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_modulacion_si_usar.svg`}
            alt="Tarjeta horizontal tematica"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginTop: '1rem !important' }}
          />
          <div className="d-flex pt-3">
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">
              Respetar la modulación según la disposición y el tipo de tarjeta, independientemente del espacio
              disponible en la página.
            </p>
          </div>

          <Image
            src={`${basePath}/images/tarjetas/tarjetas_modulacion_si_usar.svg`}
            alt="Tarjeta horizontal tematica"
            width="800"
            height="200"
            className="img-fluid mt-4"
          />
          <div className="d-flex pt-3">
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">
              No estirar o cambiar la modulación de las tarjetas únicamente por rellenar el espacio en blanco. Cambiar
              la composición del componente genera rupturas en el contenido, que afectan la legibilidad y la
              escaneabilidad de la información.
            </p>
          </div>
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
          <p className="text-md">Las tarjetas tienen una composición diferente dependiendo de la variante.</p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_anatomia.svg`}
            alt="Anatomia de las tarjetas"
            width="800"
            height="280"
            className="img-fluid"
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
                  <td>1. Imagen</td>
                  <td>Opcional, puede contener una imagen, un ícono o ninguna.</td>
                </tr>
                <tr>
                  <td>2. Etiquetas</td>
                  <td>Opcional, solo está disponible en tarjetas de noticias.</td>
                </tr>
                <tr>
                  <td>3. Sobrelínea</td>
                  <td>Opcional, solo está disponible en tarjetas de eventos.</td>
                </tr>
                <tr>
                  <td>4. Título</td>
                  <td>Obligatorio, todas las tarjetas deben tener título.</td>
                </tr>
                <tr>
                  <td>5. Descripción</td>
                  <td>Obligatorio, todas las tarjetas deben tener descripción.</td>
                </tr>
                <tr>
                  <td>6. Fecha de publicación</td>
                  <td>Opcional, solo está disponible en tarjetas de noticias.</td>
                </tr>
                <tr>
                  <td>7. Fecha en el calendario</td>
                  <td>Opcional, solo está disponible en tarjetas de eventos.</td>
                </tr>
                <tr>
                  <td>8. Horario</td>
                  <td>Opcional, solo está disponible en tarjetas de eventos.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Variantes',
    },
    {
      subtitle: 'Con imágenes',
      content: (
        <>
          <p className="text-md mb-4">
            La imagen de la tarjeta vertical debe tener una proporción 16:9, con un tamaño recomendado de 340x190 px. La
            imagen de la tarjeta horizontal debe tener una proporción 1:1, con un tamaño recomendado de 64x64 px.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_variante_img.svg`}
            alt="Variante de tarjeta con imagen"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: 'Con ícono en caja',
      content: (
        <>
          <p className="text-md mb-4">
            Los íconos en caja tienen un tamaño de 64x64 px. Deben mantener el color predeterminado y estar relacionados
            al contenido de la tarjeta.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_variante_icono_caja.svg`}
            alt="Variante de tarjeta con ícono en caja"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: 'Sin borde',
      content: (
        <>
          <p className="text-md mb-4">
            En este caso, la parte accionable de la tarjeta es el título. Si bien no cuenta con el contenedor que
            delimita el componente, al modular la tarjeta dentro de un grupo respeta el mismo espacio individual.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_variante_sin_borde.svg`}
            alt="Variante de tarjeta sin borde"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: 'Tarjeta horizontal sin media',
      content: (
        <>
          <p className="text-md mb-4">
            Entre los tipos de tarjetas, las únicas tarjetas que pueden prescindir del contenido media son las tarjetas
            horizontales.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_variante_sin_media.svg`}
            alt="Variante de tarjeta sin media"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Estados',
    },
    {
      subtitle: (
        <>
          Predeterminada <i>(default)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md">Estado predeterminado de las tarjetas en una interfaz.</p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_estados_predeterminado.svg`}
            alt="Estado de tarjeta predeterminada"
            width="800"
            height="285"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          Sobre <i>(hover)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md">
            Estado que adopta la tarjeta cuando un cursor pasa sobre el elemento, cambiando su apariencia para indicar
            su interactividad a la persona usuaria.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_estados_sobre.svg`}
            alt="Estado de tarjeta sobre (hover)"
            width="800"
            height="285"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          En foco <i>(focus)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md">
            Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea
            claramente visible cuando recibe la atención del usuario, especialmente al ser navegado con el teclado. En
            Obelisco se utiliza un borde o anillo (focus ring) por fuera del componente en un color distintivo.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_estados_foco.svg`}
            alt="Estado de tarjeta en foco (focus)"
            width="800"
            height="285"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Espaciado',
      content: (
        <>
          <p className="text-md">
            El espaciado recomendado para las tarjetas en dispositivos <i>desktop</i> es de 32 px. en sentido
            horizontal, y 32 px. en sentido vertical.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_espaciados.svg`}
            alt="Espaciado de tarjetas"
            width="800"
            height="285"
            className="img-fluid"
          />
          <p className="text-md pt-4">
            En dispositivos móviles, todas las tarjetas van una debajo de la otra, ocupando el ancho total de la grilla
            del dispositivo. En dispositivos tablet tienen una separación de 24 px., y en dispositivos mobile tienen una
            separación de 16 px.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_espaciados_mobile.svg`}
            alt="Espaciado de tarjetas en mobile"
            width="800"
            height="285"
            className="img-fluid"
          />
        </>
      ),
    },
  ];

  const ACCESSIBILITY = [
    {
      title: 'Navegación por teclado',
      firstTitle: true,
      content: (
        <>
          <p className="text-md">
            El componente de tarjetas pueden recorrerse utilizando la navegación por teclado u otras herramientas de
            asistencia como lectores por voz.
          </p>
          <span className="badge badge-default ms-1">TAB</span>
          <span className="badge badge-default">ENTER</span>
          <p className="text-md">
            Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Además, con
            el <i>enter</i>, puede accionar los elementos sobre los que esté posicionada como botones, enlaces, entre
            otros.
          </p>

          <Image
            src={`${basePath}/images/tarjetas/tarjetas_accesibilidad.svg`}
            alt="Navegacion alternativa de las tarjetas"
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
            Para una correcta organización jerárquica de encabezados, se recomienda que en el caso que el grupo de
            tarjetas no contenga un título con etiqueta <strong>{'<h2>'}</strong> que las preceda, se agregue el mismo
            con la clase &quot;sr-only&quot;.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {TARJETAS_ACCESSIBILTY}
          </SyntaxHighlighter>
        </>
      ),
    },
    {
      title: 'Texto alternativo para imágenes o íconos',
      content: (
        <>
          <p className="text-md">
            Siempre y cuando la imagen o el ícono de la tarjeta sirva de refuerzo al contenido, debe contener un texto
            descriptivo utilizando el atributo <i>alt</i>. En caso de que la imagen o el ícono sea decorativo, el
            atributo <i>alt</i> debe estar vacío.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {TARJETAS_ACCESSIBILTY_2}
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
            href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.11 Non-Text Contrast (Level AA)
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
            Success Criterion 1.4.3 Contrast (Minimum) (Level AA)
          </a>
          <p>
            La presentación visual de texto y de imágenes de texto tiene una relación de contraste de por lo menos
            4.5:1, excepto textos grandes e imágenes de texto grande que tienen un contraste de por lo menos 3:1, textos
            o imágenes que son parte de un componente inactivo de interfaz de usuario o son pura decoración, o
            logotipos.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.7 Focus Visible (Level AA)
          </a>
          <p>
            Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque
            del teclado es visible.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.3 Focus Order (Level A)
          </a>
          <p>
            Si una página web puede navegarse de forma secuencial y las secuencias de navegación afectan el significado
            o la operación, los componentes enfocables reciben el foco en un orden que preserve el significado y la
            operabilidad.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.1 Keyboard (Level A)
          </a>
          <p>Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.</p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.2 No Keyboard Trap (Level A)
          </a>
          <p>
            Si el foco del teclado puede moverse a un componente de la página utilizando una interfaz de teclado,
            también debe ser posible mover el foco fuera de ese componente usando únicamente la misma interfaz de
            teclado. Si se requiere algo más que las teclas de flecha, tabulador u otros métodos estándar para salir, se
            debe informar al usuario sobre el método necesario para mover el foco.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Tarjetas"
        description={[
          'Las tarjetas son componentes accionables que se agrupan para comunicar información relacionada, y actúan como punto de entrada vinculado a los detalles del contenido.',
        ]}
      />
      <Tabs
        sectionUx={SECTION_UX}
        sectionDev={SECTIONS_DEV}
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

export default CardDocs;
