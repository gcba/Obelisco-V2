export const INPUT_VALIDATION_TEXT = `    <div class="form-label-container">
      <label for="exampleInputTexto" class="form-label">Label</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <input 
      type="text" 
      class="form-control is-invalid" 
      id="exampleInputTexto" 
      aria-describedby="Text" 
      placeholder="Texto" 
    />
    <div class="invalid-feedback">
      <p>Los datos introducidos son inválidos.</p>
    </div>
`;

export const INPUT_VALIDATION_NUMBER = `    <div class="form-label-container">
      <label for="exampleInputNumber" class="form-label">Label</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <input 
      type="text" 
      class="form-control is-valid" 
      id="exampleInputNumber" 
      aria-describedby="Text" 
      placeholder="Texto" 
    />
    <div class="valid-feedback">
      <p>Los datos introducidos son válidos.</p>
    </div>
`;

export const INPUT_VALIDATION_MAIL = `    <div class="form-label-container">
      <label for="exampleInputText" class="form-label">Label</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <input 
      type="email" 
      class="form-control is-invalid" 
      id="ejemplo-3-1" 
      aria-describedby="Email" 
      placeholder="Email@test.com" 
      required 
    />
    <div class="invalid-feedback">
      <p>Los datos introducidos son inválidos.</p>
    </div>
`;

export const INPUT_VALIDATION_DATE = `    <div class="form-label-container">
      <label for="ejemplo-4" class="form-label">Ejemplo campo de fecha</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <input 
      type="date" 
      class="form-control is-valid" 
      id="ejemplo-4" 
      aria-describedby="Date" 
      placeholder="selecciona tu fecha" 
      required 
    />
    <div class="valid-feedback"> 
      <p>El campo es válido.</p>
    </div>
`;

export const INPUT_VALIDATION_TEXTAREA = `    <div class="form-label-container">
      <label for="ejemplo-5" class="form-label">Ejemplo TextArea</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <textarea 
      class="form-control is-invalid" 
      id="ejemplo-5" 
      aria-describedby="TextArea" 
      required
      ></textarea>
    <div class="invalid-feedback">
      <p>Los datos introducidos son inválidos.</p>
    </div>
`;
