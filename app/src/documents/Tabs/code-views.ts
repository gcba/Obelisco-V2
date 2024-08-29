export const TABS_SIMPLE = `
  <nav class="tabs-box" aria-label="Navegación por pestañas">
    <ul class="nav nav-pills tabs" id="simple-myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#panel-content-1"
          type="button"
          role="tab"
          aria-controls="panel-content-1"
          aria-selected="false"
          id="tab-1"
        >
          Pestaña 1
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#panel-content-2"
          type="button"
          role="tab"
          aria-controls="panel-content-2"
          aria-selected="false"
          id="tab-2"
        >
          Pestaña 2
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#panel-content-3"
          type="button"
          role="tab"
          aria-controls="panel-content-3"
          aria-selected="true"
          id="tab-3"
        >
          Pestaña 3
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link disabled"
          disabled
          tabIndex={-1}
          data-bs-toggle="tab"
          data-bs-target="#panel-content-4"
          type="button"
          role="tab"
          aria-controls="panel-content-4"
          aria-selected="false"
          id="tab-4"
        >
          Pestaña 4
        </button>
      </li>
    </ul>
  </nav>
  <div class="tab-content" id="simple-myTabContent">
    <div
      class="tab-pane fade"
      id="panel-content-1"
      role="tabpanel"
      aria-labelledby="tab-1"
    >
      Contenido Pestaña 1
    </div>
    <div
      class="tab-pane fade"
      id="panel-content-2"
      role="tabpanel"
      aria-labelledby="tab-2"
    >
      Contenido Pestaña 2
    </div>
    <div
      class="tab-pane fade show active"
      id="panel-content-3"
      role="tabpanel"
      aria-labelledby="tab-3"
    >
      Contenido Pestaña 3
    </div>
    <div
      class="tab-pane fade"
      id="panel-content-4"
      role="tabpanel"
      aria-labelledby="tab-4"
    >
      Contenido Pestaña 4
    </div>
  </div>
`;
export const TABS_SIMPLE_ICON = `
  <nav class="tabs-box" aria-label="Navegación por pestañas">
    <ul class="nav nav-pills tabs" id="icon-myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#panel-width-content-1"
          type="button"
          role="tab"
          aria-controls="panel-width-content-1"
          aria-selected="true"
          id="tab-width-1"
        >
          <div class="nav-icon">
            Pestaña 1
            <span class="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#panel-width-content-2"
          type="button"
          role="tab"
          aria-controls="panel-width-content-2"
          aria-selected="false"
          id="tab-width-2"
        >
          <div class="nav-icon">
            Pestaña 2
            <span class="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#panel-width-content-3"
          type="button"
          role="tab"
          aria-controls="panel-width-content-3"
          aria-selected="false"
          id="tab-width-3"
          disabled
        >
          <div class="nav-icon">
            Pestaña 3
            <span class="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#panel-width-content-4"
          type="button"
          role="tab"
          aria-controls="panel-width-content-4"
          aria-selected="false"
          id="tab-width-4"
        >
          <div class="nav-icon">
            Pestaña 4
            <span class="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
    </ul>
  </nav>
  <div class="tab-content" id="icon-myTabContent">
    <div
      class="tab-pane fade show active"
      id="panel-width-content-1"
      role="tabpanel"
      aria-labelledby="tab-width-1"
    >
      Contenido Pestaña 1
    </div>
    <div
      class="tab-pane fade"
      id="panel-width-content-2"
      role="tabpanel"
      aria-labelledby="tab-width-2"
    >
      Contenido Pestaña 2
    </div>
    <div
      class="tab-pane fade"
      id="panel-width-content-3"
      role="tabpanel"
      aria-labelledby="tab-width-3"
    >
      Contenido Pestaña 3
    </div>
    <div
      class="tab-pane fade"
      id="panel-width-content-4"
      role="tabpanel"
      aria-labelledby="tab-width-4"
    >
      Contenido Pestaña 4
    </div>
  </div>
`;
export const TABS_FIXED_WIDTH = `
  <nav class="tabs-box" aria-label="Navegación por pestañas">
    <ul class="nav nav-pills tabs fixed-width" id="icon-myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#panel-icon-content-1"
          type="button"
          role="tab"
          aria-controls="panel-icon-content-1"
          aria-selected="true"
          id="tab-icon-1"
        >
          <div class="nav-icon">
            Pestaña 1
            <span class="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#panel-icon-content-2"
          type="button"
          role="tab"
          aria-controls="panel-icon-content-2"
          aria-selected="false"
          id="tab-icon-2"
        >
          <div class="nav-icon">
            Pestaña 2
            <span class="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#panel-icon-content-3"
          type="button"
          role="tab"
          aria-controls="panel-icon-content-3"
          aria-selected="false"
          id="tab-icon-3"
          disabled
        >
          <div class="nav-icon">
            Pestaña 3
            <span class="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#panel-icon-content-4"
          type="button"
          role="tab"
          aria-controls="panel-icon-content-4"
          aria-selected="false"
          id="tab-icon-4"
        >
          <div class="nav-icon">
            Pestaña 4
            <span class="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
    </ul>
  </nav>
  <div class="tab-content" id="icon-myTabContent">
    <div
      class="tab-pane fade show active"
      id="panel-icon-content-1"
      role="tabpanel"
      aria-labelledby="tab-icon-1"
    >
      Contenido Pestaña 1
    </div>
    <div
      class="tab-pane fade"
      id="panel-icon-content-2"
      role="tabpanel"
      aria-labelledby="tab-icon-2"
    >
      Contenido Pestaña 2
    </div>
    <div
      class="tab-pane fade"
      id="panel-icon-content-3"
      role="tabpanel"
      aria-labelledby="tab-icon-3"
    >
      Contenido Pestaña 3
    </div>
    <div
      class="tab-pane fade"
      id="panel-icon-content-4"
      role="tabpanel"
      aria-labelledby="tab-icon-4"
    >
      Contenido Pestaña 4
    </div>
  </div>
`;
export const TABS_CONTAINER = `
  <nav class="tabs-box" aria-label="Navegación por pestañas">
    <ul class="nav nav-pills tabs nav-box" id="icon-myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#panel-bg-content-1"
          type="button"
          role="tab"
          aria-controls="panel-bg-content-1"
          aria-selected="true"
          id="tab-bg-1"
        >
          <div class="nav-icon">
            Pestaña 1
            <span class="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#panel-bg-content-2"
          type="button"
          role="tab"
          aria-controls="panel-bg-content-2"
          aria-selected="false"
          id="tab-bg-2"
        >
          <div class="nav-icon">
            Pestaña 2
            <span class="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#panel-bg-content-3"
          type="button"
          role="tab"
          aria-controls="panel-bg-content-3"
          aria-selected="false"
          id="tab-bg-3"
          disabled
        >
          <div class="nav-icon">
            Pestaña 3
            <span class="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#panel-bg-content-4"
          type="button"
          role="tab"
          aria-controls="panel-bg-content-4"
          aria-selected="false"
          id="tab-bg-4"
        >
          <div class="nav-icon">
            Pestaña 4
            <span class="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
    </ul>
  </nav>
  <div class="tab-content" id="icon-myTabContent">
    <div
      class="tab-pane fade show active"
      id="panel-bg-content-1"
      role="tabpanel"
      aria-labelledby="tab-bg-1"
    >
      Contenido Pestaña 1
    </div>
    <div
      class="tab-pane fade"
      id="panel-bg-content-2"
      role="tabpanel"
      aria-labelledby="tab-bg-2"
    >
      Contenido Pestaña 2
    </div>
    <div
      class="tab-pane fade"
      id="panel-bg-content-3"
      role="tabpanel"
      aria-labelledby="tab-bg-3"
    >
      Contenido Pestaña 3
    </div>
    <div
      class="tab-pane fade"
      id="panel-bg-content-4"
      role="tabpanel"
      aria-labelledby="tab-bg-4"
    >
      Contenido Pestaña 4
    </div>
  </div>
`;

