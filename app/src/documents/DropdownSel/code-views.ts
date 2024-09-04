export const DROPDOWN_CHECKBOX = `
<div class="dropdown">
  <button
    type="button"
    class="btn btn-dropdown btn-dropdown-border"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    data-bs-auto-close="outside"
  >
    <span
      class="material-symbols-rounded o-icon"
      aria-label="hidden"
    >
      person
    </span>
    <span class="btn-dropdown-text">Desplegable</span>
    <span
      class="material-symbols-rounded btn-dropdown-icon"
      aria-label="hidden"
    >
      expand_more
    </span>
  </button>
  <div class="dropdown-menu">
    <div class="form-checkbox">
      <input
        class="form-checkbox-input"
        type="checkbox"
        name="dropdownCheckbox"
        id="option-1"
        value="option-1"
        />
      <label class="form-checkbox-label" for="option-1">
        Opción de selección múltiple 1
      </label>
    </div>
    <div class="form-checkbox">
      <input
        class="form-checkbox-input"
        type="checkbox"
        name="dropdownCheckbox"
        id="option-2"
        value="option-2"
        />
      <label class="form-checkbox-label" for="option-2">
        Opción de selección múltiple 2
      </label>
    </div>
    <div class="form-checkbox">
      <input
        class="form-checkbox-input"
        type="checkbox"
        name="dropdownCheckbox"
        id="option-3"
        value="option-3"
        disabled
        />
      <label class="form-checkbox-label" for="option-3">
        Opción de selección múltiple 3
      </label>
    </div>
  </div>
</div>
`;
export const DROPDOWN_RADIO = `
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <span
        class="material-symbols-rounded o-icon"
        aria-label="hidden"
      >
        person
      </span>
      <span class="btn-dropdown-text">Desplegable</span>
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
    </button>
    <div class="dropdown-menu">
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadio"
          id="option-radio-1"
          value="option-1"
          />
        <label class="form-radio-label" for="option-radio-1">
          Opción de selección única 1
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadio"
          id="option-radio-2"
          value="option-2"
          />
        <label class="form-radio-label" for="option-radio-2">
          Opción de selección única 2
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadio"
          id="option-radio-3"
          value="option-3"
          disabled
          />
        <label class="form-radio-label" for="option-radio-3">
          Opción de selección única 3
        </label>
      </div>
    </div>
  </div>
`;
export const DROPDOWN_RADIO_SIZES = `
  <div class="dropdown dropdown-lg">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <span
        class="material-symbols-rounded o-icon"
        aria-label="hidden"
      >
        person
      </span>
      <span class="btn-dropdown-text">Desplegable</span>
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
    </button>
    <div class="dropdown-menu">
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioLg"
          id="option-radio-lg-1"
          value="option-1"
          />
        <label class="form-radio-label" for="option-radio-lg-1">
          Opción de selección única 1
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioLg"
          id="option-radio-lg-2"
          value="option-2"
          />
        <label class="form-radio-label" for="option-radio-lg-2">
          Opción de selección única 2
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioLg"
          id="option-radio-lg-3"
          value="option-3"
          disabled
          />
        <label class="form-radio-label" for="option-radio-lg-3">
          Opción de selección única 3
        </label>
      </div>
    </div>
  </div>
  <br />
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <span
        class="material-symbols-rounded o-icon"
        aria-label="hidden"
      >
        person
      </span>
      <span class="btn-dropdown-text">Desplegable</span>
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
    </button>
    <div class="dropdown-menu">
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioMd"
          id="option-radio-md-1"
          value="option-1"
          />
        <label class="form-radio-label" for="option-radio-md-1">
          Opción de selección única 1
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioMd"
          id="option-radio-md-2"
          value="option-2"
          />
        <label class="form-radio-label" for="option-radio-md-2">
          Opción de selección única 2
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioMd"
          id="option-radio-md-3"
          value="option-3"
          disabled
          />
        <label class="form-radio-label" for="option-radio-md-3">
          Opción de selección única 3
        </label>
      </div>
    </div>
  </div>
  <br />
  <div class="dropdown dropdown-sm">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <span
        class="material-symbols-rounded o-icon"
        aria-label="hidden"
      >
        person
      </span>
      <span class="btn-dropdown-text">Desplegable</span>
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
    </button>
    <div class="dropdown-menu">
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioSm"
          id="option-radio-sm-1"
          value="option-1"
          />
        <label class="form-radio-label" for="option-radio-sm-1">
          Opción de selección única 1
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioSm"
          id="option-radio-sm-2"
          value="option-2"
          />
        <label class="form-radio-label" for="option-radio-sm-2">
          Opción de selección única 2
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioSm"
          id="option-radio-sm-3"
          value="option-3"
          disabled
          />
        <label class="form-radio-label" for="option-radio-3">
          Opción de selección única 3
        </label>
      </div>
    </div>
  </div>
`;
export const DROPDOWN_RADIO_SIZES_MD = `
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <span
        class="material-symbols-rounded o-icon"
        aria-label="hidden"
      >
        person
      </span>
      <span class="btn-dropdown-text">Desplegable</span>
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
    </button>
    <div class="dropdown-menu">
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioMd"
          id="option-radio-md-1"
          value="option-1"
          />
        <label class="form-radio-label" for="option-radio-md-1">
          Opción de selección única 1
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioMd"
          id="option-radio-md-2"
          value="option-2"
          />
        <label class="form-radio-label" for="option-radio-md-2">
          Opción de selección única 2
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioMd"
          id="option-radio-md-3"
          value="option-3"
          disabled
          />
        <label class="form-radio-label" for="option-radio-md-3">
          Opción de selección única 3
        </label>
      </div>
    </div>
  </div>
`;
export const DROPDOWN_RADIO_SIZES_LG = `
  <div class="dropdown dropdown-lg">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <span
        class="material-symbols-rounded o-icon"
        aria-label="hidden"
      >
        person
      </span>
      <span class="btn-dropdown-text">Desplegable</span>
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
    </button>
    <div class="dropdown-menu">
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioLg"
          id="option-radio-lg-1"
          value="option-1"
          />
        <label class="form-radio-label" for="option-radio-lg-1">
          Opción de selección única 1
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioLg"
          id="option-radio-lg-2"
          value="option-2"
          />
        <label class="form-radio-label" for="option-radio-lg-2">
          Opción de selección única 2
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioLg"
          id="option-radio-lg-3"
          value="option-3"
          disabled
          />
        <label class="form-radio-label" for="option-radio-lg-3">
          Opción de selección única 3
        </label>
      </div>
    </div>
  </div>
`;
export const DROPDOWN_RADIO_SIZES_SM = `
  <div class="dropdown dropdown-sm">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <span
        class="material-symbols-rounded o-icon"
        aria-label="hidden"
      >
        person
      </span>
      <span class="btn-dropdown-text">Desplegable</span>
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
    </button>
    <div class="dropdown-menu">
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioSm"
          id="option-radio-sm-1"
          value="option-1"
          />
        <label class="form-radio-label" for="option-radio-sm-1">
          Opción de selección única 1
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioSm"
          id="option-radio-sm-2"
          value="option-2"
          />
        <label class="form-radio-label" for="option-radio-sm-2">
          Opción de selección única 2
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioSm"
          id="option-radio-sm-3"
          value="option-3"
          disabled
          />
        <label class="form-radio-label" for="option-radio-3">
          Opción de selección única 3
        </label>
      </div>
    </div>
  </div>
`;
export const DROPDOWN_CHECKBOX_SIZES_MD = `
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <span
        class="material-symbols-rounded o-icon"
        aria-label="hidden"
      >
        person
      </span>
      <span class="btn-dropdown-text">Desplegable</span>
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
    </button>
    <div class="dropdown-menu">
      <div class="form-checkbox">
        <input
          class="form-checkbox-input"
          type="checkbox"
          name="dropdownCheckboxMd"
          id="option-checkbox-1"
          value="option-1"
          />
        <label class="form-checkbox-label" for="option-checkbox-1">
          Opción de selección múltiple 1
        </label>
      </div>
      <div class="form-checkbox">
        <input
          class="form-checkbox-input"
          type="checkbox"
          name="dropdownCheckboxMd"
          id="option-checkbox-2"
          value="option-2"
          />
        <label class="form-checkbox-label" for="option-checkbox-2">
          Opción de selección múltiple 2
        </label>
      </div>
      <div class="form-checkbox">
        <input
          class="form-checkbox-input"
          type="checkbox"
          name="dropdownCheckboxMd"
          id="option-checkbox-3"
          value="option-3"
          disabled
          />
        <label class="form-checkbox-label" for="option-checkbox-3">
          Opción de selección múltiple 3
        </label>
      </div>
    </div>
  </div>
`;
export const DROPDOWN_CHECKBOX_SIZES_SM = `
  <div class="dropdown dropdown-sm">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <span
        class="material-symbols-rounded o-icon"
        aria-label="hidden"
      >
        person
      </span>
      <span class="btn-dropdown-text">Desplegable</span>
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
    </button>
    <div class="dropdown-menu">
      <div class="form-checkbox">
        <input
          class="form-checkbox-input"
          type="checkbox"
          name="dropdownCheckboxSm"
          id="option-checkbox-sm-1"
          value="option-1"
          />
        <label class="form-checkbox-label" for="option-checkbox-sm-1">
          Opción de selección múltiple 1
        </label>
      </div>
      <div class="form-checkbox">
        <input
          class="form-checkbox-input"
          type="checkbox"
          name="dropdownCheckboxSm"
          id="option-checkbox-sm-2"
          value="option-2"
          />
        <label class="form-checkbox-label" for="option-checkbox-sm-2">
          Opción de selección múltiple 2
        </label>
      </div>
      <div class="form-checkbox">
        <input
          class="form-checkbox-input"
          type="checkbox"
          name="dropdownCheckboxSm"
          id="option-checkbox-sm-3"
          value="option-3"
          disabled
          />
        <label class="form-checkbox-label" for="option-checkbox-sm-3">
          Opción de selección múltiple 3
        </label>
      </div>
    </div>
  </div> 
`;
export const DROPDOWN_CHECKBOX_SIZES_LG = `
  <div class="dropdown dropdown-lg">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <span
        class="material-symbols-rounded o-icon"
        aria-label="hidden"
      >
        person
      </span>
      <span class="btn-dropdown-text">Desplegable</span>
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
    </button>
    <div class="dropdown-menu">
      <div class="form-checkbox">
        <input
          class="form-checkbox-input"
          type="checkbox"
          name="dropdownCheckboxLg"
          id="option-checkbox-lg-1"
          value="option-1"
          />
        <label class="form-checkbox-label" for="option-checkbox-lg-1">
          Opción de selección múltiple 1
        </label>
      </div>
      <div class="form-checkbox">
        <input
          class="form-checkbox-input"
          type="checkbox"
          name="dropdownCheckboxLg"
          id="option-checkbox-lg-2"
          value="option-2"
          />
        <label class="form-checkbox-label" for="option-checkbox-lg-2">
          Opción de selección múltiple 2
        </label>
      </div>
      <div class="form-checkbox">
        <input
          class="form-checkbox-input"
          type="checkbox"
          name="dropdownCheckboxLg"
          id="option-checkbox-lg-3"
          value="option-3"
          disabled
          />
        <label class="form-checkbox-label" for="option-checkbox-lg-3">
          Opción de selección múltiple 3
        </label>
      </div>
    </div>
  </div>
`;
export const DROPDOWN_RADIO_HTML = `
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
      id="btnDropdownRadioJs"
    >
      <span
        class="material-symbols-rounded o-icon"
        aria-label="hidden"
      >
        person
      </span>
      <span class="btn-dropdown-text ellipsis-1" id="btnDropdownRadioTextJs">Desplegable</span>
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
    </button>
    <div class="dropdown-menu">
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioJs"
          id="option-radio-1-js"
          value="option-1"
          />
        <label class="form-radio-label" for="option-radio-1-js">
          Opción de selección única 1
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioJs"
          id="option-radio-2-js"
          value="option-2"
          />
        <label class="form-radio-label" for="option-radio-2-js">
          Opción de selección única 2
        </label>
      </div>
      <div class="form-radio reverse">
        <input
          class="form-radio-input"
          type="radio"
          name="dropdownRadioJs"
          id="option-radio-3-js"
          value="option-3"
          disabled
          />
        <label class="form-radio-label" for="option-radio-3-js">
          Opción de selección única 3
        </label>
      </div>
    </div>
  </div>
`;
export const DROPDOWN_CHECKBOX_HTML = `
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
      id="btnDropdownCheckboxJs"
    >
      <span
        class="material-symbols-rounded o-icon"
        aria-label="hidden"
      >
        person
      </span>
      <span class="btn-dropdown-text ellipsis-1">Desplegable
        <span id="counterDropdownCheckboxJs"></span>
      </span>
      
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
    </button>
    <div class="dropdown-menu">
      <div class="form-checkbox">
        <input
          class="form-checkbox-input"
          type="checkbox"
          name="dropdownCheckboxJs"
          id="option-1-js"
          value="option-1-js"
          />
        <label class="form-checkbox-label" for="option-1-js">
          Opción de selección múltiple 1
        </label>
      </div>
      <div class="form-checkbox">
        <input
          class="form-checkbox-input"
          type="checkbox"
          name="dropdownCheckboxJs"
          id="option-2-js"
          value="option-2-js"
          />
        <label class="form-checkbox-label" for="option-2-js">
          Opción de selección múltiple 2
        </label>
      </div>
      <div class="form-checkbox">
        <input
          class="form-checkbox-input"
          type="checkbox"
          name="dropdownCheckboxJs"
          id="option-3-js"
          value="option-3-js"
          disabled
          />
        <label class="form-checkbox-label" for="option-3-js">
          Opción de selección múltiple 3
        </label>
      </div>
    </div>
  </div>
`;
export const DROPDOWN_CHECKBOX_JS = `
  const checkboxes = document.querySelectorAll('input[type="checkbox"][name="dropdownCheckboxJs"]');
  const counter = document.getElementById('counterDropdownCheckboxJs');
  const btnDropdown = document.getElementById('btnDropdownCheckboxJs');
  if (checkboxes) {
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', function() {
        const selectedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
        if (counter) {
          if (selectedCount == 0) {
            counter.textContent = '';
            btnDropdown?.classList.remove('selected');
          } else {
            counter.textContent = \` (\${selectedCount}\) \`;
            btnDropdown?.classList.add('selected');
          }
        }
      });
    });
  }
`;
export const DROPDOWN_RADIO_JS = `
  const radios = document.querySelectorAll('input[type="radio"][name="dropdownRadioJs"]');
  if (radios) {
    radios.forEach((radio) => {
      radio.addEventListener('change', function() {
        const selectedText = this.nextElementSibling.textContent.trim();
        const buttonText = document.getElementById('btnDropdownRadioTextJs');
        const button = document.getElementById('btnDropdownRadioJs');
        if (buttonText && button) {
          buttonText.textContent = selectedText;
          button.classList.add('selected');
        }
      });
    });
  }
`;
