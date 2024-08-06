export const EGcodeSimpleNavVertical =
  `
  <nav>
    <ul class="nav flex-column nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#"><span>Link</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#"><span>Activo</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><span>Link</span></a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link disabled"
          href="#"
          aria-disabled="true"
          tabindex="-1"
        >
          <span>Deshabilitado</span>
        </a>
      </li>
    </ul>
  </nav>
`;

export const EGcodeWithIconVertical =
  `
  <nav>
    <ul class="nav flex-column nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-icon">
            <i class="bx bxs-user-circle"></i>
            <span>Link</span>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">
          <div class="nav-icon">
            <i class="bx bxs-user-circle"></i>
            <span>Activo</span>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-icon">
            <i class="bx bxs-user-circle"></i>
            <span>Link</span>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link disabled"
          href="#"
          aria-disabled="true"
          tabindex="-1"
        >
          <div class="nav-icon">
            <i class="bx bxs-user-circle"></i>
            <span>Deshabilitado</span>
          </div>
        </a>
      </li>
    </ul>
  </nav>

`

export const EGcodeTwoLevelVertical = `
  <nav>
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

export const EGcodeTwoLevelWithIconVertical = `
  <nav>
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

export const EGcodeThreeLevelVertical = `
  <nav>
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

export const EGcodeThreeLevelWithIconVertical = `
  <nav>
    <ul class="nav flex-column nav-pills nav-lg">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-icon">
            <i class="bx bxs-user-circle"></i>
            <span>Categorías</span>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active-child" href="#">
          <div class="nav-icon">
            <i class="bx bxs-user-circle"></i>
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
            <i class="bx bxs-user-circle"></i>
            <span>Actividades jurídicas</span>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-icon">
            <i class="bx bxs-user-circle"></i>
            <span>Otras actividades</span>
          </div>
        </a>
      </li>
    </ul>
  </nav>
`;
