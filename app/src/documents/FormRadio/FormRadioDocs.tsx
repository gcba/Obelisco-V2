import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import CodeCopy from "@/components/CodeBox";
import {
  CHECKBOX,
  CHECKBOX_DISABLED,
  RADIO,
  RADIO_DISABLED,
} from "./code-views";
import MainDescription from "@/components/Template/MainDescription";

const FormRadioDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      title: "Introducción",
      content: (
        <MainDescription description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga praesentium qui libero illum. Deleniti exercitationem at labore nam." />
      ),
    },
    {
      id: "section-2",
      title: "Casilla única",
      content: (
        <div className="">
          <p className="headline-md">Seleccioná una opción *</p>
          <div className="form-check">
            <label className="form-check-label" htmlFor="profession-designer">
              <input
                className="form-check-input"
                type="radio"
                name="profession"
                id="profession-designer"
                value="diseñador"
                defaultChecked={true}
              />
              <span className="form-check-text">Diseñador</span>
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="profession-developer">
              <input
                className="form-check-input"
                type="radio"
                name="profession"
                id="profession-developer"
                value="desarrollador"
              />
              <span className="form-check-text">Desarrollador</span>
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="profession-content">
              <input
                className="form-check-input"
                type="radio"
                name="profession"
                id="profession-content"
                value="redactor"
              />
              <span className="form-check-text">Redactor de contenidos</span>
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="validation-content">
              <input
                className="form-check-input is-invalid"
                type="radio"
                name="profession"
                id="validation-content"
                value="invalido"
              />
              <span className="form-check-text">Inválido</span>
            </label>
          </div>
          <br />
          <CodeCopy code={RADIO} />
        </div>
      ),
    },
    {
      id: "section-3",
      title: "Deshabilitado",
      content: (
        <>
          <div className="form-check">
            <label
              className="form-check-label"
              htmlFor="disabled"
              aria-disabled="true"
            >
              <input
                className="form-check-input"
                type="radio"
                name="profession"
                id="disabled"
                value="disabled"
                disabled
              />
              <span className="form-check-text">Deshabilitado</span>
            </label>
          </div>
          <br />
          <CodeCopy code={RADIO_DISABLED} />
        </>
      ),
    },
    {
      id: "section-4",
      title: "Casilla de selección múltiple",
      content: (
        <div className="">
          {/* <div className="col-4">
          <div className="form-check form-checkbox">
            <label className="form-check-label" htmlFor="skills-copywrite">
              <input
                className="form-check-input"
                type="checkbox"
                name="skills"
                id="skills-copywrite"
                value="redaccion"
                defaultChecked={true}
              />
              <span className="form-check-text">Redacción Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ipsam repudiandae impedit illum deserunt eum</span>
            </label>
          </div>
          </div> */}
          <p className="headline-md">Seleccioná una o varias opciones *</p>
          <div className="form-check form-checkbox">
            <label className="form-check-label" htmlFor="skills-copywrite">
              <input
                className="form-check-input"
                type="checkbox"
                name="skills"
                id="skills-copywrite"
                value="redaccion"
                defaultChecked={true}
              />
              <span className="form-check-text">Redacción</span>
            </label>
          </div>
          <div className="form-check form-checkbox">
            <label className="form-check-label" htmlFor="skills-design">
              <input
                className="form-check-input"
                type="checkbox"
                name="skills"
                id="skills-design"
                value="diseño"
              />
              <span className="form-check-text">Diseño</span>
            </label>
          </div>
          <div className="form-check form-checkbox">
            <label className="form-check-label" htmlFor="skills-development">
              <input
                className="form-check-input"
                type="checkbox"
                name="skills"
                id="skills-development"
                value="desarrollo"
              />
              <span className="form-check-text">Desarrollo</span>
            </label>
          </div>
          <div className="form-check form-checkbox">
            <label className="form-check-label" htmlFor="validation-content-check">
              <input
                className="form-check-input is-invalid"
                type="checkbox"
                name="skills"
                id="validation-content-check"
                value="invalido"
              />
              <span className="form-check-text">Inválido</span>
            </label>
          </div>
          
          <br />
          <CodeCopy code={CHECKBOX} />
        </div>
      ),
    },
    {
      id: "section-5",
      title: "Sin texto",
      content: (
        <>
          <div className="form-check form-checkbox">
            <label className="form-check-label" htmlFor="skills-no-text">
              <input
                className="form-check-input"
                type="checkbox"
                name="skills"
                id="skills-no-text"
                value="sin texto"
              />
            </label>
          </div>
          <br />
          <CodeCopy code={CHECKBOX_DISABLED} />
        </>
      ),
    },
    {
      id: "section-6",
      title: "Deshabilitado",
      content: (
        <>
          <div className="form-check form-checkbox">
            <label className="form-check-label" htmlFor="disabled" aria-disabled="true">
              <input
                className="form-check-input"
                type="checkbox"
                name="skills"
                id="disabled"
                value="invalido"
                disabled
              />
              <span className="form-check-text">Inválido</span>
            </label>
          </div>
          <div className="form-check form-checkbox">
            <label className="form-check-label" htmlFor="disabled-check" aria-disabled="true">
              <input
                className="form-check-input"
                type="checkbox"
                name="skills"
                id="disabled-check"
                value="invalido"
                disabled
                defaultChecked={true}
              />
              <span className="form-check-text">Inválido</span>
            </label>
          </div>
          <br />
          <CodeCopy code={CHECKBOX_DISABLED} />
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default FormRadioDocs;
