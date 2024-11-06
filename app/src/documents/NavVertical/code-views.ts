export const NAV_VERTICAL_SIMPLE = `
  <nav aria-label="Navegación vertical">
    <ul class="nav flex-column nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#"><span>Navegación</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#"><span>Activo</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><span>Navegación</span></a>
      </li>
    </ul>
  </nav>
`;
export const NAV_VERTICAL_ICON = `
  <nav aria-label="Navegación vertical">
    <ul class="nav flex-column nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-icon">
            <span class="material-symbols-rounded o-icon" aria-label="hidden">add</span>
            <span>Navegación</span>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">
          <div class="nav-icon">
            <span class="material-symbols-rounded o-icon" aria-label="hidden">add</span>
            <span>Activo</span>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-icon">
            <span class="material-symbols-rounded o-icon" aria-label="hidden">add</span>
            <span>Navegación</span>
          </div>
        </a>
      </li>
    </ul>
  </nav>
`;
export const NAV_VERTICAL_TWO_LEVEL = `
  <nav aria-label="Navegación vertical"
    <ul class="nav flex-column nav-pills nav-lg">
      <li class="nav-item">
        <a class="nav-link" href="#"><span>Categorías</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active-child" href="#">
          <span>Locales y comercios</span>
        </a>
        <ul class="nav flex-column nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span>
                Local Indumentaria y calzado. (Actividades comerciales de
                venta).
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <span>Locales gastronómicos: “para llevar/takeaway”</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><span>Locales de óptica</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span>
                Comercial minorista (excluyendo indumentaria y calzado)
              </span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><span>Actividades jurídicas</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><span>Otras actividades</span></a>
      </li>
    </ul>
  </nav>
`;
export const NAV_VERTICAL_TWO_LEVEL_ICON = `
  <nav  aria-label="Navegación vertical">
    <ul class="nav flex-column nav-pills nav-lg">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-icon">
            <span class="material-symbols-rounded o-icon" aria-label="hidden">add</span>
            <span>Categorías</span>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active-child" href="#">
          <div class="nav-icon">
            <span class="material-symbols-rounded o-icon" aria-label="hidden">add</span>
            <span>Locales y comercios</span>
          </div>
        </a>
        <ul class="nav flex-column nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span>
                Local Indumentaria y calzado. (Actividades comerciales de
                venta).
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <span>Locales gastronómicos: “para llevar/takeaway”</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><span>Locales de óptica</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span>
                Comercial minorista (excluyendo indumentaria y calzado)
              </span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-icon">
            <span class="material-symbols-rounded o-icon" aria-label="hidden">add</span>
            <span>Actividades jurídicas</span>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-icon">
            <span class="material-symbols-rounded o-icon" aria-label="hidden">add</span>
            <span>Otras actividades</span>
          </div>
        </a>
      </li>
    </ul>
  </nav>
`;
export const NAV_VERTICAL_THREE_LEVEL = `
  <nav  aria-label="Navegación vertical">
    <ul class="nav flex-column nav-pills nav-lg">
      <li class="nav-item">
        <a class="nav-link" href="#"><span>Categorías</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active-child" href="#">
          <span>Locales y comercios</span>
        </a>
        <ul class="nav flex-column nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span>
                Local Indumentaria y calzado. (Actividades comerciales de
                venta).
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active-child" href="#">
              <span>Locales gastronómicos: “para llevar/takeaway”</span>
            </a>
            <ul class="nav flex-column nav-pills">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span>Con local a la calle</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#"><span>Food trucks</span></a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><span>Locales de óptica</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span>
                Comercial minorista (excluyendo indumentaria y calzado)
              </span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><span>Actividades jurídicas</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><span>Otras actividades</span></a>
      </li>
    </ul>
  </nav>
`;
export const NAV_VERTICAL_THREE_LEVEL_ICON = `
  <nav  aria-label="Navegación vertical">
    <ul class="nav flex-column nav-pills nav-lg">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-icon">
            <span class="material-symbols-rounded o-icon" aria-label="hidden">add</span>
            <span>Categorías</span>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active-child" href="#">
          <div class="nav-icon">
            <span class="material-symbols-rounded o-icon" aria-label="hidden">add</span>
            <span>Locales y comercios</span>
          </div>
        </a>
        <ul class="nav flex-column nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span>
                Local Indumentaria y calzado. (Actividades comerciales de
                venta).
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active-child" href="#">
              <span>Locales gastronómicos: “para llevar/takeaway”</span>
            </a>
            <ul class="nav flex-column nav-pills">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span>Con local a la calle</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#"><span>Food trucks</span></a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><span>Locales de óptica</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span>
                Comercial minorista (excluyendo indumentaria y calzado)
              </span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-icon">
            <span class="material-symbols-rounded o-icon" aria-label="hidden">add</span>
            <span>Actividades jurídicas</span>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-icon">
            <span class="material-symbols-rounded o-icon" aria-label="hidden">add</span>
            <span>Otras actividades</span>
          </div>
        </a>
      </li>
    </ul>
  </nav>
`;
