import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import CodeCopy from "@/components/CodeBox";
import {
  CHECKBOX,
  CHECKBOX_DISABLED,
  CHECKBOX_NO_TEXT,
  CHECKBOX_RADIO_POSITION,
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
      h1: true,
    },
    {
      id: "section-2",
      title: "Casilla única (Radio)",
      content: (
        <div className="">
          <p className="headline-md">Seleccioná una opción *</p>
          <div className="form-radio">
            <input
              className="form-radio-input"
              type="radio"
              name="professionRadio"
              id="profession-radio-designer"
              value="diseñador"
              defaultChecked={true}
              />
            <label className="form-radio-label" htmlFor="profession-radio-designer">
              Diseñador
            </label>
          </div>
          <div className="form-radio">
            <input
              className="form-radio-input"
              type="radio"
              name="professionRadio"
              id="profession-radio-developer"
              value="desarrollador"
              />
            <label className="form-radio-label" htmlFor="profession-radio-developer">
              Desarrollador
            </label>
          </div>
          <div className="form-radio">
            <input
              className="form-radio-input"
              type="radio"
              name="professionRadio"
              id="profession-radio-content"
              value="redactor"
              />
            <label className="form-radio-label" htmlFor="profession-radio-content">
              Redactor de contenidos
            </label>
          </div>
          <div className="form-radio">
            <input
              className="form-radio-input is-invalid"
              type="radio"
              name="professionRadio"
              id="profession-radio-validation"
              value="validacion"
              />
            <label className="form-radio-label" htmlFor="profession-radio-validation">
              Validación
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
            <input
                className="form-radio-input"
                type="radio"
                name="radioDisabled"
                id="radio-disabled"
                value="validacion"
                disabled
              />
            <label className="form-radio-label" htmlFor="radio-disabled" aria-disabled="true">
              Deshabilitado
            </label>
          </div>
          <div className="form-radio">
            <input
              className="form-radio-input"
              type="radio"
              name="radioDisabled"
              id="radio-disabled-checked"
              value="validacion"
              disabled
              checked
              />
            <label className="form-radio-label" htmlFor="radio-disabled-checked" aria-disabled="true">
              Deshabilitado
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
            <input
              className="form-checkbox-input"
              type="checkbox"
              name="professionCheckbox"
              id="profession-checkbox-designer"
              value="diseñador"
              defaultChecked={true}
              />
            <label className="form-checkbox-label" htmlFor="profession-checkbox-designer">
              Diseñador
            </label>
          </div>
          <div className="form-checkbox">
            <input
              className="form-checkbox-input"
              type="checkbox"
              name="professionCheckbox"
              id="profession-checkbox-developer"
              value="desarrollador"
              />
            <label className="form-checkbox-label" htmlFor="profession-checkbox-developer">
              Desarrollador
            </label>
          </div>
          <div className="form-checkbox">
            <input
              className="form-checkbox-input"
              type="checkbox"
              name="professionCheckbox"
              id="profession-checkbox-content"
              value="redactor"
              />
            <label className="form-checkbox-label" htmlFor="profession-checkbox-content">
              Redactor de contenidos
            </label>
          </div>
          <div className="form-checkbox">
            <input
              className="form-checkbox-input is-invalid"
              type="checkbox"
              name="professionCheckbox"
              id="profession-checkbox-validation"
              value="invalido"
              />
            <label className="form-checkbox-label" htmlFor="profession-checkbox-validation">
              Inválido
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
            <input
              className="form-checkbox-input"
              type="checkbox"
              name="checkboxNoText"
              id="checkbox-no-text"
              value="Sin texto"
            />
            <label className="form-checkbox-label" htmlFor="checkbox-no-text" aria-label="Casilla múltiple sin texto">
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
            <input
              className="form-checkbox-input"
              type="checkbox"
              name="checkboxTerms"
              id="checkbox-terms"
              value="copywrite"
              />
            <label className="form-checkbox-label" htmlFor="checkbox-terms">
              Acepto los <a href="#">términos y condiciones</a>
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
            <input
              className="form-checkbox-input"
              type="checkbox"
              name="checkboxDisabled"
              id="disabled-checkbox"
              value="disabled"
              disabled
              />
            <label className="form-checkbox-label" htmlFor="disabled-checkbox" aria-disabled="true">
              Deshabilitado
            </label>
          </div>
          <div className="form-checkbox" >
            <input
              className="form-checkbox-input"
              type="checkbox"
              name="checkboxDisabled"
              id="disabled-checkbox-checked"
              value="disabled"
              disabled
              checked
              />
            <label className="form-checkbox-label" htmlFor="disabled-checkbox-checked" aria-checked="true">
              Deshabilitado
            </label>
          </div>
          <br />
          <CodeCopy code={CHECKBOX_DISABLED} />
        </>
      ),
    },
    {
      id: "section-8",
      title: "Posicionamiento",
      content: (
        <>
          <div className="form-checkbox reverse">
            <input
              className="form-checkbox-input"
              type="checkbox"
              name="checkboxPosition"
              id="checkbox-position"
              value="redactor"
              />
            <label className="form-checkbox-label" htmlFor="checkbox-position">
              Checkbox posicionado a la derecha
            </label>
          </div>
          <div className="form-radio reverse">
            <input
              className="form-radio-input"
              type="radio"
              name="radioPosition"
              id="radio-position"
              value="redactor"
              />
            <label className="form-radio-label" htmlFor="radio-position">
              Radio posicionado a la derecha
            </label>
          </div>
          <br />
          <CodeCopy code={CHECKBOX_RADIO_POSITION} />
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default FormSelectionDocs;