export const TABS_SLIDER = `
  <nav className="tabs-box" aria-label="Navegación por pestañas">
    <ul className="nav nav-pills tabs" id="tab-set-1" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-1"
          type="button"
          role="tab"
          aria-controls="tab-content-1"
          aria-selected="true"
          id="tab-1"
        >
          <div className="nav-icon">
            Pestaña 1
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-2"
          type="button"
          role="tab"
          aria-controls="tab-content-2"
          aria-selected="false"
          id="tab-2"
        >
          <div className="nav-icon">
            Pestaña 2
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-3"
          type="button"
          role="tab"
          aria-controls="tab-content-3"
          aria-selected="false"
          id="tab-3"
        >
          <div className="nav-icon">
            Pestaña 3
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-4"
          type="button"
          role="tab"
          aria-controls="tab-content-4"
          aria-selected="false"
          id="tab-4"
        >
          <div className="nav-icon">
            Pestaña 4
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-5"
          type="button"
          role="tab"
          aria-controls="tab-content-5"
          aria-selected="false"
          id="tab-5"
        >
          <div className="nav-icon">
            Pestaña 5
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-6"
          type="button"
          role="tab"
          aria-controls="tab-content-6"
          aria-selected="false"
          id="tab-6"
        >
          <div className="nav-icon">
            Pestaña 6
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-7"
          type="button"
          role="tab"
          aria-controls="tab-content-7"
          aria-selected="false"
          id="tab-7"
        >
          <div className="nav-icon">
            Pestaña 7
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-8"
          type="button"
          role="tab"
          aria-controls="tab-content-8"
          aria-selected="false"
          id="tab-8"
        >
          <div className="nav-icon">
            Pestaña 8
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-9"
          type="button"
          role="tab"
          aria-controls="tab-content-9"
          aria-selected="false"
          id="tab-9"
        >
          <div className="nav-icon">
            Pestaña 9
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-10"
          type="button"
          role="tab"
          aria-controls="tab-content-10"
          aria-selected="false"
          id="tab-10"
        >
          <div className="nav-icon">
            Pestaña 10
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
    </ul>
    <div className="tabs-controls">
      <button className="prev-next" id="prev">
        <span className="material-symbols-rounded">
          chevron_left
        </span>
      </button>
      <button className="prev-next" id="next">
        <span className="material-symbols-rounded">
          chevron_right
        </span>
      </button>
    </div>
  </nav>
  <div className="tab-content" id="tab-content-set">
    <div
      className="tab-pane fade show active"
      id="tab-content-1"
      role="tabpanel"
      aria-labelledby="tab-1"
    >
      Contenido Pestaña 1
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-2"
      role="tabpanel"
      aria-labelledby="tab-2"
    >
      Contenido Pestaña 2
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-3"
      role="tabpanel"
      aria-labelledby="tab-3"
    >
      Contenido Pestaña 3
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-4"
      role="tabpanel"
      aria-labelledby="tab-4"
    >
      Contenido Pestaña 4
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-5"
      role="tabpanel"
      aria-labelledby="tab-5"
    >
      Contenido Pestaña 5
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-6"
      role="tabpanel"
      aria-labelledby="tab-6"
    >
      Contenido Pestaña 6
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-7"
      role="tabpanel"
      aria-labelledby="tab-7"
    >
      Contenido Pestaña 7
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-8"
      role="tabpanel"
      aria-labelledby="tab-8"
    >
      Contenido Pestaña 8
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-9"
      role="tabpanel"
      aria-labelledby="tab-9"
    >
      Contenido Pestaña 9
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-10"
      role="tabpanel"
      aria-labelledby="tab-10"
    >
      Contenido Pestaña 10
    </div>
  </div>

  <nav className="tabs-box" aria-label="Navegación por pestañas">
    <ul className="nav nav-pills tabs nav-box" id="tab-set-2" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-11"
          type="button"
          role="tab"
          aria-controls="tab-content-11"
          aria-selected="true"
          id="tab-11"
        >
          <div className="nav-icon">
            Pestaña 1
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-12"
          type="button"
          role="tab"
          aria-controls="tab-content-12"
          aria-selected="false"
          id="tab-12"
        >
          <div className="nav-icon">
            Pestaña 2
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-13"
          type="button"
          role="tab"
          aria-controls="tab-content-13"
          aria-selected="false"
          id="tab-13"
        >
          <div className="nav-icon">
            Pestaña 3
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-14"
          type="button"
          role="tab"
          aria-controls="tab-content-14"
          aria-selected="false"
          id="tab-14"
        >
          <div className="nav-icon">
            Pestaña 4
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-15"
          type="button"
          role="tab"
          aria-controls="tab-content-15"
          aria-selected="false"
          id="tab-15"
        >
          <div className="nav-icon">
            Pestaña 5
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-16"
          type="button"
          role="tab"
          aria-controls="tab-content-16"
          aria-selected="false"
          id="tab-16"
        >
          <div className="nav-icon">
            Pestaña 6
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-17"
          type="button"
          role="tab"
          aria-controls="tab-content-17"
          aria-selected="false"
          id="tab-17"
        >
          <div className="nav-icon">
            Pestaña 7
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-18"
          type="button"
          role="tab"
          aria-controls="tab-content-18"
          aria-selected="false"
          id="tab-18"
        >
          <div className="nav-icon">
            Pestaña 8
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-19"
          type="button"
          role="tab"
          aria-controls="tab-content-19"
          aria-selected="false"
          id="tab-19"
        >
          <div className="nav-icon">
            Pestaña 9
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#tab-content-20"
          type="button"
          role="tab"
          aria-controls="tab-content-20"
          aria-selected="false"
          id="tab-20"
        >
          <div className="nav-icon">
            Pestaña 10
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
    </ul>
    <div className="tabs-controls">
      <button className="prev-next" id="prev-tab">
        <span className="material-symbols-rounded">
          chevron_left
        </span>
      </button>
      <button className="prev-next" id="next-tab">
        <span className="material-symbols-rounded">
          chevron_right
        </span>
      </button>
    </div>
  </nav>
  <div className="tab-content" id="tab-content-set-2">
    <div
      className="tab-pane fade show active"
      id="tab-content-11"
      role="tabpanel"
      aria-labelledby="tab-11"
    >
      Contenido Pestaña 1
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-12"
      role="tabpanel"
      aria-labelledby="tab-12"
    >
      Contenido Pestaña 2
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-13"
      role="tabpanel"
      aria-labelledby="tab-13"
    >
      Contenido Pestaña 3
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-14"
      role="tabpanel"
      aria-labelledby="tab-14"
    >
      Contenido Pestaña 4
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-15"
      role="tabpanel"
      aria-labelledby="tab-15"
    >
      Contenido Pestaña 5
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-16"
      role="tabpanel"
      aria-labelledby="tab-16"
    >
      Contenido Pestaña 6
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-17"
      role="tabpanel"
      aria-labelledby="tab-17"
    >
      Contenido Pestaña 7
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-18"
      role="tabpanel"
      aria-labelledby="tab-18"
    >
      Contenido Pestaña 8
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-19"
      role="tabpanel"
      aria-labelledby="tab-19"
    >
      Contenido Pestaña 9
    </div>
    <div
      className="tab-pane fade"
      id="tab-content-20"
      role="tabpanel"
      aria-labelledby="tab-20"
    >
      Contenido Pestaña 10
    </div>
  </div>
`;

