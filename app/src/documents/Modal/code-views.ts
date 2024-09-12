export const MODAL_CONFIRM = `<button 
  type="button" 
  class="btn btn-primary" 
  data-bs-toggle="modal" 
  data-bs-target="#exampleModal1"
>
  Modal de confirmación
</button>
<div class="modal fade" tabindex="-1" id="exampleModal1">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">¡Importante!</h4>
      </div>
      <div class="modal-body">
        <p>
          Antes de realizar la ficha de salud, 
          tené en cuenta haber realizado los pasos previos correspondientes.
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">
          Volver atrás
        </button>
        <button type="button" class="btn btn-primary">Continuar</button>
      </div>
    </div>
  </div>
</div>`;

export const MODAL_DANGER = `<button 
  type="button" 
  class="btn btn-primary" 
  data-bs-toggle="modal" 
  data-bs-target="#exampleModal2"
>
  Modal de peligro
</button>
<div class="modal fade" tabindex="-1" id="exampleModal2">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Eliminar documento</h4>
      </div>
      <div class="modal-body">
        <p>El documento que seleccionaste será eliminado.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          Cancelar
        </button>
        <button type="button" class="btn btn-danger">Eliminar</button>
      </div>
    </div>
  </div>
</div>`;

export const MODAL_RECOGNITION = `<button 
  type="button" 
  class="btn btn-primary" 
  data-bs-toggle="modal" 
  data-bs-target="#exampleModal3"
>
  Modal de reconocimiento
</button>
<div class="modal fade" tabindex="-1" id="exampleModal3">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <div class="modal-content">
      <div class="modal-header unbordered">
        <small>CARGA EXITOSA</small>
        <h4 class="modal-title">Los archivos se cargaron correctamente</h4>
      </div>
      <div class="modal-footer">
        <button 
          type="button" 
          class="btn btn-primary" 
          data-bs-dismiss="modal"
        >
          Aceptar
        </button>
      </div>
    </div>
  </div>
</div>`;
