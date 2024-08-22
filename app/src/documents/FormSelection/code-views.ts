export const RADIO =
`
  <p class="headline-md">Seleccioná una opción *</p> 
  <div class="form-radio">
    <label class="form-radio-label" for="profession-radio-designer">
      <input
        class="form-radio-input"
        type="radio"
        name="professionRadio"
        id="profession-radio-designer"
        value="diseñador"
        checked
      />
      <span class="form-radio-text">Diseñador</span>
    </label>
  </div>
  <div class="form-radio">
    <label class="form-radio-label" for="profession-radio-developer">
      <input
        class="form-radio-input"
        type="radio"
        name="professionRadio"
        id="profession-radio-developer"
        value="desarrollador"
      />
      <span class="form-radio-text">Desarrollador</span>
    </label>
  </div>
  <div class="form-radio">
    <label class="form-radio-label" for="profession-radio-content">
      <input
        class="form-radio-input"
        type="radio"
        name="professionRadio"
        id="profession-radio-content"
        value="redactor"
      />
      <span class="form-radio-text">Redactor de contenidos</span>
    </label>
  </div>
  <div class="form-radio">
    <label class="form-radio-label" for="profession-radio-validation">
      <input
        class="form-radio-input is-invalid"
        type="radio"
        name="professionRadio"
        id="profession-radio-validation"
        value="validacion"
      />
      <span class="form-radio-text">Validación</span>
    </label>
  </div>
`;

export const RADIO_DISABLED =
`
  <div class="form-radio">
    <label class="form-radio-label" for="radio-disabled" aria-disabled="true">
      <input
        class="form-radio-input"
        type="radio"
        name="radioDisabled"
        id="radio-disabled"
        value="validacion"
        disabled
      />
      <span class="form-radio-text">Deshabilitado</span>
    </label>
  </div>
  <div class="form-radio">
    <label class="form-radio-label" for="radio-disabled-checked" aria-disabled="true">
      <input
        class="form-radio-input"
        type="radio"
        name="radioDisabled"
        id="radio-disabled-checked"
        value="validacion"
        disabled
        checked
      />
      <span class="form-radio-text">Deshabilitado</span>
    </label>
  </div>
`;

export const CHECKBOX =
`
  <p class="headline-md">Seleccioná una o varias opciones *</p>
  <div class="form-checkbox">
    <label class="form-checkbox-label" for="profession-checkbox-designer">
      <input
        class="form-checkbox-input"
        type="checkbox"
        name="professionCheckbox"
        id="profession-checkbox-designer"
        value="diseñador"
        checked
      />
      <span class="form-checkbox-text">Diseñador</span>
    </label>
  </div>
  <div class="form-checkbox">
    <label class="form-checkbox-label" for="profession-checkbox-developer">
      <input
        class="form-checkbox-input"
        type="checkbox"
        name="professionCheckbox"
        id="profession-checkbox-developer"
        value="desarrollador"
      />
      <span class="form-checkbox-text">Desarrollador</span>
    </label>
  </div>
  <div class="form-checkbox">
    <label class="form-checkbox-label" for="profession-checkbox-content">
      <input
        class="form-checkbox-input"
        type="checkbox"
        name="professionCheckbox"
        id="profession-checkbox-content"
        value="redactor"
      />
      <span class="form-checkbox-text">Redactor de contenidos</span>
    </label>
  </div>
  <div class="form-checkbox">
    <label class="form-checkbox-label" for="profession-checkbox-validation">
      <input
        class="form-checkbox-input is-invalid"
        type="checkbox"
        name="professionCheckbox"
        id="profession-checkbox-validation"
        value="invalido"
      />
      <span class="form-checkbox-text">Inválido</span>
    </label>
  </div>
`;
export const CHECKBOX_NO_TEXT =
`
  <div class="form-checkbox">
    <label class="form-checkbox-label" for="checkbox-no-text" aria-label="Casilla múltiple sin texto">
      <input
        class="form-checkbox-input"
        type="checkbox"
        name="checkboxNoText"
        id="checkbox-no-text"
        value="Sin texto"
      />
    </label>
  </div>
`;
export const CHECKBOX_TERMS =
`
  <div class="form-checkbox">
    <label class="form-checkbox-label" for="checkbox-terms" aria-label="Casilla múltiple sin texto">
      <input
        class="form-checkbox-input"
        type="checkbox"
        name="checkboxTerms"
        id="checkbox-terms"
        value="copywrite"
      />
      <span class="form-checkbox-text">Acepto los <a href="#">términos y condiciones</a></span>
    </label>
  </div>
`;
export const CHECKBOX_DISABLED =
`
  <div class="form-checkbox" >
    <label class="form-checkbox-label" for="disabled-checkbox" aria-disabled="true">
      <input
        class="form-checkbox-input"
        type="checkbox"
        name="checkboxDisabled"
        id="disabled-checkbox"
        value="disabled"
        disabled
      />
      <span class="form-checkbox-text">Deshabilitado</span>
    </label>
  </div>
  <div class="form-checkbox" >
    <label class="form-checkbox-label" for="disabled-checkbox-checked" aria-checked="true">
      <input
        class="form-checkbox-input"
        type="checkbox"
        name="checkboxDisabled"
        id="disabled-checkbox-checked"
        value="disabled"
        disabled
        checked
      />
      <span class="form-checkbox-text">Deshabilitado</span>
    </label>
  </div>
`;

