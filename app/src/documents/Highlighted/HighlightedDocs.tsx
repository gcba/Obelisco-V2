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

const HighlightedDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Banner',
    },
    {
      subtitle: 'Con imagen',
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_BUTTONS}>
            <div className="highlighted-box-sizing">
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
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_BUTTON}>
            <div className="highlighted-box-sizing">
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
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_DOWNLOAD}>
            <div className="highlighted-box-sizing">
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
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_LINK}>
            <div className="highlighted-box-sizing">
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
                      <LinkClient className="external">Enlace externo</LinkClient>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_ACCESS}>
            <div className="highlighted-box-sizing">
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
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Con video',
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_BUTTONS_VIDEO_MP4}>
            <div className="highlighted-box-sizing">
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
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_BUTTONS_VIDEO_YT}>
            <div className="highlighted-box-sizing">
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
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Sin multimedia',
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_NO_MEDIA}>
            <div className="highlighted-box-sizing">
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
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Con fondo',
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_BUTTONS_BG}>
            <div className="highlighted-box-sizing">
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
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Conjunto',
    },
    {
      subtitle: 'Con imagen',
      content: (
        <CodeBox codeHTML={HIGHLIGHTED_JOIN_IMAGE}>
          <div className="highlighted-box-sizing-vertical">
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
                    <div className="panel-body">
                      <h2 className="panel-title">Título del destacado</h2>
                      <p className="panel-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <LinkClient className="btn btn-primary btn-lg">Botón</LinkClient>
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
                      <h2 className="panel-title">Título del destacado</h2>
                      <p className="panel-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
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
                      <h2 className="panel-title">Título del destacado</h2>
                      <p className="panel-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <LinkClient className="external">Enlace externo</LinkClient>
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
                      <h2 className="panel-title">Título del destacado</h2>
                      <p className="panel-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
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
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Con video',
      content: (
        <CodeBox codeHTML={HIGHLIGHTED_JOIN_VIDEO}>
          <div className="highlighted-box-sizing-vertical max-h-800">
            <div className="container">
              <div className="highlighted-items-2">
                <div className="col">
                  <div className="panel-vertical">
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
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <LinkClient className="btn btn-primary btn-lg">Botón</LinkClient>
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
                      <h2 className="panel-title">Título del destacado</h2>
                      <p className="panel-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <LinkClient className="btn btn-primary btn-lg">Botón</LinkClient>
                      </div>
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
      subtitle: 'Sin multimedia',
      content: (
        <CodeBox codeHTML={HIGHLIGHTED_JOIN_NO_IMAGE}>
          <div className="highlighted-box-sizing-vertical max-h-640">
            <div className="container">
              <div className="highlighted-items-2">
                <div className="col">
                  <div className="panel-vertical">
                    <div className="panel-body">
                      <h2 className="panel-title">Título del destacado</h2>
                      <p className="panel-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <LinkClient className="btn btn-primary btn-lg">Botón</LinkClient>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="panel-vertical">
                    <div className="panel-body">
                      <h2 className="panel-title">Título del destacado</h2>
                      <p className="panel-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
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
                <div className="col">
                  <div className="panel-vertical">
                    <div className="panel-body">
                      <h2 className="panel-title">Título del destacado</h2>
                      <p className="panel-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <LinkClient className="external">Enlace externo</LinkClient>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="panel-vertical">
                    <div className="panel-body">
                      <h2 className="panel-title">Título del destacado</h2>
                      <p className="panel-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
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
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Lateral',
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
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del componente podés <a href="https://gcba.github.io/estandares/componentes/destacado/" target="_blank" rel="noopener noreferrer">
            visitar la documentación en Obelisco v.1
            </a>.
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default HighlightedDocs;
