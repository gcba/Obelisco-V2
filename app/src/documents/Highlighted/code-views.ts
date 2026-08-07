export const HIGHLIGHTED_BANNER_BACKGROUND = `// Fondo blanco
<div class="panel-horizontal-content">
  <div class="panel-horizontal">
    <img src="/destacado.jpg" alt="descripción de imagen" class="panel-img" />
    <div class="panel-body">
      <h2 class="panel-title">Título del destacado</h2>
      <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
        líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
        destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces
      </p>
      <div class="panel-footer">
        <a class="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
          Botón
        </a>
        <a class="btn btn-outline-primary btn-lg" href="#" rel="noopener noreferrer">
          Botón
        </a>
      </div>
    </div>
  </div>
</div>

// Fondo gris
<div class="panel-horizontal-content bg-light">
  <div class="panel-horizontal">
    <img src="/destacado.jpg" alt="descripción de imagen" class="panel-img" />
    <div class="panel-body">
      <h2 class="panel-title">Título del destacado</h2>
      <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
        líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
        destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces
      </p>
      <div class="panel-footer">
        <a class="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
          Botón
        </a>
        <a class="btn btn-outline-primary btn-lg" href="#" rel="noopener noreferrer">
          Botón
        </a>
      </div>
    </div>
  </div>
</div>

// Fondo oscuro
<div class="panel-horizontal-content bg-dark">
  <div class="panel-horizontal">
    <img src="/destacado.jpg" alt="descripción de imagen" class="panel-img" />
    <div class="panel-body">
      <h2 class="panel-title">Título del destacado</h2>
      <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
        líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
        destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces
      </p>
      <div class="panel-footer">
        <a class="btn btn-light btn-lg" href="#" rel="noopener noreferrer">
          Botón
        </a>
        <a class="btn btn-outline-light btn-lg" href="#" rel="noopener noreferrer">
          Botón
        </a>
      </div>
    </div>
  </div>
</div>
`;

export const HIGHLIGHTED_BANNER_ACTIONABLE_ITEMS = `// Accionable botón
<div class="panel-horizontal-content">
  <div class="panel-horizontal">
    <img src="/destacado.jpg" alt="descripción de imagen" class="panel-img" />
    <div class="panel-body">
      <h2 class="panel-title">Título del destacado</h2>
      <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
        líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
        destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces
      </p>
      <div class="panel-footer">
        <a class="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
          Botón
        </a>
      </div>
    </div>
  </div>
</div>

// Accionable botón descarga
<div class="panel-horizontal-content">
  <div class="panel-horizontal">
    <img src="/destacado.jpg" alt="descripción de imagen" class="panel-img" />
    <div class="panel-body">
      <h2 class="panel-title">Título del destacado</h2>
      <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
        líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
        destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces
      </p>
      <div class="panel-footer">
        <a class="btn btn-secondary btn-lg" href="#" target="_blank" download="">
          <span class="material-symbols-rounded" aria-hidden="true">file_download</span>Descargar
        </a>
      </div>
    </div>
  </div>
</div>

// Accionable link
<div class="panel-horizontal-content">
  <div class="panel-horizontal">
    <img src="/destacado.jpg" alt="descripción de imagen" class="panel-img" />
    <div class="panel-body">
      <h2 class="panel-title">Título del destacado</h2>
      <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
        líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
        destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces
      </p>
      <div class="panel-footer">
        <a class="external" href="#" target="_blank" rel="noopener noreferrer">Enlace externo</a>
      </div>
    </div>
  </div>
</div>

// Accionable Acceso
<div class="panel-horizontal-content">
  <div class="panel-horizontal">
    <img src="/destacado.jpg" alt="descripción de imagen" class="panel-img" />
    <div class="panel-body">
      <h2 class="panel-title">Título del destacado</h2>
      <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
        líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
        destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces
      </p>
      <div class="panel-footer">
        <a href="#" class="list-group-item item-sm">
          <span class="material-symbols-rounded o-icon" aria-hidden="true">info</span>
          <div class="access-content">
            <span class="access-title">Acceso</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
`;

