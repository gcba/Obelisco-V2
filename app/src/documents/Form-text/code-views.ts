export const INPUT_TEXT = `
  <label htmlFor="exampleInputTexto" class="form-label">
    Ejemplo campo de texto
  </label>
  <input
    type="text"
    class="form-control"
    id="exampleInputTexto"
    aria-describedby="Texto"
    placeholder="Textos"
  />
`;
export const INPUT_NUMBER = `
  <label htmlFor="exampleInputNumber" class="form-label">
    Ejemplo campo de numero
  </label>
  <input
    type="number"
    class="form-control"
    id="exampleInputNumber"
    aria-describedby="Number"
    placeholder="Números"
  />
`;
export const INPUT_MAIL = `
  <label htmlFor="exampleInputEmail" class="form-label">
    Ejemplo campo de mail
  </label>
  <input
    type="email"
    class="form-control"
    id="exampleInputEmail"
    aria-describedby="Email"
    placeholder="Email@test.com"
  />
`;
export const INPUT_DATE = `
  <label htmlFor="exampleInputDate" class="form-label">
    Fecha
  </label>
  <input
    type="date"
    class="form-control"
    id="exampleInputDate"
    aria-describedby="Date"
    placeholder="Selecciona la fecha"
  />
`;
export const INPUT_BLOCK = `
  <label htmlFor="exampleFormControlTextarea1" class="form-label">
    Ejemplo TextArea
  </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" ></textarea>
`;
export const INPUT_DISABLED = `
  <div class="container">
    <div class="col-12 col-lg-6">
      <label htmlFor="example-five" class="form-label disabled">
        Ejemplo campo de texto
      </label>
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
      <label htmlFor="example-four" class="form-label disabled">
        Ejemplo campo de numero
      </label>
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
      <label htmlFor="example-three" class="form-label disabled">
        Ejemplo campo de mail
      </label>
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
      <label htmlFor="example-two" class="form-label disabled">
        Ejemplo campo de fecha
      </label>
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
      <label htmlFor="example-one" class="form-label disabled">
        Ejemplo TextArea
      </label>
      <textarea class="form-control" id="example-one" disabled ></textarea>
    </div>

    <div class="col-12 col-lg-6">    
      <label htmlFor="example-disabled-select" class='form-label disabled'>
        Ejemplo campo de selección.
      </label>
      <select class="form-control form-select" aria-label="Default select example" disabled>
        <option selected>Campo de selección</option>
        <option value="1">Opción</option>
        <option value="2">Opción</option>
        <option value="3">Opción</option>
      </select>
    </div>
  </div>
`;
export const INPUT_VALIDATION_TEXT = `
  <form class="col-12 col-lg-6">
    <label htmlFor="ejemplo-1" class="form-label">
      Ejemplo campo de texto
    </label>
    <input
      type="text"
      class="form-control is-invalid"
      id="ejemplo-1"
      aria-describedby="Texto"
      placeholder="Textos"
      required
    />
    <div class="valid-feedback">
      <p>El campo es válido.</p>
    </div>
    <div id="exampleInputTexto" class="invalid-feedback">
      <p>El campo es invalido</p>
    </div>
  </form>
`;
export const INPUT_VALIDATION_NUMBER = `
  <form class="col-12 col-lg-6">
    <label htmlFor="ejemplo-2" class="form-label">
      Ejemplo campo de numero
    </label>
    <input
      type="number"
      class="form-control is-valid"
      id="ejemplo-2"
      aria-describedby="Number"
      placeholder="Números"
      required
    />
    <div class="valid-feedback">
      <p>El campo es válido.</p>
    </div>
    <div id="exampleInputTexto" class="invalid-feedback">
      <p>El campo es invalido</p>
    </div>
  </form>
`;
export const INPUT_VALIDATION_MAIL = `
  <form class="col-12 col-lg-6">
    <label htmlFor="ejemplo-3-1" class="form-label">
      Ejemplo campo de mail
    </label>
    <input
      type="email"
      class="form-control is-invalid"
      id="ejemplo-3-1"
      aria-describedby="Email"
      placeholder="Email@test.com"
      required
    />
    <div class="valid-feedback">
      <p>El campo es válido.</p>
    </div>
    <div id="exampleInputTexto" class="invalid-feedback">
      <p>El campo es invalido</p>
    </div>
  </form>
`;
export const INPUT_VALIDATION_DATE = `
  <form class="col-12 col-lg-6">
    <label htmlFor="ejemplo-4" class="form-label">
      Ejemplo campo de fecha
    </label>
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
    <div id="exampleInputTexto" class="invalid-feedback">
      <p>El campo es invalido</p>
    </div>
  </form>
`;
export const INPUT_VALIDATION_TEXTAREA = `
  <form class="col-12 col-lg-6">
    <label htmlFor="ejemplo-5" class="form-label">
      Ejemplo TextArea
    </label>
    <textarea class="form-control is-invalid" id="ejemplo-5" required ></textarea>
    <div class="valid-feedback">
      <p>El campo es válido.</p>
    </div>
    <div id="exampleInputTexto" class="invalid-feedback">
      <p>El campo es invalido</p>
    </div>
  </form>
`;
export const INPUT_SELECT = `
<select class="form-control form-select" aria-label="Default select example" defaultValue="2">
    <option value="0">Campo de selección</option>
    <option value="1">Opción</option>
    <option value="2">Opción</option>
    <option value="3">Opción</option>
</select>
`;
