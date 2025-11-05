import Image from 'next/image';

import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  HIGHLIGHTED_BANNER_ACCESS,
  HIGHLIGHTED_BANNER_BUTTON,
  HIGHLIGHTED_BANNER_BUTTONS,
  HIGHLIGHTED_BANNER_BUTTONS_BG,
  HIGHLIGHTED_BANNER_BUTTONS_VIDEO_MP4,
  HIGHLIGHTED_BANNER_BUTTONS_VIDEO_YT,
  HIGHLIGHTED_BANNER_DOWNLOAD,
  HIGHLIGHTED_BANNER_LINK,
  HIGHLIGHTED_BANNER_NO_MEDIA,
  HIGHLIGHTED_JOIN_IMAGE,
  HIGHLIGHTED_JOIN_NO_IMAGE,
  HIGHLIGHTED_JOIN_VIDEO,
  HIGHLIGHTED_LATERAL_ACCESS,
  HIGHLIGHTED_LATERAL_BUTTON,
  HIGHLIGHTED_LATERAL_DOWNLOAD,
  HIGHLIGHTED_LATERAL_LINK,
} from './code-views';

const basePath = '/Obelisco-V2';

const ZoomContainer = ({ children }: React.PropsWithChildren) => <div style={{ zoom: 0.5 }}>{children}</div>;

const HighlightedDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Destacado banner',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_BUTTONS}>
            <ZoomContainer>
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
                      <LinkClient className="btn btn-primary btn-lg">Botón</LinkClient>
                      <LinkClient className="btn btn-outline-primary btn-lg">Botón</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </ZoomContainer>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_BUTTON}>
            <ZoomContainer>
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
                      <LinkClient className="btn btn-primary btn-lg">Botón</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </ZoomContainer>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_DOWNLOAD}>
            <ZoomContainer>
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
                      <LinkClient className="btn btn-secondary btn-lg" download="">
                        <span className="material-symbols-rounded" aria-hidden="true">
                          file_download
                        </span>
                        Descargar
                      </LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </ZoomContainer>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_LINK}>
            <ZoomContainer>
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
                      <LinkClient className="external ">Enlace externo</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </ZoomContainer>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_ACCESS}>
            <ZoomContainer>
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
                      <LinkClient className="list-group-item item-sm">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        <div className="access-content">
                          <span className="access-title">Acceso</span>
                        </div>
                      </LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </ZoomContainer>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_BUTTONS_VIDEO_MP4}>
            <ZoomContainer>
              <div className="panel-horizontal-content">
                <div className="panel-horizontal">
                  <p className="sr-only">Buenos Aires se escribe en plural</p>
                  <video className="panel-img" controls>
                    <source src={`${basePath}/images/videoBuenosAires.mp4`} type="video/mp4" />
                    <track src={`${basePath}/images/videoBuenosAires.vtt`} default kind="captions" srcLang="es" />
                    <p>
                      Su navegador no soporta vídeos HTML5. Puedes ver el video haciendo clic en
                      <a href={`${basePath}/images/videoBuenosAires.mp4`}>este enlace</a>.
                    </p>
                  </video>
                  <div className="panel-body">
                    <h2 className="panel-title">Título del destacado</h2>
                    <p className="panel-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <LinkClient className="btn btn-primary btn-lg">Botón</LinkClient>
                      <LinkClient className="btn btn-outline-primary btn-lg">Botón</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </ZoomContainer>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_BUTTONS_VIDEO_YT}>
            <ZoomContainer>
              <div className="panel-horizontal-content">
                <div className="panel-horizontal">
                  <iframe
                    className="panel-img"
                    src="https://www.youtube.com/embed/sXE613Oaxvc?si=iWSX1erqQxXOLojw"
                    title="Buenos Aires se escribe en plural"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <div className="panel-body">
                    <h2 className="panel-title">Título del destacado</h2>
                    <p className="panel-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <LinkClient className="btn btn-primary btn-lg">Botón</LinkClient>
                      <LinkClient className="btn btn-outline-primary btn-lg">Botón</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </ZoomContainer>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_NO_MEDIA}>
            <ZoomContainer>
              <div className="panel-horizontal-content">
                <div className="panel-horizontal">
                  <div className="panel-body">
                    <h2 className="panel-title">Título del destacado</h2>
                    <p className="panel-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <LinkClient className="btn btn-primary btn-lg">Botón</LinkClient>
                      <LinkClient className="btn btn-outline-primary btn-lg">Botón</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </ZoomContainer>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_BUTTONS_BG}>
            <ZoomContainer>
              <div className="panel-horizontal-content bg-light">
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
                      <LinkClient className="btn btn-primary btn-lg">Botón</LinkClient>
                      <LinkClient className="btn btn-outline-primary btn-lg">Botón</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </ZoomContainer>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Destacado conjunto',
    },
    {
      subtitle: 'Fondos',
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_JOIN_IMAGE}>
            <ZoomContainer>
              <div className="container">
                <div className="highlighted-items-2">
                  <div className="col">
                    <div className="panel-vertical">
                      <Image
                        src={`${basePath}/images/destacado.jpg`}
                        alt="descripción de imagen"
                        className="panel-img"
                        width={538}
                        height={304}
                      ></Image>
                      <div className="panel-body-dark">
                        <h2 className="panel-title ellipsis-2">
                          Este es el titulo del destacado que puede contener hasta 2 líneas de texto.
                        </h2>
                        <p className="panel-text ellipsis-3">
                          Esta es la descripción del destacado que puede contener hasta 3 líneas de texto. Si se excede
                          de este límite, el texto de la descripción se va a truncar, el contenido, para garantizar
                          Lorem ipsum dolor sit amet.
                        </p>
                        <div className="panel-footer">
                          <LinkClient className="btn btn-light">Botón</LinkClient>
                          <LinkClient className="btn btn-outline-light">Botón</LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="panel-vertical">
                      <Image
                        src={`${basePath}/images/destacado.jpg`}
                        alt="descripción de imagen"
                        className="panel-img"
                        width={538}
                        height={304}
                      ></Image>
                      <div className="panel-body">
                        <h2 className="panel-title ellipsis-2">
                          Este es el titulo del destacado que puede contener hasta 2 líneas de texto.
                        </h2>
                        <p className="panel-text ellipsis-3">
                          Esta es la descripción del destacado que puede contener hasta 3 líneas de texto. Si se excede
                          de este límite, el texto de la descripción se va a truncar, el contenido, para garantizar
                          Lorem ipsum dolor sit amet.
                        </p>
                        <div className="panel-footer">
                          <LinkClient className="btn btn-primary">Botón</LinkClient>
                          <LinkClient className="btn btn-outline-primary">Botón</LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ZoomContainer>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Accionables',
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_JOIN_IMAGE}>
            <ZoomContainer>
              <div className="container">
                <div className="highlighted-items-2">
                  <div className="col">
                    <div className="panel-vertical">
                      <Image
                        src={`${basePath}/images/destacado.jpg`}
                        alt="descripción de imagen"
                        className="panel-img"
                        width={538}
                        height={304}
                      ></Image>
                      <div className="panel-body-dark">
                        <h2 className="panel-title ellipsis-2">Este es el titulo del destacado</h2>
                        <p className="panel-text ellipsis-3">
                          Esta es la descripción del destacado que puede contener hasta 3 líneas de texto.
                        </p>
                        <div className="panel-footer">
                          <LinkClient className="btn btn-light">Botón</LinkClient>
                          <LinkClient className="btn btn-outline-light">Botón</LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="panel-vertical">
                      <Image
                        src={`${basePath}/images/destacado.jpg`}
                        alt="descripción de imagen"
                        className="panel-img"
                        width={538}
                        height={304}
                      ></Image>
                      <div className="panel-body-dark">
                        <h2 className="panel-title ellipsis-2">
                          Este es el titulo del destacado que puede contener hasta 2 líneas de texto.
                        </h2>
                        <p className="panel-text ellipsis-3">
                          Esta es la descripción del destacado que puede contener hasta 3 líneas de texto. Si se excede
                          de este límite, el texto de la descripción se va a truncar,
                        </p>
                        <div className="panel-footer">
                          <LinkClient className="list-group-item item-sm">
                            <span className="material-symbols-rounded o-icon" aria-hidden="true">
                              info
                            </span>
                            <div className="access-content">
                              <span className="access-title">Acceso</span>
                            </div>
                          </LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="panel-vertical">
                      <Image
                        src={`${basePath}/images/destacado.jpg`}
                        alt="descripción de imagen"
                        className="panel-img"
                        width={538}
                        height={304}
                      ></Image>
                      <div className="panel-body-dark">
                        <h2 className="panel-title ellipsis-2">
                          Este es el titulo del destacado que puede contener hasta 2 líneas de texto.
                        </h2>
                        <p className="panel-text ellipsis-3">
                          Esta es la descripción del destacado que puede contener hasta 3 líneas de texto. Si se excede
                          de este límite, el texto de la descripción se va a truncar,
                        </p>
                        <div className="panel-footer">
                          <LinkClient className="btn btn-light btn-lg" download="">
                            <span className="material-symbols-rounded" aria-hidden="true">
                              file_download
                            </span>
                            Descargar
                          </LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="panel-vertical">
                      <Image
                        src={`${basePath}/images/destacado.jpg`}
                        alt="descripción de imagen"
                        className="panel-img"
                        width={538}
                        height={304}
                      ></Image>
                      <div className="panel-body-dark">
                        <h2 className="panel-title ellipsis-2">
                          Este es el titulo del destacado que puede contener hasta 2 líneas de texto.
                        </h2>
                        <p className="panel-text mb-0 ellipsis-3">
                          Esta es la descripción del destacado que puede contener hasta 3 líneas de texto. Si se excede
                          de este límite, el texto de la descripción se va a truncar,
                        </p>
                        <div className="panel-footer">
                          <LinkClient className="external link-white">Enlace externo</LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ZoomContainer>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Con vídeo',
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_JOIN_VIDEO}>
            <ZoomContainer>
              <div className="container">
                <div className="highlighted-items-2">
                  <div className="col">
                    <div className="panel-vertical">
                      <video className="panel-img" controls>
                        <source src={`${basePath}/images/videoBuenosAires.mp4`} type="video/mp4" />
                        <track src={`${basePath}/images/videoBuenosAires.vtt`} default kind="captions" srcLang="es" />
                        <p>
                          Su navegador no soporta vídeos HTML5. Puedes ver el video haciendo clic en
                          <a href={`${basePath}/images/videoBuenosAires.mp4`}>este enlace</a>.
                        </p>
                      </video>
                      <div className="panel-body-dark">
                        <h2 className="panel-title ellipsis-2">Título del destacado</h2>
                        <p className="panel-text">
                          Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede
                          contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de
                          pocas líneas. No puede contener negritas ni enlaces
                        </p>
                        <div className="panel-footer">
                          <LinkClient className="btn btn-light btn-lg">Botón</LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="panel-vertical">
                      <iframe
                        className="panel-img"
                        src="https://www.youtube.com/embed/sXE613Oaxvc?si=iWSX1erqQxXOLojw"
                        title="Buenos Aires se escribe en plural"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <div className="panel-body">
                        <h2 className="panel-title ellipsis-2">Título del destacado</h2>
                        <p className="panel-text">
                          Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede
                          contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de
                          pocas líneas. No puede contener negritas ni enlaces
                        </p>
                        <div className="panel-footer">
                          <LinkClient className="btn btn-primary btn-lg">Botón</LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ZoomContainer>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Sin multimedia',
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_JOIN_NO_IMAGE}>
            <ZoomContainer>
              <div className="container">
                <div className="highlighted-items-2">
                  <div className="col">
                    <div className="panel-vertical">
                      <div className="panel-body-dark panel-sin-multimedia-v">
                        <h2 className="panel-title">Título del destacado</h2>
                        <p className="panel-text">
                          Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede
                          contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de
                          pocas líneas. No puede contener negritas ni enlaces
                        </p>
                        <div className="panel-footer">
                          <LinkClient className="btn btn-light btn-lg">Botón</LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="panel-vertical">
                      <div className="panel-body  panel-sin-multimedia-v">
                        <h2 className="panel-title">Título del destacado</h2>
                        <p className="panel-text">
                          Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede
                          contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de
                          pocas líneas. No puede contener negritas ni enlaces
                        </p>
                        <div className="panel-footer">
                          <LinkClient className="btn btn-primary btn-lg">Botón</LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ZoomContainer>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Destacado lateral',
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_LATERAL_BUTTON}>
            <div className="container">
              <div className="col-12 col-xl-6">
                <div className="panel-lateral">
                  <div className="panel-body">
                    <h2 className="panel-title">Título del destacado</h2>
                    <p className="panel-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces.
                    </p>
                    <div className="panel-footer">
                      <LinkClient className="btn btn-primary btn-lg btn-block">Botón</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_LATERAL_DOWNLOAD}>
            <div className="container">
              <div className="col-12 col-xl-6">
                <div className="panel-lateral">
                  <div className="panel-body">
                    <h2 className="panel-title">Título del destacado</h2>
                    <p className="panel-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces.
                    </p>
                    <div className="panel-footer">
                      <LinkClient className="btn btn-secondary btn-lg btn-block" download="">
                        <span className="material-symbols-rounded" aria-hidden="true">
                          file_download
                        </span>
                        Descargar
                      </LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_LATERAL_LINK}>
            <div className="container">
              <div className="col-12 col-xl-6">
                <div className="panel-lateral">
                  <div className="panel-body">
                    <h2 className="panel-title">Título del destacado</h2>
                    <p className="panel-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces.
                    </p>
                    <div className="panel-footer">
                      <LinkClient className="external">Enlace externo</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_LATERAL_ACCESS}>
            <div className="container">
              <div className="col-12 col-xl-6">
                <div className="panel-lateral">
                  <div className="panel-body">
                    <h2 className="panel-title">Título del destacado</h2>
                    <p className="panel-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces.
                    </p>
                    <div className="panel-footer">
                      <LinkClient className="list-group-item item-sm">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        <div className="access-content">
                          <span className="access-title">Acceso</span>
                        </div>
                      </LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Destacado"
        description={[
          'Los destacados permiten resaltar contenido relevante que requiere un nivel jerárquico mayor al resto de la información. Se usa para captar la atención de la persona usuaria incorporando imágenes, accionables y otros elementos interactivos.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a
              href="https://gcba.github.io/estandares/componentes/destacado/"
              target="_blank"
              rel="noopener noreferrer"
            >
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

export default HighlightedDocs;
