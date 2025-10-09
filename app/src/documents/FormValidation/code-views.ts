export const INPUT_VALIDATION_TEXT = `    <div class="form-label-container">
      <label for="exampleInputTexto" class="form-label">Label</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <input 
      type="text" 
      class="form-control is-invalid" 
      id="exampleInputTexto" 
      name="campoTexto"
      aria-describedby="Text" 
      aria-required="true"
      placeholder="Texto" 
    />
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <div class="invalid-feedback">
      <p>Los datos introducidos son inválidos.</p>
    </div>
`;

export const INPUT_VALIDATION_NUMBER = `    <div class="form-label-container">
      <label for="exampleInputNumber" class="form-label">Label</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <input 
      type="text" 
      class="form-control" 
      id="exampleInputNumber" 
      name="campoNumero"
      aria-describedby="Text"
      aria-required="true"
      placeholder="Texto" 
    />
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
`;

export const INPUT_VALIDATION_MAIL = `    <div class="form-label-container">
      <label for="exampleInputEmail" class="form-label">Label</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <input 
      type="email" 
      class="form-control is-invalid" 
      id="exampleInputEmail"
      name="campoEmail"
      aria-describedby="Email"
      aria-required="true"
      placeholder="Email@test.com"
    />
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <div class="invalid-feedback">
      <p>Los datos introducidos son inválidos.</p>
    </div>
`;

export const INPUT_VALIDATION_DATE = `    <div class="form-label-container">
      <label for="exampleInputDate" class="form-label">Ejemplo campo de fecha</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <input 
      type="date" 
      class="form-control is-valid" 
      id="exampleInputDate"
      name="campoFecha" 
      aria-describedby="Date" 
      aria-required="true"
      placeholder="selecciona tu fecha" 
    />
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <div class="valid-feedback"> 
      <p>El campo es válido.</p>
    </div>
`;

export const INPUT_VALIDATION_TEXTAREA = `    <div class="form-label-container">
      <label for="exampleInputTextarea" class="form-label">Ejemplo TextArea</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
      <span className="form-label-number">0/100</span>
    </div>
    <textarea 
      class="form-control is-invalid" 
      id="exampleInputTextarea"
      name="campoTextarea" 
      aria-describedby="TextArea"
      aria-required="true"
      ></textarea>
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <div class="invalid-feedback">
      <p>Los datos introducidos son inválidos.</p>
    </div>
`;

export const INPUT_VALIDATION_RADIO_GROUP = `   <div class="form-input-group" role="radiogroup" aria-labelledby="group-label">            
              <div class="form-label-container">
                <span id="group-label" class="form-label">Ejemplo Radio Group</span>
                <span class="badge-forms badge-required-forms">Requerido</span>
              </div>
              <p class="form-label-description">
                Este es un texto de ayuda que da más información sobre el Input. Es opcional, pero recomendado, y de
                no más de 3 líneas.
              </p>
              <div class="form-radio">
                <input type="radio" name="hobbieRadio" value="etiqueta 1" class="form-radio-input is-invalid" id="radio_1" required />
                <label class="form-radio-label" for="radio_1">
                  Leer
                </label>
              </div>
              <div class="form-radio">
                <input type="radio" name="hobbieRadio" value="etiqueta 2" class="form-radio-input is-invalid" id="radio_2" required />
                <label class="form-radio-label" for="radio_2">
                  Escuchar música
                </label>
              </div>
              <div class="form-radio">
                <input type="radio" name="hobbieRadio" value="etiqueta 3" class="form-radio-input is-invalid" id="radio_3" required />
                <label class="form-radio-label" for="radio_3">
                  Hacer deporte
                </label>
              </div>
              <div class="invalid-feedback">
                <p>Este es un mensaje de error para un campo inválido.</p>
              </div>
            </div>`;

export const INPUT_VALIDATION_CHECKBOX_GROUP = `    <div className="form-input-group" role="checkboxgroup" aria-labelledby="group-label"> 
              <div class="form-label-container">
                <span id="group-label" className="form-label">Ejemplo Checkbox Group</span>
                <span class="badge-forms badge-required-forms">Requerido</span>
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
                  required
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
                  required
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
                  required
                />
                <label class="form-checkbox-label" for="checkbox_3">
                  Etiqueta 3
                </label>
              </div>
              <div class="invalid-feedback">
                <p>Este es un mensaje de error para un campo inválido. </p>
              </div>
            </div>`;
