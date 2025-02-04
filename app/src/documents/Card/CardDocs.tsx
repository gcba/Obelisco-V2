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
          <p className="text-md">El botón se compone de 4 elementos.</p>
          <Image
            src={`${basePath}/images/tarjetas/boton_anatomia.svg`}
            alt="Anatomia del botón"
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
                  <td>Contenedor</td>
                  <td>Obligatorio. Puede ser relleno o con borde.</td>
                </tr>
                <tr>
                  <td>
                    Ícono inicial <i>(leading icon)</i>
                  </td>
                  <td>Opcional, siempre y cuando haya una etiqueta.</td>
                </tr>
                <tr>
                  <td>
                    Ícono final <i>(trailing icon)</i>
                  </td>
                  <td>Opcional, siempre y cuando haya una etiqueta.</td>
                </tr>
                <tr>
                  <td>Etiqueta</td>
                  <td>Opcional, siempre y cuando haya un ícono.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Estados',
      content: <></>,
    },
    {
      subtitle: (
        <>
          Predeterminado <i>(default)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">Estado predeterminado de los botones en una interfaz.</p>
          <Image
            src={`${basePath}/images/tarjetas/boton_estado_predeterminado.svg`}
            alt="Estado predeterminado del boton"
            width="800"
            height="464"
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
          <p className="text-md mb-4">
            Estado que adopta el botón cuando un cursor pasa sobre él, cambiando su apariencia para indicar su
            interactividad a la persona usuaria. En este caso tanto los botones rellenos como los de borde se ven
            idénticos.{' '}
          </p>
          <Image
            src={`${basePath}/images/tarjetas/boton_estado_sobre.svg`}
            alt="Estado sobre del boton"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          En Foco <i>(focus)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea
            claramente visible cuando recibe la atención del usuario, especialmente al ser navegado con el teclado. En
            Obelisco se utiliza un borde o anillo <i>(focus ring)</i> por fuera del componente en un color distintivo.
            En este caso tanto los botones rellenos como los de borde se ven idénticos.{' '}
          </p>
          <Image
            src={`${basePath}/images/tarjetas/boton_estado_en_foco.svg`}
            alt="Estado en foco del boton"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          Deshabilitado <i>(disabled)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Estado que indica que el botón no está disponible para la interacción, lo que significa que no puede
            activarse ni recibir foco. Es recomendable minimizar este tipo de botón porque presenta problemas de
            accesibilidad.{' '}
          </p>
          <Image
            src={`${basePath}/images/tarjetas/boton_estado_deshabilitado.svg`}
            alt="Estado deshabilitado del boton"
            width="800"
            height="464"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          Cargando <i>(loading)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Estado que indica que una acción está en progreso y aún no ha finalizado. Se representa visualmente con un{' '}
            <a href="https://gcba.github.io/Obelisco-V2/components/spinner">Spinner</a>, deshabilitando temporalmente el
            botón para evitar interacciones adicionales mientras se completa el proceso. Para reforzar el significado de
            la acción se puede configurar la variante de spinner correspondiente con la de cada botón.{' '}
          </p>
          <Image
            src={`${basePath}/images/tarjetas/boton_estado_cargando.svg`}
            alt="Estado cargando del boton"
            width="800"
            height="464"
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
            El espacio recomendado entre botones para cada tamaño garantiza un espacio clickeable/tappeable óptimo.{' '}
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

  const ACCESSIBILITY = [
    {
      title: 'Navegación alternativa',
      content: (
        <>
          <p className="text-md">
            El componente de botón está construido para ser reconocido por herramientas de asistencia como la navegación
            por teclado o lectores por voz.
          </p>
          <span className="badge badge-default ms-1">TAB</span>
          <span className="badge badge-default">ENTER</span>
          <p className="text-md">
            Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Además, con
            el <i>enter</i>, puede accionar los elementos sobre los que esté posicionada como botones, enlaces, entre
            otros.
          </p>

          <Image
            src={`${basePath}/images/tarjetas/boton_navegacion_alternativa.svg`}
            alt="Navegacion alternativa del botón"
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
            En caso de utilizar un botón solo con ícono y sin etiqueta, se debe colocar una etiqueta semántica{' '}
            <i>(aria-label)</i> en el código con el texto descriptivo de la acción.
          </p>
          {/* <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {tarjetas_ACCESSIBILTY}
          </SyntaxHighlighter> */}
        </>
      ),
    },
    {
      title: 'Criterios WCAG aplicados',
      content: (
        <>
          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.1.1 Non-text Content (Level A)
          </a>
          <p>
            Todo el contenido no textual que se presenta al usuario tiene una alternativa de texto que sirve para el
            propósito equivalente. Esto es válido para botones que sólo tienen un ícono.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.3.1 Info and Relationships (Level A)
          </a>
          <p>
            La información, la estructura y las relaciones transmitidas a través de la presentación pueden determinarse
            mediante programación o están disponibles en el texto.
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
            logotipos.{' '}
          </p>

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
            relación de contraste de 3:1 con respecto a los colores adyacentes.{' '}
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
            href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.5.8 Target Size (Minimum) (Level AA){' '}
          </a>
          <p>El tamaño del objetivo para entradas mediante puntero es de al menos 24 por 24 píxeles CSS.</p>
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
          {
            title: 'Accesibilidad',
            id: 'accessibility',
            sectionContent: ACCESSIBILITY,
          },
        ]}
      />
    </>
  );
};

export default CardDocs;
