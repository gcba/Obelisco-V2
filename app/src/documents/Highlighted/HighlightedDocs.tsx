import Image from 'next/image';

import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import {
  HIGHLIGHTED_BANNER_BUTTON,
  HIGHLIGHTED_BANNER_BUTTONS,
  HIGHLIGHTED_BANNER_BUTTONS_BG,
  HIGHLIGHTED_BANNER_BUTTONS_VIDEO_MP4,
  HIGHLIGHTED_BANNER_BUTTONS_VIDEO_YT,
  HIGHLIGHTED_BANNER_DOWNLOAD,
  HIGHLIGHTED_BANNER_LINK,
  HIGHLIGHTED_BANNER_NO_MEDIA,
  HIGHLIGHTED_JOIN_IMAGE,
  HIGHLIGHTED_JOIN_VIDEO,
  HIGHLIGHTED_LATERAL_ACCESS,
  HIGHLIGHTED_LATERAL_BUTTON,
  HIGHLIGHTED_LATERAL_DOWNLOAD,
  HIGHLIGHTED_LATERAL_LINK,
} from './code-views';

const basePath = '/Obelisco-V2';

const HighlightedDocs: React.FC = () => {
  const sections = [
    {
      title: 'Destacado',
      h1: true,
      content: (
        <>
          <MainDescription description="Los destacados permiten resaltar contenido relevante que requiere un nivel jerárquico mayor al resto de la información. Se usa para captar la atención de la persona usuaria incorporando imágenes, accionables y otros elementos interactivos." />
          <p className="lead mb-4">
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
            <a
              href="https://gcba.github.io/estandares/componentes/destacado/"
              target="_blank"
              rel="noopener noreferrer"
            >
              enlace
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: 'section-1',
      title: 'Banner con imagen',
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_BUTTONS}>
            <div className="highlighted-box-sizing">
              <div className="panel-horizontal-content">
                <div className="panel-horizontal">
                  <Image
                    src={`${basePath}/images/destacado.jpg`}
                    alt="descripción de imagen"
                    className="card-img"
                    width={538}
                    height={304}
                  ></Image>
                  <div className="card-body">
                    <h2 className="card-title">Título del destacado</h2>
                    <p className="card-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <a className="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        Botón
                      </a>
                      <a className="btn btn-outline-primary btn-lg" href="#" rel="noopener noreferrer">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        Botón
                      </a>
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
                    className="card-img"
                    width={538}
                    height={304}
                  ></Image>
                  <div className="card-body">
                    <h2 className="card-title">Título del destacado</h2>
                    <p className="card-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <a className="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        Botón
                      </a>
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
                    className="card-img"
                    width={538}
                    height={304}
                  ></Image>
                  <div className="card-body">
                    <h2 className="card-title">Título del destacado</h2>
                    <p className="card-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <a className="btn btn-secondary btn-lg" href="#" target="_blank" download="">
                        <span className="material-symbols-rounded" aria-hidden="true">
                          file_download
                        </span>
                        Descargar
                      </a>
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
                    className="card-img"
                    width={538}
                    height={304}
                  ></Image>
                  <div className="card-body">
                    <h2 className="card-title">Título del destacado</h2>
                    <p className="card-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <a className="external" href="#" target="_blank" rel="noopener noreferrer">
                        Enlace externo
                      </a>
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
                    className="card-img"
                    width={538}
                    height={304}
                  ></Image>
                  <div className="card-body">
                    <h2 className="card-title">Título del destacado</h2>
                    <p className="card-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <a href="#" className="list-group-item item-sm">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        <div className="access-content">
                          <span className="access-title">Acceso</span>
                        </div>
                      </a>
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
      id: 'section-2',
      title: 'Banner con video',
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_BUTTONS_VIDEO_MP4}>
            <div className="highlighted-box-sizing">
              <div className="panel-horizontal-content">
                <div className="panel-horizontal">
                  <p className="sr-only">Buenos Aires se escribe en plural</p>
                  <video className="card-img" controls>
                    <source src={`${basePath}/images/videoBuenosAires.mp4`} type="video/mp4" />
                    <track src={`${basePath}/images/videoBuenosAires.vtt`} default kind="captions" srcLang="es" />
                    <p>
                      Su navegador no soporta vídeos HTML5. Puedes ver el video haciendo clic en
                      <a href={`${basePath}/images/videoBuenosAires.mp4`}>este enlace</a>.
                    </p>
                  </video>
                  <div className="card-body">
                    <h2 className="card-title">Título del destacado</h2>
                    <p className="card-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <a className="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        Botón
                      </a>
                      <a className="btn btn-outline-primary btn-lg" href="#" rel="noopener noreferrer">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        Botón
                      </a>
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
                    className="card-img"
                    src="https://www.youtube.com/embed/sXE613Oaxvc?si=iWSX1erqQxXOLojw"
                    title="Buenos Aires se escribe en plural"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <div className="card-body">
                    <h2 className="card-title">Título del destacado</h2>
                    <p className="card-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <a className="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        Botón
                      </a>
                      <a className="btn btn-outline-primary btn-lg" href="#" rel="noopener noreferrer">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        Botón
                      </a>
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
      id: 'section-3',
      title: 'Banner sin multimedia',
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_NO_MEDIA}>
            <div className="highlighted-box-sizing">
              <div className="panel-horizontal-content">
                <div className="panel-horizontal">
                  <div className="card-body">
                    <h2 className="card-title">Título del destacado</h2>
                    <p className="card-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <a className="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        Botón
                      </a>
                      <a className="btn btn-outline-primary btn-lg" href="#" rel="noopener noreferrer">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        Botón
                      </a>
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
      id: 'section-4',
      title: 'Banner con fondo',
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_BANNER_BUTTONS_BG}>
            <div className="highlighted-box-sizing">
              <div className="panel-horizontal-content bg-light">
                <div className="panel-horizontal">
                  <Image
                    src={`${basePath}/images/destacado.jpg`}
                    alt="descripción de imagen"
                    className="card-img"
                    width={538}
                    height={304}
                  ></Image>
                  <div className="card-body">
                    <h2 className="card-title">Título del destacado</h2>
                    <p className="card-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
                      No puede contener negritas ni enlaces
                    </p>
                    <div className="panel-footer">
                      <a className="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        Botón
                      </a>
                      <a className="btn btn-outline-primary btn-lg" href="#" rel="noopener noreferrer">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        Botón
                      </a>
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
      id: 'section-5',
      title: 'Conjunto con imagen',
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
                      className="card-img"
                      width={538}
                      height={304}
                    ></Image>
                    <div className="card-body">
                      <h2 className="card-title">Título del destacado</h2>
                      <p className="card-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <a className="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
                          <span className="material-symbols-rounded o-icon" aria-hidden="true">
                            info
                          </span>
                          Botón
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="panel-vertical">
                    <Image
                      src={`${basePath}/images/destacado.jpg`}
                      alt="descripción de imagen"
                      className="card-img"
                      width={538}
                      height={304}
                    ></Image>
                    <div className="card-body">
                      <h2 className="card-title">Título del destacado</h2>
                      <p className="card-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <a className="btn btn-secondary btn-lg" href="#" target="_blank" download="">
                          <span className="material-symbols-rounded" aria-hidden="true">
                            file_download
                          </span>
                          Descargar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="panel-vertical">
                    <Image
                      src={`${basePath}/images/destacado.jpg`}
                      alt="descripción de imagen"
                      className="card-img"
                      width={538}
                      height={304}
                    ></Image>
                    <div className="card-body">
                      <h2 className="card-title">Título del destacado</h2>
                      <p className="card-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <a className="external" href="#" target="_blank" rel="noopener noreferrer">
                          Enlace externo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="panel-vertical">
                    <Image
                      src={`${basePath}/images/destacado.jpg`}
                      alt="descripción de imagen"
                      className="card-img"
                      width={538}
                      height={304}
                    ></Image>
                    <div className="card-body">
                      <h2 className="card-title">Título del destacado</h2>
                      <p className="card-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <a href="#" className="list-group-item item-sm">
                          <span className="material-symbols-rounded o-icon" aria-hidden="true">
                            info
                          </span>
                          <div className="access-content">
                            <span className="access-title">Acceso</span>
                          </div>
                        </a>
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
      id: 'section-6',
      title: 'Conjunto con video',
      content: (
        <CodeBox codeHTML={HIGHLIGHTED_JOIN_VIDEO}>
          <div className="highlighted-box-sizing-vertical max-h-800">
            <div className="container">
              <div className="highlighted-items-2">
                <div className="col">
                  <div className="panel-vertical">
                    <p className="sr-only">Buenos Aires se escribe en plural</p>
                    <video className="card-img" controls>
                      <source src={`${basePath}/images/videoBuenosAires.mp4`} type="video/mp4" />
                      <track src={`${basePath}/images/videoBuenosAires.vtt`} default kind="captions" srcLang="es" />
                      <p>
                        Su navegador no soporta vídeos HTML5. Puedes ver el video haciendo clic en
                        <a href={`${basePath}/images/videoBuenosAires.mp4`}>este enlace</a>.
                      </p>
                    </video>
                    <div className="card-body">
                      <h2 className="card-title">Título del destacado</h2>
                      <p className="card-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <a className="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
                          <span className="material-symbols-rounded o-icon" aria-hidden="true">
                            info
                          </span>
                          Botón
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="panel-vertical">
                    <iframe
                      className="card-img"
                      src="https://www.youtube.com/embed/sXE613Oaxvc?si=iWSX1erqQxXOLojw"
                      title="Buenos Aires se escribe en plural"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="card-body">
                      <h2 className="card-title">Título del destacado</h2>
                      <p className="card-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <a className="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
                          <span className="material-symbols-rounded o-icon" aria-hidden="true">
                            info
                          </span>
                          Botón
                        </a>
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
      id: 'section-7',
      title: 'Conjunto sin multimedia',
      content: (
        <CodeBox codeHTML={HIGHLIGHTED_JOIN_IMAGE}>
          <div className="highlighted-box-sizing-vertical max-h-640">
            <div className="container">
              <div className="highlighted-items-2">
                <div className="col">
                  <div className="panel-vertical">
                    <div className="card-body">
                      <h2 className="card-title">Título del destacado</h2>
                      <p className="card-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <a className="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
                          <span className="material-symbols-rounded o-icon" aria-hidden="true">
                            info
                          </span>
                          Botón
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="panel-vertical">
                    <div className="card-body">
                      <h2 className="card-title">Título del destacado</h2>
                      <p className="card-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <a className="btn btn-secondary btn-lg" href="#" target="_blank" download="">
                          <span className="material-symbols-rounded" aria-hidden="true">
                            file_download
                          </span>
                          Descargar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="panel-vertical">
                    <div className="card-body">
                      <h2 className="card-title">Título del destacado</h2>
                      <p className="card-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <a className="external" href="#" target="_blank" rel="noopener noreferrer">
                          Enlace externo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="panel-vertical">
                    <div className="card-body">
                      <h2 className="card-title">Título del destacado</h2>
                      <p className="card-text">
                        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                        líneas. No puede contener negritas ni enlaces
                      </p>
                      <div className="panel-footer">
                        <a href="#" className="list-group-item item-sm">
                          <span className="material-symbols-rounded o-icon" aria-hidden="true">
                            info
                          </span>
                          <div className="access-content">
                            <span className="access-title">Acceso</span>
                          </div>
                        </a>
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
      id: 'section-8',
      title: 'Lateral',
      content: (
        <>
          <CodeBox codeHTML={HIGHLIGHTED_LATERAL_BUTTON}>
            <div className="container">
              <div className="col-12 col-xl-6">
                <div className="panel-lateral">
                  <div className="card-body">
                    <h2 className="card-title">Título del destacado</h2>
                    <p className="card-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces.
                    </p>
                    <div className="panel-footer">
                      <a className="btn btn-primary btn-lg btn-block" href="#" rel="noopener noreferrer">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        Botón
                      </a>
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
                  <div className="card-body">
                    <h2 className="card-title">Título del destacado</h2>
                    <p className="card-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces.
                    </p>
                    <div className="panel-footer">
                      <a className="btn btn-secondary btn-lg btn-block" href="#" target="_blank" download="">
                        <span className="material-symbols-rounded" aria-hidden="true">
                          file_download
                        </span>
                        Descargar
                      </a>
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
                  <div className="card-body">
                    <h2 className="card-title">Título del destacado</h2>
                    <p className="card-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces.
                    </p>
                    <div className="panel-footer">
                      <a className="external" href="#" target="_blank" rel="noopener noreferrer">
                        Enlace externo
                      </a>
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
                  <div className="card-body">
                    <h2 className="card-title">Título del destacado</h2>
                    <p className="card-text">
                      Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                      negritas ni enlaces.
                    </p>
                    <div className="panel-footer">
                      <a href="#" className="list-group-item item-sm">
                        <span className="material-symbols-rounded o-icon" aria-hidden="true">
                          info
                        </span>
                        <div className="access-content">
                          <span className="access-title">Acceso</span>
                        </div>
                      </a>
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

  return <DocumentationTemplate sections={sections} />;
};

export default HighlightedDocs;
