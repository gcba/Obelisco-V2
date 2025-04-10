export const INPUT_VALIDATION_TEXT = `<div class="form-wrapper">
    <div class="form-label-badge">
      <label for="exampleInputTexto" class="form-label">Label</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <input type="text" class="form-control is-invalid" id="exampleInputTexto" aria-describedby="invalid-feedback-texto" placeholder="Texto" />
    <p id="invalid-feedback-texto" class="invalid-feedback">Los datos introducidos son inválidos.</p>
  </div>
`;

export const INPUT_VALIDATION_NUMBER = `<div class="form-wrapper">
    <div class="form-label-badge">
      <label for="exampleInputNumber" class="form-label">Label</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <input type="text" class="form-control is-valid" id="exampleInputNumber" aria-describedby="valid-feedback-texto" placeholder="Texto" />
    <p id="valid-feedback-texto" class="valid-feedback">Los datos introducidos son válidos.</p>
  </div>
`;

export const INPUT_VALIDATION_MAIL = `<div class="form-wrapper">
    <div class="form-label-badge">
      <label for="exampleInputText" class="form-label">Label</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <input type="email" class="form-control is-invalid" id="ejemplo-3-1" aria-describedby="Email" placeholder="Email@test.com" required />
    <p id="invalid-feedback-texto" class="invalid-feedback">Los datos introducidos son inválidos.</p>
  </div>
`;

export const INPUT_VALIDATION_DATE = `<div class="form-wrapper">
    <div class="form-label-badge">
      <label for="ejemplo-4" class="form-label">Ejemplo campo de fecha</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <input type="date" class="form-control is-valid" id="ejemplo-4" aria-describedby="Date" placeholder="selecciona tu fecha" required />
    <p class="valid-feedback">El campo es válido.</p>
  </div>
`;

export const INPUT_VALIDATION_TEXTAREA = `<div class="form-wrapper">
    <div class="form-label-badge">
      <label for="ejemplo-5" class="form-label">Ejemplo TextArea</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <textarea class="form-control is-invalid" id="ejemplo-5" required></textarea>
    <p class="invalid-feedback">El campo es inválido</p>
  </div>
`;
