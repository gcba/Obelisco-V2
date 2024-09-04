'use client';
import { useEffect } from 'react';

import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import {
  DROPDOWN_CHECKBOX,
  DROPDOWN_CHECKBOX_HTML,
  DROPDOWN_CHECKBOX_JS,
  DROPDOWN_CHECKBOX_SIZES_LG,
  DROPDOWN_CHECKBOX_SIZES_MD,
  DROPDOWN_CHECKBOX_SIZES_SM,
  DROPDOWN_RADIO,
  DROPDOWN_RADIO_HTML,
  DROPDOWN_RADIO_JS,
  DROPDOWN_RADIO_SIZES_LG,
  DROPDOWN_RADIO_SIZES_MD,
  DROPDOWN_RADIO_SIZES_SM,
} from './code-views';

const sections = [
  {
    title: 'Desplegable de selección',
    content: (
      <MainDescription description="Los desplegables muestran una lista de opciones permitiendo que una persona usuaria pueda seleccionar una o varias en simultáneo. Una opción seleccionada puede usarse como una acción para filtrar u ordenar el contenido existente." />
    ),
    h1: true,
  },
  {
    id: 'section-1',
    title: 'Con selección múltiple',
    content: (
      <>
        <CodeBox codeHTML={DROPDOWN_CHECKBOX}>
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
                  person
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
                    name="dropdownCheckbox"
                    id="option-1"
                    value="option-1"
                  />
                  <label className="form-checkbox-label" htmlFor="option-1">
                    Opción de selección múltiple 1
                  </label>
                </div>
                <div className="form-checkbox">
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    name="dropdownCheckbox"
                    id="option-2"
                    value="option-2"
                  />
                  <label className="form-checkbox-label" htmlFor="option-2">
                    Opción de selección múltiple 2
                  </label>
                </div>
                <div className="form-checkbox">
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    name="dropdownCheckbox"
                    id="option-3"
                    value="option-3"
                    disabled
                  />
                  <label className="form-checkbox-label" htmlFor="option-3">
                    Opción de selección múltiple 3
                  </label>
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
    title: 'Con selección única',
    content: (
      <>
        <CodeBox codeHTML={DROPDOWN_RADIO}>
          <div className="container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
                id="btnDropdownRadio"
              >
                <span className="material-symbols-rounded o-icon" aria-label="hidden">
                  person
                </span>
                <span className="btn-dropdown-text ellipsis-1" id="btnDropdownRadioText">
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
                    name="dropdownRadio"
                    id="option-radio-1"
                    value="option-1"
                  />
                  <label className="form-radio-label" htmlFor="option-radio-1">
                    Opción de selección única 1
                  </label>
                </div>
                <div className="form-radio reverse">
                  <input
                    className="form-radio-input"
                    type="radio"
                    name="dropdownRadio"
                    id="option-radio-2"
                    value="option-2"
                  />
                  <label className="form-radio-label" htmlFor="option-radio-2">
                    Opción de selección única 2
                  </label>
                </div>
                <div className="form-radio reverse">
                  <input
                    className="form-radio-input"
                    type="radio"
                    name="dropdownRadio"
                    id="option-radio-3"
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
      </>
    ),
  },
  {
    id: 'section-3',
    title: 'Tamaños - selección múltiple',
    content: (
      <>
        <CodeBox codeHTML={DROPDOWN_CHECKBOX_SIZES_LG}>
          <div className="container">
            <div className="dropdown dropdown-lg">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <span className="material-symbols-rounded o-icon" aria-label="hidden">
                  person
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
        <br />
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
                  person
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
        <br />
        <CodeBox codeHTML={DROPDOWN_CHECKBOX_SIZES_SM}>
          <div className="container">
            <div className="dropdown dropdown-sm">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <span className="material-symbols-rounded o-icon" aria-label="hidden">
                  person
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
      </>
    ),
  },
  {
    id: 'section-4',
    title: 'Tamaños - selección única',
    content: (
      <>
        <CodeBox codeHTML={DROPDOWN_RADIO_SIZES_LG}>
          <div className="container">
            <div className="dropdown dropdown-lg">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <span className="material-symbols-rounded o-icon" aria-label="hidden">
                  person
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
        <br />
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
                  person
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
        <br />
        <CodeBox codeHTML={DROPDOWN_RADIO_SIZES_SM}>
          <div className="container">
            <div className="dropdown dropdown-sm">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <span className="material-symbols-rounded o-icon" aria-label="hidden">
                  person
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
      </>
    ),
  },
  {
    id: 'section-5',
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
                  person
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
                  person
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
  return <DocumentationTemplate sections={sections} />;
};

export default DropdownSelDocs;
