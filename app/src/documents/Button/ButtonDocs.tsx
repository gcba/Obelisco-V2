import Image from 'next/image';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const basePath = '/Obelisco-V2';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import LinkClient from '../../components/LinkClient/index';
import {
  BUTTON_SOLID,
  BUTTON_OUTLINE,
  BUTTON_SIZES,
  BUTTON_DISABLED,
  BUTTON_ICON,
  BUTTON_BLOCK,
  BUTTON_ANCHOR,
  BUTTON_SPINNER,
  BUTTON_OUTLINE_SPINNER,
  BUTTON_ICON_XS,
  BUTTON_ACCESSIBILTY,
} from './code-views';

const ButtonDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Tipos',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={BUTTON_SOLID}>
            <div className="d-flex gap-3 justify-content-center align-items-center flex-wrap px-2">
              <div>
                <button type="button" className="btn btn-primary">
                  Primario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-secondary">
                  Secundario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-tertiary">
                  Terciario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-success">
                  Éxito
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-danger">
                  Error
                </button>
              </div>
              <div className="p-2 bg-dark">
                <button type="button" className="btn btn-light">
                  Light
                </button>
              </div>
            </div>
          </CodeBox>

          <br />
          <CodeBox codeHTML={BUTTON_OUTLINE}>
            <div className="d-flex gap-3 justify-content-center align-items-center flex-wrap px-2">
              <div>
                <button type="button" className="btn btn-outline-primary">
                  Primario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-outline-secondary">
                  Secundario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-outline-tertiary">
                  Terciario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-outline-success">
                  Éxito
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-outline-danger">
                  Error
                </button>
              </div>
              <div className="p-2 bg-dark">
                <button type="button" className="btn btn-outline-light">
                  Light
                </button>
              </div>
            </div>
          </CodeBox>
          <br />
          <p>
            En caso de requerir que un elemento <code>anchor</code> adopte el estilo de un botón, simplemente pueden
            utilizarse las clases correspondientes de botones.
          </p>
          <CodeBox codeHTML={BUTTON_ANCHOR}>
            <div className="d-flex gap-3 justify-content-center flex-wrap px-2">
              <LinkClient className="btn btn-primary">Enlace</LinkClient>
              <LinkClient className="btn btn-outline-primary">Enlace</LinkClient>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Tamaños',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_SIZES}>
            <div className="d-flex gap-3 flex-wrap justify-content-center align-items-center px-2">
              <div>
                <button type="button" className="btn btn-primary btn-sm">
                  Chico
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-primary">
                  Mediano
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-primary btn-lg">
                  Grande
                </button>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Estado Deshabilitado',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_DISABLED}>
            <div className="d-flex gap-3 justify-content-center align-items-center flex-wrap px-2">
              <div>
                <button type="button" className="btn btn-primary" disabled>
                  Primario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-secondary" disabled>
                  Secundario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-tertiary" disabled>
                  Terciario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-success" disabled>
                  Éxito
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-danger" disabled>
                  Error
                </button>
              </div>
              <div className="p-2 bg-dark">
                <button type="button" className="btn btn-light" disabled>
                  Light
                </button>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Expandible',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_BLOCK}>
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6 mx-auto">
                  <button type="button" className="btn btn-primary btn-block">
                    Botón Expandible
                  </button>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Con icono',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_ICON}>
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center px-2">
              {/* Icono y Texto */}
              <button type="button" className="btn btn-primary btn-sm">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  add_2
                </span>
                Botón
              </button>

              <button type="button" className="btn btn-primary">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  add_2
                </span>
                Botón
              </button>

              <button type="button" className="btn btn-primary btn-lg">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  add_2
                </span>
                Botón
              </button>
              {/* Fin Icono y Texto */}

              <div className="w-100"></div>
              {/* Icono y Texto */}
              <button type="button" className="btn btn-primary btn-sm">
                Botón
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  arrow_forward
                </span>
              </button>

              <button type="button" className="btn btn-primary">
                Botón
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  arrow_forward
                </span>
              </button>

              <button type="button" className="btn btn-primary btn-lg">
                Botón
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  arrow_forward
                </span>
              </button>
              {/* Fin Icono y Texto */}

              <div className="w-100"></div>
              {/* Icono  */}
              <button type="button" className="btn btn-primary btn-sm" aria-label="Botón">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  add
                </span>
              </button>

              <button type="button" className="btn btn-primary" aria-label="Botón">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  add
                </span>
              </button>

              <button type="button" className="btn btn-primary btn-lg" aria-label="Botón">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  add
                </span>
              </button>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Con spinner',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_SPINNER}>
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center px-2">
              <button type="button" className="btn btn-primary" disabled>
                <div className="spinner-border text-primary spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-secondary" disabled>
                <div className="spinner-border text-secondary spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-tertiary" disabled>
                <div className="spinner-border text-tertiary spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-success" disabled>
                <div className="spinner-border text-success spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-danger" disabled>
                <div className="spinner-border text-danger spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <div className="bg-dark p-2">
                <button type="button" className="btn btn-light" disabled>
                  <div className="spinner-border text-light spinner-border-sm" role="status">
                    <span className="sr-only">Cargando...</span>
                  </div>
                  Cargando
                </button>
              </div>
            </div>
          </CodeBox>
          <br />
          <p className="headline-md mb-4">Botón con borde y spinner</p>
          <CodeBox codeHTML={BUTTON_OUTLINE_SPINNER}>
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center px-2">
              <button type="button" className="btn btn-outline-primary" disabled>
                <div className="spinner-border text-primary spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-outline-secondary" disabled>
                <div className="spinner-border text-secondary spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-outline-tertiary" disabled>
                <div className="spinner-border text-tertiary spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-outline-success" disabled>
                <div className="spinner-border text-success spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-outline-danger" disabled>
                <div className="spinner-border text-danger spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <div className="bg-dark p-2">
                <button type="button" className="btn btn-light" disabled>
                  <div className="spinner-border text-light spinner-border-sm" role="status">
                    <span className="sr-only">Cargando...</span>
                  </div>
                  Cargando
                </button>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Botón XS - Icono',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_ICON_XS}>
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center px-2">
              <button type="button" className="btn btn-xs" aria-label="Editar">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  edit
                </span>
              </button>
              <button type="button" className="btn btn-xs" aria-label="Eliminar">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  delete
                </span>
              </button>
              <button type="button" className="btn btn-xs" aria-label="Visualizar">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  visibility
                </span>
              </button>
              <button type="button" className="btn btn-xs" aria-label="Descargar">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  download_2
                </span>
              </button>
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
              <li>
                Para desencadenar una acción o evento (ej. enviar un formulario, abrir un menú o confirmar una
                operación).
              </li>
              <li>Como guía para avanzar o retroceder a través de flujos interactivos.</li>
              <li>
                Para enlaces de llamado a la acción (CTAs) que precisen mayor jerarquía visual y utilicen estilos de
                botón.{' '}
              </li>
            </ul>
          </div>
          <div className="list-informative" style={{ marginTop: '32px' }}>
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>
                Para navegar a un nuevo destino externo o interno, utilizar un{' '}
                <a href="https://gcba.github.io/Obelisco-V2/components/link">Enlace</a> o un enlace con estilos de
                botón.
              </li>
              <li>
                Para un botón que desencadena opciones, considerar un{' '}
                <a href="https://gcba.github.io/Obelisco-V2/components/dropdown-sel">Desplegable</a>.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Tamaños',
      content: (
        <>
          <p className="mb-4">
            Existen 3 tamaños de botones: grandes, medianos y chicos; el botón grande es el tamaño de botón
            predeterminado.
          </p>
          <Image
            src={`${basePath}/images/boton/boton_botones_tamaños.svg`}
            alt="Tamaños de botones"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Tipos',
      content: (
        <>
          <p className="text-md">
            Cada tipo de botón tiene una función específica dentro de la interfaz, estableciendo una jerarquía a partir
            del color y el relleno.
          </p>

          <div className="max-items-2 mb-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">
                Botón primario <i>(primary)</i>{' '}
              </p>
              <p className="text-md">
                Es el botón de mayor jerarquía, reservado para la acción clave en un flujo. Se recomienda utilizar un
                único botón primario por página.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/boton/boton_tipos_primario.svg`}
                alt="Botón primario"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="max-items-2 mb-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">
                Botón secundario <i>(secondary)</i>
              </p>
              <p className="text-md">
                Es el botón de segunda mayor jerarquía, y se utiliza para acciones complementarias/secundarias en un
                flujo.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/boton/boton_tipos_secundario.svg`}
                alt="Botón secundario"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="max-items-2 mb-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">
                Botón terciario <i>(tertiary)</i>
              </p>
              <p className="text-md">
                Es el botón con menor jerarquía, y se utiliza para acciones repetitivas y/o acciones que no están
                relacionadas al flujo principal.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/boton/boton_tipos_terciario.svg`}
                alt="Botón terciario"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="max-items-2 mb-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">
                Botón de éxito <i>(success)</i>
              </p>
              <p className="text-md">
                Se utiliza como botón de confirmación en flujos con pasos o instancias definitivas, como una acción con
                consecuencia positiva.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/boton/boton_tipos_exito.svg`}
                alt="Botón de exito"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="max-items-2 mb-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">
                Botón de peligro <i>(danger)</i>
              </p>
              <p className="text-md">
                Se utiliza para acciones que podrían tener efectos destructivos o acciones que no pueden deshacerse (por
                ejemplo, eliminar o quitar).
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/boton/boton_tipos_peligro.svg`}
                alt="Botón de peligro"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="max-items-2 mb-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-xl">
                Botón claro <i>(light)</i>
              </p>
              <p className="text-md">
                Se usa para garantizar la visibilidad y legibilidad de las acciones en las interfaces con fondos
                oscuros.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/boton/boton_tipos_claro.svg`}
                alt="Botón claro"
                width="800"
                height="200"
                className="img-fluid"
              />
            </div>
          </div>

          <div style={{ marginTop: '32px' }}>
            <p className="text-xl">
              Botones con borde <i>(outlined)</i>
            </p>
            <p className="text-md mb-4">
              A diferencia del resto de los botones, éstos están delineados, lo que les otorga menos jerarquía visual
              que los botones rellenos. Son utilizados para acciones de menor énfasis, y pueden combinarse con otros
              estilos de botones.
            </p>
            <Image
              src={`${basePath}/images/boton/boton_tipos_outlined.svg`}
              alt="Botón outlined"
              width="800"
              height="200"
              className="img-fluid"
            />
          </div>

          <div style={{ marginTop: '32px' }}>
            <p className="text-xl">Botón de acción para tabla</p>
            <p className="text-md mb-4">
              Se utiliza dentro de la celda de una{' '}
              <a href="https://gcba.github.io/Obelisco-V2/components/table">Tabla</a>, economizando el espacio
              disponible. No cuenta con relleno ni borde.{' '}
            </p>
            <Image
              src={`${basePath}/images/boton/boton_tipos_accion_para_tabla.svg`}
              alt="Botón de acción para tabla"
              width="800"
              height="200"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      title: 'Uso de íconos',
      content: (
        <>
          <p className="text-md  mb-4">
            El botón puede incluir un ícono para reforzar la acción pretendida. También es posible utilizar un botón
            sólo con ícono.{' '}
          </p>
          <Image
            src={`${basePath}/images/boton/boton_uso_icono.svg`}
            alt="Cómo usar los íconos"
            width="800"
            height="200"
            className="img-fluid"
          />

          <p className="text-xl mb-4" style={{ marginTop: '32px' }}>
            Ejemplos de uso
          </p>

          <div>
            <div className="max-items-2">
              <div className="col pe-3">
                <Image
                  src={`${basePath}/images/boton/boton_uso_icono_si.svg`}
                  alt="Cómo sí usar los íconos"
                  width="800"
                  height="200"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p className="mb-0 text-sm">
                    Utilizar librerías que estén integradas a Obelisco, como Material Symbols o Boxicons.
                  </p>
                </div>
              </div>
              <div className="col ps-3">
                <Image
                  src={`${basePath}/images/boton/boton_uso_icono_no.svg`}
                  alt="Cómo no usar los íconos"
                  width="800"
                  height="200"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">check</span>
                  <p className="mb-0 text-sm">No utilizar íconos de librerías que no estén en Obelisco.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="list-informative">
            <p className="text-lg">Posición</p>
            <ul className="list-informative-bullet">
              <li>
                <strong>Ícono inicial</strong> <i>(leading icon)</i>: se posiciona antes de la etiqueta y sirve de
                refuerzo visual. Esta posición se debe al orden de lectura de la persona usuaria.
              </li>
              <li>
                <strong>Ícono final</strong> <i>(trailing icon)</i>: se posiciona luego de la etiqueta, y se utiliza en
                botones con acciones que denotan continuidad. En este caso, es recomendable usar un ícono de flecha o de
                chevrón.
              </li>
            </ul>
          </div>

          <p className="text-xl mb-4" style={{ marginTop: '32px' }}>
            Ejemplos de uso
          </p>

          <div>
            <div className="max-items-2">
              <div className="col pe-3">
                <Image
                  src={`${basePath}/images/boton/boton_uso_icono_2_si.svg`}
                  alt="Ejemplo de uso de cómo sí usar los íconos"
                  width="800"
                  height="200"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p className="mb-0">Utilizar solo 1 ícono de soporte, como ícono inicial o como ícono final.</p>
                </div>
              </div>
              <div className="col ps-3">
                <Image
                  src={`${basePath}/images/boton/boton_uso_icono_2_no.svg`}
                  alt="Ejemplo de uso de cómo no usar los íconos"
                  width="800"
                  height="200"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">check</span>
                  <p className="mb-0">No utilizar 2 íconos de soporte al mismo tiempo.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Patrones de uso o combinación de botones',
      content: (
        <>
          <p className="text-md">
            Existen reglas para el uso y la combinación de botones según su nivel de importancia en cada contexto. Esto
            se basa en el concepto de{' '}
            <i>
              {`"`}
              <strong>espacios jerarquizados</strong> {`"`}
            </i>
            , que implica asignar prioridades a los botones según su función dentro de una interfaz, asegurando que los
            elementos más relevantes sean más visibles y accesibles para las personas usuarias.
          </p>

          {/* Niveles de jerarquía */}
          <div style={{ marginTop: '32px' }}>
            <p className="text-xl">Niveles de jerarquía</p>
            <p className="text-md">
              Los niveles de jerarquía como <i>primary</i>, <i>secondary</i> y <i>tertiary</i> se asignan según el
              contexto de uso y la sección de contenido. Sin embargo, para evitar sobrecargar visualmente una pantalla,
              las acciones repetitivas dentro de una misma sección se trabajarán con botones <i>outlined</i>. Esto
              permite mantener una jerarquía clara y equilibrar el peso visual sin necesidad de mezclar diferentes
              niveles de botones en un mismo espacio.
            </p>
          </div>

          {/* Grupo para acciones primarias */}
          <div style={{ marginTop: '32px' }}>
            <p className="text-xl">Grupo para acciones primarias</p>
            <p className="text-md mb-4">
              Para contextos con acciones primarias y/o acciones principales. Normalmente, existe una única sección o
              agrupación de botones primarios por página. Por ejemplo, en el último paso de un formulario, antes de
              enviar los datos, puede haber 2 acciones: una para ver al detalle toda la información cargada, y una para
              enviar la información de manera definitiva; estas 2 acciones comparten el mismo nivel jerárquico, pero una
              tiene prioridad dentro de este nivel.
            </p>
          </div>
          <Image
            src={`${basePath}/images/boton/boton_grupo_para_acciones_primarias.svg`}
            alt="Grupo para acciones primarias"
            width="800"
            height="350"
            className="img-fluid"
          />

          {/* Grupo para acciones secundarias */}
          <div style={{ marginTop: '32px' }}>
            <p className="text-xl mb-2">Grupo para acciones secundarias</p>
            <p className="text-md" style={{ marginBottom: '32px' }}>
              Recomendado para contextos con acciones secundarias como el patrón de navegación por pasos como{' '}
              <i>&quot;Continuar&quot;</i> y <i>&quot;Volver&quot;</i>. En caso de que sea una acción de finalización
              del proceso, como <i>&quot;Confirmar inscripción&quot;</i>, se reemplaza el botón secundario relleno (
              <i>secondary filled</i>) por el botón primario relleno (<i>primary filled</i>).
            </p>
          </div>
          <Image
            src={`${basePath}/images/boton/boton_grupo_para_acciones_secundarias.svg`}
            alt="Grupo para acciones secundarias"
            width="800"
            height="280"
            className="img-fluid"
          />

          {/* Grupo con botones de peligro */}
          <div style={{ marginTop: '32px' }}>
            <p className="text-xl mb-2">Grupo con botones de peligro</p>
            <p className="text-md mb-4">
              Se usan en contextos de acciones destructivas o modales de peligro. Dentro de este grupo, se debe utilizar
              el estilo relleno (<i>filled</i>) del botón de peligro.
            </p>
          </div>
          <Image
            src={`${basePath}/images/boton/boton_grupo_con_botones_de_peligro.svg`}
            alt="Grupo con botones de peligro"
            width="800"
            height="232"
            className="img-fluid"
          />

          {/* Grupo para acciones terciarias */}
          <div style={{ marginTop: '32px' }}>
            <p className="text-xl mb-2">Grupo para acciones terciarias</p>
            <p className="text-md mb-4">
              Para contextos de acciones terciarias. Por ejemplo, en un formulario se puede utilizar el{' '}
              <i>tertiary filled</i> para editar una sub-sección, y botones <i>outlined</i> dentro de la subsección para
              adjuntar documentación o editar un campo específico.
            </p>
          </div>
          <Image
            src={`${basePath}/images/boton/boton_grupo_para_acciones_terciarias.svg`}
            alt="Grupo para acciones terciarias"
            width="800"
            height="363"
            className="img-fluid"
          />

          {/* Grupo para fondos oscuros */}
          <div style={{ marginTop: '32px' }}>
            <p className="text-xl mb-2">Grupo para fondos oscuros</p>
            <p className="text-md mb-4">
              Para contextos de acciones primarias en fondos oscuros. Se utiliza el <i>light outlined</i> en vez del{' '}
              <i>primary outlined</i>, ya que, este último tiene bajo contraste en fondos oscuros.{' '}
            </p>
          </div>
          <Image
            src={`${basePath}/images/boton/boton_grupo_para_fondos_oscuros.svg`}
            alt="Grupo para fondos oscuros"
            width="800"
            height="295"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Alineación',
      content: (
        <>
          <p className="text-md">
            Se refiere a cómo se alinean los botones en relación al contenedor en el que se encuentra o a la página. La
            alineación de los accionables depende del contexto de uso y el espacio sobre el que interactúa la persona
            usuaria.
            <br />
            <br />
            En dispositivos mobile y tablet, donde el contenido toma una estructura de columna, el cómo se reorganizan
            los botones depende de si se trata de una <strong>acción principal y general</strong>, o de una acción que
            solo refiere a un <strong>bloque de contenido</strong>.
            <br />
            <br />
            Los accionables que cumplen la función de acción principal, normalmente adoptan la alineación en columna y
            de ancho completo. Por otro lado, los que hacen referencia a un <strong>bloque de contenido</strong> o son
            parte de una subsección, normalmente adoptan la alineación en fila y alineados a la izquierda.
          </p>

          <div className="max-items-2" style={{ marginTop: '32px' }}>
            <div className="col pe-3">
              <p className="text-md">
                <strong>Alineación a la izquierda</strong>
              </p>
              <p className="text-md">
                Para páginas donde el contenido requiere de una acción, que no hace referencia a continuidad o a
                navegación progresiva, es recomendable alinear las acciones principales a la izquierda, para reforzar el
                flujo de lectura y el orden de enfoque.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/boton/boton_alineacion_a_la_izquierda.svg`}
                alt="Alineación a la izquierda"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="max-items-2 mt-4 mb-2">
            <div className="col pe-3">
              <p className="text-md">
                <strong>Alineación a la derecha</strong>
              </p>
              <p className="text-md">
                En los modales y formularios, en donde la acción principal implica un paso de navegación hacia adelante,
                los botones primarios siempre aparecen a la derecha.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/boton/boton_alineacion_a_la_derecha.svg`}
                alt="Alineación a la derecha"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="max-items-2 mt-4 mb-2">
            <div className="col pe-3">
              <p className="text-md">
                <strong>Alineación a la derecha</strong>
              </p>
              <p className="text-md">
                Para acciones repetitivas que afectan a un bloque de contenido en la misma página, es recomendable
                utilizar un botón terciario alineado al título de la sección.
              </p>
            </div>
            <div className="col ps-3">
              <Image
                src={`${basePath}/images/boton/boton_alineacion_a_la_derecha_2.svg`}
                alt="Alineación a la derecha parte 2"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="max-items-1" style={{ marginTop: '32px' }}>
            <div className="col">
              <p className="text-md">
                <strong>Alineación para dispositivos mobile</strong>
              </p>
              <p className="text-md">
                En dispositivos <i>mobile</i> la alineación depende del contexto de uso del botón. Existen 3 tipos de
                disposición para los accionables: en columna y de ancho completo, en fila y de ancho completo, y en fila
                y alineados a la izquierda.
              </p>
            </div>

            <div className="col">
              <ul className="list-informative-bullet">
                <li>
                  <strong>En columna y de ancho completo:</strong> permite 1 accionable por línea, uno debajo del otro.
                </li>
                <li>
                  <strong>En fila y de ancho completo</strong>: permite 2 accionables en la misma línea, que toman el
                  100 % del espacio disponible.
                </li>
                <li>
                  <strong>En fila y alineados a la izquierda:</strong> 2 accionables en la misma línea, que se ajustan
                  al largo de su contenido.
                </li>
              </ul>
            </div>

            <div className="col">
              <Image
                src={`${basePath}/images/boton/boton_alineacion_mobile.svg`}
                alt="Alineación mobile"
                width="800"
                height="295"
                className="img-fluid"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Contenido',
      content: (
        <>
          <p className="text-md mb-2">
            El texto de la etiqueta debe ser corto, conciso y descriptivo. Utilizar etiquetas como{' '}
            <i>&quot;Hacé click acá&quot;</i> o <i>&quot;Más info&quot;</i> no visibiliza lo que sucederá al interactuar
            con el botón. La etiqueta del botón siempre debe comenzar con un verbo que refleje la acción consecuente,
            por ejemplo,<i>&quot;Adjuntar archivo&quot;</i>.
          </p>

          <p className="text-xl" style={{ marginTop: '32px' }}>
            Ejemplos de uso
          </p>

          <div>
            <div className="max-items-2">
              {/* 1 */}
              <div className="col pe-3">
                <Image
                  src={`${basePath}/images/boton/boton_contenido_info_si_usar.svg`}
                  alt="Buena práctica en botones ejemplo 1"
                  width="800"
                  height="242"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p className="mb-0">Utilizar hasta 3 palabras como etiqueta dentro de un botón.</p>
                </div>
              </div>
              {/* 2 */}
              <div className="col ps-3">
                <Image
                  src={`${basePath}/images/boton/boton_contenido_info_no_usar.svg`}
                  alt="Mala práctica en botones ejemplo 1"
                  width="800"
                  height="242"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">close</span>
                  <p className="mb-0">No utilizar más de 3 palabras como etiqueta dentro de un botón.</p>
                </div>
              </div>
              {/* 3 */}
              <div className="col pe-3">
                <Image
                  src={`${basePath}/images/boton/boton_contenido_peligro_si_usar.svg`}
                  alt="Buena práctica en botones ejemplo 2"
                  width="800"
                  height="242"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p className="mb-0">Identificar una única acción por botón.</p>
                </div>
              </div>
              {/* 4 */}
              <div className="col ps-3">
                <Image
                  src={`${basePath}/images/boton/boton_contenido_peligro_no_usar.svg`}
                  alt="Mala práctica en botones ejemplo 2"
                  width="800"
                  height="242"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">close</span>
                  <p className="mb-0">No identificar más de 2 acciones en un mismo botón.</p>
                </div>
              </div>
              {/* 5 */}
              <div className="col pe-3">
                <Image
                  src={`${basePath}/images/boton/boton_contenido_exito_si_usar.svg`}
                  alt="Buena práctica en botones ejemplo 3"
                  width="800"
                  height="242"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p className="mb-0">Respetar el uso de mayúsculas al comienzo de la etiqueta.</p>
                </div>
              </div>
              {/* 6 */}
              <div className="col ps-3">
                <Image
                  src={`${basePath}/images/boton/boton_contenido_exito_no_usar.svg`}
                  alt="Mala práctica en botones ejemplo 3"
                  width="800"
                  height="242"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">close</span>
                  <p className="mb-0">No escribir la etiqueta utilizando mayúsculas sostenidas o solo minúsculas.</p>
                </div>
              </div>
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
          <p className="text-md mb-4">El botón se compone de 4 elementos.</p>
          <Image
            src={`${basePath}/images/boton/boton_anatomia.svg`}
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
            src={`${basePath}/images/boton/boton_estado_predeterminado.svg`}
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
            src={`${basePath}/images/boton/boton_estado_sobre.svg`}
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
            src={`${basePath}/images/boton/boton_estado_en_foco.svg`}
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
            src={`${basePath}/images/boton/boton_estado_deshabilitado.svg`}
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
            src={`${basePath}/images/boton/boton_estado_cargando.svg`}
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
            src={`${basePath}/images/boton/boton_espaciado.svg`}
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
      firstTitle: true,
      content: (
        <>
          <p className="text-md" style={{ marginBottom: '32px' }}>
            El componente de botón está construido para ser reconocido por herramientas de asistencia como la navegación
            por teclado o lectores por voz.
          </p>
          <span className="badge badge-default ms-1">TAB</span>
          <span className="badge badge-default">ENTER</span>
          <p className="text-md mb-4">
            Utilizando el <i>tab</i> la persona usuaria puede navegar a través de elementos de la interfaz. Además, con
            el <i>enter</i>, puede accionar los elementos sobre los que esté posicionada como botones, enlaces, entre
            otros.
          </p>

          <Image
            src={`${basePath}/images/boton/boton_navegacion_alternativa.svg`}
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
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {BUTTON_ACCESSIBILTY}
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
            href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.1.1 Non-text Content (Level A)
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
        title="Botones"
        description={[
          'Los botones permiten iniciar acciones o navegar a otras páginas. Las etiquetas de los botones expresan qué acción ocurrirá cuando la persona usuaria interactúe con él.',
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

export default ButtonDocs;
