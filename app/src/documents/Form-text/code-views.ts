export const INPUT_TEXT = `
  <div class="form-label-container">
    <label for="exampleInputTexto" class="form-label">
      Campo de texto *
    </label>
    <p class="form-label-description">Texto de asistencia</p>
  </div>
  <input
    type="text"
    class="form-control"
    id="exampleInputTexto"
    aria-describedby="Texto"
    placeholder="Textos"
  />
`;
export const INPUT_NUMBER = `
  <div class="form-label-container">
    <label for="exampleInputNumber" class="form-label">
      Campo numérico *
    </label>
    <p class="form-label-description">Campo de asistencia</p>
  </div>
  <input
    type="number"
    class="form-control"
    id="exampleInputNumber"
    aria-describedby="Number"
    placeholder="Números"
  />
`;
export const INPUT_MAIL = `
  <div class="form-label-container">
    <label for="exampleInputEmail" class="form-label">
      Campo de email *
    </label>
    <p class="form-label-description">Campo de asistencia</p>
  </div>
  <input
    type="email"
    class="form-control"
    id="exampleInputEmail"
    aria-describedby="Email"
    placeholder="Email@test.com"
  />
`;
export const INPUT_DATE = `
  <div class="form-label-container">
    <label for="exampleInputDate" class="form-label">
      Nombre del campo *
    </label>
  </div>
  <input
    type="date"
    class="form-control"
    id="exampleInputDate"
    aria-describedby="Date"
    placeholder="Selecciona la fecha"
  />
`;
export const INPUT_BLOCK = `
  <div class="form-label-container">
    <label for="exampleFormControlTextarea1" class="form-label">
      Nombre del campo *
    </label>
    <span class="form-label-number">0/100</span>
  </div>
  <textarea class="form-control" id="exampleFormControlTextarea1" ></textarea>
`;
export const INPUT_SELECT = `
<div class="form-label-container">
  <label for="exampleInputEmail" class="form-label">
    Nombre del selector *
  </label>
  <p class="form-label-description">Campo de asistencia</p>
</div>
<select class="form-control form-select" aria-label="Default select example">
    <option value="0">Seleccionar</option>
    <option value="1">Opción</option>
    <option value="2">Opción</option>
    <option value="3">Opción</option>
</select>
`;
export const INPUT_DISABLED = `
  <div class="container">
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
        aria-describedby="Texto"
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
        aria-describedby="Number"
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
      <select class="form-control form-select" aria-label="Default select example" disabled>
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
    <label for="exampleInputTextoBg" class="form-label">
      Ejemplo campo de texto con fondo
    </label>
  </div>
  <input
    type="text"
    class="form-control"
    id="exampleInputTextoBg"
    aria-describedby="Texto"
    placeholder="Textos"
  />
</div>
`;
