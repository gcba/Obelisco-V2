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

export const INPUT_VALIDATION_RADIO_GROUP = `   <div class="form-input-group" role="radioGroup" aria-labelledby="group-label">            
              <div class="form-label-container">
                <span id="group-label" class="form-label">Ejemplo Radio Group</span>
                <span class="badge-forms badge-required-forms">Requerido</span>
              </div>
              <p class="form-label-description">
                Este es un texto de ayuda que da más información sobre el Input. Es opcional, pero recomendado, y de
                no más de 3 líneas.
              </p>
              <div class="form-radio">
                <input type="radio" name="hobbieRadio" value="etiqueta 1" class="form-radio-input is-invalid" id="radio_1" />
                <label class="form-radio-label" for="radio_1">
                  Leer
                </label>
              </div>
              <div class="form-radio">
                <input type="radio" name="hobbieRadio" value="etiqueta 2" class="form-radio-input is-invalid" id="radio_2" />
                <label class="form-radio-label" for="radio_2">
                  Escuchar música
                </label>
              </div>
              <div class="form-radio">
                <input type="radio" name="hobbieRadio" value="etiqueta 3" class="form-radio-input is-invalid" id="radio_3" />
                <label class="form-radio-label" for="radio_3">
                  Hacer deporte
                </label>
              </div>
              <div class="invalid-feedback">
                <p>Este es un mensaje de error para un campo inválido.</p>
              </div>
            </div>`;

export const INPUT_VALIDATION_CHECKBOX_GROUP = `     <div class="form-label-container">
                <span id="group-label" className="form-label">Ejemplo Checkbox Group</span>
                <span class="badge-forms badge-optional-forms">Opcional</span>
              </div>
              <p class="form-label-description">
                Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
                no más de 3 líneas.
              </p>
              <div class="form-checkbox">
                <input
                  class="form-checkbox-input is-invalid"
                  type="checkbox"
                  name="exampleInputCheckboxGroup"
                  id="checkbox_1"
                  value="checkbox_1"
                  checked={false}
                />
                <label class="form-checkbox-label" for="checkbox_1">
                  Etiqueta 1
                </label>
              </div>
              <div class="form-checkbox">
                <input
                  class="form-checkbox-input is-invalid"
                  type="checkbox"
                  name="exampleInputCheckboxGroup"
                  id="checkbox_2"
                  value="checkbox_2"
                />
                <label class="form-checkbox-label" for="checkbox_2">
                  Etiqueta 2
                </label>
              </div>
              <div class="form-checkbox">
                <input
                  class="form-checkbox-input is-invalid"
                  type="checkbox"
                  name="exampleInputCheckboxGroup"
                  id="checkbox_3"
                  value="checkbox_3"
                />
                <label class="form-checkbox-label" for="checkbox_3">
                  Etiqueta 3
                </label>
              </div>
              <div class="invalid-feedback">
                <p>Este es un mensaje de error para un campo inválido. </p>
              </div>`;
