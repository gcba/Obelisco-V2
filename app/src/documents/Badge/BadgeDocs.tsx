import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

const basePath = '/Obelisco-V2';
import {
  BADGE_ACCESSIBLITY,
  BADGE_ACCESSIBLITY_2,
  BADGE_APARIENCIA,
  BADGE_CLICKEABLE_PRIMARIA_CON_ICONO,
  BADGE_CLICKEABLE_PRIMARIA_SOLO_TEXTO,
  BADGE_CLICKEABLE_SECUNDARIA_CON_ICONO,
  BADGE_CLICKEABLE_SECUNDARIA_SOLO_TEXTO,
  BADGE_ESTATICA_PRIMARIA_CON_ICONO,
  BADGE_ESTATICA_PRIMARIA_SOLO_TEXTO,
  BADGE_ESTATICA_SECUNDARIA_CON_ICONO,
  BADGE_ESTATICA_SECUNDARIA_SOLO_TEXTO,
  BADGE_REMOVE,
  BADGE_SELECT,
  BADGE_SIZES,
  //  BADGE_TYPES
} from './code-views';
const BadgeDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Estáticas',
      firstTitle: true,
      content: <></>,
    },
    {
      subtitle: 'Primarias',
      content: <></>,
    },
    {
      tertiarytitle: 'Con ícono',
      content: (
        <CodeBox codeHTML={BADGE_ESTATICA_PRIMARIA_CON_ICONO}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <span className="badge badge-p-default">
                <span className="material-symbols-rounded">ink_selection</span> Etiqueta
              </span>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      tertiarytitle: 'Sólo texto',
      content: (
        <CodeBox codeHTML={BADGE_ESTATICA_PRIMARIA_SOLO_TEXTO}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <span className="badge badge-p-default">Etiqueta</span>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Secundarias',
      content: <></>,
    },
    {
      tertiarytitle: 'Con ícono',
      content: (
        <CodeBox codeHTML={BADGE_ESTATICA_SECUNDARIA_CON_ICONO}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <span className="badge badge-s-default">
                <span className="material-symbols-rounded">ink_selection</span> Etiqueta
              </span>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      tertiarytitle: 'Sólo texto',
      content: (
        <CodeBox codeHTML={BADGE_ESTATICA_SECUNDARIA_SOLO_TEXTO}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <span className="badge badge-s-default">Etiqueta</span>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Clickeables',
      firstTitle: true,
      content: <></>,
    },
    {
      subtitle: 'Primarias',
      content: <></>,
    },
    {
      tertiarytitle: 'Con ícono',
      content: (
        <CodeBox codeHTML={BADGE_CLICKEABLE_PRIMARIA_CON_ICONO}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <LinkClient className="badge badge-p-link-default">
                <span className="material-symbols-rounded">ink_selection</span>
                <span>Etiqueta</span>
              </LinkClient>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      tertiarytitle: 'Sólo texto',
      content: (
        <CodeBox codeHTML={BADGE_CLICKEABLE_PRIMARIA_SOLO_TEXTO}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <LinkClient className="badge badge-p-link-default">
                <span>Etiqueta</span>
              </LinkClient>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Secundarias',
      content: <></>,
    },
    {
      tertiarytitle: 'Con ícono',
      content: (
        <CodeBox codeHTML={BADGE_CLICKEABLE_SECUNDARIA_CON_ICONO}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <LinkClient className="badge badge-s-link-default">
                <span className="material-symbols-rounded">ink_selection</span>
                <span>Etiqueta</span>
              </LinkClient>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      tertiarytitle: 'Sólo texto',
      content: (
        <CodeBox codeHTML={BADGE_CLICKEABLE_SECUNDARIA_SOLO_TEXTO}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <LinkClient className="badge badge-s-link-default">
                <span>Etiqueta</span>
              </LinkClient>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Tamaños',
      content: (
        <CodeBox codeHTML={BADGE_SIZES}>
          <div className="row justify-content-center">
            <div className="col-auto gap-2">
              <span className="badge badge-s-default badge-sm">Etiqueta</span>
              <span className="badge badge-s-default">Etiqueta</span>
              <span className="badge badge-s-default badge-lg">Etiqueta</span>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Apariencia',
      content: (
        <CodeBox codeHTML={BADGE_APARIENCIA}>
          <div className="row justify-content-center align-items-center gap-3">
            <div className="col-auto">
              <span className="badge badge-p-default">Etiqueta</span>
              <span className="badge badge-p-info">Etiqueta</span>
              <span className="badge badge-p-success">Etiqueta</span>
              <span className="badge badge-p-danger">Etiqueta</span>
              <span className="badge badge-p-warning">Etiqueta</span>
              <span className="badge badge-p-highlight">Etiqueta</span>
            </div>
            <div className="col-auto">
              <span className="badge badge-s-default">Etiqueta</span>
              <span className="badge badge-s-info">Etiqueta</span>
              <span className="badge badge-s-success">Etiqueta</span>
              <span className="badge badge-s-danger">Etiqueta</span>
              <span className="badge badge-s-warning">Etiqueta</span>
              <span className="badge badge-s-highlight">Etiqueta</span>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Eliminables',
      content: (
        <CodeBox codeHTML={BADGE_REMOVE}>
          <div className="row justify-content-center align-items-center gap-3">
            <div className="col-auto">
              <LinkClient className="badge badge-remove">
                <span className="material-symbols-rounded">close</span>
                <span>Etiqueta</span>
              </LinkClient>
              <LinkClient className="badge badge-remove hover">
                <span className="material-symbols-rounded">close</span>
                <span>Etiqueta</span>
              </LinkClient>
              <LinkClient className="badge badge-remove focus">
                <span className="material-symbols-rounded">close</span>
                <span>Etiqueta</span>
              </LinkClient>
              <LinkClient className="badge badge-remove disabled">
                <span className="material-symbols-rounded">close</span>
                <span>Etiqueta</span>
              </LinkClient>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Seleccionables',
      content: (
        <CodeBox codeHTML={BADGE_SELECT}>
          <div className="row justify-content-center align-items-center gap-3">
            <div className="col-auto">
              <span className="badge badge-select" tabIndex={0}>
                <span className="material-symbols-rounded">ink_selection</span>
                Etiqueta
              </span>
              <span className="badge badge-select hover" tabIndex={0}>
                <span className="material-symbols-rounded">ink_selection</span>
                Etiqueta
              </span>
              <span className="badge badge-select focus" tabIndex={0}>
                <span className="material-symbols-rounded">ink_selection</span>
                Etiqueta
              </span>
              <span className="badge badge-select active" tabIndex={0}>
                <span className="material-symbols-rounded">ink_selection</span>
                Etiqueta
              </span>
              <span className="badge badge-select disabled" tabIndex={0}>
                <span className="material-symbols-rounded">ink_selection</span>
                Etiqueta
              </span>
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
                Cuando el contenido pertenezca a múltiples categorías o necesite diferenciarse. Sirven para clasificar
                información o destacarla en modo solo lectura.
              </li>
              <li>Para filtrar información y mostrar varias etiquetas.</li>
              <li>
                Cuando la etiqueta es interactiva y se utiliza para agrupar contenido relacionado, como categorías o
                filtros.
              </li>
            </ul>
          </div>
          <div className="list-informative" style={{ marginTop: '32px' }}>
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>
                Como llamada a la acción para redirigir a la persona usuaria a una nueva página, en ese caso utiliza el
                componente <a href="https://gcba.github.io/Obelisco-V2/components/button">Botón</a>
              </li>
              <li>
                Evitá usar las etiquetas estáticas e interactivas en una misma página ya que puede generar errores no
                forzados.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Tipos de etiquetas',
      content: (
        <>
          <div className="max-items-2 mb-2" style={{ marginTop: '32px' }}>
            {/* estatica */}
            <div className="col pe-3">
              <p className="text-xl">Estática</p>
              <p className="text-md">
                Se utilizan para proporcionar información o identificación de un elemento a través de una palabra clave
                estática.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-estatica.svg`}
                alt="Etiqueta estatica"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
            {/* estatica */}
            {/* Clickeable */}
            <div className="col pe-3">
              <p className="text-xl">Clickeable</p>
              <p className="text-md">
                Se utiliza para redirigir a la persona usuaria a otra página con contenido relacionado a la etiqueta.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-clickeable.svg`}
                alt="Etiqueta clickeable"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
            {/* Clickeable */}
            {/* Seleccionable */}
            <div className="col pe-3">
              <p className="text-xl">Seleccionable</p>
              <p className="text-md">Se utiliza para filtrar información relacionada en una misma página. </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-seleccionable.svg`}
                alt="Etiqueta Seleccionable"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
            {/* Seleccionable */}
            {/* Eliminable */}
            <div className="col pe-3">
              <p className="text-xl">Eliminable</p>
              <p className="text-md">
                Se utiliza en <a href="https://gcba.github.io/Obelisco-V2/components/form-search">campos de búsqueda</a>{' '}
                para filtrar y borrar la opción seleccionada.{' '}
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-eliminable.svg`}
                alt="Etiqueta Eliminable"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
            {/* Eliminable */}
          </div>
        </>
      ),
    },
    {
      title: 'Tamaños',
      content: (
        <>
          <p className="text-md mb-4">
            Existen 3 tamaños de etiquetas: pequeñas <i>(small)</i>, medianas <i>(medium)</i> y grandes <i>(large)</i>.
            Según el contexto de uso en la interfaz corresponde el tamaño de la etiqueta.
          </p>
          <Image
            src={`${basePath}/images/etiqueta/badge-tamaños.svg`}
            alt="Tamaños de etiquetas"
            width="728"
            height="148"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: 'Ancho máximo',
      content: (
        <>
          <p className="text-md mb-4">
            Todos los tipos de etiquetas tienen configurado un ancho máximo para asegurar el correcto comportamiento con
            textos que ocupan más de 3 palabras. Los textos que excedan los 240px de ancho pasan a formar una segunda
            línea de texto.
          </p>
          <Image
            src={`${basePath}/images/etiqueta/badge-ancho-maximo.svg`}
            alt="Ancho máximo de etiquetas y comportamiento"
            width="728"
            height="148"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Apariencia',
      content: (
        <>
          <p className="text-md">
            Las etiquetas adoptan estilos predefinidos según su función. Cada tipo aplica un set de variables de color
            específicas que garantizan consistencia visual y una comunicación clara del contenido.
          </p>
          <div className="responsive-scroll mt-4" tabIndex={0}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="tb-text">
                    Valor
                  </th>
                  <th scope="col" className="tb-text">
                    Propósito
                  </th>
                  <th scope="col" className="tb-text">
                    Color asociado
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="badge badge-p-default">Primario</span>
                  </td>
                  <td>Información sin énfasis.</td>
                  <td>Gris claro</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge badge-p-info">Información</span>
                  </td>
                  <td>Datos informativos o aclaratorios.</td>
                  <td>Azul</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge badge-p-success">Éxito</span>
                  </td>
                  <td>Para casos aprobados, completos, exitosos, finalizados.</td>
                  <td>Verde</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge badge-p-warning">Advertencia</span>
                  </td>
                  <td>Para casos que requieren atención, también para casos en pausa o rechazados.</td>
                  <td>Amarillo</td>
                </tr>

                <tr>
                  <td>
                    <span className="badge badge-p-danger">Peligro</span>
                  </td>

                  <td>Para casos de error, no completados, eliminados.</td>

                  <td>Rojo</td>
                </tr>

                <tr>
                  <td>
                    <span className="badge badge-p-highlight">Destacado</span>
                  </td>

                  <td>Promoción, novedad, énfasis visual.</td>

                  <td>Violeta / color destacado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },

    {
      title: 'Jerarquías',

      content: (
        <>
          <p className="text-md">
            Las etiquetas estáticas y clickeables tienen dos niveles de jerarquía según el énfasis necesario para
            resaltar el elemento.
          </p>

          <div className="max-items-2 mb-2" style={{ marginTop: '32px' }}>
            {/* Primaria */}

            <div className="col pe-3">
              <p className="text-xl">Primaria</p>

              <p className="text-md">
                La jerarquía primaria se utiliza para destacar un elemento, propiedad o concepto del conjunto total de
                etiquetas.
              </p>
            </div>

            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-primaria.svg`}
                alt="Etiqueta Primaria"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>

            {/* Primaria */}

            {/* Secundaria */}

            <div className="col pe-3">
              <p className="text-xl">Secundaria</p>

              <p className="text-md">
                La jerarquía secundaria se usa con mayor frecuencia cuando hay tres o más etiquetas en línea para
                categorizar la información de un elemento.{' '}
              </p>
            </div>

            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-secundaria.svg`}
                alt="Etiqueta Secundaria"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>

            {/* Secundaria */}

            {/* Unica */}

            <div className="col pe-3">
              <p className="text-xl">Unica</p>

              <p className="text-md">
                Tanto las etiquetas seleccionables como eliminables tienen una jerarquía visual única para no entorpecer
                la decisión del usuario por el color.{' '}
              </p>
            </div>

            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-unica.svg`}
                alt="Etiqueta Unica"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>

            {/* Unica */}
          </div>

          {/* ejemplos de uso */}

          <p className="text-xl">Ejemplos de uso</p>
          <Image
            src={`${basePath}/images/etiqueta/badge_ejemplo_de_uso_correcto.svg`}
            alt="Ejemplo de uso correcto"
            width="800"
            height="200"
            className="img-fluid"
          />

          <div className="d-flex pt-3 mb-4">
            <span className="material-symbols-rounded text-success">check</span>

            <p className="mb-0">
              Utilizá etiquetas primarias para resaltar la categoría principal del evento, y las etiquetas secundarias
              información complementaria.
            </p>
          </div>

          <Image
            src={`${basePath}/images/etiqueta/badge_ejemplo_de_uso_incorrecto.svg`}
            alt="Ejemplo de uso incorrecto"
            width="800"
            height="200"
            className="img-fluid"
          />

          <div className="d-flex pt-3">
            <span className="material-symbols-rounded text-danger">close</span>

            <p className="mb-0">
              No recomendamos saturar la página con etiquetas primarias, ya que pueden competir entre sí. Si todo está
              resaltado, nada lo está.
            </p>
          </div>
        </>
      ),
    },

    {
      title: 'Uso de íconos',

      content: (
        <>
          <p className="text-md mb-4">
            Los íconos son opcionales y pueden utilizarse para reforzar el significado o mejorar la identificación
            visual de la información. Se recomienda usarlos únicamente cuando aporten valor semántico o mejoren la
            comprensión, evitando sobrecargar el componente.
          </p>

          <Image
            src={`${basePath}/images/etiqueta/badge-iconos.svg`}
            alt="Tamaños de etiquetas"
            width="728"
            height="148"
            className="img-fluid"
          />
        </>
      ),
    },

    {
      title: 'Disposición',

      content: (
        <>
          <p className="text-md mb-4">
            Se alinean siempre a la izquierda para mantener un orden de lectura natural. Suelen usarse al comienzo de un
            artículo para mostrar una categoría principal, o al final como &quot;Etiquetas relacionadas&quot;, ayudando
            a clasificar y contextualizar el contenido.
          </p>

          <div className="max-items-2">
            <div className="col pe-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-disposicion_buen_uso.svg`}
                alt="Ejemplo de uso de cómo sí usar los íconos"
                width="800"
                height="200"
                className="img-fluid"
              />

              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-success">check</span>

                <p className="mb-0">
                  Las etiquetas se alinean a la izquierda para facilitar la lectura y la accesibilidad.
                </p>
              </div>
            </div>

            <div className="col ps-3">
              <Image
                src={`${basePath}/images/etiqueta/badge-disposicion_mal_uso.svg`}
                alt="Ejemplo de uso de cómo no usar los íconos"
                width="800"
                height="200"
                className="img-fluid"
              />

              <div className="d-flex pt-3">
                <span className="material-symbols-rounded text-danger">check</span>

                <p className="mb-0">Alinearlas a la derecha interrumpe la lectura y dificulta su identificación.</p>
              </div>
            </div>
          </div>
        </>
      ),
    },

    {
      title: 'Contexto de uso',

      content: (
        <>
          <p className="text-xl mb-4">
            Para resaltar un estado, tipo o modalidad de contenido que no requiere acción del usuario.
          </p>

          <p className="text-md mb-4">
            Se pueden utilizar para mostrar información complementaria o clasificar contenido de manera visual, sin
            interacción. Por ejemplo, en una ficha de trámite puede indicar si es Presencial o En línea.
          </p>

          <Image
            src={`${basePath}/images/etiqueta/badge-contexto-de-uso.svg`}
            alt="Etiqueta Contexto de uso"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginBottom: '32px' }}
          />

          <p className="text-xl mb-4">Para agrupar o categorizar contenido </p>

          <p className="text-md mb-4">
            Se pueden utilizar en listados, tarjetas o secciones donde el contenido puede organizarse por temas o
            categorías, permitiéndole al usuario filtrar, navegar o descubrir información relacionada de forma rápida.
            Suelen resumir el contenido de la página.
          </p>

          <Image
            src={`${basePath}/images/etiqueta/badge-contexto-de-uso-1.svg`}
            alt="Etiqueta Contexto de uso"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginBottom: '32px' }}
          />

          <p className="text-xl mb-3">Para búsquedas filtradas por temas específicos</p>

          <p className="text-md  mb-4">
            Para filtrar información sobre temas relacionados a través de un campo de búsqueda. Permite eliminar las
            etiquetas seleccionadas para volver atrás con la filtración por esa categoría.
          </p>

          <Image
            src={`${basePath}/images/etiqueta/badge-contexto-de-uso-2.svg`}
            alt="Etiqueta Contexto de uso"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginBottom: '32px' }}
          />

          <p className="text-xl mb-3">Para filtrar contenido en una misma página</p>

          <p className="text-md mb-4">
            Las etiquetas de filtro activas se utilizan para indicar que un criterio de filtrado está aplicado. Al
            interactuar con la etiqueta, el filtro se activa o desactiva produciendo que la interfaz actualice de manera
            inmediata.
          </p>

          <Image
            src={`${basePath}/images/etiqueta/badge-contexto-de-uso-3.svg`}
            alt="Etiqueta Contexto de uso"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginBottom: '32px' }}
          />
        </>
      ),
    },

    {
      title: 'Contenido',

      content: (
        <>
          <p className="text-xl mb-4">Texto en las etiquetas</p>

          <p className="text-md">
            Las etiquetas deben ser breves, claras y estar redactadas siguiendo pautas de escritura. Evitá que el texto
            se corte en varias líneas: lo ideal es que no superen los 20 caracteres.
          </p>
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
            src={`${basePath}/images/etiqueta/badge-anatomia.svg`}
            alt="Anatomia de la etiqueta"
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
                  <td>1. Contenedor</td>
                  <td>Obligatorio, deben estar dentro de un contenedor que asegure su alineación y espaciado.</td>
                </tr>
                <tr>
                  <td>2. Texto etiqueta</td>
                  <td>Obligatorio, indica el nombre de la etiqueta.</td>
                </tr>
                <tr>
                  <td>3. Botón cancelar</td>
                  <td>Opcional, indica que la etiqueta puede ser eliminada.</td>
                </tr>
                <tr>
                  <td>4. Ícono</td>
                  <td>Opcional, puede utilizarse un ícono para reforzar la información.</td>
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
          <p className="text-md mb-4">Estado predeterminado de la etiqueta en una interfaz. </p>
          <Image
            src={`${basePath}/images/etiqueta/badge-estado-default.svg`}
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
            Estado que adopta la etiqueta cuando un cursor pasa sobre él, cambiando su apariencia para indicar su
            interactividad a la persona usuaria. Este estado se encuentra habilitado en las etiquetas clickeable,
            seleccionable y eliminable.
          </p>
          <Image
            src={`${basePath}/images/etiqueta/badge-estado-hover.svg`}
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
          En foco <i>(focus)</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea
            claramente visible cuando recibe la atención del usuario, especialmente al ser navegado con el teclado. En
            Obelisco se utiliza un borde o anillo <i>(focus ring)</i> por fuera del componente en un color distintivo.
          </p>
          <Image
            src={`${basePath}/images/etiqueta/badge-estado-focus.svg`}
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
            Es un estado para informar que la etiqueta está deshabilitada y no permite la interacción. Este estado se
            encuentra habilitado en las etiquetas clickeable, seleccionable y eliminable.
          </p>
          <Image
            src={`${basePath}/images/etiqueta/badge-estado-disabled.svg`}
            alt="Estado deshabilitado del boton"
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
            El componente de etiquetas está construido para ser accesible mediante navegación por teclado y reconocible
            por lectores de pantalla, comunicando su estado (activado o desactivado) de forma clara.
          </p>
          <span className="badge badge-s-default ms-1">TAB</span>
          <span className="badge badge-s-default">ENTER</span>
          <p className="text-md mt-2 mb-4">
            Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz.
          </p>
          <Image
            src={`${basePath}/images/etiqueta/badge-accesibilidad.svg`}
            alt="Navegacion alternativa de la etiqueta"
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
            Para las etiquetas estáticas usá el elemento <code>{'<span>'}</code> y deshabilitá los estados hover,
            on-click y focus.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {BADGE_ACCESSIBLITY}
          </SyntaxHighlighter>
          <p className="text-md mt-4 mb-3">
            Para las etiquetas interactivas usá el elemento <code>{'<a>'}</code> para que la etiqueta funcione como un
            enlace que permita explorar contenido relacionado (por temática, categoría, etc.). Si la etiqueta redirige,
            el atributo href debe ser válido y apuntar al destino correcto.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {BADGE_ACCESSIBLITY_2}
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
            href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.1 Keyboard (Level A)
          </a>
          <p>Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.</p>
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
            del teclado es visible. Cuando utiliza un teclado para navegar por los componentes, los enlaces tienen un
            subrayado visible y un recuadro outline que indica que los enlaces son interactivos.
          </p>
        </>
      ),
    },
  ];
  return (
    <>
      <ComponentHeader
        title="Etiquetas"
        description={[
          'Las etiquetas se utilizan para identificar y categorizar la información de una página, ofreciendo contexto para que los usuarios comprendan mejor el contenido.',
        ]}
      />
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX}
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
      />{' '}
    </>
  );
};
export default BadgeDocs;
