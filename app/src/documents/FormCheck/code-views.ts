export const CHECKBOX = `  <p class="headline-md">Seleccioná una o varias opciones *</p>
  <div class="form-checkbox">
    <input
      class="form-checkbox-input"
      type="checkbox"
      name="professionCheckbox"
      id="profession-checkbox-designer"
      value="diseñador"
      checked
      />
    <label class="form-checkbox-label" for="profession-checkbox-designer">
      Diseñador
    </label>
  </div>
  <div class="form-checkbox">
    <input
      class="form-checkbox-input"
      type="checkbox"
      name="professionCheckbox"
      id="profession-checkbox-developer"
      value="desarrollador"
      />
    <label class="form-checkbox-label" for="profession-checkbox-developer">
      Desarrollador
    </label>
  </div>
  <div class="form-checkbox">
    <input
      class="form-checkbox-input"
      type="checkbox"
      name="professionCheckbox"
      id="profession-checkbox-content"
      value="redactor"
      />
    <label class="form-checkbox-label" for="profession-checkbox-content">
      Redactor de contenidos
    </label>
  </div>
  <div class="form-checkbox">
    <input
      class="form-checkbox-input is-invalid"
      type="checkbox"
      name="professionCheckbox"
      id="profession-checkbox-validation"
      value="invalido"
      />
    <label class="form-checkbox-label" for="profession-checkbox-validation">
      Inválido
    </label>
  </div>
`;
export const CHECKBOX_NO_TEXT = `  <div class="form-checkbox">
    <input
      class="form-checkbox-input"
      type="checkbox"
      name="checkboxNoText"
      id="checkbox-no-text"
      value="Sin texto"
    />
    <label class="form-checkbox-label" for="checkbox-no-text" aria-label="Casilla múltiple sin texto">
    </label>
  </div>
`;
export const CHECKBOX_TERMS = `  <div class="form-checkbox">
    <input
      class="form-checkbox-input"
      type="checkbox"
      name="checkboxTerms"
      id="checkbox-terms"
      value="copywrite"
      />
    <label class="form-checkbox-label" for="checkbox-terms">
      Acepto los <a href="#">términos y condiciones</a>
    </label>
  </div>
`;
export const CHECKBOX_DISABLED = `  <div class="form-checkbox" >
    <input
      class="form-checkbox-input"
      type="checkbox"
      name="checkboxDisabled"
      id="disabled-checkbox"
      value="disabled"
      disabled
      />
    <label class="form-checkbox-label" for="disabled-checkbox" aria-disabled="true">
      Deshabilitado
    </label>
  </div>
  <div class="form-checkbox" >
    <input
      class="form-checkbox-input"
      type="checkbox"
      name="checkboxDisabled"
      id="disabled-checkbox-checked"
      value="disabled"
      disabled
      checked
      />
    <label class="form-checkbox-label" for="disabled-checkbox-checked" aria-checked="true">
      Deshabilitado
    </label>
  </div>
`;
export const CHECKBOX_POSITION = `  <div class="form-checkbox reverse">
    <input
      class="form-checkbox-input"
      type="checkbox"
      name="checkboxPosition"
      id="checkbox-position"
      value="redactor"
      />
    <label class="form-checkbox-label" for="checkbox-position">
      Checkbox posicionado a la derecha
    </label>
  </div>
 
`;
export const CHECKBOX_GROUP = `<div class="form-input-group" role="checkboxgroup" aria-labelledby="group-label">
      <div class="form-label-container">
        <span id="group-label" class="form-label">Seleccioná tus hobbies:</span>
        <span class="badge-forms badge-optional-forms">Opcional</span>
      </div>
      <p class="form-label-description">
        Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
        no más de 3 líneas.
      </p>
      <div class="form-checkbox">
        <input type="checkbox" name="hobbies" value="leer" class="form-checkbox-input" id="checkbox_1" />
        <label class="form-checkbox-label" for="checkbox_1">
          Leer
        </label>
      </div>
      <div class="form-checkbox">
        <input type="checkbox" name="hobbies" value="musica" class="form-checkbox-input" id="checkbox_2" />
        <label class="form-checkbox-label" for="checkbox_2">
          Escuchar música
        </label>
      </div>
      <div class="form-checkbox">
        <input type="checkbox" name="hobbies" value="deporte" class="form-checkbox-input" id="checkbox_3" />
        <label class="form-checkbox-label" for="checkbox_3">
          Hacer deporte
        </label>
      </div>
    </div>`;
