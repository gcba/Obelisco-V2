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

export const EGcodeCloseWith =
  `
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
      Esta es la descripción de una alerta de información.
    </div>

    <div className="alert alert-success alert-dismissible fade show" role="alert">
      Esta es la descripción de una alerta de éxito.
    </div>

    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      Esta es la descripción de una alerta de advertencia.
    </div>

    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      Esta es la descripción de una alerta de error.
    </div>
`

export const EGcodeCloseAlert = `
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
        Esta es la descripción de una alerta de información.
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar"
        ></button>
    </div>

    <div className="alert alert-success alert-dismissible fade show" role="alert">
        Esta es la descripción de una alerta de éxito.
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar"
        ></button>
    </div>

    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        Esta es la descripción de una alerta de advertencia.
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar"
        ></button>
    </div>

    <div className="alert alert-danger alert-dismissible fade show" role="alert">
        Esta es la descripción de una alerta de error.
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar"
        ></button>
    </div>
`;
