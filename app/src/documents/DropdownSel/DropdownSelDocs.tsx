'use client';
import { basePath } from '@/utils';
import Image from 'next/image';
import { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import CriteriosWCAG from '@/components/CriteriosWCAG';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  DROPDOWN_CHECKBOX_HTML,
  DROPDOWN_CHECKBOX_JS,
  DROPDOWN_CHECKBOX_SIZES_LG,
  DROPDOWN_CHECKBOX_SIZES_MD,
  DROPDOWN_CHECKBOX_SIZES_SM,
  DROPDOWN_RADIO_HTML,
  DROPDOWN_RADIO_JS,
  DROPDOWN_RADIO_SIZES_LG,
  DROPDOWN_RADIO_SIZES_MD,
  DROPDOWN_RADIO_SIZES_SM,
  DROPWDOWN_ACCESSIBILTY,
} from './code-views';

const SECTIONS_DEV = [
  {
    title: 'Con selección múltiple',
    firstTitle: true,
  },
  {
    subtitle: 'Grande',
    content: (
      <CodeBox codeHTML={DROPDOWN_CHECKBOX_SIZES_LG}>
        <div className="container">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-dropdown btn-dropdown-border btn-lg"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <span className="material-symbols-rounded o-icon" aria-label="hidden">
                add
              </span>
              <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
              <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                expand_more
              </span>
            </button>
            <div className="dropdown-menu">
              <div className="form-checkbox">
                <input
                  className="form-checkbox-input"
                  type="checkbox"
                  name="dropdownCheckboxLg"
                  id="option-checkbox-lg-1"
                  value="option-1"
                />
                <label className="form-checkbox-label" htmlFor="option-checkbox-lg-1">
                  Opción de selección múltiple 1
                </label>
              </div>
              <div className="form-checkbox">
                <input
                  className="form-checkbox-input"
                  type="checkbox"
                  name="dropdownCheckboxLg"
                  id="option-checkbox-lg-2"
                  value="option-2"
                />
                <label className="form-checkbox-label" htmlFor="option-checkbox-lg-2">
                  Opción de selección múltiple 2
                </label>
              </div>
              <div className="form-checkbox">
                <input
                  className="form-checkbox-input"
                  type="checkbox"
                  name="dropdownCheckboxLg"
                  id="option-checkbox-lg-3"
                  value="option-3"
                  disabled
                />
                <label className="form-checkbox-label" htmlFor="option-checkbox-lg-3">
                  Opción de selección múltiple 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    subtitle: 'Mediano',
    content: (
      <CodeBox codeHTML={DROPDOWN_CHECKBOX_SIZES_MD}>
        <div className="container">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-dropdown btn-dropdown-border"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <span className="material-symbols-rounded o-icon" aria-label="hidden">
                add
              </span>
              <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
              <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                expand_more
              </span>
            </button>
            <div className="dropdown-menu">
              <div className="form-checkbox">
                <input
                  className="form-checkbox-input"
                  type="checkbox"
                  name="dropdownCheckboxMd"
                  id="option-checkbox-1"
                  value="option-1"
                />
                <label className="form-checkbox-label" htmlFor="option-checkbox-1">
                  Opción de selección múltiple 1
                </label>
              </div>
              <div className="form-checkbox">
                <input
                  className="form-checkbox-input"
                  type="checkbox"
                  name="dropdownCheckboxMd"
                  id="option-checkbox-2"
                  value="option-2"
                />
                <label className="form-checkbox-label" htmlFor="option-checkbox-2">
                  Opción de selección múltiple 2
                </label>
              </div>
              <div className="form-checkbox">
                <input
                  className="form-checkbox-input"
                  type="checkbox"
                  name="dropdownCheckboxMd"
                  id="option-checkbox-3"
                  value="option-3"
                  disabled
                />
                <label className="form-checkbox-label" htmlFor="option-checkbox-3">
                  Opción de selección múltiple 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    subtitle: 'Chico',
    content: (
      <CodeBox codeHTML={DROPDOWN_CHECKBOX_SIZES_SM}>
        <div className="container">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-dropdown btn-dropdown-border btn-sm"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <span className="material-symbols-rounded o-icon" aria-label="hidden">
                add
              </span>
              <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
              <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                expand_more
              </span>
            </button>
            <div className="dropdown-menu">
              <div className="form-checkbox">
                <input
                  className="form-checkbox-input"
                  type="checkbox"
                  name="dropdownCheckboxSm"
                  id="option-checkbox-sm-1"
                  value="option-1"
                />
                <label className="form-checkbox-label" htmlFor="option-checkbox-sm-1">
                  Opción de selección múltiple 1
                </label>
              </div>
              <div className="form-checkbox">
                <input
                  className="form-checkbox-input"
                  type="checkbox"
                  name="dropdownCheckboxSm"
                  id="option-checkbox-sm-2"
                  value="option-2"
                />
                <label className="form-checkbox-label" htmlFor="option-checkbox-sm-2">
                  Opción de selección múltiple 2
                </label>
              </div>
              <div className="form-checkbox">
                <input
                  className="form-checkbox-input"
                  type="checkbox"
                  name="dropdownCheckboxSm"
                  id="option-checkbox-sm-3"
                  value="option-3"
                  disabled
                />
                <label className="form-checkbox-label" htmlFor="option-checkbox-sm-3">
                  Opción de selección múltiple 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Con selección única',
  },
  {
    subtitle: 'Grande',
    content: (
      <CodeBox codeHTML={DROPDOWN_RADIO_SIZES_LG}>
        <div className="container">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-dropdown btn-dropdown-border btn-lg"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <span className="material-symbols-rounded o-icon" aria-label="hidden">
                add
              </span>
              <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
              <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                expand_more
              </span>
            </button>
            <div className="dropdown-menu">
              <div className="form-radio reverse">
                <input
                  className="form-radio-input"
                  type="radio"
                  name="dropdownRadioLg"
                  id="option-radio-lg-1"
                  value="option-1"
                />
                <label className="form-radio-label" htmlFor="option-radio-lg-1">
                  Opción de selección única 1
                </label>
              </div>
              <div className="form-radio reverse">
                <input
                  className="form-radio-input"
                  type="radio"
                  name="dropdownRadioLg"
                  id="option-radio-lg-2"
                  value="option-2"
                />
                <label className="form-radio-label" htmlFor="option-radio-lg-2">
                  Opción de selección única 2
                </label>
              </div>
              <div className="form-radio reverse">
                <input
                  className="form-radio-input"
                  type="radio"
                  name="dropdownRadioLg"
                  id="option-radio-lg-3"
                  value="option-3"
                  disabled
                />
                <label className="form-radio-label" htmlFor="option-radio-lg-3">
                  Opción de selección única 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    subtitle: 'Mediano',
    content: (
      <CodeBox codeHTML={DROPDOWN_RADIO_SIZES_MD}>
        <div className="container">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-dropdown btn-dropdown-border"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <span className="material-symbols-rounded o-icon" aria-label="hidden">
                add
              </span>
              <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
              <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                expand_more
              </span>
            </button>
            <div className="dropdown-menu">
              <div className="form-radio reverse">
                <input
                  className="form-radio-input"
                  type="radio"
                  name="dropdownRadioMd"
                  id="option-radio-md-1"
                  value="option-1"
                />
                <label className="form-radio-label" htmlFor="option-radio-md-1">
                  Opción de selección única 1
                </label>
              </div>
              <div className="form-radio reverse">
                <input
                  className="form-radio-input"
                  type="radio"
                  name="dropdownRadioMd"
                  id="option-radio-md-2"
                  value="option-2"
                />
                <label className="form-radio-label" htmlFor="option-radio-md-2">
                  Opción de selección única 2
                </label>
              </div>
              <div className="form-radio reverse">
                <input
                  className="form-radio-input"
                  type="radio"
                  name="dropdownRadioMd"
                  id="option-radio-md-3"
                  value="option-3"
                  disabled
                />
                <label className="form-radio-label" htmlFor="option-radio-md-3">
                  Opción de selección única 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    subtitle: 'Chico',
    content: (
      <CodeBox codeHTML={DROPDOWN_RADIO_SIZES_SM}>
        <div className="container">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-dropdown btn-dropdown-border btn-sm"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <span className="material-symbols-rounded o-icon" aria-label="hidden">
                add
              </span>
              <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
              <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                expand_more
              </span>
            </button>
            <div className="dropdown-menu">
              <div className="form-radio reverse">
                <input
                  className="form-radio-input"
                  type="radio"
                  name="dropdownRadioSm"
                  id="option-radio-sm-1"
                  value="option-1"
                />
                <label className="form-radio-label" htmlFor="option-radio-sm-1">
                  Opción de selección única 1
                </label>
              </div>
              <div className="form-radio reverse">
                <input
                  className="form-radio-input"
                  type="radio"
                  name="dropdownRadioSm"
                  id="option-radio-sm-2"
                  value="option-2"
                />
                <label className="form-radio-label" htmlFor="option-radio-sm-2">
                  Opción de selección única 2
                </label>
              </div>
              <div className="form-radio reverse">
                <input
                  className="form-radio-input"
                  type="radio"
                  name="dropdownRadioSm"
                  id="option-radio-sm-3"
                  value="option-3"
                  disabled
                />
                <label className="form-radio-label" htmlFor="option-radio-3">
                  Opción de selección única 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Implementación',
    content: (
      <>
        <p>
          A continuación, se presenta un ejemplo de código JavaScript para su implementación, teniendo en cuenta los
          estilos y funcionalidad al seleccionar una opción.
        </p>
        <p>
          Es importante tener en cuenta que la funcionalidad deberá integrarse de acuerdo con la tecnología utilizada,
          como por ejemplo React o Angular.
        </p>
        <h3 className="fw-normal">Desplegable con casillas de opción múltiple</h3>
        <CodeBox codeHTML={DROPDOWN_CHECKBOX_HTML} codeJS={DROPDOWN_CHECKBOX_JS}>
          <div className="container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
                id="btnDropdownCheckboxJs"
              >
                <span className="material-symbols-rounded o-icon" aria-label="hidden">
                  add
                </span>
                <span className="btn-dropdown-text ellipsis-1">
                  Desplegable
                  <span id="counterDropdownCheckboxJs"></span>
                </span>

                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                  expand_more
                </span>
              </button>
              <div className="dropdown-menu">
                <div className="form-checkbox">
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    name="dropdownCheckboxJs"
                    id="option-1-js"
                    value="option-1-js"
                  />
                  <label className="form-checkbox-label" htmlFor="option-1-js">
                    Opción de selección múltiple 1
                  </label>
                </div>
                <div className="form-checkbox">
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    name="dropdownCheckboxJs"
                    id="option-2-js"
                    value="option-2-js"
                  />
                  <label className="form-checkbox-label" htmlFor="option-2-js">
                    Opción de selección múltiple 2
                  </label>
                </div>
                <div className="form-checkbox">
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    name="dropdownCheckboxJs"
                    id="option-3-js"
                    value="option-3-js"
                    disabled
                  />
                  <label className="form-checkbox-label" htmlFor="option-3-js">
                    Opción de selección múltiple 3
                  </label>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
        <h3 className="fw-normal">Desplegable con casillas de opción única</h3>
        <CodeBox codeHTML={DROPDOWN_RADIO_HTML} codeJS={DROPDOWN_RADIO_JS}>
          <div className="container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
                id="btnDropdownRadioJs"
              >
                <span className="material-symbols-rounded o-icon" aria-label="hidden">
                  add
                </span>
                <span className="btn-dropdown-text ellipsis-1" id="btnDropdownRadioTextJs">
                  Desplegable
                </span>
                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                  expand_more
                </span>
              </button>
              <div className="dropdown-menu">
                <div className="form-radio reverse">
                  <input
                    className="form-radio-input"
                    type="radio"
                    name="dropdownRadioJs"
                    id="option-radio-1-js"
                    value="option-1"
                  />
                  <label className="form-radio-label" htmlFor="option-radio-1-js">
                    Opción de selección única 1
                  </label>
                </div>
                <div className="form-radio reverse">
                  <input
                    className="form-radio-input"
                    type="radio"
                    name="dropdownRadioJs"
                    id="option-radio-2-js"
                    value="option-2"
                  />
                  <label className="form-radio-label" htmlFor="option-radio-2-js">
                    Opción de selección única 2
                  </label>
                </div>
                <div className="form-radio reverse">
                  <input
                    className="form-radio-input"
                    type="radio"
                    name="dropdownRadioJs"
                    id="option-radio-3-js"
                    value="option-3"
                    disabled
                  />
                  <label className="form-radio-label" htmlFor="option-radio-3-js">
                    Opción de selección única 3
                  </label>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
        <br />
        <br />
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
              Utilizar los desplegables para navegación o filtros, en donde se inicia una acción basada en la selección.
            </li>
            <li>Las opciones no son lo suficientemente importantes como para mostrarlas siempre visibles.</li>
            <li>La cantidad de opciones es extensa y requiere un elemento compacto.</li>
          </ul>
        </div>

        <div className="list-informative" style={{ paddingTop: '32px' }}>
          <p className="text-xl">Cuándo no usar</p>
          <ul className="list-informative-bullet">
            <li>
              No utilizar un desplegable si solo hay dos opciones para elegir. En ese caso, utilizar el componente{' '}
              <a href="form-radio">Botón de radio</a>
            </li>
            <li>
              No utilizar un desplegable si la mayor parte de su experiencia se basa en formularios. En ese caso,
              considere usar un <a href="form-select">Campo de Selección (select)</a>
            </li>
            <li>
              No usar los desplegables para mostrar información demasiado compleja. Mantenga las opciones lo más
              sencillas posible.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'Tipos',
    content: (
      <>
        <p className="text-xl fw-semibold mb-1 mt-4">De selección única</p>
        <p className="text-md mb-4">
          Las opciones de selección única permiten a las personas usuarias elegir una opción a la vez. De manera
          predeterminada, el desplegable muestra el nombre de la lista que agrupa las opciones. Cuando la persona
          usuaria selecciona una opción de la lista, el desplegable se cierra y el texto de la opción seleccionada
          reemplaza el nombre de la lista.
        </p>
        <Image
          src={`${basePath}/images/dropdown/unique.svg`}
          alt="Tipos Dropdown"
          width="800"
          height="200"
          className="img-fluid"
        />

        <p className="text-xl fw-semibold mb-1 mt-4">De selección múltiple</p>
        <p className="text-md mb-4">
          Permiten seleccionar varias opciones para filtrar rápidamente el contenido que desean ver. Cada opción posee
          una casilla de verificación del lado izquierdo del texto. El desplegable permanece abierto mientras la persona
          usuaria selecciona las opciones. El componente se cierra si la persona hace clic en el encabezado del mismo o
          fuera del desplegable, indicando entre paréntesis la cantidad de ítems que fueron seleccionados.
        </p>
        <Image
          src={`${basePath}/images/dropdown/multiple.svg`}
          alt="Tipos Dropdown"
          width="800"
          height="200"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    title: 'Estilos',
    content: (
      <>
        <p className="text-xl fw-semibold mb-1 mt-4">Despegable sin borde</p>
        <p className="text-md mb-3">
          Se utilizan para componer grupos donde se establezcan múltiples desplegables dentro de un mismo contenedor. Al
          no tener bordes visibles, se integran de manera más fluida en el diseño general.
        </p>
        <Image
          src={`${basePath}/images/dropdown/no-border.svg`}
          alt="Tipos Dropdown"
          width="800"
          height="200"
          className="img-fluid"
        />

        <p className="text-xl fw-semibold mb-1 mt-4">Despegable con borde</p>
        <p className="text-md mb-3">
          Se utilizan para entrar en secciones con jerarquías más importantes y suelen usarse junto con otros
          desplegables del mismo estilo para agrupar información de la misma temática. Este componente presenta un borde
          visible a su alrededor otorgándole un aspecto más distintivo y resaltado dentro del diseño.
        </p>
        <Image
          src={`${basePath}/images/dropdown/border.svg`}
          alt="Tipos Dropdown"
          width="800"
          height="200"
          className="img-fluid"
        />

        <p className="text-xl fw-semibold mb-1 mt-4">Despegable con incono</p>
        <p className="text-md mb-3">
          El ícono utilizado puede ser una referencia visual para complementar el título del desplegable y así darle más
          información sobre el contexto a la persona usuaria.
        </p>
        <Image
          src={`${basePath}/images/dropdown/icon.svg`}
          alt="Tipos Dropdown"
          width="800"
          height="200"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    title: 'Contexto de uso',
    content: (
      <>
        <p className="text-xl fw-semibold mb-1 mt-4">Contenidos de los desplegables</p>
        <p className="text-md mb-3">
          Se aconseja mantener los textos de los desplegables y de las opciones cortos y concisos. Los textos no deben
          ocupar más de una línea. El ancho máximo determinado para los desplegables es de 4 (cuatro) columnas.
        </p>
        <Image
          src={`${basePath}/images/dropdown/content.svg`}
          alt="Tipos Dropdown"
          width="800"
          height="200"
          className="img-fluid"
        />
        <p className="text-md mt-3">
          El tamaño del desplegable se adaptará a la cantidad de caracteres que contenga el mismo. En caso de no poder
          resumir la información, superando esta el ancho máximo de 4 columnas, se truncará el texto cortando la última
          palabra y agregando tres (3) puntos que denoten la continuidad de dicha información.
        </p>

        <p className="text-xl fw-semibold mb-1 mt-4">Desplegables combinables</p>
        <p className="text-md mb-3">
          Los desplegables se agrupan en una disposición horizontal y pueden combinarse con Botones y Navegación en esa
          misma dirección. Utilizar un tamaño uniforme al combinar los desplegables con otros componentes, le brinda más
          flexibilidad y estructura al diseño. Por ejemplo, si utiliza un desplegable mediano, también deberá utilizar
          botones del mismo tamaño.
        </p>
        <Image
          src={`${basePath}/images/dropdown/combined.svg`}
          alt="Tipos Dropdown"
          width="800"
          height="200"
          className="img-fluid"
        />
      </>
    ),
  },
];

const SECTION_SPECS = [
  {
    title: 'Anatomía',
    firstTitle: true,
    content: (
      <>
        <Image
          src={`${basePath}/images/dropdown/anatomy.svg`}
          alt="Anatomía del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />
        <div className="responsive-scroll mt-5" tabIndex={0}>
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
                <td>1. Campo de selección</td>
                <td>Obligatorio, es el área donde aparecerá la opción seleccionada.</td>
              </tr>
              <tr>
                <td>
                  2. Icono izquierdo <i>(Opcional)</i>
                </td>
                <td>Opcional, se utiliza para facilitar la identificación del desplegable.</td>
              </tr>
              <tr>
                <td>3. Texto del desplegable</td>
                <td>
                  Obligatorio, nombre de la lista que agrupa las opciones. Una vez seleccionada la opción se reemplaza
                  por el texto de la opción.
                </td>
              </tr>
              <tr>
                <td>
                  4. Icono derecho <i>(expandir)</i>
                </td>
                <td>Obligatorio. Se utiliza para indicar que el campo puede expandirse para mostrar las opciones.</td>
              </tr>
              <tr>
                <td>
                  5. Borde <i>(Opcional)</i>
                </td>
                <td>
                  Opcional. Borde visible a su alrededor otorgándole un aspecto más distintivo y resaltado dentro del
                  diseño.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: 'Estados',
    content: (
      <>
        <p className="text-xl mt-4">
          Predeterminado <i>(default)</i>
        </p>
        <p className="text-md">Estado predeterminado del campo de selección en una interfaz.</p>
        <Image
          src={`${basePath}/images/dropdown/default.svg`}
          alt="Estado predeterminado del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />

        <p className="text-xl mt-4">
          Sobre <i>(Hover)</i>
        </p>
        <p className="text-md">Cuando un usuario está sobre el elemento.</p>
        <Image
          src={`${basePath}/images/dropdown/hover.svg`}
          alt="Hover"
          width="800"
          height="200"
          className="img-fluid"
        />

        <p className="text-xl mt-4">
          En Foco <i>(focus)</i>
        </p>
        <p className="text-md">
          Es un principio de accesibilidad que asegura que cualquier elemento interactivo en una interfaz sea claramente
          visible cuando recibe la atención del usuario, especialmente al ser navegado con el teclado. En Obelisco se
          utiliza un borde o anillo (focus ring) por fuera del componente en un color distintivo.{' '}
        </p>
        <Image
          src={`${basePath}/images/dropdown/focus.svg`}
          alt="Focus"
          width="800"
          height="200"
          className="img-fluid"
        />

        <p className="text-xl mt-4">Expandido</p>
        <p className="text-md">Cuando un usuario está seleccionando una opción.</p>
        <Image
          src={`${basePath}/images/dropdown/expanded.svg`}
          alt="Expandido"
          width="800"
          height="200"
          className="img-fluid"
        />

        <p className="text-xl mt-4">Seleccionado</p>
        <p className="text-md">Indica que la persona usuaria seleccionó una opción de la lista expandible.</p>
        <Image
          src={`${basePath}/images/dropdown/selected.svg`}
          alt="Seleccionado"
          width="800"
          height="200"
          className="img-fluid"
        />
      </>
    ),
  },
  {
    title: 'Tamaños',
    content: (
      <>
        <p className="text-md my-4">
          Los desplegables pueden ser grandes, medianos o chicos. El tamaño mediano es la opción predeterminada y más
          utilizada.
        </p>
        <Image
          src={`${basePath}/images/dropdown/sizes.svg`}
          alt="Tamaños del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />
        <p className="text-md my-4">
          Cuando el desplegable se encuentra expandido, cada opción debe tener la misma altura que el encabezado del
          componente.
        </p>
        <Image
          src={`${basePath}/images/dropdown/sizes-expanded.svg`}
          alt="Tamaños del desplegable de selección expandido"
          width="800"
          height="200"
          className="img-fluid"
        />
      </>
    ),
  },
];

const SECTION_ACCESSIBILITY = [
  {
    title: 'Navegación alternativa',
    firstTitle: true,
    content: (
      <>
        <p className="text-md mb-4">
          El componente de desplegable de selección está construido para ser accesible mediante navegación por teclado y
          reconocible por lectores de pantalla, comunicando su estado de forma clara.
        </p>
        <span className="badge badge-default ms-1">TAB</span>
        <span className="badge badge-default">ENTER</span>
        <span className="badge badge-default">SPACE</span>
        <span className="badge badge-default">SCAPE</span>
        <p className="text-md my-4">
          Utilizando el <i>tab</i> la persona usuaria puede llegar hasta el campo de selección. Con la{' '}
          <i>barra espaciadora</i> (space), las <i>flechas</i> para arriba o abajo puede abrir el desplegable donde
          estarán las opciones a seleccionar. Las flechas, además, se usan para navegar a través de las opciones, las
          cuales pueden ser seleccionadas con la
          <i>barra espaciadora</i> o <i>enter</i>.
        </p>
        <Image
          src={`${basePath}/images/dropdown/alternative.svg`}
          alt="Navegación alternativa del desplegable de selección"
          width="800"
          height="200"
          className="img-fluid"
        />
        <p className="text-md my-4">
          En el desplegable de selección única cuando seleccionamos la opción con <i>barra espaciadora</i> o{' '}
          <i>enter</i> se cierra el desplegable en ese mismo acto.
        </p>
        <p className="text-md">
          En el desplegable de selección múltiple cuando seleccionamos la opción con <i>barra espaciadora</i> o{' '}
          <i>enter</i> el desplegable sigue abierto para poder seguir seleccionando más opciones, para cerrar el
          desplegable podemos usar <i>scape</i>.
        </p>
      </>
    ),
  },
  {
    title: 'Etiquetado descriptivo',
    content: (
      <>
        <p className="text-md">
          Para el desplegable de selección recomendamos utilizar <i>aria-haspopup=”true”</i>, indica que elemento{' '}
          <i>button</i> abre un menú.{' '}
        </p>
        <p className="text-md">
          Recomendamos utilizar aria expanded con valor <i>“false”</i> cuando no se muestrea el menú y con el valor{' '}
          <i>“true”</i> cuando mostramos el menú.
        </p>

        <SyntaxHighlighter className="my-4" language="html" style={dracula} wrapLongLines>
          {DROPWDOWN_ACCESSIBILTY}
        </SyntaxHighlighter>

        <p className="text-md mb-4">
          Cuando un desplegable permite seleccionar múltiples opciones, el contador visual suele mostrarse como:{' '}
          <b>Etiqueta (2)</b>.
        </p>
        <p className="text-md mb-4">
          Para cumplir con buenas prácticas de accesibilidad (WCAG + WAI-ARIA), recomendamos proporcionar una etiqueta
          accesible alternativa que comunique claramente el estado del componente.
        </p>
        <p className="text-md mb-4">El botón que abre el desplegable debe exponer un aria-label dinámico.</p>
        <p className="text-md mb-4">
          Ejemplo del desplegable: Visual:
          <br /> Actividad (2)
          <br />
          Lector de pantalla: “Actividad, 2 seleccionadas”
        </p>
      </>
    ),
  },
  {
    title: 'Criterios WCAG aplicados',
    content: (
      <>
        <CriteriosWCAG
          list={['1.1.1', '1.4.11', '1.4.3', '1.4.4', '2.1.1', '2.1.2', '2.4.7', '4.1.2']}
          customItem={[
            {
              customId: '2.4.7',
              customDescripcion:
                'Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque del teclado es visible.',
            },
          ]}
        />
      </>
    ),
  },
];

const DropdownSelDocs: React.FC = () => {
  useEffect(() => {
    // Selección todos los inputs de tipo radio
    const radios = document.querySelectorAll('input[type="radio"][name="dropdownRadioJs"]');
    radios.forEach((radio) => {
      radio.addEventListener('change', function (event: Event) {
        const target = event.currentTarget as HTMLInputElement;
        const selectedText = target.nextElementSibling?.textContent?.trim() || '';
        const buttonText = document.getElementById('btnDropdownRadioTextJs');
        const button = document.getElementById('btnDropdownRadioJs');
        if (buttonText && button) {
          buttonText.textContent = selectedText;
          button.classList.add('selected');
        }
      });
    });

    // Selección todos los inputs de tipo checkbox
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="dropdownCheckboxJs"]');
    const counter = document.getElementById('counterDropdownCheckboxJs');
    const btnDropdown = document.getElementById('btnDropdownCheckboxJs');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        const selectedCount = Array.from(checkboxes).filter((cb) => (cb as HTMLInputElement).checked).length;
        if (counter) {
          if (selectedCount == 0) {
            counter.textContent = '';
            btnDropdown?.classList.remove('selected');
          } else {
            counter.textContent = ` (${selectedCount}) `;
            btnDropdown?.classList.add('selected');
          }
        }
      });
    });
  }, []);

  return (
    <>
      <ComponentHeader
        title="Desplegable de selección"
        description={[
          'Los desplegables muestran una lista de opciones permitiendo que una persona usuaria pueda seleccionar una o varias en simultáneo. Una opción seleccionada puede usarse como una acción para filtrar u ordenar el contenido existente.',
        ]}
      />
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'specs',
            sectionContent: SECTION_SPECS,
          },
          {
            title: 'Accesibilidad',
            id: 'accessibility',
            sectionContent: SECTION_ACCESSIBILITY,
          },
        ]}
      />
    </>
  );
};

export default DropdownSelDocs;
