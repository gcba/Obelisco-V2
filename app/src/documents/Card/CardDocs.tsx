import Image from 'next/image';

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

  return (
    <>
      <ComponentHeader
        title="Tarjetas"
        description={[
          'Las tarjetas son componentes accionables que se utilizan en grupo para comunicar información que requiere de cierto tipo de categorización y jerarquización visual. Se visualizan en contenedores flexibles y actúan como punto de entrada a un tema en particular.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a href="https://gcba.github.io/estandares/componentes/tarjetas/" target="_blank" rel="noopener noreferrer">
              visitar la documentación en Obelisco v.1
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default CardDocs;
