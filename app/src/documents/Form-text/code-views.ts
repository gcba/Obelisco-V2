export const INPUT_TEXT = `
  <label for="exampleInputTexto" class="form-label">Ejemplo campo de texto</label>
  <input type="text" class="form-control" id="exampleInputTexto" aria-describedby="Texto" placeholder="Textos" />
`;

export const INPUT_NUMBER = `
  <label for="exampleInputNumber" class="form-label">Ejemplo campo de numero</label>
  <input type="number" class="form-control" id="exampleInputNumber" aria-describedby="Number" placeholder="Números" />
`;
export const INPUT_MAIL = `
  <label for="exampleInputEmail" class="form-label">Ejemplo campo de mail</label>
  <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="Email" placeholder="Email@test.com" />
`;
export const INPUT_DATE = `
  <label for="exampleInputDate" class="form-label">Fecha</label>
  <input type="date" class="form-control" id="exampleInputDate" aria-describedby="Date" placeholder="Selecciona la fecha" />
`;
export const INPUT_BLOCK = `
  <label for="exampleFormControlTextarea1" class="form-label">Ejemplo TextArea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" />
`;
export const INPUT_DISABLED = `
    <form class="col-12 col-lg-6">
      <label for="example-six" class="form-label">Ejemplo campo de texto</label>
      <div class='search-container'>
        <input type="search" class="form-control input-search" id="example-six" aria-describedby="Search" placeholder="Buscador" disabled />
        <button class="reset" type="reset" aria-label="Borrar"></button>
      </div>
    </form>
    
    <form class="col-12 col-lg-6">
      <label for="example-six" class="form-label">Ejemplo campo de texto</label>
      <div class='search-container'>
        <input type="search" class="form-control input-search input-search-with-button" id="example-six" aria-describedby="Search" placeholder="Buscador"  disabled/>
        <button class="reset" type="reset" aria-label="Borrar"></button>
        <button class='button-search'></button>
      </div>
    </form>

    <div class="col-12 col-lg-6">
      <label for="example-five" class="form-label">Ejemplo campo de texto</label>
      <input type="text" class="form-control" id="example-five" aria-describedby="Texto" placeholder="Textos" disabled />
    </div>

    <div class="col-12 col-lg-6">
      <label for="example-four" class="form-label">Ejemplo campo de numero</label>
      <input type="number" class="form-control" id="example-four" aria-describedby="Number" placeholder="Números" disabled />
    </div>

    <div class="col-12 col-lg-6">
      <label for="example-three" class="form-label">Ejemplo campo de mail</label>
      <input type="email" class="form-control" id="example-three" aria-describedby="Email" placeholder="Email@test.com" disabled />
    </div>

    <div class="col-12 col-lg-6">
      <label for="example-two" class="form-label">Ejemplo campo de fecha</label>
      <input type="date" class="form-control" id="example-two" aria-describedby="Date" placeholder="selecciona tu fecha" disabled />
    </div>

    <div class="col-12 col-lg-6">
      <label for="example-one" class="form-label">Ejemplo TextArea</label>
      <textarea class="form-control" id="example-one" disabled />
    </div>
`;
export const INPUT_VALIDATION_TEXT = `
    <form class="col-12 col-lg-6">
      <label for="ejemplo-1" class="form-label">Ejemplo campo de texto</label>
      <input type="text" class="form-control is-invalid" id="ejemplo-1" aria-describedby="Texto" placeholder="Textos" required />
      <div class="valid-feedback">
        <p>
          El campo es válido.
        </p>
      </div>
      <div id="exampleInputTexto" class="invalid-feedback">
        <p>
          El campo es invalido
        </p>
      </div>
    </form>
`;
export const INPUT_VALIDATION_NUMBER = `
  <form class="col-12 col-lg-6">
    <label for="ejemplo-2" class="form-label">Ejemplo campo de numero</label>
    <input type="number" class="form-control is-valid" id="ejemplo-2" aria-describedby="Number" placeholder="Números" required />
    <div class="valid-feedback">
      <p>
        El campo es válido.
      </p>
    </div>
    <div id="exampleInputTexto" class="invalid-feedback">
      <p>
        El campo es invalido
      </p>
    </div>
  </form>
`;
export const INPUT_VALIDATION_MAIL = `
  <form class="col-12 col-lg-6">
    <label for="ejemplo-3-1" class="form-label">Ejemplo campo de mail</label>
    <input type="email" class="form-control is-invalid" id="ejemplo-3-1" aria-describedby="Email" placeholder="Email@test.com" required />
    <div class="valid-feedback">
      <p>
        El campo es válido.
      </p>
    </div>
    <div id="exampleInputTexto" class="invalid-feedback">
      <p>
        El campo es invalido
      </p>
    </div>
  </form>
`;
export const INPUT_VALIDATION_DATE = `
  <form class="col-12 col-lg-6">
    <label for="ejemplo-4" class="form-label">Ejemplo campo de fecha</label>
    <input type="date" class="form-control is-valid" id="ejemplo-4" aria-describedby="Date" placeholder="selecciona tu fecha" required />
    <div class="valid-feedback">
      <p>
        El campo es válido.
      </p>
    </div>
    <div id="exampleInputTexto" class="invalid-feedback">
      <p>
        El campo es invalido
      </p>
    </div>
  </form>
`;
export const INPUT_VALIDATION_TEXTAREA = `
  <form class="col-12 col-lg-6">
    <label for="ejemplo-5" class="form-label">Ejemplo TextArea</label>
    <textarea class="form-control is-invalid" id="ejemplo-5" required />
    <div class="valid-feedback">
      <p>
        El campo es válido.
      </p>
    </div>
    <div id="exampleInputTexto" class="invalid-feedback">
      <p>
        El campo es invalido
      </p>
    </div>
  </form>
`;