export const HIGHLIGHTED_BANNER_VIDEOS = `<div class="panel-horizontal-content">
  <div class="panel-horizontal">
    <p class="sr-only">Buenos Aires se escribe en plural</p>
    <video class="panel-img" controls="">
      <source src="/videoBuenosAires.mp4" type="video/mp4" />
      <track
        src="/videoBuenosAires.vtt"
        default=""
        kind="captions"
        srclang="es"
      />
      <p>Su navegador no soporta vídeos HTML5. Puedes ver el video haciendo clic en
        <a href="/videoBuenosAires.mp4">este enlace</a>.
      </p>
    </video>
    <div class="panel-body">
      <h2 class="panel-title">Título del destacado</h2>
      <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
        líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
        destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces
      </p>
      <div class="panel-footer">
        <a class="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
          Botón
        </a>
        <a class="btn btn-outline-primary btn-lg" href="#" rel="noopener noreferrer">
          Botón
        </a>
      </div>
    </div>
  </div>
</div>

// Vídeo de youtube
<div class="panel-horizontal-content">
  <div class="panel-horizontal">
    <iframe
      class="panel-img"
      src="https://www.youtube.com/embed/sXE613Oaxvc?si=iWSX1erqQxXOLojw"
      title="Buenos Aires se escribe en plural"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen=""
    ></iframe>
    <div class="panel-body">
      <h2 class="panel-title">Título del destacado</h2>
      <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
        líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
        destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces
      </p>
      <div class="panel-footer">
        <a class="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
          Botón
        </a>
        <a class="btn btn-outline-primary btn-lg" href="#" rel="noopener noreferrer">
          Botón
        </a>
      </div>
    </div>
  </div>
</div>
`;

export const HIGHLIGHTED_BANNER_NO_MEDIA = `//Sin multimedia fondo blanco
<div class="panel-horizontal-content">
  <div class="panel-horizontal">
    <div class="panel-body">
      <h2 class="panel-title">Título del destacado</h2>
      <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
        líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
        destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces
      </p>
      <div class="panel-footer">
        <a class="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
          Botón
        </a>
        <a class="btn btn-outline-primary btn-lg" href="#" rel="noopener noreferrer">
          Botón
        </a>
      </div>
    </div>
  </div>
</div>
//Sin multimedia fondo gris
<div class="panel-horizontal-content bg-light">
  <div class="panel-horizontal">
    <div class="panel-body">
      <h2 class="panel-title">Título del destacado</h2>
      <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
        No puede contener negritas ni enlaces
      </p>
      <div class="panel-footer">
        <LinkClient class="btn btn-primary btn-lg">Botón</LinkClient>
        <LinkClient class="btn btn-outline-primary btn-lg">Botón</LinkClient>
      </div>
    </div>
  </div>
</div>
//Sin multimedia fondo oscuro
<div class="panel-horizontal-content bg-dark">
  <div class="panel-horizontal">
    <div class="panel-body">
      <h2 class="panel-title">Título del destacado</h2>
      <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas.
        No puede contener negritas ni enlaces
      </p>
      <div class="panel-footer">
        <LinkClient class="btn btn-light btn-lg">Botón</LinkClient>
        <LinkClient class="btn btn-outline-light btn-lg">Botón</LinkClient>
      </div>
    </div>
  </div>
</div>
`;

export const HIGHLIGHTED_VERTICAL_BACKGROUND = `
<div class="highlighted-items-2">
// Fondo oscuro
  <div class="col">
    <div class="panel-vertical bg-dark">
      <img src="/destacado.jpg" alt="descripción de imagen" class="panel-img" />
      <div class="panel-body-dark">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces</p>
        <div class="panel-footer">
          <a class="btn btn-light btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
          <a class="btn btn-outline-light btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
        </div>
      </div>
    </div>
  </div>
// Fondo claro
  <div class="col">
    <div class="panel-vertical bg-light">
      <img src="/destacado.jpg" alt="descripción de imagen" class="panel-img" />
      <div class="panel-body bg-light">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces</p>
        <div class="panel-footer">
          <a class="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
          <a class="btn btn-outline-primary btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
        </div>
      </div>
    </div>
  </div>
// Fondo blanco
  <div class="col">
    <div class="panel-vertical">
      <img src="/destacado.jpg" alt="descripción de imagen" class="panel-img" />
      <div class="panel-body">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces</p>
        <div class="panel-footer">
          <a class="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
          <a class="btn btn-outline-primary btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export const HIGHLIGHTED_VERTICAL_ACTIONABLE_ITEMS = `
