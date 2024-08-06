export const EGcodeSimpleNavHorizontal =
  `
  <nav>
    <ul class="nav flex-row nav-pills">
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
        <a class="nav-link disabled" href="#" aria-disabled="true" tabIndex={-1}>
          <span>Deshabilitado</span>
        </a>
      </li>
    </ul>
  </nav>
`;

export const EGcodeWithIconHorizontal =
  `
  <nav>
    <ul class="nav flex-row nav-pills">
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
        <a class="nav-link disabled" href="#" aria-disabled="true" tabindex="-1">
          <div class="nav-icon">
            <i class="bx bxs-user-circle"></i>
            <span>Deshabilitado</span>
          </div>
        </a>
      </li>
    </ul>
  </nav>
  <br />
  <nav>
    <ul class="nav flex-row nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-icon">
            <span>Link</span>
            <i class="bx bxs-user-circle"></i>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">
          <div class="nav-icon">
            <span>Activo</span>
            <i class="bx bxs-user-circle"></i>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-icon">
            <span>Link</span>
            <i class="bx bxs-user-circle"></i>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" aria-disabled="true" tabindex="-1">
          <div class="nav-icon">
            <span>Deshabilitado</span>
            <i class="bx bxs-user-circle"></i>
          </div>
        </a>
      </li>
    </ul>
  </nav>

`

export const EGcodeSizesHorizontal = `
  <nav>
    <ul class="nav flex-row nav-pills">
      <li class="nav-item">
        <a class="nav-link nav-link-lg border-link" href="#"><span>Link</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link border-link" href="#"><span>Link</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-link-sm border-link" href="#"><span>Link</span></a>
      </li>
    </ul>
  </nav>
`;
