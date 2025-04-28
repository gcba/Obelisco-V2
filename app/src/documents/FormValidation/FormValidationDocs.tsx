import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  INPUT_VALIDATION_CHECKBOX_GROUP,
  INPUT_VALIDATION_DATE,
  INPUT_VALIDATION_MAIL,
  INPUT_VALIDATION_NUMBER,
  INPUT_VALIDATION_RADIO_GROUP,
  INPUT_VALIDATION_TEXT,
  INPUT_VALIDATION_TEXTAREA,
} from './code-views';

const FormValidationDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Validación',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={INPUT_VALIDATION_TEXT}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleInputText" className="form-label">
                    Label
                  </label>
                  <span className="badge-forms badge-required-forms">Requerido</span>
                </div>
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
                  no más de 3 líneas.
                </p>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="exampleInputTexto"
                  aria-describedby="Text"
                  placeholder="Texto"
                />
                <div className="invalid-feedback">
                  <p>Los datos introducidos son inválidos.</p>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_NUMBER}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleInputNumber" className="form-label">
                    Label
                  </label>
                  <span className="badge-forms badge-required-forms">Requerido</span>
                </div>
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
                  no más de 3 líneas.
                </p>
                <input
                  type="text"
                  className="form-control is-valid"
                  id="exampleInputNumber"
                  aria-describedby="Text"
                  placeholder="Texto"
                />
                <div className="valid-feedback ">
                  <p>Los datos introducidos son válidos.</p>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_MAIL}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleInputText" className="form-label">
                    Label
                  </label>
                  <span className="badge-forms badge-required-forms">Requerido</span>
                </div>
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
                  no más de 3 líneas.
                </p>
                <input
                  type="email"
                  className="form-control is-invalid"
                  id="ejemplo-3-1"
                  aria-describedby="Email"
                  placeholder="Email@test.com"
                  required
                />
                <div className="invalid-feedback ">
                  <p>Los datos introducidos son inválidos.</p>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_DATE}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="ejemplo-4" className="form-label">
                    Ejemplo campo de fecha
                  </label>
                  <span className="badge-forms badge-required-forms">Requerido</span>
                </div>
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
                  no más de 3 líneas.
                </p>
                <input
                  type="date"
                  className="form-control is-valid"
                  id="ejemplo-4"
                  aria-describedby="Date"
                  placeholder="selecciona tu fecha"
                  required
                />
                <div className="valid-feedback">
                  <p>El campo es válido.</p>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_TEXTAREA}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="ejemplo-5" className="form-label">
                    Ejemplo TextArea
                  </label>
                  <span className="badge-forms badge-required-forms">Requerido</span>
                </div>
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
                  no más de 3 líneas.
                </p>
                <textarea
                  className="form-control is-invalid"
                  id="ejemplo-5"
                  aria-describedby="TextArea"
                  required
                ></textarea>
                <div className="invalid-feedback">
                  <p>El campo es inválido</p>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_RADIO_GROUP}>
          <div className="container">
            <div className="col-12 col-lg-6">
          <div className="form-label-container">
            <label htmlFor="exampleInputRadioGroup" className="form-label">
              Ejemplo Radio Group
            </label>
            <span className="badge-forms badge-required-forms">Requerido</span>
          </div>
          <p className="form-label-description">
            Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
            no más de 3 líneas.
          </p>
            <div className="form-radio">
              <input
                className="form-radio-input is-invalid"
                type="radio"
                name="exampleInputRadioGroup"
                id="opcion_1"
                value="validacion"
                checked={false}
              />
              <label className="form-radio-label" htmlFor="opcion_1">
                Validación
              </label>
            </div>
            <div className="form-radio">
              <input
                className="form-radio-input is-invalid"
                type="radio"
                name="professionRadio"
                id="opcion_2"
                value="validacion"
              />
              <label className="form-radio-label" htmlFor="opcion_2">
                Validación
              </label>
            </div>
            <div className="form-radio">
              <input
                className="form-radio-input is-invalid"
                type="radio"
                name="professionRadio"
                id="opcion_3"
                value="validacion"
              />
              <label className="form-radio-label" htmlFor="opcion_3">
                Validación
              </label>
            </div>
            <div className="invalid-feedback">
                <p>Este es un mensaje de error para un campo inválido. </p>
              </div>
            </div>
          </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_CHECKBOX_GROUP}>
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
                  className="form-checkbox-input is-invalid"
                  type="checkbox"
                  name="exampleInputCheckboxGroup"
                  id="etiqueta_1"
                  value="etiqueta_1"
                  defaultChecked={false}
                />
                <label className="form-checkbox-label" htmlFor="etiqueta_1">
                  Etiqueta 1
                </label>
              </div>
              <div className="form-checkbox">
                <input
                  className="form-checkbox-input is-invalid"
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
                  className="form-checkbox-input is-invalid"
                  type="checkbox"
                  name="exampleInputCheckboxGroup"
                  id="etiqueta_3"
                  value="etiqueta_3"
                />
                <label className="form-checkbox-label" htmlFor="etiqueta_3">
                  Etiqueta 3
                </label>
              </div>
              <div className="invalid-feedback">
                <p>Este es un mensaje de error para un campo inválido. </p>
              </div>
          </div>
        </div>
        </CodeBox>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Validación"
        description={[
          'La validación de formularios garantiza la integridad y calidad de los datos ingresados por las personas usuarias, mejorando la experiencia de uso y previniendo errores.',
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default FormValidationDocs;
