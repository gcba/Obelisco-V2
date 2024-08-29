export const SIMPLE_ALERT =
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

export const WITH_CLOSE_ALERT =
  `
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
      Esta es la descripción de una alerta de información.
      <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar">
      </button>
    </div>
    <div className="alert alert-success alert-dismissible fade show" role="alert">
      Esta es la descripción de una alerta de éxito.
      <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar">
      </button>
    </div>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      Esta es la descripción de una alerta de advertencia.
      <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar">
      </button>
    </div>
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      Esta es la descripción de una alerta de error.
      <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar">
      </button>
    </div>
`;

export const HIGHLIGTHED_ALERT = `
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
        <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado.
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar">
        </button>
    </div>
    <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado.
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar">
        </button>
    </div>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado.
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar">
        </button>
    </div>
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado.
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar">
        </button>
    </div>
`;

export const HYPERLINK_ALERT = `
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
        <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado, incluso con 
        <a href="#" className="alert-link"> enlace </a>
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar">
        </button>
    </div>
    <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado, incluso con 
        <a href="#" className="alert-link"> enlace </a>
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar">
        </button>
    </div>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado, incluso con 
        <a href="#" className="alert-link"> enlace </a>
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar">
        </button>
    </div>
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado, incluso con 
        <a href="#" className="alert-link"> enlace </a>
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Cerrar">
        </button>
    </div>
`;

export const LIST_LINK_ALERT = `
          <div className="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado.
            <ol className="list-links">
              <li>
                <a className="alert-link" href="#">
                  Ancla al error 1
                </a>
              </li>
              <li>
                <a className="alert-link" href="#">
                  Ancla al error 2
                </a>
              </li>
              <li>
                <a className="alert-link" href="#">
                  Ancla al error 3
                </a>
              </li>
              <li>
                <a className="alert-link" href="#">
                  Ancla al error 4
                </a>
              </li>
              <li>
                <a className="alert-link" href="#">
                  Ancla al error 5
                </a>
              </li>
            </ol>
          </div>
`;

export const WITH_DESCRIPTION_ALERT = `
          <div className="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado.
            <ol className="list-links">
              <li>
                <span>Texto descriptivo 1</span>
              </li>
              <li>
                <span>Texto descriptivo 2</span>
              </li>
              <li>
                <span>Texto descriptivo 3</span>
              </li>
              <li>
                <span>Texto descriptivo 4</span>
              </li>
              <li>
                <span>Texto descriptivo 5</span>
              </li>
            </ol>
          </div>
`;
