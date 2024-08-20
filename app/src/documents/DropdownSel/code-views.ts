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
      class="material-symbols-rounded o-icon btn-dropdown-icon"
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
        class="material-symbols-rounded o-icon btn-dropdown-icon"
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
        class="material-symbols-rounded o-icon btn-dropdown-icon"
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
        class="material-symbols-rounded o-icon btn-dropdown-icon"
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
        class="material-symbols-rounded o-icon btn-dropdown-icon"
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
export const DROPDOWN_CHECKBOX_SIZES = `
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
        class="material-symbols-rounded o-icon btn-dropdown-icon"
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
        class="material-symbols-rounded o-icon btn-dropdown-icon"
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
        class="material-symbols-rounded o-icon btn-dropdown-icon"
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

