export const EGcodeSimpleAlert =
  `
    <div class="alert alert-info" role="alert">
      <p>Esta es la descripción de una alerta de información.</p>
    </div>
    
    <div class="alert alert-primary" role="alert">
      <p>Esta es la descripción de una alerta de advertencia.</p>
    </div>
    
    <div class="alert alert-success" role="alert">
      <p>Esta es la descripción de una alerta de éxito.</p>
    </div>
    
    <div class="alert alert-danger" role="alert">
      <p>Esta es la descripción de una alerta de error.</p>
    </div>

`;

export const EGcodeCloseAlert =
  `
  <div
    class="alert alert-warning alert-dismissible show fade"
    role="alert"
  >
    <p>Esta es la descripción de una alerta de error.</p>
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Cerrar"
    >
      <span class="material-icons-round">close</span>
    </button>
  </div>

  <p>Nuevo html de B5</p>

  <div
    class="alert alert-warning alert-dismissible fade show"
    role="alert"
  >
    <strong>Holy guacamole!</strong> You should check in on some of those
    fields below.
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Cerrar"
    ></button>
  </div>

`

export const EGcodeWithStrong = `
  <div class="alert alert-danger" role="alert">
    <p>
      <strong>Este es un destacado de una alerta de error.</strong>
      Esta es la descripción de una alerta de error que continua al texto
      destacado.
    </p>
    <ol class="list-links">
      <li>
        <a href="#">Ancla al error 1</a>
      </li>
      <li>
        <a href="#">Ancla al error 2</a>
      </li>
      <li>
        <a href="#">Ancla al error 3</a>
      </li>
      <li>
        <a href="#">Ancla al error 4</a>
      </li>
      <li>
        <a href="#">Ancla al error 5</a>
      </li>
    </ol>
  </div>
`;
