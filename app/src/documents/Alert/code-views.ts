export const SIMPLE_ALERT = `<div class="alert alert-info" role="alert">
    Esta es la descripción de una alerta de información.
  </div>

  <div class="alert alert-success" role="alert">
    Esta es la descripción de una alerta de advertencia.
  </div>

  <div class="alert alert-warning" role="alert">
    Esta es la descripción de una alerta de éxito.
  </div>
  
  <div class="alert alert-danger" role="alert">
    Esta es la descripción de una alerta de error.
  </div>
`;

export const WITH_CLOSE_ALERT = `<div class="alert alert-info alert-dismissible fade show" role="alert">
    <p>Esta es la descripción de una alerta de información.</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
  </div>

  <div class="alert alert-success alert-dismissible fade show" role="alert">
    <p>Esta es la descripción de una alerta de éxito.</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
  </div>

  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <p>Esta es la descripción de una alerta de advertencia.</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
  </div>

  <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <p>Esta es la descripción de una alerta de error.</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
  </div>
`;

export const HIGHLIGHTED_ALERT = `<div class="alert alert-info" role="alert">
    <p>
      <strong>Este es un destacado de una alerta de información.</strong> Esta es la descripción de una alerta de información que continua al texto destacado.
    </p>
  </div>

  <div class="alert alert-warning" role="alert">
    <p>
      <strong>Este es un destacado de una alerta de advertencia.</strong> Esta es la descripción de una alerta de advertencia que continua al texto destacado.
    </p>
  </div>

  <div class="alert alert-success" role="alert">
    <p>
      <strong>Este es un destacado de una alerta de éxito.</strong> Esta es la descripción de una alerta de éxito que continua al texto destacado.
    </p>
  </div>

  <div class="alert alert-danger" role="alert">
    <p>
      <strong>Este es un destacado de una alerta de error.</strong>
      Esta es la descripción de una alerta de error que continua al texto
      destacado.
    </p>
  </div>
`;

export const HYPERLINK_ALERT = `<div class="alert alert-info" role="alert">
    <p>
      <strong>Este es un destacado de una alerta de información. </strong>
      Esta es la descripción de una alerta de información que continua al texto destacado, incluso <a href="#">con enlaces</a>.
    </p>
  </div>

  <div class="alert alert-success" role="alert">
    <p>
      <strong>Este es un destacado de una alerta de éxito. </strong>
      Esta es la descripción de una alerta de éxito que continua al texto destacado, incluso <a href="#">con enlaces</a>.
    </p>
  </div>

  <div class="alert alert-warning" role="alert">
    <p>
      <strong>Este es un destacado de una alerta de advertencia. </strong>
      Esta es la descripción de una alerta de advertencia que continua al texto destacado, incluso <a href="#">con enlaces</a>.
    </p>
  </div>

  <div class="alert alert-danger" role="alert">
    <p>
      <strong>Este es un destacado de una alerta de error. </strong>
      Esta es la descripción de una alerta de error que continua al texto destacado, incluso <a href="#">con enlaces</a>.
    </p>
  </div>
`;

export const LIST_LINK_ALERT = `<div class="alert alert-danger" role="alert">
    <p>
      <strong>Este es un destacado de una alerta de error.</strong> Esta es la descripción de una alerta de error que continua al texto destacado.
    </p>
    <ol>
      <li><a href="#">Ancla al error 1</a></li>
      <li><a href="#">Ancla al error 2</a></li>
      <li><a href="#">Ancla al error 3</a></li>
      <li><a href="#">Ancla al error 4</a></li>
      <li><a href="#">Ancla al error 5</a></li>
    </ol>
  </div>
`;

export const WITH_DESCRIPTION_ALERT = `<div class="alert alert-info" role="alert">
    <p>
      <strong>Este es un destacado de una alerta de información.</strong> Esta es la descripción de una alerta de información que continua al texto destacado.
    </p>
    <ol>
      <li><span>Texto descriptivo 1</span></li>
      <li><span>Texto descriptivo 2</span></li>
      <li><span>Texto descriptivo 3</span></li>
      <li><span>Texto descriptivo 4</span></li>
      <li><span>Texto descriptivo 5</span></li>
    </ol>
  </div>
`;

export const SYSTEM_ALERT = `// <!-- Alerta sistema Info -->
	<div class="alert alert-info system" role="alert">
		<p>
			<strong>Este es un destacado de una alerta de información.</strong>
			Esta es la descripción de una alerta de información que continua al texto destacado. <a href="#">con enlaces</a>
		</p>
	</div>

  // <!-- Alerta sistema Success -->
	<div class="alert alert-success system" role="alert">
    <p>
      <strong>Este es un destacado de una alerta de información.</strong>
      Esta es la descripción de una alerta de información que continua al texto destacado.
    </p>
	<div class="alert-links">
		<a href="#">con enlaces</a>
		<a href="#">con enlaces</a>
	</div>
  </div>

  // <!-- Alerta sistema Warning -->
	<div class="alert alert-warning system" role="alert">
    <p>
      <strong>Este es un destacado de una alerta de información.</strong>
      Esta es la descripción de una alerta de información que continua al texto destacado.
    </p>
		<ol>
			<li><a href="#">con enlaces</a></li>
			<li><a href="#">con enlaces</a></li>
			<li><a href="#">con enlaces</a></li>
			<li><a href="#">con enlaces</a></li>
			<li><a href="#">con enlaces</a></li>
		</ol>
  </div>

  // <!-- Alerta sistema Danger -->
	<div class="alert alert-danger system" role="alert">
    <p>
      <strong>Este es un destacado de una alerta de información.</strong>
      Esta es la descripción de una alerta de información que continua al texto destacado.
    </p>
		<ol>
			<li>Texto descriptivo</li>
			<li>Texto descriptivo</li>
			<li>Texto descriptivo</li>
			<li>Texto descriptivo</li>
			<li>Texto descriptivo</li>
		</ol>
  </div>
`;

export const ALERTAS_ACCESSIBILTY = `<div class="alert alert-info" role="alert">
  Esta es la descripción de una alerta de información.
</div>
`;

export const ALERTAS_ACCESSIBILTY_2 = `<div class="alert alert-info" role="alert" aria-labelledby="alertTitulo" 
aria-describedby="alertDesc">
  <h4 id="alertTitulo">Actualización del sistema</h4>
  <p id="alertDesc">El servicio estará disponible nuevamente a las 14:00.</p>
</div>
`;