export const TABS_WITH_BOX = `
<div className="container bg-light py-4">
  <nav className="tabs-box" aria-label="Navegación por pestañas">
    <ul className="nav nav-pills tabs nav-box-bg" id="unique-tab-set" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#unique-content-1"
          type="button"
          role="tab"
          aria-controls="unique-content-1"
          aria-selected="true"
          id="unique-tab-1"
        >
          <div className="nav-icon">
            Pestaña 1
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#unique-content-2"
          type="button"
          role="tab"
          aria-controls="unique-content-2"
          aria-selected="false"
          id="unique-tab-2"
        >
          <div className="nav-icon">
            Pestaña 2
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#unique-content-3"
          type="button"
          role="tab"
          aria-controls="unique-content-3"
          aria-selected="false"
          id="unique-tab-3"
          disabled
        >
          <div className="nav-icon">
            Pestaña 3
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#unique-content-4"
          type="button"
          role="tab"
          aria-controls="unique-content-4"
          aria-selected="false"
          id="unique-tab-4"
        >
          <div className="nav-icon">
            Pestaña 4
            <span className="material-symbols-rounded o-icon">
              home
            </span>
          </div>
        </button>
      </li>
    </ul>
  </nav>
  <div className="tab-content" id="unique-tab-content">
    <div
      className="tab-pane fade show active"
      id="unique-content-1"
      role="tabpanel"
      aria-labelledby="unique-tab-1"
    >
      Contenido Pestaña 1
    </div>
    <div
      className="tab-pane fade"
      id="unique-content-2"
      role="tabpanel"
      aria-labelledby="unique-tab-2"
    >
      Contenido Pestaña 2
    </div>
    <div
      className="tab-pane fade"
      id="unique-content-3"
      role="tabpanel"
      aria-labelledby="unique-tab-3"
    >
      Contenido Pestaña 3
    </div>
    <div
      className="tab-pane fade"
      id="unique-content-4"
      role="tabpanel"
      aria-labelledby="unique-tab-4"
    >
      Contenido Pestaña 4
    </div>
  </div>
</div>
`;
