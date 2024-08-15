export const RADIO =
`
  <p class="headline-md">Seleccioná una opción *</p>
  <div class="form-check">
    <label class="form-check-label" for="profession-designer">
      <input
        class="form-check-input"
        type="radio"
        name="profession"
        id="profession-designer"
        value="diseñador"
        checked
      />
      <span class="form-check-text">Diseñador</span>
    </label>
  </div>
  <div class="form-check">
    <label class="form-check-label" for="profession-developer">
      <input
        class="form-check-input"
        type="radio"
        name="profession"
        id="profession-developer"
        value="desarrollador"
      />
      <span class="form-check-text">Desarrollador</span>
    </label>
  </div>
  <div class="form-check">
    <label
      class="form-check-label"
      for="profession-content"
    >
      <input
        class="form-check-input"
        type="radio"
        name="profession"
        id="profession-content"
        value="redactor"
      />
      <span class="form-check-text">Redactor de contenidos</span>
    </label>
  </div>
  <div class="form-check">
    <label class="form-check-label" for="validation-content">
      <input
        class="form-check-input is-invalid"
        type="radio"
        name="profession"
        id="validation-content"
        value="invalido"
      />
      <span class="form-check-text">Inválido</span>
    </label>
  </div>
`;

export const RADIO_DISABLED =
`
  <div class="form-check">
    <label
      class="form-check-label"
      for="disabled"
      aria-disabled="true"
    >
      <input
        class="form-check-input"
        type="radio"
        name="profession"
        id="disabled"
        value="disabled"
        disabled
      />
      <span class="form-check-text">Deshabilitado</span>
    </label>
  </div>
`;

export const CHECKBOX =
`
  <div class="form-check form-checkbox">
    <label class="form-check-label" for="skills-copywrite">
      <input
        class="form-check-input"
        type="checkbox"
        name="skills"
        id="skills-copywrite"
        value="redaccion"
        checked
      />
      <span class="form-check-text">Redacción</span>
    </label>
  </div>
  <div class="form-check form-checkbox">
    <label class="form-check-label" for="skills-design">
      <input
        class="form-check-input"
        type="checkbox"
        name="skills"
        id="skills-design"
        value="diseño"
      />
      <span class="form-check-text">Diseño</span>
    </label>
  </div>
  <div class="form-check form-checkbox">
    <label class="form-check-label" for="skills-development">
      <input
        class="form-check-input"
        type="checkbox"
        name="skills"
        id="skills-development"
        value="desarrollo"
      />
      <span class="form-check-text">Desarrollo</span>
    </label>
  </div>
  <div class="form-check form-checkbox">
    <label class="form-check-label" for="validation-content-check">
      <input
        class="form-check-input is-invalid"
        type="checkbox"
        name="skills"
        id="validation-content-check"
        value="invalido"
      />
      <span class="form-check-text">Inválido</span>
    </label>
  </div>
`;
export const CHECKBOX_DISABLED =
`
  <div class="form-check form-checkbox">
    <label class="form-check-label" for="disabled" aria-disabled="true">
      <input
        class="form-check-input"
        type="checkbox"
        name="skills"
        id="disabled"
        value="invalido"
        disabled
      />
      <span class="form-check-text">Inválido</span>
    </label>
  </div>
  <div class="form-check form-checkbox">
    <label class="form-check-label" for="disabled-check" aria-disabled="true">
      <input
        class="form-check-input"
        type="checkbox"
        name="skills"
        id="disabled-check"
        value="invalido"
        disabled
        checked
      />
      <span class="form-check-text">Inválido</span>
    </label>
  </div>
`;
