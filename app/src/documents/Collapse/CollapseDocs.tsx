import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { COLLAPSE } from './code-views';

const CollapseDocs: React.FC = () => {
  const sections = [
    {
      title: 'Colapsables',
      h1: true,
      content: (
        <div>
          <MainDescription description="Los colapsables sirven para mostrar y ocultar secciones de contenido relacionado en una página, lo que mejora la experiencia de las personas usuarias." />
        </div>
      ),
    },
    {
      id: 'section-1',
      title: 'Selección única',
      content: (
        <CodeBox codeHTML={COLLAPSE}>
          <div className="container">
            <div className="accordion" id="accordionUniqueSelection">
              <div className="accordion-item">
                <button
                  className="accordion-button collapsed"
                  type="button" 
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOneUniqueSelection"
                  aria-expanded="false" 
                  aria-controls="collapseOneUniqueSelection"
                >
                  <span className="collapse-label">Selección única</span>
                  <span className="collapse-title">Item colapsable #1</span>
                </button>
                <div id="collapseOneUniqueSelection" className="accordion-collapse collapse" data-bs-parent="#accordionUniqueSelection">
                  <div className="accordion-body">
                    <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <button
                  className="accordion-button collapsed"
                  type="button" 
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwoUniqueSelection"
                  aria-expanded="false" 
                  aria-controls="collapseTwoUniqueSelection"
                >
                  <span className="collapse-label">Selección única</span>
                  <span className="collapse-title">Item colapsable #2</span>
                </button>
                <div id="collapseTwoUniqueSelection" className="accordion-collapse collapse" data-bs-parent="#accordionUniqueSelection">
                  <div className="accordion-body">
                    <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <button
                  className="accordion-button collapsed"
                  type="button" 
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThreeUniqueSelection"
                  aria-expanded="false" 
                  aria-controls="collapseThreeUniqueSelection"
                >
                  <span className="collapse-label">Selección única</span>
                  <span className="collapse-title">Item colapsable #3</span>
                </button>
                <div id="collapseThreeUniqueSelection" className="accordion-collapse collapse" data-bs-parent="#accordionUniqueSelection">
                  <div className="accordion-body">
                    <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Selección múltiple',
      content: (
        <CodeBox codeHTML={COLLAPSE}>
          <div className="container">
            <div className="accordion">
              <div className="accordion-item">
                <button
                  className="accordion-button collapsed"
                  type="button" 
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOneMultipleSelection"
                  aria-expanded="false" 
                  aria-controls="collapseOneMultipleSelection"
                >
                  <span className="collapse-label">Selección múltiple</span>
                  <span className="collapse-title">Item colapsable #1</span>
                </button>
                <div id="collapseOneMultipleSelection" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <button
                  className="accordion-button collapsed"
                  type="button" 
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwoMultipleSelection"
                  aria-expanded="false" 
                  aria-controls="collapseTwoMultipleSelection"
                >
                  <span className="collapse-label">Selección múltiple</span>
                  <span className="collapse-title">Item colapsable #2</span>
                </button>
                <div id="collapseTwoMultipleSelection" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <button
                  className="accordion-button collapsed"
                  type="button" 
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThreeMultipleSelection"
                  aria-expanded="false" 
                  aria-controls="collapseThreeMultipleSelection"
                >
                  <span className="collapse-label">Selección múltiple</span>
                  <span className="collapse-title">Item colapsable #3</span>
                </button>
                <div id="collapseThreeMultipleSelection" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-3',
      title: 'Encabezado con icono',
      content: (
        <CodeBox codeHTML={COLLAPSE}>
          <div className="container">
            <div className="accordion">
              <div className="accordion-item">
                <button
                  className="accordion-button collapsed"
                  type="button" 
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHeaderIcon"
                  aria-expanded="false" 
                  aria-controls="collapseHeaderIcon"
                >
                  <i className="bx bxs-user-circle o-icon"></i>
                  <span className="collapse-title">Título</span>
                </button>
                <div id="collapseHeaderIcon" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-4',
      title: 'Encabezado con volanta, descripción e icono',
      content: (
        <CodeBox codeHTML={COLLAPSE}>
          <div className="container">
            <div className="accordion">
              <div className="accordion-item">
                <button
                  className="accordion-button collapsed"
                  type="button" 
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHeader"
                  aria-expanded="false" 
                  aria-controls="collapseHeader"
                >
                  <i className="bx bxs-user-circle o-icon"></i>
                  {/* <span className="material-symbols-rounded o-icon" aria-hidden="true">account_circle</span> */}
                  <span className="collapse-label">Volanta</span>
                  <span className="collapse-title">Título</span>
                  <span className="collapse-subtitle">Descripción</span>
                </button>
                <div id="collapseHeader" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <p>Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-6',
      title: 'Contenido con lista seleccionable',
      content: (
        <CodeBox codeHTML={COLLAPSE}>
          <div className="container">
            <div className="accordion">
              <div className="accordion-item">
                <button
                  className="accordion-button collapsed"
                  type="button" 
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseContentList"
                  aria-expanded="false" 
                  aria-controls="collapseContentList"
                >
                  <span className="collapse-title">Tarjeta de crédito / débito</span>
                  <span className="collapse-subtitle">VISA, MasterCard, AMEX, CABAL, Maestro</span>
                </button>
                <div id="collapseContentList" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <form className="accordion-form">
                      <div className="form-radio reverse">
                        <input
                          className="form-radio-input"
                          type="radio"
                          name="credit_card"
                          id="visa"
                        />
                        <label className="form-radio-label" htmlFor="visa">
                          <div className="label-content">
                            <i className="bx bxl-visa label-icon"></i>
                            <span className="label-title">Visa Débito ****1234</span>
                            <small className="label-subtitle">Heraldo Paez</small>
                          </div>
                        </label>
                      </div>
                      <hr />
                      <div className="form-radio reverse">
                        <input
                          className="form-radio-input"
                          type="radio"
                          name="credit_card"
                          id="master"
                        />
                        <label className="form-radio-label" htmlFor="master">
                          <div className="label-content">
                            {/* <img src="../../../../public/BA.svg" alt="" className='label-icon' /> */}
                            <i className="bx bxl-mastercard label-icon"></i>
                            <small className="label-top">Volanta</small>
                            <span className="label-title">MasterCard Crédito ****5678</span>
                            <small className="label-subtitle">Heraldo Paez</small>
                          </div>
                        </label>
                      </div>
                    </form>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-5',
      title: 'Contenido con información',
      content: (
        <CodeBox codeHTML={COLLAPSE}>
          <div className="container">
            <div className="accordion">
              <div className="accordion-item">
                <button
                  className="accordion-button collapsed"
                  type="button" 
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseContentInfo"
                  aria-expanded="false" 
                  aria-controls="collapseContentInfo"
                >
                  <span className="collapse-label">Total a pagar</span>
                  <span className="collapse-title">$450,00</span>
                </button>
                <div id="collapseContentInfo" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <small className="text-success">$200,00</small>
                    <span className="d-block headline-md">Solicitud de informes varios</span>
                    <small>Boleta N° 2549-48758798</small>
                    <hr />
                    <small className="text-success">$250,00</small>
                    <span className="d-block headline-md">Ecoparque</span>
                    <small>Boleta N° 2549-48758798</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-11',
      title: 'Slección única',
      content: (
        <CodeBox codeHTML={COLLAPSE}>
          <div className="container">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <button
                  className="accordion-button collapsed"
                  type="button" 
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false" 
                  aria-controls="collapseOne"
                >
                  <i className="bx bxs-user-circle o-icon"></i>
                  <span className="collapse-label">Volanta</span>
                  <span className="collapse-title">Título</span>
                  <span className="collapse-subtitle">Descripción</span>
                </button>
                {/* <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button> */}
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the second items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default CollapseDocs;
