import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  COLLAPSE,
  COLLAPSE_ICON,
  COLLAPSE_ICON_LABEL,
  COLLAPSE_INFO,
  COLLAPSE_LIST,
  COLLAPSE_MULTIPLE,
  COLLAPSE_WHITE,
} from './code-views';

const CollapseDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Selección única',
      firstTitle: true,
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
                <div
                  id="collapseOneUniqueSelection"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionUniqueSelection"
                >
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
                <div
                  id="collapseTwoUniqueSelection"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionUniqueSelection"
                >
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
                <div
                  id="collapseThreeUniqueSelection"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionUniqueSelection"
                >
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
      title: 'Selección múltiple',
      content: (
        <CodeBox codeHTML={COLLAPSE_MULTIPLE}>
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
      title: 'Encabezado',
    },
    {
      subtitle: 'Con icono',
      content: (
        <CodeBox codeHTML={COLLAPSE_ICON}>
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
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    topic
                  </span>
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
      subtitle: 'Con volanta, descripción e icono',
      content: (
        <CodeBox codeHTML={COLLAPSE_ICON_LABEL}>
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
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    topic
                  </span>
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
      subtitle: 'Con fondo blanco',
      content: (
        <CodeBox codeHTML={COLLAPSE_WHITE}>
          <div className="container">
            <div className="accordion">
              <div className="accordion-item item-white">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHeaderWhite"
                  aria-expanded="false"
                  aria-controls="collapseHeaderWhite"
                >
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    topic
                  </span>
                  <span className="collapse-label">Volanta</span>
                  <span className="collapse-title">Título</span>
                  <span className="collapse-subtitle">Descripción</span>
                </button>
                <div id="collapseHeaderWhite" className="accordion-collapse collapse">
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
      title: 'Contenido',
    },
    {
      subtitle: 'Con lista seleccionable',
      content: (
        <CodeBox codeHTML={COLLAPSE_LIST}>
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
                        <input className="form-radio-input" type="radio" name="credit_card" id="visa" />
                        <label className="form-radio-label" htmlFor="visa">
                          <div className="label-content">
                            <i className="bx bxl-visa label-icon"></i>
                            <small className="label-top">Volanta</small>
                            <span className="label-title">Visa Débito ****1234</span>
                            <small className="label-subtitle">Heraldo Paez</small>
                          </div>
                        </label>
                      </div>
                      <hr />
                      <div className="form-radio reverse">
                        <input className="form-radio-input" type="radio" name="credit_card" id="master" />
                        <label className="form-radio-label" htmlFor="master">
                          <div className="label-content">
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
      subtitle: 'Con información',
      content: (
        <CodeBox codeHTML={COLLAPSE_INFO}>
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
  ];

  return (
    <>
      <ComponentHeader
        title="Colapsables"
        description={[
          'Los colapsables sirven para mostrar y ocultar secciones de contenido relacionado en una página, lo que mejora la experiencia de las personas usuarias.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a
              href="https://gcba.github.io/estandares/componentes/colapsable/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visitar la documentación en Obelisco v.1
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default CollapseDocs;
