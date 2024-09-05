export const DROPDOWN = `
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span class="btn-dropdown-text ellipsis-1">Desplegable</span>
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">
        <i class="bx bxs-info-circle o-icon"></i>
        <span class="item-text">
          Opción de navegación
        </span>
        <i class="bx bxs-info-circle o-icon"></i>
      </a>
      <a class="dropdown-item" href="#">
        <i class="bx bxs-info-circle o-icon"></i>
        <span class="item-text text-right">
          Opción de navegación
        </span>
        <i class="bx bxs-info-circle o-icon"></i>
      </a>
      <a class="dropdown-item disabled" href="#">
        <i class="bx bxs-info-circle o-icon"></i>
        <span class="item-text text-right">
          Opción de navegación
        </span>
        <i class="bx bxs-info-circle o-icon"></i>
      </a>
      <a class="dropdown-item item-danger" href="#">
        <span class="material-symbols-rounded o-icon" aria-hidden="true">
          logout
        </span>
        <span class="item-text">Cerrar sesión</span>
      </a>
    </div>
  </div>
`;
export const DROPDOWN_MENU_ICON = `
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span
        class="material-symbols-rounded o-icon"
        aria-label="hidden"
      >
        menu
      </span>
      <span class="btn-dropdown-text ellipsis-1">Desplegable</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">
        <i class="bx bxs-info-circle o-icon"></i>
        <span class="item-text">
          Opción de navegación
        </span>
      </a>
      <a class="dropdown-item" href="#">
        <span class="item-text text-end">
          Opción de navegación
        </span>
        <i class="bx bxs-info-circle o-icon"></i>
      </a>
      <a class="dropdown-item item-danger" href="#">
        <span class="item-text text-end">
          Cerrar sesión
        </span>
        <span
          class="material-symbols-rounded o-icon"
          aria-label="hidden"
        >
          logout
        </span>
      </a>
    </div>
  </div>
`;
export const DROPDOWN_MENU_ICON_ONLY = `
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      aria-label="Menu"
    >
      <span
        class="material-symbols-rounded o-icon"
        aria-label="hidden"
      >
        menu
      </span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">
        <i class="bx bxs-info-circle o-icon"></i>
        <span class="item-text">
          Opción de navegación
        </span>
      </a>
      <a class="dropdown-item" href="#">
        <span class="item-text text-end">
          Opción de navegación
        </span>
        <i class="bx bxs-info-circle o-icon"></i>
      </a>
      <a class="dropdown-item item-danger" href="#">
        <span class="item-text text-end">
          Cerrar sesión
        </span>
        <span
          class="material-symbols-rounded o-icon"
          aria-label="hidden"
        >
          logout
        </span>
      </a>
    </div>
  </div>
`;
export const DROPDOWN_MENU_RIGHT = `
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
      <span class="btn-dropdown-text ellipsis-1">Desplegable</span>
    </button>
    <div class="dropdown-menu dropdown-menu-end">
      <a class="dropdown-item" href="#">
        <span class="item-text">
          Opción de navegación
        </span>
      </a>
      <a class="dropdown-item" href="#">
        <span class="item-text">
          Opción de navegación
        </span>
      </a>
      <a class="dropdown-item" href="#">
        <span class="item-text">
          Opción de navegación
        </span>
      </a>
      <a class="dropdown-item item-danger" href="#">
        <span class="item-text">Cerrar sesión</span>
        <span
          class="material-symbols-rounded o-icon"
          aria-label="hidden"
        >
          logout
        </span>
      </a>
    </div>
  </div>
`;
export const DROPDOWN_CASCADE = `
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <span class="btn-dropdown-text ellipsis-1">Desplegable</span>
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
    </button>
    <div class="dropdown-menu">
      <div class="dropdown sub-dropdown">
        <button
          type="button"
          class="btn btn-dropdown btn-dropdown-lg"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bx bxs-info-circle o-icon"></i>
          <span class="btn-dropdown-text ellipsis-1">
            Opción en cascada
          </span>
          <span
            class="material-symbols-rounded btn-dropdown-icon"
            aria-label="hidden"
          >
            expand_more
          </span>
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">

            <span class="item-text">
              Opción de navegación
            </span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="item-text">
              Opción de navegación
            </span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="item-text">
              Opción de navegación
            </span>
          </a>
        </div>
      </div>
      <a class="dropdown-item" href="#">
        <span class="item-text">
          Opción de navegación
        </span>
      </a>
      <a class="dropdown-item" href="#">
        <span class="item-text">
          Opción de navegación
        </span>
      </a>
      <a class="dropdown-item" href="#">
        <span class="item-text">
          Opción de navegación
        </span>
      </a>
      <a class="dropdown-item item-danger" href="#">
        <span class="material-symbols-rounded o-icon" aria-label="hidden">logout</span>
        <span class="item-text">Cerrar sesión</span>
      </a>
    </div>
  </div>
`;
export const DROPDOWN_CASCADE_RIGHT = `
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <span
        class="material-symbols-rounded btn-dropdown-icon"
        aria-label="hidden"
      >
        expand_more
      </span>
      <span class="btn-dropdown-text ellipsis-1">Desplegable</span>
    </button>
    <div class="dropdown-menu dropdown-menu-end">
      <div class="dropdown sub-dropdown">
        <button
          type="button"
          class="btn btn-dropdown btn-dropdown-lg"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span
            class="material-symbols-rounded btn-dropdown-icon"
            aria-label="hidden"
          >
            expand_more
          </span>

          <span class="btn-dropdown-text ellipsis-1">
            Opción en cascada
          </span>
          <i class="bx bxs-info-circle o-icon"></i>
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">
            <span class="item-text">
              Opción de navegación
            </span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="item-text">
              Opción de navegación
            </span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="item-text">
              Opción de navegación
            </span>
          </a>
        </div>
      </div>
      <a class="dropdown-item" href="#">
        <span class="item-text">
          Opción de navegación
        </span>
      </a>
      <a class="dropdown-item" href="#">
        <span class="item-text">
          Opción de navegación
        </span>
      </a>
      <a class="dropdown-item" href="#">
        <span class="item-text">
          Opción de navegación
        </span>
      </a>
      <a class="dropdown-item item-danger" href="#">
        <span class="item-text">Cerrar sesión</span>
        <span
          class="material-symbols-rounded o-icon"
          aria-label="hidden"
        >
          logout
        </span>
      </a>
    </div>
  </div>
`;