<div class="highlighted-items-2">
  <div class="col">
    <div class="panel-vertical bg-dark">
      <img src="/destacado.jpg" alt="descripción de imagen" class="panel-img" />
      <div class="panel-body-dark">
        <h2 class="panel-title">Este es el titulo del destacado que puede contener hasta 2 líneas de texto.</h2>
        <p class="panel-text">Esta es la descripción del destacado que puede contener hasta 3 líneas de texto. Si se excede de este límite, el texto de la descripción se va a truncar, indicado por los puntos suspensivos que hay más contenido oculto.</p>
        <div class="panel-footer">
          <a class="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
          <a href="#" class="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
            Botón
          </a>
        </div>
      </div>
    </div>
  </div>
    <div class="col">
    <div class="panel-vertical bg-dark">
      <img src="/destacado.jpg" alt="descripción de imagen" class="panel-img" />
      <div class="panel-body-dark">
        <h2 class="panel-title">Este es el titulo del destacado que puede contener hasta 2 líneas de texto.</h2>
        <p class="panel-text">Esta es la descripción del destacado que puede contener hasta 3 líneas de texto. Si se excede de este límite, el texto de la descripción se va a truncar, indicado por los puntos suspensivos que hay más contenido oculto.</p>
        <div class="panel-footer">
          <a href="#" class="list-group-item item-sm">
            <span class="material-symbols-rounded o-icon" aria-hidden="true">info</span>
            <div class="access-content">
              <span class="access-title">Acceso</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="panel-vertical bg-dark">
      <img src="/destacado.jpg" alt="descripción de imagen" class="panel-img" />
      <div class="panel-body-dark">
        <h2 class="panel-title">Este es el titulo del destacado que puede contener hasta 2 líneas de texto.</h2>
        <p class="panel-text">Esta es la descripción del destacado que puede contener hasta 3 líneas de texto. Si se excede de este límite, el texto de la descripción se va a truncar, indicado por los puntos suspensivos que hay más contenido oculto.</p>
        <div class="panel-footer">
          <a class="btn btn-secondary btn-lg" href="#" target="_blank" download="">
            <span class="material-symbols-rounded" aria-hidden="true">file_download</span>Descargar
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="panel-vertical bg-dark">
      <img src="/destacado.jpg" alt="descripción de imagen" class="panel-img" />
      <div class="panel-body-dark">
        <h2 class="panel-title">Este es el titulo del destacado que puede contener hasta 2 líneas de texto.</h2>
        <p class="panel-text">Esta es la descripción del destacado que puede contener hasta 3 líneas de texto. Si se excede de este límite, el texto de la descripción se va a truncar, indicado por los puntos suspensivos que hay más contenido oculto.</p>
        <div class="panel-footer">
          <a class="external" href="#" target="_blank" rel="noopener noreferrer">Enlace externo</a>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export const HIGHLIGHTED_VERTICAL_VIDEO = `
<div class="highlighted-items-2">
  <div class="col">
  // Fondo oscuro
    <div class="panel-vertical bg-dark">
      <p class="sr-only">Buenos Aires se escribe en plural</p>
      <video class="panel-img" controls="">
        <source src="/videoBuenosAires.mp4" type="video/mp4" />
        <track
          src="/videoBuenosAires.vtt"
          default=""
          kind="captions"
          srclang="es"
        />
        <p>Su navegador no soporta vídeos HTML5. Puedes ver el video haciendo clic en
          <a href="/videoBuenosAires.mp4">este enlace</a>.
        </p>
      </video>
      <div class="panel-body-dark">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces</p>
        <div class="panel-footer">
          <a class="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
  // Fondo claro
    <div class="panel-vertical bg-light">
      <iframe
        class="panel-img"
        src="https://www.youtube.com/embed/sXE613Oaxvc?si=iWSX1erqQxXOLojw"
        title="Buenos Aires se escribe en plural"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen=""
      ></iframe>
      <div class="panel-body bg-light">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces</p>
        <div class="panel-footer">
          <a class="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export const HIGHLIGHTED_VERTICAL_NO_MEDIA = `<div class="highlighted-items-2">
  <div class="col">
  <!-- Destacado sin multimedia oscuro -->
    <div class="panel-vertical bg-dark">
      <div class="panel-body-dark panel-sin-multimedia-v">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">
         Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede
         contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de
         pocas líneas. No puede contener negritas ni enlaces
        </p>
        <div class="panel-footer">
          <a class="btn btn-light btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
  <!-- Destacado sin multimedia claro -->
    <div class="panel-vertical bg-light">
      <div class="panel-body panel-sin-multimedia-v bg-light">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">
         Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede 
         contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, 
         de pocas líneas. No puede contener negritas ni enlaces
        </p>
        <div class="panel-footer">
          <a class="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
  <!-- Destacado sin multimedia blanco -->
    <div class="panel-vertical">
      <div class="panel-body panel-sin-multimedia-v">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">
         Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede 
         contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, 
         de pocas líneas. No puede contener negritas ni enlaces
        </p>
        <div class="panel-footer">
          <a class="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export const HIGHLIGHTED_CONTAINER = `// Fondo blanco
