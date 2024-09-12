import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import {
  CHECKBOX,
  CHECKBOX_DISABLED,
  CHECKBOX_NO_TEXT,
  CHECKBOX_RADIO_POSITION,
  CHECKBOX_TERMS,
  RADIO,
  RADIO_DISABLED,
} from './code-views';

const FormSelectionDocs: React.FC = () => {
  const sections = [
    {
      title: 'Casillas de selección (Radio y Checkbox)',
      h1: true,
      content: (
        <MainDescription description="Las casillas de selección permiten a los usuarios elegir entre opciones únicas o múltiples. Radio se usa para seleccionar solo una opción dentro de un grupo, mientras que Checkbox permite seleccionar varias opciones a la vez." />
      ),
    },
    {
      id: 'section-1',
      title: 'Casilla de selección única (Radio)',
      content: (
        <CodeBox codeHTML={RADIO}>
          <div className="container">
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
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Casilla de selección única deshabilitada',
      content: (
        <CodeBox codeHTML={RADIO_DISABLED}>
          <div className="container">
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
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-3',
      title: 'Casilla de selección múltiple (Checkbox)',
      content: (
        <CodeBox codeHTML={CHECKBOX}>
          <div className="container">
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
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-4',
      title: 'Casilla de selección múltiple sin texto',
      content: (
        <CodeBox codeHTML={CHECKBOX_NO_TEXT}>
          <div className="container">
            <div className="form-checkbox">
              <input
                className="form-checkbox-input"
                type="checkbox"
                name="checkboxNoText"
                id="checkbox-no-text"
                value="Sin texto"
              />
              <label
                className="form-checkbox-label"
                htmlFor="checkbox-no-text"
                aria-label="Casilla múltiple sin texto"
              ></label>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-5',
      title: "Casilla 'Términos y condiciones'",
      content: (
        <CodeBox codeHTML={CHECKBOX_TERMS}>
          <div className="container">
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
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-6',
      title: 'Casilla de selección múltiple deshabilitada',
      content: (
        <CodeBox codeHTML={CHECKBOX_DISABLED}>
          <div className="container">
            <div className="form-checkbox">
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
            <div className="form-checkbox">
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
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-7',
      title: 'Posicionamiento',
      content: (
        <CodeBox codeHTML={CHECKBOX_RADIO_POSITION}>
          <div className="container">
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
          </div>
        </CodeBox>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default FormSelectionDocs;
