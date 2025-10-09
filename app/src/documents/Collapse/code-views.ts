export const COLLAPSE = `
<div class="accordion" id="accordionUniqueSelection">
    <div class="accordion-item">
        <button
            class="accordion-button collapsed"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#collapseOneUniqueSelection"
            aria-expanded="false" 
            aria-controls="collapseOneUniqueSelection"
        >
            <span class="collapse-label">Selección única</span>
            <span class="collapse-title">Item colapsable #1</span>
        </button>
        <div id="collapseOneUniqueSelection" class="accordion-collapse collapse" data-bs-parent="#accordionUniqueSelection">
            <div class="accordion-body">
              <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <button
            class="accordion-button collapsed"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwoUniqueSelection"
            aria-expanded="false" 
            aria-controls="collapseTwoUniqueSelection"
        >
            <span class="collapse-label">Selección única</span>
            <span class="collapse-title">Item colapsable #2</span>
        </button>
        <div id="collapseTwoUniqueSelection" class="accordion-collapse collapse" data-bs-parent="#accordionUniqueSelection">
            <div class="accordion-body">
              <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <button
            class="accordion-button collapsed"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#collapseThreeUniqueSelection"
            aria-expanded="false" 
            aria-controls="collapseThreeUniqueSelection"
        >
            <span class="collapse-label">Selección única</span>
            <span class="collapse-title">Item colapsable #3</span>
        </button>
        <div id="collapseThreeUniqueSelection" class="accordion-collapse collapse" data-bs-parent="#accordionUniqueSelection">
            <div class="accordion-body">
              <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
            </div>
        </div>
    </div>
</div>
`;
export const COLLAPSE_MULTIPLE = `
<div class="accordion">
    <div class="accordion-item">
        <button
            class="accordion-button collapsed"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#collapseOneMultipleSelection"
            aria-expanded="false" 
            aria-controls="collapseOneMultipleSelection"
        >
            <span class="collapse-label">Selección múltiple</span>
            <span class="collapse-title">Item colapsable #1</span>
        </button>
        <div id="collapseOneMultipleSelection" class="accordion-collapse collapse">
            <div class="accordion-body">
                <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <button
            class="accordion-button collapsed"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwoMultipleSelection"
            aria-expanded="false" 
            aria-controls="collapseTwoMultipleSelection"
        >
            <span class="collapse-label">Selección múltiple</span>
            <span class="collapse-title">Item colapsable #2</span>
        </button>
        <div id="collapseTwoMultipleSelection" class="accordion-collapse collapse">
            <div class="accordion-body">
                <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <button
            class="accordion-button collapsed"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#collapseThreeMultipleSelection"
            aria-expanded="false" 
            aria-controls="collapseThreeMultipleSelection"
        >
            <span class="collapse-label">Selección múltiple</span>
            <span class="collapse-title">Item colapsable #3</span>
        </button>
        <div id="collapseThreeMultipleSelection" class="accordion-collapse collapse">
            <div class="accordion-body">
                <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
            </div>
        </div>
    </div>
</div>
`;
export const COLLAPSE_ICON = `
<div class="accordion">
    <div class="accordion-item">
        <button
            class="accordion-button collapsed"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#collapseHeaderIcon"
            aria-expanded="false" 
            aria-controls="collapseHeaderIcon"
        >
            <span class="material-symbols-rounded o-icon" aria-hidden="true">topic</span>
            <span class="collapse-title">Título</span>
        </button>
        <div id="collapseHeaderIcon" class="accordion-collapse collapse">
            <div class="accordion-body">
                <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
            </div>
        </div>
    </div>
</div>
`;
export const COLLAPSE_ICON_LABEL = `
<div class="accordion">
    <div class="accordion-item">
        <button
            class="accordion-button collapsed"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#collapseHeader"
            aria-expanded="false" 
            aria-controls="collapseHeader"
        >
            <span class="material-symbols-rounded o-icon" aria-hidden="true">topic</span>
            <span class="collapse-label">Volanta</span>
            <span class="collapse-title">Título</span>
            <span class="collapse-subtitle">Descripción</span>
        </button>
        <div id="collapseHeader" class="accordion-collapse collapse">
            <div class="accordion-body">
                <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
            </div>
        </div>
    </div>
</div>
`;
export const COLLAPSE_WHITE = `
<div class="accordion">
    <div class="accordion-item item-white">
        <button
            class="accordion-button collapsed"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#collapseHeaderWhite"
            aria-expanded="false" 
            aria-controls="collapseHeaderWhite"
        >
            <span class="material-symbols-rounded o-icon" aria-hidden="true">topic</span>
            <span class="collapse-label">Volanta</span>
            <span class="collapse-title">Título</span>
            <span class="collapse-subtitle">Descripción</span>
        </button>
        <div id="collapseHeaderWhite" class="accordion-collapse collapse">
            <div class="accordion-body">
                <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
            </div>
        </div>
    </div>
</div>
`;
export const COLLAPSE_LIST = `
<div class="accordion">
    <div class="accordion-item">
        <button
            class="accordion-button collapsed"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#collapseContentList"
            aria-expanded="false" 
            aria-controls="collapseContentList"
        >
            <span class="collapse-title">Tarjeta de crédito / débito</span>
            <span class="collapse-subtitle">VISA, MasterCard, AMEX, CABAL, Maestro</span>
        </button>
        <div id="collapseContentList" class="accordion-collapse collapse">
            <div class="accordion-body">
                <form class="accordion-form">
                    <div class="form-radio reverse">
                        <input
                            class="form-radio-input"
                            type="radio"
                            name="credit_card"
                            id="visa"
                        />
                        <label class="form-radio-label" for="visa">
                            <div class="label-content">
                            <i class="bx bxl-visa label-icon"></i>
                            <small class="label-top">Volanta</small>
                            <span class="label-title">Visa Débito ****1234</span>
                            <small class="label-subtitle">Heraldo Paez</small>
                            </div>
                        </label>
                    </div>
                    <hr />
                    <div class="form-radio reverse">
                        <input
                            class="form-radio-input"
                            type="radio"
                            name="credit_card"
                            id="master"
                        />
                        <label class="form-radio-label" for="master">
                            <div class="label-content">
                                <i class="bx bxl-mastercard label-icon"></i>
                                <small class="label-top">Volanta</small>
                                <span class="label-title">MasterCard Crédito ****5678</span>
                                <small class="label-subtitle">Heraldo Paez</small>
                            </div>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
`;
export const COLLAPSE_INFO = `
<div class="accordion">
    <div class="accordion-item">
        <button
            class="accordion-button collapsed"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#collapseContentInfo"
            aria-expanded="false" 
            aria-controls="collapseContentInfo"
        >
            <span class="collapse-label">Total a pagar</span>
            <span class="collapse-title">$450,00</span>
        </button>
        <div id="collapseContentInfo" class="accordion-collapse collapse">
            <div class="accordion-body">
                <small class="text-success">$200,00</small>
                <span class="d-block headline-md">Solicitud de informes varios</span>
                <small>Boleta N° 2549-48758798</small>
                <hr />
                <small class="text-success">$250,00</small>
                <span class="d-block headline-md">Ecoparque</span>
                <small>Boleta N° 2549-48758798</small>
            </div>
        </div>
    </div>
</div>
`;