<div class="container">
  <div class="panel-horizontal-content panel-horizontal-container">
    <div class="panel-horizontal">
      <img alt="descripción de imagen" loading="lazy" width="538" height="304" decoding="async" data-nimg="1" class="panel-img" src="/Obelisco-V2/images/destacado.jpg">

      <div class="panel-body">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">
          Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. 
          No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. 
          Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces
        </p>
        <div class="panel-footer">
          <a href="#" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Botón</a>
          <a href="#" class="btn btn-outline-primary btn-lg" target="_blank" rel="noopener noreferrer">Botón</a>
        </div>
      </div>
    </div>
  </div>
</div>

// Fondo gris
<div class="container">
  <div class="panel-horizontal-content panel-horizontal-container bg-light">
    <div class="panel-horizontal">
      <img alt="descripción de imagen" loading="lazy" width="538" height="304" decoding="async" data-nimg="1" class="panel-img" src="/Obelisco-V2/images/destacado.jpg">

      <div class="panel-body">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">
          Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. 
          No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. 
          Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces
        </p>
        <div class="panel-footer">
          <a href="#" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Botón</a>
          <a href="#" class="btn btn-outline-primary btn-lg" target="_blank" rel="noopener noreferrer">Botón</a>
        </div>
      </div>
    </div>
  </div>
</div>

// Fondo oscuro
<div class="container">
  <div class="panel-horizontal-content panel-horizontal-container bg-dark">
    <div class="panel-horizontal">
      <img alt="descripción de imagen" loading="lazy" width="538" height="304" decoding="async" data-nimg="1" class="panel-img" src="/Obelisco-V2/images/destacado.jpg">

      <div class="panel-body">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">
          Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. 
          No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. 
          Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces
        </p>
        <div class="panel-footer">
          <a href="#" class="btn btn-light btn-lg" target="_blank" rel="noopener noreferrer">Botón</a>
          <a href="#" class="btn btn-outline-light btn-lg" target="_blank" rel="noopener noreferrer">Botón</a>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export const HIGHLIGHTED_DEGRADE = `<div class="container">
  <div class="panel-horizontal-content panel-horizontal-container bg-gradient-blue p-0">
     <div class="panel-horizontal">

      <div class="panel-body">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
        líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
        destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces
        </p>

        <div class="panel-footer">
          <a class="btn btn-light btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
          <a class="btn btn-outline-light btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
        </div>
      </div>

      <div class="panel-media">
        <img alt="descripción de imagen" loading="lazy" width="538" height="304" decoding="async" data-nimg="1" class="panel-img" src="/Obelisco-V2/images/highlighted/bax-phone.png">
      </div>

    </div>
  </div>
</div>
`;

export const HIGHLIGHTED_DEGRADE_INVERTED = `<div class="container">
  <div class="panel-horizontal-content panel-horizontal-container bg-gradient-blue p-0">
     <div class="panel-horizontal panel-inverted">

      <div class="panel-body">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
        líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
        destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces
        </p>

        <div class="panel-footer">
          <a class="btn btn-light btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
          <a class="btn btn-outline-light btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
        </div>
      </div>

      <div class="panel-media">
        <img alt="descripción de imagen" loading="lazy" width="538" height="304" decoding="async" data-nimg="1" class="panel-img" src="/Obelisco-V2/images/highlighted/bax-phone.png">
      </div>

    </div>
  </div>
</div>

<div class="container">
  <div class="panel-horizontal-content panel-horizontal-container bg-gradient-blue p-0">
     <div class="panel-horizontal panel-inverted">

      <div class="panel-body">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
        líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
        destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces
        </p>

        <div class="panel-footer">
          <a class="btn btn-primary btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
          <a class="btn btn-outline-primary btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
        </div>
      </div>

      <div class="panel-media-edge">
        <img alt="descripción de imagen" loading="lazy" width="538" height="304" decoding="async" data-nimg="1" class="panel-img" src="/Obelisco-V2/images/highlighted/destacado_multimedia_container.png">
      </div>

    </div>
  </div>
</div>
`;

export const HIGHLIGHTED_DEGRADE_NO_MEDIA = `<div class="container">
  <div class="panel-horizontal-content panel-horizontal-container bg-gradient-blue"">
     <div class="panel-horizontal panel-inverted">

      <div class="panel-body">
        <h2 class="panel-title">Título del destacado</h2>
        <p class="panel-text">
        Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
        líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
        destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
        negritas ni enlaces
        </p>

        <div class="panel-footer">
          <a class="btn btn-light btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
          <a class="btn btn-outline-light btn-lg" href="#" rel="noopener noreferrer">
            Botón
          </a>
        </div>

      </div>
      
    </div>
  </div>
</div>
`;
