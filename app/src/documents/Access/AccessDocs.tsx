import { basePath } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import LinkClient from '../../components/LinkClient/index';
import CriteriosWCAG from '../CriteriosWCAG';

import {
  SIMPLE_ACCESS,
  DESCRIPTION_ACCESS,
  ICON_ACCESS,
  FOUR_COLUMNS_ACCESS,
  THREE_COLUMNS_ACCESS,
  ONE_COLUMN_ACCESS,
  SIZES_ACCESS,
  THREE_COLUMNS_ACCESS_SECOND,
  FOUR_COLUMNS_ACCESS_SECOND,
  ACCESS_ACCESSIBILITY,
  ACCESS_ACCESSIBILITY_2,
} from './code-views';

const SECTIONS_DEV = [
  {
    title: 'Simple',
    firstTitle: true,
    content: (
      <CodeBox codeHTML={SIMPLE_ACCESS}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="access-items-1">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm hover">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm focus">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm active">
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
    ),
  },
  {
    title: 'Con descripción',
    content: (
      <CodeBox codeHTML={DESCRIPTION_ACCESS}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="access-items-1">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm hover">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm focus">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm active">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Con icono',
    content: (
      <CodeBox codeHTML={ICON_ACCESS}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="access-items-1">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">
                      info
                    </span>
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm hover">
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">
                      info
                    </span>
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm focus">
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">
                      info
                    </span>
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm active">
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">
                      info
                    </span>
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Tamaños',
    content: (
      <CodeBox codeHTML={SIZES_ACCESS}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="access-items-1">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">
                      info
                    </span>
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item">
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">
                      info
                    </span>
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
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
    content: (
      <>
        <h3 className="headline-lg fw-semibold">
          Cuatro columnas en desktop, dos columnas en tablet y una columna en mobile
        </h3>
        <CodeBox codeHTML={FOUR_COLUMNS_ACCESS}>
          <div className="container">
            <div className="row">
              <div className="access-items-4">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
        <h3 className="headline-lg fw-semibold">Cuatro columnas en desktop, y una columna en tablet y mobile</h3>
        <CodeBox codeHTML={FOUR_COLUMNS_ACCESS_SECOND}>
          <div className="container">
            <div className="row">
              <div className="access-items-4 row-cols-md-1">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
        <h3 className="headline-lg fw-semibold">
          Tres columnas en desktop, dos columnas en tablet y una columna en mobile
        </h3>
        <CodeBox codeHTML={THREE_COLUMNS_ACCESS}>
          <div className="container">
            <div className="row">
              <div className="access-items-3">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
        <h3 className="headline-lg fw-semibold">Tres columnas en desktop, y una columna en tablet y mobile</h3>
        <CodeBox codeHTML={THREE_COLUMNS_ACCESS_SECOND}>
          <div className="container">
            <div className="row">
              <div className="access-items-3 row-cols-md-1">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
        <h3 className="headline-lg fw-semibold">Una columna en aside</h3>
        <CodeBox codeHTML={ONE_COLUMN_ACCESS}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-4">
                <div className="access-items-1">
                  <div className="col">
                    <LinkClient className="list-group-item item-sm">
                      <div className="access-content">
                        <span className="access-title">Acceso</span>
                      </div>
                    </LinkClient>
                  </div>
                  <div className="col">
                    <LinkClient className="list-group-item item-sm">
                      <div className="access-content">
                        <span className="access-title">Acceso</span>
                      </div>
                    </LinkClient>
                  </div>
                  <div className="col">
                    <LinkClient className="list-group-item item-sm">
                      <div className="access-content">
                        <span className="access-title">Acceso</span>
                      </div>
                    </LinkClient>
                  </div>
                  <div className="col">
                    <LinkClient className="list-group-item item-sm">
                      <div className="access-content">
                        <span className="access-title">Acceso</span>
                      </div>
                    </LinkClient>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-8">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quo repellendus earum dolorem, eos
                  ex reprehenderit labore consequuntur, nemo velit quod adipisci laborum saepe officiis culpa.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quo repellendus earum dolorem, eos
                  ex reprehenderit labore consequuntur, nemo velit quod adipisci laborum saepe officiis culpa doloremque
                  nulla obcaecati sapiente.
                </p>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
      </>
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
            <li>Cuando querés ofrecer al usuario una entrada clara hacia otra sección o página del sistema. </li>
            <li>
              Cuando esa entrada representa una unidad funcional (servicio, área, sección) identificable por un título,
              y eventualmente una descripción breve.
            </li>
            <li>
              Si querés agrupar varias &quot;entradas&quot; en un bloque de navegación o landing para que el usuario
              elija a dónde ir.
            </li>
            <li>
              Cuando la interfaz permite mostrar múltiples accesos (lista, grilla), de modo que el usuario tenga una
              visión clara de opciones disponibles.
            </li>
          </ul>
        </div>
        <div className="list-informative" style={{ marginTop: '32px' }}>
          <p className="text-xl">Cuándo no usar</p>
          <ul className="list-informative-bullet">
            <li>
              Si la acción no implica navegación hacia otra sección (es decir, no conduce a un &quot;destino&quot;
              distinto). No usar cuando el elemento no redirige.
            </li>
            <li>
              Si la estructura de información requiere una navegación con múltiples niveles o filtros complejos;
              &quot;Acceso&quot; está pensado para entradas directas simples.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'Disposiciones',
    content: (
      <>
        <p className="pt-2 mb-4">
          Es una agrupación de accesos que tienen cercanía en cuanto a la similitud de acción. Pueden utilizarse tanto
          vertical como horizontalmente.
        </p>
        <p className="text-xl fw-semibold mt-4 mb-2">Vertical</p>
        <p className="text-md mb-4">
          Para la implementación del componente se desarrolló la clase &quot;list-group&quot; que permite organizarlo y
          adaptarlo correctamente en forma de lista.
        </p>
        <Image
          src={`${basePath}/images/access/accesos_vertical.svg`}
          alt="Tamaños de botones"
          width="800"
          height="200"
          className="img-fluid"
        />
        <p className="text-xl fw-semibold mt-4 mb-2">Horizontal</p>
        <p className="text-md mb-4">
          Para la correcta distribución y visualización del componente, se deben utilizar la combinación de las clases:
          &quot;list-group&quot; y &quot;list-group-row&quot;.
        </p>
        <Image
          src={`${basePath}/images/access/accesos_horizontal.svg`}
          alt="Tamaños de botones"
          width="800"
          height="200"
          className="img-fluid mb-4"
        />
        <p className="text-md">
          Recomendamos utilizar un máximo de 4 accesos en un ancho de 12 columnas y 3 accesos para una grilla de 8
          columnas.{' '}
        </p>
      </>
    ),
  },
  {
    title: 'Contenido',
    content: (
      <>
        <p className="text-xl mb-4">Ejemplos de uso</p>

        <div className="col">
          <Image
            src={`${basePath}/images/access/accesos_ej_de_uso_correcto.svg`}
            alt="Ejemplo de cómo sí usar los accesos"
            width="800"
            height="200"
            className="img-fluid"
          />
          <div className="d-flex align-items-center mt-2 gap-1">
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0 text-sm">
              Recomendamos limitarse a una línea de texto para el título y la descripción de los accesos.{' '}
            </p>
          </div>
        </div>
        <div className="col">
          <Image
            src={`${basePath}/images/access/accesos_ej_de_uso_incorrecto.svg`}
            alt="Ejemplo de cómo no usar los accesos"
            width="800"
            height="200"
            className="img-fluid mt-3"
          />
          <div className="d-flex align-items-center mt-2  gap-1">
            <span className="material-symbols-rounded text-danger">check</span>
            <p className="mb-0 text-sm">No utilizar puntos suspensivos para truncar el texto de los accesos</p>
          </div>
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
        <Image
          src={`${basePath}/images/access/accesos_anatomia.svg`}
          alt="Anatomia del acceso"
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
                <td>Icono</td>
                <td>Obligatorio. Puede ser relleno o con borde.</td>
              </tr>
              <tr>
                <td>Titulo del acceso </td>
                <td>Obligatorio, todos los accesos deben incluir un título.</td>
              </tr>
              <tr>
                <td>Descripción del acceso </td>
                <td>
                  Opcional, pero recomendable para agregar información adicional que puede servirle a la persona usuaria
                  a comprender mejor la acción a realizar.
                </td>
              </tr>
              <tr>
                <td>Icono de chevron</td>
                <td>
                  Obligatorio, ayuda a identificar que el elemento es interactivo y que permite la continuación de la
                  página.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: 'Variantes',
    content: <></>,
  },
  {
    subtitle: 'Sin borde',
    content: (
      <>
        <p className="text-md mb-4">
          Se utilizan para componer organismos donde se establezcan múltiples accesos dentro de un mismo contenedor.
        </p>
        <Image
          src={`${basePath}/images/access/accesos_variantes.svg`}
          alt="Acceso sin borde"
          width="800"
          height="280"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    subtitle: 'Con borde',
    content: (
      <>
        <p className="text-md mb-4">
          Se utilizan para acceder a secciones de mayor relevancia. Principalmente se usan en compañía de otros accesos
          generando agrupaciones de una misma temática.
        </p>
        <Image
          src={`${basePath}/images/access/accesos_con_borde.svg`}
          alt="Acceso con borde"
          width="800"
          height="280"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    subtitle: 'Con descripción',
    content: (
      <>
        <p className="text-md mb-4">
          La descripción es una variable del acceso para agregar información adicional que puede servirle a la persona
          usuaria a comprender mejor la acción a realizar.
        </p>
        <Image
          src={`${basePath}/images/access/accesos_con_descripcion.svg`}
          alt="Acceso Con descripción"
          width="800"
          height="280"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    subtitle: 'Con ícono',
    content: (
      <>
        <p className="text-md mb-4">
          El ícono sirve como referencia visual para complementar al título del acceso y así ayudar a la persona usuaria
          a tomar una decisión.
        </p>
        <Image
          src={`${basePath}/images/access/accesos_con_icono.svg`}
          alt="Acceso Con ícono"
          width="800"
          height="280"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    subtitle: 'Tamaños',
    content: (
      <>
        <Image
          src={`${basePath}/images/access/accesos_tamaños.svg`}
          alt="Acceso tamaños"
          width="800"
          height="280"
          className="img-fluid mt-3"
        />
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
        <p className="text-md mb-4 mt-2">Estado predeterminado de los botones en una interfaz.</p>
        <Image
          src={`${basePath}/images/access/accesos_default.svg`}
          alt="Estado predeterminado del componente acceso en una interfaz. "
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
        <p className="text-md mb-4">Cuando un usuario está sobre el elemento.</p>
        <Image
          src={`${basePath}/images/access/accesos_hover.svg`}
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
          Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea claramente
          visible cuando recibe la atención del usuario, especialmente al ser navegado con el teclado. En Obelisco se
          utiliza un borde o anillo (focus ring) por fuera del componente en un color distintivo.
        </p>
        <Image
          src={`${basePath}/images/access/accesos_focus.svg`}
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
        Activo <i>(active)</i>
      </>
    ),
    content: (
      <>
        <p className="text-md mb-4">Indica que la persona usuaria seleccionó el acceso</p>
        <Image
          src={`${basePath}/images/access/accesos_focus.svg`}
          alt="Estado en foco del boton"
          width="800"
          height="464"
          className="img-fluid"
        />
      </>
    ),
  },
];

const ACCESSIBILITY = [
  {
    title: 'Navegación alternativa',
    firstTitle: true,
    content: (
      <>
        <p className="text-md mb-4">
          El componente de accesos está construido para ser accesible mediante navegación por teclado y reconocible por
          lectores de pantalla.
        </p>
        <span className="badge badge-default ms-1">TAB</span>
        <span className="badge badge-default">ENTER</span>
        <p className="text-md mb-4 mt-2">
          Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Acciones como
          cerrar o activar botones se pueden realizar con las teclas <i>Enter</i> o <i>space</i>.
        </p>

        <Image
          src={`${basePath}/images/access/accesos_accesibilidad.svg`}
          alt="Navegacion alternativa de los accesos"
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
        <p className="text-md   pt-2">
          Las alertas deben incluir etiquetas semánticas y atributos ARIA que comuniquen correctamente su propósito y
          estado al usuario, especialmente a las tecnologías asistivas.
        </p>
        <p className="text-md">
          El atributo <i>role=&quot;alert&quot;</i> informa al lector de pantalla que el contenido es importante y
          requiere atención inmediata. Se anuncian automáticamente sin necesidad de que el foco del teclado se desplace
          al elemento.
        </p>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {ACCESS_ACCESSIBILITY}
        </SyntaxHighlighter>
        <p className="text-md mt-4 mb-3">
          Cuando la alerta tenga un título y una descripción, ambos deben estar correctamente asociados. Se recomienda
          usar <i>aria-labelledby</i> y <i>aria-describedby</i> para garantizar una lectura secuencial.
        </p>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {ACCESS_ACCESSIBILITY_2}
        </SyntaxHighlighter>
      </>
    ),
  },
  {
    title: 'Criterios WCAG aplicados',
    content: (
      <>
        <CriteriosWCAG list={['1.3.1', '1.4.11', '2.1.1', '2.4.7']} />
      </>
    ),
  },
];

const AccessDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Accesos"
        description={[
          'Los accesos funcionan como puntos de ingreso a diferentes secciones y pueden agruparse cuando hay una similitud en su contenido.',
        ]}
      />
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'specs',
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

export default AccessDocs;
