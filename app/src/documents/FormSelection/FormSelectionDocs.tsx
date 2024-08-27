import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import CodeCopy from "@/components/CodeCopy";
import {
  CHECKBOX,
  CHECKBOX_DISABLED,
  CHECKBOX_NO_TEXT,
  CHECKBOX_TERMS,
  RADIO,
  RADIO_DISABLED,
} from "./code-views";
import MainDescription from "@/components/Template/MainDescription";

const FormSelectionDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      title: "Casillas de selección (Radio y Checkbox)",
      h1: true,
      content: (
        <MainDescription description="Las casillas de selección permiten a los usuarios elegir entre opciones únicas o múltiples. Radio se usa para seleccionar solo una opción dentro de un grupo, mientras que Checkbox permite seleccionar varias opciones a la vez." />
      ),
    },
    {
      id: "section-2",
      title: "Casilla única (Radio)",
      content: (
        <div className="">
          <p className="headline-md">Seleccioná una opción *</p>
          <div className="form-radio">
            <label className="form-radio-label" htmlFor="profession-radio-designer">
              <input
                className="form-radio-input"
                type="radio"
                name="professionRadio"
                id="profession-radio-designer"
                value="diseñador"
                defaultChecked={true}
              />
              <span className="form-radio-text">Diseñador</span>
            </label>
          </div>
          <div className="form-radio">
            <label className="form-radio-label" htmlFor="profession-radio-developer">
              <input
                className="form-radio-input"
                type="radio"
                name="professionRadio"
                id="profession-radio-developer"
                value="desarrollador"
              />
              <span className="form-radio-text">Desarrollador</span>
            </label>
          </div>
          <div className="form-radio">
            <label className="form-radio-label" htmlFor="profession-radio-content">
              <input
                className="form-radio-input"
                type="radio"
                name="professionRadio"
                id="profession-radio-content"
                value="redactor"
    
              />
              <span className="form-radio-text">Redactor de contenidos</span>
            </label>
          </div>
          <div className="form-radio">
            <label className="form-radio-label" htmlFor="profession-radio-validation">
              <input
                className="form-radio-input is-invalid"
                type="radio"
                name="professionRadio"
                id="profession-radio-validation"
                value="validacion"
              />
              <span className="form-radio-text">Validación</span>
            </label>
          </div>
          <br />
          <CodeCopy code={RADIO} />
        </div>
      ),
    },
    {
      id: "section-3",
      title: "Casilla única Deshabilitada",
      content: (
        <>
          <div className="form-radio">
            <label className="form-radio-label" htmlFor="radio-disabled" aria-disabled="true">
              <input
                className="form-radio-input"
                type="radio"
                name="radioDisabled"
                id="radio-disabled"
                value="validacion"
                disabled
              />
              <span className="form-radio-text">Deshabilitado</span>
            </label>
          </div>
          <div className="form-radio">
            <label className="form-radio-label" htmlFor="radio-disabled-checked" aria-disabled="true">
              <input
                className="form-radio-input"
                type="radio"
                name="radioDisabled"
                id="radio-disabled-checked"
                value="validacion"
                disabled
                checked
              />
              <span className="form-radio-text">Deshabilitado</span>
            </label>
          </div>
          <br />
          <CodeCopy code={RADIO_DISABLED} />
        </>
      ),
    },
    {
      id: "section-4",
      title: "Casilla de selección múltiple (Checkbox)",
      content: (
        <div>
          <p className="headline-md">Seleccioná una o varias opciones *</p>
          <div className="form-checkbox">
            <label className="form-checkbox-label" htmlFor="profession-checkbox-designer">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="professionCheckbox"
                id="profession-checkbox-designer"
                value="diseñador"
                defaultChecked={true}
              />
              <span className="form-checkbox-text">Diseñador</span>
            </label>
          </div>
          <div className="form-checkbox">
            <label className="form-checkbox-label" htmlFor="profession-checkbox-developer">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="professionCheckbox"
                id="profession-checkbox-developer"
                value="desarrollador"
              />
              <span className="form-checkbox-text">Desarrollador</span>
            </label>
          </div>
          <div className="form-checkbox">
            <label className="form-checkbox-label" htmlFor="profession-checkbox-content">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="professionCheckbox"
                id="profession-checkbox-content"
                value="redactor"
              />
              <span className="form-checkbox-text">Redactor de contenidos</span>
            </label>
          </div>
          <div className="form-checkbox">
            <label className="form-checkbox-label" htmlFor="profession-checkbox-validation">
              <input
                className="form-checkbox-input is-invalid"
                type="checkbox"
                name="professionCheckbox"
                id="profession-checkbox-validation"
                value="invalido"
              />
              <span className="form-checkbox-text">Inválido</span>
            </label>
          </div>
          <br />
          <CodeCopy code={CHECKBOX} />
        </div>
      ),
    },
    {
      id: "section-5",
      title: "Casilla de selección múltiple sin texto",
      content: (
        <>
        <div className="form-checkbox">
            <label className="form-checkbox-label" htmlFor="checkbox-no-text" aria-label="Casilla múltiple sin texto">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="checkboxNoText"
                id="checkbox-no-text"
                value="Sin texto"
              />
            </label>
          </div>
          <br />
          <CodeCopy code={CHECKBOX_NO_TEXT} />
        </>
      ),
    },
    {
      id: "section-6",
      title: "Casilla 'Términos y condiciones'",
      content: (
        <>
          <div className="form-checkbox">
            <label className="form-checkbox-label" htmlFor="checkbox-terms" aria-label="Casilla múltiple sin texto">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="checkboxTerms"
                id="checkbox-terms"
                value="copywrite"
              />
              <span className="form-checkbox-text">Acepto los <a href="#">términos y condiciones</a></span>
            </label>
          </div>
          <br />
          <CodeCopy code={CHECKBOX_TERMS} />
        </>
      ),
    },
    {
      id: "section-7",
      title: "Casilla de selección múltiple deshabilitada",
      content: (
        <>
          <div className="form-checkbox" >
            <label className="form-checkbox-label" htmlFor="disabled-checkbox" aria-disabled="true">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="checkboxDisabled"
                id="disabled-checkbox"
                value="disabled"
                disabled
              />
              <span className="form-checkbox-text">Deshabilitado</span>
            </label>
          </div>
          <div className="form-checkbox" >
            <label className="form-checkbox-label" htmlFor="disabled-checkbox-checked" aria-checked="true">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="checkboxDisabled"
                id="disabled-checkbox-checked"
                value="disabled"
                disabled
                checked
              />
              <span className="form-checkbox-text">Deshabilitado</span>
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

export default FormSelectionDocs;
