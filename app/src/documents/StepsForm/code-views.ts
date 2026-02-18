export const STEPS_FORM = `
<div class="stepper-content">
  <div class="stepper">
    <h2 class="step-title">Nombre del paso</h2>
    <p class="step-subtitle">Paso siguiente: Nombre del paso 3</p>
    <div class="steps">
      <div class="steps-items">
        <div class="steps-item active"></div>
        <div class="steps-item active"></div>
        <div class="steps-item"></div>
        <div class="steps-item"></div>
        <div class="steps-item"></div>
      </div>
      <span class="steps-detail">Paso 2 de 5</span>
    </div>
  </div>
</div>
`;
export const STEPS_FORM_VOLANTA = `
<div class="stepper-content">
  <div class="stepper">
    <p class="step-volanta">Volanta con información adicional</p>
    <h2 class="step-title">Nombre del paso</h2>
    <p class="step-subtitle">Paso siguiente: Nombre del paso 3</p>
    <div class="steps">
      <div class="steps-items">
        <div class="steps-item active"></div>
        <div class="steps-item active"></div>
        <div class="steps-item"></div>
        <div class="steps-item"></div>
        <div class="steps-item"></div>
      </div>
      <span class="steps-detail">Paso 2 de 5</span>
    </div>
  </div>
</div>
`;

export const STEPS_FORM_LOGIC = `
<div class="stepper-content">
  <div class="stepper">
    <h2 class="step-title">Nombre del paso</h2>
		<div class="step-content">
			<p class="step-subtitle">Paso siguiente: Nombre del paso 1</p>
		</div>
		<div class="step-content">
			<p class="step-subtitle">Paso siguiente: Nombre del paso 2</p>
		</div>
		<div class="step-content">
			<p class="step-subtitle">Paso siguiente: Nombre del paso 3</p>
		</div>
		<div class="step-content">
			<p class="step-subtitle">Paso siguiente: Nombre del paso 4</p>
		</div>
		<div class="step-content">
			<p class="step-subtitle">Paso siguiente: Nombre del paso 5</p>
		</div>
    <div class="steps">
      <div class="steps-items">
        <div class="steps-item"></div>
        <div class="steps-item"></div>
        <div class="steps-item"></div>
        <div class="steps-item"></div>
        <div class="steps-item"></div>
      </div>
      <span class="steps-detail">Paso 2 de 5</span>
    </div>
  </div>
	<div class="d-flex justify-content-start gap-2 ps-3 pt-2">
		<button type="button" class="btn btn-outline-primary" id="stepper-prev">
			Anterior
		</button>
		<button type="button" class="btn btn-outline-primary" id="stepper-next">
			Siguiente
		</button>
	</div>
</div>
`;

export const STEPS_FORM_LOGIC_JS = `
const totalSteps = 5;
let currentStep = 1;

const stepsContent = document.querySelectorAll('.step-content');
const stepsItems = document.querySelectorAll('.steps-item');
const stepsDetail = document.querySelector('.steps-detail');
const prevButton = document.querySelector('#stepper-prev');
const nextButton = document.querySelector('#stepper-next');

function updateStepper() {
  stepsItems.forEach((item, index) => {
    if (index < currentStep) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

	stepsContent.forEach((item, index) => {
    if (index === currentStep - 1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  stepsDetail.textContent = \`Paso \${currentStep} de \${totalSteps}\`;
  prevButton.disabled = currentStep === 1;
  nextButton.disabled = currentStep === totalSteps;
}

prevButton.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    updateStepper();
  }
});

nextButton.addEventListener('click', () => {
  if (currentStep < totalSteps) {
    currentStep++;
    updateStepper();
  }
});

updateStepper();
`;
