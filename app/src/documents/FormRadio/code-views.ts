export const RADIO =
`
  <p className="headline-md">Seleccioná una opción *</p>
  <div className="form-check">
    <label className="form-check-label" htmlFor="profession-designer">
      <input
        className="form-check-input"
        type="radio"
        name="profession"
        id="profession-designer"
        value="diseñador"
        defaultChecked={true}
      />
      <span className="form-check-text">Diseñador</span>
    </label>
  </div>
  <div className="form-check">
    <label className="form-check-label" htmlFor="profession-developer">
      <input
        className="form-check-input"
        type="radio"
        name="profession"
        id="profession-developer"
        value="desarrollador"
      />
      <span className="form-check-text">Desarrollador</span>
    </label>
  </div>
  <div className="form-check">
    <label
      className="form-check-label"
      htmlFor="profession-content"
    >
      <input
        className="form-check-input"
        type="radio"
        name="profession"
        id="profession-content"
        value="redactor"
      />
      <span className="form-check-text">Redactor de contenidos</span>
    </label>
  </div>
  <div className="form-check">
    <label className="form-check-label" htmlFor="validation-content">
      <input
        className="form-check-input is-invalid"
        type="radio"
        name="profession"
        id="validation-content"
        value="invalido"
      />
      <span className="form-check-text">Inválido</span>
    </label>
  </div>

`;

export const RADIO_DISABLED =
`
  <div className="form-check">
    <label
      className="form-check-label"
      htmlFor="disabled"
      aria-disabled="true"
    >
      <input
        className="form-check-input"
        type="radio"
        name="profession"
        id="disabled"
        value="disabled"
        disabled
      />
      <span className="form-check-text">Deshabilitado</span>
    </label>
  </div>
`;
