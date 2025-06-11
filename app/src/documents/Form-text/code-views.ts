export const INPUT_TEXT = `  <div class="form-label-container">
    <label for="input-text" class="form-label">
      Campo de texto *
    </label>
  </div>
  <input
    type="text"
    class="form-control"
    id="input-text"
    name="campoTexto"
    aria-describedby="Texto"
    placeholder="Ingrese Textos"
  />
  <p class="form-label-description">Texto de asistencia</p>
`;
export const INPUT_NUMBER = `  <div class="form-label-container">
    <label for="input-number" class="form-label">
      Campo numérico *
    </label>
  </div>
  <input
    type="number"
    class="form-control"
    id="input-number"
    name="campoNumero"
    aria-describedby="Number"
    placeholder="Ingrese Números"
  />
  <p class="form-label-description">Campo de asistencia</p>
`;
export const INPUT_MAIL = `  <div class="form-label-container">
    <label for="input-email" class="form-label">
      Campo de email *
    </label>
  </div>
  <input
    type="email"
    class="form-control"
    id="input-email"
    name="campoEmail"
    aria-describedby="Email"
    placeholder="email@test.com"
  />
  <p class="form-label-description">Campo de asistencia</p>
`;
export const INPUT_DATE = `  <div class="form-label-container">
    <label for="input-date" class="form-label">
      Nombre del campo *
    </label>
  </div>
  <input
    type="date"
    class="form-control"
    id="input-date"
    name="campoFecha"
    aria-describedby="Date"
    placeholder="Selecciona la fecha"
  />
`;
export const INPUT_BLOCK = `  <div class="form-label-container">
    <label for="input-textarea" class="form-label">
      Nombre del campo *
    </label>
  </div>
  <textarea class="form-control" id="input-textarea" name="campoBloqueTexto" placeholder="Texto de ejemplo"></textarea>
  <p class="form-label-description">Campo de asistencia</p>
`;
export const INPUT_SELECT = `
<div class="form-label-container">
  <label for="input-select" class="form-label">
    Nombre del selector *
  </label>
</div>
<select class="form-control form-select" aria-label="Ejemplo de selección por defecto">
    <option value="0">Seleccionar</option>
    <option value="1">Opción</option>
    <option value="2">Opción</option>
    <option value="3">Opción</option>
</select>
<p class="form-label-description">Campo de asistencia</p>
`;
export const INPUT_DISABLED = `  <div class="container">
    <div class="col-12 col-lg-6">
      <div class="form-label-container">
        <label for="example-five" class="form-label disabled">
          Ejemplo campo de texto
        </label>
      </div>
      <input
        type="text"
        class="form-control"
        id="example-five"
        aria-describedby="Campo de texto"
        placeholder="Textos"
        disabled
      />
    </div>

    <div class="col-12 col-lg-6">
      <div class="form-label-container">
        <label for="example-four" class="form-label disabled">
          Ejemplo campo de numero
        </label>
      </div>
      <input
        type="number"
        class="form-control"
        id="example-four"
        aria-describedby="campo de número"
        placeholder="Números"
        disabled
      />
    </div>

    <div class="col-12 col-lg-6">
      <div class="form-label-container">
        <label for="example-three" class="form-label disabled">
          Ejemplo campo de mail
        </label>
      </div>
      <input
        type="email"
        class="form-control"
        id="example-three"
        aria-describedby="Email"
        placeholder="Email@test.com"
        disabled
      />
    </div>

    <div class="col-12 col-lg-6">
      <div class="form-label-container">
        <label for="example-two" class="form-label disabled">
          Ejemplo campo de fecha
        </label>
      </div>
      <input
        type="date"
        class="form-control"
        id="example-two"
        aria-describedby="Date"
        placeholder="selecciona tu fecha"
        disabled
      />
    </div>

    <div class="col-12 col-lg-6">
      <div class="form-label-container">
        <label for="example-one" class="form-label disabled">
          Ejemplo TextArea
        </label>
      </div>
      <textarea class="form-control" id="example-one" disabled ></textarea>
    </div>

    <div class="col-12 col-lg-6">
      <div class="form-label-container">  
        <label for="example-disabled-select" class='form-label disabled'>
          Ejemplo campo de selección.
        </label>
      </div>
      <select class="form-control form-select" aria-label="Ejemplo de input de selección por defecto" disabled>
        <option selected>Campo de selección</option>
        <option value="1">Opción</option>
        <option value="2">Opción</option>
        <option value="3">Opción</option>
      </select>
    </div>
  </div>
`;

export const INPUT_BACKGROUND = `
<div class="p-4 form-bg-light">
  <div class="form-label-container">
    <label for="input-text-bg" class="form-label">
      Ejemplo campo de texto con fondo
    </label>
  </div>
  <input
    type="text"
    class="form-control"
    id="input-text-bg"
    name="campoTextoBg"
    aria-describedby="Texto"
    placeholder="Textos"
  />
</div>
`;

export const INPUT_TEXT_ACCESSIBILITY = `<div class="form-label-container">
  <label for="email">Correo electrónico</label></div>
<input type="email" id="email" name="email"/>
<p class="form-label-description">Campo de asistencia</p>
`;
