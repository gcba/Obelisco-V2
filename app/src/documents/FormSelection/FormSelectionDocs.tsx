import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  CHECKBOX,
  CHECKBOX_DISABLED,
  CHECKBOX_GROUP,
  CHECKBOX_NO_TEXT,
  CHECKBOX_RADIO_POSITION,
  CHECKBOX_TERMS,
  RADIO,
  RADIO_DISABLED,
  RADIO_GROUP,
  RADIO_NO_TEXT
} from './code-views';

const FormSelectionDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Casilla de selección única (Radio)',
      firstTitle: true,
    },
    {
      subtitle: 'Predeterminada',
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
      subtitle: 'Radio Group',
      content: (
        <CodeBox codeHTML={RADIO_GROUP}>
          <div className="container">
          <div className="col-12 col-lg-6">
          <div className="form-label-container">
            <label htmlFor="exampleInputRadioGroup" className="form-label">
              Ejemplo Radio Group
            </label>
            <span className="badge-forms badge-optional-forms">Opcional</span>
          </div>
          <p className="form-label-description">
            Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
            no más de 3 líneas.
          </p>
            <div className="form-radio">
              <input
                className="form-radio-input"
                type="radio"
                name="exampleInputRadioGroup"
                id="opcion_1"
                value="etiqueta"
              />
              <label className="form-radio-label" htmlFor="opcion_1">
                Etiqueta 1
              </label>
            </div>
            <div className="form-radio">
              <input
                className="form-radio-input"
                type="radio"
                name="professionRadio"
                id="opcion_2"
                value="etiqueta"

              />
              <label className="form-radio-label" htmlFor="opcion_2">
                Etiqueta 2
              </label>
            </div>
            <div className="form-radio">
              <input
                className="form-radio-input"
                type="radio"
                name="professionRadio"
                id="opcion_3"
                value="etiqueta"
              />
              <label className="form-radio-label" htmlFor="opcion_3">
                Etiqueta 3
              </label>
            </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Deshabilitada',
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
      subtitle: 'Sin texto',
      content: (
        <CodeBox codeHTML={RADIO_NO_TEXT}>
          <div className="container">
            <div className="form-radio">
              <input
                className="form-radio-input"
                type="radio"
                name="radioNoText"
                id="radio-no-text"
                value="Sin texto"
              />
              <label
                className="form-radio-label"
                htmlFor="radio-no-text"
                aria-label="Casilla múltiple sin texto"
              ></label>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Casilla de selección múltiple (Checkbox)',
    },
    {
      subtitle: 'Predeterminada',
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
      subtitle: 'Checkbox Group',
      content: (
        <CodeBox codeHTML={CHECKBOX_GROUP}>
          <div className="container">
            <div className="col-12 col-lg-6">
              <div className="form-label-container">
                <label htmlFor="exampleInputCheckboxGroup" className="form-label">
                  Ejemplo Checkbox Group
                </label>
                <span className="badge-forms badge-optional-forms">Opcional</span>
              </div>
              <p className="form-label-description">
                Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
                no más de 3 líneas.
              </p>
              <div className="form-checkbox">
                <input
                  className="form-checkbox-input"
                  type="checkbox"
                  name="exampleInputCheckboxGroup"
                  id="etiqueta_1"
                  value="etiqueta_1"
                  defaultChecked={true}
                />
                <label className="form-checkbox-label" htmlFor="etiqueta_1">
                  Etiqueta 1
                </label>
              </div>
              <div className="form-checkbox">
                <input
                  className="form-checkbox-input"
                  type="checkbox"
                  name="exampleInputCheckboxGroup"
                  id="etiqueta_2"
                  value="etiqueta_2"
                />
                <label className="form-checkbox-label" htmlFor="etiqueta_2">
                  Etiqueta 2
                </label>
              </div>
              <div className="form-checkbox">
                <input
                  className="form-checkbox-input"
                  type="checkbox"
                  name="exampleInputCheckboxGroup"
                  id="etiqueta_3"
                  value="etiqueta_3"
                />
                <label className="form-checkbox-label" htmlFor="etiqueta_3">
                  Etiqueta 3
                </label>
              </div>
          </div>
        </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Deshabilitada',
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
      subtitle: 'Sin texto',
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
      subtitle: "Casilla 'Términos y condiciones'",
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

  return (
    <>
      <ComponentHeader
        title="Casillas de selección (Radio y Checkbox)"
        description={[
          'Las casillas de selección permiten a los usuarios elegir entre opciones únicas o múltiples. Radio se usa para seleccionar solo una opción dentro de un grupo, mientras que Checkbox permite seleccionar varias opciones a la vez.',
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default FormSelectionDocs;
