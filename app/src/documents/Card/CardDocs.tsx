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

  const SECTION_UX = [
    {
      title: 'Uso',
      content: (
        <>
          <div className="list-informative pb-3">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet">
              <li>
                Para organizar y agrupar información relacionada, como artículos, noticias o secciones de un sitio web.
              </li>
              <li>Con fines de navegación, para que la persona usuaria disponga de distintos puntos de entrada sobre el contenido relacionado y acceda a más detalles del mismo.</li>
            </ul>
          </div>
          <div className="list-informative pb-3">
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>
                Para desencadenar una acción o evento, considerá utilizar el componente <a href="https://gcba.github.io/Obelisco-V2/components/tarjetas">Botón</a>.
              </li>
              <li>
                Para navegar a otro sitio web, o abrir contenido en una nueva pestaña, considerá utilizar el componente de <a href="https://gcba.github.io/Obelisco-V2/components/link">Enlace</a>.
              </li>
              <li>Para estructurar contenido estático que no es accionable, ni redirige a ningún lado, considerá utilizar el componente <a href="https://gcba.github.io/Obelisco-V2/components/list-informative">Lista informativa</a>.</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Disposición',
      content: (
        <>
          <p>
            En Obelisco existen 2 disposiciones posibles: vertical y horizontal. La disposición del componente sirve para generar diferentes niveles de jerarquía según el tipo de tarjeta.
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
          <div className="max-items-2 mt-4 mb-2">
            <div className="col">
              <p className="text-xl">Predeterminada</p>
              <p className="text-md">
                Se utiliza para mostrar información de mayor peso visual en la página, y lleva una imagen descriptiva del contenido.
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
              <p className="text-md">
                Se utiliza para mostrar información sobre un evento.
              </p>
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
          <p className="text-md">
            Contiene información que no precisa de imágenes descriptivas. Dentro del entorno de Buenos Aires se utiliza, por ejemplo, para agrupar programas o servicios de un área.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/tarjetas_horizontal_predeterminada.svg`}
            alt="Tarjeta horizontal predeterminada"
            width="800"
            height="200"
            className="img-fluid"
          />

          <p className="text-xl">Temática</p>
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
          <p className="text-md">
            Las tarjetas se utilizan en grupo para organizar la navegación y redirección a contenidos relacionados de un mismo sitio web.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/agrupacion_si_usar_1.svg`}
            alt="Tarjeta horizontal tematica"
            width="800"
            height="200"
            className="img-fluid"
          />
          <div className="d-flex pt-3">
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Utilizar tarjetas con la misma disposición y del mismo tipo dentro de un mismo grupo.</p>
          </div>


          <p className="text-md">
            Las tarjetas se utilizan en grupo para organizar la navegación y redirección a contenidos relacionados de un mismo sitio web.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/agrupacion_si_usar_1.svg`}
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
            Las tarjetas y sus variantes cuentan con un ancho fijo establecido. Dependiendo del tipo y el dispositivo, se modulan de diferentes maneras. En desktop, las tarjetas verticales pueden agruparse hasta un máximo de 3 por línea.
          </p>

          <Image
            src={`${basePath}/images/tarjetas/tarjetas_modulacion_1.svg`}
            alt="Tarjetas modulacion ej 1"
            width="800"
            height="200"
            className="img-fluid"
          />

          <p className="text-md" style={{ marginTop: '1.5rem !important' }}>
            En <i>desktop</i>, las tarjetas horizontales de 4 columnas pueden agruparse hasta un máximo de 3 por línea, mientras que las de 6 columnas pueden hasta un máximo de 2 por línea.
          </p>

          <Image
            src={`${basePath}/images/tarjetas/tarjetas_modulacion_2.svg`}
            alt="Tarjetas modulacion ej 2"
            width="800"
            height="200"
            className="img-fluid"
          />

          <Image
            src={`${basePath}/images/tarjetas/tarjetas_modulacion_4.svg`}
            alt="Tarjetas modulacion ej 4"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginTop: '1.5rem !important' }}
          />

          <p className="text-md mt-4">
            En <i>mobile</i>, todas las tarjetas van una debajo de la otra y ocupan el ancho total de la grilla del dispositivo.
          </p>

        </>
      ),
    },
    {
      subtitle: 'Ejemplos de uso',
      content: (
        <>
          <p className="text-md">
            Las tarjetas se utilizan en grupo para organizar la navegación y redirección a contenidos relacionados de un mismo sitio web.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/modulacion_si_usar.svg`}
            alt="Tarjeta horizontal tematica"
            width="800"
            height="200"
            className="img-fluid"
          />
          <div className="d-flex pt-3">
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Respetar la modulación según la disposición y el tipo de tarjeta, independientemente del espacio disponible en la página.</p>
          </div>

          <Image
            src={`${basePath}/images/tarjetas/modulacion_si_usar.svg`}
            alt="Tarjeta horizontal tematica"
            width="800"
            height="200"
            className="img-fluid mt-4"
          />
          <div className="d-flex pt-3">
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">No estirar o cambiar la modulación de las tarjetas únicamente por rellenar el espacio en blanco. Cambiar la composición del componente genera rupturas en el contenido, que afectan la legibilidad y la escaneabilidad de la información.</p>
          </div>
        </>
      ),
    },
  ];

  const SPECS = [
    {
      title: 'Anatomía',
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
          <p className="text-md mb-4">La imagen de la tarjeta vertical debe tener una proporción 16:9, con un tamaño recomendado de 340x190 px. La imagen de la tarjeta horizontal debe tener una proporción 1:1, con un tamaño recomendado de 64x64 px.</p>
          <Image
            src={`${basePath}/images/tarjetas/variante_img.svg`}
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
            Los íconos en caja tienen un tamaño de 64x64 px. Deben mantener el color predeterminado y estar relacionados al contenido de la tarjeta.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/variante_icono_caja.svg`}
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
            En este caso, la parte accionable de la tarjeta es el título. Si bien no cuenta con el contenedor que delimita el componente, al modular la tarjeta dentro de un grupo respeta el mismo espacio individual.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/variante_sin_borde.svg`}
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
            Entre los tipos de tarjetas, las únicas tarjetas que pueden prescindir del contenido media son las tarjetas horizontales.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/variante_sin_media.svg`}
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
      subtitle: (<>Predeterminada <i>(default)</i></>),
      content: (
        <>
          <p className="text-md">
            Estado predeterminado de las tarjetas en una interfaz.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/estados_predeterminado.svg`}
            alt="Estado de tarjeta predeterminada"
            width="800"
            height="285"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (<>Sobre <i>(hover)</i></>),
      content: (
        <>
          <p className="text-md">
            Estado que adopta la tarjeta cuando un cursor pasa sobre el elemento, cambiando su apariencia para indicar su interactividad a la persona usuaria.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/estados_sobre.svg`}
            alt="Estado de tarjeta sobre (hover)"
            width="800"
            height="285"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (<>En foco <i>(focus)</i></>),
      content: (
        <>
          <p className="text-md">
            Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea claramente visible cuando recibe la atención del usuario, especialmente al ser navegado con el teclado. En Obelisco se utiliza un borde o anillo (focus ring) por fuera del componente en un color distintivo.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/estados_foco.svg`}
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
            El espaciado recomendado para las tarjetas en dispositivos <i>desktop</i> es de 32 px. en sentido horizontal, y 32 px. en sentido vertical.
          </p>
          <Image
            src={`${basePath}/images/tarjetas/boton_espaciado.svg`}
            alt="Espaciado del boton"
            width="800"
            height="285"
            className="img-fluid"
          />
        </>
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
      <Tabs
        sectionUx={SECTION_UX}
        sectionDev={SECTIONS_DEV}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'section-specs',
            sectionContent: SPECS,
          },
          // {
          //   title: 'Accesibilidad',
          //   id: 'accessibility',
          //   sectionContent: ACCESSIBILITY,
          // },
        ]}
      />
    </>
  );
};

export default CardDocs;
