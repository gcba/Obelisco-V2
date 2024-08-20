import CodeCopy from '@/components/CodeBox';
import MainDescription from '@/components/Template/MainDescription';
import { DROPDOWN_CHECKBOX, DROPDOWN_CHECKBOX_SIZES, DROPDOWN_RADIO, DROPDOWN_RADIO_SIZES } from './code-views';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
    id: 'section-1',
    title: 'Desplegable de selección',
    content: (
      <MainDescription description="Los desplegables muestran una lista de opciones permitiendo que una persona usuaria pueda seleccionar una o varias en simultáneo. Una opción seleccionada puede usarse como una acción para filtrar u ordenar el contenido existente." />
    ),
    h1: true,
  },
  {
    id: 'section-2',
    title: 'Con selección múltiple',
    content: (
      <>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-border"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <span
              className="material-symbols-rounded o-icon"
              aria-label="hidden"
            >
              person
            </span>
            <span className="btn-dropdown-text">Desplegable</span>
            <span
              className="material-symbols-rounded o-icon btn-dropdown-icon"
              aria-label="hidden"
            >
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
        <br />
        <CodeCopy code={DROPDOWN_CHECKBOX} />
      </>
    ),
  },
  {
    id: 'section-3',
    title: 'Con selección única',
    content: (
      <>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-border"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <span
              className="material-symbols-rounded o-icon"
              aria-label="hidden"
            >
              person
            </span>
            <span className="btn-dropdown-text">Desplegable</span>
            <span
              className="material-symbols-rounded o-icon btn-dropdown-icon"
              aria-label="hidden"
            >
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
        <br />
        <CodeCopy code={DROPDOWN_RADIO} />
      </>
    ),
  },
  {
    id: 'section-4',
    title: 'Con selección múltiple - Tamaños',
    content: (
      <>
        <div className="dropdown dropdown-lg">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-border"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <span
              className="material-symbols-rounded o-icon"
              aria-label="hidden"
            >
              person
            </span>
            <span className="btn-dropdown-text">Desplegable</span>
            <span
              className="material-symbols-rounded o-icon btn-dropdown-icon"
              aria-label="hidden"
            >
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
        <br />
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-border"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <span
              className="material-symbols-rounded o-icon"
              aria-label="hidden"
            >
              person
            </span>
            <span className="btn-dropdown-text">Desplegable</span>
            <span
              className="material-symbols-rounded o-icon btn-dropdown-icon"
              aria-label="hidden"
            >
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
        <br />
        <div className="dropdown dropdown-sm">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-border"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <span
              className="material-symbols-rounded o-icon"
              aria-label="hidden"
            >
              person
            </span>
            <span className="btn-dropdown-text">Desplegable</span>
            <span
              className="material-symbols-rounded o-icon btn-dropdown-icon"
              aria-label="hidden"
            >
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
        <CodeCopy code={DROPDOWN_CHECKBOX_SIZES} />
        
      </>
    ),
  },
  {
    id: 'section-5',
    title: 'Con selección única - Tamaños',
    content: (
      <>
        <div className="dropdown dropdown-lg">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-border"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <span
              className="material-symbols-rounded o-icon"
              aria-label="hidden"
            >
              person
            </span>
            <span className="btn-dropdown-text">Desplegable</span>
            <span
              className="material-symbols-rounded o-icon btn-dropdown-icon"
              aria-label="hidden"
            >
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
        <br />
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-border"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <span
              className="material-symbols-rounded o-icon"
              aria-label="hidden"
            >
              person
            </span>
            <span className="btn-dropdown-text">Desplegable</span>
            <span
              className="material-symbols-rounded o-icon btn-dropdown-icon"
              aria-label="hidden"
            >
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
        <br />
        <div className="dropdown dropdown-sm">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-border"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <span
              className="material-symbols-rounded o-icon"
              aria-label="hidden"
            >
              person
            </span>
            <span className="btn-dropdown-text">Desplegable</span>
            <span
              className="material-symbols-rounded o-icon btn-dropdown-icon"
              aria-label="hidden"
            >
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
        <CodeCopy code={DROPDOWN_RADIO_SIZES} />
        
      </>
    ),
  },
];

const DropdownSelDocs: React.FC = () => {
  return (
    <DocumentationTemplate sections={sections} />
  );
};

export default DropdownSelDocs;
