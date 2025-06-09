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
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="exampleInputTexto"
                  name="campoTexto"
                  aria-describedby="Text"
                  aria-required="true"
                  placeholder="Texto"
                />
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
                  no más de 3 líneas.
                </p>
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
                  <span className="badge-forms badge-optional-forms">Opcional</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputNumber"
                  name="campoNumero"
                  aria-describedby="Text"
                  aria-required="true"
                  placeholder="Texto"
                />
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
                  no más de 3 líneas.
                </p>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_MAIL}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-label-container">
                  <label htmlFor="exampleInputEmail" className="form-label">
                    Label
                  </label>
                  <span className="badge-forms badge-required-forms">Requerido</span>
                </div>
                <input
                  type="email"
                  className="form-control is-invalid"
                  id="exampleInputEmail"
                  name="campoEmail"
                  aria-describedby="Email"
                  aria-required="true"
                  placeholder="Email@test.com"
                />
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
                  no más de 3 líneas.
                </p>
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
                  <label htmlFor="exampleInputDate" className="form-label">
                    Ejemplo campo de fecha
                  </label>
                  <span className="badge-forms badge-optional-forms">Opcional</span>
                </div>
                <input
                  type="date"
                  className="form-control is-valid"
                  id="exampleInputDate"
                  name="campoFecha"
                  aria-describedby="Date"
                  aria-required="true"
                  placeholder="selecciona tu fecha"
                />
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
                  no más de 3 líneas.
                </p>
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
                  <label htmlFor="exampleInputTextarea" className="form-label">
                    Ejemplo TextArea
                  </label>
                  <span className="badge-forms badge-required-forms">Requerido</span>
                  <span className="form-label-number">0/100</span>
                </div>
                <textarea
                  className="form-control is-invalid"
                  id="exampleInputTextarea"
                  name="campoTextarea"
                  aria-describedby="TextArea"
                  aria-required="true"
                ></textarea>
                <p className="form-label-description">
                  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de
                  no más de 3 líneas.
                </p>
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
                <div className="form-input-group" role="radiogroup" aria-labelledby="group-label" aria-required="true">
                  <div className="form-label-container">
                    <span id="group-label" className="form-label">
                      Ejemplo Radio Group
                    </span>
                    <span className="badge-forms badge-required-forms">Requerido</span>
                  </div>
                  <p className="form-label-description">
                    Este es un texto de ayuda que da más información sobre el Input. Es opcional, pero recomendado, y de
                    no más de 3 líneas.
                  </p>
                  <div className="form-radio">
                    <input
                      type="radio"
                      name="hobbieRadio"
                      value="etiqueta 1"
                      className="form-radio-input is-invalid"
                      id="radio_1"
                      required
                    />
                    <label className="form-radio-label" htmlFor="radio_1">
                      Leer
                    </label>
                  </div>
                  <div className="form-radio">
                    <input
                      type="radio"
                      name="hobbieRadio"
                      value="etiqueta 2"
                      className="form-radio-input is-invalid"
                      id="radio_2"
                      required
                    />
                    <label className="form-radio-label" htmlFor="radio_2">
                      Escuchar música
                    </label>
                  </div>

                  <div className="form-radio">
                    <input
                      type="radio"
                      name="hobbieRadio"
                      value="etiqueta 3"
                      className="form-radio-input is-invalid"
                      id="radio_3"
                      required
                    />
                    <label className="form-radio-label" htmlFor="radio_3">
                      Hacer deporte
                    </label>
                  </div>

                  <div className="invalid-feedback">
                    <p>Este es un mensaje de error para un campo inválido.</p>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={INPUT_VALIDATION_CHECKBOX_GROUP}>
            <div className="container">
              <div className="col-12 col-lg-6">
                <div className="form-input-group" role="checkboxgroup" aria-labelledby="group-label">
                  <div className="form-label-container">
                    <span id="group-label" className="form-label">
                      Ejemplo Checkbox Group
                    </span>
                    <span className="badge-forms badge-required-forms">Requerido</span>
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
                      id="checkbox_1"
                      value="checkbox_1"
                      defaultChecked={false}
                      required
                    />
                    <label className="form-checkbox-label" htmlFor="checkbox_1">
                      Etiqueta 1
                    </label>
                  </div>
                  <div className="form-checkbox">
                    <input
                      className="form-checkbox-input is-invalid"
                      type="checkbox"
                      name="exampleInputCheckboxGroup"
                      id="checkbox_2"
                      value="checkbox_2"
                      required
                    />
                    <label className="form-checkbox-label" htmlFor="checkbox_2">
                      Etiqueta 2
                    </label>
                  </div>
                  <div className="form-checkbox">
                    <input
                      className="form-checkbox-input is-invalid"
                      type="checkbox"
                      name="exampleInputCheckboxGroup"
                      id="checkbox_3"
                      value="checkbox_3"
                      required
                    />
                    <label className="form-checkbox-label" htmlFor="checkbox_3">
                      Etiqueta 3
                    </label>
                  </div>
                  <div className="invalid-feedback">
                    <p>Este es un mensaje de error para un campo inválido. </p>
                  </div>
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
